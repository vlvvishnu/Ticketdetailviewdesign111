import { useState } from 'react';
import { ExternalLink, Filter, Inbox, Search } from 'lucide-react';
import { LeftSidebar } from './LeftSidebar';
import svgPaths from '@/imports/Frame1410084320/svg-gty1oqsfxl';

interface ARETicketRow {
  areId: string;
  title: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  fdTicket: string;
  tenants: string[];
  workflows: string[];
  events: number;
  successRate: number;
  created: string;
  latestActivity: string;
}

interface FDGroup {
  fdId: string;
  fdDisplayId: string;
  fdStatus: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  areTickets: ARETicketRow[];
}

interface TicketView2ListingPageProps {
  onFDTicketClick: (fdId: string, areId?: string) => void;
  onNavigate?: (view: string) => void;
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

const FD_GROUPS: FDGroup[] = [
  {
    fdId: 'FD-270cG4c5',
    fdDisplayId: '270cG4c5',
    fdStatus: 'Open',
    areTickets: [
      {
        areId: 'ARE-T101',
        title: 'Rate Anomaly: Moments',
        status: 'Open',
        severity: 'High',
        fdTicket: '270cG4c5',
        tenants: ['Moments'],
        workflows: ['PHYSICIAN-FACILITY-NOTIFICATION'],
        events: 20,
        successRate: 70.00,
        created: '10/13/2025 10:53PM',
        latestActivity: 'Completed RCA identification'
      }
    ]
  },
  {
    fdId: 'FD-278a83x1',
    fdDisplayId: '278a83x1',
    fdStatus: 'In Progress',
    areTickets: [
      {
        areId: 'ARE-T098',
        title: 'Pause/Resume App Worker',
        status: 'In Progress',
        severity: 'Critical',
        fdTicket: '278a83x1',
        tenants: ['Archcare'],
        workflows: ['HCHB-AUTH'],
        events: 34,
        successRate: 48.00,
        created: '10/11/2025 9:20AM',
        latestActivity: 'Completed RCA identification'
      },
      {
        areId: 'ARE-T097',
        title: 'Terminate Workflow',
        status: 'In Progress',
        severity: 'High',
        fdTicket: '278a83x1',
        tenants: ['Arden'],
        workflows: ['WELLSKY-AUTH'],
        events: 12,
        successRate: 55.00,
        created: '10/11/2025 11:00AM',
        latestActivity: 'Completed RCA identification'
      }
    ]
  },
  {
    fdId: 'FD-269cD8m4',
    fdDisplayId: '269cD8m4',
    fdStatus: 'Resolved',
    areTickets: [
      {
        areId: 'ARE-T095',
        title: 'Credential Management',
        status: 'Resolved',
        severity: 'Medium',
        fdTicket: '269cD8m4',
        tenants: ['MedCore'],
        workflows: ['INSURANCE-ELIGIBILITY'],
        events: 9,
        successRate: 82.00,
        created: '10/08/2025 3:45PM',
        latestActivity: 'Completed RCA identification'
      }
    ]
  },
  {
    fdId: 'FD-267mH5p2',
    fdDisplayId: '267mH5p2',
    fdStatus: 'In Progress',
    areTickets: [
      {
        areId: 'ARE-T091',
        title: 'Enable/Disable WF Trigger',
        status: 'Open',
        severity: 'High',
        fdTicket: '267mH5p2',
        tenants: ['Archcare', 'Arden', 'Brightspring', 'Continuum'],
        workflows: ['WELLSKY-ELIGIBILITY', 'HCHB-AUTH', 'HCHB-CLAIMS', 'MATRIX-BILLING', 'WELLSKY-IMMAT', 'WELLSKY-AUTH', '7NEED-EXTRACT', 'MATRIX-SYNC', 'HCHB-IMMAT', 'WELLSKY-CLAIMS'],
        events: 17,
        successRate: 61.00,
        created: '10/05/2025 7:10PM',
        latestActivity: 'Completed RCA identification'
      },
      {
        areId: 'ARE-T087',
        title: 'Pause/Resume App Worker',
        status: 'Closed',
        severity: 'Low',
        fdTicket: '267mH5p2',
        tenants: ['Archcare', 'Arden', 'Brightspring', 'Continuum', 'Delta Care', 'Zelis Health'],
        workflows: ['WELLSKY-ELIGIBILITY', 'HCHB-AUTH', 'HCHB-CLAIMS', 'MATRIX-BILLING', 'WELLSKY-IMMAT', 'WELLSKY-AUTH', '7NEED-EXTRACT', 'MATRIX-SYNC', 'HCHB-IMMAT', 'WELLSKY-CLAIMS', 'WELLSKY-CLAIMS-2', 'HCHB-IMMAT-2', 'WELLSKY-AUTH-2', 'HCHB-AUTH-2', 'WELLSKY-CLAIMS-3'],
        events: 15,
        successRate: 91.00,
        created: '09/30/2025 1:22PM',
        latestActivity: 'Completed RCA identification'
      },
      {
        areId: 'ARE-T084',
        title: 'State Management',
        status: 'In Progress',
        severity: 'Critical',
        fdTicket: '267mH5p2',
        tenants: ['Archcare', 'Arden', 'Brightspring', 'Continuum', 'Delta Care', 'Zelis Health', 'Apex Health', 'MedCore'],
        workflows: ['WELLSKY-ELIGIBILITY', 'HCHB-AUTH', 'HCHB-CLAIMS', 'MATRIX-BILLING', 'WELLSKY-IMMAT', 'WELLSKY-AUTH', '7NEED-EXTRACT', 'MATRIX-SYNC', 'HCHB-IMMAT', 'WELLSKY-CLAIMS', 'WELLSKY-CLAIMS-2', 'HCHB-IMMAT-2', 'WELLSKY-AUTH-2', 'HCHB-AUTH-2', 'WELLSKY-CLAIMS-3', 'WELLSKY-CLAIMS-4', 'MATRIX-BILLING-2'],
        events: 28,
        successRate: 39.00,
        created: '09/27/2025 11:05AM',
        latestActivity: 'Completed RCA identification'
      }
    ]
  }
];

const STATUS_ROW_STYLE: Record<string, string> = {
  'Open': 'bg-[#ECFDF3] text-[#12B76A] border border-[#ABEFC6]',
  'In Progress': 'bg-[#FFF7ED] text-[#F79009] border border-[#FED7AA]',
  'Resolved': 'bg-[#EFF6FF] text-[#3B82F6] border border-[#BFDBFE]',
  'Closed': 'bg-[#F2F4F7] text-[#667085] border border-[#D0D5DD]',
};

const STATUS_DOT: Record<string, string> = {
  'Open': 'bg-emerald-500',
  'In Progress': 'bg-amber-500',
  'Resolved': 'bg-blue-500',
  'Closed': 'bg-gray-400',
};

const SEVERITY_STYLE: Record<string, string> = {
  'Critical': 'bg-[#FEE2E2] text-[#DC2626]',
  'High': 'bg-[#FEF3C7] text-[#D97706]',
  'Medium': 'bg-[#E0E7FF] text-[#4F46E5]',
  'Low': 'bg-[#DCFCE7] text-[#16A34A]',
};

function getSuccessRateStyle(rate: number) {
  if (rate >= 80) return 'text-[#12B76A]';
  if (rate >= 60) return 'text-[#F79009]';
  return 'text-[#F04438]';
}

function formatCountLabel(count: number, singular: string, plural: string) {
  const value = count.toString().padStart(2, '0');
  return `${value} ${count === 1 ? singular : plural}`;
}

export function TicketView2ListingPage({ onFDTicketClick, onNavigate }: TicketView2ListingPageProps) {
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleGroup = (fdId: string) => {
    setCollapsedGroups(prev => {
      const next = new Set(prev);
      if (next.has(fdId)) next.delete(fdId);
      else next.add(fdId);
      return next;
    });
  };

  const totalTickets = FD_GROUPS.reduce((sum, g) => sum + g.areTickets.length, 0);

  const filteredGroups = FD_GROUPS.map(group => ({
    ...group,
    areTickets: group.areTickets.filter(t =>
      searchTerm === '' ||
      t.areId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.tenants.some(ten => ten.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(g => g.areTickets.length > 0);

  const getGroupStatusCounts = (areTickets: ARETicketRow[]) => {
    const counts: Record<string, number> = {};
    areTickets.forEach(t => { counts[t.status] = (counts[t.status] || 0) + 1; });
    return counts;
  };

  const statusOrder: Array<ARETicketRow['status']> = ['Open', 'Closed', 'In Progress', 'Resolved'];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <LeftSidebar activeView="ticket-view-2" onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header — matches View 1 */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 h-[70px] flex items-center justify-between">
          <div className="relative h-[51px] flex-1">
            <div className="absolute left-0 rounded-[11px] w-[43px] h-[43px] top-[4px]" style={{ backgroundImage: 'linear-gradient(138.457deg, rgb(50, 75, 174) 8.6858%, rgb(32, 60, 143) 95.63%)' }}>
              <HeaderIcon />
            </div>
            <p className="absolute font-black leading-normal left-[56px] text-[23px] text-black top-0 whitespace-nowrap">ARE Tickets</p>
            <p className="absolute font-medium leading-normal left-[56px] text-[#9ca5bb] text-[16px] top-[30px] whitespace-nowrap">Ticket View 2 — Grouped by FD Ticket</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">{totalTickets} tickets across {FD_GROUPS.length} FD groups</span>
          </div>
        </div>

        {/* Filter/Search Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by ARE ID, title, tenant..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 h-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
              />
            </div>
            <button className="inline-flex items-center gap-2 px-4 h-9 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
            <div className="ml-auto flex items-center gap-2 text-xs text-gray-500">
              <button
                onClick={() => setCollapsedGroups(new Set())}
                className="px-2 py-1 rounded hover:bg-gray-100 transition-colors"
              >
                Expand All
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setCollapsedGroups(new Set(FD_GROUPS.map(g => g.fdId)))}
                className="px-2 py-1 rounded hover:bg-gray-100 transition-colors"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Main Table */}
        <div className="flex-1 overflow-hidden px-6 py-4">
          <div className="bg-transparent overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
            {/* Sticky Table Header */}
            <div className="bg-[#F8FAFC] border-b border-gray-200 sticky top-0 z-10">
              <div className="grid gap-3 px-6 h-11 items-center text-xs font-bold text-[#667085] uppercase tracking-[0.04em]" style={{ gridTemplateColumns: '160px 320px 140px 120px 120px 180px 100px 120px 160px 240px' }}>
                <div>ARE ID</div>
                <div>Title</div>
                <div>Status</div>
                <div>Severity</div>
                <div>FD Ticket</div>
                <div>Client / Tenants</div>
                <div className="text-center">Events</div>
                <div className="text-center">Success Rate</div>
                <div>Created</div>
                <div>Latest Activity</div>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto" style={{ height: 'calc(100vh - 260px)' }}>
              {filteredGroups.length === 0 ? (
                <div className="py-16 text-center">
                  <Inbox className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">No tickets match your search</p>
                </div>
              ) : (
                filteredGroups.map(group => {
                  const isCollapsed = collapsedGroups.has(group.fdId);
                  const statusCounts = getGroupStatusCounts(group.areTickets);
                  return (
                    <div key={group.fdId} className="mb-[18px] rounded-[14px] border border-[#DCE5F2] overflow-hidden bg-[#F4F7FD] shadow-none">
                      {/* FD Group Header */}
                      <div
                        className="h-[52px] flex items-center gap-2 px-[22px] border-b border-[#E2E8F0] bg-[#F4F7FD] hover:bg-[#EBF0FB] cursor-pointer select-none transition-colors"
                        onClick={() => toggleGroup(group.fdId)}
                      >
                        {/* Filled caret — right when collapsed, down when expanded */}
                        <span
                          className={`inline-block flex-shrink-0 transition-transform duration-150 ${isCollapsed ? '' : 'rotate-90'}`}
                          aria-hidden="true"
                        >
                          <span className="block w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-[#3553B7]" />
                        </span>

                        {/* FD Ticket ID */}
                        <span className="text-[14px] font-bold text-[#1E293B] flex-shrink-0">
                          PT-{group.fdDisplayId}
                        </span>

                        {/* Redirect icon */}
                        <button
                          onClick={e => { e.stopPropagation(); onFDTicketClick(group.fdId); }}
                          className="p-0.5 rounded hover:bg-white/70 transition-colors flex-shrink-0"
                          title="Open FD ticket detail"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#64748B] hover:text-blue-600" />
                        </button>

                        {/* ARE ticket count badge */}
                        <span className="inline-flex items-center justify-center h-6 w-[122px] rounded-full text-[13px] font-medium flex-shrink-0 bg-[#D9E4F3] text-[#35557A]">
                          {formatCountLabel(group.areTickets.length, 'ARE ticket', 'ARE tickets')}
                        </span>

                        {/* Status summary right next to ticket count */}
                        <div className="flex items-center gap-3 flex-wrap">
                          {statusOrder.filter(status => statusCounts[status]).map(status => (
                            <div key={status} className="flex items-center gap-1.5">
                              <div className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[status] || 'bg-gray-400'}`} />
                              <span className="text-[13px] text-[#667085] font-medium">{statusCounts[status]} {status}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ARE Ticket Rows */}
                      {!isCollapsed && group.areTickets.map(ticket => (
                        <div
                          key={ticket.areId}
                          className="grid gap-3 px-[22px] h-[74px] border-b border-[#EEF2F6] bg-white cursor-pointer transition-colors hover:bg-[#F8FAFF] group"
                          style={{ gridTemplateColumns: '160px 320px 140px 120px 120px 180px 100px 120px 160px 240px' }}
                          onClick={() => onFDTicketClick(group.fdId, ticket.areId)}
                          onMouseEnter={() => setHoveredRow(ticket.areId)}
                          onMouseLeave={() => setHoveredRow(null)}
                        >
                          {/* ARE ID */}
                          <div className="flex items-center">
                            <span className="text-sm font-semibold text-blue-600 group-hover:underline">{ticket.areId}</span>
                          </div>

                          {/* Title */}
                          <div className="flex items-center">
                            <span className="text-[15px] font-medium text-[#1F2937] truncate">{ticket.title}</span>
                          </div>

                          {/* Status */}
                          <div className="flex items-center">
                            <span className={`inline-flex items-center gap-1.5 h-[26px] px-3 rounded-full text-[13px] font-medium ${STATUS_ROW_STYLE[ticket.status]}`}>
                              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${STATUS_DOT[ticket.status]}`} />
                              {ticket.status}
                            </span>
                          </div>

                          {/* Severity */}
                          <div className="flex items-center">
                            <span className={`inline-flex items-center h-[26px] px-3 rounded-full text-xs font-bold uppercase tracking-wide ${SEVERITY_STYLE[ticket.severity]}`}>
                              {ticket.severity}
                            </span>
                          </div>

                          {/* FD Ticket */}
                          <div className="flex items-center">
                            <span className="text-xs text-gray-500 font-mono">{ticket.fdTicket}</span>
                          </div>

                          {/* Client / Tenants with hover tooltip */}
                          <div className="flex items-center relative">
                            <div className="flex flex-wrap gap-1">
                              <span className="inline-flex items-center h-[22px] px-2 text-xs bg-[#F2F4F7] text-[#344054] rounded-md font-semibold whitespace-nowrap">
                                {formatCountLabel(ticket.tenants.length, 'Tenant', 'Tenants')}
                              </span>
                              <span className="inline-flex items-center h-[22px] px-2 text-xs bg-[#F2F4F7] text-[#344054] rounded-md font-semibold whitespace-nowrap">
                                {formatCountLabel(ticket.workflows.length, 'WF(s)', 'WFs')}
                              </span>
                            </div>
                            {/* Hover tooltip */}
                            {hoveredRow === ticket.areId && (
                              <div className="absolute z-30 left-0 top-full mt-1 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-lg pointer-events-none">
                                <div className="font-semibold mb-2">Clients ({ticket.tenants.length}):</div>
                                <ul className="mb-3 space-y-0.5">
                                  {ticket.tenants.map((t, i) => <li key={i}>• {t}</li>)}
                                </ul>
                                <div className="font-semibold mb-2">Workflows ({ticket.workflows.length}):</div>
                                <ul className="space-y-0.5">
                                  {ticket.workflows.slice(0, 6).map((w, i) => <li key={i} className="truncate">• {w}</li>)}
                                  {ticket.workflows.length > 6 && <li className="text-gray-400">+{ticket.workflows.length - 6} more</li>}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Events */}
                          <div className="flex items-center justify-center">
                            <span className="text-sm text-gray-700">
                              <span className="font-semibold">{ticket.events}</span>
                              <span className="text-gray-400 text-xs ml-0.5">txns</span>
                            </span>
                          </div>

                          {/* Success Rate */}
                          <div className="flex items-center justify-center">
                            <span className={`text-[15px] font-bold ${getSuccessRateStyle(ticket.successRate)}`}>
                              {ticket.successRate.toFixed(2)}%
                            </span>
                          </div>

                          {/* Created */}
                          <div className="flex items-center">
                            <span className="text-xs text-gray-500 leading-tight">{ticket.created}</span>
                          </div>

                          {/* Latest Activity */}
                          <div className="flex flex-col justify-center min-w-0">
                            <span className="text-[14px] text-[#667085] font-normal truncate italic">{ticket.latestActivity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredGroups.reduce((s, g) => s + g.areTickets.length, 0)}</span> of{' '}
                <span className="font-semibold text-gray-900">{totalTickets}</span> ARE tickets across{' '}
                <span className="font-semibold text-gray-900">{filteredGroups.length}</span> FD groups
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}