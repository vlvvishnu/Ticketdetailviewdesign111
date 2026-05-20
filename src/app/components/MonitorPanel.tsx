import { useState, useEffect } from 'react';
import { BarChart3, Filter, X, Search, Bell, Plus, Trash2, AlertTriangle } from 'lucide-react';
import { useTicketAlerts } from '@/app/contexts/TicketAlertContext';
import { toast } from 'sonner';

type TimePeriod = 'TODAY' | 'DAILY' | 'WEEKLY' | 'MONTHLY';

// Alert interface
interface Alert {
  id: number;
  metric: keyof Pick<PerformanceData, 'total' | 'inProgress' | 'completed' | 'failed' | 'terminated' | 'backlog'>;
  condition: '>=' | '<=' | '=' | '>' | '<';
  value: number;
  enabled: boolean;
  createdAt: string;
}

// Workflow categories mapping
const WORKFLOW_CATEGORIES = {
  'ELIGIBILITY': ['WELLSKY-ELIGIBILITY', 'WELLSKY-IMMAT'],
  'AUTHORIZATIONS': ['HCHB-AUTH'],
  'CLAIMS PROCESSING': ['HCHB-CLAIMS-TO-INVSTAR', 'MATRIX-BILLING-SYNC', '7NEED-EXTRACT'],
  'INTEGRATIONS': []
} as const;

type WorkflowCategory = keyof typeof WORKFLOW_CATEGORIES;

interface PerformanceData {
  tenant: string;
  workflow: string;
  workflowType: string;
  period: string;
  total: number;
  inProgress: number;
  completed: number;
  failed: number;
  terminated: number;
  backlog: number;
  history: number[];
}

const mockData: PerformanceData[] = [
  {
    tenant: 'Archcare',
    workflow: 'WELLSKY-ELIGIBILITY',
    workflowType: 'ELIGIBILITY',
    period: '20 Jan 2026',
    total: 500,
    inProgress: 4,
    completed: 450,
    failed: 40,
    terminated: 6,
    backlog: 10,
    history: [45, 52, 48, 55, 50, 58, 53, 60, 55, 62, 58, 70]
  },
  {
    tenant: 'Arden',
    workflow: 'HCHB-AUTH',
    workflowType: 'AUTHORIZATIONS',
    period: '20 Jan 2026',
    total: 160,
    inProgress: 1,
    completed: 144,
    failed: 12,
    terminated: 3,
    backlog: 5,
    history: [12, 15, 18, 20, 17, 22, 19, 24, 21, 26, 23, 28]
  },
  {
    tenant: 'Brightspring',
    workflow: 'HCHB-CLAIMS-TO-INVSTAR',
    workflowType: 'CLAIMS PROCESSING',
    period: '20 Jan 2026',
    total: 1066,
    inProgress: 10,
    completed: 960,
    failed: 80,
    terminated: 16,
    backlog: 20,
    history: [75, 82, 78, 88, 85, 95, 90, 98, 92, 102, 96, 108]
  },
  {
    tenant: 'Continuum',
    workflow: 'MATRIX-BILLING-SYNC',
    workflowType: 'CLAIMS PROCESSING',
    period: '20 Jan 2026',
    total: 1833,
    inProgress: 18,
    completed: 1650,
    failed: 140,
    terminated: 25,
    backlog: 30,
    history: [130, 142, 138, 152, 145, 160, 155, 168, 158, 175, 165, 182]
  },
  {
    tenant: 'Delta Care',
    workflow: 'WELLSKY-IMMAT',
    workflowType: 'ELIGIBILITY',
    period: '20 Jan 2026',
    total: 83,
    inProgress: 0,
    completed: 75,
    failed: 6,
    terminated: 2,
    backlog: 5,
    history: [5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12]
  },
  {
    tenant: 'Zelis Health',
    workflow: '7NEED-EXTRACT',
    workflowType: 'CLAIMS PROCESSING',
    period: '20 Jan 2026',
    total: 1400,
    inProgress: 13,
    completed: 1260,
    failed: 113,
    terminated: 14,
    backlog: 25,
    history: [95, 105, 100, 115, 108, 125, 118, 132, 122, 138, 128, 145]
  }
];

// Mini sparkline chart component
function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 50;
    const y = 16 - ((value - min) / range) * 14;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="50" height="16" className="inline-block">
      <polyline
        points={points}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((value, index) => {
        const x = (index / (data.length - 1)) * 50;
        const y = 16 - ((value - min) / range) * 14;
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="1"
            fill="#3b82f6"
          />
        );
      })}
    </svg>
  );
}

