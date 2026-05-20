import svgPaths from "./svg-mfbeque2h6";
import imgImage from "figma:asset/4a2204498522fefbc40afbf0f26beef783c6ee1f.png";
import imgImage1 from "figma:asset/6a0a2f3669c898b54b0b47ba2da464b64af3354e.png";

function Image() {
  return (
    <div className="absolute h-[12.922px] left-[25.31px] top-[24.83px] w-[48.906px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[22px] left-[16px] top-[12px] w-[77.391px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-0 text-[16px] text-[rgba(255,255,255,0.25)] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[46px] left-0 top-0 w-[109.391px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[22px] left-[16px] top-[12px] w-[95.391px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-0 text-[16px] text-[rgba(255,255,255,0.25)] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Authorization
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[46px] left-[109.39px] top-0 w-[127.391px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[22px] left-[16px] top-[12px] w-[46.219px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-0 text-[16px] text-[rgba(255,255,255,0.25)] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Admin
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[46px] left-[236.78px] top-0 w-[78.219px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[22px] left-[16px] top-[12px] w-[46.234px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-0 text-[16px] text-[rgba(255,255,255,0.25)] top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Config
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[46px] left-[315px] top-0 w-[78.234px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[22px] left-[16px] top-[12px] w-[56.469px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-0 text-[16px] text-white top-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Support
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[26.71%_11.33%]" data-name="Group">
      <div className="absolute inset-[26.71%_11.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0547 6.05506">
          <path d={svgPaths.p29e22f00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[13px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80.47px] size-[13px] top-[16.5px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[46px] left-[393.23px] top-0 w-[109.469px]" data-name="Container">
      <Paragraph4 />
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[46px] left-[125px] top-[7px] w-[502.703px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[23.344px] left-[1468.23px] top-[17.5px] w-[22.156px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="bg-gradient-to-b from-[#38475a] h-[60px] relative shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 to-[#1c2d42] via-[#2c3c50] via-[41.55%] w-full" data-name="TopNavigation">
      <Image />
      <Container />
      <Image1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 13.3333">
            <path d={svgPaths.p37c3e100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.66667">
            <path d="M12.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#333] text-[24px]">ARE-T101</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button />
        <Heading />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-white left-[12px] opacity-96 rounded-[33554400px] size-[6px] top-[11px]" data-name="Text" />;
}

function Text() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[#00bc7d] h-[28px] min-h-px min-w-px relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] to-[#096]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
        <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[26px] text-[12px] text-white top-[5px]">Open</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[67.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[32px] relative shrink-0 w-[238.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px]">FD Ticket:</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f3f4f6] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[4px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[4px] relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px]">270cG4c5</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_12.5%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667">
            <path d={svgPaths.p282cab80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_41.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.58333 7.58333">
            <path d="M0.583333 7L7 0.583333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[12.5%] right-1/4 top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.91667 9.91667">
            <path d={svgPaths.p15963b10} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[28px] relative shrink-0 w-[167.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text2 />
        <Text3 />
        <Button1 />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="bg-[#d1d5dc] h-[16px] shrink-0 w-px" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_125_1683)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_125_1683">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px]">Created:</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]">10/13/2025 10:53PM</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon3 />
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container13 />
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[410.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container11 />
    </div>
  );
}

function TicketInfoBar() {
  return (
    <div className="bg-white h-[57px] relative shrink-0 w-full" data-name="TicketInfoBar">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[12px] px-[24px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56.016px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px]">Subtasks</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[18px] left-[13px] top-[10px] w-[12.5px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[6.5px] text-[#155dfc] text-[18px] text-center top-[-1px]">+</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#eff6ff] h-[38px] relative rounded-[8px] shrink-0 w-[130.422px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text6 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[75px] text-[#155dfc] text-[14px] text-center top-[7px]">Add new task</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[38px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f9fafb] h-[63px] relative shrink-0 w-[286px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[12px] px-[16px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_125_1704)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_125_1704">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1c398e] text-[14px] top-[-2px] w-[168px] whitespace-pre-wrap">S873 | Terminate workflow</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[47.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[12px]">30m ago</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#eff6ff] h-[53px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#2b7fff] border-b border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pb-px pl-[14px] pr-[12px] relative size-full">
          <Icon4 />
          <Text7 />
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_125_1665)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_125_1665">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] top-[-2px] w-[196px] whitespace-pre-wrap">S877 | Credential Management</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pb-px pl-[14px] pr-[12px] relative size-full">
          <Icon5 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[8px] px-[8px] relative rounded-[inherit] size-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function SubtaskSidebar() {
  return (
    <div className="absolute bg-white h-[696px] left-[24px] rounded-[14px] top-[24px] w-[288px]" data-name="SubtaskSidebar">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container17 />
        <Container19 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#333] text-[18px] top-[-1px]">S873 | Terminate workflow</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]">Task Description will come here - a small description</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[52px] relative shrink-0 w-[321.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading2 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_125_1675)" id="Icon">
          <path d={svgPaths.p26b84380} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_125_1675">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#155dfc] text-[14px] text-center">Mark as Completed</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.656px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon6 />
        <Text10 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[93px] relative shrink-0 w-[1050px]" data-name="Container" style={{ backgroundImage: "linear-gradient(179.573deg, rgb(239, 246, 255) 3.5574%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 96.443%)" }}>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
        <Container22 />
        <Button5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[48px] relative shrink-0 w-[431px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[215.94px] text-[#538ddc] text-[16px] text-center top-[-2px] w-[339px] whitespace-pre-wrap">Click here to use the form below to specify the workflows you want to enable/disable</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#eef6ff] h-[132px] relative rounded-[3px] shrink-0 w-[1002px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#a3caff] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1050px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[24px] pt-[24px] relative size-full">
        <Button6 />
      </div>
    </div>
  );
}

function DropboxContent() {
  return (
    <div className="bg-white h-[696px] relative rounded-[14px] shrink-0 w-full" data-name="DropboxContent">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container21 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[696px] items-start left-[336px] overflow-clip top-[24px] w-[1052px]" data-name="Container">
      <DropboxContent />
    </div>
  );
}

function Container25() {
  return <div className="absolute h-[696px] left-0 top-0 w-[80px]" data-name="Container" />;
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_125_1698)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_125_1698">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[31.672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[16px] text-[#6a7282] text-[10px] text-center top-0">Activity</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3.984px] h-[64.094px] items-center justify-center pb-[2.109px] relative rounded-tl-[14px] rounded-tr-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none rounded-tl-[14px] rounded-tr-[14px]" />
      <Icon7 />
      <Paragraph7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_125_1687)" id="Icon">
          <path d={svgPaths.p1431c600} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_125_1687">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[55.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[28px] text-[#6a7282] text-[10px] text-center top-0">AI Summary</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3.984px] h-[64.094px] items-center justify-center pb-[2.109px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Icon8 />
      <Paragraph8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p383b2000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[39.469px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[20px] text-[#6a7282] text-[10px] text-center top-0">Ask ARE</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3.984px] h-[64.094px] items-center justify-center pb-[2.109px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Icon9 />
      <Paragraph9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_125_1672)" id="Icon">
          <path d={svgPaths.p363df2c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_125_1672">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[15px] relative shrink-0 w-[33.359px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[15px] left-[17px] text-[#6a7282] text-[10px] text-center top-0">Monitor</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[3.984px] h-[64.094px] items-center justify-center pb-[2.109px] relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
      <Icon10 />
      <Paragraph10 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[254.391px] items-start pl-[1.109px] pr-[-1.984px] relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function RightSidebar() {
  return (
    <div className="absolute bg-white h-[256.391px] left-0 rounded-[14px] top-0 w-[80px]" data-name="RightSidebar">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container26 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[696px] left-[1412px] top-[24px] w-[80px]" data-name="Container">
      <Container25 />
      <RightSidebar />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[744px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <SubtaskSidebar />
      <Container20 />
      <Container24 />
    </div>
  );
}

export default function TicketDetailViewDesign() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Ticket Detail View Design" style={{ backgroundImage: "linear-gradient(149.416deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 50%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <TopNavigation />
      <TicketInfoBar />
      <Container16 />
    </div>
  );
}