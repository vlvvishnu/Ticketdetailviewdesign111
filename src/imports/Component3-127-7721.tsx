import svgPaths from "./svg-gax0d0ubk8";

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
        <div className="content-stretch flex items-center justify-end px-[16px] py-[8px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-end relative shrink-0 w-[48px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Group14() {
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

function Group7() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group14 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group7 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group21 />
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group22 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Request ID</p>
      </div>
    </div>
  );
}

function Frame6() {
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

function Frame4() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame5 />
        <Frame6 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px]">REQ-17566155924 - LHC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[183px]">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Group15() {
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

function Group8() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group15 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group8 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group1 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group24 />
    </div>
  );
}

function Filter1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group23 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter1 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Tenant</p>
      </div>
    </div>
  );
}

function Frame13() {
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

function Frame11() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame12 />
        <Frame13 />
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LHC
      </p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Doctor’s Choic..
      </p>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        +2 More
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[3px] items-end relative shrink-0">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[242px]">
      <Frame11 />
      <Frame18 />
    </div>
  );
}

function Group16() {
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

function Group9() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group16 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group9 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group2 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group26 />
    </div>
  );
}

function Filter2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group25 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter2 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Workflow</p>
      </div>
    </div>
  );
}

function Frame16() {
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

function Frame14() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame15 />
        <Frame16 />
      </div>
    </div>
  );
}

function Frame17() {
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

function Frame38() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[145px]">
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Group17() {
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

function Group10() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group17 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group10 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group3 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group28 />
    </div>
  );
}

function Filter3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group27 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter3 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Time Range</p>
      </div>
    </div>
  );
}

function Frame21() {
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

function Frame19() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame20 />
        <Frame21 />
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
            <p className="leading-[16px]">Last 7 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[127px]">
      <Frame19 />
      <Frame22 />
    </div>
  );
}

function Group18() {
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

function Group11() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group18 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group11 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group4 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group30 />
    </div>
  );
}

function Filter4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group29 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter4 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Files</p>
      </div>
    </div>
  );
}

function Frame26() {
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

function Frame24() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame25 />
        <Frame26 />
      </div>
    </div>
  );
}

function Loading3Quarters() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Loading3Quarters">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_127_7754)" id="Loading3Quarters">
          <path d={svgPaths.p22e3c700} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" stroke="var(--stroke-0, #8C8C8C)" strokeWidth="0.15" />
        </g>
        <defs>
          <clipPath id="clip0_127_7754">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-0 top-0">
      <Loading3Quarters />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[#263238] text-[13px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Generating</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="h-[16px] relative shrink-0 w-[106px]">
      <Group36 />
    </div>
  );
}

function CloudUpload() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="CloudUpload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_127_7773)" id="CloudUpload">
          <path d={svgPaths.p3ab96e80} fill="var(--fill-0, #354EB4)" id="Vector" stroke="var(--stroke-0, #354EB4)" strokeWidth="0.2" />
          <path d={svgPaths.p3a473e00} fill="var(--fill-0, #354EB4)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_127_7773">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-0 top-0">
      <CloudUpload />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[24px] text-[#354eb4] text-[13px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Upload File</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="h-[16px] opacity-20 relative shrink-0 w-[89px]">
      <Group35 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[21px] items-center px-[16px] py-[14px] relative w-full">
          <Frame41 />
          <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[17px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 1">
                    <line id="Line 542" opacity="0.2" stroke="var(--stroke-0, #DADADA)" x2="17" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[277px]">
      <Frame24 />
      <Frame27 />
    </div>
  );
}

function Group19() {
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

function Group12() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group19 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group12 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group5 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group32 />
    </div>
  );
}

function Filter5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-[0_-3.13%_0_3.13%] rounded-[26px]" />
      <Group31 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter5 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Status</p>
      </div>
    </div>
  );
}

function Frame30() {
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

function Frame28() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame29 />
        <Frame30 />
      </div>
    </div>
  );
}

function Frame31() {
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
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] w-[208px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre-wrap">File Generation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[164px]">
      <Frame28 />
      <Frame31 />
    </div>
  );
}

function Group20() {
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
      <Group20 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group13 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group6 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group34 />
    </div>
  );
}

function Filter6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group33 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter6 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Message</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[22px] relative shrink-0 w-[218px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 218 22">
        <g id="Frame 1410081710">
          <rect fill="var(--fill-0, white)" height="21" rx="3.5" width="217" x="0.5" y="0.5" />
          <rect height="21" rx="3.5" stroke="var(--stroke-0, #CAD2D8)" width="217" x="0.5" y="0.5" />
          <path d={svgPaths.p29509900} id="Vector" stroke="var(--stroke-0, #545454)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame33 />
        <Frame34 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#263238] text-[14px] text-ellipsis w-[122px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-hidden">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[242px]">
      <Frame32 />
      <Frame35 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="Component 3">
      <div className="content-stretch flex items-start relative size-full">
        <Frame8 />
        <Frame9 />
        <Frame10 />
        <Frame38 />
        <Frame39 />
        <Frame23 />
        <Frame36 />
        <Frame37 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1dfdf] border-solid inset-0 pointer-events-none" />
    </div>
  );
}