import { useState } from 'react';
import { Search, ChevronDown, Filter, Inbox, CheckCircle2, Clock, AlertTriangle, Send, ChevronRight, User } from 'lucide-react';
import { LeftSidebar } from '@/app/components/LeftSidebar';
import Group1 from '@/imports/Group1410083415/Group1410083415';

interface TicketRow {
  areId: string;
  title: string;
  status: 'Open' | 'In Progress' | 'Closed';
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  fdTicket: string;
  tenantCount: number;
  wfCount: number;
  workflows: string[];
  created: string;
  latestActivity: {
    person: string;
    note: string;
  };
}

const mockTickets: TicketRow[] = [
  {
    areId: 'ARE-T101',
    title: 'Workflow execution failure - WELLSKY-ELIGIBILITY',
    status: 'In Progress',
    severity: 'Critical',
    fdTicket: '270cG4c5',
    tenantCount: 4,
    wfCount: 10,
    workflows: ['WELLSKY-ELIGIBILITY', 'HCHB-AUTH', 'MATRIX-BILLING-SYNC', 'WELLSKY-IMMAT'],
    created: 'Jan 10, 2026',
    latestActivity: {
      person: 'Sarah Chen',
      note: 'Completed RCA identification and submitted fix to...'
    }
  },
  {
    areId: 'ARE-T102',
    title: 'Data sync issue - HCHB-CLAIMS',
    status: 'Closed',
    severity: 'Medium',
    fdTicket: '270cG4c6',
    tenantCount: 2,
    wfCount: 5,
    workflows: ['HCHB-CLAIMS-TO-INVSTAR', 'HCHB-AUTH'],
    created: 'Jan 12, 2026',
    latestActivity: {
      person: 'Mike Johnson',
      note: 'Deployed fix to production, monitoring results...'
    }
  },
  {
    areId: 'ARE-T103',
    title: 'Authentication timeout errors',
    status: 'Open',
    severity: 'High',
    fdTicket: '270cG4c7',
    tenantCount: 3,
    wfCount: 7,
    workflows: ['HCHB-AUTH', 'WELLSKY-ELIGIBILITY', 'MATRIX-BILLING-SYNC'],
    created: 'Jan 14, 2026',
    latestActivity: {
      person: 'Alex Kumar',
      note: 'Investigating timeout patterns in auth service...'
    }
  },
  {
    areId: 'ARE-T104',
    title: 'Failed claims submission',
    status: 'In Progress',
    severity: 'Critical',
    fdTicket: '270cG4c8',
    tenantCount: 5,
    wfCount: 12,
    workflows: ['HCHB-CLAIMS-TO-INVSTAR', 'MATRIX-BILLING-SYNC'],
    created: 'Jan 15, 2026',
    latestActivity: {
      person: 'Sarah Chen',
      note: 'Working on credential rotation for affected tenants...'
    }
  }
];

