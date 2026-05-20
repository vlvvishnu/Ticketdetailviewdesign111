import { useState, useEffect } from 'react';
import { X, Search, Plus, Calendar } from 'lucide-react';
import { DatadogRecord } from './DatadogValidationTable';

interface DatadogValidationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (records: DatadogRecord[]) => void;
  availableRecords: DatadogRecord[];
  existingRecords: DatadogRecord[];
  prefilledTenant?: string;
  prefilledWorkflow?: string;
  prefilledVariant?: string;
}

export function DatadogValidationModal({
  isOpen,
  onClose,
  onAdd,
  availableRecords,
  existingRecords,
  prefilledTenant,
  prefilledWorkflow,
  prefilledVariant
}: DatadogValidationModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [workflowFilter, setWorkflowFilter] = useState('All Workflows');
  const [tenantFilter, setTenantFilter] = useState('All Tenants');
  const [variantFilter, setVariantFilter] = useState('All Variants');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedRecords, setSelectedRecords] = useState<Set<string>>(new Set());
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredRecords, setFilteredRecords] = useState<DatadogRecord[]>([]);

  useEffect(() => {
    if (isOpen) {
      setHasSearched(false);
      setFilteredRecords([]);
      setSelectedRecords(new Set());
      setFromDate('2025-01-07');
      setToDate('2025-01-14');
      if (prefilledWorkflow) {
        const matchedWorkflow = availableRecords.find(r => r.workflow?.includes(prefilledWorkflow));
        if (matchedWorkflow?.workflow) {
          setWorkflowFilter(matchedWorkflow.workflow);
        }
      }
      if (prefilledTenant) setTenantFilter(prefilledTenant);
      if (prefilledVariant) setVariantFilter(prefilledVariant);
    }
  }, [isOpen, prefilledWorkflow, prefilledTenant, prefilledVariant, availableRecords]);

  if (!isOpen) return null;

  const existingIds = new Set((existingRecords || []).map(r => r.id));
  const availableToAdd = availableRecords.filter(r => !existingIds.has(r.id));

  const workflows = ['All Workflows', ...Array.from(new Set(availableRecords.map(r => r.workflow).filter(Boolean)))];
  const tenants = ['All Tenants', 'Brightstar Care', 'Acmecorp', 'Globex'];
  const variants = ['All Variants', 'Homehealth', 'Hospice', 'V1', 'V2'];

  const handleSearch = () => {
    const results = availableToAdd.filter(record => {
      const matchesSearch = searchTerm === '' ||
        record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.mrNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.episodeName?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesWorkflow = workflowFilter === 'All Workflows' || record.workflow === workflowFilter;
      const matchesTenant = tenantFilter === 'All Tenants' || record.tenant === tenantFilter;
      const matchesVariant = variantFilter === 'All Variants' || record.variant === variantFilter;

      const matchesFrom = !fromDate || (record.transactionDate && record.transactionDate >= fromDate);
      const matchesTo = !toDate || (record.transactionDate && record.transactionDate <= toDate);

      return matchesSearch && matchesWorkflow && matchesTenant && matchesVariant && matchesFrom && matchesTo;
    });

    setFilteredRecords(results);
    setHasSearched(true);
    setSelectedRecords(new Set());
  };

  const handleToggleRecord = (recordId: string) => {
    const newSelected = new Set(selectedRecords);
    if (newSelected.has(recordId)) {
      newSelected.delete(recordId);
    } else {
      newSelected.add(recordId);
    }
    setSelectedRecords(newSelected);
  };

  const handleToggleAll = () => {
    if (selectedRecords.size === filteredRecords.length) {
      setSelectedRecords(new Set());
    } else {
      setSelectedRecords(new Set(filteredRecords.map(r => r.id)));
    }
  };

  const handleAddSelected = () => {
    const recordsToAdd = availableRecords.filter(r => selectedRecords.has(r.id));
    onAdd(recordsToAdd);
    setSelectedRecords(new Set());
    setSearchTerm('');
    setWorkflowFilter('All Workflows');
    setTenantFilter('All Tenants');
    setVariantFilter('All Variants');
    setFromDate('');
    setToDate('');
    setHasSearched(false);
    setFilteredRecords([]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terminated':
        return { bg: '#fff7e6', text: '#fa8c16', border: '#ffd591' };
      case 'Failed':
        return { bg: '#fff1f0', text: '#ff4d4f', border: '#ffccc7' };
      case 'Needs Intervention':
        return { bg: '#e6f7ff', text: '#1890ff', border: '#91d5ff' };
      default:
        return { bg: '#f5f5f5', text: '#595959', border: '#d9d9d9' };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-[1100px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
          <h2 className="text-xl font-semibold text-gray-900">Add Records for Evidence Package</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="size-5 text-gray-500" />
          </button>
        </div>

        {/* Filters */}
        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0 space-y-3">
          {/* Row 1: Search + dropdowns */}
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Patient Name, Episode Name, or MRN..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={tenantFilter}
              onChange={(e) => setTenantFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[140px]"
            >
              {tenants.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select
              value={workflowFilter}
              onChange={(e) => setWorkflowFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[160px]"
            >
              {workflows.map(w => <option key={w} value={w}>{w}</option>)}
            </select>
            <select
              value={variantFilter}
              onChange={(e) => setVariantFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[130px]"
            >
              {variants.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>

          {/* Row 2: Date range + Search button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="size-4 text-gray-400 shrink-0" />
              <span className="font-medium text-gray-600 whitespace-nowrap">Date Period:</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-500 whitespace-nowrap">From</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-500 whitespace-nowrap">To</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                min={fromDate || undefined}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1" />
            <button
              onClick={handleSearch}
              className="flex items-center gap-2 px-5 py-2 bg-[#354eb4] text-white rounded-lg hover:bg-[#2d4299] transition-colors text-sm font-medium"
            >
              <Search className="size-4" />
              Search
            </button>
          </div>
        </div>

        {/* Table / Empty state */}
        <div className="flex-1 overflow-auto px-6 py-4">
          {!hasSearched ? (
            <div className="flex items-center justify-center h-56 text-gray-400">
              <div className="text-center">
                <Search className="size-12 text-gray-200 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-500">Set your filters and click Search</p>
                <p className="text-xs text-gray-400 mt-1">Results will appear here for you to select and add</p>
              </div>
            </div>
          ) : filteredRecords.length === 0 ? (
            <div className="flex items-center justify-center h-56 text-gray-500">
              <div className="text-center">
                <Search className="size-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm">No records found matching your filters</p>
                <p className="text-xs text-gray-400 mt-1">Try adjusting the date range or other filters</p>
              </div>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                  <tr>
                    <th className="px-4 py-3 text-left w-10">
                      <input
                        type="checkbox"
                        checked={selectedRecords.size === filteredRecords.length && filteredRecords.length > 0}
                        onChange={handleToggleAll}
                        className="size-4 rounded border-[#d1d5db] text-[#354eb4] focus:ring-[#354eb4] focus:ring-offset-0"
                      />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">Transaction ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">MR Number</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">Patient Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">Episode Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">Workflow</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">Probable Reason</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRecords.map((record) => (
                    <tr
                      key={record.id}
                      className={`hover:bg-[#f9fafb] cursor-pointer transition-colors ${
                        selectedRecords.has(record.id) ? 'bg-[#eff6ff]' : ''
                      }`}
                      onClick={() => handleToggleRecord(record.id)}
                    >
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selectedRecords.has(record.id)}
                          onChange={() => handleToggleRecord(record.id)}
                          className="size-4 rounded border-[#d1d5db] text-[#354eb4] focus:ring-[#354eb4] focus:ring-offset-0"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-[#111827]">{record.transactionId}</td>
                      <td className="px-4 py-3 text-sm text-[#2563eb] font-medium">{record.mrNumber}</td>
                      <td className="px-4 py-3 text-sm text-[#111827]">{record.patientName}</td>
                      <td className="px-4 py-3 text-sm text-[#374151]">{record.episodeName || '—'}</td>
                      <td className="px-4 py-3 text-sm text-[#374151] whitespace-nowrap">{record.transactionDate || '—'}</td>
                      <td className="px-4 py-3 text-sm text-[#374151]">{record.workflow || '—'}</td>
                      <td className="px-4 py-3">
                        <span
                          className="inline-flex px-2 py-0.5 text-xs font-medium rounded border"
                          style={{
                            backgroundColor: getStatusColor(record.status).bg,
                            color: getStatusColor(record.status).text,
                            borderColor: getStatusColor(record.status).border
                          }}
                        >
                          {record.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#374151]">{record.probableReason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between flex-shrink-0">
          <div className="text-sm text-gray-600">
            {hasSearched
              ? `${filteredRecords.length} result${filteredRecords.length !== 1 ? 's' : ''} · ${selectedRecords.size} selected`
              : 'No search run yet'}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleAddSelected}
              disabled={selectedRecords.size === 0}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="size-4" />
              Add to Subtask ({selectedRecords.size})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}