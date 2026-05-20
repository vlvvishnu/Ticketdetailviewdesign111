import { AlertTriangle, CheckCircle2, Trash2, Check } from 'lucide-react';
import { useTicketAlerts } from '@/app/contexts/TicketAlertContext';

export function AlertsTableContent() {
  const { alerts, addressAlert } = useTicketAlerts();

  const getMetricLabel = (metric: string): string => {
    const labels: Record<string, string> = {
      'failed': 'Failed Records',
      'success': 'Success Records',
      'queued': 'Queued Records',
      'processing': 'Processing Records',
      'error-rate': 'Error Rate',
      'avg-processing-time': 'Avg Processing Time'
    };
    return labels[metric] || metric;
  };

  const getConditionSymbol = (condition: string): string => {
    const symbols: Record<string, string> = {
      '>=': '≥',
      '<=': '≤',
      '>': '>',
      '<': '<',
      '==': '='
    };
    return symbols[condition] || condition;
  };

  const formatCondition = (alert: any) => {
    return `${getMetricLabel(alert.metric)} ${getConditionSymbol(alert.condition)} ${alert.threshold}`;
  };

  if (alerts.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="size-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="size-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Alerts</h3>
          <p className="text-sm text-gray-600 max-w-md">
            No alerts have been created for this ticket yet. Create alerts in the Monitor tab to track important metrics.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
            <AlertTriangle className="size-5 text-orange-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Alert Bucket</h2>
            <p className="text-sm text-gray-600">System-generated alert entries ({alerts.length} total)</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Alert Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Alert Condition
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Created Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Deleted Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {alerts.map((alert, index) => {
              const isDeleted = alert.state === 'deleted';
              return (
                <tr 
                  key={alert.id} 
                  className={`
                    hover:bg-gray-50 transition-colors
                    ${isDeleted ? 'opacity-60' : ''}
                    ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                  `}
                >
                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {isDeleted ? (
                        <>
                          <Trash2 className="size-4 text-red-500" />
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Deleted
                          </span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="size-4 text-green-500" />
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </>
                      )}
                    </div>
                  </td>

                  {/* Alert Name */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`
                        size-8 rounded-lg flex items-center justify-center
                        ${isDeleted 
                          ? 'bg-gray-100' 
                          : 'bg-gradient-to-br from-orange-50 to-red-50'
                        }
                      `}>
                        <AlertTriangle className={`size-4 ${isDeleted ? 'text-gray-400' : 'text-orange-600'}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {getMetricLabel(alert.metric)}
                        </div>
                        <div className="text-xs text-gray-500">
                          Alert #{alert.id.split('-')[1]?.substring(0, 6)}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Alert Condition */}
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                        {getMetricLabel(alert.metric)} {getConditionSymbol(alert.condition)} {alert.threshold}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Triggers when condition is met
                    </div>
                  </td>

                  {/* Created Date & Time */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{alert.createdAt}</div>
                  </td>

                  {/* Deleted Date & Time */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {isDeleted && alert.deletedAt ? (
                        <span className="text-red-600">{alert.deletedAt}</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </div>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isDeleted || alert.addressed ? (
                      // Show "Addressed" badge for addressed or deleted alerts
                      alert.addressed && !isDeleted ? (
                        <div className="flex items-center gap-2">
                          <Check className="size-4 text-blue-500" />
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Addressed
                          </span>
                          {alert.addressedAt && (
                            <span className="text-xs text-gray-500 ml-2">
                              {alert.addressedAt}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )
                    ) : (
                      // Show "Mark as Addressed" button for active, unaddressed alerts
                      <button
                        onClick={() => addressAlert(alert.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md transition-colors"
                      >
                        <Check className="size-3.5" />
                        Mark as Addressed
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-600">
            Total: <span className="font-semibold text-gray-900">{alerts.length}</span> alerts
            {' • '}
            Active: <span className="font-semibold text-green-600">{alerts.filter(a => a.state === 'active').length}</span>
            {' • '}
            Deleted: <span className="font-semibold text-red-600">{alerts.filter(a => a.state === 'deleted').length}</span>
          </div>
          <div className="text-gray-500 text-xs">
            Manage alerts in the Monitor tab
          </div>
        </div>
      </div>
    </div>
  );
}