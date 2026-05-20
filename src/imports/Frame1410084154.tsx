import svgPaths from "./svg-klbsryizhu";

function Frame21() {
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
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.85)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Review Choice Demonstration
      </p>
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

function Group25() {
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
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.85)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Homehealth
      </p>
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

function Group27() {
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
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[19px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0.85)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1.0
      </p>
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

function Group28() {
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
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select    `}</p>
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

function Group26() {
  return (
    <div className="absolute contents left-0 top-0">
      <Input3 />
      <InputLabel3 />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Close">
          <path d={svgPaths.p1e9caf00} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[11px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ASHN
      </p>
      <Close />
    </div>
  );
}

function Close1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Close">
          <path d={svgPaths.p1e9caf00} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[11px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Doctor ‘s Choice of Health
      </p>
      <Close1 />
    </div>
  );
}

function Close2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Close">
          <path d={svgPaths.p1e9caf00} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[11px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Buckeye Home health Care
      </p>
      <Close2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[13px] top-[38px]">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[64px] relative shrink-0 w-[486px]">
      <Group26 />
      <Frame25 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[1278px]">
      <Group25 />
      <Group27 />
      <Group28 />
      <Frame24 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[21px] items-center relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame18() {
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

function Group29() {
  return (
    <div className="absolute contents left-[887px] top-[9px]">
      <Frame18 />
      <Button />
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[35px] relative shrink-0 w-[1278px]">
      <Group29 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[154px] items-start left-[31px] top-[179px] w-[1162px]">
      <Frame20 />
      <Frame23 />
    </div>
  );
}

function SearchResult() {
  return (
    <div className="absolute h-[23px] left-[64.27px] top-[438.33px] w-[98px]" data-name="Search result">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-0 leading-[22.576px] text-[16.419px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search result
      </p>
    </div>
  );
}

function CheckboxInput() {
  return (
    <div className="h-[22px] relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center relative">
        <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function TableHeaderDefault() {
  return (
    <div className="bg-[#f3f9fc] h-[70.017px] relative shrink-0 w-full" data-name="table-header/default">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[17.004px] pt-[16.004px] px-[8.002px] relative size-full">
          <CheckboxInput />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput1() {
  return (
    <div className="h-[22px] relative rounded-[2px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center relative">
        <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="bg">
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function TableCellText() {
  return (
    <div className="h-[48.011px] relative shrink-0 w-full" data-name="table-cell/text">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[18.004px] pt-[17.004px] px-[8.002px] relative size-full">
          <CheckboxInput1 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput2() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center relative">
        <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function TableCellText1() {
  return (
    <div className="h-[48.011px] relative shrink-0 w-full" data-name="table-cell/text">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[18.004px] pt-[17.004px] px-[8.002px] relative size-full">
          <CheckboxInput2 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput3() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center relative">
        <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function TableCellText2() {
  return (
    <div className="h-[48.011px] relative shrink-0 w-full" data-name="table-cell/text">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[18.004px] pt-[17.004px] px-[8.002px] relative size-full">
          <CheckboxInput3 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput4() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center relative">
        <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function TableCellText3() {
  return (
    <div className="h-[48.011px] relative shrink-0 w-full" data-name="table-cell/text">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[18.004px] pt-[17.004px] px-[8.002px] relative size-full">
          <CheckboxInput4 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput5() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center relative">
        <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function TableCellText4() {
  return (
    <div className="h-[48.011px] relative shrink-0 w-full" data-name="table-cell/text">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[18.004px] pt-[17.004px] px-[8.002px] relative size-full">
          <CheckboxInput5 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput6() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center relative">
        <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function TableCellText5() {
  return (
    <div className="h-[48.011px] relative shrink-0 w-full" data-name="table-cell/text">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[18.004px] pt-[17.004px] px-[8.002px] relative size-full">
          <CheckboxInput6 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput7() {
  return (
    <div className="h-[22px] relative rounded-[4px] shrink-0" data-name="Checkbox-Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center relative">
        <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="bg">
          <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function TableCellText6() {
  return (
    <div className="content-stretch flex flex-col h-[48.011px] items-center justify-center pb-[18.004px] pt-[17.004px] px-[8.002px] relative shrink-0 w-[49.012px]" data-name="table-cell/text">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <CheckboxInput7 />
    </div>
  );
}

function ComponentsTableColumnText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="Components/Table-Column/Text">
      <TableHeaderDefault />
      <TableCellText />
      <TableCellText1 />
      <TableCellText2 />
      <TableCellText3 />
      <TableCellText4 />
      <TableCellText5 />
      <TableCellText6 />
    </div>
  );
}

function Group10() {
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

function Group5() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group10 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group5 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group15 />
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group16 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Tenant</p>
      </div>
    </div>
  );
}

function Frame() {
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

function Frame2() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame1 />
        <Frame />
      </div>
    </div>
  );
}

function ComponentsTableCellTextIcon() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text+Icon">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Brightstar Care
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellTextIcon1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text+Icon">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Brightstar Care
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellTextIcon2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text+Icon">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Alpine Care Home Health
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellTextIcon3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text+Icon">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Alpine Care Home Health
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellTextIcon4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text+Icon">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Buckeye Home Health Care
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellTextIcon5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text+Icon">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Buckeye Home Health Care
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellTextIcon6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text+Icon">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Buckeye Home Health Care
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableColumnText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[241px]" data-name="Components/Table-Column/Text">
      <Frame2 />
      <ComponentsTableCellTextIcon />
      <ComponentsTableCellTextIcon1 />
      <ComponentsTableCellTextIcon2 />
      <ComponentsTableCellTextIcon3 />
      <ComponentsTableCellTextIcon4 />
      <ComponentsTableCellTextIcon5 />
      <ComponentsTableCellTextIcon6 />
    </div>
  );
}

function Group11() {
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

function Group6() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group6 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group1 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group18 />
    </div>
  );
}

function Filter1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group17 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter1 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Workflow</p>
      </div>
    </div>
  );
}

function Frame5() {
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

function Frame3() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame4 />
        <Frame5 />
      </div>
    </div>
  );
}

function ComponentsTableCellText() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Review Choice Demonstration
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Cash Posting `}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Review Choice Demonstration
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Cash Posting `}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Review Choice Demonstration
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Cash Posting `}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Schedule
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableColumnText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[303px]" data-name="Components/Table-Column/Text">
      <Frame3 />
      <ComponentsTableCellText />
      <ComponentsTableCellText1 />
      <ComponentsTableCellText2 />
      <ComponentsTableCellText3 />
      <ComponentsTableCellText4 />
      <ComponentsTableCellText5 />
      <ComponentsTableCellText6 />
    </div>
  );
}

