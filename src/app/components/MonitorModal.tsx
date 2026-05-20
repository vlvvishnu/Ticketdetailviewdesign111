import { X } from 'lucide-react';
import { useState } from 'react';

interface MonitorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TimePeriod = 'TODAY' | 'DAILY' | 'WEEKLY' | 'MONTHLY';

interface PerformanceData {
  tenant: string;
  workflow: string;
  workflowType: string;
  period: string;
  total: number;
  inProgress: number;
  completed: number;
  failed: number;
  terminated: number;
  history: number[];
}

const mockData: PerformanceData[] = [
  {
    tenant: 'Archcare',
    workflow: 'WELLSKY-ELIGIBILITY',
    workflowType: 'ELIGIBILITY',
    period: '20 Jan 2026',
    total: 500,
    inProgress: 4,
    completed: 450,
    failed: 40,
    terminated: 6,
    history: [45, 52, 48, 55, 50, 58, 53, 60, 55, 62, 58, 70]
  },
  {
    tenant: 'Arden',
    workflow: 'HCHB-AUTH',
    workflowType: 'AUTHORIZATIONS',
    period: '20 Jan 2026',
    total: 160,
    inProgress: 1,
    completed: 144,
    failed: 12,
    terminated: 3,
    history: [12, 15, 18, 20, 17, 22, 19, 24, 21, 26, 23, 28]
  },
  {
    tenant: 'Brightspring',
    workflow: 'HCHB-CLAIMS-TO-INVSTAR',
    workflowType: 'CLAIMS PROCESSING',
    period: '20 Jan 2026',
    total: 1066,
    inProgress: 10,
    completed: 960,
    failed: 80,
    terminated: 16,
    history: [75, 82, 78, 88, 85, 95, 90, 98, 92, 102, 96, 108]
  },
  {
    tenant: 'Continuum',
    workflow: 'MATRIX-BILLING-SYNC',
    workflowType: 'CLAIMS PROCESSING',
    period: '20 Jan 2026',
    total: 1833,
    inProgress: 18,
    completed: 1650,
    failed: 140,
    terminated: 25,
    history: [130, 142, 138, 152, 145, 160, 155, 168, 158, 175, 165, 182]
  },
  {
    tenant: 'Delta Care',
    workflow: 'WELLSKY-IMMAT',
    workflowType: 'ELIGIBILITY',
    period: '20 Jan 2026',
    total: 83,
    inProgress: 0,
    completed: 75,
    failed: 6,
    terminated: 2,
    history: [5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12]
  },
  {
    tenant: 'Zelis Health',
    workflow: '7NEED-EXTRACT',
    workflowType: 'CLAIMS PROCESSING',
    period: '20 Jan 2026',
    total: 1400,
    inProgress: 13,
    completed: 1260,
    failed: 113,
    terminated: 14,
    history: [95, 105, 100, 115, 108, 125, 118, 132, 122, 138, 128, 145]
  },
  {
    tenant: 'CareCentrix',
    workflow: 'OC-PORTAL-SYNC',
    workflowType: 'INTEGRATION',
    period: '20 Jan 2026',
    total: 600,
    inProgress: 6,
    completed: 540,
    failed: 46,
    terminated: 8,
    history: [42, 48, 45, 52, 48, 56, 52, 60, 55, 64, 58, 68]
  },
  {
    tenant: 'Amedisys',
    workflow: 'AMED-PAYMENT-POST',
    workflowType: 'FINANCE',
    period: '20 Jan 2026',
    total: 416,
    inProgress: 3,
    completed: 375,
    failed: 31,
    terminated: 7,
    history: [28, 32, 30, 35, 32, 38, 35, 42, 38, 45, 40, 48]
  },
  {
    tenant: 'LHC Group',
    workflow: 'LHC-DOCUMENT-FETCH',
    workflowType: 'DOCUMENTS',
    period: '20 Jan 2026',
    total: 952,
    inProgress: 8,
    completed: 855,
    failed: 72,
    terminated: 17,
    history: [65, 72, 68, 78, 72, 85, 78, 92, 85, 98, 90, 105]
  }
];

// Mini sparkline chart component
function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 60;
    const y = 20 - ((value - min) / range) * 18;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="60" height="20" className="inline-block">
      <polyline
        points={points}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((value, index) => {
        const x = (index / (data.length - 1)) * 60;
        const y = 20 - ((value - min) / range) * 18;
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="1.5"
            fill="#3b82f6"
          />
        );
      })}
    </svg>
  );
}

