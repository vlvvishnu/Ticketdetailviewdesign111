import { AlertTriangle, Clock, CheckCircle, XCircle } from 'lucide-react';
import { type TicketAlert } from '@/app/contexts/TicketAlertContext';

interface AlertContentProps {
  alert: TicketAlert;
}

export function AlertContent({ alert }: AlertContentProps) {
  const getMetricLabel = (metric: string): string => {
    const labels: Record<string, string> = {
      'total': 'Total Workflows',
      'inProgress': 'In Progress Workflows',
      'completed': 'Completed Workflows',
      'failed': 'Failed Workflows',
      'terminated': 'Terminated Workflows',
      'backlog': 'Backlog Workflows'
    };
    return labels[metric] || metric;
  };

  const getMetricDescription = (metric: string): string => {
    const descriptions: Record<string, string> = {
      'total': 'Total number of workflow instances',
      'inProgress': 'Number of currently running workflow instances',
      'completed': 'Number of successfully completed workflow instances',
      'failed': 'Number of workflow instances that have failed',
      'terminated': 'Number of manually terminated workflow instances',
      'backlog': 'Number of workflow instances waiting to be processed'
    };
    return descriptions[metric] || 'Metric description';
  };

  const isDeleted = alert.state === 'deleted';

  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-white p-8 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className={`
              size-12 rounded-xl flex items-center justify-center
              ${isDeleted 
                ? 'bg-gray-100' 
                : 'bg-gradient-to-br from-orange-500 to-red-600'
              }
            `}>
              <AlertTriangle className={`size-6 ${isDeleted ? 'text-gray-400' : 'text-white'}`} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Alert Details</h1>
              <p className="text-sm text-gray-500">Monitoring workflow performance metrics</p>
            </div>
          </div>
        </div>

        {/* Alert Status Card */}
        <div className={`
          rounded-xl p-6 mb-6 border-2
          ${isDeleted 
            ? 'bg-gray-50 border-gray-200' 
            : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
          }
        `}>
          <div className="flex items-center gap-3 mb-4">
            {isDeleted ? (
              <XCircle className="size-6 text-gray-600" />
            ) : (
              <CheckCircle className="size-6 text-green-600" />
            )}
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {isDeleted ? 'Alert Deleted' : 'Alert Active'}
              </h2>
              <p className="text-sm text-gray-600">
                {isDeleted 
                  ? 'This alert has been deleted and is kept for historical records only.' 
                  : 'This alert is actively monitoring the specified metric.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Alert Configuration */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Configuration</h3>
          
          <div className="space-y-4">
            {/* Metric */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Metric</label>
              <p className="text-base font-medium text-gray-900 mt-1">{getMetricLabel(alert.metric)}</p>
              <p className="text-sm text-gray-600 mt-1">{getMetricDescription(alert.metric)}</p>
            </div>

            {/* Condition */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Condition</label>
                <p className="text-base font-medium text-gray-900 mt-1">{alert.condition}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Threshold</label>
                <p className="text-base font-medium text-gray-900 mt-1">{alert.threshold}</p>
              </div>
            </div>

            {/* Alert Rule Summary */}
            <div className="bg-blue-50 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Alert will trigger when:</span>{' '}
                {getMetricLabel(alert.metric)} {alert.condition} {alert.threshold}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h3>
          
          <div className="space-y-4">
            {/* Created */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 size-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                <Clock className="size-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Alert Created</p>
                <p className="text-sm text-gray-600">{alert.createdAt}</p>
                <p className="text-xs text-gray-500 mt-1">Alert was automatically added to the ticket</p>
              </div>
            </div>

            {/* Deleted */}
            {isDeleted && alert.deletedAt && (
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 size-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <XCircle className="size-4 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Alert Deleted</p>
                  <p className="text-sm text-gray-600">{alert.deletedAt}</p>
                  <p className="text-xs text-gray-500 mt-1">Alert deleted from Monitor panel - entry preserved for historical record</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Read-Only Notice */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="size-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-yellow-900">Read-Only Alert Entry</p>
              <p className="text-sm text-yellow-800 mt-1">
                This alert entry is read-only and maintained for historical tracking. 
                {isDeleted 
                  ? ' The alert has been deleted and can no longer be modified or re-activated.' 
                  : ' To delete or modify this alert, use the Monitor → Alerts panel.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
