import svgPaths from "./svg-7lrhxprt46";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#333] text-[18px] top-[-1px]">S877 | Reprocessing (State Table)</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap">Description here</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
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

function Text() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#155dfc] text-[14px] text-center">Mark as Completed</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[93px] relative shrink-0 w-[1050px]" data-name="Container" style={{ backgroundImage: "linear-gradient(179.573deg, rgb(239, 246, 255) 3.5574%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 96.443%)" }}>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[24px] relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[431px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[215.69px] text-[#538ddc] text-[16px] text-center top-[-2px] w-[349px] whitespace-pre-wrap">Click here to use the form below to specify the data you want to download</p>
      </div>
    </div>
  );
}

function CredentialRequestsTable() {
  return (
    <div className="bg-[#eef6ff] content-stretch flex h-[132px] items-center justify-center p-px relative rounded-[3px] shrink-0 w-full" data-name="CredentialRequestsTable">
      <div aria-hidden="true" className="absolute border border-[#a3caff] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Paragraph1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1050px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[24px] px-[24px] relative rounded-[inherit] size-full">
        <CredentialRequestsTable />
      </div>
    </div>
  );
}

function CredentialManagementContent() {
  return (
    <div className="bg-white h-[696px] relative rounded-[14px] shrink-0 w-full" data-name="CredentialManagementContent">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container1 />
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <CredentialManagementContent />
    </div>
  );
}