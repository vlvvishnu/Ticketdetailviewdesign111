import svgPaths from "./svg-2veyh2zyn8";
import imgNeosLogoOriginal2 from "figma:asset/4a2204498522fefbc40afbf0f26beef783c6ee1f.png";
import imgAvatar from "figma:asset/6a0a2f3669c898b54b0b47ba2da464b64af3354e.png";

function Frame96() {
  return <div className="absolute h-[16px] left-[1183px] top-[274px] w-[88px]" />;
}

function User() {
  return (
    <div className="absolute left-[126px] size-[10px] top-px" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="User" />
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="h-[14px] relative shrink-0 w-[117px]">
      <User />
    </div>
  );
}

function Frame97() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
      <Frame117 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="absolute h-[34px] left-[1183px] top-[302px] w-[218px]">
      <Frame97 />
    </div>
  );
}

function User1() {
  return (
    <div className="absolute left-[126px] size-[10px] top-px" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="User" />
      </svg>
    </div>
  );
}

function Frame118() {
  return (
    <div className="h-[14px] relative shrink-0 w-[117px]">
      <User1 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1183px] top-[348px]">
      <Frame118 />
    </div>
  );
}

function Frame119() {
  return <div className="absolute h-[79px] left-[1159px] top-[181px] w-[679px]" />;
}

function Group41() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-gradient-to-r from-[#38475a] h-[74px] left-0 rounded-bl-[5px] rounded-br-[5px] to-[#1c2d42] top-0 w-[1492.518px]" />
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group41 />
    </div>
  );
}

function Group42() {
  return <div className="absolute contents left-0 top-0" />;
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="🧬 item 1">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="🧬 item 2">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Authorization
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="🧬 item 4">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Admin
      </p>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="🧬 item 5">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Config
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="🎰 icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="ð° icon">
          <path d={svgPaths.p9bd1700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="🧬 item 6">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Support
      </p>
      <Icon />
    </div>
  );
}