function Group12() {
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
      <Group12 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group7 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group2 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group20 />
    </div>
  );
}

function Filter2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group19 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter2 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Workflow Variant</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white h-[22px] opacity-50 relative rounded-[4px] shrink-0 w-full">
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

function Frame6() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame7 />
        <Frame8 />
      </div>
    </div>
  );
}

function ComponentsTableCellText7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Homehealth
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Homehealth
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Homehealth
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#263238] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Hospice
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#263238] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Hospice
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#263238] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Hospice
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText13() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#263238] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            2024-12-01 06:00
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableColumnText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[148px]" data-name="Components/Table-Column/Text">
      <Frame6 />
      <ComponentsTableCellText7 />
      <ComponentsTableCellText8 />
      <ComponentsTableCellText9 />
      <ComponentsTableCellText10 />
      <ComponentsTableCellText11 />
      <ComponentsTableCellText12 />
      <ComponentsTableCellText13 />
    </div>
  );
}

function Group13() {
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
      <Group13 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group8 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group3 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group22 />
    </div>
  );
}

function Filter3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group21 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter3 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Variant Version</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white h-[22px] opacity-50 relative rounded-[4px] shrink-0 w-full">
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

function Frame9() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame10 />
        <Frame11 />
      </div>
    </div>
  );
}

