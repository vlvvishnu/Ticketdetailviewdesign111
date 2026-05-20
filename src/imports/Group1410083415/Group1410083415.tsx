import svgPaths from "./svg-2q0skpqlk9";

function Group() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Rectangle" />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <div className="absolute inset-1/4" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.2587">
          <path d={svgPaths.p2dd3b9c0} fill="url(#paint0_linear_250_517)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_250_517" x1="0.095621" x2="24" y1="12.1293" y2="12.1293">
              <stop stopColor="#E8500F" />
              <stop offset="0.489583" stopColor="#F8C100" />
              <stop offset="1" stopColor="#0B90C8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}