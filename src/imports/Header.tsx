import svgPaths from "./svg-ggujkzeubm";
import imgNeosLogoOriginal2 from "figma:asset/4a2204498522fefbc40afbf0f26beef783c6ee1f.png";
import imgAvatar from "figma:asset/6a0a2f3669c898b54b0b47ba2da464b64af3354e.png";

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="🧬 item 1">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="🧬 item 2">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Authorization
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="🧬 item 4">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Admin
      </p>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0" data-name="🧬 item 5">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]" style={{ fontVariationSettings: "'wdth' 100" }}>
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
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="absolute inset-[34.46%_92.4%_37.24%_1.67%]" data-name="ArtboardStatus/Variant4">
      <div className="absolute inset-[24.54%_45.61%_-0.63%_0]" data-name="Neos-logo-original 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeosLogoOriginal2} />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative size-full" data-name="Header">
      <div className="absolute bg-gradient-to-r from-[#38475a] inset-[0_0_-1.39%_0] to-[#1c2d42] via-[#2c3c50] via-[41.55%]" data-name="Header Bg/Rectangle" />
      <div className="absolute inset-[29.17%_1.69%_31.94%_96.85%]" data-name="Avatar">
        <img alt="" className="block max-w-none size-full" height="28" src={imgAvatar} width="28" />
      </div>
      <MenuTopNavigation />
      <ArtboardStatusVariant />
    </div>
  );
}