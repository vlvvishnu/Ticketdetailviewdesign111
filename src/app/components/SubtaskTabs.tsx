import { CheckCircle2, Circle, Clock } from 'lucide-react';

export interface Subtask {
  id: string;
  displayId: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  tags: string[];
  owner: string;
  eta: string;
  lastUpdated: string;
}

interface SubtaskTabsProps {
  subtasks: Subtask[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function SubtaskTabs({ subtasks, activeTab, onTabChange }: SubtaskTabsProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle2 className="size-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="size-4 text-blue-600" />;
      case 'todo':
      default:
        return <Circle className="size-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex gap-1 px-6">
        {subtasks.map((subtask) => {
          const isActive = activeTab === subtask.id;
          return (
            <button
              key={subtask.id}
              onClick={() => onTabChange(subtask.id)}
              className={`
                flex items-center gap-2 px-4 py-3 border-b-2 transition-colors relative
                ${isActive 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }
              `}
            >
              {getStatusIcon(subtask.status)}
              <span className="text-sm font-medium whitespace-nowrap">{subtask.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}