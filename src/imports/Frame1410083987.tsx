import svgPaths from "./svg-0onv8ey8lw";

function Frame() {
  return (
    <div className="absolute bg-[#354eb4] content-stretch flex gap-[8px] items-center justify-center left-[1169px] px-[16px] py-[8px] rounded-[4px] top-[753px] w-[143px]">
      <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Run Query
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[34px] items-center justify-center left-[1038px] px-[43px] py-[16px] rounded-[6px] top-[754px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reset
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[1038px] top-[753px]">
      <Frame />
      <Button />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon">
          <path d={svgPaths.pc19a880} fill="var(--fill-0, #1677FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trigger() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="trigger">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1677ff] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Created Date
      </p>
      <Icon />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-0" data-name="Dropdown">
      <Trigger />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[22px] relative shrink-0 w-[97px]">
      <Dropdown />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.5)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Show Results based on
      </p>
      <Frame7 />
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

function RadioWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio1 />
    </div>
  );
}

function Radio() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Today
      </p>
    </div>
  );
}

function Radio3() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio3 />
    </div>
  );
}

function Radio2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday
      </p>
    </div>
  );
}

function Radio5() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio5 />
    </div>
  );
}

function Radio4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper2 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Last 7 days
      </p>
    </div>
  );
}

function Radio7() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio7 />
    </div>
  );
}

function Radio6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper3 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Last 30 days
      </p>
    </div>
  );
}

function Radio9() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio9 />
    </div>
  );
}

function Radio8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper4 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Last 90 days
      </p>
    </div>
  );
}

function Radio11() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio11 />
    </div>
  );
}

function Radio10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper5 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Custom
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
      <Radio />
      <Radio2 />
      <Radio4 />
      <Radio6 />
      <Radio8 />
      <Radio10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[706px]">
      <Frame8 />
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[140px]">
      <Frame9 />
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
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[224px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select  `}</p>
      <IconRight />
    </div>
  );
}

function InputLabel() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.37px] mt-0 relative row-1 text-[14px] text-[rgba(0,0,0,0.88)] w-[54.969px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow Workflow
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
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
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[202px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select    `}</p>
      <IconRight1 />
    </div>
  );
}

function InputLabel1() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.24px] mt-0 relative row-1 text-[14px] text-[rgba(0,0,0,0.88)] w-[49.571px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow Variant
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
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
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[150px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select  `}</p>
      <IconRight2 />
    </div>
  );
}

function InputLabel2() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.71px] mt-0 relative row-1 text-[14px] text-[rgba(0,0,0,0.88)] w-[72.857px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow Version
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
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
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[306px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select  `}</p>
      <IconRight3 />
    </div>
  );
}

function InputLabel3() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[3.5px] mt-0 relative row-1 text-[14px] text-[rgba(0,0,0,0.88)] w-[148.629px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tenant
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <Input3 />
      <InputLabel3 />
    </div>
  );
}

function IconRight4() {
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

function Input4() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[270px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select  `}</p>
      <IconRight4 />
    </div>
  );
}

function InputLabel4() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.37px] mt-0 relative row-1 text-[14px] text-[rgba(0,0,0,0.88)] w-[54.969px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        State Table
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0">
      <Input4 />
      <InputLabel4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[21px] items-center leading-[0] relative shrink-0 w-full">
      <Group />
      <Group2 />
      <Group1 />
      <Group3 />
      <Group5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[31.91%_-59.93%_0_0] items-start">
      <Frame1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[94px] left-0 top-0 w-[1103px]">
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[196px] left-[35.27px] top-[97.27px] w-[1312.727px]">
      <div className="absolute h-0 left-0 top-[117px] w-[1312.727px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1312.73 1">
            <line id="Line 8" stroke="var(--stroke-0, #EDEDED)" x2="1312.73" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame2 />
      <Group6 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-white overflow-clip relative rounded-[4.105px] shadow-[0px_1.026px_11.288px_0px_rgba(0,0,0,0.44)] size-full">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[3.54%_87.86%_93.78%_2.46%] leading-[22.576px] text-[16.419px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Generate Data File
      </p>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[6.9%_42.59%_90.41%_2.46%] leading-[22.576px] text-[#5d5d5d] text-[14.367px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Use the form below to specify the data you want to download. After generating a request, you can download the CSV file.
      </p>
      <button className="absolute block cursor-pointer inset-[5.51%_3.71%_92.57%_95.07%]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9704 16.4189">
          <path clipRule="evenodd" d={svgPaths.pd5a5c00} fill="var(--fill-0, #8993AE)" fillRule="evenodd" id="Shape" />
        </svg>
      </button>
      <div className="absolute h-0 left-[10.66px] top-[111.86px] w-[1373.03px]">
        <div className="absolute inset-[-0.26px_-0.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1373.54 0.51309">
            <path d="M0.256545 0.256545H1373.29" id="Vector 1621" stroke="var(--stroke-0, #CAD2D8)" strokeLinecap="round" strokeWidth="0.51309" />
          </svg>
        </div>
      </div>
      <Group4 />
      <Frame6 />
    </div>
  );
}