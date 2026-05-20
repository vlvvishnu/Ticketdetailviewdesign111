import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';

export interface TicketAlert {
  id: string;
  metric: string;
  condition: '>=' | '<=' | '=' | '>' | '<';
  threshold: number;
  state: 'active' | 'deleted';
  createdAt: string;
  deletedAt?: string;
  addressed: boolean;
  addressedAt?: string;
}

interface TicketAlertContextType {
  alerts: TicketAlert[];
  addAlert: (alert: Omit<TicketAlert, 'id' | 'createdAt' | 'state' | 'addressed'>) => string;
  deleteAlert: (id: string) => void;
  addressAlert: (id: string) => void;
  scheduledToasters: Set<string>;
  addScheduledToaster: (id: string) => void;
  removeScheduledToaster: (id: string) => void;
  alertBucketCreated: boolean;
  resetAlerts: () => void;
}

const TicketAlertContext = createContext<TicketAlertContextType | undefined>(undefined);

interface TicketAlertProviderProps {
  children: ReactNode;
  ticketId?: string;
}

export function TicketAlertProvider({ children, ticketId = 'default' }: TicketAlertProviderProps) {
  // Initialize alerts from localStorage
  const [alerts, setAlerts] = useState<TicketAlert[]>(() => {
    try {
      const stored = localStorage.getItem(`ticket-alerts-${ticketId}`);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [scheduledToasters, setScheduledToasters] = useState<Set<string>>(new Set());
  
  // Initialize alertBucketCreated from localStorage or based on existing alerts
  const [alertBucketCreated, setAlertBucketCreated] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(`alert-bucket-created-${ticketId}`);
      if (stored !== null) {
        return stored === 'true';
      }
      // If not stored but alerts exist, mark as created
      const storedAlerts = localStorage.getItem(`ticket-alerts-${ticketId}`);
      if (storedAlerts) {
        const parsedAlerts = JSON.parse(storedAlerts);
        return parsedAlerts.length > 0;
      }
      return false;
    } catch {
      return false;
    }
  });

  // Persist alerts to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(`ticket-alerts-${ticketId}`, JSON.stringify(alerts));
    } catch (error) {
      console.error('Failed to persist alerts:', error);
    }
  }, [alerts, ticketId]);

  // Persist alertBucketCreated to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(`alert-bucket-created-${ticketId}`, String(alertBucketCreated));
    } catch (error) {
      console.error('Failed to persist alert bucket state:', error);
    }
  }, [alertBucketCreated, ticketId]);

  // Watch for localStorage changes (e.g., when ticket is reset)
  useEffect(() => {
    const checkLocalStorage = () => {
      const stored = localStorage.getItem(`ticket-alerts-${ticketId}`);
      const bucketStored = localStorage.getItem(`alert-bucket-created-${ticketId}`);
      
      // If both localStorage items are missing, the ticket was reset
      if (!stored && !bucketStored) {
        // Only reset if we currently have alerts (avoid infinite loop)
        if (alerts.length > 0 || alertBucketCreated) {
          setAlerts([]);
          setAlertBucketCreated(false);
        }
      }
    };

    // Check periodically (every 500ms) for localStorage changes
    const interval = setInterval(checkLocalStorage, 500);

    return () => clearInterval(interval);
  }, [ticketId, alerts.length, alertBucketCreated]);

  const addAlert = useCallback((alert: Omit<TicketAlert, 'id' | 'createdAt' | 'state' | 'addressed'>) => {
    const newAlert: TicketAlert = {
      ...alert,
      id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toLocaleString(),
      state: 'active',
      addressed: false
    };
    
    setAlerts(prev => [...prev, newAlert]);
    
    // Mark alert bucket as created when first alert is added
    if (!alertBucketCreated) {
      setAlertBucketCreated(true);
    }
    
    return newAlert.id; // Return the ID so we can track it
  }, [alertBucketCreated]);

  const deleteAlert = useCallback((id: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id 
        ? { ...alert, state: 'deleted' as const, deletedAt: new Date().toLocaleString() }
        : alert
    ));
  }, []);

  const addressAlert = useCallback((id: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id 
        ? { ...alert, addressed: true, addressedAt: new Date().toLocaleString() }
        : alert
    ));
  }, []);

  const addScheduledToaster = useCallback((id: string) => {
    setScheduledToasters(prev => new Set(prev).add(id));
  }, []);

  const removeScheduledToaster = useCallback((id: string) => {
    setScheduledToasters(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }, []);

  const resetAlerts = useCallback(() => {
    setAlerts([]);
    setAlertBucketCreated(false);
  }, []);

  return (
    <TicketAlertContext.Provider value={{ 
      alerts, 
      addAlert, 
      deleteAlert,
      addressAlert,
      scheduledToasters,
      addScheduledToaster,
      removeScheduledToaster,
      alertBucketCreated,
      resetAlerts
    }}>
      {children}
    </TicketAlertContext.Provider>
  );
}

export function useTicketAlerts() {
  const context = useContext(TicketAlertContext);
  if (!context) {
    throw new Error('useTicketAlerts must be used within TicketAlertProvider');
  }
  return context;
}