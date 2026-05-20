import { createContext, useContext, useState, ReactNode } from 'react';

export interface ActivityEvent {
  id: number;
  timestamp: string;
  action: string;
  user: string;
  type: 'system' | 'user';
  badge?: string;
  badgeColor?: string;
  icon?: 'check' | 'message' | 'commit' | 'user';
  recordCount?: number;
  details?: any; // For storing detailed information about the action
}

interface ActivityContextType {
  activityEvents: ActivityEvent[];
  addActivity: (action: string, recordCount?: number, details?: any) => void;
  setActivityEvents: React.Dispatch<React.SetStateAction<ActivityEvent[]>>;
}

const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

export function ActivityProvider({ children, initialEvents }: { children: ReactNode; initialEvents: ActivityEvent[] }) {
  const [activityEvents, setActivityEvents] = useState<ActivityEvent[]>(initialEvents);

  const addActivity = (action: string, recordCount?: number, details?: any) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    const newEvent: ActivityEvent = {
      id: activityEvents.length + 1,
      timestamp,
      action,
      user: 'Sarah Chen',
      type: 'user',
      badge: recordCount ? `${recordCount} Record${recordCount !== 1 ? 's' : ''}` : undefined,
      badgeColor: recordCount ? 'bg-blue-100 text-blue-700 border-blue-200' : undefined,
      icon: 'check',
      recordCount,
      details
    };

    setActivityEvents(prev => [newEvent, ...prev]);
  };

  return (
    <ActivityContext.Provider value={{ activityEvents, addActivity, setActivityEvents }}>
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivity() {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error('useActivity must be used within an ActivityProvider');
  }
  return context;
}
