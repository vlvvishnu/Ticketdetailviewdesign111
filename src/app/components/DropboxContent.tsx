import { useState, useEffect } from 'react';
import { X, Plus } from 'lucide-react';
import { WorkflowSelectionPopup } from './WorkflowSelectionPopup';
import { CheckCircle } from 'lucide-react';
import { TriggerConfigModal } from './TriggerConfigModal';
import { useSubtaskData } from '@/app/hooks/useSubtaskData';
import { WorkflowInstancesTable, WorkflowInstance } from './WorkflowInstancesTable';
import { TerminateWorkflowModal, WorkflowInstance as ModalWorkflowInstance } from './TerminateWorkflowModal';
import { TriggerWorkflowModal, TriggeredInstance } from './TriggerWorkflowModal';
import { WorkflowsTable } from './WorkflowsTable';
import { TriggeredWorkflowInstancesTable, TriggeredWorkflow } from './TriggeredWorkflowInstancesTable';
import { useActivity } from '@/app/contexts/ActivityContext';
import { ContextBanner } from './ContextBanner';

interface DropboxContentProps {
  subtaskTitle: string;
  subtaskId: string;
  onEnableTrigger?: (count: number) => void;
  onDisableTrigger?: (count: number) => void;
  onMarkCompleted?: (subtaskId: string, isCompleted: boolean) => void;
  isCompleted?: boolean;
  onTerminate?: (count: number) => void;
  onReTrigger?: (count: number) => void;
  pendingInstances?: ModalWorkflowInstance[];
  onPendingInstancesConsumed?: () => void;
}

interface Workflow {
  id: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  variantVersion: string;
  schedule: string;
  inputTag: string;
  status: 'Enabled' | 'Disabled';
  message: string;
}

// Default workflow instances data from Figma - shown initially
const defaultWorkflowInstances: WorkflowInstance[] = [
  {
    id: '1',
    instanceId: 'Runinstance 1',
    tenant: 'ASHN',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V1',
    workflowVersion: '1.0.3',
    scheduledStartTime: '2024-12-01 06:00',
    actualStartTime: '2024-12-01 06:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Message here..'
  },
  {
    id: '2',
    instanceId: 'Runinstance 2',
    tenant: 'ASHN',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V2-beta',
    workflowVersion: '2.1.0',
    scheduledStartTime: '2024-12-02 13:00',
    actualStartTime: '2024-12-02 13:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Hover here to see the tool tip..'
  },
  {
    id: '3',
    instanceId: 'Runinstance 3',
    tenant: 'ASHN',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V2-beta',
    workflowVersion: '2.1.0',
    scheduledStartTime: '2024-12-03 14:00',
    actualStartTime: '2024-12-03 14:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Message here..'
  },
  {
    id: '4',
    instanceId: 'Runinstance 4',
    tenant: 'Amedsys',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V2-beta',
    workflowVersion: '2.1.0',
    scheduledStartTime: '2024-12-04 11:00',
    actualStartTime: '2024-12-04 11:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Message here..'
  },
  {
    id: '5',
    instanceId: 'Runinstance 5',
    tenant: 'Amedsys',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V2-beta',
    workflowVersion: '2.1.0',
    scheduledStartTime: '2024-12-05 09:00',
    actualStartTime: '2024-12-05 09:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Message here..'
  },
  {
    id: '6',
    instanceId: 'Runinstance 6',
    tenant: 'Elara',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V2-beta',
    workflowVersion: '2.1.0',
    scheduledStartTime: '2024-12-06 17:00',
    actualStartTime: '2024-12-06 17:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Message here..'
  },
  {
    id: '7',
    instanceId: 'Runinstance 7',
    tenant: 'Medstar',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V2-beta',
    workflowVersion: '2.1.0',
    scheduledStartTime: '2024-12-07 18:00',
    actualStartTime: '2024-12-07 18:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Message here..'
  },
  {
    id: '8',
    instanceId: 'Runinstance 8',
    tenant: 'Medstar',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V2-beta',
    workflowVersion: '2.1.0',
    scheduledStartTime: '2024-12-08 03:00',
    actualStartTime: '2024-12-08 03:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Message here..'
  },
  {
    id: '9',
    instanceId: 'Runinstance 9',
    tenant: 'Medstar',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V2-beta',
    workflowVersion: '2.1.0',
    scheduledStartTime: '2024-12-09 16:00',
    actualStartTime: '2024-12-09 16:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Message here..'
  },
  {
    id: '10',
    instanceId: 'Runinstance 10',
    tenant: 'Medstar',
    workflow: 'Eligibility Verification',
    workflowVariant: 'V2-beta',
    workflowVersion: '2.1.0',
    scheduledStartTime: '2024-12-10 02:00',
    actualStartTime: '2024-12-10 02:00',
    endTime: '2024-',
    status: 'Running Now',
    message: 'Message comes here..'
  }
];

