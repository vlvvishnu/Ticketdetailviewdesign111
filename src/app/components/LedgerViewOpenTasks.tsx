import { useState } from 'react';
import { Clock, MoreVertical } from 'lucide-react';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import completeSvgPaths from '../imports/svg-3mkstx25d2';
import redirectSvgPaths from '../imports/svg-o92yqwqs8a';
import { CompactWorkflowTable } from './CompactWorkflowTable';
import { TicketSummaryOverlay } from './TicketSummaryOverlay';
import { getParentTicketId } from './ticketData';

// Render a table section with horizontal scrolling
const renderTable = (
  workflows: any[], 
  title: string | undefined, 
  selectedRows: Set<string>, 
  onSelectAll: (workflows: any[]) => void, 
  onSelectRow: (id: string) => void
) => (
  <div className="mb-8">
    {title && (
      <div className="mb-4">
        <h3 className="text-[14px] font-semibold text-[#374659] mb-2">{title}</h3>
        <div className="border-t border-[#e0e0e0]" />
      </div>
    )}
    {/* Horizontal scroll wrapper */}
    <div className="overflow-x-auto border border-[#e1dfdf] rounded-[4px]">
      <div className="min-w-[900px]">
        <CompactWorkflowTable 
          workflows={workflows}
          selectedRows={selectedRows}
          onSelectAll={onSelectAll}
          onSelectRow={onSelectRow}
        />
      </div>
    </div>
  </div>
);

