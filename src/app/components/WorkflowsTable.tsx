import { useState } from 'react';
import svgPaths from '@/imports/svg-iu7q358syy';
import svgPathsButtons from '@/imports/svg-whk9h4wwsa';
import { ResponsiveActionButtons, type ActionButtonConfig } from '@/app/components/ResponsiveActionButtons';

export interface TriggerWorkflow {
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

interface WorkflowsTableProps {
  workflows: TriggerWorkflow[];
  onRemove: (ids: string[]) => void;
  onModify: () => void;
  showMonitor?: boolean;
  onEnableTrigger?: (count: number) => void;
  onDisableTrigger?: (count: number) => void;
  isCompleted?: boolean;
  onWorkflowsChange?: (workflows: TriggerWorkflow[]) => void;
}

export function WorkflowsTable({ workflows: initialWorkflows, onRemove, onModify, showMonitor, onEnableTrigger, onDisableTrigger, isCompleted = false, onWorkflowsChange }: WorkflowsTableProps) {
  const [workflows, setWorkflows] = useState<TriggerWorkflow[]>(initialWorkflows);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [searchFilters, setSearchFilters] = useState({
    tenant: '',
    workflow: '',
    workflowVariant: '',
    variantVersion: '',
    schedule: '',
    inputTag: '',
    status: '',
    message: ''
  });

  const toggleSelection = (id: string) => {
    if (isCompleted) return; // Prevent selection changes when completed
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedIds(newSet);
  };

  const toggleSelectAll = () => {
    if (isCompleted) return; // Prevent selection changes when completed
    if (selectedIds.size === workflows.length && workflows.length > 0) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(workflows.map(w => w.id)));
    }
  };

  const handleEnable = () => {
    if (isCompleted || selectedIds.size === 0) return;
    
    const updatedWorkflows = workflows.map(workflow =>
      selectedIds.has(workflow.id)
        ? { ...workflow, status: 'Enabled' as const }
        : workflow
    );
    
    setWorkflows(updatedWorkflows);
    
    // Persist changes to parent
    if (onWorkflowsChange) {
      onWorkflowsChange(updatedWorkflows);
    }
    
    if (onEnableTrigger) {
      onEnableTrigger(selectedIds.size);
    }
    
    setSelectedIds(new Set());
  };

  const handleDisable = () => {
    if (selectedIds.size === 0) return;
    
    const updatedWorkflows = workflows.map(workflow =>
      selectedIds.has(workflow.id)
        ? { ...workflow, status: 'Disabled' as const }
        : workflow
    );
    
    setWorkflows(updatedWorkflows);
    
    // Persist changes to parent
    if (onWorkflowsChange) {
      onWorkflowsChange(updatedWorkflows);
    }
    
    if (onDisableTrigger) {
      onDisableTrigger(selectedIds.size);
    }
    
    setSelectedIds(new Set());
  };

  const handleRemove = () => {
    if (selectedIds.size === 0) return;
    onRemove(Array.from(selectedIds));
    setSelectedIds(new Set());
  };

  // Check if Enable/Disable buttons should be active based on selected workflows' status
  const getSelectedWorkflows = () => {
    return workflows.filter(w => selectedIds.has(w.id));
  };

  const canEnable = () => {
    if (selectedIds.size === 0) return false;
    const selectedWorkflows = getSelectedWorkflows();
    // Enable button is active only if at least one selected workflow is Disabled
    return selectedWorkflows.some(w => w.status === 'Disabled');
  };

  const canDisable = () => {
    if (selectedIds.size === 0) return false;
    const selectedWorkflows = getSelectedWorkflows();
    // Disable button is active only if at least one selected workflow is Enabled
    return selectedWorkflows.some(w => w.status === 'Enabled');
  };

  // Filter workflows based on search
  const filteredWorkflows = workflows.filter(workflow => {
    return (
      workflow.tenant.toLowerCase().includes(searchFilters.tenant.toLowerCase()) &&
      workflow.workflow.toLowerCase().includes(searchFilters.workflow.toLowerCase()) &&
      workflow.workflowVariant.toLowerCase().includes(searchFilters.workflowVariant.toLowerCase()) &&
      workflow.variantVersion.toLowerCase().includes(searchFilters.variantVersion.toLowerCase()) &&
      workflow.schedule.toLowerCase().includes(searchFilters.schedule.toLowerCase()) &&
      workflow.inputTag.toLowerCase().includes(searchFilters.inputTag.toLowerCase()) &&
      workflow.status.toLowerCase().includes(searchFilters.status.toLowerCase()) &&
      workflow.message.toLowerCase().includes(searchFilters.message.toLowerCase())
    );
  });

  const getStatusColor = (status: string) => {
    return status === 'Enabled' ? '#52c41a' : '#ff4d4f';
  };

  // Define action buttons for responsive behavior
  const actionButtons: ActionButtonConfig[] = [
    {
      id: 'disable',
      label: 'Disable',
      onClick: handleDisable,
      disabled: isCompleted || !canDisable(),
      element: (
        <button
          onClick={handleDisable}
          disabled={isCompleted || !canDisable()}
          className={`content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[116px] transition-all ${
            !isCompleted && canDisable() ? 'bg-[#d5121d] opacity-100 hover:bg-[#b01018]' : 'bg-[#d5121d] opacity-20'
          }`}
        >
          <div aria-hidden="true" className="absolute border border-[#d5121d] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="shrink-0 size-[13.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPathsButtons.p1dc7f980} fill="#C0C8E8" />
              <path d={svgPathsButtons.p30703a00} fill="#D5121D" />
            </svg>
          </div>
          <p className="font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Disable
          </p>
        </button>
      )
    },
    {
      id: 'enable',
      label: 'Enable',
      onClick: handleEnable,
      disabled: isCompleted || !canEnable(),
      element: (
        <button
          onClick={handleEnable}
          disabled={isCompleted || !canEnable()}
          className={`content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[116px] transition-all ${
            !isCompleted && canEnable() ? 'bg-[#354eb4] opacity-100 hover:bg-[#2d4299]' : 'bg-[#354eb4] opacity-20'
          }`}
        >
          <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="h-[13.6px] shrink-0 w-[12.8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6625 14.9444">
              <path clipRule="evenodd" d={svgPathsButtons.p2c0b8600} fill="white" fillRule="evenodd" />
              <path d={svgPathsButtons.p3f6a8100} fill="white" stroke="#C0C8E8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            </svg>
          </div>
          <p className="font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enable
          </p>
        </button>
      )
    },
    {
      id: 'modify',
      label: 'Modify Ticket',
      onClick: onModify,
      disabled: isCompleted,
      element: (
        <button
          onClick={onModify}
          disabled={isCompleted}
          className={`content-stretch flex items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[116px] transition-all ${
            isCompleted ? 'bg-[#ebedf8] opacity-40' : 'bg-[#354eb4] hover:bg-[#2d4299]'
          }`}
        >
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] ${isCompleted ? 'border-[#ebedf8]' : 'border-[#354eb4]'}`} />
          <p className={`font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] tracking-[0.2px] ${isCompleted ? 'text-[#c0c8e8]' : 'text-white'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            Modify Ticket
          </p>
        </button>
      )
    },
    {
      id: 'remove',
      label: 'Remove from List',
      onClick: handleRemove,
      disabled: isCompleted || selectedIds.size === 0,
      element: (
        <button
          onClick={handleRemove}
          disabled={isCompleted || selectedIds.size === 0}
          className={`bg-white content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] rounded-[4px] shrink-0 w-[147.2px] relative transition-all ${
            isCompleted || selectedIds.size === 0 ? 'opacity-40' : 'enabled:hover:bg-[#fff1f0]'
          }`}
        >
          <div aria-hidden="true" className="absolute border border-[#e84e0f] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="shrink-0 size-[13.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPathsButtons.p2692f600} fill="#E84E0F" fillOpacity="0.1" />
              <path d={svgPathsButtons.p659e500} fill="#E84E0F" />
              <path d={svgPathsButtons.p7640f00} fill="#E84E0F" />
            </svg>
          </div>
          <p className="font-['Roboto'] font-medium leading-normal relative shrink-0 text-[#e84e0f] text-[12.8px] tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Remove from List
          </p>
        </button>
      )
    },
    {
      id: 'refresh',
      label: 'Refresh',
      onClick: () => {},
      element: (
        <button className="bg-white content-stretch flex items-center justify-center px-[12.8px] py-[6.4px] rounded-[4px] shrink-0 w-[33.6px] relative hover:bg-[#f0f5ff] transition-all">
          <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="shrink-0 size-[13.6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g clipPath="url(#clip0_workflows)">
                <path d={svgPathsButtons.p1ab33a00} fill="#354EB4" />
              </g>
              <defs>
                <clipPath id="clip0_workflows">
                  <rect fill="white" height="18" width="18" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
      )
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header with Workflows title and Action Buttons */}
      <div className="relative mb-[16px] h-[42px]">
        {/* Workflows Title (Left) */}
        <p className="absolute font-['Roboto'] font-bold leading-normal left-0 text-[#263238] text-[18px] top-[calc(50%-10.5px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Workflows
        </p>

        {/* Action Buttons (Right) */}
        <div className="absolute content-stretch flex gap-[8px] items-center right-0 top-[calc(50%-17px)]">
          <ResponsiveActionButtons actions={actionButtons} />
        </div>
      </div>

      {/* Table */}
      <div className="border border-[#e1dfdf] rounded-[8px] overflow-hidden max-h-[500px]">
        <div className="overflow-auto max-h-[500px]">
          <table className="w-full">
          <thead>
            <tr className="bg-[#f8fbff]">
              {/* Checkbox */}
              <th className="w-[45px] border-r border-[rgba(234,237,242,0.3)] p-[16px]">
                <input
                  type="checkbox"
                  checked={selectedIds.size === filteredWorkflows.length && filteredWorkflows.length > 0}
                  onChange={toggleSelectAll}
                  className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer"
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

              {/* Schedule */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.schedule ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Schedule
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={searchFilters.schedule}
                    onChange={(e) => setSearchFilters({...searchFilters, schedule: e.target.value})}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px]"
                  />
                </div>
              </th>

              {/* Input Tag */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.inputTag ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Input Tag
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={searchFilters.inputTag}
                    onChange={(e) => setSearchFilters({...searchFilters, inputTag: e.target.value})}
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
                  <select
                    value={searchFilters.status}
                    onChange={(e) => setSearchFilters({...searchFilters, status: e.target.value})}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px]"
                  >
                    <option value="">All</option>
                    <option value="Enabled">Enabled</option>
                    <option value="Disabled">Disabled</option>
                  </select>
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

              {/* Input Icon */}
              <th className="w-[60px]"></th>
            </tr>
          </thead>
          <tbody>
            {filteredWorkflows.map((workflow) => (
              <tr key={workflow.id} className="bg-white border-b border-[#ebedf8] hover:bg-gray-50">
                {/* Checkbox */}
                <td className="p-[8px] text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(workflow.id)}
                    onChange={() => toggleSelection(workflow.id)}
                    className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer"
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

                {/* Schedule */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {workflow.schedule}
                  </p>
                </td>

                {/* Input Tag */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {workflow.inputTag}
                  </p>
                </td>

                {/* Status */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <div className="flex items-center gap-[4px]">
                    <div 
                      className="size-[8px] rounded-full"
                      style={{ backgroundColor: getStatusColor(workflow.status) }}
                    ></div>
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {workflow.status}
                    </p>
                  </div>
                </td>

                {/* Message */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {workflow.message}
                  </p>
                </td>

                {/* View Input Icon */}
                <td className="px-[8px] py-[8px] text-center">
                  <button className="text-[#1890ff] hover:text-[#40a9ff]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z" fill="currentColor"/>
                      <path d="M10 4C5.58172 4 2 10 2 10C2 10 5.58172 16 10 16C14.4183 16 18 10 18 10C18 10 14.4183 4 10 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
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
  );
}