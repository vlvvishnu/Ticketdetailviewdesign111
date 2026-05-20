import svgPaths from "./svg-ma6ios0p3k";

function Icon() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[10.59%_1.75%_38.7%_48.49%]" data-name="Vector">
        <div className="absolute inset-[-7.73%_-8.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.29489 9.95264">
            <path d={svgPaths.p1ff31300} id="Vector" stroke="var(--stroke-0, #464240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.74%_34.85%_11.55%_15.38%]" data-name="Vector">
        <div className="absolute inset-[-7.73%_-8.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.29489 9.95264">
            <path d={svgPaths.p3680f980} id="Vector" stroke="var(--stroke-0, #464240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[14px] relative shrink-0 w-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16.51px] relative shrink-0 w-[79.688px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#79493a] text-[11px] top-[0.11px] whitespace-nowrap">Brightstar Care</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] not-italic relative shrink-0 text-[#9b5c5c] text-[11px] whitespace-nowrap">Tenant :</p>
        <Text />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#fbe7cd] content-stretch flex flex-col items-start px-[9.111px] py-[4.111px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4d7b5] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center leading-[16.5px] not-italic relative size-full text-[11px] whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9b5c5c]">Workflow:</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#79493a]">Review Choice Demonstration</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#fbe7cd] content-stretch flex flex-col items-start px-[9.111px] py-[4.111px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4d7b5] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center leading-[16.5px] not-italic relative size-full text-[11px] whitespace-nowrap">
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#9b5c5c]">Variant :</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#79493a]">Homehealth</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#fbe7cd] content-stretch flex flex-col items-start px-[9.111px] py-[4.111px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f4d7b5] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-center left-[-432.2px] top-[-1.05px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#464240] text-[12px] whitespace-nowrap">{`Add Relevant record based on Workflow & tenant set from other subtasks`}</p>
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[25px] left-[433.44px] top-[2.3px] w-[976px]" data-name="Container">
      <Frame3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[18px] relative shrink-0 w-[254px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1116px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

export default function ContextBanner() {
  return (
    <div className="bg-[#fbf2e6] content-stretch flex gap-[10px] items-center px-[13.111px] py-[6.111px] relative rounded-[12px] size-full" data-name="ContextBanner">
      <div aria-hidden="true" className="absolute border-[#ffdbda] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container />
      <Container1 />
      <div className="bg-[#1677ff] h-[24px] relative rounded-[4px] shrink-0 w-[103px]" data-name="Button">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Add to Ticket
          </p>
        </div>
      </div>
    </div>
  );
}