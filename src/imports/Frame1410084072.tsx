import svgPaths from "./svg-p78htj2sj8";

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
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[32px] items-center justify-center left-0 px-[12px] py-[10px] rounded-[6px] top-[32px] w-[554px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[14px] text-[rgba(0,0,0,0)] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Select    `}</p>
      <IconRight />
    </div>
  );
}

function InputLabel() {
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

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Input />
      <InputLabel />
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
        Brightstar Care
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
        Alpine Care Home Health
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

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[13px] top-[38px]">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group />
      <Frame1 />
    </div>
  );
}