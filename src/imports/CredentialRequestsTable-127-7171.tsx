function Paragraph() {
  return (
    <div className="h-[48px] relative shrink-0 w-[431px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[215.69px] text-[#538ddc] text-[16px] text-center top-[-2px] w-[349px] whitespace-pre-wrap">Click here to use the form below to specify the data you want to download</p>
      </div>
    </div>
  );
}

export default function CredentialRequestsTable() {
  return (
    <div className="bg-[#eef6ff] content-stretch flex items-center justify-center p-px relative rounded-[3px] size-full" data-name="CredentialRequestsTable">
      <div aria-hidden="true" className="absolute border border-[#a3caff] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Paragraph />
    </div>
  );
}