function MenuTopNavigation() {
  return (
    <div className="absolute content-stretch flex items-start left-[125px] top-1/2 translate-y-[-50%]" data-name="Menu__TopNavigation">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function ArtboardStatusVariant() {
  return (
    <div className="absolute inset-[34.46%_90.22%_37.24%_2.14%]" data-name="ArtboardStatus/Variant4">
      <div className="absolute inset-[24.54%_45.61%_-0.63%_0]" data-name="Neos-logo-original 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeosLogoOriginal2} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute h-[72px] left-0 top-px w-[1492.518px]" data-name="Header">
      <div className="absolute bg-gradient-to-r from-[#38475a] inset-[0_-28.64%_-1.39%_0] to-[#1c2d42] via-[#2c3c50] via-[41.55%]" data-name="Header Bg/Rectangle" />
      <div className="absolute inset-[29.17%_-26.47%_31.94%_124.59%]" data-name="Avatar">
        <img alt="" className="block max-w-none size-full" height="28" src={imgAvatar} width="28" />
      </div>
      <MenuTopNavigation />
      <ArtboardStatusVariant />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#f8f8f9] h-[1035px] left-0 top-[74px] w-[1920px]" data-name="Bg/overbg" />
      <Frame96 />
      <Frame115 />
      <Frame98 />
      <Frame119 />
      <Group43 />
      <Group42 />
      <Header />
    </div>
  );
}

function MaterialSymbolsBook6Outline() {
  return (
    <div className="absolute inset-[1.94%_3.96%_95.46%_94.58%]" data-name="material-symbols:book-6-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="material-symbols:book-6-outline">
          <path d={svgPaths.p38de2d80} fill="var(--fill-0, white)" fillOpacity="0.6" id="Vector" />
          <g id="Question">
            <g id="Vector_2">
              <path d={svgPaths.p182c70c0} fill="var(--fill-0, white)" fillOpacity="0.6" />
              <path d={svgPaths.p2ebee00} stroke="var(--stroke-0, white)" strokeOpacity="0.6" strokeWidth="0.25" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[113px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-[-0.02px] text-[#0a0a0a] text-[24px] top-[-0.74px] whitespace-pre">ARE-T101</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[25.2px] top-[4.25px] w-[34.043px]" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1677ff] text-[14px] whitespace-pre">Open</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[11.25px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_6.25%_6.25%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5469 10.5469">
          <path d={svgPaths.p2dd99b00} fill="var(--fill-0, #1677FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9.59px] overflow-clip size-[11.25px] top-[8.62px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#e6f4ff] h-[28.477px] relative rounded-[4px] shrink-0 w-[68.496px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#91caff] border-[1.25px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph />
        <Container4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[11.992px] h-[49px] items-center left-[8px] top-[5px] w-[617px]" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[18px] relative shrink-0 w-[131px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[normal] left-[5px] text-[#354eb4] text-[16px] top-px whitespace-pre">FD Ticket- 279046</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[21.25px] items-start left-[-0.03px] top-[0.37px] w-[127.344px]" data-name="Paragraph">
      <Frame />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.1%_16.41%_19.9%_23.59%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
            <path d={svgPaths.p9b86480} id="Vector" stroke="var(--stroke-0, #354EB4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[136.3px] size-[20px] top-px" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[169px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph1 />
      <Container7 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[21.992px] items-start left-[22.42px] top-[0.01px] w-[233.008px]" data-name="Paragraph">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.7)] whitespace-pre">Created on :10/14/2025 10:53PM</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_1.68%_6.02%_0]" data-name="Group">
      <div className="absolute inset-[24.24%_1.68%_30.21%_39.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74001 5.97347">
          <path d={svgPaths.pb1800} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_17.19%_6.02%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2316 12.3258">
          <path d={svgPaths.p18ea0700} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[13.115px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[13.115px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[0.23px] overflow-clip pb-0 pl-[0.126px] pr-[0.105px] pt-[0.943px] size-[15px] top-[4.01px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[22px] relative shrink-0 w-[268px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#dadada] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph2 />
      <Container9 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="absolute content-stretch flex gap-[11px] items-center left-[-0.02px] top-[-2.39px]">
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[18.271px] left-[1247px] top-[18.61px] w-[440px]" data-name="Container">
      <Frame120 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73.594px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-pre">Close Ticket</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#354eb4] content-stretch flex h-[26.57px] items-center justify-center left-[1707.41px] rounded-[6px] top-[13.63px] w-[97.578px]" data-name="Button">
      <Paragraph3 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[1247px] top-[13.63px]">
      <Container5 />
      <Button />
    </div>
  );
}

function Paragraph4() {
  return <div className="absolute h-[20px] left-[25.2px] top-[4.25px] w-[34.043px]" data-name="Paragraph" />;
}

function Group51() {
  return (
    <div className="absolute contents left-[9.52px] top-[4.25px]">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[25.2px] text-[#1677ff] text-[14px] top-[4.25px] whitespace-pre">Ticket History</p>
      <div className="absolute left-[9.52px] size-[11px] top-[8.74px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p1f48dc00} fill="var(--fill-0, #1677FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[28.477px] left-[213.48px] rounded-[4px] top-[15.26px] w-[68.496px]" data-name="Container">
      <Paragraph4 />
      <Group51 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents left-[8px] top-[5px]">
      <Container2 />
      <Group48 />
      <Container11 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[70px] left-[38px] rounded-[9px] top-[10px] w-[1465px]" data-name="Container">
      <Group49 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white border-[#e6e6e6] border-[0px_0px_1.25px] border-solid h-[80px] left-0 top-0 w-[1898px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents left-[-1px] top-0">
      <Container />
    </div>
  );
}

function TicketsView() {
  return (
    <div className="absolute bg-white border-[#dedede] border-[0px_1px_1px] border-solid h-[80px] right-[33px] rounded-[5px] shadow-[0px_12px_10px_0px_rgba(0,0,0,0.01)] top-[103px] w-[1858px]" data-name="TicketsView">
      <Group63 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents right-[33px] top-[103px]">
      <TicketsView />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents right-[33px] top-[103px]">
      <Group45 />
    </div>
  );
}

function User2() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-[12px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4_1842)" id="User">
          <path d={svgPaths.p313012b0} fill="var(--fill-0, #2F61A0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_1842">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group53() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] ml-[16.2px] mt-0 relative text-[#2f61a0] text-[16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ganesh
      </p>
      <User2 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-[rgba(47,97,160,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Credential Approved
      </p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        by
      </p>
      <Group53 />
    </div>
  );
}

function TagColorful() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fff0f6] content-stretch flex h-[19px] items-center justify-center ml-[64px] mt-px px-[8px] py-[5px] relative rounded-[4px] w-[93px]" data-name="Tag__Colorful">
      <div aria-hidden="true" className="absolute border border-[#ffadd2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#eb2f96] text-[12px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 Records
      </p>
    </div>
  );
}

function Group65() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] ml-0 mt-0 relative text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Involving
      </p>
      <TagColorful />
    </div>
  );
}

function Frame124() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[58px] top-0 w-[551px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[16px] text-[rgba(7,7,7,0.8)] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`02/23/2024  01:32:58`}</p>
      <Frame108 />
      <Group65 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents left-[33px] top-0">
      <div className="absolute left-[33px] size-[14px] top-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #A4A9B1)" id="Ellipse 732" r="7" />
        </svg>
      </div>
      <Frame124 />
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute contents left-[33px] top-0">
      <Group56 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="h-[67px] relative shrink-0 w-[576px]">
      <Group62 />
    </div>
  );
}

function User3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-[12px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4_1842)" id="User">
          <path d={svgPaths.p313012b0} fill="var(--fill-0, #2F61A0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_1842">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group54() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] ml-[16.2px] mt-0 relative text-[#2f61a0] text-[16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ganesh
      </p>
      <User3 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-[rgba(47,97,160,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Credential Approved
      </p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        by
      </p>
      <Group54 />
    </div>
  );
}

function TagColorful1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fff0f6] content-stretch flex h-[19px] items-center justify-center ml-[64px] mt-px px-[8px] py-[5px] relative rounded-[4px] w-[93px]" data-name="Tag__Colorful">
      <div aria-hidden="true" className="absolute border border-[#ffadd2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#eb2f96] text-[12px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 Records
      </p>
    </div>
  );
}

