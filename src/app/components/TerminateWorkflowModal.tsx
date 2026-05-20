import { useState, useEffect, useRef } from 'react';
import svgPaths from '@/imports/svg-u83980pnkx';
import svgPaths2 from '@/imports/svg-2daotw4lzu';
import svgPaths3 from '@/imports/svg-zqxel85f7q';

interface TerminateWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToTicket?: (instances: any[]) => void;
  prefilledTenant?: string;
  prefilledWorkflow?: string;
  prefilledVariant?: string;
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
  'Amedisys Home Health',
  'Enhabit Home Health & Hospice',
  'LHC Group Hospice Care',
  'AccentCare Home Health',
  'Bayada Home Health Care',
  'Gentiva Health Services',
  'VITAS Healthcare Hospice'
];

export interface WorkflowInstance {
  id: string;
  instanceId: string;
  tenant: string;
  schedule: string;
  startedAt: string;
  workflowInput: string;
  workflow: string;
  variant: string;
}

// Mock table data for search results
const mockInstances: WorkflowInstance[] = [
  { id: '1', instanceId: 'Instance589001', tenant: 'Brightstar Care', schedule: 'Schedule', startedAt: '2024-12-01 06:00', workflowInput: 'View Input', workflow: 'Eligibility Verification', variant: 'Homehealth' },
  { id: '2', instanceId: 'Instance589002', tenant: 'Brightstar Care', schedule: 'Schedule', startedAt: '2024-12-01 06:00', workflowInput: 'View Input', workflow: 'Eligibility Verification', variant: 'Homehealth' },
  { id: '3', instanceId: 'Instance589003', tenant: 'Brightstar Care', schedule: 'Schedule', startedAt: '2024-12-01 06:00', workflowInput: 'View Input', workflow: 'Eligibility Verification', variant: 'Hospice' },
  { id: '4', instanceId: 'Instance589004', tenant: 'Alpine Care Home Health', schedule: 'Schedule', startedAt: '2024-12-01 06:00', workflowInput: 'View Input', workflow: 'Eligibility Verification', variant: 'Homehealth' },
  { id: '5', instanceId: 'Instance589005', tenant: 'Alpine Care Home Health', schedule: 'Schedule', startedAt: '2024-12-01 06:00', workflowInput: 'View Input', workflow: 'Eligibility Verification', variant: 'Hospice' },
  { id: '6', instanceId: 'Instance589006', tenant: 'Buckeye Home Health Care', schedule: 'Schedule', startedAt: '2024-12-01 06:00', workflowInput: 'View Input', workflow: 'Eligibility Verification', variant: 'Homehealth' },
  { id: '7', instanceId: 'Instance589007', tenant: 'Buckeye Home Health Care', schedule: 'Schedule', startedAt: '2024-12-01 06:00', workflowInput: 'View Input', workflow: 'Eligibility Verification', variant: 'Hospice' },
  { id: '8', instanceId: 'Instance589008', tenant: 'Brightstar Care', schedule: 'Schedule', startedAt: '2024-12-01 06:00', workflowInput: 'View Input', workflow: 'Eligibility Verification', variant: 'Hospice' },
];

