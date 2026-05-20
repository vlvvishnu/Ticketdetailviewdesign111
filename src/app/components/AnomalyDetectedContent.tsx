import { useState } from 'react';
import { AlertTriangle, TrendingDown, CheckCircle } from 'lucide-react';
import { AffectedTransactionTable } from './MonitorPanel';

type Tab = 'alert-details' | 'historical-data' | 'transactions-affected';

export function AnomalyDetectedContent() {
  const [activeTab, setActiveTab] = useState<Tab>('alert-details');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'alert-details', label: 'Alert Details' },
    { id: 'historical-data', label: 'Historical Data' },
    { id: 'transactions-affected', label: 'Transactions Affected' }
  ];

  return (
    <div className="bg-white h-full min-h-0 flex flex-col rounded-[14px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 px-6 py-5 border-b border-gray-200" style={{ backgroundImage: 'linear-gradient(175.185deg, rgb(254, 242, 242) 0%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 100%)' }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-4 h-4 text-red-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#333333]">S881 | Anomaly Detected</h2>
            <p className="text-sm text-[#4a5565]">Automated anomaly detection — read-only</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex-shrink-0 border-b border-gray-200 px-6">
        <div className="flex gap-0">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#354eb4] text-[#354eb4]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 min-h-0 overflow-auto">
        {activeTab === 'alert-details' && <AlertDetailsTab />}
        {activeTab === 'historical-data' && <HistoricalDataTab />}
        {activeTab === 'transactions-affected' && (
          <div className="h-full flex flex-col">
            <AffectedTransactionTable />
          </div>
        )}
      </div>
    </div>
  );
}

