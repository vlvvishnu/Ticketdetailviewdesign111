import svgPaths from "./svg-junh23qdto";

function Text() {
  return (
    <div className="absolute h-[21.992px] left-[156.23px] top-[5px] w-[86.895px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Arimo:Regular',sans-serif] font-normal leading-[22px] left-[43px] text-[14px] text-center text-white top-[0.25px] translate-x-[-50%] whitespace-nowrap">Add New Task</p>
    </div>
  );
}

function Icon() {
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

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[14.004px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[132px] overflow-clip pb-0 pt-[0.996px] px-[0.996px] size-[16px] top-[8px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[132px] top-[5px]">
      <Text />
      <Container />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[132px] top-[5px]">
      <Group1 />
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#354eb4] relative rounded-[6px] size-full" data-name="Button">
      <Group />
    </div>
  );
}