export function TerminateWorkflowModal({ isOpen, onClose, onAddToTicket, prefilledTenant, prefilledWorkflow, prefilledVariant }: TerminateWorkflowModalProps) {
  const [showResults, setShowResults] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedTenants, setSelectedTenants] = useState<string[]>([]);
  const [selectedInstances, setSelectedInstances] = useState<Set<string>>(new Set());
  const [searchResults, setSearchResults] = useState<WorkflowInstance[]>([]);
  const [viewingInputId, setViewingInputId] = useState<string | null>(null);
  const [isTenantDropdownOpen, setIsTenantDropdownOpen] = useState(false);
  const [tenantSearchText, setTenantSearchText] = useState('');
  const tenantDropdownRef = useRef<HTMLDivElement>(null);

  // Get unique tenants from table data
  const availableTenants = Array.from(new Set(mockInstances.map(instance => instance.tenant)));

  // Filter tenants based on search text
  const filteredTenants = availableTenants.filter(tenant =>
    tenant.toLowerCase().includes(tenantSearchText.toLowerCase())
  );

  // Initialize with prefilled values and auto-search
  useEffect(() => {
    if (isOpen && prefilledWorkflow && prefilledVariant) {
      setSelectedWorkflow(prefilledWorkflow);
      setSelectedVariant(prefilledVariant);
      if (prefilledTenant) {
        setSelectedTenants([prefilledTenant]);
      }

      // Auto-trigger search with prefilled values
      const filtered = mockInstances.filter(instance => {
        const workflowMatch = instance.workflow === prefilledWorkflow;
        const variantMatch = instance.variant === prefilledVariant;
        const tenantMatch = !prefilledTenant || instance.tenant === prefilledTenant;
        return workflowMatch && variantMatch && tenantMatch;
      });

      setSearchResults(filtered);
      setShowResults(true);
    }
  }, [isOpen, prefilledWorkflow, prefilledVariant, prefilledTenant]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tenantDropdownRef.current && !tenantDropdownRef.current.contains(event.target as Node)) {
        setIsTenantDropdownOpen(false);
      }
    };

    if (isTenantDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTenantDropdownOpen]);

  if (!isOpen) return null;

  const handleSearch = () => {
    if (!selectedWorkflow || !selectedVariant) {
      return;
    }

    // Filter instances based on selection
    const filtered = mockInstances.filter(instance => {
      const workflowMatch = instance.workflow === selectedWorkflow;
      const variantMatch = instance.variant === selectedVariant;
      const tenantMatch = selectedTenants.length === 0 || selectedTenants.includes(instance.tenant);
      return workflowMatch && variantMatch && tenantMatch;
    });

    setSearchResults(filtered);
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedWorkflow('');
    setSelectedVariant('');
    setSelectedTenants([]);
    setSelectedInstances(new Set());
    setShowResults(false);
    setSearchResults([]);
    setViewingInputId(null);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const handleAddToTicket = () => {
    if (onAddToTicket && selectedInstances.size > 0) {
      const instancesToAdd = searchResults.filter(instance => 
        selectedInstances.has(instance.id)
      );
      onAddToTicket(instancesToAdd);
      handleClose();
    }
  };

  const toggleInstance = (id: string) => {
    const newSet = new Set(selectedInstances);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedInstances(newSet);
  };

  const toggleAll = () => {
    if (selectedInstances.size === searchResults.length && searchResults.length > 0) {
      setSelectedInstances(new Set());
    } else {
      setSelectedInstances(new Set(searchResults.map(r => r.id)));
    }
  };

  const handleTenantSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && !selectedTenants.includes(value)) {
      setSelectedTenants([...selectedTenants, value]);
    }
  };

  const toggleTenant = (tenant: string) => {
    if (selectedTenants.includes(tenant)) {
      setSelectedTenants(selectedTenants.filter(t => t !== tenant));
    } else {
      setSelectedTenants([...selectedTenants, tenant]);
    }
  };

  const toggleAllTenants = () => {
    if (selectedTenants.length === availableTenants.length) {
      setSelectedTenants([]);
    } else {
      setSelectedTenants([...availableTenants]);
    }
  };

  const removeTenant = (tenant: string) => {
    setSelectedTenants(selectedTenants.filter(t => t !== tenant));
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div 
        className={`bg-white shadow-xl w-[1394px] max-w-[95vw] flex flex-col h-[90vh] ${
          viewingInputId ? 'rounded-l-lg' : 'rounded-lg'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-['Roboto'] font-medium text-[16px] text-black">
            Terminate Workflow
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

        {/* Form Section */}
        <div className="px-[35px] pt-[19px] pb-[37px]">
          {/* Form Fields Row */}
          <div className="flex gap-[10px] items-end">
            {/* Workflow Field */}
            <div className="relative">
              <div className="flex items-center mb-2 text-[14px] font-['Roboto'] font-normal leading-[22px]">
                <span className="text-[rgba(0,0,0,0.88)]">Workflow</span>
                <span className="text-[#f5222d] ml-0.5">*</span>
                <span className="text-[rgba(0,0,0,0.88)] ml-0.5">:</span>
              </div>
              <select
                value={selectedWorkflow}
                onChange={(e) => setSelectedWorkflow(e.target.value)}
                className="w-[455px] h-[40px] px-[12px] py-0 bg-white border border-[#d9d9d9] rounded-[6px] text-[14px] font-['Roboto'] font-normal appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: selectedWorkflow ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center'
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select    </option>
                {workflows.map(wf => (
                  <option key={wf} value={wf} className="text-[rgba(0,0,0,0.88)]" style={{ color: 'rgba(0,0,0,0.88)' }}>{wf}</option>
                ))}
              </select>
            </div>

            {/* Workflow Variant Field */}
            <div className="relative">
              <div className="flex items-center mb-2 text-[14px] font-['Roboto'] font-normal leading-[22px]">
                <span className="text-[rgba(0,0,0,0.88)]">Workflow Variant</span>
                <span className="text-[#f5222d] ml-0.5">*</span>
                <span className="text-[rgba(0,0,0,0.88)] ml-0.5">:</span>
              </div>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value)}
                className="w-[249px] h-[40px] px-[12px] py-0 bg-white border border-[#d9d9d9] rounded-[6px] text-[14px] font-['Roboto'] font-normal appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                style={{ 
                  fontVariationSettings: "'wdth' 100",
                  color: selectedVariant ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center'
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select    </option>
                {variants.map(variant => (
                  <option key={variant} value={variant} className="text-[rgba(0,0,0,0.88)]" style={{ color: 'rgba(0,0,0,0.88)' }}>{variant}</option>
                ))}
              </select>
            </div>

            {/* Tenant Field */}
            <div className="relative">
              <div className="flex items-center mb-2 text-[14px] font-['Roboto'] font-normal leading-[22px]">
                <span className="text-[rgba(0,0,0,0.88)]">Tenant</span>
                <span className="text-[rgba(0,0,0,0.88)] ml-0.5">:</span>
              </div>
              <div className="relative">
                <div className="w-[500px] h-[40px] px-[12px] py-[5px] bg-white border border-[#d9d9d9] rounded-[6px] flex gap-1 items-center cursor-pointer overflow-hidden" onClick={() => !isTenantDropdownOpen && setIsTenantDropdownOpen(true)}>
                  {selectedTenants.length > 0 && (
                    <>
                      <div className="flex items-center gap-1 bg-[#f0f0f0] px-2 py-0.5 rounded text-[12px] font-['Roboto'] flex-shrink-0">
                        <span>{selectedTenants[0]}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeTenant(selectedTenants[0]);
                          }}
                          className="hover:bg-gray-300 rounded p-0.5"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                            <path d={svgPaths2.p1e9caf00} fill="#000" opacity="0.45" />
                          </svg>
                        </button>
                      </div>
                      {selectedTenants.length > 1 && (
                        <span className="text-[12px] font-['Roboto'] text-gray-600 flex-shrink-0">
                          +{selectedTenants.length - 1} more
                        </span>
                      )}
                    </>
                  )}
                  <input
                    type="text"
                    value={tenantSearchText}
                    onChange={(e) => setTenantSearchText(e.target.value)}
                    onFocus={() => setIsTenantDropdownOpen(true)}
                    placeholder={selectedTenants.length === 0 ? "Select" : ""}
                    className="flex-1 min-w-[100px] h-[22px] bg-transparent border-none text-[14px] font-['Roboto'] font-normal leading-[22px] text-[rgba(0,0,0,0.88)] appearance-none focus:outline-none placeholder:text-[rgba(0,0,0,0.25)]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />
                  <div className="pointer-events-none flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p2e3100} fill="#878787" />
                    </svg>
                  </div>
                </div>
                {/* Checkbox Dropdown */}
                {isTenantDropdownOpen && (
                  <div
                    ref={tenantDropdownRef}
                    className="absolute left-0 top-[calc(100%+4px)] w-full max-h-[200px] overflow-y-auto bg-white border border-[#d9d9d9] rounded-[6px] shadow-lg z-20"
                  >
                    {/* Select All Option */}
                    <div
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 border-b border-gray-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAllTenants();
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedTenants.length === availableTenants.length && availableTenants.length > 0}
                        onChange={toggleAllTenants}
                        className="w-4 h-4 rounded border-[#d9d9d9] cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span className="text-[14px] font-['Roboto'] font-medium text-[rgba(0,0,0,0.88)]">Select All</span>
                    </div>
                    
                    {/* Individual Tenant Options */}
                    {filteredTenants.length > 0 ? (
                      filteredTenants.map(tenant => (
                        <div
                          key={tenant}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTenant(tenant);
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={selectedTenants.includes(tenant)}
                            onChange={() => toggleTenant(tenant)}
                            className="w-4 h-4 rounded border-[#d9d9d9] cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="text-[14px] font-['Roboto'] text-[rgba(0,0,0,0.88)]">{tenant}</span>
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-[14px] font-['Roboto'] text-gray-400 text-center">
                        No tenants found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex justify-end gap-[10px] mt-[12px]">
            <button
              onClick={handleReset}
              className="h-[34px] px-[43px] py-[16px] bg-white border border-[#d9d9d9] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Reset
              </span>
            </button>
            <button
              onClick={handleSearch}
              disabled={!selectedWorkflow || !selectedVariant}
              className="w-[143px] h-[34px] px-[16px] py-[8px] bg-[#354eb4] border border-[#354eb4] rounded-[4px] flex items-center justify-center hover:bg-[#2d4299] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-['Roboto'] font-medium text-[16px] leading-normal text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                Search
              </span>
            </button>
          </div>
        </div>

        {/* Divider Line (only shown when there are results) */}
        {showResults && <div className="h-[1px] bg-[#EDEDED] mx-[35px]" />}

        {/* Search Results Section or Spacer */}
        <div className="flex-1 overflow-auto">
          {showResults ? (
            <>
              {/* "Search result" Label */}
              <div className="px-[35px] py-[28px]">
                <h3 className="font-['Roboto'] font-semibold text-[16px] leading-[24px] text-black">
                  Search result
                </h3>
              </div>

              {/* Table */}
              <div className="px-[35px]">
                {searchResults.length > 0 ? (
                  <div className="border border-[#f0f0f0] rounded-[2px] overflow-hidden">
                    {/* Table Header */}
                    <div className="bg-[#fafafa] flex border-b border-[#f0f0f0]">
                      {/* Checkbox Column Header */}
                      <div className="w-[48px] flex items-center justify-center py-4 border-r border-[#f0f0f0]">
                        <input
                          type="checkbox"
                          checked={selectedInstances.size === searchResults.length && searchResults.length > 0}
                          onChange={toggleAll}
                          className="w-4 h-4 rounded border-[#d9d9d9] cursor-pointer"
                        />
                      </div>

                      {/* Instance ID Column Header */}
                      <div className="w-[200px] px-4 py-3 border-r border-[#f0f0f0]">
                        <div className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-[#bfbfbf]" fill="currentColor" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                          </svg>
                          <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                            Instance ID
                          </span>
                        </div>
                        <div className="mt-2 relative">
                          <input
                            type="text"
                            placeholder=""
                            className="w-full h-[24px] px-2 bg-white border border-[#d9d9d9] rounded text-[12px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                          <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3" fill="none" viewBox="0 0 11 11">
                            <path d={svgPaths2.p31818e00} stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      {/* Tenant Column Header */}
                      <div className="w-[280px] px-4 py-3 border-r border-[#f0f0f0]">
                        <div className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-[#bfbfbf]" fill="currentColor" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                          </svg>
                          <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                            Tenant
                          </span>
                        </div>
                        <div className="mt-2 relative">
                          <input
                            type="text"
                            placeholder=""
                            className="w-full h-[24px] px-2 bg-white border border-[#d9d9d9] rounded text-[12px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                          <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3" fill="none" viewBox="0 0 11 11">
                            <path d={svgPaths2.p31818e00} stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      {/* Schedule Column Header */}
                      <div className="w-[180px] px-4 py-3 border-r border-[#f0f0f0]">
                        <div className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-[#bfbfbf]" fill="currentColor" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                          </svg>
                          <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                            Schedule
                          </span>
                        </div>
                        <div className="mt-2 relative">
                          <input
                            type="text"
                            placeholder=""
                            className="w-full h-[24px] px-2 bg-white border border-[#d9d9d9] rounded text-[12px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                          <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3" fill="none" viewBox="0 0 11 11">
                            <path d={svgPaths2.p31818e00} stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      {/* Started At Column Header */}
                      <div className="w-[200px] px-4 py-3 border-r border-[#f0f0f0]">
                        <div className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-[#bfbfbf]" fill="currentColor" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                          </svg>
                          <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                            Started At
                          </span>
                        </div>
                        <div className="mt-2 relative">
                          <input
                            type="text"
                            placeholder=""
                            disabled
                            className="w-full h-[24px] px-2 bg-white border border-[#d9d9d9] rounded text-[12px] opacity-50 cursor-not-allowed"
                          />
                          <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 opacity-50" fill="none" viewBox="0 0 11 11">
                            <path d={svgPaths2.p31818e00} stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      {/* Workflow Input Column Header */}
                      <div className="flex-1 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="font-['Roboto'] font-medium text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                            Workflow Input
                          </span>
                        </div>
                        <div className="mt-2 relative">
                          <input
                            type="text"
                            placeholder=""
                            disabled
                            className="w-full h-[24px] px-2 bg-white border border-[#d9d9d9] rounded text-[12px] opacity-50 cursor-not-allowed"
                          />
                          <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 opacity-50" fill="none" viewBox="0 0 11 11">
                            <path d={svgPaths2.p31818e00} stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Table Body */}
                    {searchResults.map((instance) => (
                      <div key={instance.id} className="flex border-b border-[#f0f0f0] last:border-b-0 hover:bg-gray-50">
                        {/* Checkbox Cell */}
                        <div className="w-[48px] flex items-center justify-center py-3 border-r border-[#f0f0f0]">
                          <input
                            type="checkbox"
                            checked={selectedInstances.has(instance.id)}
                            onChange={() => toggleInstance(instance.id)}
                            className="w-4 h-4 rounded border-[#d9d9d9] cursor-pointer"
                          />
                        </div>

                        {/* Instance ID Cell */}
                        <div className="w-[200px] px-4 py-3 border-r border-[#f0f0f0]">
                          <span className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                            {instance.instanceId}
                          </span>
                        </div>

                        {/* Tenant Cell */}
                        <div className="w-[280px] px-4 py-3 border-r border-[#f0f0f0]">
                          <span className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                            {instance.tenant}
                          </span>
                        </div>

                        {/* Schedule Cell */}
                        <div className="w-[180px] px-4 py-3 border-r border-[#f0f0f0]">
                          <span className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                            {instance.schedule}
                          </span>
                        </div>

                        {/* Started At Cell */}
                        <div className="w-[200px] px-4 py-3 border-r border-[#f0f0f0]">
                          <span className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)]">
                            {instance.startedAt}
                          </span>
                        </div>

                        {/* Workflow Input Cell */}
                        <div className="flex-1 px-4 py-3">
                          <button 
                            onClick={() => setViewingInputId(instance.id)}
                            className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#1890ff] hover:underline"
                          >
                            {instance.workflowInput}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    No instances found matching your criteria
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Empty spacer to maintain height when no results */
            <div className="flex-1" />
          )}
        </div>

        {/* Bottom Buttons (fixed at bottom, outside scrollable area) */}
        {showResults && searchResults.length > 0 && (
          <div className="px-[35px] pb-[32px] flex justify-end gap-[10px]">
            <button
              onClick={handleReset}
              className="h-[34px] px-[43px] py-[16px] bg-white border border-[#d9d9d9] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-['Roboto'] font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Reset
              </span>
            </button>
            <button
              onClick={handleAddToTicket}
              disabled={selectedInstances.size === 0}
              className="w-[143px] h-[34px] px-[16px] py-[8px] bg-[#354eb4] border border-[#354eb4] rounded-[4px] flex items-center justify-center hover:bg-[#2d4299] transition-colors disabled:bg-[#354eb4] disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <span className="font-['Roboto'] font-medium text-[16px] leading-normal text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                Add To Ticket
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Workflow Input Expandable Panel */}
      {viewingInputId && (
        <div 
          className="bg-white border-l border-[#d7d7d7] w-[404px] h-[90vh] flex flex-col overflow-hidden relative rounded-r-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative px-[22px] pt-[25px] pb-[20px]">
            <p className="font-['Roboto'] font-medium text-[16px] leading-[22.576px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
              <span>Workflow Input - </span>
              <span className="text-[rgba(0,0,0,0.5)]">
                {searchResults.find(r => r.id === viewingInputId)?.instanceId.replace('Instance', 'Ins') || 'Ins589001'} | {searchResults.find(r => r.id === viewingInputId)?.tenant.substring(0, 8) || 'Brightst'}..
              </span>
            </p>
            <button 
              onClick={() => setViewingInputId(null)}
              className="absolute right-[22px] top-[25.5px] font-['Roboto'] font-normal text-[14px] leading-[22px] text-[#1677ff] hover:underline cursor-pointer"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Close
            </button>
          </div>

          {/* Divider Line */}
          <div className="h-[1px] bg-[#CECACA] mx-[8px]" />

          {/* Search Box */}
          <div className="px-[22px] pt-[20px] pb-[18px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Within Workflow Input"
                className="w-full h-[32px] pl-[35px] pr-[12px] bg-white border border-[#3f7ea1] rounded-[6px] text-[14px] font-['Roboto'] font-normal leading-normal text-[#7e8b99] placeholder:text-[#7e8b99] focus:outline-none focus:ring-1 focus:ring-[#3f7ea1]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
              <svg className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[13px] h-[13px]" fill="none" viewBox="0 0 13 13">
                <path d={svgPaths3.p359e5880} fill="#9EA8B3" />
              </svg>
            </div>
          </div>

          {/* JSON Content */}
          <div className="flex-1 overflow-x-clip overflow-y-auto px-[32px] pb-[20px]">
            <div className="w-[344px] font-['Roboto'] font-normal text-[14px] leading-[22px] text-[rgba(0,0,0,0.8)]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-0">{`{ `}</p>
              <p className="mb-0">{`  "pressRelease": { `}</p>
              <p className="mb-0">{`    "id": "PR-2025-0924", `}</p>
              <p className="mb-0">{`    "title": "Launch of New HealthCare Portal", `}</p>
              <p className="mb-0">{`    "date": "2025-09-24T10:30:00Z", `}</p>
              <p className="mb-0">{`    "author": { `}</p>
              <p className="mb-0">{`      "name": "John Doe", `}</p>
              <p className="mb-0">{`      "email": "john.doe@example.com", `}</p>
              <p className="mb-0">{`      "organization": "HealthTech Innovations" `}</p>
              <p className="mb-0">{`    }, `}</p>
              <p className="mb-0">{`    "summary": "We are excited to announce the launch of our new healthcare portal designed to streamline patient-provider communication.", `}</p>
              <p className="mb-0">{`    "contentSections": [ `}</p>
              <p className="mb-0">{`      { `}</p>
              <p className="mb-0">{`        "heading": "Overview", `}</p>
              <p className="mb-0">{`        "body": "Our new platform integrates eligibility verification, authorization requests, and billing in one easy-to-use dashboard." `}</p>
              <p className="mb-0">{`      }, `}</p>
              <p className="mb-0">{`      { `}</p>
              <p className="mb-0">{`        "heading": "Key Features", `}</p>
              <p className="mb-0">{`        "body": "Single sign-on, real-time claim status, secure document uploads.", `}</p>
              <p className="mb-0">{`        "features": [ `}</p>
              <p className="mb-0">{`          { `}</p>
              <p className="mb-0">{`            "name": "Eligibility Verification", `}</p>
              <p className="mb-0">{`            "description": "Instant checks with payors" `}</p>
              <p className="mb-0">{`          }, `}</p>
              <p className="mb-0">{`          { `}</p>
              <p className="mb-0">{`            "name": "Authorization Tracking", `}</p>
              <p className="mb-0">{`            "description": "Submit and monitor authorization requests" `}</p>
              <p className="mb-0">{`          }, `}</p>
              <p className="mb-0">{`          { `}</p>
              <p className="mb-0">{`            "name": "Cash Posting", `}</p>
              <p className="mb-0">{`            "description": "Simplified payment posting workflows" `}</p>
              <p className="mb-0">{`          } `}</p>
              <p className="mb-0">{`        ] `}</p>
              <p className="mb-0">{`      }, `}</p>
              <p className="mb-0">{`      { `}</p>
              <p className="mb-0">{`        "heading": "Testimonials", `}</p>
              <p className="mb-0">{`        "testimonials": [ `}</p>
              <p className="mb-0">{`          { `}</p>
              <p className="mb-0">{`            "user": "Dr. Smith", `}</p>
              <p className="mb-0">{`            "comment": "This system has reduced my admin time by 40%!" `}</p>
              <p className="mb-0">{`          }, `}</p>
              <p className="mb-0">{`          { `}</p>
              <p className="mb-0">{`            "user": "Jane, RN", `}</p>
              <p className="mb-0">{`            "comment": "Finally a portal that's intuitive and reliable." `}</p>
              <p className="mb-0">{`          } `}</p>
              <p className="mb-0">{`        ] `}</p>
              <p className="mb-0">{`      } `}</p>
              <p className="mb-0">{`    ], `}</p>
              <p className="mb-0">{`    "ctaOptions": [ `}</p>
              <p className="mb-0">{`      { `}</p>
              <p className="mb-0">{`        "id": "cta-1", `}</p>
              <p className="mb-0">{`        "text": "Sign Up for Free Trial", `}</p>
              <p className="mb-0">{`        "url": "https://portal.example.com/signup" `}</p>
              <p className="mb-0">{`      }, `}</p>
              <p className="mb-0">{`      { `}</p>
              <p className="mb-0">{`        "id": "cta-2", `}</p>
              <p className="mb-0">{`        "text": "Request a Demo", `}</p>
              <p className="mb-0">{`        "url": "https://portal.example.com/demo" `}</p>
              <p className="mb-0">{`      }, `}</p>
              <p className="mb-0">{`      { `}</p>
              <p className="mb-0">{`        "id": "cta-3", `}</p>
              <p className="mb-0">{`        "text": "Download Product Brochure", `}</p>
              <p className="mb-0">{`        "url": "https://portal.example.com/brochure.pdf" `}</p>
              <p className="mb-0">{`      } `}</p>
              <p className="mb-0">{`    ], `}</p>
              <p className="mb-0">{`    "tags": ["Healthcare", "Portal", "Authorization", "Eligibility", "Cash Posting"], `}</p>
              <p className="mb-0">{`    "meta": { `}</p>
              <p className="mb-0">{`      "language": "en", `}</p>
              <p className="mb-0">{`      "region": "US", `}</p>
              <p className="mb-0">{`      "keywords": ["healthtech", "authorization portal", "patient management"], `}</p>
              <p className="mb-0">{`      "createdBy": "PR Team", `}</p>
              <p className="mb-0">{`      "lastUpdated": "2025-09-24T11:00:00Z", `}</p>
              <p className="mb-0">{`      "contactInfo": { `}</p>
              <p className="mb-0">{`        "phone": "+1-800-555-1234", `}</p>
              <p className="mb-0">{`        "supportEmail": "support@example.com", `}</p>
              <p className="mb-0">{`        "social": { `}</p>
              <p className="mb-0">{`          "twitter": "https://twitter.com/healthtech", `}</p>
              <p className="mb-0">{`          "linkedin": "https://linkedin.com/company/healthtech" `}</p>
              <p className="mb-0">{`        } `}</p>
              <p className="mb-0">{`      } `}</p>
              <p className="mb-0">{`    }, `}</p>
              <p className="mb-0">{`    "relatedPressReleases": [ `}</p>
              <p className="mb-0">{`      { `}</p>
              <p className="mb-0">{`        "id": "PR-2025-0820", `}</p>
              <p className="mb-0">{`        "title": "Partnership with MediPay", `}</p>
              <p className="mb-0">{`        "url": "https://example.com/press/PR-2025-0820" `}</p>
              <p className="mb-0">{`      }, `}</p>
              <p className="mb-0">{`      { `}</p>
              <p className="mb-0">{`        "id": "PR-2025-0710", `}</p>
              <p className="mb-0">{`        "title": "Launch of Authorization Agent Beta", `}</p>
              <p className="mb-0">{`        "url": "https://example.com/press/PR-2025-0710" `}</p>
              <p className="mb-0">{`      } `}</p>
              <p className="mb-0">{`    ] `}</p>
              <p className="mb-0">{`  } `}</p>
              <p className="mb-0">{`} `}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}