import svgPaths from "./svg-2q2mtf0fa6";

function InputTextArea() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8.209px] h-[69px] items-start left-0 px-[12.314px] py-[5.131px] rounded-[6.181px] top-[29px] w-[1274px]" data-name="Input__Text Area">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.026px] border-solid inset-0 pointer-events-none rounded-[6.181px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22.576px] min-h-px min-w-px relative text-[#989898] text-[14.367px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`e.g HCHB Outage, scheduled maintenance, etc  `}</p>
      <div className="absolute bottom-[2.71px] right-[2.71px] size-[8.577px]" data-name="Resizer">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.57715 8.57715">
          <path d={svgPaths.p25edf00} fill="var(--fill-0, black)" fillOpacity="0.88" id="Resizer" />
        </svg>
      </div>
    </div>
  );
}

function InputLabel() {
  return (
    <div className="absolute content-stretch flex gap-[4.105px] h-[32.966px] items-center left-[0.66px] text-[rgba(0,0,0,0.88)] top-[-11.05px] w-[56.629px]" data-name="Input__Label">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[22.576px] relative shrink-0 text-[14.367px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reason/ Message (Optional)
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute inset-[0_0_79.1%_0]">
      <InputTextArea />
      <InputLabel />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#354eb4] content-stretch flex gap-[8px] inset-[55.01%_2.08%_37.53%_86.91%] items-center justify-center opacity-20 px-[16px] py-[8px] rounded-[4px]">
      <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add To Ticket
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] inset-[55.22%_13.78%_37.53%_76.83%] items-center justify-center px-[43px] py-[16px] rounded-[6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reset
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[55.01%_2.08%_37.53%_76.83%]">
      <Frame />
      <Button />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute h-[469px] left-[34px] top-[538px] w-[1299px]">
      <Frame3 />
      <Group4 />
    </div>
  );
}

function Check() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Check">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <Check />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Self
      </p>
    </div>
  );
}

function Check1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="Check">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Checkbox">
      <Check1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Another User
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[18px] inset-[63.64%_0_0_0] items-center">
      <Checkbox />
      <Checkbox1 />
    </div>
  );
}

function InputLabel1() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] inset-[0_59.1%_47.11%_0] items-start leading-[22px] py-[2px] text-[14px] text-[rgba(0,0,0,0.88)]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Submitted For
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[60.5px] left-0 top-[268px] w-[1156px]">
      <Frame4 />
      <InputLabel1 />
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
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center left-0 px-[12px] py-[10px] rounded-[6px] top-[32px] w-[224px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select  `}</p>
      <IconRight />
    </div>
  );
}

function InputLabel2() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] left-[1.38px] text-[14px] text-[rgba(0,0,0,0.88)] top-0 w-[54.969px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        No. of Credentials Required
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-0">
      <Input />
      <InputLabel2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[64px] relative shrink-0 w-[224px]">
      <Group7 />
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
        Production
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
        Non - Production
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[18px] inset-[63.11%_-72.31%_0.82%_0] items-center">
      <Radio />
      <Radio2 />
    </div>
  );
}

function InputLabel3() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] inset-[0_29.52%_47.54%_0] items-start leading-[22px] py-[2px] text-[14px] text-[rgba(0,0,0,0.88)]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Environment
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[61px] relative shrink-0 w-[242px]">
      <Frame5 />
      <InputLabel3 />
    </div>
  );
}

function InputLabel4() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] left-[1.38px] text-[14px] text-[rgba(0,0,0,0.88)] top-0 w-[54.969px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Duration of Access
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
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
        Hour
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
        Day
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[130px]">
      <Radio4 />
      <Radio6 />
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
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0 w-[143px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select  `}</p>
      <IconRight1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-[32px] w-[286px]">
      <Frame10 />
      <Input1 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-0 top-0">
      <InputLabel4 />
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[64px] relative shrink-0 w-[364px]">
      <Group8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[21px] h-[64px] items-center left-0 top-0 w-[1278px]">
      <Frame8 />
      <Group6 />
      <Frame9 />
    </div>
  );
}

