import svgPaths from "./svg-huvybsilfb";

function DashboardReport() {
  return (
    <div className="col-1 h-[21px] ml-0 mt-[10px] relative row-1 w-[86px]" data-name="Dashboard Report">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[0_-103.49%_0_17.44%] leading-[normal] text-[#263238] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow Instances
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_10.06%_0.79%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3902 14.5427">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3530cb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteUnlockFill() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="mingcute:unlock-fill">
      <Group />
    </div>
  );
}

function Frame121() {
  return (
    <div className="bg-[#354eb4] content-stretch flex gap-[8px] items-center justify-center opacity-20 px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[206px]">
      <MingcuteUnlockFill />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Release Credential
      </p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="bg-[#354eb4] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[145px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modify Ticket
      </p>
    </div>
  );
}

function Reload() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Reload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_97_21735)" id="Reload">
          <path d={svgPaths.p1ab33a00} fill="var(--fill-0, #354EB4)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_97_21735">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[42px]">
      <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Reload />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Frame121 />
      <Frame122 />
      <div className="flex h-[34px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[34px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 1">
                <line id="Line 541" stroke="var(--stroke-0, #D0D0D0)" x2="34" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame123 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="col-1 content-stretch flex gap-[16px] items-start ml-[981px] mt-0 relative row-1">
      <Frame131 />
    </div>
  );
}

function Group61() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <DashboardReport />
      <Frame132 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f8fbff] h-[70px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[8px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[8px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[8px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[8px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-[202px] items-end relative shrink-0 w-[45px]">
      <Frame2 />
      <Frame3 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute bottom-[14.6%] left-1/4 right-1/4 top-[16.65%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group25 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group13 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group1 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group37 />
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group38 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Tenant</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame9 />
        <Frame10 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">ASHN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">ASHN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">ASHN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">ASHN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[125px]">
      <Frame7 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute bottom-[14.6%] left-1/4 right-1/4 top-[16.65%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group26 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group14 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group2 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group40 />
    </div>
  );
}

function Filter1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group39 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter1 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Workflow</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame16 />
        <Frame17 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Review Choice De..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Review Choice Demonstration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Review Choice Demonstration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Review Choice Demonstration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[139px]">
      <Frame15 />
      <Frame18 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute bottom-[14.6%] left-1/4 right-1/4 top-[16.65%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group27 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group15 />
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group3 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group42 />
    </div>
  );
}

function Filter2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group41 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter2 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Workflow Variant</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame27 />
        <Frame28 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Homehealth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Hospice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Homehealth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">Hospice</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
      <Frame26 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute bottom-[14.6%] left-1/4 right-1/4 top-[16.65%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group28 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group16 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group4 />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group44 />
    </div>
  );
}

function Filter3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group43 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter3 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Application</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame35 />
        <Frame36 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">HCHB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">HCHB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">HCHB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">HCHB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[113px]">
      <Frame34 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute bottom-[14.6%] left-1/4 right-1/4 top-[16.65%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group29 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group17 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group5 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group46 />
    </div>
  );
}

function Filter4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group45 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter4 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">{`No. of Credentials `}</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame43 />
        <Frame44 />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[154px]">
      <Frame42 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute inset-[16.65%_21.88%_14.6%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group30 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group18 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group6 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group48 />
    </div>
  );
}

function Filter5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-[0_-3.13%_0_3.13%] rounded-[26px]" />
      <Group47 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter5 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Duration for Access</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame50 />
        <Frame51 />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">1 Hour</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">1 Day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">1 Day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">1 Day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[165px]">
      <Frame49 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute inset-[16.65%_21.88%_14.6%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group31 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group19 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group7 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group50 />
    </div>
  );
}

function Filter6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-[0_-3.13%_0_3.13%] rounded-[26px]" />
      <Group49 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter6 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Environment</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame57 />
        <Frame58 />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Production</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Production</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Production</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Production</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125px]">
      <Frame56 />
      <Frame59 />
      <Frame60 />
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute inset-[16.65%_21.88%_14.6%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group32 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group20 />
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group8 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group52 />
    </div>
  );
}

function Filter7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-[0_-3.13%_0_3.13%] rounded-[26px]" />
      <Group51 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter7 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Submitted by</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame64 />
        <Frame65 />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Vishnu Venkatesan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Vishnu Venkatesan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Vishnu Venkatesan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Vishnu Venkatesan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[178px]">
      <Frame63 />
      <Frame66 />
      <Frame67 />
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute inset-[16.65%_21.88%_14.6%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group33 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group21 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group9 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group54 />
    </div>
  );
}

