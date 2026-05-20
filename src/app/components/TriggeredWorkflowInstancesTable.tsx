import { RefreshCcw, PlayCircle } from 'lucide-react';
import svgPaths from '@/imports/svg-j5qftr15rq';
import { useState, useEffect } from 'react';

export interface TriggeredWorkflow {
  id: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  variantVersion: string;
  inputTag: string; // Config Name
  status: 'Enabled' | 'Disabled';
  message: string;
}

interface TriggeredWorkflowInstancesTableProps {
  workflows: TriggeredWorkflow[];
  onTrigger?: () => void;
  onModifyTicket?: () => void;
  onRefresh?: () => void;
  onWorkflowsChange?: (workflows: TriggeredWorkflow[]) => void;
  onActivityAdd?: (action: string, count: number) => void;
}

function FilterIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <div className="absolute bottom-[14.6%] left-1/4 right-1/4 top-[16.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
          <g>
            <path d={svgPaths.p19fa10c0} fill="white" />
            <path d={svgPaths.p1d5a6a00} fill="white" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p31818e00} stroke="#545454" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export function TriggeredWorkflowInstancesTable({
  workflows,
  onTrigger,
  onModifyTicket,
  onRefresh,
  onWorkflowsChange,
  onActivityAdd
}: TriggeredWorkflowInstancesTableProps) {
  // State for tracking selected workflows
  const [selectedWorkflows, setSelectedWorkflows] = useState<Set<string>>(new Set());

  // State for search filters
  const [searchFilters, setSearchFilters] = useState({
    tenant: '',
    workflow: '',
    workflowVariant: '',
    variantVersion: '',
    configName: '',
    status: '',
    message: ''
  });

  // Toggle individual workflow checkbox
  const toggleWorkflow = (id: string) => {
    const newSelected = new Set(selectedWorkflows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedWorkflows(newSelected);
  };

  // Toggle all workflows checkbox
  const toggleAll = () => {
    if (selectedWorkflows.size === workflows.length) {
      // Deselect all
      setSelectedWorkflows(new Set());
    } else {
      // Select all
      setSelectedWorkflows(new Set(workflows.map(w => w.id)));
    }
  };

  // Handle trigger action
  const handleTrigger = () => {
    if (selectedWorkflows.size === 0) return;

    // Update selected workflows to 'Enabled' status
    const updatedWorkflows = workflows.map(workflow => {
      if (selectedWorkflows.has(workflow.id)) {
        return { ...workflow, status: 'Enabled' as const };
      }
      return workflow;
    });

    // Notify parent component of changes
    if (onWorkflowsChange) {
      onWorkflowsChange(updatedWorkflows);
    }

    // Add activity to timeline
    if (onActivityAdd) {
      onActivityAdd('Triggered workflow manually', selectedWorkflows.size);
    }

    // Clear selection after triggering
    setSelectedWorkflows(new Set());

    // Call the original onTrigger callback if provided
    if (onTrigger) {
      onTrigger();
    }
  };

  return (
    <div className="flex flex-col gap-[13px]">
      {/* Header with Title and Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="h-[21px]">
          <p className="font-['Roboto'] font-bold leading-normal text-[#263238] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Triggered Workflow Instances
          </p>
        </div>
        
        <div className="flex gap-2 items-center">
          {/* Trigger Button */}
          <button
            onClick={handleTrigger}
            disabled={!onTrigger}
            className="bg-[#354eb4] content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 disabled:opacity-20 enabled:opacity-100 enabled:hover:bg-[#2d4299] transition-all"
          >
            <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <PlayCircle className="size-[13.6px] text-white" fill="white" />
            <p className="font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Trigger
            </p>
          </button>

          {/* Modify Ticket Button */}
          <button
            onClick={onModifyTicket}
            className="bg-[#354eb4] content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 hover:bg-[#2d4299] transition-all"
          >
            <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Modify Ticket
            </p>
          </button>

          {/* Divider */}
          <div className="h-[34px] w-0 flex items-center justify-center">
            <div className="h-0 w-[34px] rotate-90">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 1">
                <line stroke="#D0D0D0" x2="34" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            className="bg-white content-stretch flex items-center justify-center px-[12.8px] py-[6.4px] rounded-[4px] shrink-0 w-[33.6px] relative hover:bg-[#f0f5ff] transition-all"
          >
            <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <RefreshCcw className="size-[14.4px] text-[#354eb4] relative shrink-0" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <div className="border border-[#e1dfdf] rounded-[8px] overflow-hidden max-h-[500px]">
          <div className="overflow-auto max-h-[500px]">
            <table className="w-full">
            <thead>
              <tr className="bg-[#f8fbff]">
                {/* Checkbox Column Header */}
                <th className="w-[45px] border-r border-[rgba(234,237,242,0.3)] p-[16px]">
                  <input
                    type="checkbox"
                    className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer"
                    checked={selectedWorkflows.size === workflows.length}
                    onChange={toggleAll}
                  />
                </th>
                
                {/* Tenant */}
                <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[3px] items-center whitespace-nowrap">
                      <div className="size-[16px]">
                        <div className={`${searchFilters.tenant ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                          <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Tenant
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={searchFilters.tenant}
                      onChange={(e) => setSearchFilters({...searchFilters, tenant: e.target.value})}
                      className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px]"
                    />
                  </div>
                </th>

                {/* Workflow */}
                <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[3px] items-center whitespace-nowrap">
                      <div className="size-[16px]">
                        <div className={`${searchFilters.workflow ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                          <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Workflow
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={searchFilters.workflow}
                      onChange={(e) => setSearchFilters({...searchFilters, workflow: e.target.value})}
                      className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px]"
                    />
                  </div>
                </th>

                {/* Workflow Variant */}
                <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[3px] items-center whitespace-nowrap">
                      <div className="size-[16px]">
                        <div className={`${searchFilters.workflowVariant ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                          <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Workflow Variant
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={searchFilters.workflowVariant}
                      onChange={(e) => setSearchFilters({...searchFilters, workflowVariant: e.target.value})}
                      className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px]"
                    />
                  </div>
                </th>

                {/* Variant Version */}
                <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[3px] items-center whitespace-nowrap">
                      <div className="size-[16px]">
                        <div className={`${searchFilters.variantVersion ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                          <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Variant Version
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={searchFilters.variantVersion}
                      onChange={(e) => setSearchFilters({...searchFilters, variantVersion: e.target.value})}
                      className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px]"
                    />
                  </div>
                </th>

                {/* Config Name */}
                <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[3px] items-center whitespace-nowrap">
                      <div className="size-[16px]">
                        <div className={`${searchFilters.configName ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                          <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Config Name
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={searchFilters.configName}
                      onChange={(e) => setSearchFilters({...searchFilters, configName: e.target.value})}
                      className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px]"
                    />
                  </div>
                </th>

                {/* Status */}
                <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[3px] items-center whitespace-nowrap">
                      <div className="size-[16px]">
                        <div className={`${searchFilters.status ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                          <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Status
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={searchFilters.status}
                      onChange={(e) => setSearchFilters({...searchFilters, status: e.target.value})}
                      className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px]"
                    />
                  </div>
                </th>

                {/* Message */}
                <th className="p-[12px] text-left">
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex gap-[3px] items-center whitespace-nowrap">
                      <div className="size-[16px]">
                        <div className={`${searchFilters.message ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                          <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                            <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Message
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder=""
                      value={searchFilters.message}
                      onChange={(e) => setSearchFilters({...searchFilters, message: e.target.value})}
                      className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px]"
                    />
                  </div>
                </th>

                {/* Three Dots */}
                <th className="w-[40px]"></th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((workflow) => (
                <tr key={workflow.id} className="bg-white border-b border-[#ebedf8] hover:bg-gray-50">
                  {/* Checkbox */}
                  <td className="p-[8px] text-center">
                    <input
                      type="checkbox"
                      className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer"
                      checked={selectedWorkflows.has(workflow.id)}
                      onChange={() => toggleWorkflow(workflow.id)}
                    />
                  </td>
                  
                  {/* Tenant */}
                  <td className="px-[16px] py-[8px] whitespace-nowrap">
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {workflow.tenant}
                    </p>
                  </td>

                  {/* Workflow */}
                  <td className="px-[16px] py-[8px] whitespace-nowrap">
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {workflow.workflow}
                    </p>
                  </td>

                  {/* Workflow Variant */}
                  <td className="px-[16px] py-[8px] whitespace-nowrap">
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {workflow.workflowVariant}
                    </p>
                  </td>

                  {/* Variant Version */}
                  <td className="px-[16px] py-[8px] whitespace-nowrap">
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {workflow.variantVersion}
                    </p>
                  </td>

                  {/* Config Name */}
                  <td className="px-[16px] py-[8px] whitespace-nowrap">
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {workflow.inputTag}
                    </p>
                  </td>

                  {/* Status */}
                  <td className="px-[16px] py-[8px] whitespace-nowrap">
                    <div className="flex items-center gap-[4px]">
                      <div className="size-[8px] rounded-full" style={{ backgroundColor: workflow.status === 'Enabled' ? '#43A03B' : '#EE0303' }}></div>
                      <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {workflow.status === 'Enabled' ? 'Run Invoked' : 'Run Invocation Failed'}
                      </p>
                    </div>
                  </td>

                  {/* Message */}
                  <td className="px-[16px] py-[8px] whitespace-nowrap">
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {workflow.message}
                    </p>
                  </td>

                  {/* Three Dots Menu */}
                  <td className="px-[8px] py-[8px] text-center">
                    <button className="text-[#263238] hover:bg-gray-200 rounded p-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="3" r="1.5" fill="currentColor"/>
                        <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
                        <circle cx="8" cy="13" r="1.5" fill="currentColor"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}