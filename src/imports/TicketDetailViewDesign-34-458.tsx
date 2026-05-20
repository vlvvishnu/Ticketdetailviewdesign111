import svgPaths from "./svg-q3p9b3qmhp";
import imgImage from "figma:asset/4a2204498522fefbc40afbf0f26beef783c6ee1f.png";
import imgImage1 from "figma:asset/6a0a2f3669c898b54b0b47ba2da464b64af3354e.png";

function Image() {
  return (
    <div className="absolute h-[12.934px] left-[29.77px] top-[24.83px] w-[57.535px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[21.997px] items-start left-[15.99px] top-[12px] w-[77.396px]" data-name="Paragraph">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[21.997px] items-start left-[125.36px] top-[12px] w-[95.399px]" data-name="Paragraph">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Authorization
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[21.997px] items-start left-[252.74px] top-[12px] w-[46.233px]" data-name="Paragraph">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Admin
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[21.997px] items-start left-[330.95px] top-[12px] w-[46.233px]" data-name="Paragraph">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Config
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[21.997px] items-start left-[15.99px] top-[12px] w-[56.476px]" data-name="Paragraph">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Support
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[26.71%_11.33%]" data-name="Group">
      <div className="absolute inset-[26.71%_11.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0439 6.04859">
          <path d={svgPaths.paa3f800} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[12.986px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80.45px] size-[12.986px] top-[16.49px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[45.99px] left-[393.18px] top-0 w-[109.427px]" data-name="Container">
      <Paragraph4 />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[45.99px] left-[125px] top-[7.01px] w-[502.604px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Container1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[23.351px] left-[1727.15px] top-[17.5px] w-[26.059px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="bg-gradient-to-b from-[#38475a] h-[60px] relative shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#1c2d42] via-[#2c3c50] via-[41.55%] w-full" data-name="TopNavigation">
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
    <div className="relative rounded-[4px] shrink-0 size-[27.986px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[31.979px] relative shrink-0 w-[110.451px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arimo:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#333] text-[24px]">ARE-T101</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[31.979px] relative shrink-0 w-[150.434px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Button />
        <Heading />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-white left-[12px] opacity-71 rounded-[37282700px] size-[5.99px] top-[10.99px]" data-name="Text" />;
}

function Text() {
  return (
    <div className="bg-gradient-to-r from-[#00bc7d] h-[27.969px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 to-[#096] w-[67.622px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
        <p className="absolute css-ew64yg font-['Arimo:Bold',sans-serif] font-bold leading-[16px] left-[25.97px] text-[12px] text-white top-[3.88px]">Open</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[31.979px] relative shrink-0 w-[238.056px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center relative size-full">
        <Container5 />
        <Text />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[59.74px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px]">FD Ticket:</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f3f4f6] h-[27.969px] relative rounded-[4px] shrink-0 w-[77.795px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arimo:Bold',sans-serif] font-bold leading-[20px] left-[7.99px] text-[#101828] text-[14px] top-[1.99px]">270cG4c5</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[13.993px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_12.5%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66435 4.66435">
            <path d={svgPaths.p30ca5e40} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_41.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.57957 7.57957">
            <path d={svgPaths.p2b172800} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[12.5%] right-1/4 top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.91175 9.91175">
            <path d={svgPaths.pd960300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[27.969px] relative shrink-0 w-[167.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.986px] items-center relative size-full">
        <Text2 />
        <Text3 />
        <Button1 />
      </div>
    </div>
  );
}

function Container9() {
  return <div className="bg-[#d1d5dc] h-[15.99px] shrink-0 w-[0.99px]" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
        <g clipPath="url(#clip0_28_835)" id="Icon">
          <path d={svgPaths.p65158c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          <path d={svgPaths.pe0da180} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
        </g>
        <defs>
          <clipPath id="clip0_28_835">
            <rect fill="white" height="15.9896" width="15.9896" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[51.337px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px]">Created:</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.983px] relative shrink-0 w-[126.788px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]">10/13/2025 10:53PM</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-[19.983px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.986px] items-center relative size-full">
        <Icon3 />
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[27.969px] relative shrink-0 w-[410.556px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.99px] items-center relative size-full">
        <Container8 />
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[15.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.32726 9.32726">
            <path d={svgPaths.p86ab600} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.32726 9.32726">
            <path d={svgPaths.p38fed80} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33247" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 size-[38.212px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.111px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.111px] pt-[11.111px] px-[11.111px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#2a3a4e] h-[39.983px] relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[115.608px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[20px] py-[10px] relative size-full">
        <p className="css-ew64yg font-['Arimo:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-center text-white">Close Ticket</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[39.983px] relative shrink-0 w-[165.816px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-center relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[39.983px] relative shrink-0 w-[600.365px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.993px] items-center relative size-full">
        <Container7 />
        <Container11 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[39.983px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container4 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function TicketInfoBar() {
  return (
    <div className="bg-white h-[65.087px] relative shrink-0 w-full" data-name="TicketInfoBar">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[1.111px] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[1.111px] pt-[11.997px] px-[23.993px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[21.992px] left-[156.23px] top-[5px] w-[86.895px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[22px] left-[43px] text-[14px] text-center text-white top-[0.25px] translate-x-[-50%]">Add New Task</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[14.004px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[7.17%_7.17%_7.14%_7.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p1c1e1a0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[14.004px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[132px] overflow-clip pb-0 pt-[0.996px] px-[0.996px] size-[16px] top-[8px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[132px] top-[5px]">
      <Text6 />
      <Container13 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[132px] top-[5px]">
      <Group3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#354eb4] h-[32px] left-[calc(50%-52.01px)] rounded-[6px] top-[126.99px] translate-x-[-50%] w-[375px]" data-name="Button">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[23.99px] top-[23.99px]">
      <div className="absolute bg-[#eef6ff] border-2 border-[#a3caff] border-dashed h-[187px] left-[calc(50%-52.01px)] rounded-[3px] top-[23.99px] translate-x-[-50%] w-[1631px]" />
      <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[22px] left-[838.99px] text-[#354eb4] text-[14px] text-center top-[167.99px] translate-x-[-50%]">or Choose a template of Tasks for Particular Issue</p>
      <Button4 />
      <p className="absolute css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-[calc(50%-52.42px)] text-[#7a8799] text-[16px] text-center top-[65.22px] translate-x-[-50%] w-[665.718px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Add a task or scope using the button below. This will be added to this ticket, and you can add more tasks as needed. `}</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pc8ce200} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15px] relative shrink-0 w-[34.028px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[15px] min-h-px min-w-px relative text-[#6a7282] text-[10px] text-center">Activity</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[64.097px] items-center justify-center left-0 pb-[1.111px] pt-0 px-0 top-0 w-[78.889px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.111px] border-solid inset-0 pointer-events-none" />
      <Icon6 />
      <Text7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_28_847)" id="Icon">
          <path d={svgPaths.p1431c600} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_28_847">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[55.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">AI Summary</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[64.097px] items-center justify-center left-0 pb-[1.111px] pt-0 px-0 top-[64.1px] w-[78.889px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.111px] border-solid inset-0 pointer-events-none" />
      <Icon7 />
      <Text8 />
    </div>
  );
}

function Icon8() {
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

function Text9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[37.153px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#6a7282] text-[10px] text-center">Ask ARE</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.993px] h-[64.097px] items-center justify-center left-0 pb-[1.111px] pt-0 px-0 top-[128.19px] w-[78.889px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.111px] border-solid inset-0 pointer-events-none" />
      <Icon8 />
      <Text9 />
    </div>
  );
}

function RightSidebar() {
  return (
    <div className="absolute bg-white border-[#e5e7eb] border-l-[1.111px] border-solid h-[192.292px] left-[1678.99px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[23.99px] w-[80px]" data-name="RightSidebar">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Arimo:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#2a2a2a] text-[22px] top-[-2px]">Choose a scope for this Sub-Task</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#757575] text-[16px] top-[-2px] w-[495px]">Please note that this task will be add to the above ticket.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[68px] items-start left-[33px] top-[33px] w-[399px]" data-name="Container">
      <Heading1 />
      <Paragraph5 />
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
    <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio1 />
    </div>
  );
}

function Radio() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pause App Workers
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
    <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio3 />
    </div>
  );
}

function Radio2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper1 />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resume App Workers
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
    <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio5 />
    </div>
  );
}

function Radio4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper2 />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Enable Workflows
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
    <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio7 />
    </div>
  );
}

function Radio6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper3 />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Disable Workflows
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
    <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio9 />
    </div>
  );
}

function Radio8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper4 />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reprocessing (State Table)
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
    <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio11 />
    </div>
  );
}

function Radio10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper5 />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Terminate Workflow
      </p>
    </div>
  );
}

function Radio13() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio13 />
    </div>
  );
}

function Radio12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper6 />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Request Credential for Troubleshooting
      </p>
    </div>
  );
}