function AlertDetailsTab() {
  return (
    <div className="p-6 space-y-5">
      {/* Red Anomaly Banner */}
      <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-base font-semibold text-red-800 mb-3">Rate Anomaly Detected</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
              <div className="flex gap-2"><span className="text-red-500 font-medium w-20 flex-shrink-0">Client</span><span className="text-red-800">Moments</span></div>
              <div className="flex gap-2"><span className="text-red-500 font-medium w-20 flex-shrink-0">Workflow</span><span className="text-red-800">Physician / Facility Notification</span></div>
              <div className="flex gap-2"><span className="text-red-500 font-medium w-20 flex-shrink-0">Gateway</span><span className="text-red-800">unknown</span></div>
              <div className="flex gap-2"><span className="text-red-500 font-medium w-20 flex-shrink-0">Type</span><span className="text-red-800">unknown</span></div>
              <div className="flex gap-2 col-span-2"><span className="text-red-500 font-medium w-20 flex-shrink-0">Window</span><span className="text-red-800">Thursday 07:00 – 08:00 UTC</span></div>
            </div>
            <div className="flex gap-6 mt-3 pt-3 border-t border-red-200">
              <div><span className="text-red-500 text-xs font-medium">Success Rate</span><p className="text-red-800 font-bold text-lg">70.00%</p></div>
              <div><span className="text-red-500 text-xs font-medium">Termination Rate</span><p className="text-red-800 font-bold text-lg">20%</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Primary Signals */}
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Primary Signals (Rate Based)</p>
          <div className="space-y-3">
            {[
              { label: 'Success Rate', value: 70, display: '70.00%', badge: 'Normal', badgeColor: 'bg-green-100 text-green-700' },
              { label: 'Termination Rate', value: 20, display: '20%', badge: 'Normal', badgeColor: 'bg-green-100 text-green-700' },
              { label: 'Failed Rate', value: 10, display: '10%', badge: 'A Spike', badgeColor: 'bg-red-100 text-red-700' },
              { label: 'Needs Intervention', value: 0, display: '0%', badge: 'Normal', badgeColor: 'bg-green-100 text-green-700' }
            ].map(sig => (
              <div key={sig.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">{sig.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">{sig.display}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${sig.badgeColor}`}>{sig.badge}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${sig.badge === 'A Spike' ? 'bg-red-500' : sig.label === 'Success Rate' ? 'bg-blue-500' : 'bg-orange-400'}`}
                    style={{ width: `${sig.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Breakdown */}
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Input Breakdown</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Total', value: 10, color: 'bg-gray-100 text-gray-700' },
              { label: 'Successful', value: 7, color: 'bg-green-50 text-green-700' },
              { label: 'Terminated', value: 2, color: 'bg-orange-50 text-orange-700' },
              { label: 'Failed', value: 1, color: 'bg-red-50 text-red-700' },
              { label: 'Needs Intervention', value: 0, color: 'bg-blue-50 text-blue-700' }
            ].map(item => (
              <div key={item.label} className={`rounded-lg p-3 text-center ${item.color}`}>
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Context Signals */}
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Context Signals</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Throughput Efficiency</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-gray-900">92%</span>
                <span className="text-xs text-gray-500">current</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">Expected: &gt; 100%</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <TrendingDown className="w-8 h-8 text-orange-500" />
              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium">Degraded</span>
            </div>
          </div>
        </div>

        {/* Backend Failure Signals */}
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Backend Failure Signals</p>
          <div className="space-y-2">
            {[
              { code: 'ES_FB_PROCESSAUTHORIZATIONTASKSFROMWORKFLOWCONSOLE_BE_105', count: 9 },
              { code: 'ES_FB_MAINTAINFACILITY_TIMEOUT_BE_203', count: 4 },
              { code: 'ES_FB_INCLEXCL_VALIDATION_BE_301', count: 3 }
            ].map(item => (
              <div key={item.code} className="flex items-start justify-between gap-2">
                <code className="text-xs text-red-700 bg-red-50 px-1.5 py-0.5 rounded font-mono break-all">{item.code}</code>
                <span className="text-xs font-semibold text-gray-700 flex-shrink-0">{item.count} records</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Termination Reasons */}
      <div className="rounded-xl border border-gray-200 p-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Termination Reasons</p>
        <div className="space-y-2">
          {[
            { reason: 'No records retrieved in Workflow Console', pct: 33, top: true },
            { reason: 'Unable to access Maintain Facility', pct: 33, top: false },
            { reason: 'The Physician/Facility is in Inclusion/Exclusion list', pct: 33, top: false }
          ].map(item => (
            <div key={item.reason} className="flex items-center gap-3">
              <div className="flex-1 flex items-center gap-2">
                <span className="text-sm text-gray-700">{item.reason}</span>
                {item.top && <span className="text-xs px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 font-medium flex-shrink-0">TOP</span>}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-20 bg-gray-100 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full bg-orange-400" style={{ width: `${item.pct}%` }} />
                </div>
                <span className="text-xs font-semibold text-gray-700 w-8">{item.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Checks */}
      <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-3">Suggested Checks</p>
        <ol className="space-y-2">
          {[
            'Verify Physician/Facility records are correctly configured and not in Exclusion list',
            'Check Maintain Facility access permissions and service availability',
            'Review Workflow Console for missing or stale authorization task entries',
            'Inspect throughput degradation — confirm if payer portal rate limits are in effect'
          ].map((check, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-200 text-blue-700 font-bold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
              {check}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function HistoricalDataTab() {
  const columns = [
    { label: 'LATEST', date: '2026-04-02' },
    { label: '2026-03-26' },
    { label: '2026-03-19' },
    { label: '2026-02-26' },
    { label: '2026-02-19' },
    { label: '2026-02-12' },
    { label: '2026-02-05' },
    { label: '2026-01-29' }
  ];

  const rows: { metric: string; values: { val: string; highlight?: 'red' | 'orange' | 'green' | 'gray' }[] }[] = [
    {
      metric: 'Success Rate',
      values: [
        { val: '77.78%', highlight: 'green' },
        { val: '83.33%', highlight: 'green' },
        { val: '5.38%', highlight: 'red' },
        { val: '70.00%', highlight: 'orange' },
        { val: '100.00%', highlight: 'green' },
        { val: '75.00%', highlight: 'green' },
        { val: '100.00%', highlight: 'green' },
        { val: '90.91%', highlight: 'green' }
      ]
    },
    {
      metric: 'Termination Rate',
      values: [
        { val: '22.22%', highlight: 'orange' },
        { val: '16.67%', highlight: 'orange' },
        { val: '94.62%', highlight: 'red' },
        { val: '30.00%', highlight: 'orange' },
        { val: '0.00%', highlight: 'gray' },
        { val: '25.00%', highlight: 'orange' },
        { val: '0.00%', highlight: 'gray' },
        { val: '9.09%', highlight: 'gray' }
      ]
    },
    {
      metric: 'Failure Rate',
      values: [
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' }
      ]
    },
    {
      metric: 'Needs Intervention Rate',
      values: [
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' },
        { val: '0.00%', highlight: 'gray' }
      ]
    },
    {
      metric: 'Volume',
      values: [
        { val: '9', highlight: 'gray' },
        { val: '12', highlight: 'gray' },
        { val: '93', highlight: 'orange' },
        { val: '10', highlight: 'gray' },
        { val: '7', highlight: 'gray' },
        { val: '4', highlight: 'gray' },
        { val: '4', highlight: 'gray' },
        { val: '11', highlight: 'gray' }
      ]
    },
    {
      metric: 'Throughput Efficiency',
      values: [
        { val: '100%', highlight: 'green' },
        { val: '100%', highlight: 'green' },
        { val: '45%', highlight: 'red' },
        { val: '100%', highlight: 'green' },
        { val: '100%', highlight: 'green' },
        { val: '100%', highlight: 'green' },
        { val: '100%', highlight: 'green' },
        { val: '100%', highlight: 'green' }
      ]
    }
  ];

  const highlightClass = (h?: 'red' | 'orange' | 'green' | 'gray') => {
    switch (h) {
      case 'red': return 'bg-red-50 text-red-700 font-semibold';
      case 'orange': return 'bg-orange-50 text-orange-700 font-semibold';
      case 'green': return 'bg-green-50 text-green-700';
      case 'gray': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-6">
      <div className="rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wider whitespace-nowrap">Metric</th>
              {columns.map((col, i) => (
                <th key={i} className={`px-3 py-3 text-center text-xs font-semibold uppercase tracking-wider whitespace-nowrap ${i === 0 ? 'text-[#354eb4]' : 'text-[#6b7280]'}`}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {rows.map(row => (
              <tr key={row.metric} className="hover:bg-[#f9fafb]">
                <td className="px-4 py-3 text-sm font-medium text-gray-800 whitespace-nowrap">{row.metric}</td>
                {row.values.map((cell, i) => (
                  <td key={i} className={`px-3 py-3 text-center text-sm rounded-sm ${highlightClass(cell.highlight)}`}>
                    {cell.val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-red-100 border border-red-300" /><span className="text-xs text-gray-500">Anomalous</span></div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-orange-100 border border-orange-300" /><span className="text-xs text-gray-500">Elevated</span></div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-green-100 border border-green-300" /><span className="text-xs text-gray-500">Normal</span></div>
      </div>
    </div>
  );
}