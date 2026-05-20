import svgPaths from "./svg-gty1oqsfxl";

function Icon() {
  return (
    <div className="absolute left-[10px] size-[23.993px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.p29f2d300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M12.9963 4.99856V6.99856" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M12.9963 16.9951V18.9951" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M12.9963 10.9968V12.9968" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute left-0 rounded-[11px] size-[43px] top-[4px]" style={{ backgroundImage: "linear-gradient(138.457deg, rgb(50, 75, 174) 8.6858%, rgb(32, 60, 143) 95.63%)" }} />
      <Icon />
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[normal] left-[56px] not-italic text-[23px] text-black top-0 whitespace-nowrap">ARE Tickets</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[56px] not-italic text-[#9ca5bb] text-[16px] top-[30px] whitespace-nowrap">All tickets + ARE Chat View</p>
    </div>
  );
}