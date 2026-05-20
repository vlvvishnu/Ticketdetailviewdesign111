import { useState, useEffect } from 'react';
import svgPaths from '@/imports/svg-81abwv8r40';

interface TriggerConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWorkflows: (workflows: any[]) => void;
  prefilledTenant?: string;
  prefilledWorkflow?: string;
  prefilledVariant?: string;
}

interface TriggerConfig {
  id: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  variantVersion: string;
  schedule: string;
  inputTag: string;
}

// Mock data for dropdowns
const workflows = [
  'Eligibility Verification',
  'Cash Posting',
  'HCHB-AUTH',
  'WELLSKY-ELIGIBILITY'
];

const variants = ['Homehealth', 'Hospice'];

const tenants = [
  'Brightstar Care',
  'Alpine Care Home Health',
  'Buckeye Home Health Care',
  'Archcare',
  'Arden Care',
  'Continuum Home Health',
  'Delta Healthcare'
];

// Exact mock results from Figma
const mockResults: TriggerConfig[] = [
  { id: '1', tenant: 'Brightstar Care', workflow: 'Eligibility Verification', workflowVariant: 'Homehealth', variantVersion: 'V1.34', schedule: '12/24/2024 06:00', inputTag: 'Default' },
  { id: '2', tenant: 'Brightstar Care', workflow: 'Cash Posting', workflowVariant: 'Homehealth', variantVersion: 'V1.34', schedule: '12/24/2024 06:00', inputTag: 'Example1' },
  { id: '3', tenant: 'Brightstar Care', workflow: 'Eligibility Verification', workflowVariant: 'Homehealth', variantVersion: 'V1.34', schedule: '12/24/2024 06:00', inputTag: 'Branch1' },
  { id: '4', tenant: 'Alpine Care Home Health', workflow: 'Eligibility Verification', workflowVariant: 'Homehealth', variantVersion: 'V1.34', schedule: '12/24/2024 06:00', inputTag: 'Branch1' },
  { id: '5', tenant: 'Alpine Care Home Health', workflow: 'Cash Posting', workflowVariant: 'Homehealth', variantVersion: 'V1.34', schedule: '12/24/2024 06:00', inputTag: 'Example1' },
  { id: '6', tenant: 'Buckeye Home Health Care', workflow: 'Instance589007', workflowVariant: 'Homehealth', variantVersion: 'V1.34', schedule: 'Schedule', inputTag: '2024-12-01 06:00' },
  { id: '7', tenant: 'Buckeye Home Health Care', workflow: 'Ins589008', workflowVariant: 'Schedule', variantVersion: 'Schedule', schedule: 'Schedule', inputTag: '2024-12-01 06:00' },
  { id: '8', tenant: 'Buckeye Home Health Care', workflow: 'Ins589008', workflowVariant: 'Schedule', variantVersion: 'Schedule', schedule: 'Schedule', inputTag: '2024-12-01 06:00' },
];