function Filter8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-[0_-3.13%_0_3.13%] rounded-[26px]" />
      <Group53 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter8 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Submitted for</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame71 />
        <Frame72 />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Vishnu Venkatesan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Vishnu Venkatesan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Vishnu Venkatesan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Vishnu Venkatesan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[178px]">
      <Frame70 />
      <Frame73 />
      <Frame74 />
      <Frame75 />
      <Frame76 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute bottom-[14.6%] left-1/4 right-1/4 top-[16.65%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group34 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group22 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group10 />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group56 />
    </div>
  );
}

function Filter9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group55 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter9 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Reason</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame78 />
        <Frame79 />
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[206px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#040404] text-[14.367px] text-ellipsis w-[136px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.576px] overflow-hidden">Troubleshooting for HCHB new Upgradation</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[206px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14.367px] text-ellipsis w-[134px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.576px] overflow-hidden">Troubleshooting for HCHB new Upgradation</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14.367px] text-ellipsis w-[132px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.576px] overflow-hidden">Troubleshooting for HCHB new Upgradation</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14.367px] text-ellipsis w-[137px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22.576px] overflow-hidden">Troubleshooting for HCHB new Upgradation</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[198px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message comes here.</p>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-col h-[246px] items-start overflow-clip relative shrink-0 w-[163px]">
      <Frame77 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Frame84 />
      <Frame85 />
      <Frame86 />
      <Frame87 />
      <Frame88 />
      <Frame89 />
      <Frame90 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex h-[276px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-[1064px]">
      <Frame126 />
      <Frame125 />
      <Frame25 />
      <Frame33 />
      <Frame41 />
      <Frame124 />
      <Frame128 />
      <Frame130 />
      <Frame129 />
      <Frame136 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute inset-[16.65%_21.88%_14.6%_28.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group35 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group23 />
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group11 />
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group58 />
    </div>
  );
}

function Filter10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-[0_-3.13%_0_3.13%] rounded-[26px]" />
      <Group57 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter10 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Status</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame92 />
        <Frame93 />
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #8993AE)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Pending Approval</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #8993AE)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Pending Approval</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #8993AE)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Pending Approval</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #8993AE)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Pending Approval</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Running Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Running Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Running Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Running Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Running Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Running Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Running Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Running Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">Running Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-col h-[246px] items-start overflow-clip relative shrink-0 w-[151px]">
      <Frame91 />
      <Frame94 />
      <Frame95 />
      <Frame96 />
      <Frame97 />
      <Frame98 />
      <Frame99 />
      <Frame100 />
      <Frame101 />
      <Frame102 />
      <Frame103 />
      <Frame104 />
      <Frame105 />
      <Frame106 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute bottom-[14.6%] left-1/4 right-1/4 top-[16.65%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
        <g id="Group 1051">
          <path d={svgPaths.p19fa10c0} fill="var(--fill-0, white)" id="Polygon 1" />
          <path d={svgPaths.p1d5a6a00} fill="var(--fill-0, white)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group36 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group24 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group12 />
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group60 />
    </div>
  );
}

function Filter11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group59 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter11 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Message</p>
      </div>
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-white h-[22px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cad2d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[10px]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                <path d={svgPaths.p31818e00} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame108 />
        <Frame109 />
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[206px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[136px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Approval request sent to approvers.</p>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[206px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[134px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Request rejected by Ganesh</p>
      </div>
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[134px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">1Password Link sent via email</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[137px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">User released the credential</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[198px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message here..</p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[202px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[179px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] overflow-hidden">Message comes here.</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col h-[246px] items-start overflow-clip relative shrink-0 w-[163px]">
      <Frame107 />
      <Frame110 />
      <Frame111 />
      <Frame112 />
      <Frame113 />
      <Frame114 />
      <Frame115 />
      <Frame116 />
      <Frame117 />
      <Frame118 />
      <Frame119 />
      <Frame120 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex h-[246px] items-start relative shrink-0 w-[1412px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border border-[#e1dfdf] border-solid inset-0 pointer-events-none" />
      <Frame8 />
      <Frame134 />
      <Frame127 />
      <Frame135 />
    </div>
  );
}

export default function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center relative size-full">
      <Group61 />
      <Component />
    </div>
  );
}