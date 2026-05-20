import { Clock, ExternalLink, ArrowLeft } from 'lucide-react';

interface TicketInfoBarProps {
  isActivityOpen: boolean;
  onToggleActivity: () => void;
  ticketId?: string;
  ticketTitle?: string;
  onBackClick?: () => void;
  isView2?: boolean;
  fdId?: string;
  fdStatus?: string;
  fdTitle?: string;
}

export function TicketInfoBar({ isActivityOpen, onToggleActivity, ticketId = 'ARE-T101', ticketTitle, onBackClick, isView2, fdId, fdStatus, fdTitle }: TicketInfoBarProps) {
  if (isView2) {
    const statusBadgeClass =
      fdStatus === 'In Progress'
        ? 'bg-gradient-to-r from-blue-500 to-blue-600'
        : fdStatus === 'Closed'
        ? 'bg-gradient-to-r from-gray-400 to-gray-500'
        : 'bg-gradient-to-r from-emerald-500 to-emerald-600';

    return (
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left: FD ID as primary header */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                {onBackClick && (
                  <button
                    onClick={onBackClick}
                    className="text-gray-400 hover:text-gray-700 transition-colors p-1 hover:bg-gray-100 rounded"
                    title="Back to tickets"
                  >
                    <ArrowLeft className="size-5" />
                  </button>
                )}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-[#354eb4] leading-tight">
                      {fdId || ticketId}
                    </h1>
                    <button className="text-gray-400 hover:text-[#354eb4] transition-colors">
                      <ExternalLink className="size-4" />
                    </button>
                  </div>
                  {(fdTitle || ticketTitle) && (
                    <p className="text-sm text-gray-500 leading-tight mt-0.5">{fdTitle || ticketTitle}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-white text-xs font-semibold shadow-sm ${statusBadgeClass}`}>
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                  {fdStatus || 'Open'}
                </span>
              </div>
            </div>

            {/* Right: Created date only (FD info removed since it's the primary header) */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="size-4 text-gray-400" />
                  <span className="text-gray-500">Created:</span>
                  <span className="font-medium text-gray-900">10/13/2025 10:53PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Ticket ID and Badges */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              {onBackClick && (
                <button
                  onClick={onBackClick}
                  className="text-gray-400 hover:text-gray-700 transition-colors p-1 hover:bg-gray-100 rounded"
                  title="Back to tickets"
                >
                  <ArrowLeft className="size-5" />
                </button>
              )}
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-[#333333] leading-tight">
                  {ticketId}
                </h1>
                {ticketTitle && (
                  <p className="text-sm text-gray-500 leading-tight mt-0.5">{ticketTitle}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-semibold shadow-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                Open
              </span>
            </div>
          </div>

          {/* Right: Ticket Metadata and Actions */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-gray-500">FD Ticket:</span>
                <span className="font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded">270cG4c5</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <ExternalLink className="size-3.5" />
                </button>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="size-4 text-gray-400" />
                <span className="text-gray-500">Created:</span>
                <span className="font-medium text-gray-900">10/13/2025 10:53PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}