export function TriggerConfigModal({ isOpen, onClose, onAddWorkflows, prefilledTenant, prefilledWorkflow, prefilledVariant }: TriggerConfigModalProps) {
  const [showResults, setShowResults] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedTenants, setSelectedTenants] = useState<string[]>([]);
  const [selectedConfigs, setSelectedConfigs] = useState<Set<string>>(new Set());
  const [searchResults, setSearchResults] = useState<TriggerConfig[]>([]);
  const [selectAllMode, setSelectAllMode] = useState(false);
  const [reason, setReason] = useState('');

  // Initialize with prefilled values and auto-search
  useEffect(() => {
    if (isOpen && prefilledWorkflow && prefilledVariant) {
      setSelectedWorkflow(prefilledWorkflow);
      setSelectedVariant(prefilledVariant);
      if (prefilledTenant) {
        setSelectedTenants([prefilledTenant]);
      }

      // Auto-trigger search with prefilled values
      const filtered = mockResults.filter(result => {
        const workflowMatch = result.workflow === prefilledWorkflow;
        const variantMatch = result.workflowVariant === prefilledVariant;
        const tenantMatch = !prefilledTenant || result.tenant === prefilledTenant;
        return workflowMatch && variantMatch && tenantMatch;
      });

      setSearchResults(filtered);
      setShowResults(true);
    }
  }, [isOpen, prefilledWorkflow, prefilledVariant, prefilledTenant]);

  if (!isOpen) return null;

  const handleSearch = () => {
    if (!selectedWorkflow || !selectedVariant) {
      return;
    }

    // Filter results based on selection
    const filtered = mockResults.filter(result => {
      const workflowMatch = !selectedWorkflow || result.workflow === selectedWorkflow;
      const variantMatch = !selectedVariant || result.workflowVariant === selectedVariant;
      const tenantMatch = selectedTenants.length === 0 || selectedTenants.includes(result.tenant);
      return workflowMatch && variantMatch && tenantMatch;
    });

    setSearchResults(filtered);
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedWorkflow('');
    setSelectedVariant('');
    setSelectedTenants([]);
    setSelectedConfigs(new Set());
    setShowResults(false);
    setSearchResults([]);
    setSelectAllMode(false);
    setReason('');
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleAddToTicket = () => {
    let configsToAdd: TriggerConfig[] = [];
    
    if (selectAllMode) {
      configsToAdd = searchResults;
    } else {
      configsToAdd = searchResults.filter(config => selectedConfigs.has(config.id));
    }

    if (configsToAdd.length > 0) {
      onAddWorkflows(configsToAdd);
      handleClose();
    }
  };

  const toggleConfig = (id: string) => {
    const newSet = new Set(selectedConfigs);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedConfigs(newSet);
    setSelectAllMode(false);
  };

  const handleTenantSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && !selectedTenants.includes(value)) {
      setSelectedTenants([...selectedTenants, value]);
    }
  };

  const removeTenant = (tenant: string) => {
    setSelectedTenants(selectedTenants.filter(t => t !== tenant));
  };

  const resultCount = selectAllMode ? searchResults.length : selectedConfigs.size;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-[1394px] max-w-[95vw] flex flex-col h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-['Roboto'] font-medium text-[16px] text-black">
            Choose Configuration to Invoke Trigger
          </h2>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {/* Search Form */}
          <div className="px-[32px] py-[24px] space-y-[16px]">
            <div className="flex gap-[24px]">
              {/* Workflow */}
              <div className="flex-1">
                <label className="flex items-center gap-[4px] text-[14px] mb-[8px] font-['Roboto']" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <span className="text-[rgba(0,0,0,0.88)]">Workflow</span>
                  <span className="text-[#f5222d]">*</span>
                  <span className="text-[rgba(0,0,0,0.88)]">:</span>
                </label>
                <select
                  value={selectedWorkflow}
                  onChange={(e) => setSelectedWorkflow(e.target.value)}
                  className="w-full h-[40px] px-[12px] py-0 bg-white border border-[#d9d9d9] rounded-[6px] text-[14px] font-['Roboto'] appearance-none"
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    color: selectedWorkflow ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                    lineHeight: '40px',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center'
                  }}
                >
                  <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                  {workflows.map((wf) => (
                    <option key={wf} value={wf} style={{ color: 'rgba(0,0,0,0.88)' }}>{wf}</option>
                  ))}
                </select>
              </div>

              {/* Workflow Variant */}
              <div className="w-[249px]">
                <label className="flex items-center gap-[4px] text-[14px] mb-[8px] font-['Roboto']" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <span className="text-[rgba(0,0,0,0.88)]">Workflow Variant</span>
                  <span className="text-[#f5222d]">*</span>
                  <span className="text-[rgba(0,0,0,0.88)]">:</span>
                </label>
                <select
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  className="w-full h-[40px] px-[12px] py-0 bg-white border border-[#d9d9d9] rounded-[6px] text-[14px] font-['Roboto'] appearance-none"
                  style={{ 
                    fontVariationSettings: "'wdth' 100",
                    color: selectedVariant ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                    lineHeight: '40px',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center'
                  }}
                >
                  <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                  {variants.map((variant) => (
                    <option key={variant} value={variant} style={{ color: 'rgba(0,0,0,0.88)' }}>{variant}</option>
                  ))}
                </select>
              </div>

              {/* Tenant */}
              <div className="flex-1">
                <label className="flex items-center gap-[4px] text-[14px] mb-[8px] font-['Roboto']" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <span className="text-[rgba(0,0,0,0.88)]">Tenant</span>
                  <span className="text-[rgba(0,0,0,0.88)]">:</span>
                </label>
                <div className="relative w-full min-h-[32px] px-[12px] py-[4px] bg-white border border-[#d9d9d9] rounded-[6px] flex flex-wrap gap-[4px] items-center">
                  {/* Selected tenant tags inside the field */}
                  {selectedTenants.map((tenant) => (
                    <div key={tenant} className="flex items-center gap-[4px] px-[8px] py-[2px] bg-[rgba(0,0,0,0.02)] border border-[#d9d9d9] rounded-[2px]">
                      <span className="text-[14px] font-['Roboto'] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {tenant}
                      </span>
                      <button
                        onClick={() => removeTenant(tenant)}
                        className="hover:opacity-70 transition-opacity"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="rgba(0,0,0,0.45)" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                  {/* Dropdown selector */}
                  <select
                    value=""
                    onChange={handleTenantSelect}
                    className="flex-1 min-w-[120px] h-[24px] bg-transparent border-none text-[14px] font-['Roboto'] appearance-none focus:outline-none cursor-pointer text-[rgba(0,0,0,0.85)]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <option value="">Select tenant</option>
                    {tenants.filter(t => !selectedTenants.includes(t)).map((tenant) => (
                      <option key={tenant} value={tenant}>{tenant}</option>
                    ))}
                  </select>
                  {/* Dropdown arrow icon */}
                  <div className="pointer-events-none flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="#878787" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-[12px]">
              <button
                onClick={handleReset}
                className="px-[43px] py-[8px] bg-white border border-[#d9d9d9] rounded-[6px] text-[14px] font-['Roboto'] text-[rgba(0,0,0,0.88)] hover:bg-gray-50"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Reset
              </button>
              <button
                onClick={handleSearch}
                disabled={!selectedWorkflow || !selectedVariant}
                className={`px-[43px] py-[8px] rounded-[6px] text-[14px] font-['Roboto'] text-white ${
                  selectedWorkflow && selectedVariant
                    ? 'bg-[#354eb4] hover:bg-[#2d4299]'
                    : 'bg-[#354eb4] opacity-50 cursor-not-allowed'
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Search
              </button>
            </div>
          </div>

          {/* Results Section */}
          {showResults && (
            <div className="px-[32px] py-[16px] border-t border-[#cad2d8]">
              <p className="text-[16px] font-['Roboto'] font-bold text-black mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                {searchResults.length} Results Found
              </p>
              
              {/* Selection Mode */}
              <div className="flex gap-[16px] mb-[16px]">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <div className="relative size-[16px]">
                    <input
                      type="radio"
                      checked={selectAllMode}
                      onChange={() => setSelectAllMode(true)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className={`size-full rounded-full border ${
                      selectAllMode ? 'border-[#1677ff] bg-white' : 'border-[#d9d9d9] bg-white'
                    }`}>
                      {selectAllMode && (
                        <div className="absolute left-[4px] top-[4px] size-[8px] rounded-full bg-[#1677ff]" />
                      )}
                    </div>
                  </div>
                  <span className="text-[14px] font-['Roboto'] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Select All <span className="font-bold">{searchResults.length} Result(s)</span> to Add it to Ticket.
                  </span>
                </label>
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <div className="relative size-[16px]">
                    <input
                      type="radio"
                      checked={!selectAllMode}
                      onChange={() => setSelectAllMode(false)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className={`size-full rounded-full border ${
                      !selectAllMode ? 'border-[#1677ff] bg-white' : 'border-[#d9d9d9] bg-white'
                    }`}>
                      {!selectAllMode && (
                        <div className="absolute left-[4px] top-[4px] size-[8px] rounded-full bg-[#1677ff]" />
                      )}
                    </div>
                  </div>
                  <span className="text-[14px] font-['Roboto'] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Select Specific Result(s) to Add it to Ticket
                  </span>
                </label>
              </div>

              {/* Results Table */}
              <div className="border border-[#e1dfdf] rounded-[4px] overflow-auto max-h-[240px]">
                <table className="w-full">
                  <thead className="bg-[#fafafa] sticky top-0">
                    <tr className="border-b border-[#e1dfdf]">
                      <th className="w-[40px] p-[12px]"></th>
                      <th className="p-[12px] text-left text-[14px] font-['Roboto'] font-medium text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>Tenant</th>
                      <th className="p-[12px] text-left text-[14px] font-['Roboto'] font-medium text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>Workflow</th>
                      <th className="p-[12px] text-left text-[14px] font-['Roboto'] font-medium text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>Workflow Variant</th>
                      <th className="p-[12px] text-left text-[14px] font-['Roboto'] font-medium text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>Variant Version</th>
                      <th className="p-[12px] text-left text-[14px] font-['Roboto'] font-medium text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>Schedule</th>
                      <th className="p-[12px] text-left text-[14px] font-['Roboto'] font-medium text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>Input Tag</th>
                      <th className="p-[12px] text-left text-[14px] font-['Roboto'] font-medium text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>Workflow Input</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((result) => (
                      <tr key={result.id} className="border-b border-[#e1dfdf] hover:bg-[#fafafa]">
                        <td className="p-[12px] text-center">
                          <input
                            type="checkbox"
                            checked={selectAllMode || selectedConfigs.has(result.id)}
                            onChange={() => toggleConfig(result.id)}
                            disabled={selectAllMode}
                            className="w-[16px] h-[16px]"
                          />
                        </td>
                        <td className="p-[12px] text-[13px] font-['Roboto'] text-[#263238]" style={{ fontVariationSettings: "'wdth' 100" }}>{result.tenant}</td>
                        <td className="p-[12px] text-[13px] font-['Roboto'] text-[#263238]" style={{ fontVariationSettings: "'wdth' 100" }}>{result.workflow}</td>
                        <td className="p-[12px] text-[13px] font-['Roboto'] text-[#263238]" style={{ fontVariationSettings: "'wdth' 100" }}>{result.workflowVariant}</td>
                        <td className="p-[12px] text-[13px] font-['Roboto'] text-[#263238]" style={{ fontVariationSettings: "'wdth' 100" }}>{result.variantVersion}</td>
                        <td className="p-[12px] text-[13px] font-['Roboto'] text-[#263238]" style={{ fontVariationSettings: "'wdth' 100" }}>{result.schedule}</td>
                        <td className="p-[12px] text-[13px] font-['Roboto'] text-[#263238]" style={{ fontVariationSettings: "'wdth' 100" }}>{result.inputTag}</td>
                        <td className="p-[12px]">
                          <button className="text-[13px] font-['Roboto'] text-[#1677ff] hover:underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                            View Input
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Reason Field */}
              <div className="mt-[16px]">
                <label className="text-[14px] font-['Roboto'] text-[rgba(0,0,0,0.88)] mb-[8px] block" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Reason/ Message (Optional) :
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="e.g HCHB Outage, scheduled maintenance, etc"
                  className="w-full h-[80px] px-[12px] py-[8px] border border-[#d9d9d9] rounded-[6px] text-[14px] font-['Roboto'] resize-none"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="flex-shrink-0 px-[32px] py-[16px] border-t border-[#cad2d8] flex justify-end gap-[12px]">
          {showResults ? (
            <>
              <button
                onClick={handleReset}
                className="px-[43px] py-[8px] bg-white border border-[#d9d9d9] rounded-[6px] text-[14px] font-['Roboto'] text-[rgba(0,0,0,0.88)] hover:bg-gray-50"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Reset
              </button>
              <button
                onClick={handleAddToTicket}
                disabled={resultCount === 0}
                className={`px-[16px] py-[8px] rounded-[4px] text-[16px] font-['Roboto'] font-medium text-white ${
                  resultCount > 0
                    ? 'bg-[#354eb4] hover:bg-[#2d4299]'
                    : 'bg-[#354eb4] opacity-50 cursor-not-allowed'
                }`}
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Add {resultCount} Results to Ticket
              </button>
            </>
          ) : (
            <div className="h-[42px]"></div>
          )}
        </div>
      </div>
    </div>
  );
}