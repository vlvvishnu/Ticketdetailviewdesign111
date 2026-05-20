import { useState, useEffect, useRef } from 'react';
import { Filter, X, Circle, Clock, CheckCircle2, AlertTriangle, Eye, Inbox } from 'lucide-react';
import { TicketListingPageNew } from '@/app/components/TicketListingPageNew';
import { LeftSidebar } from '@/app/components/LeftSidebar';
import { AccordionFilters } from '@/app/components/AccordionFilters';
import { fetchTicketState } from '@/utils/ticketApi';

interface TicketListingPageProps {
  onTicketClick: (ticketId: string) => void;
  onNavigate?: (view: string) => void;
}

interface TicketData {
  ticketId: string;
  status: 'Open' | 'In Progress' | 'Closed';
  totalSubtasks: number;
  completedSubtasks: number;
  ongoingSubtasks: number;
  alertsCount: number;
  lastUpdated: string;
}

interface FilterOptions {
  statuses: string[];
  hasAlerts: boolean | null;
  subtaskRange: { min: number; max: number } | null;
}

export function TicketListingPage({ onTicketClick, onNavigate }: TicketListingPageProps) {
  // Use the new listing page with real data and connections
  return <TicketListingPageNew onTicketClick={onTicketClick} onNavigate={onNavigate} />;
}

