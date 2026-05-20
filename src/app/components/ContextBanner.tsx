import svgPaths from '@/imports/ContextBanner/svg-ma6ios0p3k';

interface ChipData {
  label: string;
  value: string;
}

interface ContextBannerProps {
  title?: string;
  chips: ChipData[];
  infoText?: string;
  onClick: () => void;
}

function LinkIcon() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-[16px]">
      <div className="absolute inset-[10.59%_1.75%_38.7%_48.49%]">
        <div className="absolute inset-[-7.73%_-8.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.29489 9.95264">
            <path d={svgPaths.p1ff31300} stroke="#464240" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.74%_34.85%_11.55%_15.38%]">
        <div className="absolute inset-[-7.73%_-8.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.29489 9.95264">
            <path d={svgPaths.p3680f980} stroke="#464240" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ContextBanner({ chips, onClick }: ContextBannerProps) {
  return (
    <div className="bg-[#fbf2e6] content-stretch flex gap-[10px] items-center px-[12.111px] py-[13.111px] relative rounded-[12px]">
      <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[12px]" />

      {/* Left: Link Icon */}
      <div className="h-[14px] relative shrink-0 w-[16px]">
        <LinkIcon />
      </div>

      {/* Center: Content */}
      <div className="flex-1 content-stretch flex gap-[9px] items-center min-w-0 flex-wrap">
        <p className="font-['Inter'] font-medium leading-[18px] not-italic text-[#464240] text-[12px] max-w-[326px] whitespace-pre-wrap">
          Add Relevant record based on Workflow & tenant  from other subtasks / From affected Transaction
        </p>

        {/* Pill Chips */}
        {chips.map((chip, index) => (
          <div
            key={index}
            className="bg-[#fbe7cd] content-stretch flex items-center px-[9.111px] py-[4.111px] relative rounded-[20px] shrink-0"
          >
            <div aria-hidden="true" className="absolute border-[#f4d7b5] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <div className="flex gap-[4px] items-center leading-[16.5px] not-italic text-[11px] whitespace-nowrap">
              <p className="font-['Inter'] font-normal text-[#9b5c5c]">{chip.label} :</p>
              <p className="font-['Inter'] font-medium text-[#79493a]">{chip.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Add to Ticket Button */}
      <button
        onClick={onClick}
        className="bg-[#1677ff] h-[24px] relative rounded-[4px] shrink-0 w-[103px] hover:bg-[#4096ff] transition-colors"
      >
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] size-full">
          <p className="font-['Roboto'] font-normal leading-[22px] shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Add to Ticket
          </p>
        </div>
      </button>
    </div>
  );
}

// Example usage component showing the design specification
export function ContextBannerExample() {
  const handleClick = () => {
    // Opens the existing subtask modal for this task.
    // The modal fields for Tenant, Workflow, and Workflow Variant
    // are pre-filled with the values shown in the chips above.
    // The modal opens in its post-search state —
    // data table already populated if the subtask scope requires
    // record selection, or form-only with "Add to ticket" CTA
    // enabled if no table is needed for that subtask.
    console.log('Context banner clicked - open subtask modal');
  };

  return (
    <ContextBanner
      chips={[
        { label: 'Tenant', value: 'Brightstar Care' },
        { label: 'Workflow', value: 'Eligibility Verification' },
        { label: 'Variant', value: 'Homehealth' }
      ]}
      onClick={handleClick}
    />
  );
}