export function OpenTasksView({ 
  data, 
  selectedTenants, 
  selectedWorkflows, 
  selectedVariants,
  onNavigateToTicket
}: { 
  data: any[]; 
  selectedTenants: string[];
  selectedWorkflows: string[];
  selectedVariants: string[];
  onNavigateToTicket?: (ticketId: string) => void;
}) {
  const [selectedTask, setSelectedTask] = useState(data[0]);
  const [selectedSubtask, setSelectedSubtask] = useState('ARE-S877');
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [isTicketOverlayOpen, setIsTicketOverlayOpen] = useState(false);
  
  const matchingWorkflows: any[] = [];
  const outOfScopeWorkflows: any[] = [];
  
  const subticketGroups = new Map<string, any[]>();
  data.forEach(task => {
    const subticket = task.subticket || task.id;
    if (!subticketGroups.has(subticket)) {
      subticketGroups.set(subticket, []);
    }
    subticketGroups.get(subticket)!.push(task);
  });
  
  data.forEach(task => {
    const tenantMatch = selectedTenants.length === 0 || selectedTenants.includes(task.tenant);
    const workflowMatch = selectedWorkflows.length === 0 || selectedWorkflows.includes(task.workflowName);
    const variantMatch = selectedVariants.length === 0 || selectedVariants.includes(task.variant);
    
    const isMatch = tenantMatch && workflowMatch && variantMatch;
    
    if (isMatch) {
      matchingWorkflows.push(task);
      
      const subticket = task.subticket || task.id;
      const sameSubticketWorkflows = subticketGroups.get(subticket) || [];
      
      sameSubticketWorkflows.forEach(otherTask => {
        if (otherTask.id !== task.id) {
          const otherTenantMatch = selectedTenants.length === 0 || selectedTenants.includes(otherTask.tenant);
          const otherWorkflowMatch = selectedWorkflows.length === 0 || selectedWorkflows.includes(otherTask.workflowName);
          const otherVariantMatch = selectedVariants.length === 0 || selectedVariants.includes(otherTask.variant);
          const otherIsMatch = otherTenantMatch && otherWorkflowMatch && otherVariantMatch;
          
          if (!otherIsMatch && !outOfScopeWorkflows.find(w => w.id === otherTask.id)) {
            outOfScopeWorkflows.push(otherTask);
          }
        }
      });
    }
  });
  
  const handleSelectAll = (workflows: any[]) => {
    if (selectedRows.size === workflows.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(workflows.map(w => w.id)));
    }
  };
  
  const handleSelectRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };
  
  const handleReleaseCredential = () => {
    if (selectedRows.size > 0) {
      alert(`Releasing credentials for ${selectedRows.size} selected workflow(s)`);
      setSelectedRows(new Set());
    }
  };

  return (
    <div className="flex">
      {/* Left Panel - List of Tasks */}
      <div className="w-[365px] border-r border-[#e6e6e6] p-6 h-full">
        <h3 className="text-[20px] font-medium text-left mb-4">List of Tasks</h3>
        <div className="border-t border-[#DFDFDF] opacity-60 mb-4" />
        
        <div className="space-y-3">
          <div 
            className={`p-3 border-b border-[#DFDFDF] cursor-pointer ${selectedSubtask === 'ARE-S876' ? 'bg-[#f6f7ff] rounded' : 'opacity-60'}`}
            onClick={() => setSelectedSubtask('ARE-S876')}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className={`text-[16px] ${selectedSubtask === 'ARE-S876' ? 'font-medium text-[#354eb4]' : 'text-[#374659]'}`}>ARE-S876 | Credential Management</p>
                <div className="flex items-center gap-3 mt-1">
                  <Clock className="w-[13px] h-[13px] text-black opacity-45" />
                  <p className="text-[12px] text-black opacity-70">10/14/2025 10:53PM</p>
                </div>
              </div>
              <div className="w-[22px] h-[22px] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 21 21">
                  <path d="M1.86613 10.121C1.89069 9.04799 2.11167 8.00692 2.52662 7.02723C2.9514 6.02054 3.56033 5.11942 4.33622 4.34107C5.11212 3.56272 6.01569 2.9538 7.02238 2.52902C8.06345 2.08951 9.16837 1.86607 10.3101 1.86607C11.4518 1.86607 12.5568 2.08951 13.5954 2.52902C14.5992 2.95292 15.5107 3.56842 16.2791 4.34107C16.5222 4.58415 16.7505 4.84197 16.9617 5.11205L15.4835 6.26607C15.4543 6.2887 15.432 6.31912 15.4193 6.35383C15.4066 6.38855 15.4039 6.42615 15.4116 6.46232C15.4193 6.49848 15.437 6.53174 15.4628 6.55827C15.4886 6.5848 15.5213 6.60352 15.5572 6.61228L19.8713 7.66808C19.994 7.69755 20.1143 7.60424 20.1143 7.47902L20.134 3.03728C20.134 2.87277 19.9449 2.77946 19.8172 2.88259L18.4324 3.9654C16.5443 1.54933 13.6077 0 10.3077 0C4.68243 0 0.105642 4.50804 6.13987e-05 10.1112C-0.000593949 10.1374 0.00400255 10.1634 0.0135802 10.1878C0.0231578 10.2122 0.0375227 10.2345 0.0558285 10.2532C0.0741342 10.272 0.0960106 10.2869 0.120168 10.2971C0.144326 10.3073 0.170276 10.3125 0.19649 10.3125H1.6697C1.77774 10.3125 1.86368 10.2266 1.86613 10.121ZM20.4286 10.3125H18.9554C18.8474 10.3125 18.7614 10.3984 18.759 10.504C18.7344 11.577 18.5135 12.6181 18.0985 13.5978C17.6737 14.6045 17.0648 15.508 16.2889 16.2839C15.5058 17.0703 14.5747 17.6939 13.5494 18.1187C12.5241 18.5434 11.4248 18.761 10.315 18.7589C9.20557 18.761 8.1067 18.5434 7.0818 18.1186C6.0569 17.6938 5.12627 17.0702 4.34359 16.2839C4.10051 16.0409 3.87216 15.783 3.661 15.5129L5.13912 14.3589C5.16837 14.3363 5.19064 14.3059 5.20336 14.2712C5.21609 14.2365 5.21876 14.1989 5.21106 14.1627C5.20337 14.1265 5.18562 14.0933 5.15986 14.0667C5.13411 14.0402 5.10139 14.0215 5.06546 14.0127L0.751401 12.9569C0.628633 12.9275 0.50832 13.0208 0.50832 13.146L0.491133 17.5902C0.491133 17.7547 0.680195 17.848 0.807874 17.7449L2.1927 16.6621C4.08087 19.0757 7.01747 20.625 10.3175 20.625C15.9452 20.625 20.5195 16.1145 20.6251 10.5138C20.6257 10.4876 20.6211 10.4616 20.6115 10.4372C20.602 10.4128 20.5876 10.3905 20.5693 10.3718C20.551 10.353 20.5291 10.3381 20.505 10.3279C20.4808 10.3177 20.4548 10.3125 20.4286 10.3125V10.3125Z" fill="#354EB4" />
                </svg>
              </div>
            </div>
          </div>

          <div 
            className={`p-3 cursor-pointer ${selectedSubtask === 'ARE-S877' ? 'bg-[#f6f7ff] rounded' : 'border-b border-[#DFDFDF] opacity-60'}`}
            onClick={() => setSelectedSubtask('ARE-S877')}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className={`text-[16px] ${selectedSubtask === 'ARE-S877' ? 'font-medium text-[#354eb4]' : 'text-[#374659]'}`}>ARE-S877 | Credential Management</p>
                <div className="flex items-center gap-3 mt-1">
                  <Clock className="w-[13px] h-[13px] text-black opacity-45" />
                  <p className="text-[12px] text-black opacity-70">10/14/2025 10:53PM</p>
                </div>
              </div>
              <div className="w-[22px] h-[22px] flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 21 21">
                  <path d="M1.86613 10.121C1.89069 9.04799 2.11167 8.00692 2.52662 7.02723C2.9514 6.02054 3.56033 5.11942 4.33622 4.34107C5.11212 3.56272 6.01569 2.9538 7.02238 2.52902C8.06345 2.08951 9.16837 1.86607 10.3101 1.86607C11.4518 1.86607 12.5568 2.08951 13.5954 2.52902C14.5992 2.95292 15.5107 3.56842 16.2791 4.34107C16.5222 4.58415 16.7505 4.84197 16.9617 5.11205L15.4835 6.26607C15.4543 6.2887 15.432 6.31912 15.4193 6.35383C15.4066 6.38855 15.4039 6.42615 15.4116 6.46232C15.4193 6.49848 15.437 6.53174 15.4628 6.55827C15.4886 6.5848 15.5213 6.60352 15.5572 6.61228L19.8713 7.66808C19.994 7.69755 20.1143 7.60424 20.1143 7.47902L20.134 3.03728C20.134 2.87277 19.9449 2.77946 19.8172 2.88259L18.4324 3.9654C16.5443 1.54933 13.6077 0 10.3077 0C4.68243 0 0.105642 4.50804 6.13987e-05 10.1112C-0.000593949 10.1374 0.00400255 10.1634 0.0135802 10.1878C0.0231578 10.2122 0.0375227 10.2345 0.0558285 10.2532C0.0741342 10.272 0.0960106 10.2869 0.120168 10.2971C0.144326 10.3073 0.170276 10.3125 0.19649 10.3125H1.6697C1.77774 10.3125 1.86368 10.2266 1.86613 10.121ZM20.4286 10.3125H18.9554C18.8474 10.3125 18.7614 10.3984 18.759 10.504C18.7344 11.577 18.5135 12.6181 18.0985 13.5978C17.6737 14.6045 17.0648 15.508 16.2889 16.2839C15.5058 17.0703 14.5747 17.6939 13.5494 18.1187C12.5241 18.5434 11.4248 18.761 10.315 18.7589C9.20557 18.761 8.1067 18.5434 7.0818 18.1186C6.0569 17.6938 5.12627 17.0702 4.34359 16.2839C4.10051 16.0409 3.87216 15.783 3.661 15.5129L5.13912 14.3589C5.16837 14.3363 5.19064 14.3059 5.20336 14.2712C5.21609 14.2365 5.21876 14.1989 5.21106 14.1627C5.20337 14.1265 5.18562 14.0933 5.15986 14.0667C5.13411 14.0402 5.10139 14.0215 5.06546 14.0127L0.751401 12.9569C0.628633 12.9275 0.50832 13.0208 0.50832 13.146L0.491133 17.5902C0.491133 17.7547 0.680195 17.848 0.807874 17.7449L2.1927 16.6621C4.08087 19.0757 7.01747 20.625 10.3175 20.625C15.9452 20.625 20.5195 16.1145 20.6251 10.5138C20.6257 10.4876 20.6211 10.4616 20.6115 10.4372C20.602 10.4128 20.5876 10.3905 20.5693 10.3718C20.551 10.353 20.5291 10.3381 20.505 10.3279C20.4808 10.3177 20.4548 10.3125 20.4286 10.3125V10.3125Z" fill="#354EB4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Task Details */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-[18px] font-medium flex items-center gap-2">
              <span className="text-[#354eb4]">
                {selectedSubtask} | 
              </span>
              <span className="text-black">
                Credential Management
              </span>
            </h2>
            <div className="flex items-center gap-2">
              {/* Three-dot menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[180px]">
                  <DropdownMenuItem 
                    className="text-red-600 focus:text-red-600 cursor-pointer"
                    onClick={() => alert('Remove from list')}
                  >
                    Remove from list
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Mark as Completed button */}
              <Button className="bg-white hover:bg-gray-50 border border-[#d9d9d9] text-[rgba(0,0,0,0.88)] h-[40px] px-[16px] py-[4px] rounded-[8px] gap-[8px] shrink-0">
                <div className="bg-white overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute inset-[6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d={completeSvgPaths.p2c90f300} fill="#43A03B" />
                    </svg>
                  </div>
                </div>
                <span className="text-[16px] leading-[24px] font-normal">Mark Sub Task as Completed</span>
              </Button>
            </div>
          </div>
          <p className="text-[14px] text-gray-600 mb-1">
            Update and validate credentials for HCHB application access. Ensure all workers have proper authentication.
          </p>
          <p className="text-[14px] text-blue-600 flex items-center gap-1.5 cursor-pointer hover:underline" onClick={() => setIsTicketOverlayOpen(true)}>
            Ticket: {getParentTicketId(selectedSubtask) || 'N/A'}
            <svg 
              className="w-[14px] h-[14px] shrink-0" 
              fill="none" 
              viewBox="0 0 15 15"
            >
              <path d={redirectSvgPaths.p38646d80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </p>
        </div>

        <div className="border-t border-[#DADADA] mb-5" />

        <div className="flex gap-2 mb-5">
          <Button 
            variant={selectedRows.size === 0 ? "outline" : "default"}
            className={selectedRows.size === 0 ? "opacity-20 border-gray-300" : "bg-[#354eb4] hover:bg-[#2a3d8f]"}
            disabled={selectedRows.size === 0}
            onClick={handleReleaseCredential}
          >
            Release Credential {selectedRows.size > 0 && `(${selectedRows.size})`}
          </Button>
          <Button variant="outline" className="bg-[#354eb4] text-white hover:bg-[#2a3d8f] hover:text-white border-[#354eb4]">
            Modify
          </Button>
          <Button variant="outline" className="border-gray-300">
            Generate Data File
          </Button>
        </div>

        {renderTable(matchingWorkflows, undefined, selectedRows, handleSelectAll, handleSelectRow)}
        
        {outOfScopeWorkflows.length > 0 && renderTable(
          outOfScopeWorkflows, 
          "Other Workflows Inside This Subticket (Outside the Scope of Current Selection)",
          selectedRows,
          handleSelectAll,
          handleSelectRow
        )}
      </div>

      <TicketSummaryOverlay 
        isOpen={isTicketOverlayOpen}
        onClose={() => setIsTicketOverlayOpen(false)}
        ticketId={getParentTicketId(selectedSubtask) || 'ARE-T101'}
        onViewTicket={() => {
          setIsTicketOverlayOpen(false);
          const parentTicketId = getParentTicketId(selectedSubtask);
          if (parentTicketId) {
            onNavigateToTicket?.(parentTicketId);
          }
        }}
      />
    </div>
  );
}

