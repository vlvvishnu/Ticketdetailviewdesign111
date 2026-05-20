import svgPaths from "./svg-4weco2clci";

function Frame2() {
  return <div className="absolute h-[208px] left-[35px] top-[90px] w-[1207px]" />;
}

function Radio() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#1677ff] left-[4px] rounded-[999px] size-[8px] top-[4px]" data-name="Check" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#1677ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="🧬 item 1">
      <RadioWrapper />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Choose existing schedule `}</p>
    </div>
  );
}

function Radio1() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio1 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="🧬 item 2">
      <RadioWrapper1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Provide Manual Input
      </p>
    </div>
  );
}

function RadioGroupBasic() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[34px] top-[124px]" data-name="Radio Group__Basic">
      <Item />
      <Item1 />
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="🎰 icon right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ð° icon right">
          <path d={svgPaths.p2e3100} fill="var(--fill-0, #878787)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[267px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select    `}</p>
      <IconRight />
    </div>
  );
}

function InputLabel() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.43px] mt-0 relative row-1 text-[14px] w-[57.077px]" data-name="Input__Label">
      <p className="relative shrink-0 text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow
      </p>
      <p className="relative shrink-0 text-[#f5222d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Input />
      <InputLabel />
    </div>
  );
}

function IconRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="🎰 icon right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ð° icon right">
          <path d={svgPaths.p2e3100} fill="var(--fill-0, #878787)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[249px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select    `}</p>
      <IconRight1 />
    </div>
  );
}

function InputLabel1() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.32px] mt-0 relative row-1 text-[14px] w-[53.229px]" data-name="Input__Label">
      <p className="relative shrink-0 text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow Variant
      </p>
      <p className="relative shrink-0 text-[#f5222d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Input1 />
      <InputLabel1 />
    </div>
  );
}

function IconRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="🎰 icon right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ð° icon right">
          <path d={svgPaths.p2e3100} fill="var(--fill-0, #878787)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[130px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select    `}</p>
      <IconRight2 />
    </div>
  );
}

function InputLabel2() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[0.68px] mt-0 relative row-1 text-[14px] w-[27.79px]" data-name="Input__Label">
      <p className="relative shrink-0 text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Variant Version
      </p>
      <p className="relative shrink-0 text-[#f5222d]" style={{ fontVariationSettings: "'wdth' 100" }}>
        *
      </p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Input2 />
      <InputLabel2 />
    </div>
  );
}

function IconRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="🎰 icon right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ð° icon right">
          <path d={svgPaths.p2e3100} fill="var(--fill-0, #878787)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center left-0 px-[12px] py-[10px] rounded-[6px] top-[32px] w-[486px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select    `}</p>
      <IconRight3 />
    </div>
  );
}

function InputLabel3() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] left-[2.95px] text-[14px] text-[rgba(0,0,0,0.88)] top-0 w-[118.43px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tenant
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Input3 />
      <InputLabel3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[64px] relative shrink-0 w-[486px]">
      <Group1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[1278px]">
      <Group />
      <Group2 />
      <Group3 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#354eb4] content-stretch flex gap-[8px] items-center justify-center left-[1018px] px-[16px] py-[8px] rounded-[4px] top-[9px] w-[143px]">
      <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[34px] items-center justify-center left-[887px] px-[43px] py-[16px] rounded-[6px] top-[10px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reset
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[887px] top-[9px]">
      <Frame />
      <Button />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[35px] relative shrink-0 w-[1278px]">
      <Group4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[31px] top-[179px] w-[1162px]">
      <Frame1 />
      <Frame4 />
    </div>
  );
}

function SearchResult() {
  return <div className="absolute h-[23px] left-[39.27px] top-[350.33px] w-[98px]" data-name="Search result" />;
}

export default function Frame7() {
  return (
    <div className="bg-white overflow-clip relative rounded-[4.105px] shadow-[0px_1.026px_11.288px_0px_rgba(0,0,0,0.44)] size-full">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[3.5%_70.61%_93.81%_2.66%] leading-[22.576px] text-[16px] text-black whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose Configuration to Invoke Trigger
      </p>
      <button className="absolute block cursor-pointer inset-[2.24%_-43.52%_95.84%_142.2%]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3412 16.4189">
          <path clipRule="evenodd" d={svgPaths.p14b91800} fill="var(--fill-0, #8993AE)" fillRule="evenodd" id="Shape" />
        </svg>
      </button>
      <div className="absolute h-0 left-[11px] top-[72px] w-[1771px]">
        <div className="absolute inset-[-0.26px_-0.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1771.51 0.51309">
            <path d="M0.256545 0.256545H1771.26" id="Vector 1621" stroke="var(--stroke-0, #CAD2D8)" strokeLinecap="round" strokeWidth="0.51309" />
          </svg>
        </div>
      </div>
      <Frame2 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-[35px] text-[14px] text-[rgba(0,0,0,0.8)] top-[90px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose how do you like to proceed:
      </p>
      <RadioGroupBasic />
      <Frame6 />
      <SearchResult />
      <button className="absolute block cursor-pointer inset-[3.41%_2.38%_94.67%_96.31%]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3412 16.4189">
          <path clipRule="evenodd" d={svgPaths.p14b91800} fill="var(--fill-0, #8993AE)" fillRule="evenodd" id="Shape" />
        </svg>
      </button>
    </div>
  );
}