function Group66() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] ml-0 mt-0 relative text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Involving
      </p>
      <TagColorful1 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[58px] top-[6px] w-[551px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[16px] text-[rgba(7,7,7,0.8)] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`02/23/2024  01:32:58`}</p>
      <Frame109 />
      <Group66 />
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents left-[33px] top-[6px]">
      <div className="absolute left-[33px] size-[14px] top-[8.01px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #A4A9B1)" id="Ellipse 732" r="7" />
        </svg>
      </div>
      <Frame132 />
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents left-[33px] top-[-83px]">
      <div className="absolute flex h-[83px] items-center justify-center left-[40px] top-[-83px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[83px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
                <line id="Line 544" stroke="var(--stroke-0, black)" strokeOpacity="0.22" x2="83" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group57 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="h-[75px] relative shrink-0 w-[576px]">
      <Group61 />
    </div>
  );
}

function User4() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-[12px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4_1842)" id="User">
          <path d={svgPaths.p313012b0} fill="var(--fill-0, #2F61A0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_1842">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group55() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] ml-[16.2px] mt-0 relative text-[#2f61a0] text-[16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vishnu Venkatesan
      </p>
      <User4 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-[rgba(47,97,160,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Requested Credential
      </p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        by
      </p>
      <Group55 />
    </div>
  );
}

function TagColorful2() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fff0f6] content-stretch flex h-[19px] items-center justify-center ml-[64px] mt-px px-[8px] py-[5px] relative rounded-[4px] w-[93px]" data-name="Tag__Colorful">
      <div aria-hidden="true" className="absolute border border-[#ffadd2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#eb2f96] text-[12px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 Records
      </p>
    </div>
  );
}

function Group67() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] ml-0 mt-0 relative text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Involving
      </p>
      <TagColorful2 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[58px] top-0 w-[573px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[16px] text-[rgba(7,7,7,0.8)] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`02/23/2024  01:32:58`}</p>
      <Frame110 />
      <Group67 />
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents left-[33px] top-0">
      <div className="absolute left-[33px] size-[14px] top-[2.01px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #A4A9B1)" id="Ellipse 732" r="7" />
        </svg>
      </div>
      <Frame133 />
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents left-[33px] top-[-89px]">
      <div className="absolute flex h-[83px] items-center justify-center left-[40px] top-[-89px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[83px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
                <line id="Line 544" stroke="var(--stroke-0, black)" strokeOpacity="0.22" x2="83" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group58 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="h-[64px] relative shrink-0 w-[598px]">
      <Group60 />
    </div>
  );
}