export function DropboxContent({ subtaskTitle, subtaskId, onEnableTrigger, onDisableTrigger, onMarkCompleted, isCompleted, onTerminate, onReTrigger, pendingInstances, onPendingInstancesConsumed }: DropboxContentProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>('');
  const [selectedTenant, setSelectedTenant] = useState<string>('');
  const { addActivity } = useActivity();
  
  // Use persisted data for this specific subtask instance
  const [addedWorkflows, setAddedWorkflows] = useSubtaskData<Workflow[]>(subtaskId, []);
  const [workflowInstances, setWorkflowInstances] = useSubtaskData<WorkflowInstance[]>(`${subtaskId}-instances`, []);

  // When instances are pushed in from an external modal (e.g. context banner flow),
  // save them into the persisted store and clear the pending prop.
  useEffect(() => {
    if (pendingInstances && pendingInstances.length > 0) {
      handleAddWorkflowInstances(pendingInstances);
      onPendingInstancesConsumed?.();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingInstances]);

  // Helper to get base type (remove instance suffix like -1, -2, etc.)
  const getBaseType = (id: string) => id.replace(/-\d+$/, '');
  const baseSubtaskId = getBaseType(subtaskId);

  // Get appropriate text based on subtask type
  const getDropboxText = () => {
    if (baseSubtaskId === 'terminate-workflow' || baseSubtaskId === 'disable-trigger') {
      return 'Click here to use the form below to specify the workflows you want to enable/disable';
    } else if (baseSubtaskId === 'pause-fb-work') {
      return 'Click here to select workers to pause/resume';
    } else if (baseSubtaskId === 'credential-management') {
      return 'Click here to request credentials for troubleshooting';
    } else if (baseSubtaskId === 'deploy-change') {
      return 'Click here to deploy changes to production';
    } else if (baseSubtaskId === 'state-management') {
      return 'Click here to manage state table reprocessing';
    } else if (baseSubtaskId === 'trigger-workflow') {
      return 'Click here to manually trigger workflow';
    }
    return 'Click here to configure';
  };

  const workflows = [
    'Amedisys_authorization_workflow',
    'Kindred_authentication_workflow', 
    'Encompass_data_sync_workflow',
    'Homecare_credential_workflow'
  ];

  const tenants = [
    'Amedisys Home Health',
    'Kindred Healthcare',
    'Encompass Health',
    'Homecare Homebase'
  ];

  const handleAddWorkflows = (selectedResults: any[]) => {
    const messages = [
      'Workflow executed successfully',
      'Error: Timeout during execution',
      'Completed with warnings',
      'Processing in progress'
    ];
    
    const newWorkflows: Workflow[] = selectedResults.map((result, index) => ({
      id: result.id,
      tenant: result.tenant,
      workflow: result.workflow,
      workflowVariant: result.workflowVariant,
      variantVersion: result.variantVersion,
      schedule: result.schedule,
      inputTag: result.inputTag,
      status: 'Enabled' as 'Enabled' | 'Disabled',
      message: messages[index % messages.length]
    }));
    
    setAddedWorkflows(newWorkflows);
  };

  const handleRemoveWorkflows = (ids: string[]) => {
    setAddedWorkflows(addedWorkflows.filter(w => !ids.includes(w.id)));
  };

  const handleWorkflowsChange = (updatedWorkflows: Workflow[]) => {
    setAddedWorkflows(updatedWorkflows);
  };

  const handleModifyTicket = () => {
    setIsPopupOpen(true);
  };

  const handleAddWorkflowInstances = (instances: ModalWorkflowInstance[]) => {
    // Convert from modal format to table format
    const converted: WorkflowInstance[] = instances.map((inst, index) => ({
      id: inst.id,
      instanceId: inst.instanceId,
      tenant: inst.tenant,
      workflow: inst.workflow,
      workflowVariant: `V${inst.variant}`,
      workflowVersion: `${inst.variant}.0`,
      scheduledStartTime: inst.startedAt,
      actualStartTime: inst.startedAt,
      endTime: '2024-',
      status: 'Running Now',
      message: 'Message here..'
    }));
    
    setWorkflowInstances(converted);
  };

  const handleRemoveWorkflowInstances = (ids: string[]) => {
    setWorkflowInstances(workflowInstances.filter(w => !ids.includes(w.id)));
  };

  const handleInstancesChange = (updatedInstances: WorkflowInstance[]) => {
    setWorkflowInstances(updatedInstances);
  };

  const handleTriggeredWorkflows = (triggered: TriggeredInstance[]) => {
    // Convert from triggered format to workflow format for the table
    // Initialize all workflows with 'Disabled' status (Run Invocation Failed)
    const converted: Workflow[] = triggered.map((inst) => ({
      id: inst.id,
      tenant: inst.tenant,
      workflow: inst.workflow,
      workflowVariant: inst.workflowVariant,
      variantVersion: inst.variantVersion,
      schedule: 'Manual Trigger',
      inputTag: inst.configName,
      status: 'Disabled' as 'Enabled' | 'Disabled', // Start with Disabled status
      message: inst.message
    }));
    
    setAddedWorkflows(converted);
  };

  // Handler for activity recording
  const handleActivityAdd = (action: string, count: number) => {
    addActivity(action, count);
  };

  return (
    <div className="bg-white h-full min-h-0 flex flex-col rounded-[14px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Completion Banner - shown when completed */}
      {isCompleted && (
        <div className="bg-green-50 border-b border-green-200 px-6 py-3 flex items-center gap-2 flex-shrink-0">
          <CheckCircle className="w-4 h-4 text-green-600 fill-green-600" />
          <span className="text-sm font-medium text-green-700">This subtask is completed and locked. No further changes can be made.</span>
        </div>
      )}
      
      {/* Header Section */}
      <div className="flex-shrink-0 px-6 py-5 border-b border-gray-200 flex items-center justify-between" style={{ backgroundImage: "linear-gradient(175.185deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 100%" }}>
        <div>
          <h2 className="text-lg font-bold text-[#333333] mb-1">{subtaskTitle}</h2>
          <p className="text-sm text-[#4a5565]">Task Description will come here - a small description</p>
        </div>
        {isCompleted ? (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-4 h-4 fill-green-600" />
            <span className="text-sm font-medium">Completed</span>
          </div>
        ) : (
          <button 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors" 
            onClick={() => onMarkCompleted?.(subtaskId, true)}
          >
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Mark as Completed</span>
          </button>
        )}
      </div>

      {/* Content Area - Show either Dropbox or Table */}
      <div className="flex-1 min-h-0 flex flex-col">
        {baseSubtaskId === 'terminate-workflow' && workflowInstances.length > 0 ? (
          /* Workflow Instances Table */
          <div className="flex-1 min-h-0 overflow-auto p-6">
            <WorkflowInstancesTable 
              instances={workflowInstances}
              onRemove={handleRemoveWorkflowInstances}
              isCompleted={isCompleted}
              onInstancesChange={handleInstancesChange}
              onTerminate={onTerminate}
              onReTrigger={onReTrigger}
            />
          </div>
        ) : baseSubtaskId === 'trigger-workflow' && addedWorkflows.length > 0 ? (
          /* Triggered Workflow Instances Table */
          <div className="flex-1 min-h-0 overflow-auto p-6">
            <TriggeredWorkflowInstancesTable 
              workflows={addedWorkflows}
              onModifyTicket={handleModifyTicket}
              onTrigger={() => {}} // Dummy function to enable trigger button
              onWorkflowsChange={handleWorkflowsChange}
              onActivityAdd={handleActivityAdd}
            />
          </div>
        ) : baseSubtaskId === 'disable-trigger' && addedWorkflows.length > 0 ? (
          /* Workflows Table */
          <div className="flex-1 min-h-0 overflow-hidden p-6">
            <WorkflowsTable 
              workflows={addedWorkflows}
              onRemove={handleRemoveWorkflows}
              onModify={handleModifyTicket}
              showMonitor={baseSubtaskId !== 'disable-trigger'}
              onEnableTrigger={onEnableTrigger}
              onDisableTrigger={onDisableTrigger}
              isCompleted={isCompleted}
              onWorkflowsChange={handleWorkflowsChange}
            />
          </div>
        ) : (
          /* Dropbox Area */
          <div className="p-6 flex flex-col gap-4">
            {/* Context Banner */}
            <ContextBanner
              chips={[
                { label: 'Tenant', value: 'Brightstar Care' },
                { label: 'Workflow', value: 'Eligibility Verification' },
                { label: 'Variant', value: 'Homehealth' }
              ]}
              onClick={() => !isCompleted && setIsPopupOpen(true)}
            />

            {/* Dropbox Button */}
            <button
              onClick={() => !isCompleted && setIsPopupOpen(true)}
              disabled={isCompleted}
              className={`w-full h-[132px] border-dashed rounded-[3px] transition-all flex items-center justify-center ${
                isCompleted
                  ? 'bg-gray-50 border-gray-200 cursor-not-allowed'
                  : 'bg-[#eef6ff] hover:bg-[#e3f0ff]'
              }`}
              style={{ borderWidth: '1.75px', borderColor: isCompleted ? '#d1d5db' : '#a3caff' }}
              onMouseEnter={(e) => {
                if (!isCompleted) e.currentTarget.style.borderColor = '#8ab9ff';
              }}
              onMouseLeave={(e) => {
                if (!isCompleted) e.currentTarget.style.borderColor = '#a3caff';
              }}
            >
              <p className={`text-[16px] text-center px-4 max-w-[431px] ${
                isCompleted ? 'text-gray-400' : 'text-[#538ddc]'
              }`} style={{ fontVariationSettings: "'wdth' 100" }}>
                {isCompleted ? 'Subtask completed - no actions available' : getDropboxText()}
              </p>
            </button>
          </div>
        )}
      </div>
      
      {/* Use TriggerConfigModal for disable-trigger subtask */}
      {baseSubtaskId === 'disable-trigger' ? (
        <TriggerConfigModal
          isOpen={isPopupOpen && !isCompleted}
          onClose={() => setIsPopupOpen(false)}
          onAddWorkflows={handleAddWorkflows}
          prefilledTenant="Brightstar Care"
          prefilledWorkflow="Eligibility Verification"
          prefilledVariant="Homehealth"
        />
      ) : baseSubtaskId === 'terminate-workflow' ? (
        /* Use TerminateWorkflowModal for terminate-workflow subtask */
        <TerminateWorkflowModal
          isOpen={isPopupOpen && !isCompleted}
          onClose={() => setIsPopupOpen(false)}
          onAddToTicket={handleAddWorkflowInstances}
          prefilledTenant="Brightstar Care"
          prefilledWorkflow="Eligibility Verification"
          prefilledVariant="Homehealth"
        />
      ) : baseSubtaskId === 'trigger-workflow' ? (
        /* Use TriggerWorkflowModal for trigger-workflow subtask */
        <TriggerWorkflowModal
          isOpen={isPopupOpen && !isCompleted}
          onClose={() => setIsPopupOpen(false)}
          onAddToTicket={handleTriggeredWorkflows}
          prefilledTenant="Brightstar Care"
          prefilledWorkflow="Eligibility Verification"
          prefilledVariant="Homehealth"
        />
      ) : (
        /* Center Popup Modal for other subtasks */
        isPopupOpen && !isCompleted && (
          <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {baseSubtaskId === 'terminate-workflow' || baseSubtaskId === 'disable-trigger' 
                    ? 'Select Workflow and Tenant' 
                    : 'Configure Task'}
                </h3>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="space-y-6">
                  {/* Workflow Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Workflow
                    </label>
                    <select
                      value={selectedWorkflow}
                      onChange={(e) => setSelectedWorkflow(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Choose a workflow...</option>
                      {workflows.map((workflow) => (
                        <option key={workflow} value={workflow}>
                          {workflow}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tenant Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Tenant
                    </label>
                    <select
                      value={selectedTenant}
                      onChange={(e) => setSelectedTenant(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Choose a tenant...</option>
                      {tenants.map((tenant) => (
                        <option key={tenant} value={tenant}>
                          {tenant}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      Please select both workflow and tenant to proceed with the task configuration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  disabled={!selectedWorkflow || !selectedTenant}
                  onClick={() => {
                    // Handle submission
                    alert(`Selected: ${selectedWorkflow} - ${selectedTenant}`);
                    setIsPopupOpen(false);
                  }}
                  className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-all ${
                    selectedWorkflow && selectedTenant
                      ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                      : 'bg-blue-400 cursor-not-allowed'
                  }`}
                >
                  Confirm Selection
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}