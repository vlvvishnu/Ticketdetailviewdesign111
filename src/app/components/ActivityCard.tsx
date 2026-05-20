import { Circle, CheckCircle2, MessageSquare, GitCommit, User } from 'lucide-react';
import { useState, useMemo } from 'react';
import { ActivityFilterPopover } from './ActivityFilterPopover';

export interface ActivityEvent {
  id: number;
  timestamp: string;
  action: string;
  user: string;
  type: 'system' | 'user';
  badge?: string;
  badgeColor?: string;
  icon?: 'check' | 'message' | 'commit' | 'user';
}

interface ActivityCardProps {
  events: ActivityEvent[];
  onRecordClick?: (event: ActivityEvent) => void;
  expandedActivity?: ActivityEvent | null;
  onClose?: () => void;
}

interface FilterState {
  dateRange: {
    start: string;
    end: string;
  };
  agents: string[];
  actionTypes: string[];
}

export function ActivityCard({ events: propEvents, onRecordClick, expandedActivity, onClose }: ActivityCardProps) {
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    dateRange: { start: '', end: '' },
    agents: [],
    actionTypes: []
  });

  const defaultEvents: ActivityEvent[] = [
    {
      id: 1,
      timestamp: '02/23/2024 01:32:58',
      action: 'approved credentials',
      user: 'K Ganesh',
      type: 'user',
      badge: '8 Records',
      badgeColor: 'bg-gray-100 text-gray-700 border-gray-200',
      icon: 'check'
    },
    {
      id: 2,
      timestamp: '02/23/2024 01:32:58',
      action: 'approved credentials',
      user: 'K Ganesh',
      type: 'user',
      badge: '8 Records',
      badgeColor: 'bg-gray-100 text-gray-700 border-gray-200',
      icon: 'check'
    },
    {
      id: 3,
      timestamp: '02/23/2024 01:32:58',
      action: 'requested credential',
      user: 'K Vishnu Venkatesan',
      type: 'user',
      badge: '8 Records',
      badgeColor: 'bg-gray-100 text-gray-700 border-gray-200',
      icon: 'message'
    },
    {
      id: 4,
      timestamp: '02/23/2024 01:32:58',
      action: 'paused worker',
      user: 'K Vishnu Venkatesan',
      type: 'user',
      badge: 'Worker Paused',
      badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
      icon: 'commit'
    },
    {
      id: 5,
      timestamp: '02/23/2024 01:32:58',
      action: 'stopped workflow',
      user: 'K Vishnu Venkatesan',
      type: 'user',
      badge: 'Workflow Stopped',
      badgeColor: 'bg-red-100 text-red-700 border-red-200',
      icon: 'commit'
    },
    {
      id: 6,
      timestamp: '02/23/2024 01:32:58',
      action: 'failed to process records',
      user: 'System',
      type: 'system',
      badge: 'Unhandled Exception',
      badgeColor: 'bg-red-100 text-red-700 border-red-200',
      icon: 'user'
    }
  ];

  const events = propEvents || defaultEvents;

  // Extract unique agents and action types
  const availableAgents = useMemo(() => {
    return Array.from(new Set(events.map(e => e.user))).sort();
  }, [events]);

  const availableActionTypes = useMemo(() => {
    return Array.from(new Set(events.map(e => e.action))).sort();
  }, [events]);

  // Filter events based on active filters
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Date range filter
      if (activeFilters.dateRange.start || activeFilters.dateRange.end) {
        const eventDate = new Date(event.timestamp);
        const startDate = activeFilters.dateRange.start ? new Date(activeFilters.dateRange.start) : null;
        const endDate = activeFilters.dateRange.end ? new Date(activeFilters.dateRange.end) : null;

        if (startDate && eventDate < startDate) return false;
        if (endDate && eventDate > endDate) return false;
      }

      // Agent filter
      if (activeFilters.agents.length > 0 && !activeFilters.agents.includes(event.user)) {
        return false;
      }

      // Action type filter
      if (activeFilters.actionTypes.length > 0 && !activeFilters.actionTypes.includes(event.action)) {
        return false;
      }

      return true;
    });
  }, [events, activeFilters]);

  const handleApplyFilter = (filters: FilterState) => {
    setActiveFilters(filters);
  };

  const handleResetFilter = () => {
    setActiveFilters({
      dateRange: { start: '', end: '' },
      agents: [],
      actionTypes: []
    });
  };

  // Check if any filters are active
  const hasActiveFilters = activeFilters.agents.length > 0 || 
                          activeFilters.actionTypes.length > 0 || 
                          activeFilters.dateRange.start !== '' || 
                          activeFilters.dateRange.end !== '';

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full min-h-0 flex flex-col">
      {/* Card Header */}
      <div className="px-5 py-4 border-b border-gray-200 bg-gradient-to-br from-purple-50 via-white to-white flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Activity Timeline</h2>
            <p className="text-xs text-gray-500 mt-0.5">Track all updates and changes</p>
          </div>
          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <span className="inline-flex items-center justify-center px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                Filtered
              </span>
            )}
            <ActivityFilterPopover
              onApplyFilter={handleApplyFilter}
              onReset={handleResetFilter}
              availableAgents={availableAgents}
              availableActionTypes={availableActionTypes}
            />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 min-h-0 p-5 overflow-y-auto">
        <div className="space-y-5">
          {filteredEvents.map((event, idx) => (
            <div key={event.id} className="flex gap-3 group">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center pt-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                {idx !== filteredEvents.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 mt-1" style={{ minHeight: '32px' }} />
                )}
              </div>

              {/* Event Content */}
              <div className="flex-1 pb-2">
                <div className="flex items-start gap-3">
                  {/* Main Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <span className="font-medium text-gray-900">{event.user}</span>
                          {' '}{event.action}
                          {' '}
                          <span className="text-xs text-gray-500">
                            {event.timestamp}
                          </span>
                        </p>
                      </div>
                      
                      {/* Record Count Badge - Right Side */}
                      {event.badge && event.badge.includes('Record') && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (expandedActivity?.id === event.id) {
                              // If showing "Close", close the panel
                              onClose?.();
                            } else {
                              // Otherwise, open the panel
                              onRecordClick?.(event);
                            }
                          }}
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border whitespace-nowrap flex-shrink-0 transition-all hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer relative z-10 ${
                            expandedActivity?.id === event.id
                              ? 'bg-gray-100 text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-200'
                              : `${event.badgeColor} hover:border-blue-300 hover:bg-blue-50`
                          }`}
                        >
                          {expandedActivity?.id === event.id ? 'Close' : event.badge}
                        </button>
                      )}
                    </div>
                    
                    {/* Other Badges - Below Text */}
                    {event.badge && !event.badge.includes('Record') && (
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border whitespace-nowrap mt-1 ${event.badgeColor}`}>
                        {event.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}