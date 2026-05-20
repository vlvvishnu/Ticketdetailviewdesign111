import { AlertTriangle } from 'lucide-react';
import { type TicketAlert } from '@/app/contexts/TicketAlertContext';

interface AlertItemProps {
  alert: TicketAlert;
  isActive: boolean;
  onClick: () => void;
}

export function AlertItem({ alert, isActive, onClick }: AlertItemProps) {
  const getMetricLabel = (metric: string): string => {
    const labels: Record<string, string> = {
      'total': 'Total',
      'inProgress': 'In Progress',
      'completed': 'Completed',
      'failed': 'Failed',
      'terminated': 'Terminated',
      'backlog': 'Backlog'
    };
    return labels[metric] || metric;
  };

  const getConditionSymbol = (condition: string): string => {
    return condition;
  };

  const isDeleted = alert.state === 'deleted';

  return (
    <button
      onClick={onClick}
      className={`
        w-full px-4 py-3 text-left transition-all border-l-4
        ${isActive 
          ? 'bg-blue-50 border-l-blue-600' 
          : 'bg-white border-l-transparent hover:bg-gray-50'
        }
        ${isDeleted ? 'opacity-60' : ''}
      `}
    >
      <div className="flex items-start gap-3">
        {/* Alert Icon */}
        <div className={`
          flex-shrink-0 size-8 rounded-lg flex items-center justify-center mt-0.5
          ${isDeleted 
            ? 'bg-gray-100' 
            : 'bg-gradient-to-br from-orange-50 to-red-50'
          }
        `}>
          <AlertTriangle className={`size-4 ${isDeleted ? 'text-gray-400' : 'text-orange-600'}`} />
        </div>

        {/* Alert Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-sm text-gray-900">
              Alert: {getMetricLabel(alert.metric)}
            </h4>
            <span className={`
              text-xs px-2 py-0.5 rounded-full font-medium
              ${isDeleted 
                ? 'bg-gray-100 text-gray-600' 
                : 'bg-green-100 text-green-700'
              }
            `}>
              {isDeleted ? 'Deleted' : 'Active'}
            </span>
          </div>

          {/* Alert Condition */}
          <div className="text-xs text-gray-600 mb-2">
            Triggers when <span className="font-semibold text-gray-900">{getMetricLabel(alert.metric)}</span>{' '}
            <span className="font-semibold text-gray-900">{getConditionSymbol(alert.condition)}</span>{' '}
            <span className="font-semibold text-gray-900">{alert.threshold}</span>
          </div>

          {/* Timestamps */}
          <div className="text-xs text-gray-500">
            <div>Created: {alert.createdAt}</div>
            {isDeleted && alert.deletedAt && (
              <div className="text-red-600">Deleted: {alert.deletedAt}</div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
