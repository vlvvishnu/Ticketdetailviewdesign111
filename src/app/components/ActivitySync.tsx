import { useEffect } from 'react';
import { useActivity, type ActivityEvent } from '@/app/contexts/ActivityContext';

interface ActivitySyncProps {
  onActivityEventsChange: (events: ActivityEvent[]) => void;
}

/**
 * Component that syncs activity events from ActivityContext back to parent state
 */
export function ActivitySync({ onActivityEventsChange }: ActivitySyncProps) {
  const { activityEvents } = useActivity();

  useEffect(() => {
    onActivityEventsChange(activityEvents);
  }, [activityEvents, onActivityEventsChange]);

  return null;
}