export function TriggerOpenTasksView({ 
  data, 
  selectedTenants, 
  selectedWorkflows, 
  selectedVariants 
}: { 
  data: any[]; 
  selectedTenants: string[];
  selectedWorkflows: string[];
  selectedVariants: string[];
}) {
  const [selectedSubtask, setSelectedSubtask] = useState('ARE-S877');
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  
  const matchingWorkflows: any[] = [];
  const outOfScopeWorkflows: any[] = [];
  
  const subticketGroups = new Map<string, any[]>();
  data.forEach(task => {
    const subticket = task.subticket || task.id;
    if (!subticketGroups.has(subticket)) {
      subticketGroups.set(subticket, []);
    }
    subticketGroups.get(subticket)!.push(task);
  });
  
  data.forEach(task => {
    const tenantMatch = selectedTenants.length === 0 || selectedTenants.includes(task.tenant);
    const workflowMatch = selectedWorkflows.length === 0 || selectedWorkflows.includes(task.workflowName);
    const variantMatch = selectedVariants.length === 0 || selectedVariants.includes(task.variant);
    
    const isMatch = tenantMatch && workflowMatch && variantMatch;
    
    if (isMatch) {
      matchingWorkflows.push(task);
      
      const subticket = task.subticket || task.id;
      const sameSubticketWorkflows = subticketGroups.get(subticket) || [];
      
      sameSubticketWorkflows.forEach(otherTask => {
        if (otherTask.id !== task.id) {
          const otherTenantMatch = selectedTenants.length === 0 || selectedTenants.includes(otherTask.tenant);
          const otherWorkflowMatch = selectedWorkflows.length === 0 || selectedWorkflows.includes(otherTask.workflowName);
          const otherVariantMatch = selectedVariants.length === 0 || selectedVariants.includes(otherTask.variant);
          const otherIsMatch = otherTenantMatch && otherWorkflowMatch && otherVariantMatch;
          
          if (!otherIsMatch && !outOfScopeWorkflows.find(w => w.id === otherTask.id)) {
            outOfScopeWorkflows.push(otherTask);
          }
        }
      });
    }
  });
  
  const handleSelectAll = (workflows: any[]) => {
    if (selectedRows.size === workflows.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(workflows.map(w => w.id)));
    }
  };
  
  const handleSelectRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };
  
  const handleEnableTrigger = () => {
    if (selectedRows.size > 0) {
      alert(`Enabling triggers for ${selectedRows.size} selected workflow(s)`);
      setSelectedRows(new Set());
    }
  };

  return (
    <div className="flex gap-5 p-5">
      <div className="w-[365px] bg-white rounded-[9px] border border-neutral-200 shadow-sm p-6">
        <h3 className="text-[20px] font-medium text-left mb-4">List of Tasks</h3>
        <div className="border-t border-[#DFDFDF] opacity-60 mb-4" />
        
        <div className="space-y-3">
          <div 
            className={`p-3 border-b border-[#DFDFDF] cursor-pointer ${selectedSubtask === 'ARE-S876' ? 'bg-[#f6f7ff] rounded' : 'opacity-60'}`}
            onClick={() => setSelectedSubtask('ARE-S876')}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className={`text-[16px] ${selectedSubtask === 'ARE-S876' ? 'font-medium text-[#354eb4]' : 'text-[#374659]'}`}>ARE-S876 | Enable Trigger</p>
                <div className="flex items-center gap-3 mt-1">
                  <Clock className="w-[13px] h-[13px] text-black opacity-45" />
                  <p className="text-[12px] text-black opacity-70">10/14/2025 10:53PM</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`p-3 cursor-pointer ${selectedSubtask === 'ARE-S877' ? 'bg-[#f6f7ff] rounded' : 'border-b border-[#DFDFDF] opacity-60'}`}
            onClick={() => setSelectedSubtask('ARE-S877')}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className={`text-[16px] ${selectedSubtask === 'ARE-S877' ? 'font-medium text-[#354eb4]' : 'text-[#374659]'}`}>ARE-S877 | Enable Trigger</p>
                <div className="flex items-center gap-3 mt-1">
                  <Clock className="w-[13px] h-[13px] text-black opacity-45" />
                  <p className="text-[12px] text-black opacity-70">10/14/2025 10:53PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-medium text-[#354eb4] mb-2">
              {selectedSubtask === 'ARE-S877' ? 'ARE-S877 | Enable Trigger' : 'ARE-S876 | Enable Trigger'}
            </h2>
            <p className="text-[16px] text-black opacity-75">
              Task Description will come here - a small description
            </p>
          </div>
          <Button className="bg-white hover:bg-gray-50 border border-[#d9d9d9] text-[rgba(0,0,0,0.88)] h-[40px] px-[16px] py-[4px] rounded-[8px] gap-[8px] shrink-0">
            <div className="bg-white overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={completeSvgPaths.p2c90f300} fill="#43A03B" />
                </svg>
              </div>
            </div>
            <span className="text-[16px] leading-[24px] font-normal">Mark Sub Task as Completed</span>
          </Button>
        </div>

        <div className="border-t border-[#DADADA] mb-5" />

        <div className="flex gap-2 mb-5">
          <Button 
            variant={selectedRows.size === 0 ? "outline" : "default"}
            className={selectedRows.size === 0 ? "opacity-20" : "bg-[#354eb4] hover:bg-[#2a3d8f]"}
            disabled={selectedRows.size === 0}
            onClick={handleEnableTrigger}
          >
            Enable Trigger {selectedRows.size > 0 && `(${selectedRows.size})`}
          </Button>
          <Button className="bg-[#354eb4] hover:bg-[#2a3d8f]">
            Modify
          </Button>
        </div>

        {renderTable(matchingWorkflows, undefined, selectedRows, handleSelectAll, handleSelectRow)}
        
        {outOfScopeWorkflows.length > 0 && renderTable(
          outOfScopeWorkflows, 
          "Other Workflows Inside This Subticket (Outside the Scope of Current Selection)",
          selectedRows,
          handleSelectAll,
          handleSelectRow
        )}
      </div>
    </div>
  );
}

