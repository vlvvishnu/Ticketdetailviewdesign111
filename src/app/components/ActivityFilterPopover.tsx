import { useState, useRef, useEffect } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import svgPaths from '@/imports/svg-v4ewr9wbn2';

interface FilterState {
  dateRange: {
    start: string;
    end: string;
  };
  agents: string[];
  actionTypes: string[];
}

interface ActivityFilterPopoverProps {
  onApplyFilter: (filters: FilterState) => void;
  onReset: () => void;
  availableAgents: string[];
  availableActionTypes: string[];
}

export function ActivityFilterPopover({ 
  onApplyFilter, 
  onReset, 
  availableAgents, 
  availableActionTypes 
}: ActivityFilterPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    dateRange: { start: '', end: '' },
    agents: [],
    actionTypes: []
  });
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current && 
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleAgentToggle = (agent: string) => {
    setFilters(prev => ({
      ...prev,
      agents: prev.agents.includes(agent)
        ? prev.agents.filter(a => a !== agent)
        : [...prev.agents, agent]
    }));
  };

  const handleActionTypeToggle = (actionType: string) => {
    setFilters(prev => ({
      ...prev,
      actionTypes: prev.actionTypes.includes(actionType)
        ? prev.actionTypes.filter(a => a !== actionType)
        : [...prev.actionTypes, actionType]
    }));
  };

  const handleApplyFilter = () => {
    onApplyFilter(filters);
    setIsOpen(false);
  };

  const handleReset = () => {
    setFilters({
      dateRange: { start: '', end: '' },
      agents: [],
      actionTypes: []
    });
    onReset();
    setIsOpen(false);
  };

  const Icon = () => (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPaths.pc19a880} fill="#515151" />
        </g>
      </svg>
    </div>
  );

  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all ${
          isOpen 
            ? 'bg-[#e6f1ff] text-[#354fb4]' 
            : 'bg-transparent text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filters</span>
      </button>

      {/* Popover */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute right-0 top-full mt-2 w-[280px] bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        >
          <div className="p-4 space-y-2">
            {/* Date Range Section */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleSection('dateRange')}
                className="w-full flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 transition-colors"
              >
                <span className="text-sm text-gray-700 font-medium">Date Range</span>
                {expandedSection === 'dateRange' ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>
              {expandedSection === 'dateRange' && (
                <div className="mt-2 px-2 space-y-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Start Date</label>
                    <input
                      type="date"
                      value={filters.dateRange.start}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        dateRange: { ...prev.dateRange, start: e.target.value }
                      }))}
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">End Date</label>
                    <input
                      type="date"
                      value={filters.dateRange.end}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        dateRange: { ...prev.dateRange, end: e.target.value }
                      }))}
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Agent Name Section */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleSection('agents')}
                className="w-full flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 transition-colors"
              >
                <span className="text-sm text-gray-700 font-medium">Agent Name</span>
                {expandedSection === 'agents' ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>
              {expandedSection === 'agents' && (
                <div className="mt-2 px-2 space-y-2 max-h-[150px] overflow-y-auto">
                  {availableAgents.map(agent => (
                    <label key={agent} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-1 py-1">
                      <input
                        type="checkbox"
                        checked={filters.agents.includes(agent)}
                        onChange={() => handleAgentToggle(agent)}
                        className="w-4 h-4 rounded border-2 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">{agent}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Action Type Section */}
            <div className="pb-2">
              <button
                onClick={() => toggleSection('actionTypes')}
                className="w-full flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 transition-colors"
              >
                <span className="text-sm text-gray-700 font-medium">Action Type</span>
                {expandedSection === 'actionTypes' ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>
              {expandedSection === 'actionTypes' && (
                <div className="mt-2 px-2 space-y-2 max-h-[150px] overflow-y-auto">
                  {availableActionTypes.map(actionType => (
                    <label key={actionType} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-1 py-1">
                      <input
                        type="checkbox"
                        checked={filters.actionTypes.includes(actionType)}
                        onChange={() => handleActionTypeToggle(actionType)}
                        className="w-4 h-4 rounded border-2 border-gray-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">{actionType}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-end gap-2">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleApplyFilter}
              className="px-4 py-2 text-sm font-medium text-white bg-[#1677ff] rounded-md hover:bg-[#0958d9] transition-colors"
            >
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