function ComponentsTableCellText14() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            1.0
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText15() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            1.0
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText16() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            1.0
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText17() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#263238] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            2.0
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText18() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#263238] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            2.0
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText19() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#263238] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            2.0
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText20() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#263238] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            2024-12-01 06:00
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableColumnText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[135px]" data-name="Components/Table-Column/Text">
      <Frame9 />
      <ComponentsTableCellText14 />
      <ComponentsTableCellText15 />
      <ComponentsTableCellText16 />
      <ComponentsTableCellText17 />
      <ComponentsTableCellText18 />
      <ComponentsTableCellText19 />
      <ComponentsTableCellText20 />
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

function Group9() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group14 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group9 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group4 />
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

function Filter4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group23 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter4 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Config Name</p>
      </div>
    </div>
  );
}

function Frame14() {
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

function Frame12() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame13 />
        <Frame14 />
      </div>
    </div>
  );
}

function ComponentsTableCellText21() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Configuration001
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText22() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Configuration002
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText23() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Configuration004
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText24() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Configuration005
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText25() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Configuration006
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText26() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Configuration007
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText27() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Ins589008
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableColumnText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[169px]" data-name="Components/Table-Column/Text">
      <Frame12 />
      <ComponentsTableCellText21 />
      <ComponentsTableCellText22 />
      <ComponentsTableCellText23 />
      <ComponentsTableCellText24 />
      <ComponentsTableCellText25 />
      <ComponentsTableCellText26 />
      <ComponentsTableCellText27 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px]">Workflow Input</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-white h-[22px] opacity-50 relative rounded-[4px] shrink-0 w-full">
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

function ComponentsTableCellText28() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <button className="block cursor-pointer font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1677ff] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">View Input</p>
          </button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText29() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1677ff] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View Input
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText30() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1677ff] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View Input
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText31() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1677ff] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View Input
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText32() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1677ff] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View Input
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText33() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1677ff] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View JSON
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableCellText34() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Components/Table-Cell/Text">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[18px] pt-[17px] px-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1677ff] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            View JSON
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ComponentsTableColumnText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[129px]" data-name="Components/Table-Column/Text">
      <Frame15 />
      <ComponentsTableCellText28 />
      <ComponentsTableCellText29 />
      <ComponentsTableCellText30 />
      <ComponentsTableCellText31 />
      <ComponentsTableCellText32 />
      <ComponentsTableCellText33 />
      <ComponentsTableCellText34 />
    </div>
  );
}

function NewTable() {
  return (
    <div className="absolute h-[358px] left-0 rounded-[5.001px] top-[6px] w-[1164px]" data-name="new table">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <ComponentsTableColumnText />
        <ComponentsTableColumnText1 />
        <ComponentsTableColumnText2 />
        <ComponentsTableColumnText3 />
        <ComponentsTableColumnText4 />
        <ComponentsTableColumnText5 />
        <ComponentsTableColumnText6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dbdbdb] border-solid inset-0 pointer-events-none rounded-[5.001px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute h-[462px] left-[30px] top-[385px] w-[1313px]">
      <NewTable />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[#354eb4] content-stretch flex gap-[8px] items-center justify-center left-[1047px] opacity-20 px-[16px] py-[8px] rounded-[4px] top-[784px] w-[143px]">
      <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add To Ticket
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[34px] items-center justify-center left-[916px] px-[43px] py-[16px] rounded-[6px] top-[785px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reset
      </p>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[916px] top-[784px]">
      <Frame19 />
      <Button1 />
    </div>
  );
}

export default function Frame28() {
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
      <Frame21 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-[35px] text-[14px] text-[rgba(0,0,0,0.8)] top-[90px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose how do you like to proceed:
      </p>
      <RadioGroupBasic />
      <Frame27 />
      <SearchResult />
      <div className="absolute h-0 left-[30px] top-[331px] w-[1162px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1162 1">
            <line id="Line 8" stroke="var(--stroke-0, #EDEDED)" x2="1162" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame26 />
      <button className="absolute block cursor-pointer inset-[3.41%_2.38%_94.67%_96.31%]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3412 16.4189">
          <path clipRule="evenodd" d={svgPaths.p14b91800} fill="var(--fill-0, #8993AE)" fillRule="evenodd" id="Shape" />
        </svg>
      </button>
      <Group30 />
    </div>
  );
}