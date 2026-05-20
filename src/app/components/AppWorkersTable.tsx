import { useState } from 'react';
import svgPaths from '@/imports/svg-iu7q358syy';
import svgPathsButtons from '@/imports/svg-dkdrap0n7a';

export interface AppWorkerRow {
  id: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  application: string;
  appVersion: string;
  status: 'Scheduled' | 'Running Now' | 'Paused';
  message: string;
}

interface AppWorkersTableProps {
  workers: AppWorkerRow[];
  onRemove: (ids: string[]) => void;
  onModify: () => void;
  onPause?: (count: number) => void;
  onResume?: (count: number) => void;
  isCompleted?: boolean;
  onWorkersChange?: (workers: AppWorkerRow[]) => void;
}

export function AppWorkersTable({ workers: initialWorkers, onRemove, onModify, onPause, onResume, isCompleted = false, onWorkersChange }: AppWorkersTableProps) {
  const [workers, setWorkers] = useState<AppWorkerRow[]>(initialWorkers);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [searchFilters, setSearchFilters] = useState({
    tenant: '',
    workflow: '',
    workflowVariant: '',
    application: '',
    appVersion: '',
    status: '',
    message: ''
  });

  const toggleSelection = (id: string) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedIds(newSet);
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === workers.length && workers.length > 0) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(workers.map(w => w.id)));
    }
  };

  const handlePause = () => {
    if (selectedIds.size === 0) return;
    
    const updatedWorkers = workers.map(worker =>
      selectedIds.has(worker.id)
        ? { ...worker, status: 'Paused' as const }
        : worker
    );
    
    setWorkers(updatedWorkers);
    
    // Persist changes to parent
    if (onWorkersChange) {
      onWorkersChange(updatedWorkers);
    }
    
    if (onPause) {
      onPause(selectedIds.size);
    }
    
    setSelectedIds(new Set());
  };

  const handleResume = () => {
    if (selectedIds.size === 0) return;
    
    const updatedWorkers = workers.map(worker =>
      selectedIds.has(worker.id)
        ? { ...worker, status: 'Running Now' as const }
        : worker
    );
    
    setWorkers(updatedWorkers);
    
    // Persist changes to parent
    if (onWorkersChange) {
      onWorkersChange(updatedWorkers);
    }
    
    if (onResume) {
      onResume(selectedIds.size);
    }
    
    setSelectedIds(new Set());
  };

  const handleRemove = () => {
    if (selectedIds.size === 0) return;
    onRemove(Array.from(selectedIds));
    setSelectedIds(new Set());
  };

  // Check if Pause/Resume buttons should be active based on selected workers' status
  const getSelectedWorkers = () => {
    return workers.filter(w => selectedIds.has(w.id));
  };

  const canPause = () => {
    if (selectedIds.size === 0) return false;
    const selectedWorkers = getSelectedWorkers();
    // Pause button is active only if at least one selected worker is Running Now or Scheduled
    return selectedWorkers.some(w => w.status === 'Running Now' || w.status === 'Scheduled');
  };

  const canResume = () => {
    if (selectedIds.size === 0) return false;
    const selectedWorkers = getSelectedWorkers();
    // Resume button is active only if at least one selected worker is Paused
    return selectedWorkers.some(w => w.status === 'Paused');
  };

  // Filter workers based on search
  const filteredWorkers = workers.filter(worker => {
    return (
      worker.tenant.toLowerCase().includes(searchFilters.tenant.toLowerCase()) &&
      worker.workflow.toLowerCase().includes(searchFilters.workflow.toLowerCase()) &&
      worker.workflowVariant.toLowerCase().includes(searchFilters.workflowVariant.toLowerCase()) &&
      worker.application.toLowerCase().includes(searchFilters.application.toLowerCase()) &&
      worker.appVersion.toLowerCase().includes(searchFilters.appVersion.toLowerCase()) &&
      worker.status.toLowerCase().includes(searchFilters.status.toLowerCase()) &&
      worker.message.toLowerCase().includes(searchFilters.message.toLowerCase())
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running Now':
        return '#52c41a'; // Green
      case 'Scheduled':
        return '#1890ff'; // Blue
      case 'Paused':
        return '#faad14'; // Orange
      default:
        return '#52c41a';
    }
  };

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
          {/* Button Group 1: Pause, Resume, Modify Ticket */}
          <div className="content-stretch flex gap-[8px] items-center justify-center">
            {/* Pause Button */}
            <button
              onClick={handlePause}
              disabled={isCompleted || !canPause()}
              className={`content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[116px] transition-all ${
                !isCompleted && canPause() 
                  ? 'bg-[#354eb4] hover:bg-[#2d4299]' 
                  : 'bg-[#ebedf8] opacity-40'
              }`}
            >
              <div className="shrink-0 size-[13.6px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
                  <path d={svgPathsButtons.p3125fa00} fill={!isCompleted && canPause() ? 'white' : '#C0C8E8'} />
                </svg>
              </div>
              <p className={`font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] tracking-[0.2px] ${!isCompleted && canPause() ? 'text-white' : 'text-[#c0c8e8]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                Pause
              </p>
            </button>

            {/* Resume Button */}
            <button
              onClick={handleResume}
              disabled={isCompleted || !canResume()}
              className={`content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[116px] transition-all ${
                !isCompleted && canResume() 
                  ? 'bg-[#354eb4] hover:bg-[#2d4299]' 
                  : 'bg-[#ebedf8] opacity-40'
              }`}
            >
              <div className="h-[13.6px] shrink-0 w-[15.3px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6625 14.9444">
                  <path clipRule="evenodd" d={svgPathsButtons.p2c0b8600} fill={!isCompleted && canResume() ? 'white' : '#C0C8E8'} fillRule="evenodd" />
                  <path d={svgPathsButtons.p3f6a8100} stroke={!isCompleted && canResume() ? 'white' : '#C0C8E8'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                </svg>
              </div>
              <p className={`font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] tracking-[0.2px] ${!isCompleted && canResume() ? 'text-white' : 'text-[#c0c8e8]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                Resume
              </p>
            </button>

            {/* Modify Ticket Button */}
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
          </div>

          {/* Vertical Divider */}
          <div className="flex h-[27.2px] items-center justify-center shrink-0 w-0">
            <div className="flex-none rotate-90">
              <div className="h-0 w-[27.2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 1">
                  <line stroke="#D0D0D0" strokeWidth="1" x2="34" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Remove from List Button */}
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
                <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5Z" fill="#E84E0F" fillOpacity="0.1" />
                <path d="M11.25 6.75L6.75 11.25M6.75 6.75L11.25 11.25" stroke="#E84E0F" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-['Roboto'] font-medium leading-normal relative shrink-0 text-[#e84e0f] text-[12.8px] tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Remove from List
            </p>
          </button>

          {/* Reload Button */}
          <button className="bg-white content-stretch flex items-center justify-center px-[12.8px] py-[6.4px] rounded-[4px] shrink-0 w-[33.6px] relative hover:bg-[#f0f5ff] transition-all">
            <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="shrink-0 size-[13.6px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d="M14.25 9C14.25 11.8995 11.8995 14.25 9 14.25C6.10051 14.25 3.75 11.8995 3.75 9C3.75 6.10051 6.10051 3.75 9 3.75C10.4001 3.75 11.6751 4.3125 12.6 5.25M12.6 5.25V2.25M12.6 5.25H9.6" stroke="#354EB4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-[#e1dfdf] overflow-auto max-h-[500px]">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f8fbff]">
              {/* Checkbox */}
              <th className="w-[45px] border-r border-[rgba(234,237,242,0.3)] p-[16px]">
                <input
                  type="checkbox"
                  checked={selectedIds.size === filteredWorkers.length && filteredWorkers.length > 0}
                  onChange={toggleSelectAll}
                  disabled={isCompleted}
                  className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </th>

              {/* Tenant */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className="bg-[#c9cdd5] rounded-[26px] size-full flex items-center justify-center">
                        <svg className="size-[8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                          <g>
                            <path d={svgPaths.p19fa10c0} fill="white" />
                            <path d={svgPaths.p1d5a6a00} fill="white" />
                          </g>
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
                      <div className="bg-[#c9cdd5] rounded-[26px] size-full flex items-center justify-center">
                        <svg className="size-[8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                          <g>
                            <path d={svgPaths.p19fa10c0} fill="white" />
                            <path d={svgPaths.p1d5a6a00} fill="white" />
                          </g>
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
                      <div className="bg-[#c9cdd5] rounded-[26px] size-full flex items-center justify-center">
                        <svg className="size-[8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                          <g>
                            <path d={svgPaths.p19fa10c0} fill="white" />
                            <path d={svgPaths.p1d5a6a00} fill="white" />
                          </g>
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

              {/* Application */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className="bg-[#c9cdd5] rounded-[26px] size-full flex items-center justify-center">
                        <svg className="size-[8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                          <g>
                            <path d={svgPaths.p19fa10c0} fill="white" />
                            <path d={svgPaths.p1d5a6a00} fill="white" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Application
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={searchFilters.application}
                    onChange={(e) => setSearchFilters({...searchFilters, application: e.target.value})}
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </th>

              {/* App Version */}
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className="bg-[#c9cdd5] rounded-[26px] size-full flex items-center justify-center">
                        <svg className="size-[8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                          <g>
                            <path d={svgPaths.p19fa10c0} fill="white" />
                            <path d={svgPaths.p1d5a6a00} fill="white" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      App Version
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={searchFilters.appVersion}
                    onChange={(e) => setSearchFilters({...searchFilters, appVersion: e.target.value})}
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
                      <div className="bg-[#c9cdd5] rounded-[26px] size-full flex items-center justify-center">
                        <svg className="size-[8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                          <g>
                            <path d={svgPaths.p19fa10c0} fill="white" />
                            <path d={svgPaths.p1d5a6a00} fill="white" />
                          </g>
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
                    disabled={isCompleted}
                    className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">All</option>
                    <option value="Running Now">Running Now</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Paused">Paused</option>
                  </select>
                </div>
              </th>

              {/* Message */}
              <th className="p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className="bg-[#c9cdd5] rounded-[26px] size-full flex items-center justify-center">
                        <svg className="size-[8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
                          <g>
                            <path d={svgPaths.p19fa10c0} fill="white" />
                            <path d={svgPaths.p1d5a6a00} fill="white" />
                          </g>
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
            </tr>
          </thead>
          <tbody>
            {filteredWorkers.map((worker) => (
              <tr key={worker.id} className="bg-white border-b border-[#ebedf8] hover:bg-gray-50">
                {/* Checkbox */}
                <td className="p-[8px] text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(worker.id)}
                    onChange={() => toggleSelection(worker.id)}
                    disabled={isCompleted}
                    className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </td>

                {/* Tenant */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {worker.tenant}
                  </p>
                </td>

                {/* Workflow */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {worker.workflow}
                  </p>
                </td>

                {/* Workflow Variant */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {worker.workflowVariant}
                  </p>
                </td>

                {/* Application */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {worker.application}
                  </p>
                </td>

                {/* App Version */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {worker.appVersion}
                  </p>
                </td>

                {/* Status */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <div className="flex items-center gap-[4px]">
                    <div 
                      className="size-[8px] rounded-full"
                      style={{ backgroundColor: getStatusColor(worker.status) }}
                    ></div>
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {worker.status}
                    </p>
                  </div>
                </td>

                {/* Message */}
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {worker.message}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}