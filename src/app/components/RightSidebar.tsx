import { MessageSquare, Sparkles, Clock, Activity, AlertTriangle } from 'lucide-react';

interface RightSidebarProps {
  activePanel: string | null;
  onPanelChange: (panel: string | null) => void;
}

export function RightSidebar({ activePanel, onPanelChange }: RightSidebarProps) {
  const panels = [
    { id: 'activity', label: 'Activity', icon: Clock, color: 'text-purple-600', bgColor: 'bg-purple-50', count: 0 },
    { id: 'ai-summary', label: 'AI Summary', icon: Sparkles, color: 'text-purple-600', bgColor: 'bg-purple-50', count: 0 },
    { id: 'ask-are', label: 'Ask ARE', icon: MessageSquare, color: 'text-blue-600', bgColor: 'bg-blue-50', count: 0 },
    { id: 'monitor', label: 'Monitor', icon: Activity, color: 'text-green-600', bgColor: 'bg-green-50', count: 0 },
    { id: 'affected-transaction', label: 'Affected Transaction', icon: AlertTriangle, color: 'text-orange-600', bgColor: 'bg-orange-50', count: 10 }
  ];

  const handlePanelClick = (panelId: string) => {
    if (activePanel === panelId) {
      onPanelChange(null);
    } else {
      onPanelChange(panelId);
    }
  };

  return (
    <div className={`bg-white border border-gray-200 shadow-sm w-[80px] overflow-hidden ${activePanel ? 'rounded-r-xl' : 'rounded-xl'}`} style={{ height: `${64.1 * panels.length}px` }}>
      <div className="relative size-full">
        {panels.map((panel, index) => {
          const Icon = panel.icon;
          const isActive = activePanel === panel.id;
          
          // Add rounded corners to first and last buttons
          const isFirst = index === 0;
          const isLast = index === panels.length - 1;
          const roundedClass = activePanel 
            ? (isFirst ? 'rounded-tr-xl' : isLast ? 'rounded-br-xl' : '')
            : (isFirst ? 'rounded-t-xl' : isLast ? 'rounded-b-xl' : '');
          
          return (
            <button
              key={panel.id}
              onClick={() => handlePanelClick(panel.id)}
              className={`absolute content-stretch flex flex-col gap-[3.993px] h-[64.097px] items-center justify-center border-b border-[#f3f4f6] pb-[1.111px] pt-0 px-0 w-[78.889px] transition-colors bg-white hover:bg-gray-50 ${roundedClass} ${
                isActive ? 'bg-gray-50' : ''
              }`}
              style={{
                left: '1.11px',
                top: `${index * 64.1}px`
              }}
            >
              <div className="relative">
                <Icon className={`size-5 ${isActive ? 'text-blue-600' : 'text-[#4A5565]'}`} />
                {panel.count > 0 && (
                  <div className="absolute -top-1 -right-2 bg-red-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {panel.count}
                  </div>
                )}
              </div>
              <p className={`font-['Arimo',sans-serif] font-normal leading-[15px] text-[10px] text-center ${panel.id === 'affected-transaction' ? 'whitespace-normal px-1' : 'whitespace-nowrap'} ${isActive ? 'text-blue-600' : 'text-[#6a7282]'}`}>
                {panel.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}