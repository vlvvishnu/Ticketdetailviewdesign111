import { useState, useEffect } from 'react';
import { X, Search as SearchIcon, RefreshCcw, ExternalLink } from 'lucide-react';

export interface TriggerConfiguration {
  id: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  variantVersion: string;
  configName: string;
  workflowInput: string;
}

export interface TriggeredInstance {
  id: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  variantVersion: string;
  configName: string;
  status: 'Run Invoked' | 'Run Invocation Failed';
  message: string;
}

interface TriggerWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToTicket: (instances: TriggeredInstance[]) => void;
  prefilledTenant?: string;
  prefilledWorkflow?: string;
  prefilledVariant?: string;
}

// Sample configuration data
const sampleConfigurations: TriggerConfiguration[] = [
  {
    id: '1',
    tenant: 'Brightstar Care',
    workflow: 'Eligibility Verification',
    workflowVariant: 'Homehealth',
    variantVersion: '1.0',
    configName: 'Configuration001',
    workflowInput: JSON.stringify({
      "processRelease": {
        "id": "PR-2025-0924",
        "title": "Q4 Release of New Healthcare Portal",
        "date": "2024-10-15T08:00Z",
        "author": {
          "name": "John Doe",
          "email": "john.doe@example.com",
          "organization": "HealthTech Innovations"
        }
      },
      "summary": "We are excited to announce the launch of our new healthcare portal designed to streamline patient-provider communication.",
      "contentSections": [
        {
          "heading": "Overview",
          "body": "Our new platform integrates eligibility verification, authorization requests, and billing in one easy-to-use dashboard."
        },
        {
          "heading": "Key Features",
          "body": "Single sign on, real time claim status, secure document uploads."
        }
      ]
    }, null, 2)
  },
  {
    id: '2',
    tenant: 'Brightstar Care',
    workflow: 'Cash Posting',
    workflowVariant: 'Homehealth',
    variantVersion: '1.0',
    configName: 'Configuration002',
    workflowInput: JSON.stringify({
      "processId": "CP-2025-001",
      "tenant": "Brightstar Care",
      "paymentBatch": "BATCH-20250115",
      "totalAmount": 125000.50
    }, null, 2)
  },
  {
    id: '3',
    tenant: 'Alpine Care Home Health',
    workflow: 'Eligibility Verification',
    workflowVariant: 'Homehealth',
    variantVersion: '1.0',
    configName: 'Configuration004',
    workflowInput: JSON.stringify({
      "processRelease": {
        "id": "PR-2025-0925",
        "title": "Alpine Care Q1 Update",
        "date": "2025-01-20T08:00Z"
      }
    }, null, 2)
  },
  {
    id: '4',
    tenant: 'Alpine Care Home Health',
    workflow: 'Cash Posting',
    workflowVariant: 'Hospice',
    variantVersion: '2.0',
    configName: 'Configuration005',
    workflowInput: JSON.stringify({
      "processId": "CP-2025-002",
      "tenant": "Alpine Care Home Health",
      "paymentBatch": "BATCH-20250116"
    }, null, 2)
  },
  {
    id: '5',
    tenant: 'Buckeye Home Health Care',
    workflow: 'Eligibility Verification',
    workflowVariant: 'Hospice',
    variantVersion: '2.0',
    configName: 'Configuration006',
    workflowInput: JSON.stringify({
      "processRelease": {
        "id": "PR-2025-0926",
        "title": "Buckeye Hospice Platform Update"
      }
    }, null, 2)
  },
  {
    id: '6',
    tenant: 'Buckeye Home Health Care',
    workflow: 'Cash Posting',
    workflowVariant: 'Hospice',
    variantVersion: '2.0',
    configName: 'Configuration007',
    workflowInput: JSON.stringify({
      "processId": "CP-2025-003",
      "tenant": "Buckeye Home Health Care"
    }, null, 2)
  }
];

