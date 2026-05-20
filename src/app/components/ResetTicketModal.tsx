import { X, AlertTriangle } from 'lucide-react';

interface ResetTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  ticketId: string;
  isResetting?: boolean;
}

export function ResetTicketModal({ isOpen, onClose, onConfirm, ticketId, isResetting = false }: ResetTicketModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-red-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-full">
              <AlertTriangle className="size-5 text-red-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Reset Ticket</h2>
          </div>
          <button
            onClick={onClose}
            disabled={isResetting}
            className="p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50"
          >
            <X className="size-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="space-y-4">
            <p className="text-gray-700">
              Are you sure you want to reset <span className="font-semibold text-gray-900">{ticketId}</span>?
            </p>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800 font-medium mb-2">This action will permanently delete:</p>
              <ul className="text-sm text-amber-700 space-y-1 ml-4 list-disc">
                <li>All subtasks and their data</li>
                <li>All table records and entries</li>
                <li>All alerts and alert history</li>
                <li>Complete activity timeline</li>
                <li>All completion states</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800 font-semibold">
                ⚠️ This action cannot be undone
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={onClose}
            disabled={isResetting}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isResetting}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isResetting ? (
              <>
                <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Resetting...
              </>
            ) : (
              'Reset Ticket'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
