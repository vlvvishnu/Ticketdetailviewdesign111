import { WorkflowsDataSection } from './WorkflowsDataSection';
import svgPaths from '@/imports/svg-7lrhxprt46';

interface GenerateDataFileContentProps {
  subtaskTitle: string;
  subtaskId: string;
  onMarkCompleted: (subtaskId: string, isCompleted: boolean) => void;
  isCompleted: boolean;
}

export function GenerateDataFileContent({ subtaskTitle, subtaskId, onMarkCompleted, isCompleted }: GenerateDataFileContentProps) {
  return (
    <div className="bg-white h-full min-h-0 flex flex-col rounded-[14px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Header */}
      <div 
        className="flex-shrink-0 px-6 py-5 border-b border-gray-200 flex items-center justify-between"
        style={{ backgroundImage: "linear-gradient(179.573deg, rgb(239, 246, 255) 3.5574%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 96.443%)" }}
      >
        {/* Left side - Title and Description */}
        <div className="flex-1">
          <h2 className="text-lg font-bold text-[#333] mb-1">{subtaskTitle}</h2>
          <p className="text-sm text-[#4a5565]">Description here</p>
        </div>

        {/* Right side - Mark as Completed Button */}
        <div className="flex items-center">
          <button
            onClick={() => onMarkCompleted(subtaskId, true)}
            disabled={isCompleted}
            className="flex items-center gap-2 group"
          >
            {/* Icon */}
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_125_1675)">
                  <path 
                    d={svgPaths.p26b84380} 
                    stroke={isCompleted ? "#52c41a" : "#155DFC"} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.33333" 
                    className="group-hover:stroke-[#4096ff] transition-colors"
                  />
                  <path 
                    d={svgPaths.p1f2c5400} 
                    stroke={isCompleted ? "#52c41a" : "#155DFC"} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.33333"
                    className="group-hover:stroke-[#4096ff] transition-colors"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_125_1675">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Text */}
            <span 
              className="text-sm font-medium transition-colors"
              style={{ 
                fontVariationSettings: "'wdth' 100",
                color: isCompleted ? "#52c41a" : "#155DFC"
              }}
            >
              {isCompleted ? 'Completed' : 'Mark as Completed'}
            </span>
          </button>
        </div>
      </div>

      {/* Workflows Data Section - Pass subtaskId for data persistence */}
      <div className="flex-1 min-h-0">
        <WorkflowsDataSection subtaskId={subtaskId} />
      </div>
    </div>
  );
}