function User5() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-[12px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4_1842)" id="User">
          <path d={svgPaths.p313012b0} fill="var(--fill-0, #2F61A0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_1842">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group69() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] ml-[16.2px] mt-0 relative text-[#2f61a0] text-[16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vishnu Venkatesan
      </p>
      <User5 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-[rgba(47,97,160,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pause FB Worker
      </p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        by
      </p>
      <Group69 />
    </div>
  );
}

function TagColorful3() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fff0f6] content-stretch flex h-[19px] items-center justify-center ml-[64px] mt-px px-[8px] py-[5px] relative rounded-[4px] w-[93px]" data-name="Tag__Colorful">
      <div aria-hidden="true" className="absolute border border-[#ffadd2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#eb2f96] text-[12px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 Records
      </p>
    </div>
  );
}

function Group70() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] ml-0 mt-0 relative text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Involving
      </p>
      <TagColorful3 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[58px] top-0 w-[573px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[16px] text-[rgba(7,7,7,0.8)] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`02/23/2024  01:32:58`}</p>
      <Frame111 />
      <Group70 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents left-[33px] top-0">
      <div className="absolute left-[33px] size-[14px] top-[2.01px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #A4A9B1)" id="Ellipse 732" r="7" />
        </svg>
      </div>
      <Frame134 />
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents left-[33px] top-[-89px]">
      <div className="absolute flex h-[83px] items-center justify-center left-[40px] top-[-89px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[83px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
                <line id="Line 544" stroke="var(--stroke-0, black)" strokeOpacity="0.22" x2="83" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group68 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="h-[69px] relative shrink-0 w-[598px]">
      <Group59 />
    </div>
  );
}

function User6() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-[12px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4_1842)" id="User">
          <path d={svgPaths.p313012b0} fill="var(--fill-0, #2F61A0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_1842">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] ml-[16.2px] mt-0 relative text-[#2f61a0] text-[16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vishnu Venkatesan
      </p>
      <User6 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-[rgba(47,97,160,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Terminate the Workflow
      </p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        by
      </p>
      <Group52 />
    </div>
  );
}

function TagColorful4() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fff0f6] content-stretch flex h-[19px] items-center justify-center ml-[64px] mt-px px-[8px] py-[5px] relative rounded-[4px] w-[93px]" data-name="Tag__Colorful">
      <div aria-hidden="true" className="absolute border border-[#ffadd2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#eb2f96] text-[12px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        6 Records
      </p>
    </div>
  );
}

function Group73() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] ml-0 mt-0 relative text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Involving
      </p>
      <TagColorful4 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[58px] top-0 w-[573px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[16px] text-[rgba(7,7,7,0.8)] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`02/23/2024  01:22:00 `}</p>
      <Frame112 />
      <Group73 />
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents left-[33px] top-0">
      <div className="absolute left-[33px] size-[14px] top-[2.02px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #A4A9B1)" id="Ellipse 732" r="7" />
        </svg>
      </div>
      <Frame135 />
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute contents left-[33px] top-[-89px]">
      <div className="absolute flex h-[83px] items-center justify-center left-[40px] top-[-89px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[83px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
                <line id="Line 544" stroke="var(--stroke-0, black)" strokeOpacity="0.22" x2="83" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group72 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="h-[69px] relative shrink-0 w-[598px]">
      <Group71 />
    </div>
  );
}

function User7() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[3px] relative size-[12px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4_1842)" id="User">
          <path d={svgPaths.p313012b0} fill="var(--fill-0, #2F61A0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_1842">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group76() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] ml-[16.2px] mt-0 relative text-[#2f61a0] text-[16px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        System
      </p>
      <User7 />
    </div>
  );
}

