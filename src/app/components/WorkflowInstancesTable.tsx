import { useState } from 'react';
import svgPaths from '@/imports/svg-iu7q358syy';
import { ResponsiveActionButtons, type ActionButtonConfig } from '@/app/components/ResponsiveActionButtons';

export interface WorkflowInstance {
  id: string;
  instanceId: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  workflowVersion: string;
  scheduledStartTime: string;
  actualStartTime: string;
  endTime: string;
  status: string;
  message: string;
}

interface WorkflowInstancesTableProps {
  instances?: WorkflowInstance[];
  onRemove?: (ids: string[]) => void;
  isCompleted?: boolean;
  onInstancesChange?: (instances: WorkflowInstance[]) => void;
  onTerminate?: (count: number) => void;
  onReTrigger?: (count: number) => void;
}

// Sample data from the Figma design
const defaultInstances: WorkflowInstance[] = [
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

export function WorkflowInstancesTable({ instances = defaultInstances, onRemove, isCompleted, onInstancesChange, onTerminate, onReTrigger }: WorkflowInstancesTableProps) {
  const [selectedInstances, setSelectedInstances] = useState<Set<string>>(new Set());
  const [workflowInstances, setWorkflowInstances] = useState<WorkflowInstance[]>(instances);
  const [searchFilters, setSearchFilters] = useState({
    instanceId: '',
    tenant: '',
    workflow: '',
    workflowVariant: '',
    workflowVersion: '',
    scheduledStartTime: '',
    actualStartTime: '',
    endTime: '',
    status: '',
    message: ''
  });

  const toggleInstance = (id: string) => {
    if (isCompleted) return; // Prevent selection when completed
    const newSet = new Set(selectedInstances);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedInstances(newSet);
  };

  const toggleAll = () => {
    if (isCompleted) return; // Prevent selection when completed
    if (selectedInstances.size === workflowInstances.length && workflowInstances.length > 0) {
      setSelectedInstances(new Set());
    } else {
      setSelectedInstances(new Set(workflowInstances.map(r => r.id)));
    }
  };

  const handleRemoveSelected = () => {
    if (isCompleted || !onRemove || selectedInstances.size === 0) return; // Block removal when completed
    onRemove(Array.from(selectedInstances));
    setSelectedInstances(new Set());
  };

  const handleTerminate = () => {
    if (isCompleted || selectedInstances.size === 0) return; // Block terminate when completed
    
    const updatedInstances = workflowInstances.map(instance => 
      selectedInstances.has(instance.id) 
        ? { ...instance, status: 'Terminated' }
        : instance
    );
    
    setWorkflowInstances(updatedInstances);
    
    // Persist changes to parent
    if (onInstancesChange) {
      onInstancesChange(updatedInstances);
    }
    
    // Call onTerminate callback
    if (onTerminate) {
      onTerminate(selectedInstances.size);
    }
    
    setSelectedInstances(new Set());
  };

  const handleReTrigger = () => {
    if (isCompleted || selectedInstances.size === 0) return; // Block re-trigger when completed
    
    // Call onReTrigger callback to record activity
    if (onReTrigger) {
      onReTrigger(selectedInstances.size);
    }
    
    // First set to "Trigger Initiated"
    const initiatedInstances = workflowInstances.map(instance => 
      selectedInstances.has(instance.id) 
        ? { ...instance, status: 'Trigger Initiated' }
        : instance
    );
    
    setWorkflowInstances(initiatedInstances);
    
    // Persist changes to parent
    if (onInstancesChange) {
      onInstancesChange(initiatedInstances);
    }
    
    // After 2 seconds, change to "Running Now"
    setTimeout(() => {
      const runningInstances = workflowInstances.map(instance => 
        selectedInstances.has(instance.id) 
          ? { ...instance, status: 'Running Now' }
          : instance
      );
      
      setWorkflowInstances(runningInstances);
      
      // Persist final state to parent
      if (onInstancesChange) {
        onInstancesChange(runningInstances);
      }
    }, 2000);
    
    setSelectedInstances(new Set());
  };

  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running Now':
        return '#52c41a'; // Green
      case 'Trigger Initiated':
        return '#1890ff'; // Blue
      case 'Terminated':
        return '#ff4d4f'; // Red
      default:
        return '#52c41a'; // Default green
    }
  };

  // Action buttons configuration
  const actionButtons: ActionButtonConfig[] = [
    {
      id: 'terminate',
      label: 'Terminate',
      onClick: handleTerminate,
      disabled: isCompleted || selectedInstances.size === 0,
      element: (
        <button
          disabled={isCompleted || selectedInstances.size === 0}
          onClick={handleTerminate}
          className="bg-[#354eb4] content-stretch flex gap-[6.4px] items-center justify-center opacity-20 px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[116px] disabled:opacity-20 enabled:opacity-100 enabled:hover:bg-[#2d4299] transition-all"
        >
          <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="overflow-clip relative shrink-0 size-[13.6px]">
            <div className="absolute inset-[5%_5.18%_2.7%_2.51%]">
              <div className="absolute inset-[0_0_-0.01%_-0.02%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6923 15.6923">
                  <g>
                    <path d={svgPaths.p1d7cfec0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.85" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-[calc(50%-0.22px)] rounded-[1.656px] size-[6.277px] top-[calc(50%+0.22px)]" />
          </div>
          <p className="css-ew64yg font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Terminate
          </p>
        </button>
      )
    },
    {
      id: 're-trigger',
      label: 'Re-Trigger',
      onClick: handleReTrigger,
      disabled: isCompleted || selectedInstances.size === 0,
      element: (
        <button
          disabled={isCompleted || selectedInstances.size === 0}
          onClick={handleReTrigger}
          className="bg-[#354eb4] content-stretch flex gap-[6.4px] items-center justify-center opacity-20 px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[116px] disabled:opacity-20 enabled:opacity-100 enabled:hover:bg-[#2d4299] transition-all"
        >
          <div className="h-[11.955px] relative shrink-0 w-[13.451px]">
            <div className="absolute inset-[0_-5.05%_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6625 14.9444">
                <g>
                  <path d={svgPaths.p34fed880} fill="white" stroke="white" strokeWidth="1.7" />
                  <path d={svgPaths.p3f6a8100} fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                </g>
              </svg>
            </div>
          </div>
          <p className="css-ew64yg font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Re-Trigger
          </p>
        </button>
      )
    },
    {
      id: 'modify',
      label: 'Modify Ticket',
      onClick: () => {},
      disabled: isCompleted,
      element: (
        <button className="bg-[#354eb4] content-stretch flex items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[116px] hover:bg-[#2d4299] transition-colors">
          <p className="css-ew64yg font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Modify Ticket
          </p>
        </button>
      )
    },
    {
      id: 'remove',
      label: 'Remove from List',
      onClick: handleRemoveSelected,
      disabled: selectedInstances.size === 0,
      element: (
        <button
          disabled={selectedInstances.size === 0}
          onClick={handleRemoveSelected}
          className="content-stretch flex gap-[6.4px] items-center justify-center opacity-20 px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[147.2px] disabled:opacity-20 enabled:opacity-100 enabled:hover:bg-gray-50 transition-all"
        >
          <div aria-hidden="true" className="absolute border border-[#e84e0f] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="relative shrink-0 size-[14.4px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g>
                <path d={svgPaths.p2692f600} fill="#E84E0F" fillOpacity="0.1" />
                <g>
                  <path d={svgPaths.p659e500} fill="#E84E0F" />
                  <path d={svgPaths.p7640f00} fill="#E84E0F" />
                </g>
              </g>
            </svg>
          </div>
          <p className="font-['Roboto'] font-medium leading-normal relative shrink-0 text-[#e84e0f] text-[12.8px] tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Remove from List
          </p>
        </button>
      )
    },
    {
      id: 'reload',
      label: 'Reload',
      onClick: () => {},
      disabled: false,
      element: (
        <button className="bg-white content-stretch flex items-center justify-center px-[12.8px] py-[6.4px] rounded-[4px] shrink-0 w-[33.6px] relative hover:bg-[#f0f5ff] transition-all">
          <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="relative shrink-0 size-[14.4px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g clipPath="url(#clip0_97_21735)">
                <path d={svgPaths.p1ab33a00} fill="#354EB4" />
              </g>
              <defs>
                <clipPath id="clip0_97_21735">
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
    <div className="flex flex-col gap-[13px]">
      {/* Header with Title and Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="h-[21px]">
          <p className="font-['Roboto'] font-bold leading-normal text-[#263238] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Workflow Instances
          </p>
        </div>
        <ResponsiveActionButtons actions={actionButtons} />
      </div>

      {/* Table Container */}
      <div className="border border-[#e1dfdf] rounded-[8px] overflow-hidden max-h-[500px]">
        <div className="overflow-auto max-h-[500px]">
          <table className="w-full">
          <thead>
            <tr className="bg-[#f8fbff]">
              {/* Checkbox Column Header */}
              <th className="w-[45px] border-r border-[rgba(234,237,242,0.3)] p-[16px]">
                <input
                  type="checkbox"
                  checked={selectedInstances.size === workflowInstances.length && workflowInstances.length > 0}
                  onChange={toggleAll}
                  disabled={isCompleted}
                  className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </th>
              
              {/* Instance ID */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.instanceId ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Instance ID
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={searchFilters.instanceId}
                    onChange={(e) => setSearchFilters({...searchFilters, instanceId: e.target.value})}
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
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
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </th>

              {/* Workflow Version */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.workflowVersion ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Workflow Version
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={searchFilters.workflowVersion}
                    onChange={(e) => setSearchFilters({...searchFilters, workflowVersion: e.target.value})}
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </th>

              {/* Scheduled Start Time */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.scheduledStartTime ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Scheduled Start Time
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={searchFilters.scheduledStartTime}
                    onChange={(e) => setSearchFilters({...searchFilters, scheduledStartTime: e.target.value})}
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </th>

              {/* Actual Start Time */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.actualStartTime ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Actual Start Time
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={searchFilters.actualStartTime}
                    onChange={(e) => setSearchFilters({...searchFilters, actualStartTime: e.target.value})}
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </th>

              {/* End Time */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.endTime ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      End Time
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={searchFilters.endTime}
                    onChange={(e) => setSearchFilters({...searchFilters, endTime: e.target.value})}
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </th>

              {/* Three Dots */}
              <th className="w-[40px]"></th>
            </tr>
          </thead>
          <tbody>
            {workflowInstances.map((instance) => (
              <tr key={instance.id} className="bg-white border-b border-[#ebedf8] hover:bg-gray-50">
                {/* Checkbox */}
                <td className="p-[8px] text-center">
                  <input
                    type="checkbox"
                    checked={selectedInstances.has(instance.id)}
                    onChange={() => toggleInstance(instance.id)}
                    disabled={isCompleted}
                    className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </td>
                
                {/* Instance ID */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {instance.instanceId}
                  </p>
                </td>

                {/* Tenant */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {instance.tenant}
                  </p>
                </td>

                {/* Workflow */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {instance.workflow}
                  </p>
                </td>

                {/* Workflow Variant */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {instance.workflowVariant}
                  </p>
                </td>

                {/* Workflow Version */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {instance.workflowVersion}
                  </p>
                </td>

                {/* Scheduled Start Time */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {instance.scheduledStartTime}
                  </p>
                </td>

                {/* Actual Start Time */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {instance.actualStartTime}
                  </p>
                </td>

                {/* End Time */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {instance.endTime}
                  </p>
                </td>

                {/* Status */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <div className="flex items-center gap-[4px]">
                    <div className="size-[8px] bg-[#52c41a] rounded-full" style={{ backgroundColor: getStatusColor(instance.status) }}></div>
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {instance.status}
                    </p>
                  </div>
                </td>

                {/* Message */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {instance.message}
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
  );
}