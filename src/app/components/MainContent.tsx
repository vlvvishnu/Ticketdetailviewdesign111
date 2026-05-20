import { Search, Trash2, Edit3, Filter, Download, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

interface MainContentProps {
  subtaskTitle: string;
}

export function MainContent({ subtaskTitle }: MainContentProps) {
  const [filters, setFilters] = useState({
    requestId: '',
    tenant: '',
    workflow: '',
    timeRange: '',
    status: '',
    message: ''
  });

  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const allData = [
    { 
      requestId: 'REQ-1001', 
      tenant: 'LHC', 
      workflow: 'Eligibility Verification', 
      timeRange: 'Last 7 Days', 
      status: 'Complete', 
      message: 'File generated successfully' 
    },
    { 
      requestId: 'REQ-1002', 
      tenant: 'ASHN', 
      workflow: 'Amedisys Authorization', 
      timeRange: 'Last 30 Days', 
      status: 'Generating', 
      message: 'Processing request...' 
    },
    { 
      requestId: 'REQ-1003', 
      tenant: 'Elara', 
      workflow: 'Patient Review Workflow', 
      timeRange: 'Today', 
      status: 'Complete', 
      message: 'Data file ready for download' 
    },
    { 
      requestId: 'REQ-1004', 
      tenant: 'Medstar', 
      workflow: 'Eligibility Verification', 
      timeRange: 'Yesterday', 
      status: 'Failed', 
      message: 'Error: Insufficient permissions' 
    },
    { 
      requestId: 'REQ-1005', 
      tenant: 'LHC', 
      workflow: 'Credential Verification', 
      timeRange: 'Last 90 Days', 
      status: 'Complete', 
      message: 'Completed successfully' 
    },
  ];

  const filteredData = allData.filter(row => {
    return (
      row.requestId.toLowerCase().includes(filters.requestId.toLowerCase()) &&
      row.tenant.toLowerCase().includes(filters.tenant.toLowerCase()) &&
      row.workflow.toLowerCase().includes(filters.workflow.toLowerCase()) &&
      row.timeRange.toLowerCase().includes(filters.timeRange.toLowerCase()) &&
      row.status.toLowerCase().includes(filters.status.toLowerCase()) &&
      row.message.toLowerCase().includes(filters.message.toLowerCase())
    );
  });

  const handleFilterChange = (column: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [column]: value }));
  };

  const handleSelectAll = () => {
    if (selectedRows.size === filteredData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(filteredData.map((_, idx) => idx)));
    }
  };

  const handleSelectRow = (idx: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(idx)) {
      newSelected.delete(idx);
    } else {
      newSelected.add(idx);
    }
    setSelectedRows(newSelected);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col">
      {/* Card Header */}
      <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-br from-blue-50 via-white to-white flex-shrink-0">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-blue-600 mb-1">{subtaskTitle}</h2>
            <p className="text-sm text-gray-600 break-words max-w-md">Update and validate credentials for HCHB application access. Ensure all workers have proper authentication.</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
                selectedRows.size === 0 
                  ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
              }`}
              disabled={selectedRows.size === 0}
              onClick={() => alert(`Releasing credentials for ${selectedRows.size} selected row(s)`)}
            >
              Release Credential {selectedRows.size > 0 && `(${selectedRows.size})`}
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm whitespace-nowrap">
              Modify
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all border border-gray-300 whitespace-nowrap">
              Generate Data File
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                  <MoreVertical className="size-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[180px]">
                <DropdownMenuItem 
                  className="text-red-600 focus:text-red-600 cursor-pointer"
                  onClick={() => alert('Remove from list')}
                >
                  Remove from list
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto scrollbar-thin relative flex-1">
        <table className="w-full">
          <thead>
            {/* Column Headers */}
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <th className="px-4 py-3 text-left whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="custom-checkbox" checked={selectedRows.size === filteredData.length} onChange={handleSelectAll} />
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Request ID</span>
                </div>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">Tenant</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">Workflow</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">Time Range</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">Message</th>
            </tr>
            {/* Search Row */}
            <tr className="bg-white border-b border-gray-200">
              <th className="px-4 py-3 whitespace-nowrap">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder=""
                    value={filters.requestId}
                    onChange={(e) => handleFilterChange('requestId', e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
              </th>
              <th className="px-4 py-3 whitespace-nowrap">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder=""
                    value={filters.tenant}
                    onChange={(e) => handleFilterChange('tenant', e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
              </th>
              <th className="px-4 py-3 whitespace-nowrap">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder=""
                    value={filters.workflow}
                    onChange={(e) => handleFilterChange('workflow', e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
              </th>
              <th className="px-4 py-3 whitespace-nowrap">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder=""
                    value={filters.timeRange}
                    onChange={(e) => handleFilterChange('timeRange', e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
              </th>
              <th className="px-4 py-3 whitespace-nowrap">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder=""
                    value={filters.status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
              </th>
              <th className="px-4 py-3 whitespace-nowrap">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder=""
                    value={filters.message}
                    onChange={(e) => handleFilterChange('message', e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredData.map((row, idx) => (
              <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="custom-checkbox" checked={selectedRows.has(idx)} onChange={() => handleSelectRow(idx)} />
                    <span className="text-sm font-medium text-gray-900">{row.requestId}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{row.tenant}</td>
                <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{row.workflow}</td>
                <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{row.timeRange}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    row.status === 'Complete' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : row.status === 'Generating'
                      ? 'bg-blue-100 text-blue-800 border border-blue-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      row.status === 'Complete' ? 'bg-green-500' : row.status === 'Generating' ? 'bg-blue-500' : 'bg-red-500'
                    }`}></span>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">{row.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}