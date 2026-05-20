import { useState, useEffect, useRef } from 'react';
import { Filter, Inbox, CheckCircle2, Clock, AlertTriangle, Send, X, MessageSquare } from 'lucide-react';
import { LeftSidebar } from '@/app/components/LeftSidebar';
import { fetchTicketState } from '@/utils/ticketApi';
import svgPaths from '@/imports/Frame1410084320/svg-gty1oqsfxl';

interface TicketListingPageNewProps {
  onTicketClick: (ticketId: string) => void;
  onNavigate?: (view: string) => void;
}

interface TicketRow {
  ticketId: string;
  title: string;
  status: 'Open' | 'In Progress' | 'Closed';
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  fdTicket: string;
  tenants: string[];
  workflows: string[];
  completedSubtasks: number;
  totalSubtasks: number;
  alertsCount: number;
  created: string;
  latestActivity: string;
}

interface FilterOptions {
  statuses: string[];
  severities: string[];
  hasAlerts: boolean | null;
  subtaskRange: { min: number; max: number } | null;
}

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

function HeaderIcon() {
  return (
    <div className="absolute left-[10px] size-[23.993px] top-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9931 23.9931">
        <g id="Icon">
          <path d={svgPaths.p29f2d300} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M12.9963 4.99856V6.99856" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M12.9963 16.9951V18.9951" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
          <path d="M12.9963 10.9968V12.9968" id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99943" />
        </g>
      </svg>
    </div>
  );
}