export function MonitorModal({ isOpen, onClose }: MonitorModalProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('TODAY');

  if (!isOpen) return null;

  // Calculate summary stats
  const summaryStats = {
    total: mockData.reduce((sum, item) => sum + item.total, 0),
    inProgress: mockData.reduce((sum, item) => sum + item.inProgress, 0),
    completed: mockData.reduce((sum, item) => sum + item.completed, 0),
    failed: mockData.reduce((sum, item) => sum + item.failed, 0),
    terminated: mockData.reduce((sum, item) => sum + item.terminated, 0)
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-[1400px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Performance Dashboard</h2>
            <p className="text-sm text-gray-500 mt-1">Global transaction volume and operational health overview</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Time Period Tabs */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              {(['TODAY', 'DAILY', 'WEEKLY', 'MONTHLY'] as TimePeriod[]).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    selectedPeriod === period
                      ? 'bg-[#3b82f6] text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
          <div className="grid grid-cols-5 gap-4">
            {/* Total */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Total</div>
              <div className="text-2xl font-bold text-gray-900">{summaryStats.total.toLocaleString()}</div>
              <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gray-400 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>

            {/* In Progress */}
            <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
              <div className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">In Progress</div>
              <div className="text-2xl font-bold text-blue-700">{summaryStats.inProgress}</div>
              <div className="text-xs text-blue-600 mt-1">ACTIVE EXECUTIONS</div>
              <div className="mt-2 h-1 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(summaryStats.inProgress / summaryStats.total) * 100}%` }} />
              </div>
            </div>

            {/* Completed */}
            <div className="bg-white rounded-lg p-4 border border-green-200 shadow-sm">
              <div className="text-xs font-medium text-green-600 uppercase tracking-wider mb-1">Completed</div>
              <div className="text-2xl font-bold text-green-700">{summaryStats.completed.toLocaleString()}</div>
              <div className="text-xs text-green-600 mt-1">SUCCESSFUL RUNS</div>
              <div className="mt-2 h-1 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: `${(summaryStats.completed / summaryStats.total) * 100}%` }} />
              </div>
            </div>

            {/* Failed */}
            <div className="bg-white rounded-lg p-4 border border-red-200 shadow-sm">
              <div className="text-xs font-medium text-red-600 uppercase tracking-wider mb-1">Failed</div>
              <div className="text-2xl font-bold text-red-700">{summaryStats.failed}</div>
              <div className="text-xs text-red-600 mt-1">REQUIRES ATTENTION</div>
              <div className="mt-2 h-1 bg-red-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: `${(summaryStats.failed / summaryStats.total) * 100}%` }} />
              </div>
            </div>

            {/* Terminated */}
            <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
              <div className="text-xs font-medium text-gray-600 uppercase tracking-wider mb-1">Terminated</div>
              <div className="text-2xl font-bold text-gray-900">{summaryStats.terminated}</div>
              <div className="text-xs text-gray-600 mt-1">USER ABORTED / TIMED OUT</div>
              <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gray-500 rounded-full" style={{ width: `${(summaryStats.terminated / summaryStats.total) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto px-6 py-4 scrollbar-thin">
          <table className="w-full border-collapse">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="border-b-2 border-gray-300">
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span>Tenant</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                      <path d="M3 5l3-3 3 3M9 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span>Workflow</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                      <path d="M3 5l3-3 3 3M9 7l-3 3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Period</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">Total</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-blue-600 uppercase tracking-wider">In Progress</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-green-600 uppercase tracking-wider">Completed</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-red-600 uppercase tracking-wider">Failed</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Terminated</th>
                <th className="px-3 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">History (7d)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-4">
                    <div className="font-medium text-sm text-gray-900">{row.tenant}</div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="text-sm font-medium text-blue-700">{row.workflow}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{row.workflowType}</div>
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-600">{row.period}</td>
                  <td className="px-3 py-4 text-right">
                    <span className="text-sm font-semibold text-gray-900">{row.total.toLocaleString()}</span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-sm font-medium text-blue-700">
                      {row.inProgress}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-sm font-medium text-green-700">
                      {row.completed.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-red-50 text-sm font-medium text-red-700">
                      {row.failed}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-sm font-medium text-gray-700">
                      {row.terminated}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Sparkline data={row.history} />
                      <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        7D
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-center">
          <p className="text-xs text-gray-500">LIVE ANALYTICS ENGINE v2.0 • UPDATED AT 14:23 UTC</p>
        </div>
      </div>
    </div>
  );
}