function Frame114() {
  return <div className="h-[20px] shrink-0 w-[278px]" />;
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-[219px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-[rgba(47,97,160,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ticket Created
      </p>
      <p className="font-['Roboto:Italic',sans-serif] font-normal italic leading-[20px] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        by
      </p>
      <Group76 />
      <Frame114 />
    </div>
  );
}

function Group77() {
  return (
    <div className="font-['Roboto:Italic',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid italic leading-[20px] place-items-start relative shrink-0 text-[14px] whitespace-pre">
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[rgba(0,0,0,0.88)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        for
      </p>
      <p className="[grid-area:1_/_1] ml-[28px] mt-0 relative text-[#2f61a0]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Record Failued due to unhandled pop-ups
      </p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[58px] top-[6px] w-[573px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[16px] text-[rgba(7,7,7,0.8)] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`02/23/2024  00:00:00 `}</p>
      <Frame113 />
      <Group77 />
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents left-[33px] top-[6px]">
      <div className="absolute left-[33px] size-[14px] top-[8.01px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #A4A9B1)" id="Ellipse 732" r="7" />
        </svg>
      </div>
      <Frame136 />
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents left-[33px] top-[-83px]">
      <div className="absolute flex h-[83px] items-center justify-center left-[40px] top-[-83px] w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-0 relative w-[83px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 1">
                <line id="Line 544" stroke="var(--stroke-0, black)" strokeOpacity="0.22" x2="83" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group75 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="h-[50px] relative shrink-0 w-[598px]">
      <Group74 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[43px] h-[636px] items-start left-0 top-[79px] w-[405px]">
      <Frame126 />
      <Frame127 />
      <Frame128 />
      <Frame129 />
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents left-[-1px] top-[79px]">
      <Frame125 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="absolute bg-white border-[#dedede] border-[0px_1px_1px] border-solid h-[846px] left-[1470px] rounded-[5px] shadow-[0px_12px_10px_0px_rgba(0,0,0,0.01)] top-[201px] w-[435px]">
      <Group64 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute border-[#e8e8e8] border-[0px_1px_0px_0px] border-solid font-['Arimo:Regular',sans-serif] font-normal h-[754px] leading-[24px] left-[50px] text-[16px] top-[224px] w-[258px] whitespace-pre-wrap">
      <p className="absolute left-[13px] text-[#354eb4] top-[36px] w-[214px]">ARE-S878 Disable Workflow</p>
      <p className="absolute left-[13px] text-[#3f4044] top-[79px] w-[214px]">ARE-S877 Disable Workflow</p>
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

function ComponentsTableCellCheckbox() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[40px] items-center justify-center px-[8px] py-[16px] relative shrink-0" data-name="Components/Table-Cell/Checkbox">
      <CheckboxInput />
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[44px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <ComponentsTableCellCheckbox />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f8fbff] h-[70px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[16px] relative size-full">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput1() {
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

function ComponentsTableCellCheckbox1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[40px] items-center justify-center px-[8px] py-[16px] relative shrink-0" data-name="Components/Table-Cell/Checkbox">
      <CheckboxInput1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <ComponentsTableCellCheckbox1 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput2() {
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

function ComponentsTableCellCheckbox2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[40px] items-center justify-center px-[8px] py-[16px] relative shrink-0" data-name="Components/Table-Cell/Checkbox">
      <CheckboxInput2 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <ComponentsTableCellCheckbox2 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput3() {
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

function ComponentsTableCellCheckbox3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[40px] items-center justify-center px-[8px] py-[16px] relative shrink-0" data-name="Components/Table-Cell/Checkbox">
      <CheckboxInput3 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <ComponentsTableCellCheckbox3 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput4() {
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

function ComponentsTableCellCheckbox4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[40px] items-center justify-center px-[8px] py-[16px] relative shrink-0" data-name="Components/Table-Cell/Checkbox">
      <CheckboxInput4 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <ComponentsTableCellCheckbox4 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput5() {
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

function ComponentsTableCellCheckbox5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[40px] items-center justify-center px-[8px] py-[16px] relative shrink-0" data-name="Components/Table-Cell/Checkbox">
      <CheckboxInput5 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <ComponentsTableCellCheckbox5 />
        </div>
      </div>
    </div>
  );
}

function CheckboxInput6() {
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

function ComponentsTableCellCheckbox6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[40px] items-center justify-center px-[8px] py-[16px] relative shrink-0" data-name="Components/Table-Cell/Checkbox">
      <CheckboxInput6 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <ComponentsTableCellCheckbox6 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[158px] items-end relative shrink-0 w-[48px]">
      <Frame4 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
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

function Group9() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group17 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group9 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group1 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group25 />
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group26 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Tenant</p>
      </div>
    </div>
  );
}

function Frame2() {
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

function Frame5() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame3 />
        <Frame2 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Brightstar Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">Alpine Care Home Health</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">Buckeye Home Health Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Brightstar Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">Alpine Care Home Health</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">Buckeye Home Health Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[220px]">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame12 />
      <Frame13 />
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

function Group10() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group18 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group10 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group2 />
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

function Filter1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group27 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter1 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Workflow</p>
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
    <div className="bg-white content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative shrink-0 w-[247px]">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Review Choice Demonstration</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Review Choice Demonstration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Review Choice Demonstration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">{`Cash Posting `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">{`Cash Posting `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">{`Cash Posting `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[247px]">
      <Frame14 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Group19() {
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
      <Group19 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group11 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group3 />
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

function Filter2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group29 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter2 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Workflow Variant</p>
      </div>
    </div>
  );
}

function Frame33() {
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

function Frame31() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame32 />
        <Frame33 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Homehealth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Homehealth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Homehealth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Homehealth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Homehealth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Homehealth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[160px]">
      <Frame31 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
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

function Group12() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group20 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group12 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group4 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group32 />
    </div>
  );
}

function Filter3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group31 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter3 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Variant Version</p>
      </div>
    </div>
  );
}

function Frame42() {
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

function Frame40() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame41 />
        <Frame42 />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">V1.34</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">V1.34</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">V1.34</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">V1.34</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">V1.34</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">V1.34</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[138px]">
      <Frame40 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Group21() {
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
      <Group21 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group13 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group5 />
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

function Filter4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group33 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter4 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Schedule</p>
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
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">12/24/2024 06:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">12/24/2024 06:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">12/24/2024 06:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">12/24/2024 06:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">12/24/2024 06:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">12/24/2024 06:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[145px]">
      <Frame49 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
    </div>
  );
}

function Group22() {
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
      <Group22 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group14 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group6 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group36 />
    </div>
  );
}

function Filter5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group35 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter5 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Input Tag</p>
      </div>
    </div>
  );
}

function Frame60() {
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

function Frame58() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame59 />
        <Frame60 />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Default</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Example1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Branch1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Branch1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Branch1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Example1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-[103px]">
      <Frame58 />
      <Frame61 />
      <Frame62 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[770px]">
      <Frame10 />
      <Frame11 />
      <Frame101 />
      <Frame30 />
      <Frame102 />
      <Frame103 />
      <Frame104 />
    </div>
  );
}

function Group23() {
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

function Group15() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group23 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group15 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group7 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[16.65%_21.88%_14.6%_28.13%]">
      <Group38 />
    </div>
  );
}

function Filter6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-[0_-3.13%_0_3.13%] rounded-[26px]" />
      <Group37 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter6 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Status</p>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#cad2d8] border-solid h-[22px] ml-0 mt-0 rounded-[4px] w-[96px]" />
      <div className="[grid-area:1_/_1] h-[3px] ml-[80.66px] mt-[10px] relative w-[6.372px]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.37242 4">
            <path d={svgPaths.p3234200} id="Vector" stroke="var(--stroke-0, #354EB4)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center ml-[9.5px] mt-[11px] opacity-60 relative text-[#354eb4] text-[13px] tracking-[0.39px] translate-y-[-50%] w-[16.993px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre-wrap">All</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame68 />
        <Group46 />
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Enabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Enabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Enabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Enabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Enabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #43A03B)" id="Ellipse 731" r="4" />
            </svg>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#263238] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[16px] whitespace-pre">Enabled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[119px]">
      <Frame67 />
      <Frame69 />
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <Frame73 />
      <Frame74 />
    </div>
  );
}