function NewCred() {
  return (
    <div className="absolute h-[64px] left-0 top-[134px] w-[1278px]" data-name="new cred">
      <Frame1 />
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
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[224px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select  `}</p>
      <IconRight2 />
    </div>
  );
}

function InputLabel5() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.37px] mt-0 relative row-1 text-[14px] text-[rgba(0,0,0,0.88)] w-[54.969px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Application
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
      <Input2 />
      <InputLabel5 />
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
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[242px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select    `}</p>
      <IconRight3 />
    </div>
  );
}

function InputLabel6() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.49px] mt-0 relative row-1 text-[14px] text-[rgba(0,0,0,0.88)] w-[59.387px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow
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
      <InputLabel6 />
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
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[150px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select  `}</p>
      <IconRight4 />
    </div>
  );
}

function InputLabel7() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.72px] mt-0 relative row-1 text-[14px] text-[rgba(0,0,0,0.88)] w-[72.857px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow Variant
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
      <Input4 />
      <InputLabel7 />
    </div>
  );
}

function IconRight5() {
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

function Input5() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[8px] h-[32px] items-center justify-center ml-0 mt-[32px] px-[12px] py-[10px] relative rounded-[6px] row-1 w-[318px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.25)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select    `}</p>
      <IconRight5 />
    </div>
  );
}

function InputLabel8() {
  return (
    <div className="col-1 content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] h-[32px] items-center leading-[22px] ml-[1.7px] mt-0 relative row-1 text-[14px] text-[rgba(0,0,0,0.88)] w-[67.98px]" data-name="Input__Label">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tenant
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
      <Input5 />
      <InputLabel8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[21px] items-center leading-[0] relative shrink-0 w-full">
      <Group />
      <Group3 />
      <Group1 />
      <Group5 />
    </div>
  );
}

function NewCred1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-end left-0 top-0 w-[1278px]" data-name="new cred">
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[328.5px] left-[35px] top-[173px] w-[1313px]">
      <div className="absolute h-0 left-0 top-[99px] w-[1313px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1313 1">
            <line id="Line 8" stroke="var(--stroke-0, #EDEDED)" x2="1313" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[233px] w-[1313px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1313 1">
            <line id="Line 8" stroke="var(--stroke-0, #EDEDED)" x2="1313" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group2 />
      <NewCred />
      <NewCred1 />
    </div>
  );
}

function Radio8() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#1677ff] left-[4px] rounded-[999px] size-[8px] top-[4px]" data-name="Check" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#1677ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio8 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="🧬 item 1">
      <RadioWrapper4 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Request any Credential
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

function RadioWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio9 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="🧬 item 2">
      <RadioWrapper5 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Request Particular Credential
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

export default function Frame6() {
  return (
    <div className="bg-white overflow-clip relative rounded-[4.105px] shadow-[0px_1.026px_11.288px_0px_rgba(0,0,0,0.44)] size-full">
      <Group9 />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium inset-[3.54%_87.79%_93.78%_2.46%] leading-[22.576px] text-[16px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Request Credential
      </p>
      <button className="absolute block cursor-pointer inset-[2.24%_3.71%_95.84%_95.07%]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9704 16.4189">
          <path clipRule="evenodd" d={svgPaths.pd5a5c00} fill="var(--fill-0, #8993AE)" fillRule="evenodd" id="Shape" />
        </svg>
      </button>
      <div className="absolute h-0 left-[10.66px] top-[71.86px] w-[1373.03px]">
        <div className="absolute inset-[-0.26px_-0.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1373.54 0.51309">
            <path d="M0.256545 0.256545H1373.29" id="Vector 1621" stroke="var(--stroke-0, #CAD2D8)" strokeLinecap="round" strokeWidth="0.51309" />
          </svg>
        </div>
      </div>
      <Frame7 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-[35px] text-[14px] text-[rgba(0,0,0,0.8)] top-[90px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose how do you like to proceed:
      </p>
      <RadioGroupBasic />
    </div>
  );
}