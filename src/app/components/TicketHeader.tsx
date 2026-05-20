import { ArrowLeft } from 'lucide-react';

export function TicketHeader() {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="size-4" />
              <span className="text-sm">Back to tickets</span>
            </button>
            
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-semibold text-gray-900">
                FD:001 · Login timeout issue
              </h1>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                In Progress
              </span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
              P1
            </span>
            
            <div className="flex items-center gap-4 text-sm">
              <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
                ARE – Prod
              </span>
              <span className="text-gray-600">
                Assigned to: <span className="font-medium text-gray-900">L2 – App Team</span>
              </span>
            </div>
            
            <div className="text-xs text-gray-500">
              <div>Created: Jan 14, 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}