import { TrendingUp, TrendingDown, Minus, AlertTriangle, CheckCircle2, Clock, Ticket } from 'lucide-react';

interface KPICardsProps {
  ticketId?: string;
}

export function KPICards({ ticketId }: KPICardsProps) {
  const kpis = [
    {
      label: 'Total Subtasks',
      value: '11',
      change: '+2',
      trend: 'up' as const,
      icon: Ticket,
      color: 'blue'
    },
    {
      label: 'Completed',
      value: '4',
      change: '+1',
      trend: 'up' as const,
      icon: CheckCircle2,
      color: 'green'
    },
    {
      label: 'In Progress',
      value: '3',
      change: '0',
      trend: 'neutral' as const,
      icon: Clock,
      color: 'yellow'
    },
    {
      label: 'Active Alerts',
      value: '2',
      change: '-1',
      trend: 'down' as const,
      icon: AlertTriangle,
      color: 'orange'
    }
  ];

  const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
    if (trend === 'up') return <TrendingUp className="w-3 h-3" />;
    if (trend === 'down') return <TrendingDown className="w-3 h-3" />;
    return <Minus className="w-3 h-3" />;
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600',
      orange: 'bg-orange-50 border-orange-200 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getTrendColorClasses = (trend: 'up' | 'down' | 'neutral') => {
    if (trend === 'up') return 'text-green-600 bg-green-50';
    if (trend === 'down') return 'text-red-600 bg-red-50';
    return 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <div
            key={kpi.label}
            className={`p-4 rounded-lg border ${getColorClasses(kpi.color)} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className={`p-2 rounded-lg ${getColorClasses(kpi.color)}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getTrendColorClasses(kpi.trend)}`}>
                {getTrendIcon(kpi.trend)}
                <span>{kpi.change}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</div>
            <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">{kpi.label}</div>
          </div>
        );
      })}
    </div>
  );
}
