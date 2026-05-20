import { useState, useRef, useEffect } from 'react';
import svgPaths from "@/imports/svg-l8mmdilk3w";
import scopeModalSvgPaths from "@/imports/svg-q3p9b3qmhp";
import FigmaButton from "@/imports/Button-34-179";

interface ContextData {
  workflow: string;
  tenant: string;
  variant: string;
}

interface EmptyStateProps {
  onTaskAdded: (taskName: string) => void;
  contextData?: ContextData;
  onContextBannerClick?: () => void;
}

export function EmptyState({ onTaskAdded, contextData, onContextBannerClick }: EmptyStateProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

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

  const handleChooseScope = () => {
    if (selectedOption) {
      onTaskAdded(selectedOption);
      setIsPopupOpen(false);
      setSelectedOption(null);
    }
  };

  return (
    <div className="relative w-full">
      {/* Context Banner — same width as empty state box, shown when ticket has context data */}
      {contextData && onContextBannerClick && (
        <div className="w-full mb-3 relative">
          <div className="bg-[#fbf2e6] rounded-[12px] relative flex flex-wrap items-center gap-[10px] px-[12px] py-[11px]">
            <div aria-hidden="true" className="absolute border border-[#ffdbda] inset-0 pointer-events-none rounded-[12px]" />

            {/* Affected Transactions label */}
            <p className="font-['Inter'] font-medium text-[12px] text-[#464240] shrink-0">
              Affected Transactions:
            </p>

            {/* Chips: tenant, workflow, variant */}
            <div className="flex flex-wrap gap-[8px] items-center flex-1 min-w-0">
              <div className="bg-[#fbe7cd] relative rounded-[20px] px-[9px] py-[4px] flex gap-[4px] items-center shrink-0">
                <div aria-hidden="true" className="absolute border border-[#f4d7b5] inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Inter'] font-normal text-[11px] text-[#9b5c5c]">Tenant :</p>
                <p className="font-['Inter'] font-medium text-[11px] text-[#79493a]">{contextData.tenant}</p>
              </div>

              <div className="bg-[#fbe7cd] relative rounded-[20px] px-[9px] py-[4px] flex gap-[4px] items-center shrink-0">
                <div aria-hidden="true" className="absolute border border-[#f4d7b5] inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Inter'] font-normal text-[11px] text-[#9b5c5c]">Workflow :</p>
                <p className="font-['Inter'] font-medium text-[11px] text-[#79493a]">{contextData.workflow}</p>
              </div>

              <div className="bg-[#fbe7cd] relative rounded-[20px] px-[9px] py-[4px] flex gap-[4px] items-center shrink-0">
                <div aria-hidden="true" className="absolute border border-[#f4d7b5] inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Inter'] font-normal text-[11px] text-[#9b5c5c]">Variant :</p>
                <p className="font-['Inter'] font-medium text-[11px] text-[#79493a]">{contextData.variant}</p>
              </div>

              <span className="text-[#c5b8b0] text-[11px] shrink-0">|</span>

              <p className="font-['Inter'] font-medium text-[12px] text-[#464240] shrink-0">Suggested Subtask:</p>

              <div className="bg-[#e8eeff] relative rounded-[20px] px-[9px] py-[4px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#c7d0f7] inset-0 pointer-events-none rounded-[20px]" />
                <p className="font-['Inter'] font-medium text-[11px] text-[#354eb4]">Terminate workflow</p>
              </div>
            </div>

            {/* Add to Ticket button */}
            <button
              onClick={onContextBannerClick}
              className="bg-[#1677ff] h-[24px] rounded-[4px] shrink-0 px-[10px] flex items-center justify-center hover:bg-[#4096ff] transition-colors"
            >
              <p className="font-['Roboto'] font-normal text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Add to Ticket
              </p>
            </button>
          </div>
        </div>
      )}

      {/* Empty State Container matching Figma */}
      <div className="relative w-full">
        <div
          className="bg-[#eef6ff] border-2 border-[#a3caff] border-dashed rounded-[3px] w-full relative"
          style={{ height: '187px' }}
        >
          {/* Text Content */}
          <p
            className="absolute font-['Roboto',sans-serif] font-normal leading-[22px] text-[#7a8799] text-[16px] text-center max-w-[665.718px]"
            style={{
              left: '50%',
              top: '41.22px',
              transform: 'translateX(-50%)',
              fontVariationSettings: "'wdth' 100"
            }}
          >
            Add a task or scope using the button below. This will be added to this ticket, and you can add more tasks as needed.
          </p>

          {/* Add Button */}
          <button
            ref={buttonRef}
            onClick={() => setIsPopupOpen(!isPopupOpen)}
            className="absolute hover:opacity-90 transition-opacity cursor-pointer"
            style={{
              left: '50%',
              top: '103px',
              transform: 'translateX(-50%)',
              width: '375px',
              height: '32px'
            }}
          >
            <FigmaButton />
          </button>

          {/* Template text */}
          <p
            className="absolute font-['Arimo',sans-serif] font-normal leading-[22px] text-[#354eb4] text-[14px] text-center whitespace-nowrap"
            style={{
              left: '50%',
              top: '144px',
              transform: 'translateX(-50%)'
            }}
          >
            or Choose a template of Tasks for Particular Issue
          </p>
        </div>
      </div>

      {/* Floating Popup */}
      {isPopupOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/20 z-[99]"
            onClick={() => setIsPopupOpen(false)}
          />

          {/* Modal */}
          <div
            ref={popupRef}
            className="fixed z-[100]"
            style={{
              width: '465px',
              height: '782px',
              left: 'calc(50% + 250px)',
              top: 'calc(50% + 24px)',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="bg-white relative rounded-[8px] shadow-[0px_10px_14px_0px_rgba(0,0,0,0.08)] size-full">
              {/* Header */}
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-[33px] top-[33px] w-[399px]">
                <div className="h-[36px] relative shrink-0 w-full">
                  <p className="absolute css-ew64yg font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#2a2a2a] text-[22px] top-[-2px]">
                    Choose a scope for this Sub-Task
                  </p>
                </div>
                <div className="h-[24px] relative shrink-0 w-full">
                  <p className="absolute css-4hzbpn font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#757575] text-[16px] top-[-2px] w-[495px]">
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
                        <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
                  className="h-[39px] relative rounded-[4px] shrink-0 w-[83.297px] hover:bg-gray-50 transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[42px] text-[14px] text-[rgba(0,0,0,0.88)] text-center top-[8px] translate-x-[-50%]">
                      Close
                    </p>
                  </div>
                </button>
                <button
                  disabled={!selectedOption}
                  onClick={handleChooseScope}
                  className={`h-[37px] relative rounded-[4px] shrink-0 w-[137.328px] transition-all ${
                    selectedOption
                      ? 'bg-[#354eb4] hover:bg-[#2d4299] cursor-pointer opacity-100'
                      : 'bg-[#354eb4] opacity-20 cursor-not-allowed'
                  }`}
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[69px] text-[14px] text-center text-white top-[7px] translate-x-[-50%] whitespace-nowrap">
                      Choose Scope
                    </p>
                  </div>
                </button>
              </div>

              {/* Left arrow indicator */}
              <div className="absolute left-[-16px] size-[24px] top-[169px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g clipPath="url(#clip0_17_710)">
                    <g filter="url(#filter0_d_17_710)">
                      <path d={scopeModalSvgPaths.p341f2780} fill="white" />
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
                className="absolute block cursor-pointer hover:opacity-70 transition-opacity"
                style={{
                  left: '440px',
                  top: '16px',
                  width: '10px',
                  height: '9px'
                }}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
                  <path clipRule="evenodd" d={svgPaths.p361a4400} fill="#8993AE" fillRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}