function Group24() {
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
      <Group24 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group16 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute bottom-[14.6%] contents left-1/4 right-1/4 top-[16.65%]">
      <Group8 />
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

function Filter7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Filter">
      <div className="absolute bg-[#c9cdd5] inset-0 rounded-[26px]" />
      <Group39 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <Filter7 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Message</p>
      </div>
    </div>
  );
}

function Frame77() {
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

function Frame75() {
  return (
    <div className="bg-[#f8fbff] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Frame76 />
        <Frame77 />
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#263238] text-[14px] w-[144px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">Workflow executed successfully</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#263238] text-[14px] w-[150px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">Error: Timeout during external call</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#263238] text-[14px] w-[150px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">Error: Timeout during external call</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#263238] text-[14px] w-[150px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">Error: Timeout during external call</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#263238] text-[14px] w-[150px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">Error: Timeout during external call</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ebedf8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#263238] text-[14px] w-[150px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">Error: Timeout during external call</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[131px]">
      <Frame75 />
      <Frame78 />
      <Frame79 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[3px] items-start relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre">Input</p>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white border border-[#cad2d8] border-solid h-[22px] ml-0 mt-0 opacity-20 rounded-[4px] w-[35px]" />
      <div className="[grid-area:1_/_1] h-[3px] ml-[112.67px] mt-[10px] relative w-[6.372px]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.37242 4">
            <path d={svgPaths.p3234200} id="Vector" stroke="var(--stroke-0, #354EB4)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center ml-[9.5px] mt-[11px] opacity-0 relative text-[#354eb4] text-[13px] tracking-[0.39px] translate-y-[-50%] w-[16.993px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px] whitespace-pre-wrap">All</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[#f8fbff] content-stretch flex flex-col gap-[8px] items-start p-[12px] relative shrink-0 w-[55px]">
      <div aria-hidden="true" className="absolute border border-[rgba(234,237,242,0.3)] border-solid inset-0 pointer-events-none" />
      <Frame85 />
      <Group47 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="h-[44px] relative shrink-0 w-[55px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 44">
        <g id="Frame 1410081732">
          <mask fill="white" id="path-1-inside-1_2_655">
            <path d="M0 0H55V44H0V0Z" />
          </mask>
          <path d="M0 0H55V44H0V0Z" fill="var(--fill-0, white)" />
          <path d="M55 44V43H0V44V45H55V44Z" fill="var(--stroke-0, #EBEDF8)" mask="url(#path-1-inside-1_2_655)" />
          <g id="eye">
            <path d={svgPaths.p55a85f0} fill="var(--fill-0, #1677FF)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame87() {
  return (
    <div className="h-[44px] relative shrink-0 w-[55px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 44">
        <g id="Frame 1410081732">
          <mask fill="white" id="path-1-inside-1_2_655">
            <path d="M0 0H55V44H0V0Z" />
          </mask>
          <path d="M0 0H55V44H0V0Z" fill="var(--fill-0, white)" />
          <path d="M55 44V43H0V44V45H55V44Z" fill="var(--stroke-0, #EBEDF8)" mask="url(#path-1-inside-1_2_655)" />
          <g id="eye">
            <path d={svgPaths.p55a85f0} fill="var(--fill-0, #1677FF)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="h-[44px] relative shrink-0 w-[55px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 44">
        <g id="Frame 1410081732">
          <mask fill="white" id="path-1-inside-1_2_655">
            <path d="M0 0H55V44H0V0Z" />
          </mask>
          <path d="M0 0H55V44H0V0Z" fill="var(--fill-0, white)" />
          <path d="M55 44V43H0V44V45H55V44Z" fill="var(--stroke-0, #EBEDF8)" mask="url(#path-1-inside-1_2_655)" />
          <g id="eye">
            <path d={svgPaths.p55a85f0} fill="var(--fill-0, #1677FF)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="h-[44px] relative shrink-0 w-[55px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 44">
        <g id="Frame 1410081732">
          <mask fill="white" id="path-1-inside-1_2_655">
            <path d="M0 0H55V44H0V0Z" />
          </mask>
          <path d="M0 0H55V44H0V0Z" fill="var(--fill-0, white)" />
          <path d="M55 44V43H0V44V45H55V44Z" fill="var(--stroke-0, #EBEDF8)" mask="url(#path-1-inside-1_2_655)" />
          <g id="eye">
            <path d={svgPaths.p55a85f0} fill="var(--fill-0, #1677FF)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div className="h-[44px] relative shrink-0 w-[55px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 44">
        <g id="Frame 1410081732">
          <mask fill="white" id="path-1-inside-1_2_655">
            <path d="M0 0H55V44H0V0Z" />
          </mask>
          <path d="M0 0H55V44H0V0Z" fill="var(--fill-0, white)" />
          <path d="M55 44V43H0V44V45H55V44Z" fill="var(--stroke-0, #EBEDF8)" mask="url(#path-1-inside-1_2_655)" />
          <g id="eye">
            <path d={svgPaths.p55a85f0} fill="var(--fill-0, #1677FF)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="h-[44px] relative shrink-0 w-[55px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 44">
        <g id="Frame 1410081732">
          <mask fill="white" id="path-1-inside-1_2_655">
            <path d="M0 0H55V44H0V0Z" />
          </mask>
          <path d="M0 0H55V44H0V0Z" fill="var(--fill-0, white)" />
          <path d="M55 44V43H0V44V45H55V44Z" fill="var(--stroke-0, #EBEDF8)" mask="url(#path-1-inside-1_2_655)" />
          <g id="eye">
            <path d={svgPaths.p55a85f0} fill="var(--fill-0, #1677FF)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[55px]">
      <Frame84 />
      <Frame86 />
      <Frame87 />
      <Frame88 />
      <Frame89 />
      <Frame90 />
      <Frame91 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame99 />
      <Frame100 />
      <Frame105 />
    </div>
  );
}

function EnableDisableTable() {
  return (
    <div className="absolute content-stretch flex h-[334px] items-start left-[0.5px] top-0 w-[1075px]" data-name="Enable/Disable Table">
      <div aria-hidden="true" className="absolute border border-[#e1dfdf] border-solid inset-0 pointer-events-none" />
      <Frame123 />
      <Frame122 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="absolute h-[334px] left-[calc(50%-76px)] rounded-[3px] top-[295px] translate-x-[-50%] w-[1076px]">
      <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
      <EnableDisableTable />
    </div>
  );
}

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

function Frame92() {
  return (
    <div className="bg-[#d5121d] content-stretch flex gap-[8px] items-center justify-center opacity-20 px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[113px]">
      <Stop />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white tracking-[0.2px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Disable
      </p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <Frame92 />
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

function Frame94() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center opacity-20 px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[184px]">
      <div aria-hidden="true" className="absolute border border-[#e84e0f] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <MinusSquare />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#e84e0f] text-[16px] tracking-[0.2px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Remove from List
      </p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[98px]">
      <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#354eb4] text-[16px] tracking-[0.2px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Modify `}</p>
    </div>
  );
}

function Reload() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Reload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_4_1830)" id="Reload">
          <path d={svgPaths.p1ab33a00} fill="var(--fill-0, #354EB4)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_1830">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0 w-[42px]">
      <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Reload />
    </div>
  );
}

function Frame107() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative">
        <Frame106 />
        <div className="flex h-[34px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[34px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 1">
                  <line id="Line 541" stroke="var(--stroke-0, #D0D0D0)" x2="34" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame94 />
        <Frame93 />
        <Frame95 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[59px] items-center justify-between left-[347px] top-[230px] w-[1070px]" data-name="Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[27px] relative shrink-0 text-[#354eb4] text-[18px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        ARE-S878 | Disable Workflow
      </p>
      <Frame107 />
    </div>
  );
}

export default function Newwww() {
  return (
    <div className="bg-white relative size-full" data-name="newwww">
      <Group44 />
      <div className="absolute bg-white border-[#dedede] border-[0px_1px_1px] border-solid h-[846px] left-[30px] rounded-[5px] shadow-[0px_12px_10px_0px_rgba(0,0,0,0.01)] top-[201px] w-[1427px]" />
      <div className="absolute inset-[6.85%_1.67%_93.15%_1.51%]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1859 1">
            <line id="Line 320" stroke="var(--stroke-0, white)" strokeOpacity="0.1" x2="1859" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <MaterialSymbolsBook6Outline />
      <Group50 />
      <Frame121 />
      <Frame1 />
      <Frame116 />
      <Container12 />
    </div>
  );
}