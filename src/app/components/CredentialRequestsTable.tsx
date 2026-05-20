import { useState, useEffect } from 'react';
import { Search, Trash2 } from 'lucide-react';

export interface CredentialRequestRow {
  id: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  application: string;
  noOfCredentials: string;
  durationForAccess: string;
  environment: string;
  submitted: string;
  status: string;
  message: string;
}

interface CredentialRequestsTableProps {
  requests: CredentialRequestRow[];
  onRemove: (ids: string[]) => void;
  onModify: () => void;
  onRelease?: (ids: string[]) => void;
  onUpdateStatus?: (ids: string[], newStatus: string, newMessage: string) => void;
  isCompleted?: boolean;
}

export function CredentialRequestsTable({ 
  requests, 
  onRemove, 
  onModify,
  onRelease,
  onUpdateStatus,
  isCompleted
}: CredentialRequestsTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchTerms, setSearchTerms] = useState({
    tenant: '',
    workflow: '',
    workflowVariant: '',
    application: '',
    noOfCredentials: '',
    durationForAccess: '',
    environment: '',
    submitted: '',
    status: '',
    message: ''
  });

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCompleted) return; // Prevent selection when completed
    if (e.target.checked) {
      setSelectedIds(requests.map(r => r.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string) => {
    if (isCompleted) return; // Prevent selection when completed
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleRemoveSelected = () => {
    if (isCompleted || selectedIds.length === 0) return; // Block removal when completed
    onRemove(selectedIds);
    setSelectedIds([]);
  };

  const handleReleaseCredential = () => {
    if (isCompleted || selectedIds.length === 0) return; // Block release when completed
    if (onRelease) {
      onRelease(selectedIds);
      setSelectedIds([]);
    }
  };

  // Auto-approve "Pending Approval" requests after 10 seconds
  useEffect(() => {
    const pendingRequests = requests.filter(r => r.status === 'Pending Approval');
    
    if (pendingRequests.length > 0 && onUpdateStatus) {
      const timers = pendingRequests.map(request => {
        return setTimeout(() => {
          // Update to Approved after 10 seconds
          onUpdateStatus([request.id], 'Approved', 'Approval approved by Ganesh');
        }, 10000); // 10 seconds
      });

      // Cleanup timers on unmount or when dependencies change
      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [requests, onUpdateStatus]);

  // Show empty state if no requests
  if (requests.length === 0) {
    return (
      <button
        onClick={onModify}
        className="bg-[#eef6ff] h-[132px] relative rounded-[3px] shrink-0 w-full border-dashed hover:bg-[#e3f0ff] transition-all cursor-pointer flex items-center justify-center"
        style={{ borderWidth: '1.75px', borderColor: '#a3caff' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#8ab9ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#a3caff';
        }}
      >
        <p className="text-[16px] text-[#538ddc] text-center px-4 max-w-[431px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Click here to add details to the ticket to manage credentials
        </p>
      </button>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={handleRemoveSelected}
          disabled={selectedIds.length === 0}
          className={`flex items-center gap-2 px-[13.6px] py-[6.4px] border rounded-[6px] transition-colors text-[12.8px] ${
            selectedIds.length === 0
              ? 'border-gray-300 text-gray-400 cursor-not-allowed'
              : 'border-red-300 text-red-600 hover:bg-red-50'
          }`}
        >
          <Trash2 style={{ width: '13.6px', height: '13.6px' }} />
          <span>Remove from list</span>
        </button>
        <button
          onClick={onModify}
          className="px-[13.6px] py-[6.4px] bg-[#354eb4] text-white rounded-[6px] hover:bg-[#2a3d8f] transition-colors text-[12.8px]"
        >
          Modify Ticket
        </button>
        <button
          onClick={handleReleaseCredential}
          disabled={selectedIds.length === 0}
          className={`px-[13.6px] py-[6.4px] rounded-[6px] transition-colors text-[12.8px] ${
            selectedIds.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#354eb4] text-white hover:bg-[#2a3d8f]'
          }`}
        >
          Release Credential
        </button>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto border border-gray-200 rounded-lg">
        <table className="w-full border-collapse table-fixed min-w-[1400px]">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[50px]">
                <input
                  type="checkbox"
                  checked={selectedIds.length === requests.length && requests.length > 0}
                  onChange={handleSelectAll}
                  className="w-4 h-4 rounded border-gray-300"
                />
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[100px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Tenant</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.tenant}
                      onChange={(e) => setSearchTerms({ ...searchTerms, tenant: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[200px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Workflow</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.workflow}
                      onChange={(e) => setSearchTerms({ ...searchTerms, workflow: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[150px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Workflow Variant</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.workflowVariant}
                      onChange={(e) => setSearchTerms({ ...searchTerms, workflowVariant: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[120px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Application</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.application}
                      onChange={(e) => setSearchTerms({ ...searchTerms, application: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[140px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">No. of Credentials</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.noOfCredentials}
                      onChange={(e) => setSearchTerms({ ...searchTerms, noOfCredentials: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[160px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Duration for Access</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.durationForAccess}
                      onChange={(e) => setSearchTerms({ ...searchTerms, durationForAccess: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[130px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Environment</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.environment}
                      onChange={(e) => setSearchTerms({ ...searchTerms, environment: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[120px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Submitted</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.submitted}
                      onChange={(e) => setSearchTerms({ ...searchTerms, submitted: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[140px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Status</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.status}
                      onChange={(e) => setSearchTerms({ ...searchTerms, status: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 text-left border-b border-gray-200 w-[200px]">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Message</span>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder=""
                      value={searchTerms.message}
                      onChange={(e) => setSearchTerms({ ...searchTerms, message: e.target.value })}
                      className="w-full pl-8 pr-2 py-1 text-xs border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50 border-b border-gray-100">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(request.id)}
                    onChange={() => handleSelectOne(request.id)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">{request.tenant}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">{request.workflow}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">{request.workflowVariant}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">{request.application}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">{request.noOfCredentials}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">{request.durationForAccess}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">{request.environment}</td>
                <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">{request.submitted}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs">
                    <div className={`w-2 h-2 rounded-full ${
                      request.status === 'Approved' ? 'bg-green-500' : 
                      request.status === 'Pending Approval' ? 'bg-orange-500' : 
                      'bg-gray-500'
                    }`}></div>
                    <span className="text-gray-900">{request.status}</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">{request.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}