export function AllTicketsRedesigned() {
  const [tickets] = useState<TicketRow[]>(mockTickets);
  const [chatMessage, setChatMessage] = useState('');
  const [hoveredWfChip, setHoveredWfChip] = useState<string | null>(null);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'border-l-red-500';
      case 'High':
        return 'border-l-orange-500';
      case 'Medium':
        return 'border-l-yellow-500';
      case 'Low':
        return 'border-l-blue-500';
      default:
        return 'border-l-gray-300';
    }
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
      'Low': 'bg-blue-100 text-blue-800'
    };

    return styles[severity as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  const quickActions = [
    "What's the status?",
    "Show subtask progress",
    "Who is working on this?",
    "What should I do next?"
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <LeftSidebar activeView="tickets" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <Group1 />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ARE Tickets</h1>
              <p className="text-xs text-gray-500">Anomaly Resolution Engine – All Tickets</p>
            </div>
          </div>

          {/* Horizontal Filters */}
          <div className="flex items-center gap-2 mt-4">
            <select className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>Tenant</option>
              <option>Archcare</option>
              <option>Arden</option>
              <option>Brightspring</option>
            </select>

            <select className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>Workflow</option>
              <option>WELLSKY-ELIGIBILITY</option>
              <option>HCHB-AUTH</option>
              <option>HCHB-CLAIMS-TO-INVSTAR</option>
            </select>

            <select className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>Workflow Variant</option>
              <option>ELIGIBILITY</option>
              <option>AUTHORIZATIONS</option>
              <option>CLAIMS PROCESSING</option>
            </select>

            <select className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>Variant Version</option>
              <option>v1.0</option>
              <option>v1.1</option>
              <option>v2.0</option>
            </select>

            <select className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>Alert Type</option>
              <option>Critical</option>
              <option>Warning</option>
              <option>Info</option>
            </select>

            <select className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>Gateway</option>
              <option>API Gateway</option>
              <option>Web Gateway</option>
            </select>

            <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Tickets Section */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* KPI Cards - Horizontal */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                  <Inbox className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{tickets.length}</div>
                  <div className="text-xs font-medium text-gray-600">Total Tickets</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-green-600">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{tickets.filter(t => t.status === 'Closed').length}</div>
                  <div className="text-xs font-medium text-gray-600">Closed</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{tickets.filter(t => t.status === 'In Progress').length}</div>
                  <div className="text-xs font-medium text-gray-600">In Progress</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{tickets.filter(t => t.severity === 'Critical').length}</div>
                  <div className="text-xs font-medium text-gray-600">With Alerts</div>
                </div>
              </div>
            </div>

            {/* Tickets Table */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-50 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <div className="col-span-1">ARE ID</div>
                  <div className="col-span-3">Title</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Severity</div>
                  <div className="col-span-1">FD Ticket</div>
                  <div className="col-span-2">Client/Tenants</div>
                  <div className="col-span-1">Created</div>
                  <div className="col-span-2">Latest Activity</div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-100">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.areId}
                    className={`grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer border-l-4 ${getSeverityColor(ticket.severity)}`}
                  >
                    {/* ARE ID */}
                    <div className="col-span-1 flex items-center">
                      <span className="text-sm font-semibold text-blue-600">{ticket.areId}</span>
                    </div>

                    {/* Title */}
                    <div className="col-span-3 flex items-center">
                      <span className="text-sm text-gray-900 line-clamp-1">{ticket.title}</span>
                    </div>

                    {/* Status */}
                    <div className="col-span-1 flex items-center">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </div>

                    {/* Severity */}
                    <div className="col-span-1 flex items-center">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getSeverityBadge(ticket.severity)}`}>
                        {ticket.severity}
                      </span>
                    </div>

                    {/* FD Ticket */}
                    <div className="col-span-1 flex items-center">
                      <span className="text-sm text-gray-700">{ticket.fdTicket}</span>
                    </div>

                    {/* Client/Tenants */}
                    <div className="col-span-2 flex items-center gap-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                        {ticket.tenantCount} Tenants
                      </span>
                      <div className="relative">
                        <span
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800 cursor-help"
                          onMouseEnter={() => setHoveredWfChip(ticket.areId)}
                          onMouseLeave={() => setHoveredWfChip(null)}
                        >
                          {ticket.wfCount} WFs
                        </span>
                        {hoveredWfChip === ticket.areId && (
                          <div className="absolute z-10 left-0 top-full mt-1 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg">
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

                    {/* Created */}
                    <div className="col-span-1 flex items-center">
                      <span className="text-sm text-gray-600">{ticket.created}</span>
                    </div>

                    {/* Latest Activity */}
                    <div className="col-span-2 flex items-center gap-2">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <User className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-gray-900">{ticket.latestActivity.person}</div>
                          <div className="text-xs text-gray-500 truncate">{ticket.latestActivity.note}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ask ARE Chat Panel */}
          <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-sm font-semibold text-gray-900">Ask ARE Chat</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 font-medium">Online</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">Screen context-aware AI assistant</p>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-700">
                  👋 <strong>Hello!</strong> I'm ARE Assistant. I can answer questions about all tickets, workflows, tenants, subtask progress, and team activity. How can I help?
                </p>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask about tickets…"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
