import { CheckCircle2, Circle, Clock, AlertTriangle } from 'lucide-react';
import { type Subtask } from './SubtaskTabs';
import { useState, useRef, useEffect } from 'react';
import svgPaths from "@/imports/svg-l8mmdilk3w";
import { useTicketAlerts } from '@/app/contexts/TicketAlertContext';

interface SubtaskSidebarProps {
  subtasks: Subtask[];
  activeSubtask: string;
  onSubtaskClick: (id: string) => void;
  onTaskAdded?: (taskName: string) => void;
  isView2?: boolean;
}

export function SubtaskSidebar({ subtasks, activeSubtask, onSubtaskClick, onTaskAdded, isView2 }: SubtaskSidebarProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  
  // Get alerts from context
  const { alerts, alertBucketCreated } = useTicketAlerts();

  // Calculate active unaddressed alert count
  const activeUnaddressedAlertCount = alerts.filter(
    a => a.state === 'active' && !a.addressed
  ).length;

  // Determine if alert bucket has high prominence (has pending alerts)
  const hasHighProminence = activeUnaddressedAlertCount > 0;

  const scopeOptions = [
    'Failure Notes',
    'Evidence Package',
    'Terminate workflow',
    'Enable/Disable Trigger',
    'Pause/Resume App Worker',
    'Identify the RCA',
    'Credential Management',
    'Issue fixed Note',
    'State Management'
  ];

  const handleAddTask = () => {
    if (selectedOption && onTaskAdded) {
      onTaskAdded(selectedOption);
      setIsPopupOpen(false);
      setSelectedOption(null);
    }
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle2 className="size-4 text-green-600 flex-shrink-0" />;
      case 'in-progress':
        return <Clock className="size-4 text-blue-600 flex-shrink-0" />;
      default:
        return <Circle className="size-4 text-gray-400 flex-shrink-0" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-visible h-full flex flex-col">
      {/* Card Header */}
      <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-700">{isView2 ? 'ARE Tickets' : 'Subtasks'}</h2>
          <div className="relative">
            {!isView2 && (
            <button
              ref={buttonRef}
              onClick={() => setIsPopupOpen(!isPopupOpen)}
              className="px-3 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-all flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 rounded-md border border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md"
            >
              <span className="text-lg leading-none">+</span> Add new task
            </button>
            )}

            {/* Floating Popup */}
            {isPopupOpen && (
              <div 
                ref={popupRef}
                className="fixed z-[9999]"
                style={{ 
                  width: '465px', 
                  height: '767px',
                  left: buttonRef.current ? buttonRef.current.getBoundingClientRect().right + 16 : 0,
                  top: buttonRef.current ? buttonRef.current.getBoundingClientRect().top - 20 : 0
                }}
              >
                <div className="bg-white relative rounded-[8px] shadow-[0px_10px_14px_0px_rgba(0,0,0,0.08)] size-full">
                  {/* Header */}
                  <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-[33px] top-[33px] w-[399px]">
                    <div className="h-[36px] relative shrink-0 w-full">
                      <p className="absolute css-ew64yg font-['Arimo',sans-serif] font-bold leading-[36px] left-0 text-[#2a2a2a] text-[22px] top-[-2px]">
                        Choose a scope for this Sub-Task
                      </p>
                    </div>
                    <div className="h-[24px] relative shrink-0 w-full">
                      <p className="absolute css-4hzbpn font-['Arimo',sans-serif] font-normal leading-[24px] left-0 text-[#757575] text-[16px] top-[-2px] w-[495px]">
                        Please note that this task will be add to the above ticket.
                      </p>
                    </div>
                  </div>

                  {/* Options Frame */}
                  <div className="absolute bg-[rgba(243,245,255,0.31)] border border-[rgba(53,78,180,0.32)] border-solid h-[553px] left-[29px] rounded-[8px] top-[118px] w-[404px] overflow-hidden">
                    <div className="absolute inset-0 overflow-y-auto">
                      <div className="content-stretch flex flex-col gap-[16.044px] items-start px-[15px] py-[21px] w-full">
                        {scopeOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedOption(option)}
                            className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full hover:bg-white/30 rounded px-2 py-1 transition-colors"
                          >
                            <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[3px] relative shrink-0">
                              <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]">
                                <div className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[999px]" />
                                {selectedOption === option && (
                                  <div className="absolute inset-[3px] bg-[#354eb4] rounded-full" />
                                )}
                              </div>
                            </div>
                            <p className="css-ew64yg font-['Roboto',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              {option}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="absolute content-stretch flex gap-[12px] h-[39px] items-center left-[33px] top-[695px] w-[399px]">
                    <button 
                      onClick={() => setIsPopupOpen(false)}
                      className="h-[39px] relative rounded-[4px] shrink-0 w-[83.297px] border border-[#d9d9d9] border-solid hover:bg-gray-50 transition-colors"
                    >
                      <p className="absolute css-ew64yg font-['Arimo',sans-serif] font-normal leading-[21px] left-[42px] text-[14px] text-[rgba(0,0,0,0.88)] text-center top-[8px] translate-x-[-50%]">
                        Close
                      </p>
                    </button>
                    <button 
                      disabled={!selectedOption}
                      className={`h-[37px] relative rounded-[4px] shrink-0 w-[150px] transition-all ${
                        selectedOption 
                          ? 'bg-[#354eb4] hover:bg-[#2d4299] cursor-pointer' 
                          : 'bg-[#354eb4] opacity-20 cursor-not-allowed'
                      }`}
                      onClick={handleAddTask}
                    >
                      <p className="absolute css-ew64yg font-['Arimo',sans-serif] font-normal leading-[21px] left-1/2 text-[14px] text-center text-white top-[7px] -translate-x-1/2 whitespace-nowrap">
                        Choose Scope
                      </p>
                    </button>
                  </div>

                  {/* Caret/Arrow pointing to button */}
                  <div className="absolute left-[-16px] size-[24px] top-[10px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g clipPath="url(#clip0_17_710)">
                        <g filter="url(#filter0_d_17_710)">
                          <path d={svgPaths.p341f2780} fill="white" />
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.5007" id="filter0_d_17_710" width="17.9369" x="1.03198" y="1.74999">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dx="-2" dy="2" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_17_710" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_17_710" mode="normal" result="shape" />
                        </filter>
                        <clipPath id="clip0_17_710">
                          <rect fill="white" height="24" width="24" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  {/* Close X button */}
                  <button 
                    onClick={() => setIsPopupOpen(false)}
                    className="absolute block cursor-pointer inset-[2.05%_3.23%_96.8%_94.62%] hover:opacity-70 transition-opacity"
                  >
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
                      <path clipRule="evenodd" d={svgPaths.p361a4400} fill="#8993AE" fillRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Subtask List */}
      <div className="p-2 flex-1 overflow-y-auto">
        {/* Alert Bucket - Always shown as first item after creation */}
        {alertBucketCreated && (
          <button
            onClick={() => onSubtaskClick('alert-bucket')}
            className={`w-full text-left px-3 py-4 mb-2 transition-all duration-150 flex items-center gap-2.5 group border-b border-gray-200 rounded-md ${
              hasHighProminence
                ? activeSubtask === 'alert-bucket'
                  ? 'bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-l-orange-600 shadow-md'
                  : 'bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 border-l-4 border-l-orange-400 hover:border-l-orange-600 shadow-sm hover:shadow-md'
                : activeSubtask === 'alert-bucket'
                  ? 'bg-gray-100 border-l-2 border-l-gray-400'
                  : 'bg-gray-50 hover:bg-gray-100 border-l-2 border-l-gray-300 opacity-60'
            }`}
          >
            {/* Alert Icon */}
            <div className={`
              flex-shrink-0 size-5 rounded-md flex items-center justify-center
              ${hasHighProminence 
                ? 'bg-orange-600 text-white' 
                : 'bg-gray-400 text-white'
              }
            `}>
              <AlertTriangle className="size-3.5" />
            </div>

            {/* Title with badge */}
            <span className={`flex-1 text-sm font-semibold ${
              hasHighProminence
                ? activeSubtask === 'alert-bucket' 
                  ? 'text-orange-900' 
                  : 'text-orange-800 group-hover:text-orange-900'
                : 'text-gray-600 group-hover:text-gray-700'
            }`}>
              Alert Bucket
            </span>

            {/* Count badge - only show if alerts exist */}
            {hasHighProminence && (
              <span className="flex-shrink-0 size-6 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center shadow-sm">
                {activeUnaddressedAlertCount}
              </span>
            )}
            
            {/* Show "0" or no badge for reduced prominence */}
            {!hasHighProminence && alerts.length > 0 && (
              <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-gray-300 text-gray-600 text-xs font-medium">
                0
              </span>
            )}
          </button>
        )}

        {/* Subtasks */}
        {subtasks.map((subtask) => (
          <button
            key={subtask.id}
            onClick={() => onSubtaskClick(subtask.id)}
            className={`w-full text-left px-3 py-4 transition-all duration-150 flex items-center gap-2.5 group border-b border-gray-200 ${
              activeSubtask === subtask.id
                ? 'bg-blue-50 border-l-2 border-l-blue-500'
                : 'hover:bg-gray-50 border-l-2 border-l-transparent'
            }`}
          >
            {/* Status Icon */}
            {getStatusIcon(subtask.status)}

            {/* Title - Single line with ellipsis */}
            <span className={`flex-1 text-sm truncate ${
              activeSubtask === subtask.id 
                ? 'font-medium text-blue-900' 
                : 'text-gray-700 group-hover:text-gray-900'
            }`}>
              {subtask.displayId} | {subtask.title}
            </span>

            {/* Time indicator - only show on active */}
            {activeSubtask === subtask.id && (
              <span className="text-xs text-gray-500 flex-shrink-0">
                {subtask.lastUpdated}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}