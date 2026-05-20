import { useState, useCallback, useRef, useEffect } from 'react';

// Global storage for subtask data (persists across component unmounts)
// Now scoped by ticketId and subtaskId: ticketDataStore[ticketId][subtaskId]
const ticketDataStore: Record<string, Record<string, any>> = {};

// Track the current active ticket ID
let currentTicketId: string = '';

/**
 * Set the current ticket ID context
 * Should be called whenever the ticket changes
 */
export function setCurrentTicketContext(ticketId: string) {
  currentTicketId = ticketId;
  // Ensure the ticket has a storage object
  if (!ticketDataStore[ticketId]) {
    ticketDataStore[ticketId] = {};
  }
}

/**
 * Clear all subtask data for a specific ticket
 * Used when resetting a ticket to ensure clean state
 */
export function clearTicketData(ticketId: string) {
  if (ticketDataStore[ticketId]) {
    delete ticketDataStore[ticketId];
    console.log(`Cleared all subtask data for ticket ${ticketId}`);
  }
}

/**
 * Clear all subtask data from the store (legacy function for backward compatibility)
 * Used when resetting a ticket to ensure clean state
 */
export function clearAllSubtaskData() {
  if (currentTicketId && ticketDataStore[currentTicketId]) {
    delete ticketDataStore[currentTicketId];
    console.log(`Cleared all subtask data for current ticket ${currentTicketId}`);
  }
}

/**
 * Get all subtask data for a specific ticket (for saving to backend)
 */
export function getTicketSubtaskData(ticketId: string): Record<string, any> {
  return ticketDataStore[ticketId] || {};
}

/**
 * Restore all subtask data for a specific ticket (from backend)
 */
export function restoreTicketSubtaskData(ticketId: string, data: Record<string, any>) {
  ticketDataStore[ticketId] = data;
  console.log(`Restored subtask data for ticket ${ticketId}`, Object.keys(data).length, 'items');
}

/**
 * Custom hook to persist data for each subtask instance within a ticket
 * @param subtaskId - Unique ID of the subtask instance
 * @param initialData - Initial data structure (only used on first mount for new subtask)
 * @returns [data, setData] tuple similar to useState
 */
export function useSubtaskData<T>(subtaskId: string, initialData: T): [T, (data: T | ((prev: T) => T)) => void] {
  // Track the last subtask ID to detect changes
  const lastSubtaskIdRef = useRef<string>(subtaskId);
  const initializedRef = useRef<boolean>(false);
  
  // Initialize from store or use initial data
  const [data, setDataInternal] = useState<T>(() => {
    // Ensure ticket storage exists
    if (currentTicketId && !ticketDataStore[currentTicketId]) {
      ticketDataStore[currentTicketId] = {};
    }
    
    if (currentTicketId && ticketDataStore[currentTicketId] && subtaskId in ticketDataStore[currentTicketId]) {
      return ticketDataStore[currentTicketId][subtaskId] as T;
    }
    if (currentTicketId && ticketDataStore[currentTicketId]) {
      ticketDataStore[currentTicketId][subtaskId] = initialData;
    }
    return initialData;
  });

  // Handle subtask ID changes with useEffect instead of during render
  useEffect(() => {
    if (lastSubtaskIdRef.current !== subtaskId || !initializedRef.current) {
      lastSubtaskIdRef.current = subtaskId;
      initializedRef.current = true;
      
      // Ensure ticket storage exists
      if (currentTicketId && !ticketDataStore[currentTicketId]) {
        ticketDataStore[currentTicketId] = {};
      }
      
      if (currentTicketId && ticketDataStore[currentTicketId] && subtaskId in ticketDataStore[currentTicketId]) {
        // Load existing data
        const storedData = ticketDataStore[currentTicketId][subtaskId] as T;
        setDataInternal(storedData);
      } else {
        // Initialize new subtask data
        if (currentTicketId && ticketDataStore[currentTicketId]) {
          ticketDataStore[currentTicketId][subtaskId] = initialData;
        }
        setDataInternal(initialData);
      }
    }
  }, [subtaskId, initialData]);

  // Sync with global store whenever data changes
  const setData = useCallback((newData: T | ((prev: T) => T)) => {
    setDataInternal(prevData => {
      const nextData = typeof newData === 'function' ? (newData as (prev: T) => T)(prevData) : newData;
      if (currentTicketId) {
        // Ensure ticket storage exists
        if (!ticketDataStore[currentTicketId]) {
          ticketDataStore[currentTicketId] = {};
        }
        ticketDataStore[currentTicketId][subtaskId] = nextData;
      }
      return nextData;
    });
  }, [subtaskId]);

  return [data, setData];
}