import { CheckCircle2, Clock, AlertCircle, ChevronRight, User, Calendar } from 'lucide-react';

type SubtaskStatus = 'completed' | 'in-progress' | 'pending' | 'failed';

interface Subtask {
  id: string;
  title: string;
  status: SubtaskStatus;
  assignee?: string;
  dueDate?: string;
  progress?: number;
  lastUpdate?: string;
}

interface SubtaskCardsProps {
  onSubtaskClick: (subtaskId: string) => void;
  activeSubtask?: string;
}

export function SubtaskCards({ onSubtaskClick, activeSubtask }: SubtaskCardsProps) {
  const subtasks: Subtask[] = [
    {
      id: 'rca',
      title: 'Identify RCA',
      status: 'completed',
      assignee: 'Sarah Chen',
      dueDate: 'Jan 10, 2025',
      progress: 100,
      lastUpdate: '2 days ago'
    },
    {
      id: 'trigger',
      title: 'Enable/Disable Trigger',
      status: 'in-progress',
      assignee: 'Mike Johnson',
      dueDate: 'Jan 15, 2025',
      progress: 65,
      lastUpdate: '3 hours ago'
    },
    {
      id: 'credentials',
      title: 'Credential Management',
      status: 'in-progress',
      assignee: 'Alex Kumar',
      dueDate: 'Jan 16, 2025',
      progress: 40,
      lastUpdate: '1 day ago'
    },
    {
      id: 'worker',
      title: 'Pause/App worker',
      status: 'pending',
      dueDate: 'Jan 20, 2025',
      progress: 0,
      lastUpdate: 'Not started'
    }
  ];

  const getStatusConfig = (status: SubtaskStatus) => {
    switch (status) {
      case 'completed':
        return {
          icon: CheckCircle2,
          color: 'text-green-600',
          bg: 'bg-green-50',
          border: 'border-green-200',
          badge: 'bg-green-100 text-green-700',
          label: 'Completed'
        };
      case 'in-progress':
        return {
          icon: Clock,
          color: 'text-blue-600',
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          badge: 'bg-blue-100 text-blue-700',
          label: 'In Progress'
        };
      case 'failed':
        return {
          icon: AlertCircle,
          color: 'text-red-600',
          bg: 'bg-red-50',
          border: 'border-red-200',
          badge: 'bg-red-100 text-red-700',
          label: 'Failed'
        };
      default:
        return {
          icon: Clock,
          color: 'text-gray-400',
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          badge: 'bg-gray-100 text-gray-600',
          label: 'Pending'
        };
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Subtasks</h2>
        <p className="text-sm text-gray-600">Track progress across all required actions</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subtasks.map((subtask) => {
          const config = getStatusConfig(subtask.status);
          const Icon = config.icon;
          const isActive = activeSubtask === subtask.id;

          return (
            <button
              key={subtask.id}
              onClick={() => onSubtaskClick(subtask.id)}
              className={`bg-white rounded-lg border-2 p-4 text-left transition-all hover:shadow-md ${
                isActive 
                  ? 'border-blue-500 shadow-sm ring-2 ring-blue-100' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className={`${config.bg} ${config.color} p-2 rounded-lg`}>
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                      {subtask.title}
                    </h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${config.badge}`}>
                      {config.label}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`size-4 text-gray-400 flex-shrink-0 ml-2 transition-transform ${isActive ? 'rotate-90' : ''}`} />
              </div>

              {/* Progress Bar */}
              {subtask.progress !== undefined && subtask.progress > 0 && (
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs font-medium text-gray-900">{subtask.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full transition-all ${
                        subtask.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${subtask.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Meta Info */}
              <div className="space-y-1.5 text-xs text-gray-600">
                {subtask.assignee && (
                  <div className="flex items-center gap-1.5">
                    <User className="size-3.5 text-gray-400" />
                    <span>{subtask.assignee}</span>
                  </div>
                )}
                {subtask.dueDate && (
                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-gray-400" />
                    <span>{subtask.dueDate}</span>
                  </div>
                )}
                {subtask.lastUpdate && (
                  <div className="text-gray-500 italic">
                    Updated {subtask.lastUpdate}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}