export function TriggerWorkflowModal({ isOpen, onClose, onAddToTicket, prefilledTenant, prefilledWorkflow, prefilledVariant }: TriggerWorkflowModalProps) {
  const [mode, setMode] = useState<'existing' | 'manual'>('existing');
  const [selectedWorkflow, setSelectedWorkflow] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedVersion, setSelectedVersion] = useState('');
  const [selectedTenants, setSelectedTenants] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<TriggerConfiguration[]>([]);
  const [selectedConfigs, setSelectedConfigs] = useState<Set<string>>(new Set());
  const [viewingInput, setViewingInput] = useState<TriggerConfiguration | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [triggeredInstances, setTriggeredInstances] = useState<TriggeredInstance[]>([]);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Available options
  const workflows = ['Eligibility Verification', 'Cash Posting'];
  const variants = ['Homehealth', 'Hospice'];
  const versions = ['1.0', '2.0'];
  const tenants = ['ASHN', 'Doctor\'s Choice of Health', 'Buckeye Home health Care', 'Brightstar Care', 'Alpine Care Home Health'];

  // Initialize with prefilled values and auto-search
  useEffect(() => {
    if (isOpen && prefilledWorkflow && prefilledVariant) {
      setSelectedWorkflow(prefilledWorkflow);
      setSelectedVariant(prefilledVariant);
      if (prefilledTenant) {
        setSelectedTenants([prefilledTenant]);
      }

      // Auto-trigger search with prefilled values
      let filtered = sampleConfigurations.filter(c => {
        const workflowMatch = c.workflow === prefilledWorkflow;
        const variantMatch = c.workflowVariant === prefilledVariant;
        const tenantMatch = !prefilledTenant || c.tenant === prefilledTenant;
        return workflowMatch && variantMatch && tenantMatch;
      });

      setSearchResults(filtered);
      setHasSearched(true);
    }
  }, [isOpen, prefilledWorkflow, prefilledVariant, prefilledTenant]);

  const handleSearch = () => {
    // Start with all configurations
    let filtered = [...sampleConfigurations];

    // Only apply filters if something is selected
    if (selectedWorkflow) {
      filtered = filtered.filter(c => c.workflow === selectedWorkflow);
    }
    if (selectedVariant) {
      filtered = filtered.filter(c => c.workflowVariant === selectedVariant);
    }
    if (selectedVersion) {
      filtered = filtered.filter(c => c.variantVersion === selectedVersion);
    }
    if (selectedTenants.length > 0) {
      filtered = filtered.filter(c => selectedTenants.some(t => c.tenant.includes(t)));
    }

    setSearchResults(filtered);
    setHasSearched(true);
    setSelectedConfigs(new Set()); // Reset selections when new search is performed
  };

  const handleReset = () => {
    setSelectedWorkflow('');
    setSelectedVariant('');
    setSelectedVersion('');
    setSelectedTenants([]);
    setSearchResults([]);
    setSelectedConfigs(new Set());
    setHasSearched(false);
    setViewingInput(null);
  };

  const handleConfigSelect = (configId: string) => {
    const newSelected = new Set(selectedConfigs);
    if (newSelected.has(configId)) {
      newSelected.delete(configId);
    } else {
      newSelected.add(configId);
    }
    setSelectedConfigs(newSelected);
  };

  const handleAddToTicket = () => {
    // Convert selected configurations to triggered instances
    const instances: TriggeredInstance[] = searchResults
      .filter(config => selectedConfigs.has(config.id))
      .map((config, index) => ({
        id: `triggered-${Date.now()}-${index}`,
        tenant: config.tenant,
        workflow: config.workflow,
        workflowVariant: config.workflowVariant,
        variantVersion: config.variantVersion,
        configName: config.configName,
        status: Math.random() > 0.2 ? 'Run Invoked' : 'Run Invocation Failed',
        message: 'Lorem ipsum dolor sit amet, consecte..'
      }));

    // Directly add to ticket and close modal
    onAddToTicket(instances);
    handleModalClose();
  };

  const handleTrigger = () => {
    onAddToTicket(triggeredInstances);
    handleModalClose();
  };

  const handleModalClose = () => {
    // Reset all state
    setMode('existing');
    setSelectedWorkflow('');
    setSelectedVariant('');
    setSelectedVersion('');
    setSelectedTenants([]);
    setSearchResults([]);
    setSelectedConfigs(new Set());
    setViewingInput(null);
    setHasSearched(false);
    setTriggeredInstances([]);
    setHasTriggered(false);
    onClose();
  };

  const handleTenantToggle = (tenant: string) => {
    setSelectedTenants(prev => 
      prev.includes(tenant) 
        ? prev.filter(t => t !== tenant)
        : [...prev, tenant]
    );
  };

  const handleToggleViewInput = (config: TriggerConfiguration) => {
    if (viewingInput?.id === config.id) {
      setViewingInput(null);
    } else {
      setViewingInput(config);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <div 
        className="bg-white rounded-lg shadow-xl w-full flex flex-col transition-all duration-300"
        style={{ 
          width: hasTriggered ? '1200px' : viewingInput ? '1600px' : '1200px',
          height: '90vh',
          maxHeight: '90vh'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-['Roboto'] font-medium text-[16px] text-black">
            {hasTriggered ? 'Workflow Instances' : 'Choose Configuration to Invoke Trigger'}
          </h2>
          <button 
            onClick={handleModalClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content - Full Height Split */}
        <div className="flex-1 overflow-hidden flex">
          {/* Main Content Area - Left Side */}
          <div className="flex-1 flex flex-col">
            {!hasTriggered ? (
              <>
                {/* Configuration Selection */}
                <div className="p-6 space-y-4 border-b border-gray-200">
                  {/* Radio buttons */}
                  <div>
                    <p className="font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.8)] mb-3">
                      Choose how do you like to proceed:
                    </p>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative size-4">
                          <input
                            type="radio"
                            checked={mode === 'existing'}
                            onChange={() => setMode('existing')}
                            className="sr-only peer"
                          />
                          <div className="size-4 rounded-full border border-gray-300 peer-checked:border-[#1677ff] bg-white" />
                          {mode === 'existing' && (
                            <div className="absolute inset-[4px] rounded-full bg-[#1677ff]" />
                          )}
                        </div>
                        <span className="font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                          Choose existing schedule
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="relative size-4">
                          <input
                            type="radio"
                            checked={mode === 'manual'}
                            onChange={() => setMode('manual')}
                            className="sr-only peer"
                          />
                          <div className="size-4 rounded-full border border-gray-300 peer-checked:border-[#1677ff] bg-white" />
                          {mode === 'manual' && (
                            <div className="absolute inset-[4px] rounded-full bg-[#1677ff]" />
                          )}
                        </div>
                        <span className="font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                          Provide Manual Input
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Dropdowns */}
                  <div className="flex gap-3 items-end">
                    {/* Workflow */}
                    <div className="flex flex-col gap-2">
                      <label className="font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                        Workflow <span className="text-[#f5222d]">*</span> :
                      </label>
                      <select
                        value={selectedWorkflow}
                        onChange={(e) => setSelectedWorkflow(e.target.value)}
                        className="w-[267px] h-[32px] px-3 border border-gray-300 rounded-md bg-white font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]"
                      >
                        <option value="">Select</option>
                        {workflows.map(w => (
                          <option key={w} value={w}>{w}</option>
                        ))}
                      </select>
                    </div>

                    {/* Workflow Variant */}
                    <div className="flex flex-col gap-2">
                      <label className="font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                        Workflow Variant <span className="text-[#f5222d]">*</span> :
                      </label>
                      <select
                        value={selectedVariant}
                        onChange={(e) => setSelectedVariant(e.target.value)}
                        className="w-[249px] h-[32px] px-3 border border-gray-300 rounded-md bg-white font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]"
                      >
                        <option value="">Select</option>
                        {variants.map(v => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>

                    {/* Variant Version */}
                    <div className="flex flex-col gap-2">
                      <label className="font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                        Variant Version <span className="text-[#f5222d]">*</span> :
                      </label>
                      <select
                        value={selectedVersion}
                        onChange={(e) => setSelectedVersion(e.target.value)}
                        className="w-[130px] h-[32px] px-3 border border-gray-300 rounded-md bg-white font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]"
                      >
                        <option value="">Select</option>
                        {versions.map(v => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>

                    {/* Tenant */}
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                        Tenant :
                      </label>
                      <div className="relative">
                        <div className="min-h-[32px] px-3 py-1 border border-gray-300 rounded-md bg-white font-['Roboto'] text-[14px] flex flex-wrap gap-1 items-center">
                          {selectedTenants.length === 0 ? (
                            <span className="text-[rgba(0,0,0,0.25)]">Select</span>
                          ) : (
                            selectedTenants.map(tenant => (
                              <span
                                key={tenant}
                                className="bg-gray-100 px-2 py-0.5 rounded text-[12px] flex items-center gap-1"
                              >
                                {tenant}
                                <button
                                  onClick={() => handleTenantToggle(tenant)}
                                  className="hover:text-red-500"
                                >
                                  <X className="size-3" />
                                </button>
                              </span>
                            ))
                          )}
                        </div>
                        <select
                          multiple
                          value={selectedTenants}
                          onChange={(e) => {
                            const selected = Array.from(e.target.selectedOptions, option => option.value);
                            setSelectedTenants(selected);
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        >
                          {tenants.map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      onClick={handleReset}
                      className="px-11 py-2 border border-gray-300 rounded-md bg-white font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)] hover:bg-gray-50 transition-colors"
                    >
                      Reset
                    </button>
                    <button
                      onClick={handleSearch}
                      className="px-8 py-2 bg-[#354eb4] rounded-md font-['Roboto'] font-medium text-[16px] text-white hover:bg-[#2d4299] transition-colors"
                    >
                      Search
                    </button>
                  </div>
                </div>

                {/* Search Results Table */}
                {hasSearched && (
                  <div className="flex-1 flex flex-col overflow-hidden px-6 py-4">
                    <div className="border border-gray-200 rounded-lg overflow-hidden flex-1 flex flex-col">
                      <div className="overflow-auto flex-1">
                        <table className="w-full">
                          <thead className="bg-gray-50 sticky top-0">
                            <tr>
                              <th className="w-12 px-4 py-3 text-left">
                                <input
                                  type="checkbox"
                                  checked={selectedConfigs.size === searchResults.length && searchResults.length > 0}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedConfigs(new Set(searchResults.map(c => c.id)));
                                    } else {
                                      setSelectedConfigs(new Set());
                                    }
                                  }}
                                  className="w-4 h-4 rounded border-gray-300 text-[#1677ff] focus:ring-[#1677ff] cursor-pointer"
                                />
                              </th>
                              <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                                <div className="flex items-center gap-2">
                                  <SearchIcon className="size-3.5" />
                                  Tenant
                                </div>
                              </th>
                              <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                                <div className="flex items-center gap-2">
                                  <SearchIcon className="size-3.5" />
                                  Workflow
                                </div>
                              </th>
                              <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                                <div className="flex items-center gap-2">
                                  <SearchIcon className="size-3.5" />
                                  Workflow Variant
                                </div>
                              </th>
                              <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                                <div className="flex items-center gap-2">
                                  <SearchIcon className="size-3.5" />
                                  Variant Version
                                </div>
                              </th>
                              <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                                <div className="flex items-center gap-2">
                                  <SearchIcon className="size-3.5" />
                                  Config Name
                                </div>
                              </th>
                              <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                                Workflow Input
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {searchResults.map((config) => (
                              <tr 
                                key={config.id} 
                                className={`border-t border-gray-200 hover:bg-gray-50 ${
                                  viewingInput?.id === config.id ? 'bg-blue-50' : ''
                                }`}
                              >
                                <td className="px-4 py-3">
                                  <input
                                    type="checkbox"
                                    checked={selectedConfigs.has(config.id)}
                                    onChange={() => handleConfigSelect(config.id)}
                                    className="w-4 h-4 rounded border-gray-300 text-[#1677ff] focus:ring-[#1677ff] cursor-pointer"
                                  />
                                </td>
                                <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                                  {config.tenant}
                                </td>
                                <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                                  {config.workflow}
                                </td>
                                <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                                  {config.workflowVariant}
                                </td>
                                <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                                  {config.variantVersion}
                                </td>
                                <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                                  {config.configName}
                                </td>
                                <td className="px-4 py-3">
                                  <button
                                    onClick={() => handleToggleViewInput(config)}
                                    className="text-[#1677ff] font-['Roboto'] text-[14px] hover:underline"
                                  >
                                    {viewingInput?.id === config.id ? 'Hide Input' : 'View Input'}
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-4">
                      <button
                        onClick={handleReset}
                        className="px-11 py-2 border border-gray-300 rounded-md bg-white font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)] hover:bg-gray-50 transition-colors"
                      >
                        Reset
                      </button>
                      <button
                        onClick={handleAddToTicket}
                        disabled={selectedConfigs.size === 0}
                        className={`px-8 py-2 rounded-md font-['Roboto'] text-[14px] transition-colors ${
                          selectedConfigs.size === 0 
                            ? 'bg-[#e8e8e8] text-[rgba(0,0,0,0.88)] cursor-not-allowed opacity-50' 
                            : 'bg-[#354eb4] text-white hover:bg-[#2d4299]'
                        }`}
                      >
                        Add To Ticket
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Triggered Instances View */
              <div className="p-6 flex-1 overflow-auto">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 sticky top-0">
                        <tr>
                          <th className="w-12 px-4 py-3 text-left">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                          </th>
                          <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                            <div className="flex items-center gap-2">
                              <SearchIcon className="size-3.5" />
                              Tenant
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                            <div className="flex items-center gap-2">
                              <SearchIcon className="size-3.5" />
                              Workflow
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                            <div className="flex items-center gap-2">
                              <SearchIcon className="size-3.5" />
                              Workflow Variant
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                            <div className="flex items-center gap-2">
                              <SearchIcon className="size-3.5" />
                              Variant Version
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                            <div className="flex items-center gap-2">
                              <SearchIcon className="size-3.5" />
                              Config Name
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                            <div className="flex items-center gap-2">
                              <SearchIcon className="size-3.5" />
                              Status
                            </div>
                          </th>
                          <th className="px-4 py-3 text-left font-['Roboto'] text-[12px] text-gray-500">
                            <div className="flex items-center gap-2">
                              <SearchIcon className="size-3.5" />
                              Message
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {triggeredInstances.map((instance) => (
                          <tr key={instance.id} className="border-t border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3">
                              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                            </td>
                            <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                              {instance.tenant}
                            </td>
                            <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                              {instance.workflow}
                            </td>
                            <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                              {instance.workflowVariant}
                            </td>
                            <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                              {instance.variantVersion}
                            </td>
                            <td className="px-4 py-3 font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                              {instance.configName}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-1.5">
                                <div className={`size-2 rounded-full ${
                                  instance.status === 'Run Invoked' ? 'bg-green-500' : 'bg-red-500'
                                }`} />
                                <span className="font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                                  {instance.status}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <span className="font-['Roboto'] text-[14px] text-[rgba(0,0,0,0.88)]">
                                  {instance.message}
                                </span>
                                <button className="text-gray-400 hover:text-gray-600">
                                  <ExternalLink className="size-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Full Height Workflow Input Panel - Right Side */}
          {viewingInput && !hasTriggered && (
            <div className="w-[25%] border-l border-gray-200 flex flex-col bg-gray-50">
              <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-['Roboto'] font-medium text-[14px] text-black">
                    Workflow Input - {viewingInput.configName}
                  </h3>
                  <button 
                    onClick={() => setViewingInput(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded font-['Roboto']">
                    {viewingInput.workflow}
                  </span>
                  <span className="text-gray-600 font-['Roboto']">{viewingInput.workflowVariant}</span>
                </div>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="font-['Roboto'] font-medium text-[13px] text-black">
                    JSON Input
                  </h4>
                  <button className="text-[#1677ff] font-['Roboto'] text-[12px] hover:underline">
                    Copy 📋
                  </button>
                </div>
                <pre className="bg-white p-3 rounded border border-gray-200 text-[11px] font-mono overflow-x-auto whitespace-pre-wrap break-words">
{viewingInput.workflowInput}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Only show Trigger button when instances are ready */}
        {hasTriggered && (
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
            <button
              onClick={handleTrigger}
              className="px-6 py-2 bg-[#8e94a8] rounded-md font-['Roboto'] text-[14px] text-white hover:bg-[#7a8096] transition-colors flex items-center gap-2"
            >
              <RefreshCcw className="size-4" />
              Trigger
            </button>
            <button
              onClick={handleModalClose}
              className="px-6 py-2 bg-[#354eb4] rounded-md font-['Roboto'] text-[14px] text-white hover:bg-[#2d4299] transition-colors"
            >
              Modify Ticket
            </button>
          </div>
        )}
      </div>
    </div>
  );
}