function Radio15() {
  return (
    <div className="bg-white relative rounded-[999px] shrink-0 size-[16px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
  );
}

function RadioWrapper7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-0 py-[3px] relative shrink-0" data-name="Radio Wrapper">
      <Radio15 />
    </div>
  );
}

function Radio14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Radio">
      <RadioWrapper7 />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trigger Workflow Manually
      </p>
    </div>
  );
}

function ScopeOptions() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16.044px] items-start left-[15px] top-[21px] w-[331px]" data-name="scope options">
      <Radio />
      <Radio2 />
      <Radio4 />
      <Radio6 />
      <Radio8 />
      <Radio10 />
      <Radio12 />
      <Radio14 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(243,245,255,0.31)] border border-[rgba(53,78,180,0.32)] border-solid h-[344px] left-[29px] rounded-[8px] top-[118px] w-[404px]">
      <ScopeOptions />
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[39px] relative rounded-[4px] shrink-0 w-[83.297px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[42px] text-[14px] text-[rgba(0,0,0,0.88)] text-center top-[8px] translate-x-[-50%]">Close</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#354eb4] h-[37px] opacity-20 relative rounded-[4px] shrink-0 w-[137.328px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[69px] text-[14px] text-center text-white top-[7px] translate-x-[-50%]">Choose Scope</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[39px] items-center left-[33px] top-[695px] w-[399px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="absolute left-[-16px] size-[24px] top-[169px]" data-name="CaretLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_17_710)" id="CaretLeft">
          <g filter="url(#filter0_d_17_710)" id="Vector">
            <path d={svgPaths.p341f2780} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.5007" id="filter0_d_17_710" width="17.9369" x="1.03198" y="1.74999">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="-2" dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_17_710" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_17_710" mode="normal" result="shape" />
          </filter>
          <clipPath id="clip0_17_710">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-white h-[782px] left-[997px] rounded-[8px] shadow-[0px_10px_14px_0px_rgba(0,0,0,0.08)] top-[-40.09px] w-[465px]" data-name="Container">
      <Container16 />
      <Frame />
      <Container17 />
      <CaretLeft />
      <button className="absolute block cursor-pointer inset-[2.05%_3.23%_96.8%_94.62%]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
          <path clipRule="evenodd" d={svgPaths.p361a4400} fill="var(--fill-0, #8993AE)" fillRule="evenodd" id="Shape" />
        </svg>
      </button>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[849.097px] relative shrink-0 w-full" data-name="Container">
      <Group2 />
      <RightSidebar />
      <Container15 />
    </div>
  );
}

export default function TicketDetailViewDesign() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Ticket Detail View Design" style={{ backgroundImage: "linear-gradient(150.69deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 50%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <TopNavigation />
      <TicketInfoBar />
      <Container12 />
    </div>
  );
}