export function TicketListingPageOld({ onTicketClick }: TicketListingPageProps) {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    statuses: [],
    hasAlerts: null,
    subtaskRange: null
  });
  const [accordionFilters, setAccordionFilters] = useState<Record<string, string[]>>({});
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [isLoadingTickets, setIsLoadingTickets] = useState(true);
  const [recentUpdates, setRecentUpdates] = useState<Array<{
    ticketId: string;
    description: string;
    timestamp: Date;
    type: 'subtask' | 'alert' | 'status';
  }>>([]);

  // Load real ticket data from backend in parallel
  useEffect(() => {
    const loadTicketData = async () => {
      setIsLoadingTickets(true);
      const ticketIds = ['ARE-T101', 'ARE-T102', 'ARE-T103', 'ARE-T104'];

      // Load all tickets in parallel instead of sequentially
      const ticketPromises = ticketIds.map(async (ticketId) => {
        const ticketState = await fetchTicketState(ticketId);

        // Get alerts count from localStorage
        let alertsCount = 0;
        try {
          const alertsData = localStorage.getItem(`ticket-alerts-${ticketId}`);
          if (alertsData) {
            const alerts = JSON.parse(alertsData);
            alertsCount = alerts.filter((a: any) => a.state === 'active').length;
          }
        } catch (e) {
          console.error('Error loading alerts:', e);
        }

        const updates: Array<{
          ticketId: string;
          description: string;
          timestamp: Date;
          type: 'subtask' | 'alert' | 'status';
        }> = [];

        if (ticketState) {
          // Calculate real counts from saved state
          const totalSubtasks = ticketState.subtasks.length;
          const completedSubtasks = ticketState.subtasks.filter(s => s.status === 'done').length;
          const ongoingSubtasks = ticketState.subtasks.filter(s => s.status === 'in-progress').length;

          // Determine status based on subtasks
          let status: 'Open' | 'In Progress' | 'Closed' = 'Open';
          if (totalSubtasks > 0) {
            if (completedSubtasks === totalSubtasks) {
              status = 'Closed';
            } else if (completedSubtasks > 0 || ongoingSubtasks > 0) {
              status = 'In Progress';
            }
          }

          // Extract recent activity from activity events
          if (ticketState.activityEvents && ticketState.activityEvents.length > 0) {
            ticketState.activityEvents.forEach((event: any) => {
              // Skip events without a description
              if (!event.description || typeof event.description !== 'string') {
                return;
              }

              // Parse the description to create more detailed updates
              let updateDescription = event.description;
              let updateType: 'subtask' | 'alert' | 'status' = 'status';

              if (event.description.includes('Subtask')) {
                updateType = 'subtask';
                // Extract subtask name if available
                const subtaskMatch = event.description.match(/Subtask ["'](.+?)["']/);
                if (subtaskMatch) {
                  const subtaskName = subtaskMatch[1];
                  if (event.description.includes('completed')) {
                    updateDescription = `Completed: ${subtaskName}`;
                  } else if (event.description.includes('started')) {
                    updateDescription = `Started: ${subtaskName}`;
                  } else {
                    updateDescription = subtaskName;
                  }
                }
              } else if (event.description.includes('Alert') || event.description.includes('alert')) {
                updateType = 'alert';
              }

              updates.push({
                ticketId,
                description: updateDescription,
                timestamp: new Date(event.timestamp),
                type: updateType
              });
            });
          }

          return {
            ticket: {
              ticketId,
              status,
              totalSubtasks,
              completedSubtasks,
              ongoingSubtasks,
              alertsCount,
              lastUpdated: new Date(ticketState.timestamp).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
              })
            },
            updates
          };
        } else {
          // Default data for tickets without saved state
          return {
            ticket: {
              ticketId,
              status: 'Open' as const,
              totalSubtasks: 0,
              completedSubtasks: 0,
              ongoingSubtasks: 0,
              alertsCount: 0,
              lastUpdated: 'Jan 30, 2026 10:30 AM'
            },
            updates: []
          };
        }
      });

      // Wait for all tickets to load in parallel
      const results = await Promise.all(ticketPromises);

      // Extract tickets and updates
      const loadedTickets = results.map(r => r.ticket);
      const allUpdates = results.flatMap(r => r.updates);

      setTickets(loadedTickets);

      // Sort updates by timestamp (most recent first) and take top 5
      const sortedUpdates = allUpdates.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, 5);
      setRecentUpdates(sortedUpdates);

      setIsLoadingTickets(false);
    };

    loadTicketData();
  }, []);

  // Update dropdown position when showing
  useEffect(() => {
    if (showFilterDropdown && filterButtonRef.current) {
      const rect = filterButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right
      });
    }
  }, [showFilterDropdown]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterDropdownRef.current &&
        filterButtonRef.current &&
        !filterDropdownRef.current.contains(event.target as Node) &&
        !filterButtonRef.current.contains(event.target as Node)
      ) {
        setShowFilterDropdown(false);
      }
    };

    if (showFilterDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilterDropdown]);

  // Apply filters
  const applyFilters = (ticketList: TicketData[]) => {
    let filtered = ticketList;

    // Apply status filter from dropdown
    if (filters.statuses.length > 0) {
      filtered = filtered.filter(ticket => filters.statuses.includes(ticket.status));
    }

    // Apply alerts filter from dropdown
    if (filters.hasAlerts !== null) {
      filtered = filtered.filter(ticket =>
        filters.hasAlerts ? ticket.alertsCount > 0 : ticket.alertsCount === 0
      );
    }

    // Apply subtask range filter from dropdown
    if (filters.subtaskRange) {
      filtered = filtered.filter(ticket =>
        ticket.totalSubtasks >= filters.subtaskRange!.min &&
        ticket.totalSubtasks <= filters.subtaskRange!.max
      );
    }

    // Apply accordion filters
    // For now, we'll use a simple demonstration
    // You can expand this based on your actual ticket data structure
    if (Object.keys(accordionFilters).length > 0) {
      console.log('Active accordion filters:', accordionFilters);
      // Example: Filter based on workflow if tickets had workflow data
      // if (accordionFilters.workflow && accordionFilters.workflow.length > 0) {
      //   filtered = filtered.filter(ticket =>
      //     accordionFilters.workflow.includes(ticket.workflow)
      //   );
      // }
    }

    return filtered;
  };

  const handleAccordionFilterChange = (newFilters: Record<string, string[]>) => {
    setAccordionFilters(newFilters);
    console.log('Accordion filters updated:', newFilters);
  };

  // Filter tickets
  const filteredTickets = applyFilters(tickets);

  // Calculate counts for each view
  const counts = {
    all: tickets.length,
    open: tickets.filter(t => t.status === 'Open').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    closed: tickets.filter(t => t.status === 'Closed').length,
    withAlerts: tickets.filter(t => t.alertsCount > 0).length,
    archived: 0
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      'Open': 'bg-blue-100 text-blue-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
      'Closed': 'bg-green-100 text-green-800'
    };

    const icons = {
      'Open': <Circle className="size-3" />,
      'In Progress': <Clock className="size-3" />,
      'Closed': <CheckCircle2 className="size-3" />
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {icons[status as keyof typeof icons]}
        {status}
      </span>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <LeftSidebar activeView="tickets" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Filter Dropdown - Fixed Position */}
      {showFilterDropdown && (
        <div
          ref={filterDropdownRef}
          className="fixed w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-[calc(100vh-100px)] overflow-y-auto"
          style={{ top: `${dropdownPosition.top}px`, right: `${dropdownPosition.right}px` }}
        >
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-900">Filter Tickets</h3>
              <button
                onClick={() => setShowFilterDropdown(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X className="size-4 text-gray-500" />
              </button>
            </div>

            {/* Status Filter */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                Status
              </label>
              <div className="space-y-2">
                {['Open', 'In Progress', 'Closed'].map((status) => (
                  <label key={status} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.statuses.includes(status)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFilters(prev => ({
                            ...prev,
                            statuses: [...prev.statuses, status]
                          }));
                        } else {
                          setFilters(prev => ({
                            ...prev,
                            statuses: prev.statuses.filter(s => s !== status)
                          }));
                        }
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Alerts Filter */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                Alerts
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="alerts"
                    checked={filters.hasAlerts === null}
                    onChange={() => setFilters(prev => ({ ...prev, hasAlerts: null }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="alerts"
                    checked={filters.hasAlerts === true}
                    onChange={() => setFilters(prev => ({ ...prev, hasAlerts: true }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">With Alerts</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="alerts"
                    checked={filters.hasAlerts === false}
                    onChange={() => setFilters(prev => ({ ...prev, hasAlerts: false }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">No Alerts</span>
                </label>
              </div>
            </div>

            {/* Subtask Range Filter */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                Subtask Count
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subtasks"
                    checked={filters.subtaskRange === null}
                    onChange={() => setFilters(prev => ({ ...prev, subtaskRange: null }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subtasks"
                    checked={filters.subtaskRange?.min === 0 && filters.subtaskRange?.max === 0}
                    onChange={() => setFilters(prev => ({ ...prev, subtaskRange: { min: 0, max: 0 } }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">No Subtasks (0)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subtasks"
                    checked={filters.subtaskRange?.min === 1 && filters.subtaskRange?.max === 5}
                    onChange={() => setFilters(prev => ({ ...prev, subtaskRange: { min: 1, max: 5 } }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">1-5 Subtasks</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subtasks"
                    checked={filters.subtaskRange?.min === 6 && filters.subtaskRange?.max === 10}
                    onChange={() => setFilters(prev => ({ ...prev, subtaskRange: { min: 6, max: 10 } }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">6-10 Subtasks</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subtasks"
                    checked={filters.subtaskRange?.min === 11 && filters.subtaskRange?.max === 999}
                    onChange={() => setFilters(prev => ({ ...prev, subtaskRange: { min: 11, max: 999 } }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">11+ Subtasks</span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-3 border-t border-gray-200">
              <button
                onClick={() => {
                  setFilters({
                    statuses: [],
                    hasAlerts: null,
                    subtaskRange: null
                  });
                }}
                className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowFilterDropdown(false)}
                className="flex-1 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

        {/* Main Layout with Filter Sidebar */}
        <div className="flex flex-1">
          {/* Filter Sidebar */}
          <div className="w-80 bg-gray-50 border-r border-gray-200 flex-shrink-0 min-h-screen p-4">
            {/* Accordion Filters - Full Height */}
            <AccordionFilters onFilterChange={handleAccordionFilterChange} />
          </div>

          {/* Right Content Area */}
          <div className="flex-1 min-h-screen">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-20">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-bold text-[#333333]">
                      All Tickets
                    </h1>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-sm text-gray-600">
                        {filteredTickets.length} {filteredTickets.length === 1 ? 'ticket' : 'tickets'}
                      </p>
                      {Object.keys(accordionFilters).length > 0 && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {Object.values(accordionFilters).flat().length} filter{Object.values(accordionFilters).flat().length !== 1 ? 's' : ''} active
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    ref={filterButtonRef}
                    onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Filter className="size-4" />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* Ticket List Container */}
            <div className="p-6">
              {/* KPI Summary Cards */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-3 rounded-lg border bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm">
                      <Inbox className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{counts.all}</div>
                  </div>
                  <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">Total Tickets</div>
                </div>

                <div className="p-3 rounded-lg border bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{counts.closed}</div>
                  </div>
                  <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">Closed</div>
                </div>

                <div className="p-3 rounded-lg border bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-sm">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{counts.inProgress}</div>
                  </div>
                  <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">In Progress</div>
                </div>

                <div className="p-3 rounded-lg border bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 shadow-sm">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{counts.withAlerts}</div>
                  </div>
                  <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">With Alerts</div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              {/* Table Header - Sticky */}
              <div className="bg-gray-50 border-b border-gray-200">
                <div className="grid grid-cols-10 gap-4 px-6 py-3">
                  <div className="col-span-1 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Ticket ID
                  </div>
                  <div className="col-span-1 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </div>
                  <div className="col-span-1 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">
                    Subtasks
                  </div>
                  <div className="col-span-1 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">
                    Completed
                  </div>
                  <div className="col-span-1 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">
                    Ongoing
                  </div>
                  <div className="col-span-1 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">
                    Alerts
                  </div>
                  <div className="col-span-2 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Last Activity
                  </div>
                  <div className="col-span-1 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Last Updated
                  </div>
                  <div className="col-span-1 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center">
                    Action
                  </div>
                </div>
              </div>

              {/* Ticket Cards - Inbox Style */}
              <div className="divide-y divide-gray-100">
                {!isLoadingTickets && filteredTickets.map((ticket) => {
                  // Get the most recent activity for this ticket
                  const lastActivity = recentUpdates.find(update => update.ticketId === ticket.ticketId);

                  return (
                    <div
                      key={ticket.ticketId}
                      onClick={() => onTicketClick(ticket.ticketId)}
                      className="grid grid-cols-10 gap-4 px-6 py-4 hover:bg-blue-50/50 transition-all duration-150 cursor-pointer group border-l-4 border-l-transparent hover:border-l-blue-500"
                    >
                      {/* Ticket ID */}
                      <div className="col-span-1 flex items-center">
                        <div className="text-sm font-semibold text-[#333] group-hover:text-[#333] transition-colors">
                          {ticket.ticketId}
                        </div>
                      </div>

                      {/* Status */}
                      <div className="col-span-1 flex items-center">
                        {getStatusBadge(ticket.status)}
                      </div>

                      {/* Total Subtasks */}
                      <div className="col-span-1 flex items-center justify-center">
                        <div className="px-2 py-1 bg-gray-100 rounded text-sm font-medium text-gray-900">
                          {ticket.totalSubtasks}
                        </div>
                      </div>

                      {/* Completed Subtasks */}
                      <div className="col-span-1 flex items-center justify-center">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-4 text-green-500" />
                          <span className="text-sm font-medium text-gray-900">
                            {ticket.completedSubtasks}
                          </span>
                        </div>
                      </div>

                      {/* Ongoing Subtasks */}
                      <div className="col-span-1 flex items-center justify-center">
                        <div className="flex items-center gap-1.5">
                          <Clock className="size-4 text-yellow-500" />
                          <span className="text-sm font-medium text-gray-900">
                            {ticket.ongoingSubtasks}
                          </span>
                        </div>
                      </div>

                      {/* Alerts Count */}
                      <div className="col-span-1 flex items-center justify-center">
                        {ticket.alertsCount > 0 ? (
                          <div className="flex items-center gap-1.5 px-2 py-1 bg-orange-50 rounded">
                            <AlertTriangle className="size-4 text-orange-500" />
                            <span className="text-sm font-semibold text-orange-700">
                              {ticket.alertsCount}
                            </span>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-400">—</span>
                        )}
                      </div>

                      {/* Last Activity */}
                      <div className="col-span-2 flex items-center">
                        {lastActivity ? (
                          <div className="flex items-start gap-2">
                            <div className={`p-1 rounded mt-0.5 flex-shrink-0 ${
                              lastActivity.type === 'subtask' ? 'bg-blue-50' :
                              lastActivity.type === 'alert' ? 'bg-orange-50' :
                              'bg-purple-50'
                            }`}>
                              {lastActivity.type === 'subtask' ? <CheckCircle2 className="size-3 text-blue-600" /> :
                               lastActivity.type === 'alert' ? <AlertTriangle className="size-3 text-orange-600" /> :
                               <Clock className="size-3 text-purple-600" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-gray-700 font-medium truncate">
                                {lastActivity.description}
                              </div>
                              <div className="text-[10px] text-gray-500">
                                {lastActivity.timestamp.toLocaleString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  hour: 'numeric',
                                  minute: '2-digit',
                                  hour12: true
                                })}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <span className="text-sm text-gray-400">No activity</span>
                        )}
                      </div>

                      {/* Last Updated */}
                      <div className="col-span-1 flex items-center">
                        <div className="flex items-center gap-1.5">
                          <Clock className="size-3 text-gray-400" />
                          <span className="text-xs text-gray-600 truncate">
                            {new Date(ticket.lastUpdated).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="col-span-1 flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onTicketClick(ticket.ticketId);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-all duration-150 opacity-0 group-hover:opacity-100 shadow-sm hover:shadow"
                        >
                          <Eye className="size-4" />
                          View
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Loading State */}
              {isLoadingTickets && (
                <div className="py-16 text-center">
                  <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-sm text-gray-600">Loading tickets...</p>
                </div>
              )}

              {/* Empty State */}
              {!isLoadingTickets && filteredTickets.length === 0 && (
                <div className="py-16 text-center">
                  <Inbox className="size-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-sm font-medium text-gray-900 mb-1">No tickets found</h3>
                  <p className="text-sm text-gray-500">
                    {Object.keys(accordionFilters).length > 0
                      ? 'No tickets match the selected filters'
                      : 'Your inbox is empty'}
                  </p>
                </div>
              )}

                {/* Footer */}
                {filteredTickets.length > 0 && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-gray-600">
                        Showing <span className="font-semibold text-gray-900">{filteredTickets.length}</span> of <span className="font-semibold text-gray-900">{tickets.length}</span> tickets
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}