export function TicketListingPageNew({ onTicketClick, onNavigate }: TicketListingPageNewProps) {
  const [tickets, setTickets] = useState<TicketRow[]>([]);
  const [isLoadingTickets, setIsLoadingTickets] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "👋 Hello! I'm ARE Assistant. I can answer questions about all tickets, workflows, tenants, subtask progress, and team activity. How can I help?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [selectedTenant, setSelectedTenant] = useState('All');
  const [selectedWorkflow, setSelectedWorkflow] = useState('All');
  const [selectedWorkflowVariant, setSelectedWorkflowVariant] = useState('All');
  const [selectedVariantVersion, setSelectedVariantVersion] = useState('All');
  const [selectedAlertType, setSelectedAlertType] = useState('All');
  const [selectedGateway, setSelectedGateway] = useState('All');
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [showAREChat, setShowAREChat] = useState(false);
  const [hoveredTicket, setHoveredTicket] = useState<string | null>(null);
  const [moreFilters, setMoreFilters] = useState<FilterOptions>({
    statuses: [],
    severities: [],
    hasAlerts: null,
    subtaskRange: null
  });
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const [filterDropdownPosition, setFilterDropdownPosition] = useState({ top: 0, right: 0 });

  // Load real ticket data from backend
  useEffect(() => {
    const loadTicketData = async () => {
      setIsLoadingTickets(true);
      const ticketIds = ['ARE-T101', 'ARE-T102', 'ARE-T103', 'ARE-T104', 'ARE-T105'];

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

        // Map ticket IDs to realistic data
        const ticketDataMap: Record<string, Partial<TicketRow>> = {
          'ARE-T101': {
            title: 'Workflow execution failure - WELLSKY-ELIGIBILITY',
            severity: 'Critical',
            fdTicket: '270cG4c5',
            tenants: ['Archcare', 'Arden', 'Brightspring', 'Continuum', 'Delta Care'],
            workflows: ['WELLSKY-ELIGIBILITY', 'HCHB-AUTH'],
            created: 'Jan 10, 2026',
            latestActivity: 'Completed RCA identification and submitted fix to production'
          },
          'ARE-T102': {
            title: 'Data sync issue - HCHB-CLAIMS',
            severity: 'Medium',
            fdTicket: '270cG4c6',
            tenants: ['Arden', 'Brightspring'],
            workflows: ['HCHB-CLAIMS-TO-INVSTAR'],
            created: 'Jan 12, 2026',
            latestActivity: 'Deployed fix to production, monitoring results'
          },
          'ARE-T103': {
            title: 'Authentication timeout errors',
            severity: 'High',
            fdTicket: '270cG4c7',
            tenants: ['Brightspring', 'Continuum', 'Delta Care'],
            workflows: ['HCHB-AUTH', 'WELLSKY-ELIGIBILITY', 'MATRIX-BILLING-SYNC'],
            created: 'Jan 14, 2026',
            latestActivity: 'Investigating timeout patterns in auth service'
          },
          'ARE-T104': {
            title: 'Eligibility Verification work not started',
            severity: 'Critical',
            fdTicket: '270cG4c8',
            tenants: ['Continuum', 'Delta Care', 'Zelis Health', 'Archcare', 'Arden'],
            workflows: ['MATRIX-BILLING-SYNC', 'HCHB-CLAIMS-TO-INVSTAR'],
            created: 'Jan 15, 2026',
            latestActivity: 'Working on credential rotation for affected tenants'
          },
          'ARE-T105': {
            title: 'Rate Anomaly Detected - Physician/Facility Notification',
            severity: 'High',
            fdTicket: '270cG4c9',
            tenants: ['Moments'],
            workflows: ['PHYSICIAN-FACILITY-NOTIFICATION'],
            created: 'Jan 16, 2026',
            latestActivity: 'Anomaly auto-detected: 70% success rate in Thursday 07:00–08:00 UTC window'
          }
        };

        const ticketDefaults = ticketDataMap[ticketId] || {};

        if (ticketState) {
          // Calculate real counts from saved state
          const totalSubtasks = ticketState.subtasks.length;
          const completedSubtasks = ticketState.subtasks.filter(s => s.status === 'done').length;

          // Determine status based on subtasks
          let status: 'Open' | 'In Progress' | 'Closed' = 'Open';
          if (totalSubtasks > 0) {
            if (completedSubtasks === totalSubtasks) {
              status = 'Closed';
            } else if (completedSubtasks > 0) {
              status = 'In Progress';
            }
          }

          return {
            ticketId,
            status,
            totalSubtasks,
            completedSubtasks,
            alertsCount,
            ...ticketDefaults
          } as TicketRow;
        } else {
          // Default data for tickets without saved state
          return {
            ticketId,
            status: 'Open' as const,
            totalSubtasks: 0,
            completedSubtasks: 0,
            alertsCount,
            ...ticketDefaults
          } as TicketRow;
        }
      });

      const loadedTickets = await Promise.all(ticketPromises);
      setTickets(loadedTickets);
      setIsLoadingTickets(false);
    };

    loadTicketData();
  }, []);

  // Auto-scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Update dropdown position when showing
  useEffect(() => {
    if (showMoreFilters && filterButtonRef.current) {
      const rect = filterButtonRef.current.getBoundingClientRect();
      setFilterDropdownPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right
      });
    }
  }, [showMoreFilters]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterDropdownRef.current &&
        filterButtonRef.current &&
        !filterDropdownRef.current.contains(event.target as Node) &&
        !filterButtonRef.current.contains(event.target as Node)
      ) {
        setShowMoreFilters(false);
      }
    };

    if (showMoreFilters) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMoreFilters]);

  // Apply filters
  const filteredTickets = tickets.filter(ticket => {
    // Dropdown filters
    if (selectedTenant !== 'All' && !ticket.tenants.includes(selectedTenant)) return false;
    if (selectedWorkflow !== 'All' && !ticket.workflows.includes(selectedWorkflow)) return false;
    if (selectedWorkflowVariant !== 'All') return true; // Not filtering by variant for now
    if (selectedVariantVersion !== 'All') return true; // Not filtering by version for now
    if (selectedAlertType !== 'All') return true; // Not filtering by alert type for now
    if (selectedGateway !== 'All') return true; // Not filtering by gateway for now

    // More filters
    if (moreFilters.statuses.length > 0 && !moreFilters.statuses.includes(ticket.status)) return false;
    if (moreFilters.severities.length > 0 && !moreFilters.severities.includes(ticket.severity)) return false;
    if (moreFilters.hasAlerts !== null) {
      if (moreFilters.hasAlerts && ticket.alertsCount === 0) return false;
      if (!moreFilters.hasAlerts && ticket.alertsCount > 0) return false;
    }
    if (moreFilters.subtaskRange) {
      if (ticket.totalSubtasks < moreFilters.subtaskRange.min || ticket.totalSubtasks > moreFilters.subtaskRange.max) return false;
    }

    return true;
  });

  // Calculate counts for KPI cards
  const counts = {
    total: tickets.length,
    closed: tickets.filter(t => t.status === 'Closed').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    withAlerts: tickets.filter(t => t.alertsCount > 0).length
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      'Open': 'bg-blue-100 text-blue-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
      'Closed': 'bg-green-100 text-green-800'
    };
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  const getSeverityBadge = (severity: string) => {
    const styles = {
      'Critical': 'bg-red-100 text-red-800',
      'High': 'bg-orange-100 text-orange-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-gray-100 text-gray-800'
    };
    return styles[severity as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  const quickActions = [
    "What's the status?",
    "Show subtask progress",
    "Who is working on this?",
    "What should I do next?"
  ];

  // Handle chat message sending
  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: chatMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);

    // Generate assistant response
    const response = generateAssistantResponse(chatMessage.toLowerCase(), tickets);

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: chatMessages.length + 2,
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, assistantMessage]);
    }, 500);

    setChatMessage('');
  };

  // Generate assistant response based on user query
  const generateAssistantResponse = (query: string, ticketList: TicketRow[]): string => {
    // Check for ticket ID in query
    const ticketIdMatch = query.match(/are-t\d+/i);

    if (ticketIdMatch) {
      const ticketId = ticketIdMatch[0].toUpperCase();
      const ticket = ticketList.find(t => t.ticketId === ticketId);

      if (ticket) {
        return `**${ticket.ticketId}** - ${ticket.title}\n\n` +
               `📊 **Status:** ${ticket.status}\n` +
               `🔴 **Severity:** ${ticket.severity}\n` +
               `📋 **Subtasks:** ${ticket.completedSubtasks}/${ticket.totalSubtasks} completed\n` +
               `👥 **Clients:** ${ticket.tenants.length} (${ticket.tenants.slice(0, 2).join(', ')}${ticket.tenants.length > 2 ? '...' : ''})\n` +
               `🔄 **Workflows:** ${ticket.workflows.join(', ')}\n` +
               `📅 **Created:** ${ticket.created}\n` +
               `💬 **Latest:** ${ticket.latestActivity}`;
      }
    }

    // Check for workflow name in query
    const workflows = ['WELLSKY-ELIGIBILITY', 'HCHB-AUTH', 'HCHB-CLAIMS-TO-INVSTAR', 'MATRIX-BILLING-SYNC'];
    const mentionedWorkflow = workflows.find(wf => query.includes(wf.toLowerCase()));

    if (mentionedWorkflow) {
      const relatedTickets = ticketList.filter(t => t.workflows.some(w => w === mentionedWorkflow));

      if (relatedTickets.length > 0) {
        return `Found ${relatedTickets.length} ticket(s) for **${mentionedWorkflow}**:\n\n` +
               relatedTickets.map(t =>
                 `• **${t.ticketId}**: ${t.title} (${t.status})`
               ).join('\n');
      }
    }

    // Check for tenant name in query
    const tenants = ['Archcare', 'Arden', 'Brightspring', 'Continuum', 'Delta Care', 'Zelis Health'];
    const mentionedTenant = tenants.find(tenant => query.includes(tenant.toLowerCase()));

    if (mentionedTenant) {
      const relatedTickets = ticketList.filter(t => t.tenants.includes(mentionedTenant));

      if (relatedTickets.length > 0) {
        return `Found ${relatedTickets.length} ticket(s) for **${mentionedTenant}**:\n\n` +
               relatedTickets.map(t =>
                 `• **${t.ticketId}**: ${t.title} (${t.status})`
               ).join('\n');
      }
    }

    // Status queries
    if (query.includes('status') || query.includes('what\'s the status')) {
      if (!ticketIdMatch) {
        return `I can help you check ticket status! Please provide a ticket ID (e.g., ARE-T101) or ask about:\n\n` +
               `• A specific workflow (e.g., "WELLSKY-ELIGIBILITY status")\n` +
               `• A specific tenant (e.g., "Archcare status")\n` +
               `• Or ask "show all open tickets"`;
      }
    }

    // Subtask progress queries
    if (query.includes('subtask') || query.includes('progress')) {
      const ticketsWithSubtasks = ticketList.filter(t => t.totalSubtasks > 0);
      return `**Subtask Progress Overview:**\n\n` +
             ticketsWithSubtasks.map(t =>
               `• **${t.ticketId}**: ${t.completedSubtasks}/${t.totalSubtasks} completed (${Math.round((t.completedSubtasks/t.totalSubtasks) * 100)}%)`
             ).join('\n');
    }

    // Show all tickets queries
    if (query.includes('all') && (query.includes('ticket') || query.includes('open') || query.includes('closed'))) {
      let filteredTickets = ticketList;

      if (query.includes('open')) {
        filteredTickets = ticketList.filter(t => t.status === 'Open');
      } else if (query.includes('closed')) {
        filteredTickets = ticketList.filter(t => t.status === 'Closed');
      } else if (query.includes('progress') || query.includes('in progress')) {
        filteredTickets = ticketList.filter(t => t.status === 'In Progress');
      }

      return `**${filteredTickets.length} ticket(s) found:**\n\n` +
             filteredTickets.map(t =>
               `• **${t.ticketId}**: ${t.title}\n  Status: ${t.status}, Severity: ${t.severity}`
             ).join('\n\n');
    }

    // Critical tickets
    if (query.includes('critical')) {
      const criticalTickets = ticketList.filter(t => t.severity === 'Critical');
      return `**${criticalTickets.length} Critical ticket(s):**\n\n` +
             criticalTickets.map(t =>
               `• **${t.ticketId}**: ${t.title}\n  Status: ${t.status}, Subtasks: ${t.completedSubtasks}/${t.totalSubtasks}`
             ).join('\n\n');
    }

    // Summary
    if (query.includes('summary') || query.includes('overview')) {
      const openCount = ticketList.filter(t => t.status === 'Open').length;
      const inProgressCount = ticketList.filter(t => t.status === 'In Progress').length;
      const closedCount = ticketList.filter(t => t.status === 'Closed').length;
      const criticalCount = ticketList.filter(t => t.severity === 'Critical').length;

      return `**📊 Tickets Summary:**\n\n` +
             `Total Tickets: ${ticketList.length}\n` +
             `• Open: ${openCount}\n` +
             `• In Progress: ${inProgressCount}\n` +
             `• Closed: ${closedCount}\n` +
             `• Critical: ${criticalCount}\n\n` +
             `Type a ticket ID (e.g., ARE-T101) for details!`;
    }

    // Default response
    return `I can help you with:\n\n` +
           `• Check ticket status (e.g., "ARE-T101 status")\n` +
           `• View subtask progress\n` +
           `• Search by workflow (e.g., "WELLSKY-ELIGIBILITY")\n` +
           `• Search by tenant (e.g., "Archcare")\n` +
           `• Show all open/closed tickets\n` +
           `• Get summary overview\n\n` +
           `What would you like to know?`;
  };

  // Handle quick action clicks
  const handleQuickAction = (action: string) => {
    setChatMessage(action);
    // Automatically send the message
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <LeftSidebar activeView="tickets" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Using Figma Frame */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 h-[70px] flex items-center justify-between">
          <div className="relative h-[51px] flex-1">
            <div className="absolute left-0 rounded-[11px] w-[43px] h-[43px] top-[4px]" style={{ backgroundImage: "linear-gradient(138.457deg, rgb(50, 75, 174) 8.6858%, rgb(32, 60, 143) 95.63%)" }}>
              <HeaderIcon />
            </div>
            <p className="absolute font-black leading-normal left-[56px] text-[23px] text-black top-0 whitespace-nowrap">ARE Tickets</p>
            <p className="absolute font-medium leading-normal left-[56px] text-[#9ca5bb] text-[16px] top-[30px] whitespace-nowrap">All tickets + ARE Chat View</p>
          </div>

          {/* ARE Chat Toggle Button */}
          <button
            onClick={() => setShowAREChat(!showAREChat)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              showAREChat
                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
            }`}
          >
            {showAREChat ? (
              <>
                <X className="w-5 h-5" />
                <span className="text-sm font-medium">Close Chat</span>
              </>
            ) : (
              <>
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm font-medium">ARE Chat</span>
              </>
            )}
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Tickets Section */}
          <div className="flex-1 overflow-y-auto">
            {/* KPI Summary Cards */}
            <div className="px-6 pt-4 pb-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="p-3 rounded-lg bg-blue-600 flex-shrink-0">
                    <Inbox className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold text-gray-900">{String(counts.total).padStart(2, '0')}</div>
                    <div className="text-xs font-medium text-gray-600">Total Tickets</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="p-3 rounded-lg bg-green-600 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold text-gray-900">{String(counts.closed).padStart(2, '0')}</div>
                    <div className="text-xs font-medium text-gray-600">Closed</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="p-3 rounded-lg bg-amber-500 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold text-gray-900">{String(counts.inProgress).padStart(2, '0')}</div>
                    <div className="text-xs font-medium text-gray-600">In Progress</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="p-3 rounded-lg bg-orange-600 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold text-gray-900">{String(counts.withAlerts).padStart(2, '0')}</div>
                    <div className="text-xs font-medium text-gray-600">With Alerts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="px-6 pb-4">
              <div className="flex items-center gap-2">
                <select
                  value={selectedTenant}
                  onChange={(e) => setSelectedTenant(e.target.value)}
                  className="flex-1 h-9 px-3 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat"
                >
                  <option value="All">Tenant *</option>
                  <option value="Archcare">Archcare</option>
                  <option value="Arden">Arden</option>
                  <option value="Brightspring">Brightspring</option>
                  <option value="Continuum">Continuum</option>
                  <option value="Delta Care">Delta Care</option>
                  <option value="Zelis Health">Zelis Health</option>
                </select>

                <select
                  value={selectedWorkflow}
                  onChange={(e) => setSelectedWorkflow(e.target.value)}
                  className="flex-1 h-9 px-3 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat"
                >
                  <option value="All">Workflow *</option>
                  <option value="WELLSKY-ELIGIBILITY">WELLSKY-ELIGIBILITY</option>
                  <option value="HCHB-AUTH">HCHB-AUTH</option>
                  <option value="HCHB-CLAIMS-TO-INVSTAR">HCHB-CLAIMS-TO-INVSTAR</option>
                  <option value="MATRIX-BILLING-SYNC">MATRIX-BILLING-SYNC</option>
                  <option value="WELLSKY-IMMAT">WELLSKY-IMMAT</option>
                  <option value="7NEED-EXTRACT">7NEED-EXTRACT</option>
                </select>

                <select
                  value={selectedWorkflowVariant}
                  onChange={(e) => setSelectedWorkflowVariant(e.target.value)}
                  className="flex-1 h-9 px-3 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat"
                >
                  <option value="All">Workflow Variant *</option>
                  <option value="ELIGIBILITY">ELIGIBILITY</option>
                  <option value="AUTHORIZATIONS">AUTHORIZATIONS</option>
                  <option value="CLAIMS PROCESSING">CLAIMS PROCESSING</option>
                </select>

                <select
                  value={selectedVariantVersion}
                  onChange={(e) => setSelectedVariantVersion(e.target.value)}
                  className="flex-1 h-9 px-3 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat"
                >
                  <option value="All">Variant Version *</option>
                  <option value="v1.0">v1.0</option>
                  <option value="v1.1">v1.1</option>
                  <option value="v2.0">v2.0</option>
                </select>

                <select
                  value={selectedAlertType}
                  onChange={(e) => setSelectedAlertType(e.target.value)}
                  className="flex-1 h-9 px-3 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat"
                >
                  <option value="All">Alert Type *</option>
                  <option value="Critical">Critical</option>
                  <option value="Warning">Warning</option>
                  <option value="Info">Info</option>
                </select>

                <select
                  value={selectedGateway}
                  onChange={(e) => setSelectedGateway(e.target.value)}
                  className="flex-1 h-9 px-3 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px_16px] bg-[right_8px_center] bg-no-repeat"
                >
                  <option value="All">Gateway *</option>
                  <option value="API Gateway">API Gateway</option>
                  <option value="Web Gateway">Web Gateway</option>
                </select>

                <button
                  ref={filterButtonRef}
                  onClick={() => setShowMoreFilters(!showMoreFilters)}
                  className="inline-flex items-center gap-2 px-4 h-9 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex-shrink-0"
                >
                  <Filter className="w-4 h-4" />
                  More Filters
                </button>
              </div>
            </div>

            {/* Tickets Table - Fixed Height */}
            <div className="px-6 pb-6">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 340px)' }}>
                {/* Table Header */}
                <div className="bg-gray-50 border-b border-gray-200">
                  <div className="grid grid-cols-10 gap-4 px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <div className="col-span-1">ARE ID</div>
                    <div className="col-span-2">Title</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1">Severity</div>
                    <div className="col-span-1">FD Ticket</div>
                    <div className="col-span-1">Client / Tenants</div>
                    <div className="col-span-1 text-center">Completed Subtasks</div>
                    <div className="col-span-1">Created</div>
                    <div className="col-span-1">Latest Activity</div>
                  </div>
                </div>

                {/* Table Body - Scrollable */}
                <div className="overflow-y-auto" style={{ height: 'calc(100vh - 392px)' }}>
                  {isLoadingTickets ? (
                    <div className="py-16 text-center">
                      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-3" />
                      <p className="text-sm text-gray-600">Loading tickets...</p>
                    </div>
                  ) : filteredTickets.length === 0 ? (
                    <div className="py-16 text-center">
                      <Inbox className="size-12 text-gray-300 mx-auto mb-3" />
                      <h3 className="text-sm font-medium text-gray-900 mb-1">No tickets found</h3>
                      <p className="text-sm text-gray-500">No tickets match the selected filters</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {filteredTickets.map((ticket) => (
                        <div
                          key={ticket.ticketId}
                          onClick={() => onTicketClick(ticket.ticketId)}
                          className="grid grid-cols-10 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                          onMouseEnter={() => setHoveredTicket(ticket.ticketId)}
                          onMouseLeave={() => setHoveredTicket(null)}
                        >
                          {/* ARE ID */}
                          <div className="col-span-1 flex items-center">
                            <span className="text-sm font-semibold text-blue-600 hover:underline">{ticket.ticketId}</span>
                          </div>

                          {/* Title */}
                          <div className="col-span-2 flex items-center">
                            <span className="text-sm text-gray-900 line-clamp-2">{ticket.title}</span>
                          </div>

                          {/* Status - Rectangle chips */}
                          <div className="col-span-1 flex items-center">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${getStatusBadge(ticket.status)}`}>
                              {ticket.status}
                            </span>
                          </div>

                          {/* Severity - Pill/Oval chips */}
                          <div className="col-span-1 flex items-center">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getSeverityBadge(ticket.severity)}`}>
                              {ticket.severity}
                            </span>
                          </div>

                          {/* FD Ticket */}
                          <div className="col-span-1 flex items-center">
                            <span className="text-sm text-gray-700">{ticket.fdTicket}</span>
                          </div>

                          {/* Client / Tenants - Tags with hover tooltip */}
                          <div className="col-span-1 flex items-center">
                            <div className="relative flex gap-1">
                              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                                {ticket.tenants.length} clients
                              </span>
                              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                                {ticket.workflows.length} WFs
                              </span>

                              {/* Hover Tooltip */}
                              {hoveredTicket === ticket.ticketId && (
                                <div className="absolute z-10 left-0 top-full mt-1 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg">
                                  <div className="font-semibold mb-2">Clients:</div>
                                  <ul className="mb-3 space-y-1">
                                    {ticket.tenants.map((tenant, i) => (
                                      <li key={i}>• {tenant}</li>
                                    ))}
                                  </ul>
                                  <div className="font-semibold mb-2">Workflows:</div>
                                  <ul className="space-y-1">
                                    {ticket.workflows.map((wf, i) => (
                                      <li key={i} className="truncate">• {wf}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Completed Subtasks - Plain fraction */}
                          <div className="col-span-1 flex items-center justify-center">
                            <span className="text-sm text-gray-900">
                              {ticket.completedSubtasks}/{ticket.totalSubtasks}
                            </span>
                          </div>

                          {/* Created */}
                          <div className="col-span-1 flex items-center">
                            <span className="text-sm text-gray-600">{ticket.created}</span>
                          </div>

                          {/* Latest Activity - Plain text only */}
                          <div className="col-span-1 flex items-center">
                            <span className="text-sm text-gray-700 truncate">{ticket.latestActivity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {filteredTickets.length > 0 && (
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      Showing <span className="font-semibold text-gray-900">{filteredTickets.length}</span> of <span className="font-semibold text-gray-900">{tickets.length}</span> tickets
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Ask ARE Chat Panel - Floating Card */}
          {showAREChat && (
            <div className="fixed right-6 top-[94px] w-[380px] bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col" style={{ height: 'calc(100vh - 130px)' }}>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900">Ask ARE Chat</h3>
                  <div className="flex flex-col items-end gap-1">
                    <button
                      onClick={() => setShowAREChat(false)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 font-medium">Online</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Screen context-aware AI assistant</p>
              </div>

            {/* Quick Actions - 2x2 grid */}
            <div className="p-4 border-b border-gray-200 flex-shrink-0">
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickAction(action)}
                    className="px-2 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors text-left"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages - Scrollable middle */}
            <div ref={chatMessagesRef} className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                      {msg.timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input - Pinned to bottom with space */}
            <div className="p-4 border-t border-gray-200 flex-shrink-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask about tickets… (e.g., ARE-T101, summary, critical tickets)"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>

      {/* More Filters Dropdown */}
      {showMoreFilters && (
        <div
          ref={filterDropdownRef}
          className="fixed w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-[calc(100vh-100px)] overflow-y-auto"
          style={{ top: `${filterDropdownPosition.top}px`, right: `${filterDropdownPosition.right}px` }}
        >
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-900">More Filters</h3>
              <button
                onClick={() => setShowMoreFilters(false)}
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
                      checked={moreFilters.statuses.includes(status)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setMoreFilters(prev => ({
                            ...prev,
                            statuses: [...prev.statuses, status]
                          }));
                        } else {
                          setMoreFilters(prev => ({
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

            {/* Severity Filter */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                Severity
              </label>
              <div className="space-y-2">
                {['Critical', 'High', 'Medium', 'Low'].map((severity) => (
                  <label key={severity} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={moreFilters.severities.includes(severity)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setMoreFilters(prev => ({
                            ...prev,
                            severities: [...prev.severities, severity]
                          }));
                        } else {
                          setMoreFilters(prev => ({
                            ...prev,
                            severities: prev.severities.filter(s => s !== severity)
                          }));
                        }
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{severity}</span>
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
                    checked={moreFilters.hasAlerts === null}
                    onChange={() => setMoreFilters(prev => ({ ...prev, hasAlerts: null }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="alerts"
                    checked={moreFilters.hasAlerts === true}
                    onChange={() => setMoreFilters(prev => ({ ...prev, hasAlerts: true }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">With Alerts</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="alerts"
                    checked={moreFilters.hasAlerts === false}
                    onChange={() => setMoreFilters(prev => ({ ...prev, hasAlerts: false }))}
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
                    checked={moreFilters.subtaskRange === null}
                    onChange={() => setMoreFilters(prev => ({ ...prev, subtaskRange: null }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">All</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subtasks"
                    checked={moreFilters.subtaskRange?.min === 0 && moreFilters.subtaskRange?.max === 0}
                    onChange={() => setMoreFilters(prev => ({ ...prev, subtaskRange: { min: 0, max: 0 } }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">No Subtasks (0)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subtasks"
                    checked={moreFilters.subtaskRange?.min === 1 && moreFilters.subtaskRange?.max === 5}
                    onChange={() => setMoreFilters(prev => ({ ...prev, subtaskRange: { min: 1, max: 5 } }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">1-5 Subtasks</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subtasks"
                    checked={moreFilters.subtaskRange?.min === 6 && moreFilters.subtaskRange?.max === 10}
                    onChange={() => setMoreFilters(prev => ({ ...prev, subtaskRange: { min: 6, max: 10 } }))}
                    className="border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">6-10 Subtasks</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subtasks"
                    checked={moreFilters.subtaskRange?.min === 11 && moreFilters.subtaskRange?.max === 999}
                    onChange={() => setMoreFilters(prev => ({ ...prev, subtaskRange: { min: 11, max: 999 } }))}
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
                  setMoreFilters({
                    statuses: [],
                    severities: [],
                    hasAlerts: null,
                    subtaskRange: null
                  });
                }}
                className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowMoreFilters(false)}
                className="flex-1 px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}