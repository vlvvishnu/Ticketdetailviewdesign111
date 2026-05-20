import svgPaths from "./svg-utardregsk";

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[28px] h-[30px] items-center left-[calc(50%+0.5px)] p-[8px] rounded-[4px] top-[69px] w-[255px]">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#cabcbc] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search for any app or setting to filter
      </p>
      <div className="relative shrink-0 size-[10px]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[94px] items-center left-0 top-0 w-[255px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-left w-[143px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.6">
              <path d="M0.8 0.8L4.8 4.8L8.8 0.8" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute inset-[29.82%_7.62%_31.58%_7.95%] rounded-[8px]">
      <Frame3 />
      <div className="absolute h-0 left-0 top-[43px] w-[258px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 549" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-[rgba(255,255,255,0.29)] border-[rgba(228,217,217,0.9)] border-b border-solid border-t cursor-pointer inset-0" role="button" tabIndex="0" />
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[94px] items-center left-0 top-0 w-[255px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-left w-[143px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Application
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.6">
              <path d="M0.8 0.8L4.8 4.8L8.8 0.8" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute inset-[29.82%_7.62%_31.58%_7.95%] rounded-[8px]">
      <Frame4 />
      <div className="absolute h-0 left-0 top-[43px] w-[258px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 549" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-[rgba(255,255,255,0.29)] border-[rgba(228,217,217,0.9)] border-b border-solid inset-0" />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[94px] items-center left-0 top-0 w-[255px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-left w-[143px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tenant
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.6">
              <path d="M0.8 0.8L4.8 4.8L8.8 0.8" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute inset-[29.82%_7.62%_31.58%_7.95%] rounded-[8px]">
      <Frame8 />
      <div className="absolute h-0 left-0 top-[43px] w-[258px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 549" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-[rgba(255,255,255,0.29)] border-[rgba(228,217,217,0.9)] border-b border-solid inset-0" />
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[94px] items-center left-0 top-0 w-[255px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-left w-[143px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow Variant
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.6">
              <path d="M0.8 0.8L4.8 4.8L8.8 0.8" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute inset-[29.82%_7.62%_31.58%_7.95%] rounded-[8px]">
      <Frame10 />
      <div className="absolute h-0 left-0 top-[43px] w-[258px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 549" />
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-[rgba(255,255,255,0.29)] border-[rgba(228,217,217,0.9)] border-b border-solid inset-0" />
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex gap-[94px] items-center left-0 top-0 w-[255px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-left w-[143px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Alert Type
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.6">
              <path d="M0.8 0.8L4.8 4.8L8.8 0.8" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute inset-[29.82%_7.62%_31.58%_7.95%] rounded-[8px]">
      <Frame12 />
      <div className="absolute h-0 left-0 top-[43px] w-[258px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 549" />
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-[rgba(255,255,255,0.29)] border-[rgba(228,217,217,0.9)] border-b border-solid inset-0" />
      <Frame11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex gap-[94px] items-center left-0 top-0 w-[255px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[14px] text-black text-left w-[143px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gateway
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
          <div className="absolute inset-[-20%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.6">
              <path d="M0.8 0.8L4.8 4.8L8.8 0.8" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute inset-[29.82%_7.62%_31.58%_7.95%] rounded-[8px]">
      <Frame14 />
      <div className="absolute h-0 left-0 top-[43px] w-[258px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 549" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-[rgba(255,255,255,0.29)] border-[rgba(228,217,217,0.9)] border-b border-solid inset-0" />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch cursor-pointer flex flex-col h-[601px] items-start left-1/2 overflow-clip top-[116px] w-[302px]">
      <button className="block h-[57px] relative shrink-0 w-[302px]">
        <Group />
      </button>
      <button className="block h-[57px] relative shrink-0 w-[302px]">
        <Group1 />
      </button>
      <button className="block h-[57px] relative shrink-0 w-[302px]">
        <Group2 />
      </button>
      <button className="block h-[57px] relative shrink-0 w-[302px]">
        <Group3 />
      </button>
      <button className="block h-[57px] relative shrink-0 w-[302px]">
        <Group4 />
      </button>
      <button className="block h-[57px] relative shrink-0 w-[302px]">
        <Group5 />
      </button>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#354eb4] content-stretch flex items-center justify-center left-[calc(50%-2.5px)] opacity-20 px-[16px] py-[8px] rounded-[4px] top-[6px] w-[258px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Load Data
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-2.5px)] opacity-20 px-[16px] py-[8px] rounded-[4px] top-[51px] w-[258px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#354eb4] text-[16px] tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reset
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-2.5px)] top-[6px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[81px] left-[12px] top-[711px] w-[275px]">
      <Group6 />
    </div>
  );
}

export default function Frame17() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[rgba(255,255,255,0.91)] border border-[#d4d9e2] border-solid h-[820px] left-0 rounded-[12px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)] top-0 w-[302px]" />
      <Frame />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[24px] opacity-60 text-[#374169] text-[16px] top-[20px] w-[249px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Showing Results Based on
      </p>
      <Frame15 />
      <div className="absolute h-0 left-px top-[54px] w-[301px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 301 1">
            <line id="Line 550" stroke="var(--stroke-0, #E4D9D9)" x2="301" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame16 />
    </div>
  );
}