export function AppWorkerOpenTasksView({ 
  data, 
  selectedTenants, 
  selectedWorkflows, 
  selectedVariants 
}: { 
  data: any[]; 
  selectedTenants: string[];
  selectedWorkflows: string[];
  selectedVariants: string[];
}) {
  const [selectedSubtask, setSelectedSubtask] = useState('ARE-S877');
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  
  const matchingWorkflows: any[] = [];
  const outOfScopeWorkflows: any[] = [];
  
  const subticketGroups = new Map<string, any[]>();
  data.forEach(task => {
    const subticket = task.subticket || task.id;
    if (!subticketGroups.has(subticket)) {
      subticketGroups.set(subticket, []);
    }
    subticketGroups.get(subticket)!.push(task);
  });
  
  data.forEach(task => {
    const tenantMatch = selectedTenants.length === 0 || selectedTenants.includes(task.tenant);
    const workflowMatch = selectedWorkflows.length === 0 || selectedWorkflows.includes(task.workflowName);
    const variantMatch = selectedVariants.length === 0 || selectedVariants.includes(task.variant);
    
    const isMatch = tenantMatch && workflowMatch && variantMatch;
    
    if (isMatch) {
      matchingWorkflows.push(task);
      
      const subticket = task.subticket || task.id;
      const sameSubticketWorkflows = subticketGroups.get(subticket) || [];
      
      sameSubticketWorkflows.forEach(otherTask => {
        if (otherTask.id !== task.id) {
          const otherTenantMatch = selectedTenants.length === 0 || selectedTenants.includes(otherTask.tenant);
          const otherWorkflowMatch = selectedWorkflows.length === 0 || selectedWorkflows.includes(otherTask.workflowName);
          const otherVariantMatch = selectedVariants.length === 0 || selectedVariants.includes(otherTask.variant);
          const otherIsMatch = otherTenantMatch && otherWorkflowMatch && otherVariantMatch;
          
          if (!otherIsMatch && !outOfScopeWorkflows.find(w => w.id === otherTask.id)) {
            outOfScopeWorkflows.push(otherTask);
          }
        }
      });
    }
  });
  
  const handleSelectAll = (workflows: any[]) => {
    if (selectedRows.size === workflows.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(workflows.map(w => w.id)));
    }
  };
  
  const handleSelectRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };
  
  const handleScaleUpAppWorker = () => {
    if (selectedRows.size > 0) {
      alert(`Scaling up app workers for ${selectedRows.size} selected workflow(s)`);
      setSelectedRows(new Set());
    }
  };

  return (
    <div className="flex gap-5 p-5">
      <div className="w-[365px] bg-white rounded-[9px] border border-neutral-200 shadow-sm p-6">
        <h3 className="text-[20px] font-medium text-left mb-4">List of Tasks</h3>
        <div className="border-t border-[#DFDFDF] opacity-60 mb-4" />
        
        <div className="space-y-3">
          <div 
            className={`p-3 border-b border-[#DFDFDF] cursor-pointer ${selectedSubtask === 'ARE-S876' ? 'bg-[#f6f7ff] rounded' : 'opacity-60'}`}
            onClick={() => setSelectedSubtask('ARE-S876')}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className={`text-[16px] ${selectedSubtask === 'ARE-S876' ? 'font-medium text-[#354eb4]' : 'text-[#374659]'}`}>ARE-S876 | Manage App Worker</p>
                <div className="flex items-center gap-3 mt-1">
                  <Clock className="w-[13px] h-[13px] text-black opacity-45" />
                  <p className="text-[12px] text-black opacity-70">10/14/2025 10:53PM</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`p-3 cursor-pointer ${selectedSubtask === 'ARE-S877' ? 'bg-[#f6f7ff] rounded' : 'border-b border-[#DFDFDF] opacity-60'}`}
            onClick={() => setSelectedSubtask('ARE-S877')}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className={`text-[16px] ${selectedSubtask === 'ARE-S877' ? 'font-medium text-[#354eb4]' : 'text-[#374659]'}`}>ARE-S877 | Manage App Worker</p>
                <div className="flex items-center gap-3 mt-1">
                  <Clock className="w-[13px] h-[13px] text-black opacity-45" />
                  <p className="text-[12px] text-black opacity-70">10/14/2025 10:53PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-medium text-[#354eb4] mb-2">
              {selectedSubtask === 'ARE-S877' ? 'ARE-S877 | Manage App Worker' : 'ARE-S876 | Manage App Worker'}
            </h2>
            <p className="text-[16px] text-black opacity-75">
              Task Description will come here - a small description
            </p>
          </div>
          <Button className="bg-white hover:bg-gray-50 border border-[#d9d9d9] text-[rgba(0,0,0,0.88)] h-[40px] px-[16px] py-[4px] rounded-[8px] gap-[8px] shrink-0">
            <div className="bg-white overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-[6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={completeSvgPaths.p2c90f300} fill="#43A03B" />
                </svg>
              </div>
            </div>
            <span className="text-[16px] leading-[24px] font-normal">Mark Sub Task as Completed</span>
          </Button>
        </div>

        <div className="border-t border-[#DADADA] mb-5" />

        <div className="flex gap-2 mb-5">
          <Button 
            variant={selectedRows.size === 0 ? "outline" : "default"}
            className={selectedRows.size === 0 ? "opacity-20" : "bg-[#354eb4] hover:bg-[#2a3d8f]"}
            disabled={selectedRows.size === 0}
            onClick={handleScaleUpAppWorker}
          >
            Scale up App Worker {selectedRows.size > 0 && `(${selectedRows.size})`}
          </Button>
          <Button className="bg-[#354eb4] hover:bg-[#2a3d8f]">
            Modify
          </Button>
        </div>

        {renderTable(matchingWorkflows, undefined, selectedRows, handleSelectAll, handleSelectRow)}
        
        {outOfScopeWorkflows.length > 0 && renderTable(
          outOfScopeWorkflows, 
          "Other Workflows Inside This Subticket (Outside the Scope of Current Selection)",
          selectedRows,
          handleSelectAll,
          handleSelectRow
        )}
      </div>
    </div>
  );
}

// ActivityLogView component with horizontal scrolling
export function ActivityLogView({ data }: { data: any[] }) {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [entityFilter, setEntityFilter] = useState('all');
  const [eventFilter, setEventFilter] = useState('all');
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined
  });

  // ... rest of ActivityLogView implementation (filters, handlers) ...

  return (
    <div>
      {/* Filter Controls - already implemented in your code */}
      
      {/* Table with horizontal scroll */}
      <div className="p-5 overflow-auto max-h-[calc(100vh-300px)]">
        <table className="w-full min-w-[1400px] border border-[#e6e6e6] rounded-[4px] border-separate border-spacing-0">
          {/* Table structure remains the same */}
        </table>
      </div>
    </div>
  );
}