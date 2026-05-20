import svgPaths from "./svg-5qvqabkwgo";

function Stop() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="stop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="stop">
          <path d={svgPaths.p1dc7f980} fill="var(--fill-0, #C0C8E8)" id="Vector" />
          <path d={svgPaths.p30703a00} fill="var(--fill-0, #D5121D)" id="bg" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#d5121d] content-stretch flex gap-[8px] items-center justify-center opacity-20 px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[113px]">
      <Stop />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Disable
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[14.944px] relative shrink-0 w-[16.814px]">
      <div className="absolute inset-[0_-5.05%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6625 14.9444">
          <g id="Group 1410083316">
            <path clipRule="evenodd" d={svgPaths.p2c0b8600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            <path d={svgPaths.p3f6a8100} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #C0C8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#354eb4] content-stretch flex gap-[8px] items-center justify-center opacity-20 px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[113px]">
      <Group />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enable
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#354eb4] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[145px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Modify Ticket
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Frame1 />
      <Frame />
      <Frame2 />
    </div>
  );
}

function MinusSquare() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="minus-square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="minus-square">
          <path d={svgPaths.p2692f600} fill="var(--fill-0, #E84E0F)" fillOpacity="0.1" id="bg" />
          <g id="Vector">
            <path d={svgPaths.p659e500} fill="#E84E0F" />
            <path d={svgPaths.p7640f00} fill="#E84E0F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[184px]">
      <div aria-hidden="true" className="absolute border border-[#e84e0f] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <MinusSquare />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#e84e0f] text-[16px] tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Remove from List
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[42px]">
      <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Reload />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start right-0 top-0">
      <Frame5 />
      <div className="flex h-[34px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
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
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[normal] left-0 text-[#263238] text-[18px] top-[calc(50%-10.5px)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflows
      </p>
      <Frame6 />
    </div>
  );
}