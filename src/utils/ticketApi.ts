import type { Subtask } from '@/app/components/SubtaskTabs';
import type { ActivityEvent } from '@/app/components/ActivityCard';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export interface TicketState {
  subtasks: Subtask[];
  activityEvents: ActivityEvent[];
  activeSubtask: string;
  subtaskCounter: Record<string, number>;
  subtaskData: Record<string, any>; // Store all subtask table data
  timestamp: string;
}

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-89219a35`;

// Fetch ticket state from backend
export async function fetchTicketState(ticketId: string): Promise<TicketState | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/ticket/${ticketId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Error fetching ticket state for ${ticketId}: ${response.statusText}`);
      return null;
    }

    const result = await response.json();

    if (!result.success) {
      console.error(`Error fetching ticket state for ${ticketId}:`, result.error);
      return null;
    }

    if (!result.data) {
      console.log(`No saved state found for ticket: ${ticketId}`);
      return null;
    }

    console.log(`Loaded ticket state from backend for: ${ticketId}`);
    return result.data as TicketState;
  } catch (error) {
    console.error(`Error fetching ticket state for ${ticketId}:`, error);
    return null;
  }
}

// Save ticket state to backend
export async function saveTicketState(ticketId: string, state: TicketState): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/ticket/${ticketId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });

    if (!response.ok) {
      console.error(`Error saving ticket state for ${ticketId}: ${response.statusText}`);
      return false;
    }

    const result = await response.json();

    if (!result.success) {
      console.error(`Error saving ticket state for ${ticketId}:`, result.error);
      return false;
    }

    console.log(`Saved ticket state to backend for: ${ticketId}`);
    return true;
  } catch (error) {
    console.error(`Error saving ticket state for ${ticketId}:`, error);
    return false;
  }
}

// Reset ticket to initial state
export async function resetTicket(ticketId: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/ticket/${ticketId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error(`Error resetting ticket ${ticketId}: ${response.statusText}`);
      return false;
    }

    const result = await response.json();

    if (!result.success) {
      console.error(`Error resetting ticket ${ticketId}:`, result.error);
      return false;
    }

    console.log(`Reset ticket successfully in backend: ${ticketId}`);
    return true;
  } catch (error) {
    console.error(`Error resetting ticket ${ticketId}:`, error);
    return false;
  }
}