export function MonitorPanel({ subtasks = [], initialTab = 'performance', onClose }: { subtasks?: Array<{ id: string; name: string; status: string }>; initialTab?: 'performance' | 'affected-transaction'; onClose?: () => void }) {
  const [activeTab, setActiveTab] = useState<'performance' | 'affected-transaction'>(initialTab);
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('TODAY');
  const [sortColumn, setSortColumn] = useState<keyof PerformanceData | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Sync activeTab with initialTab when it changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  
  // Filter states
  const [tenantFilterOpen, setTenantFilterOpen] = useState(false);
  const [workflowFilterOpen, setWorkflowFilterOpen] = useState(false);
  const [tenantSearch, setTenantSearch] = useState('');
  const [workflowSearch, setWorkflowSearch] = useState('');
  
  // Alert states - local to monitor panel
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [newAlert, setNewAlert] = useState<{
    metric: Alert['metric'];
    condition: Alert['condition'];
    value: string;
  }>({
    metric: 'failed',
    condition: '>=',
    value: ''
  });
  
  // Map local alert IDs to context alert IDs for proper deletion
  const [alertIdMap, setAlertIdMap] = useState<Map<number, string>>(new Map());
  
  // Ticket alert context for adding to ticket
  const { addAlert: addTicketAlert, deleteAlert: deleteTicketAlert, scheduledToasters, addScheduledToaster, removeScheduledToaster, alerts: contextAlerts } = useTicketAlerts();
  
  // Sync local alerts with context alerts on mount and when context changes
  useEffect(() => {
    // Map context alerts to local alert format
    const newIdMap = new Map<number, string>();
    const localAlerts: Alert[] = contextAlerts
      .filter(a => a.state === 'active') // Only show active alerts
      .map(a => {
        const localId = parseInt(a.id.replace('alert-', '').split('-')[0]); // Extract timestamp from ID
        newIdMap.set(localId, a.id); // Store mapping from local ID to context ID
        return {
          id: localId,
          metric: a.metric as Alert['metric'],
          condition: a.condition,
          value: a.threshold,
          enabled: !a.addressed, // Alert is enabled if not addressed
          createdAt: a.createdAt
        };
      });
    
    setAlerts(localAlerts);
    setAlertIdMap(newIdMap);
  }, [contextAlerts]);

  // Clear alerts when ticket is reset (no subtasks)
  useEffect(() => {
    if (subtasks.length === 0) {
      setAlerts([]);
      setAlertIdMap(new Map());
    }
  }, [subtasks.length]);
  
  // Get unique tenants from data
  const allTenants = Array.from(new Set(mockData.map(d => d.tenant))).sort();
  
  // Get all workflow SKUs
  const allWorkflows = Array.from(new Set(mockData.map(d => d.workflow))).sort();
  
  // Filter selections - default to all selected
  const [selectedTenants, setSelectedTenants] = useState<Set<string>>(new Set(allTenants));
  const [selectedWorkflowCategories, setSelectedWorkflowCategories] = useState<Set<WorkflowCategory>>(
    new Set(Object.keys(WORKFLOW_CATEGORIES) as WorkflowCategory[])
  );
  const [selectedWorkflows, setSelectedWorkflows] = useState<Set<string>>(new Set(allWorkflows));

  // Handle sorting
  const handleSort = (column: keyof PerformanceData) => {
    if (sortColumn === column) {
      // Toggle direction if clicking the same column
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new column and default to descending
      setSortColumn(column);
      setSortDirection('desc');
    }
  };

  // Toggle tenant selection
  const toggleTenant = (tenant: string) => {
    const newSet = new Set(selectedTenants);
    if (newSet.has(tenant)) {
      newSet.delete(tenant);
    } else {
      newSet.add(tenant);
    }
    setSelectedTenants(newSet);
  };

  // Toggle all tenants
  const toggleAllTenants = () => {
    if (selectedTenants.size === allTenants.length) {
      setSelectedTenants(new Set());
    } else {
      setSelectedTenants(new Set(allTenants));
    }
  };

  // Toggle workflow category
  const toggleWorkflowCategory = (category: WorkflowCategory) => {
    const newCategories = new Set(selectedWorkflowCategories);
    const newWorkflows = new Set(selectedWorkflows);
    const categoryWorkflows = WORKFLOW_CATEGORIES[category];
    
    if (newCategories.has(category)) {
      // Remove category and all its workflows
      newCategories.delete(category);
      categoryWorkflows.forEach(wf => newWorkflows.delete(wf));
    } else {
      // Add category and all its workflows
      newCategories.add(category);
      categoryWorkflows.forEach(wf => newWorkflows.add(wf));
    }
    
    setSelectedWorkflowCategories(newCategories);
    setSelectedWorkflows(newWorkflows);
  };

  // Toggle individual workflow
  const toggleWorkflow = (workflow: string) => {
    const newSet = new Set(selectedWorkflows);
    if (newSet.has(workflow)) {
      newSet.delete(workflow);
      // Also uncheck the category if this workflow belonged to one
      for (const [category, workflows] of Object.entries(WORKFLOW_CATEGORIES)) {
        if (workflows.includes(workflow as any)) {
          const allCategorySelected = workflows.every(wf => wf === workflow || newSet.has(wf));
          if (!allCategorySelected) {
            const newCategories = new Set(selectedWorkflowCategories);
            newCategories.delete(category as WorkflowCategory);
            setSelectedWorkflowCategories(newCategories);
          }
        }
      }
    } else {
      newSet.add(workflow);
      // Check if all workflows in a category are now selected
      for (const [category, workflows] of Object.entries(WORKFLOW_CATEGORIES)) {
        if (workflows.includes(workflow as any)) {
          const allCategorySelected = workflows.every(wf => newSet.has(wf));
          if (allCategorySelected) {
            const newCategories = new Set(selectedWorkflowCategories);
            newCategories.add(category as WorkflowCategory);
            setSelectedWorkflowCategories(newCategories);
          }
        }
      }
    }
    setSelectedWorkflows(newSet);
  };

  // Toggle all workflows
  const toggleAllWorkflows = () => {
    if (selectedWorkflows.size === allWorkflows.length) {
      setSelectedWorkflows(new Set());
      setSelectedWorkflowCategories(new Set());
    } else {
      setSelectedWorkflows(new Set(allWorkflows));
      setSelectedWorkflowCategories(new Set(Object.keys(WORKFLOW_CATEGORIES) as WorkflowCategory[]));
    }
  };

  // Clear filters
  const clearTenantFilter = () => {
    setSelectedTenants(new Set(allTenants));
    setTenantSearch('');
  };

  const clearWorkflowFilter = () => {
    setSelectedWorkflows(new Set(allWorkflows));
    setSelectedWorkflowCategories(new Set(Object.keys(WORKFLOW_CATEGORIES) as WorkflowCategory[]));
    setWorkflowSearch('');
  };

  // Alert management functions
  const handleCreateAlert = () => {
    const valueNum = parseInt(newAlert.value);
    if (isNaN(valueNum) || valueNum < 0) {
      return;
    }

    const alert: Alert = {
      id: Date.now(),
      metric: newAlert.metric,
      condition: newAlert.condition,
      value: valueNum,
      enabled: true,
      createdAt: new Date().toLocaleString()
    };

    // Add to local monitor panel alerts
    setAlerts([...alerts, alert]);
    
    // Add to ticket alert context (this creates the entry in the subtask list)
    const ticketAlertId = addTicketAlert({
      metric: newAlert.metric,
      condition: newAlert.condition,
      threshold: valueNum
    });
    
    // Schedule 10-second delayed toaster notification
    if (ticketAlertId && !scheduledToasters.has(ticketAlertId)) {
      addScheduledToaster(ticketAlertId);
      
      setTimeout(() => {
        toast.success(
          `Alert created: ${getMetricLabel(newAlert.metric)} ${newAlert.condition} ${valueNum}`,
          {
            description: 'Alert has been added to the ticket',
            duration: 5000,
          }
        );
        removeScheduledToaster(ticketAlertId);
      }, 10000); // 10 seconds
    }
    
    // Map local alert ID to ticket alert ID for deletion
    setAlertIdMap(prevMap => new Map(prevMap).set(alert.id, ticketAlertId));
    
    setShowAlertModal(false);
    setNewAlert({ metric: 'failed', condition: '>=', value: '' });
  };

  const handleDeleteAlert = (id: number) => {
    const alertToDelete = alerts.find(a => a.id === id);
    setAlerts(alerts.filter(a => a.id !== id));
    
    // Mark as deleted in ticket context (doesn't remove, just marks as deleted)
    // Note: We need to map the local alert ID to the ticket alert ID
    // For now, we'll use the timestamp-based ID approach
    if (alertToDelete) {
      const ticketAlertId = alertIdMap.get(id);
      if (ticketAlertId) {
        deleteTicketAlert(ticketAlertId);
      }
    }
  };

  const handleToggleAlert = (id: number) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
    toast.success('Alert status updated successfully!');
  };

  const getMetricColor = (metric: Alert['metric']) => {
    const colors = {
      total: 'text-gray-600',
      inProgress: 'text-blue-600',
      completed: 'text-green-600',
      failed: 'text-red-600',
      terminated: 'text-gray-600',
      backlog: 'text-orange-600'
    };
    return colors[metric];
  };

  const getMetricLabel = (metric: Alert['metric']) => {
    const labels = {
      total: 'Total',
      inProgress: 'In Progress',
      completed: 'Completed',
      failed: 'Failed',
      terminated: 'Terminated',
      backlog: 'Backlog'
    };
    return labels[metric];
  };
  
  // Filter and sort data
  const filteredData = mockData.filter(row => {
    const tenantMatch = selectedTenants.has(row.tenant);
    const workflowMatch = selectedWorkflows.has(row.workflow);
    return tenantMatch && workflowMatch;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  // Filtered search results
  const filteredTenants = allTenants.filter(t => 
    t.toLowerCase().includes(tenantSearch.toLowerCase())
  );

  const filteredWorkflows = allWorkflows.filter(w => 
    w.toLowerCase().includes(workflowSearch.toLowerCase())
  );

  const filteredCategories = (Object.keys(WORKFLOW_CATEGORIES) as WorkflowCategory[]).filter(c =>
    c.toLowerCase().includes(workflowSearch.toLowerCase()) ||
    WORKFLOW_CATEGORIES[c].some(wf => wf.toLowerCase().includes(workflowSearch.toLowerCase()))
  );

  // Calculate summary stats from filtered data
  const summaryStats = {
    total: filteredData.reduce((sum, item) => sum + item.total, 0),
    inProgress: filteredData.reduce((sum, item) => sum + item.inProgress, 0),
    completed: filteredData.reduce((sum, item) => sum + item.completed, 0),
    failed: filteredData.reduce((sum, item) => sum + item.failed, 0),
    terminated: filteredData.reduce((sum, item) => sum + item.terminated, 0)
  };

  return (
    <div className="h-full flex flex-col bg-white border border-gray-300 rounded-l-lg rounded-r-none shadow-lg overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <BarChart3 className="size-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">{activeTab === 'performance' ? 'Performance Dashboard' : 'Affected Transactions'}</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                {activeTab === 'performance'
                  ? 'Performance metrics based on tenant and workflow from this ticket'
                  : 'Transactions that failed or were terminated'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {subtasks.length > 0 && activeTab === 'performance' && (
              <button
                onClick={() => setShowAlertModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm"
              >
                <Bell className="size-4" />
                <span className="text-sm font-medium">Set Alerts</span>
                {alerts.length > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-white text-blue-600 rounded-full text-xs font-bold">
                    {alerts.length}
                  </span>
                )}
              </button>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Close panel"
              >
                <X className="size-5 text-gray-500" />
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-3 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeTab === 'performance'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Performance
          </button>
          <button
            onClick={() => setActiveTab('affected-transaction')}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              activeTab === 'affected-transaction'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Affected Transaction
          </button>
        </div>
      </div>

      {/* Alert Modal */}
      {showAlertModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowAlertModal(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Bell className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Alert Management</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Configure threshold alerts for performance metrics</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAlertModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="size-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-160px)]">
              {/* Create New Alert Form */}
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-5 mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-4">Create New Alert</h4>
                <div className="grid grid-cols-3 gap-4">
                  {/* Metric Selection */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Metric</label>
                    <select
                      value={newAlert.metric}
                      onChange={(e) => setNewAlert({ ...newAlert, metric: e.target.value as Alert['metric'] })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="total">Total</option>
                      <option value="inProgress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="failed">Failed</option>
                      <option value="terminated">Terminated</option>
                      <option value="backlog">Backlog</option>
                    </select>
                  </div>

                  {/* Condition Selection */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Condition</label>
                    <select
                      value={newAlert.condition}
                      onChange={(e) => setNewAlert({ ...newAlert, condition: e.target.value as Alert['condition'] })}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value=">=">Greater than or equal (≥)</option>
                      <option value="<=">Less than or equal (≤)</option>
                      <option value=">">Greater than (&gt;)</option>
                      <option value="<">Less than (&lt;)</option>
                      <option value="=">Equal to (=)</option>
                    </select>
                  </div>

                  {/* Value Input */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">Threshold Value</label>
                    <input
                      type="number"
                      min="0"
                      value={newAlert.value}
                      onChange={(e) => setNewAlert({ ...newAlert, value: e.target.value })}
                      placeholder="Enter value"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-gray-600">
                    Alert will trigger when <span className="font-semibold">{getMetricLabel(newAlert.metric)}</span> {newAlert.condition} <span className="font-semibold">{newAlert.value || '_'}</span>
                  </p>
                  <button
                    onClick={handleCreateAlert}
                    disabled={!newAlert.value}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm text-sm font-medium"
                  >
                    <Plus className="size-4" />
                    Create Alert
                  </button>
                </div>
              </div>

              {/* Existing Alerts List */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Active Alerts ({alerts.filter(a => a.enabled).length}/{alerts.length})
                </h4>
                {alerts.length === 0 ? (
                  <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
                    <Bell className="size-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">No alerts configured yet</p>
                    <p className="text-xs text-gray-500 mt-1">Create your first alert to get notified about metric changes</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                          alert.enabled
                            ? 'bg-white border-orange-200 shadow-sm'
                            : 'bg-gray-50 border-gray-200 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${alert.enabled ? 'bg-orange-100' : 'bg-gray-200'}`}>
                            <Bell className={`size-4 ${alert.enabled ? 'text-orange-600' : 'text-gray-500'}`} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-semibold ${getMetricColor(alert.metric)}`}>
                                {getMetricLabel(alert.metric)}
                              </span>
                              <span className="text-sm text-gray-600">{alert.condition}</span>
                              <span className="text-sm font-bold text-gray-900">{alert.value}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Created: {alert.createdAt}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleToggleAlert(alert.id)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                              alert.enabled
                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                          >
                            {alert.enabled ? 'Enabled' : 'Disabled'}
                          </button>
                          <button
                            onClick={() => handleDeleteAlert(alert.id)}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                          >
                            <Trash2 className="size-4 text-gray-400 group-hover:text-red-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowAlertModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content */}
      {activeTab === 'performance' ? (
        <>
          {/* Summary Stats - KPI Row */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-5 gap-3">
          {/* Total */}
          <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Total</div>
            <div className="text-2xl font-bold text-gray-900">{summaryStats.total.toLocaleString()}</div>
            <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gray-400 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>

          {/* In Progress */}
          <div className="bg-white rounded-lg p-3 border border-blue-200 shadow-sm">
            <div className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">In Progress</div>
            <div className="text-2xl font-bold text-blue-700">{summaryStats.inProgress}</div>
            <div className="mt-2 h-1 bg-blue-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(summaryStats.inProgress / summaryStats.total) * 100}%` }} />
            </div>
          </div>

          {/* Completed */}
          <div className="bg-white rounded-lg p-3 border border-green-200 shadow-sm">
            <div className="text-xs font-medium text-green-600 uppercase tracking-wider mb-1">Completed</div>
            <div className="text-2xl font-bold text-green-700">{summaryStats.completed.toLocaleString()}</div>
            <div className="mt-2 h-1 bg-green-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${(summaryStats.completed / summaryStats.total) * 100}%` }} />
            </div>
          </div>

          {/* Failed */}
          <div className="bg-white rounded-lg p-3 border border-red-200 shadow-sm">
            <div className="text-xs font-medium text-red-600 uppercase tracking-wider mb-1">Failed</div>
            <div className="text-2xl font-bold text-red-700">{summaryStats.failed}</div>
            <div className="mt-2 h-1 bg-red-100 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: `${(summaryStats.failed / summaryStats.total) * 100}%` }} />
            </div>
          </div>

          {/* Terminated */}
          <div className="bg-white rounded-lg p-3 border border-gray-300 shadow-sm">
            <div className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-1">Terminated</div>
            <div className="text-2xl font-bold text-gray-900">{summaryStats.terminated}</div>
            <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gray-500 rounded-full" style={{ width: `${(summaryStats.terminated / summaryStats.total) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="flex-1 overflow-auto scrollbar-thin">
        <div className="px-6 py-4">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="border-b-2 border-gray-300">
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <div className="flex items-center gap-2 relative">
                    <span>Tenant</span>
                    <button
                      onClick={() => setTenantFilterOpen(!tenantFilterOpen)}
                      className={`p-0.5 rounded hover:bg-gray-200 transition-colors ${
                        selectedTenants.size < allTenants.length ? 'text-blue-600' : 'text-gray-400'
                      }`}
                    >
                      <Filter className="w-3 h-3" />
                    </button>
                    
                    {/* Tenant Filter Dropdown */}
                    {tenantFilterOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-300 rounded-lg shadow-xl z-50">
                        <div className="p-3 border-b border-gray-200">
                          <div className="relative">
                            <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Search tenants..."
                              value={tenantSearch}
                              onChange={(e) => setTenantSearch(e.target.value)}
                              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        
                        <div className="max-h-64 overflow-y-auto scrollbar-thin p-2">
                          {/* Select All */}
                          <label className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedTenants.size === allTenants.length}
                              onChange={toggleAllTenants}
                              className="w-4 h-4 rounded border-gray-300"
                            />
                            <span className="text-sm font-medium text-gray-900">Select All</span>
                          </label>
                          
                          <div className="my-1 border-t border-gray-200" />
                          
                          {/* Individual Tenants */}
                          {filteredTenants.map((tenant) => (
                            <label key={tenant} className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedTenants.has(tenant)}
                                onChange={() => toggleTenant(tenant)}
                                className="w-4 h-4 rounded border-gray-300"
                              />
                              <span className="text-sm text-gray-700">{tenant}</span>
                            </label>
                          ))}
                        </div>
                        
                        <div className="p-3 border-t border-gray-200 flex items-center justify-end gap-2">
                          <button
                            onClick={clearTenantFilter}
                            className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors whitespace-nowrap"
                          >
                            Clear
                          </button>
                          <button
                            onClick={() => setTenantFilterOpen(false)}
                            className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors whitespace-nowrap"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <div className="flex items-center gap-2 relative">
                    <span>Workflow</span>
                    <button
                      onClick={() => setWorkflowFilterOpen(!workflowFilterOpen)}
                      className={`p-0.5 rounded hover:bg-gray-200 transition-colors ${
                        selectedWorkflows.size < allWorkflows.length ? 'text-blue-600' : 'text-gray-400'
                      }`}
                    >
                      <Filter className="w-3 h-3" />
                    </button>
                    
                    {/* Workflow Filter Dropdown */}
                    {workflowFilterOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-xl z-50">
                        <div className="p-3 border-b border-gray-200">
                          <div className="relative">
                            <Search className="w-4 h-4 absolute left-2 top-2.5 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Search workflows and categories..."
                              value={workflowSearch}
                              onChange={(e) => setWorkflowSearch(e.target.value)}
                              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        
                        <div className="max-h-80 overflow-y-auto scrollbar-thin p-2">
                          {/* Select All */}
                          <label className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedWorkflows.size === allWorkflows.length}
                              onChange={toggleAllWorkflows}
                              className="w-4 h-4 rounded border-gray-300"
                            />
                            <span className="text-sm font-medium text-gray-900">Select All</span>
                          </label>
                          
                          <div className="my-1 border-t border-gray-200" />
                          
                          {/* Workflow Categories */}
                          {filteredCategories.map((category) => {
                            const categoryWorkflows = WORKFLOW_CATEGORIES[category];
                            const visibleWorkflows = categoryWorkflows.filter(wf => 
                              wf.toLowerCase().includes(workflowSearch.toLowerCase())
                            );
                            
                            if (visibleWorkflows.length === 0 && workflowSearch) return null;
                            
                            return (
                              <div key={category} className="mb-2">
                                {/* Category Checkbox */}
                                <label className="flex items-center gap-2 px-2 py-1.5 hover:bg-blue-50 rounded cursor-pointer bg-gray-50">
                                  <input
                                    type="checkbox"
                                    checked={selectedWorkflowCategories.has(category)}
                                    onChange={() => toggleWorkflowCategory(category)}
                                    className="w-4 h-4 rounded border-gray-300"
                                  />
                                  <span className="text-sm font-semibold text-gray-900">{category}</span>
                                  <span className="text-xs text-gray-500 ml-auto">({categoryWorkflows.length})</span>
                                </label>
                                
                                {/* Individual Workflow SKUs */}
                                <div className="ml-6 mt-1 space-y-0.5">
                                  {categoryWorkflows.filter(wf => 
                                    wf.toLowerCase().includes(workflowSearch.toLowerCase())
                                  ).map((workflow) => (
                                    <label key={workflow} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer">
                                      <input
                                        type="checkbox"
                                        checked={selectedWorkflows.has(workflow)}
                                        onChange={() => toggleWorkflow(workflow)}
                                        className="w-3.5 h-3.5 rounded border-gray-300"
                                      />
                                      <span className="text-xs text-gray-700">{workflow}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <div className="p-3 border-t border-gray-200 flex items-center justify-end gap-2">
                          <button
                            onClick={clearWorkflowFilter}
                            className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors whitespace-nowrap"
                          >
                            Clear
                          </button>
                          <button
                            onClick={() => setWorkflowFilterOpen(false)}
                            className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors whitespace-nowrap"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Period</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <button 
                    onClick={() => handleSort('total')}
                    className="flex items-center gap-2 ml-auto hover:text-gray-900 transition-colors"
                  >
                    <span>Total</span>
                    <svg className={`w-3 h-3 transition-colors ${sortColumn === 'total' ? 'text-gray-900' : 'text-gray-400'}`} fill="none" viewBox="0 0 12 12">
                      {sortColumn === 'total' ? (
                        sortDirection === 'asc' ? (
                          <path d="M6 3l3 3H3l3-3z" fill="currentColor" />
                        ) : (
                          <path d="M6 9l3-3H3l3 3z" fill="currentColor" />
                        )
                      ) : (
                        <path d="M3 5l3-3 3 3M9 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      )}
                    </svg>
                  </button>
                </th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  <button 
                    onClick={() => handleSort('inProgress')}
                    className="flex items-center gap-2 ml-auto hover:text-blue-800 transition-colors"
                  >
                    <span>In Progress</span>
                    <svg className={`w-3 h-3 transition-colors ${sortColumn === 'inProgress' ? 'text-blue-800' : 'text-blue-400'}`} fill="none" viewBox="0 0 12 12">
                      {sortColumn === 'inProgress' ? (
                        sortDirection === 'asc' ? (
                          <path d="M6 3l3 3H3l3-3z" fill="currentColor" />
                        ) : (
                          <path d="M6 9l3-3H3l3 3z" fill="currentColor" />
                        )
                      ) : (
                        <path d="M3 5l3-3 3 3M9 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      )}
                    </svg>
                  </button>
                </th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-green-600 uppercase tracking-wider">
                  <button 
                    onClick={() => handleSort('completed')}
                    className="flex items-center gap-2 ml-auto hover:text-green-800 transition-colors"
                  >
                    <span>Completed</span>
                    <svg className={`w-3 h-3 transition-colors ${sortColumn === 'completed' ? 'text-green-800' : 'text-green-400'}`} fill="none" viewBox="0 0 12 12">
                      {sortColumn === 'completed' ? (
                        sortDirection === 'asc' ? (
                          <path d="M6 3l3 3H3l3-3z" fill="currentColor" />
                        ) : (
                          <path d="M6 9l3-3H3l3 3z" fill="currentColor" />
                        )
                      ) : (
                        <path d="M3 5l3-3 3 3M9 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      )}
                    </svg>
                  </button>
                </th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-red-600 uppercase tracking-wider">
                  <button 
                    onClick={() => handleSort('failed')}
                    className="flex items-center gap-2 ml-auto hover:text-red-800 transition-colors"
                  >
                    <span>Failed</span>
                    <svg className={`w-3 h-3 transition-colors ${sortColumn === 'failed' ? 'text-red-800' : 'text-red-400'}`} fill="none" viewBox="0 0 12 12">
                      {sortColumn === 'failed' ? (
                        sortDirection === 'asc' ? (
                          <path d="M6 3l3 3H3l3-3z" fill="currentColor" />
                        ) : (
                          <path d="M6 9l3-3H3l3 3z" fill="currentColor" />
                        )
                      ) : (
                        <path d="M3 5l3-3 3 3M9 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      )}
                    </svg>
                  </button>
                </th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <button 
                    onClick={() => handleSort('terminated')}
                    className="flex items-center gap-2 ml-auto hover:text-gray-900 transition-colors"
                  >
                    <span>Terminated</span>
                    <svg className={`w-3 h-3 transition-colors ${sortColumn === 'terminated' ? 'text-gray-900' : 'text-gray-400'}`} fill="none" viewBox="0 0 12 12">
                      {sortColumn === 'terminated' ? (
                        sortDirection === 'asc' ? (
                          <path d="M6 3l3 3H3l3-3z" fill="currentColor" />
                        ) : (
                          <path d="M6 9l3-3H3l3 3z" fill="currentColor" />
                        )
                      ) : (
                        <path d="M3 5l3-3 3 3M9 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      )}
                    </svg>
                  </button>
                </th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  <button 
                    onClick={() => handleSort('backlog')}
                    className="flex items-center gap-2 ml-auto hover:text-orange-800 transition-colors"
                  >
                    <span>Backlog</span>
                    <svg className={`w-3 h-3 transition-colors ${sortColumn === 'backlog' ? 'text-orange-800' : 'text-orange-400'}`} fill="none" viewBox="0 0 12 12">
                      {sortColumn === 'backlog' ? (
                        sortDirection === 'asc' ? (
                          <path d="M6 3l3 3H3l3-3z" fill="currentColor" />
                        ) : (
                          <path d="M6 9l3-3H3l3 3z" fill="currentColor" />
                        )
                      ) : (
                        <path d="M3 5l3-3 3 3M9 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      )}
                    </svg>
                  </button>
                </th>
                <th className="px-3 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">History (7d)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sortedData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-4">
                    <div className="font-medium text-sm text-gray-900">{row.tenant}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm font-medium text-blue-700">{row.workflow}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{row.workflowType}</div>
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-600">{row.period}</td>
                  <td className="px-3 py-4 text-right">
                    <span className="text-sm font-semibold text-gray-900">{row.total.toLocaleString()}</span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-sm font-medium text-blue-700">
                      {row.inProgress}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-sm font-medium text-green-700">
                      {row.completed.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-50 text-sm font-medium text-red-700">
                      {row.failed}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-sm font-medium text-gray-700">
                      {row.terminated}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-orange-50 text-sm font-medium text-orange-700">
                      {row.backlog}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Sparkline data={row.history} />
                      <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        7D
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-center">
            <p className="text-xs text-gray-500">LIVE ANALYTICS ENGINE v2.0 • UPDATED AT 14:23 UTC</p>
          </div>
        </>
      ) : (
        /* Affected Transaction Table */
        <AffectedTransactionTable />
      )}
    </div>
  );
}

// Affected Transaction Table Component
export function AffectedTransactionTable() {
  // Mock data related to Brightstar Care / Eligibility Verification / Homehealth
  const affectedTransactions = [
    {
      id: 'TXN-001',
      mrNumber: 'MR-20451',
      patientName: 'Sarah Johnson',
      status: 'Terminated',
      datadogLink: 'https://app.datadoghq.com/logs/20451',
      recordingLink: 'https://recordings.example.com/session-20451',
      probableReason: 'Eligibility verification failed - No active coverage found'
    },
    {
      id: 'TXN-002',
      mrNumber: 'MR-20452',
      patientName: 'Michael Chen',
      status: 'Failed',
      datadogLink: 'https://app.datadoghq.com/logs/20452',
      recordingLink: undefined,
      probableReason: 'Homehealth authorization timeout - Payer portal unavailable'
    },
    {
      id: 'TXN-003',
      mrNumber: 'MR-20453',
      patientName: 'Jennifer Williams',
      status: 'Terminated',
      datadogLink: undefined,
      recordingLink: 'https://recordings.example.com/session-20453',
      probableReason: 'Patient not found in Brightstar Care system'
    },
    {
      id: 'TXN-004',
      mrNumber: 'MR-20454',
      patientName: 'Robert Martinez',
      status: 'Failed',
      datadogLink: 'https://app.datadoghq.com/logs/20454',
      recordingLink: 'https://recordings.example.com/session-20454',
      probableReason: 'Eligibility check - Insurance provider network error'
    },
    {
      id: 'TXN-005',
      mrNumber: 'MR-20455',
      patientName: 'Lisa Anderson',
      status: 'Needs Intervention',
      datadogLink: 'https://app.datadoghq.com/logs/20455',
      recordingLink: 'https://recordings.example.com/session-20455',
      probableReason: 'Homehealth benefit exhausted - Manual review required'
    },
    {
      id: 'TXN-006',
      mrNumber: 'MR-20456',
      patientName: 'David Thompson',
      status: 'Terminated',
      datadogLink: undefined,
      recordingLink: 'https://recordings.example.com/session-20456',
      probableReason: 'Eligibility verification - Policy terminated by payer'
    },
    {
      id: 'TXN-007',
      mrNumber: 'MR-20457',
      patientName: 'Maria Garcia',
      status: 'Failed',
      datadogLink: 'https://app.datadoghq.com/logs/20457',
      recordingLink: undefined,
      probableReason: 'Brightstar Care tenant connection timeout'
    },
    {
      id: 'TXN-008',
      mrNumber: 'MR-20458',
      patientName: 'James Wilson',
      status: 'Terminated',
      datadogLink: 'https://app.datadoghq.com/logs/20458',
      recordingLink: 'https://recordings.example.com/session-20458',
      probableReason: 'Homehealth workflow - Missing required authorization fields'
    },
    {
      id: 'TXN-009',
      mrNumber: 'MR-20459',
      patientName: 'Patricia Brown',
      status: 'Failed',
      datadogLink: undefined,
      recordingLink: 'https://recordings.example.com/session-20459',
      probableReason: 'Eligibility check failed - Payer system maintenance'
    },
    {
      id: 'TXN-010',
      mrNumber: 'MR-20460',
      patientName: 'Christopher Lee',
      status: 'Terminated',
      datadogLink: 'https://app.datadoghq.com/logs/20460',
      recordingLink: 'https://recordings.example.com/session-20460',
      probableReason: 'Brightstar Care - Duplicate patient record detected'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terminated':
        return { bg: '#fff7e6', text: '#fa8c16', border: '#ffd591' };
      case 'Failed':
        return { bg: '#fff1f0', text: '#ff4d4f', border: '#ffccc7' };
      case 'Needs Intervention':
        return { bg: '#e6f7ff', text: '#1890ff', border: '#91d5ff' };
      default:
        return { bg: '#f5f5f5', text: '#595959', border: '#d9d9d9' };
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <tr>
                <th className="px-4 py-3 text-left w-12">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-[#d1d5db] text-[#354eb4] focus:ring-[#354eb4] focus:ring-offset-0"
                  />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider font-['Roboto']">
                  Transaction ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider font-['Roboto']">
                  MR Number
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider font-['Roboto']">
                  Patient Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider font-['Roboto']">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider font-['Roboto']">
                  Datadog Link
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider font-['Roboto']">
                  Recording Link
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider font-['Roboto']">
                  Probable Reason / Error for Failure
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {affectedTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-[#f9fafb] transition-colors"
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="size-4 rounded border-[#d1d5db] text-[#354eb4] focus:ring-[#354eb4] focus:ring-offset-0"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-[#111827] font-['Roboto']">
                    {transaction.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#2563eb] font-medium font-['Roboto']">
                    {transaction.mrNumber}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#111827] font-['Roboto']">
                    {transaction.patientName}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="inline-flex px-2 py-0.5 text-xs font-medium rounded border font-['Roboto']"
                      style={{
                        backgroundColor: getStatusColor(transaction.status).bg,
                        color: getStatusColor(transaction.status).text,
                        borderColor: getStatusColor(transaction.status).border
                      }}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap font-['Roboto']">
                    {transaction.datadogLink ? (
                      <a href={transaction.datadogLink} target="_blank" rel="noreferrer" className="text-[#2563eb] underline hover:text-[#1d4ed8]">
                        View
                      </a>
                    ) : (
                      <span className="text-[#9ca3af]">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap font-['Roboto']">
                    {transaction.recordingLink ? (
                      <a href={transaction.recordingLink} target="_blank" rel="noreferrer" className="text-[#2563eb] underline hover:text-[#1d4ed8]">
                        View Recording
                      </a>
                    ) : (
                      <span className="text-[#9ca3af]">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#374151] font-['Roboto']">
                    {transaction.probableReason}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}