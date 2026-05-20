import { useState, useEffect, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import { LeftSidebar } from '@/app/components/LeftSidebar';
import { TopNavigation } from '@/app/components/TopNavigation';
import { TicketInfoBar } from '@/app/components/TicketInfoBar';
import { SubtaskSidebar } from '@/app/components/SubtaskSidebar';
import { MainContent } from '@/app/components/MainContent';
import { TextNotesContent } from '@/app/components/TextNotesContent';
import { DropboxContent } from '@/app/components/DropboxContent';
import { PauseResumeAppWorkersContent } from '@/app/components/PauseResumeAppWorkersContent';
import { CredentialManagementContent } from '@/app/components/CredentialManagementContent';
import { GenerateDataFileContent } from '@/app/components/GenerateDataFileContent';
import { DatadogValidationContent } from '@/app/components/DatadogValidationContent';
import { AnomalyDetectedContent } from '@/app/components/AnomalyDetectedContent';
import { ActivityCard, type ActivityEvent } from '@/app/components/ActivityCard';
import { ActivityDetailPanel } from '@/app/components/ActivityDetailPanel';
import { AISummaryPanel } from '@/app/components/AISummaryPanel';
import { AskAREPanel } from '@/app/components/AskAREPanel';
import { MonitorPanel } from '@/app/components/MonitorPanel';
import { RightSidebar } from '@/app/components/RightSidebar';
import { ActionCenter } from '@/app/components/ActionCenter';
import { EmptyState } from '@/app/components/EmptyState';
import { type Subtask } from '@/app/components/SubtaskTabs';
import { TicketAlertProvider } from '@/app/contexts/TicketAlertContext';
import { LayoutProvider } from '@/app/contexts/LayoutContext';
import { ActivityProvider } from '@/app/contexts/ActivityContext';
import { AlertsTableContent } from '@/app/components/AlertsTableContent';
import { TicketListingPage } from '@/app/components/TicketListingPage';
import { TicketView2ListingPage } from '@/app/components/TicketView2ListingPage';
import { ResetTicketModal } from '@/app/components/ResetTicketModal';
import { TerminateWorkflowModal } from '@/app/components/TerminateWorkflowModal';
import { ActivitySync } from '@/app/components/ActivitySync';
import { fetchTicketState, saveTicketState, resetTicket } from '@/utils/ticketApi';
import { clearAllSubtaskData, setCurrentTicketContext, getTicketSubtaskData, restoreTicketSubtaskData } from '@/app/hooks/useSubtaskData';

export default function App() {
  const [currentView, setCurrentView] = useState<'listing' | 'detail'>('listing');
  const [currentTicketId, setCurrentTicketId] = useState<string>('');
  const [appView, setAppView] = useState<'v1' | 'v2'>('v1');
  const [currentFDId, setCurrentFDId] = useState<string>('');
  const [v2ActivitiesMap, setV2ActivitiesMap] = useState<Record<string, ActivityEvent[]>>({});
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [activeSubtask, setActiveSubtask] = useState<string>('');
  const [isActivityOpen, setIsActivityOpen] = useState(true);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [expandedActivity, setExpandedActivity] = useState<ActivityEvent | null>(null);
  const [activityEvents, setActivityEvents] = useState<ActivityEvent[]>([
    {
      id: 1,
      timestamp: '10/13/2025 10:53PM',
      action: 'created ticket',
      user: 'System',
      type: 'system'
    }
  ]);

  // Counter for generating unique subtask instance IDs
  const [subtaskCounter, setSubtaskCounter] = useState<Record<string, number>>({});

  // Reset modal state
  const [showResetModal, setShowResetModal] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Terminate workflow modal triggered from context banner
  const [showBannerTerminateModal, setShowBannerTerminateModal] = useState(false);
  const [bannerTerminateInstances, setBannerTerminateInstances] = useState<any[]>([]);

  // Ticket titles map
  const TICKET_TITLES: Record<string, string> = {
    'ARE-T101': 'Workflow execution failure - WELLSKY-ELIGIBILITY',
    'ARE-T102': 'Data sync issue - HCHB-CLAIMS',
    'ARE-T103': 'Authentication timeout errors',
    'ARE-T104': 'Eligibility Verification work not started',
    'ARE-T105': 'Rate Anomaly Detected - Physician/Facility Notification'
  };

  // Creation timestamps for each V2 ARE ticket (keyed by subtask ID)
  const V2_TICKET_CREATION_MAP: Record<string, string> = {
    'anomaly-detected':     '10/13/2025 10:53PM',
    'pause-resume-worker':  '10/11/2025 9:20AM',
    'terminate-workflow':   '10/11/2025 11:00AM',
    'credential-management':'10/08/2025 3:45PM',
    'disable-trigger':      '10/05/2025 7:10PM',
    'pause-fb-work':        '09/30/2025 1:22PM',
    'state-management':     '09/27/2025 11:05AM',
  };

  const makeCreatedEvent = (subtaskId: string): ActivityEvent => ({
    id: 1,
    timestamp: V2_TICKET_CREATION_MAP[subtaskId] ?? '10/13/2025 10:53PM',
    action: 'created ticket',
    user: 'System',
    type: 'system',
  });

  // V2 FD ticket data
  interface V2FDTicketDef {
    fdId: string;
    fdTitle: string;
    fdStatus: string;
    areTickets: Subtask[];
  }

  const v2FDTickets: V2FDTicketDef[] = [
    {
      fdId: 'FD-270cG4c5',
      fdTitle: 'Rate Anomaly: Moments — Physician / Facility Notification',
      fdStatus: 'Open',
      areTickets: [
        { id: 'anomaly-detected', displayId: 'ARE-T101', title: 'Anomaly Detected', status: 'open' as any, tags: ['ARE', 'Prod'], owner: 'Sarah Chen', eta: 'Oct 14, 2025', lastUpdated: '2h ago' },
      ]
    },
    {
      fdId: 'FD-278a83x1',
      fdTitle: 'Automation Performance Alert — Pause/Resume App Worker',
      fdStatus: 'Open',
      areTickets: [
        { id: 'pause-resume-worker', displayId: 'ARE-T098', title: 'Pause/Resume App Worker', status: 'open', tags: ['ARE', 'Prod'], owner: 'James Walker', eta: 'Oct 12, 2025', lastUpdated: '4d ago' },
        { id: 'terminate-workflow', displayId: 'ARE-T097', title: 'Terminate Workflow', status: 'open', tags: ['ARE', 'Prod'], owner: 'James Walker', eta: 'Oct 13, 2025', lastUpdated: '3d ago' },
      ]
    },
    {
      fdId: 'FD-269cD8m4',
      fdTitle: 'Credential Management — Insurance Eligibility Check',
      fdStatus: 'Open',
      areTickets: [
        { id: 'credential-management', displayId: 'ARE-T095', title: 'Credential Management', status: 'open', tags: ['ARE', 'Prod'], owner: 'Priya Nair', eta: 'Oct 9, 2025', lastUpdated: '1w ago' },
      ]
    },
    {
      fdId: 'FD-267mH5p2',
      fdTitle: 'Operational Issues — Multi-tenant Workflows',
      fdStatus: 'Open',
      areTickets: [
        { id: 'disable-trigger', displayId: 'ARE-T091', title: 'Enable/Disable WF Trigger', status: 'open', tags: ['ARE', 'Prod'], owner: 'Tom Nguyen', eta: 'Oct 6, 2025', lastUpdated: '3d ago' },
        { id: 'pause-fb-work', displayId: 'ARE-T087', title: 'Pause/Resume App Worker', status: 'open', tags: ['ARE', 'Prod'], owner: 'Lisa Park', eta: 'Oct 2, 2025', lastUpdated: '5d ago' },
        { id: 'state-management', displayId: 'ARE-T084', title: 'State Management', status: 'open', tags: ['ARE', 'Prod'], owner: 'David Chen', eta: 'Oct 8, 2025', lastUpdated: '2d ago' },
      ]
    }
  ];


  const initializeV2TicketState = (fdId: string, preferredAreticketId?: string) => {
    const fdTicket = v2FDTickets.find(t => t.fdId === fdId);
    if (!fdTicket) return;

    const firstId = preferredAreticketId || fdTicket.areTickets[0]?.id || '';
    const newMap: Record<string, ActivityEvent[]> = {};
    fdTicket.areTickets.forEach(ticket => {
      newMap[ticket.id] = [makeCreatedEvent(ticket.id)];
    });

    setV2ActivitiesMap(newMap);
    setSubtasks(fdTicket.areTickets);
    setActiveSubtask(firstId);
    setActivityEvents(newMap[firstId] ?? []);
    setSubtaskCounter({});
    setCurrentTicketContext(fdId);
  };

  // Hardcoded anomaly subtask for T105 — always present, never editable
  const anomalySubtask: import('@/app/components/SubtaskTabs').Subtask = {
    id: 'anomaly-detected',
    displayId: 'S881',
    title: 'Anomaly Detected',
    status: 'open' as any,
    tags: ['ARE', 'Prod'],
    owner: 'System',
    eta: 'Auto',
    lastUpdated: 'just now'
  };

  // Context data for tickets that have affected transaction info to show in empty state banner
  const T104_CONTEXT = { workflow: 'Eligibility Verification', tenant: 'Brightstar Care', variant: 'Homehealth' };
  const currentContextData = currentTicketId === 'ARE-T104' ? T104_CONTEXT : undefined;

  // Loading state for ticket
  const [isLoadingTicketState, setIsLoadingTicketState] = useState(false);

  // Track if ticket is being loaded to prevent save during load
  const isLoadingTicket = useRef(false);
  
  // Debounce timer for saving
  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pendingV2ActiveSubtaskRef = useRef<string>('');

  // Tenant and Workflow data for the ticket
  const tenantWorkflowData = [
    {
      tenant: 'Archcare',
      workflow: 'WELLSKY-ELIGIBILITY',
      workflowType: 'ELIGIBILITY',
      period: '20 Jan 2026'
    },
    {
      tenant: 'Arden',
      workflow: 'HCHB-AUTH',
      workflowType: 'AUTHORIZATIONS',
      period: '20 Jan 2026'
    },
    {
      tenant: 'Brightspring',
      workflow: 'HCHB-CLAIMS-TO-INVSTAR',
      workflowType: 'CLAIMS PROCESSING',
      period: '20 Jan 2026'
    },
    {
      tenant: 'Continuum',
      workflow: 'MATRIX-BILLING-SYNC',
      workflowType: 'CLAIMS PROCESSING',
      period: '20 Jan 2026'
    },
    {
      tenant: 'Delta Care',
      workflow: 'WELLSKY-IMMAT',
      workflowType: 'ELIGIBILITY',
      period: '20 Jan 2026'
    },
    {
      tenant: 'Zelis Health',
      workflow: '7NEED-EXTRACT',
      workflowType: 'CLAIMS PROCESSING',
      period: '20 Jan 2026'
    }
  ];

  const allSubtasks: Subtask[] = [
    {
      id: 'failure-notes',
      displayId: 'S871',
      title: 'Failure Notes',
      status: 'in-progress',
      tags: ['ARE', 'Prod'],
      owner: 'Sarah Chen',
      eta: 'Jan 14, 5:00 PM',
      lastUpdated: '2h ago'
    },
    {
      id: 'datadog-validation',
      displayId: 'S872',
      title: 'Evidence Package',
      status: 'done',
      tags: ['ARE', 'Prod'],
      owner: 'Mike Johnson',
      eta: 'Jan 14, 6:00 PM',
      lastUpdated: '1h ago'
    },
    {
      id: 'terminate-workflow',
      displayId: 'S873',
      title: 'Terminate workflow',
      status: 'done',
      tags: ['ARE', 'Prod'],
      owner: 'Alex Kumar',
      eta: 'Jan 15, 10:00 AM',
      lastUpdated: '30m ago'
    },
    {
      id: 'disable-trigger',
      displayId: 'S874',
      title: 'Enable/Disable Trigger',
      status: 'done',
      tags: ['ARE', 'Prod'],
      owner: 'Sarah Chen',
      eta: 'Jan 15, 11:00 AM',
      lastUpdated: '2h ago'
    },
    {
      id: 'pause-fb-work',
      displayId: 'S875',
      title: 'Pause/Resume App Worker',
      status: 'done',
      tags: ['ARE', 'Prod'],
      owner: 'Mike Johnson',
      eta: 'Jan 15, 12:00 PM',
      lastUpdated: '3h ago'
    },
    {
      id: 'rca-identification',
      displayId: 'S876',
      title: 'RCA identification',
      status: 'in-progress',
      tags: ['ARE', 'Prod'],
      owner: 'Alex Kumar',
      eta: 'Jan 15, 1:00 PM',
      lastUpdated: '1h ago'
    },
    {
      id: 'credential-management',
      displayId: 'S877',
      title: 'Credential Management',
      status: 'in-progress',
      tags: ['ARE', 'Prod'],
      owner: 'Alex Kumar',
      eta: 'Jan 15, 10:00 AM',
      lastUpdated: '30m ago'
    },
    {
      id: 'issue-fixed-note',
      displayId: 'S878',
      title: 'Issue fixed Note',
      status: 'todo',
      tags: ['ARE', 'Prod'],
      owner: 'Unassigned',
      eta: 'Jan 15, 2:00 PM',
      lastUpdated: '4h ago'
    },
    {
      id: 'deploy-change',
      displayId: 'S879',
      title: 'Safe Deployment',
      status: 'todo',
      tags: ['ARE', 'Prod'],
      owner: 'Unassigned',
      eta: 'Jan 15, 3:00 PM',
      lastUpdated: '4h ago'
    },
    {
      id: 'state-management',
      displayId: 'S880',
      title: 'State Management',
      status: 'todo',
      tags: ['ARE', 'Prod'],
      owner: 'Unassigned',
      eta: 'Jan 15, 4:00 PM',
      lastUpdated: '3h ago'
    },
    {
      id: 'generate-data-file',
      displayId: 'S882',
      title: 'Generate Data File',
      status: 'todo',
      tags: ['ARE', 'Prod'],
      owner: 'Unassigned',
      eta: 'Jan 15, 5:00 PM',
      lastUpdated: '2h ago'
    }
  ];

  const handleTaskAdded = (taskName: string) => {
    // Map task names to subtask base IDs
    const taskMap: { [key: string]: string } = {
      'Pause App Workers': 'pause-fb-work',
      'Resume App Workers': 'pause-fb-work',
      'Enable Workflows': 'terminate-workflow',
      'Disable Workflows': 'disable-trigger',
      'Reprocessing (State Table)': 'state-management',
      'Terminate Workflow': 'terminate-workflow',
      'Request Credential for Troubleshooting': 'credential-management',
      // Add direct scope name mappings
      'Failure Notes': 'failure-notes',
      'Evidence Package': 'datadog-validation',
      'Terminate workflow': 'terminate-workflow',
      'Enable/Disable Trigger': 'disable-trigger',
      'Pause/Resume App Worker': 'pause-fb-work',
      'Identify the RCA': 'rca-identification',
      'Credential Management': 'credential-management',
      'Issue fixed Note': 'issue-fixed-note',
      'Deploy the change in production': 'deploy-change',
      'State Management': 'state-management',
      'Generate Data File': 'generate-data-file'
    };

    const baseSubtaskId = taskMap[taskName] || 'failure-notes';
    const templateSubtask = allSubtasks.find(s => s.id === baseSubtaskId);
    
    if (templateSubtask) {
      // Find all existing subtasks with this base ID to determine the next instance number
      const existingInstancesWithSameBase = subtasks.filter(st => {
        // Check if the subtask ID matches the base or is an instance (e.g., "pause-fb-work" or "pause-fb-work-1")
        return st.id === baseSubtaskId || st.id.startsWith(baseSubtaskId + '-');
      });
      
      // Generate unique ID based on existing instances
      let uniqueId: string;
      if (existingInstancesWithSameBase.length === 0) {
        // First instance - use base ID
        uniqueId = baseSubtaskId;
      } else {
        // Find the next available number
        let instanceNumber = 1;
        while (subtasks.some(st => st.id === `${baseSubtaskId}-${instanceNumber}`)) {
          instanceNumber++;
        }
        uniqueId = `${baseSubtaskId}-${instanceNumber}`;
      }
      
      // Generate unique display ID
      const maxDisplayNum = subtasks.length > 0 
        ? Math.max(...subtasks.map(st => parseInt(st.displayId.substring(1)) || 871))
        : 870;
      const uniqueDisplayId = `S${maxDisplayNum + 1}`;
      
      // Create new subtask instance
      const newSubtask: Subtask = {
        ...templateSubtask,
        id: uniqueId,
        displayId: uniqueDisplayId,
        status: 'todo',
        title: templateSubtask.title,
        owner: 'Unassigned'
      };
      
      console.log('Creating new subtask:', { 
        uniqueId, 
        baseSubtaskId, 
        existingCount: existingInstancesWithSameBase.length,
        displayId: uniqueDisplayId
      });
      
      setSubtasks(prev => [...prev, newSubtask]);
      setActiveSubtask(uniqueId);
      
      // Add activity event
      const now = new Date();
      const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
      
      setActivityEvents(prev => [
        {
          id: prev.length + 1,
          timestamp: timestamp,
          action: `created ${templateSubtask.title} (${uniqueDisplayId})`,
          user: 'Sarah Chen',
          type: 'user'
        },
        ...prev
      ]);
    }
  };

  const handleEnableTrigger = (count: number) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    setActivityEvents(prev => [
      {
        id: prev.length + 1,
        timestamp: timestamp,
        action: 'enabled trigger',
        user: 'Sarah Chen',
        type: 'user',
        badge: `${count} Record${count > 1 ? 's' : ''}`,
        badgeColor: 'bg-green-100 text-green-700 border-green-200',
        icon: 'check'
      },
      ...prev
    ]);
  };

  const handleDisableTrigger = (count: number) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    setActivityEvents(prev => [
      {
        id: prev.length + 1,
        timestamp: timestamp,
        action: 'disabled trigger',
        user: 'Sarah Chen',
        type: 'user',
        badge: `${count} Record${count > 1 ? 's' : ''}`,
        badgeColor: 'bg-red-100 text-red-700 border-red-200',
        icon: 'check'
      },
      ...prev
    ]);
  };

  const handlePauseWorker = (count: number) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    setActivityEvents(prev => [
      {
        id: prev.length + 1,
        timestamp: timestamp,
        action: 'paused app worker',
        user: 'Sarah Chen',
        type: 'user',
        badge: `${count} Record${count > 1 ? 's' : ''}`,
        badgeColor: 'bg-orange-100 text-orange-700 border-orange-200',
        icon: 'check'
      },
      ...prev
    ]);
  };

  const handleResumeWorker = (count: number) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    setActivityEvents(prev => [
      {
        id: prev.length + 1,
        timestamp: timestamp,
        action: 'resumed app worker',
        user: 'Sarah Chen',
        type: 'user',
        badge: `${count} Record${count > 1 ? 's' : ''}`,
        badgeColor: 'bg-green-100 text-green-700 border-green-200',
        icon: 'check'
      },
      ...prev
    ]);
  };

  const handleReleaseCredential = (count: number) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    setActivityEvents(prev => [
      {
        id: prev.length + 1,
        timestamp: timestamp,
        action: 'released credential',
        user: 'Sarah Chen',
        type: 'user',
        badge: `${count} Record${count > 1 ? 's' : ''}`,
        badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
        icon: 'check'
      },
      ...prev
    ]);
  };

  const handleTerminateWorkflow = (count: number) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    setActivityEvents(prev => [
      {
        id: prev.length + 1,
        timestamp: timestamp,
        action: 'terminated workflow',
        user: 'Sarah Chen',
        type: 'user',
        badge: `${count} Record${count > 1 ? 's' : ''}`,
        badgeColor: 'bg-red-100 text-red-700 border-red-200',
        icon: 'check'
      },
      ...prev
    ]);
  };

  const handleReTriggerWorkflow = (count: number) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    setActivityEvents(prev => [
      {
        id: prev.length + 1,
        timestamp: timestamp,
        action: 'retriggered workflow',
        user: 'Sarah Chen',
        type: 'user',
        badge: `${count} Record${count > 1 ? 's' : ''}`,
        badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
        icon: 'check'
      },
      ...prev
    ]);
  };

  const handleActivityAdd = (actionName: string, count: number, badgeColor?: string) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    setActivityEvents(prev => [
      {
        id: prev.length + 1,
        timestamp,
        action: actionName,
        user: 'Sarah Chen',
        type: 'user',
        badge: `${count} Record${count > 1 ? 's' : ''}`,
        badgeColor: badgeColor || 'bg-blue-100 text-blue-700 border-blue-200',
        icon: 'check'
      },
      ...prev
    ]);
  };

  const handleCredentialActivity = (action: string, user: string, badge?: string, badgeColor?: string) => {
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    setActivityEvents(prev => [
      {
        id: prev.length + 1,
        timestamp,
        action,
        user,
        type: 'user',
        badge,
        badgeColor,
        icon: 'check'
      },
      ...prev
    ]);
  };

  const handleRecordClick = (event: ActivityEvent) => {
    setExpandedActivity(event);
  };

  const handleCloseExpandedActivity = () => {
    setExpandedActivity(null);
  };

  const handlePanelChange = (panel: string | null) => {
    setActivePanel(panel);
    // Close expanded activity when switching to non-activity panels
    if (panel !== 'activity') {
      setExpandedActivity(null);
    }
  };

  // Close expanded activity when switching subtasks; in V2 mode swap per-ticket activity logs
  const handleSubtaskClick = (subtaskId: string) => {
    if (appView === 'v2' && activeSubtask && subtaskId !== activeSubtask) {
      // Persist whatever is currently in activityEvents back to the map for the outgoing ticket
      setV2ActivitiesMap(prev => ({ ...prev, [activeSubtask]: activityEvents }));
      // Load the incoming ticket's saved activities (or its creation event if first visit)
      const saved = v2ActivitiesMap[subtaskId];
      setActivityEvents(saved ?? [makeCreatedEvent(subtaskId)]);
    }
    setActiveSubtask(subtaskId);
    setExpandedActivity(null);
  };

  const handleMarkSubtaskCompleted = (subtaskId: string, isCompleted: boolean) => {
    // Only allow marking as completed, not reverting
    if (!isCompleted) return;
    
    // Update the subtask status
    setSubtasks(prevSubtasks =>
      prevSubtasks.map(subtask =>
        subtask.id === subtaskId
          ? { ...subtask, status: 'done' as const }
          : subtask
      )
    );

    // Add activity event
    const now = new Date();
    const timestamp = `${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}/${now.getFullYear()} ${now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    
    const subtask = subtasks.find(s => s.id === subtaskId);
    if (subtask) {
      setActivityEvents(prev => [
        {
          id: prev.length + 1,
          timestamp: timestamp,
          action: `marked ${subtask.displayId} as completed`,
          user: 'Sarah Chen',
          type: 'user',
          badgeColor: 'bg-green-100 text-green-700 border-green-200',
          icon: 'check'
        },
        ...prev
      ]);
    }
  };

  const currentSubtask = subtasks.find(s => s.id === activeSubtask) || subtasks[0];

  // Helper function to get base subtask type (removes instance suffix like -1, -2, etc.)
  const getBaseSubtaskType = (subtaskId: string): string => {
    // Remove instance suffix (e.g., "pause-fb-work-1" -> "pause-fb-work")
    return subtaskId.replace(/-\d+$/, '');
  };

  // Check if current subtask is a text-based note (shows TextNotesContent)
  const baseType = activeSubtask ? getBaseSubtaskType(activeSubtask) : '';
  const isTextNoteSubtask = activeSubtask && ['failure-notes', 'rca-identification', 'issue-fixed-note'].includes(baseType);

  // Check if current subtask is datadog validation
  const isDatadogValidationSubtask = baseType === 'datadog-validation';

  // Check if current subtask is pause/resume app workers
  // 'pause-resume-worker' is the ID used for ARE-T098 in V2; 'pause-fb-work' covers V1 and ARE-T087
  const isPauseResumeWorkerSubtask = baseType === 'pause-fb-work' || baseType === 'pause-resume-worker';

  // Check if current subtask is credential management
  const isCredentialManagementSubtask = baseType === 'credential-management';

  // Check if current subtask is state management (generate data file)
  const isStateManagementSubtask = baseType === 'state-management';

  // Check if anomaly detected subtask is active
  const isAnomalyDetectedSubtask = activeSubtask === 'anomaly-detected';

  // Check if alert bucket is selected
  const isAlertBucket = activeSubtask === 'alert-bucket';

  // Check if current subtask should show dropbox (NOT text notes, datadog, pause/resume, credential, state, alert-bucket, anomaly)
  const isDropboxSubtask = activeSubtask && !['failure-notes', 'datadog-validation', 'rca-identification', 'issue-fixed-note', 'pause-fb-work', 'pause-resume-worker', 'credential-management', 'state-management'].includes(baseType) && !isAlertBucket && !isAnomalyDetectedSubtask;

  // Show empty state if no subtasks
  const showEmptyState = subtasks.length === 0;

  // Load ticket state from backend when ticket ID changes
  useEffect(() => {
    if (!currentTicketId || currentView !== 'detail') return;

    const loadTicketState = async () => {
      isLoadingTicket.current = true;
      setIsLoadingTicketState(true);

      // Set the ticket context for useSubtaskData hook
      setCurrentTicketContext(currentTicketId);

      try {
        const savedState = await fetchTicketState(currentTicketId);

        if (savedState) {
          // Restore state from backend
          let restoredSubtasks = savedState.subtasks;
          let restoredActiveSubtask = savedState.activeSubtask;

          // T105: ensure anomaly-detected subtask is always present
          if (currentTicketId === 'ARE-T105') {
            const hasAnomaly = restoredSubtasks.some((s: any) => s.id === 'anomaly-detected');
            if (!hasAnomaly) {
              restoredSubtasks = [anomalySubtask, ...restoredSubtasks];
            }
            if (!restoredActiveSubtask) restoredActiveSubtask = 'anomaly-detected';
          }

          if (currentTicketId.startsWith('FD-') && pendingV2ActiveSubtaskRef.current) {
            restoredActiveSubtask = pendingV2ActiveSubtaskRef.current;
          }

          setSubtasks(restoredSubtasks);
          setActivityEvents(savedState.activityEvents);
          setActiveSubtask(restoredActiveSubtask);
          setSubtaskCounter(savedState.subtaskCounter);

          if (currentTicketId.startsWith('FD-') && savedState.v2ActivitiesMap) {
            setV2ActivitiesMap(savedState.v2ActivitiesMap);
          }

          // Restore subtask data (table contents, etc.)
          if (savedState.subtaskData) {
            restoreTicketSubtaskData(currentTicketId, savedState.subtaskData);
          }
          
          console.log(`Restored ticket state from backend for ${currentTicketId}`);
          toast.success('Ticket loaded from saved state');
        } else {
          // No saved state - initialize with defaults
          console.log(`No saved state for ${currentTicketId}, starting fresh`);

          if (currentTicketId.startsWith('FD-')) {
            initializeV2TicketState(currentTicketId, pendingV2ActiveSubtaskRef.current || undefined);
          } else {
            // Reset to empty state for new V1 tickets
            setSubtasks([]);
            setActivityEvents([
              {
                id: 1,
                timestamp: '10/13/2025 10:53PM',
                action: 'created ticket',
                user: 'System',
                type: 'system'
              }
            ]);
            setActiveSubtask('');
            setSubtaskCounter({});
          }
        }
      } catch (error) {
        console.error('Error loading ticket state:', error);
        toast.error('Failed to load ticket state');
      } finally {
        // Small delay to ensure state updates are processed
        setTimeout(() => {
          isLoadingTicket.current = false;
          pendingV2ActiveSubtaskRef.current = '';
          setIsLoadingTicketState(false);
        }, 100);
      }
    };

    loadTicketState();
  }, [currentTicketId, currentView]);

  // Save ticket state to backend whenever it changes (with debounce)
  useEffect(() => {
    // Don't save if we're still loading the ticket
    if (isLoadingTicket.current || !currentTicketId || currentView !== 'detail') return;

    // Clear existing timer
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }

    // Set new timer to save after 1 second of inactivity
    saveTimerRef.current = setTimeout(async () => {
      // Get all subtask data from the store
      const subtaskData = getTicketSubtaskData(currentTicketId);
      
      const ticketState = {
        subtasks,
        activityEvents,
        activeSubtask,
        subtaskCounter,
        subtaskData, // Include all subtask table data
        v2ActivitiesMap: currentTicketId.startsWith('FD-') ? v2ActivitiesMap : undefined,
        timestamp: new Date().toISOString()
      };

      const success = await saveTicketState(currentTicketId, ticketState);
      
      if (success) {
        console.log(`Auto-saved ticket state for ${currentTicketId}`);
      } else {
        console.error(`Failed to auto-save ticket state for ${currentTicketId}`);
      }
    }, 1000);

    // Cleanup
    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [subtasks, activityEvents, activeSubtask, subtaskCounter, currentTicketId, currentView, v2ActivitiesMap]);

  // Handle context banner click — adds suggested subtask and opens modal pre-filled in post-search state
  const handleContextBannerClick = () => {
    handleTaskAdded('Terminate workflow');
    setShowBannerTerminateModal(true);
  };

  // Handle reset ticket request
  const handleResetTicketRequest = () => {
    setShowResetModal(true);
  };

  // Handle reset confirmation
  const handleConfirmReset = async () => {
    if (!currentTicketId) return;

    setIsResetting(true);

    try {
      const success = await resetTicket(currentTicketId);
      
      if (success) {
        // Clear all subtask data from global store for v1 only
        if (!currentTicketId.startsWith('FD-')) {
          clearAllSubtaskData();
        }

        // Clear local state
        setSubtasks([]);
        setActivityEvents([
          {
            id: 1,
            timestamp: '10/13/2025 10:53PM',
            action: 'created ticket',
            user: 'System',
            type: 'system'
          }
        ]);
        setActiveSubtask('');
        setSubtaskCounter({});
        setV2ActivitiesMap({});
        setExpandedActivity(null);
        setActivePanel(null);

        // Restore base state after reset
        if (currentTicketId.startsWith('FD-')) {
          initializeV2TicketState(currentTicketId);
        } else if (currentTicketId === 'ARE-T105') {
          setSubtasks([anomalySubtask]);
          setActiveSubtask('anomaly-detected');
        }

        toast.success(`${currentTicketId} has been reset successfully`);
        setShowResetModal(false);
      } else {
        toast.error('Failed to reset ticket');
      }
    } catch (error) {
      console.error('Error resetting ticket:', error);
      toast.error('An error occurred while resetting the ticket');
    } finally {
      setIsResetting(false);
    }
  };

  const handleFDTicketClick = (fdId: string, areId?: string) => {
    // Block autosave while FD ticket state is loading/restoring
    isLoadingTicket.current = true;
    const fdTicket = v2FDTickets.find(t => t.fdId === fdId);
    if (!fdTicket) return;
    const selectedAreticket = areId
      ? fdTicket.areTickets.find(ticket => ticket.displayId === areId)
      : undefined;
    const firstId = selectedAreticket?.id || fdTicket.areTickets[0]?.id || '';

    setCurrentFDId(fdId);
    setCurrentTicketId(fdId);
    // Preserve clicked ARE focus through async restore
    pendingV2ActiveSubtaskRef.current = firstId;
    setActiveSubtask(firstId);
    setCurrentView('detail');
    setActivePanel(null);
    setSubtasks(fdTicket.areTickets);
    setActiveSubtask(firstId);
    setCurrentTicketContext(fdId);
  };

  const handleNavigate = (view: string) => {
    if (view === 'ticket-view-2') {
      setAppView('v2');
      setCurrentView('listing');
      setActivePanel(null);
    } else if (view === 'tickets' || view === 'home') {
      setAppView('v1');
      setCurrentView('listing');
      setActivePanel(null);
    }
  };

  const handleTicketClick = (ticketId: string) => {
    setCurrentTicketId(ticketId);
    setCurrentView('detail');
    setActivePanel(null);
    
    // Initialize ticket-specific state based on ticket ID
    if (ticketId === 'ARE-T102') {
      // Pre-populate ARE-T102 with specified subtasks and statuses
      const t102Subtasks: Subtask[] = [
        {
          id: 'failure-notes',
          displayId: 'S871',
          title: 'Failure Notes',
          status: 'done',
          tags: ['ARE', 'Prod'],
          owner: 'Sarah Chen',
          eta: 'Jan 14, 5:00 PM',
          lastUpdated: '2h ago'
        },
        {
          id: 'terminate-workflow',
          displayId: 'S873',
          title: 'Terminate workflow',
          status: 'done',
          tags: ['ARE', 'Prod'],
          owner: 'Alex Kumar',
          eta: 'Jan 15, 10:00 AM',
          lastUpdated: '30m ago'
        },
        {
          id: 'disable-trigger',
          displayId: 'S874',
          title: 'Enable/Disable Trigger',
          status: 'done',
          tags: ['ARE', 'Prod'],
          owner: 'Sarah Chen',
          eta: 'Jan 15, 11:00 AM',
          lastUpdated: '2h ago'
        },
        {
          id: 'pause-fb-work',
          displayId: 'S875',
          title: 'Pause/Resume App Worker',
          status: 'done',
          tags: ['ARE', 'Prod'],
          owner: 'Mike Johnson',
          eta: 'Jan 15, 12:00 PM',
          lastUpdated: '3h ago'
        },
        {
          id: 'rca-identification',
          displayId: 'S876',
          title: 'Identify the RCA',
          status: 'in-progress',
          tags: ['ARE', 'Prod'],
          owner: 'Alex Kumar',
          eta: 'Jan 15, 1:00 PM',
          lastUpdated: '1h ago'
        },
        {
          id: 'credential-management',
          displayId: 'S877',
          title: 'Credential Management',
          status: 'in-progress',
          tags: ['ARE', 'Prod'],
          owner: 'Alex Kumar',
          eta: 'Jan 15, 10:00 AM',
          lastUpdated: '30m ago'
        },
        {
          id: 'issue-fixed-note',
          displayId: 'S878',
          title: 'Issue fixed Note',
          status: 'done',
          tags: ['ARE', 'Prod'],
          owner: 'Sarah Chen',
          eta: 'Jan 15, 2:00 PM',
          lastUpdated: '4h ago'
        },
        {
          id: 'deploy-change',
          displayId: 'S879',
          title: 'Safe Deployment',
          status: 'done',
          tags: ['ARE', 'Prod'],
          owner: 'Mike Johnson',
          eta: 'Jan 15, 3:00 PM',
          lastUpdated: '4h ago'
        }
      ];
      
      setSubtasks(t102Subtasks);
      setActiveSubtask('failure-notes');
    } else if (ticketId === 'ARE-T105') {
      // T105 always has the anomaly-detected subtask hardcoded
      setSubtasks([anomalySubtask]);
      setActiveSubtask('anomaly-detected');
    } else {
      // All other tickets (T101, T103, T104) start empty — backend load will restore if saved state exists
      setSubtasks([]);
      setActiveSubtask('');
    }
  };

  const handleBackToListing = () => {
    setCurrentView('listing');
    setCurrentTicketId('');
    setCurrentFDId('');
    setActivePanel(null);
  };

  // Derived flags
  const isView2 = appView === 'v2';
  const currentFDTicketDef = isView2 ? v2FDTickets.find(t => t.fdId === currentFDId) : undefined;

  // If we're on the listing view, show the listing page
  if (currentView === 'listing') {
    return (
      <TicketAlertProvider ticketId="listing">
        <Toaster position="top-right" richColors />
        {appView === 'v2' ? (
          <TicketView2ListingPage onFDTicketClick={handleFDTicketClick} onNavigate={handleNavigate} />
        ) : (
          <TicketListingPage onTicketClick={handleTicketClick} onNavigate={handleNavigate} />
        )}
      </TicketAlertProvider>
    );
  }

  // Otherwise, show the ticket detail view
  return (
    <TicketAlertProvider ticketId={currentTicketId}>
      <ActivityProvider initialEvents={activityEvents}>
        <ActivitySync onActivityEventsChange={setActivityEvents} />
        <LayoutProvider isFloatingPanelOpen={activePanel !== null}>
          <Toaster position="top-right" richColors />
          <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 overflow-hidden">
            {/* Left Sidebar */}
            <LeftSidebar activeView={isView2 ? 'ticket-view-2' : 'home'} onResetTicket={handleResetTicketRequest} onNavigate={handleNavigate} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Ticket Info Bar */}
              <TicketInfoBar
                isActivityOpen={isActivityOpen}
                onToggleActivity={() => setIsActivityOpen(!isActivityOpen)}
                ticketId={isView2 ? (currentFDTicketDef?.fdId || currentTicketId) : currentTicketId}
                ticketTitle={isView2 ? currentFDTicketDef?.fdTitle : TICKET_TITLES[currentTicketId]}
                onBackClick={handleBackToListing}
                isView2={isView2}
                fdId={currentFDTicketDef?.fdId}
                fdStatus={currentFDTicketDef?.fdStatus}
                fdTitle={currentFDTicketDef?.fdTitle}
              />

              {/* Loading Spinner */}
              {isLoadingTicketState && (
                <div className="flex items-center justify-center h-[calc(100vh-200px)]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
                    <p className="text-sm text-gray-600">Loading ticket data...</p>
                  </div>
                </div>
              )}

              {/* Main Content Area */}
              {!isLoadingTicketState && showEmptyState ? (
                <div className="relative w-full overflow-hidden">
                  <div className="content-stretch flex gap-[23.993px] items-start pb-0 pl-[23.993px] pr-0 pt-6">
                    <EmptyState
                      onTaskAdded={handleTaskAdded}
                      contextData={currentContextData}
                      onContextBannerClick={currentContextData ? handleContextBannerClick : undefined}
                    />

                    {/* Right Sidebar with Panel Support */}
                    <div className="flex gap-0 flex-shrink-0 relative z-10">
                      {/* Panel Content */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden h-[calc(100vh-200px)] ${
                          expandedActivity
                            ? 'w-[800px] opacity-100'
                            : activePanel && activePanel !== 'monitor' && activePanel !== 'affected-transaction' ? 'w-96 opacity-100' : 'w-0 opacity-0'
                        }`}
                      >
                        {expandedActivity ? (
                          <ActivityDetailPanel activity={expandedActivity} onClose={handleCloseExpandedActivity} />
                        ) : (
                          <>
                            {activePanel === 'activity' && <ActivityCard events={activityEvents} onRecordClick={handleRecordClick} expandedActivity={expandedActivity} onClose={handleCloseExpandedActivity} />}
                            {activePanel === 'ai-summary' && <AISummaryPanel ticketId={currentTicketId} ticketTitle="Workflow execution failure - WELLSKY-ELIGIBILITY" subtasks={subtasks} activities={activityEvents} tenantWorkflowData={tenantWorkflowData} />}
                            {activePanel === 'ask-are' && <AskAREPanel ticketId={currentTicketId} ticketTitle="Workflow execution failure - WELLSKY-ELIGIBILITY" subtasks={subtasks} activities={activityEvents} tenantWorkflowData={tenantWorkflowData} />}
                          </>
                        )}
                      </div>

                      {/* Icon Bar */}
                      <RightSidebar activePanel={activePanel} onPanelChange={handlePanelChange} />
                    </div>
                  </div>

                  {/* Monitor Panel - Fixed Overlay for Empty State */}
                  {(activePanel === 'monitor' || activePanel === 'affected-transaction') && (
                    <div className="fixed left-[98px] right-20 top-[142px] bottom-0 z-50">
                      <MonitorPanel subtasks={subtasks} initialTab={activePanel === 'affected-transaction' ? 'affected-transaction' : 'performance'} onClose={() => setActivePanel(null)} />
                    </div>
                  )}
                </div>
              ) : !isLoadingTicketState ? (
                <div className="relative overflow-hidden">
                  <div className="flex gap-6 p-6">
                    {/* Left Sidebar - Subtasks */}
                    <div
                      className={`flex-shrink-0 h-[calc(100vh-200px)] transition-all duration-300 ease-in-out overflow-hidden ${
                        activePanel === 'monitor' || activePanel === 'affected-transaction' ? 'w-0 opacity-0' : 'w-72 opacity-100'
                      }`}
                    >
                      <SubtaskSidebar
                        subtasks={subtasks}
                        activeSubtask={activeSubtask}
                        onSubtaskClick={handleSubtaskClick}
                        onTaskAdded={handleTaskAdded}
                        isView2={isView2}
                      />
                    </div>

                    {/* Center - Main Content Card */}
                    <div
                      className={`flex-1 min-w-0 h-[calc(100vh-200px)] transition-all duration-300 ease-in-out overflow-hidden ${
                        activePanel === 'monitor' || activePanel === 'affected-transaction' ? 'w-0 opacity-0' : 'flex-1 opacity-100'
                      }`}
                    >
                      {isAnomalyDetectedSubtask ? (
                        <AnomalyDetectedContent />
                      ) : isAlertBucket ? (
                        <AlertsTableContent />
                      ) : isTextNoteSubtask ? (
                        <TextNotesContent
                          subtaskTitle={`${currentSubtask.displayId} | ${currentSubtask.title}`}
                          subtaskId={activeSubtask}
                          onMarkCompleted={handleMarkSubtaskCompleted}
                          isCompleted={currentSubtask.status === 'done'}
                        />
                      ) : isDatadogValidationSubtask ? (
                        <DatadogValidationContent
                          subtaskTitle={`${currentSubtask.displayId} | ${currentSubtask.title}`}
                          subtaskId={activeSubtask}
                          onMarkCompleted={handleMarkSubtaskCompleted}
                          isCompleted={currentSubtask.status === 'done'}
                        />
                      ) : isPauseResumeWorkerSubtask ? (
                        <PauseResumeAppWorkersContent
                          subtaskTitle={`${currentSubtask.displayId} | ${currentSubtask.title}`}
                          subtaskId={activeSubtask}
                          onPause={handlePauseWorker}
                          onResume={handleResumeWorker}
                          onMarkCompleted={handleMarkSubtaskCompleted}
                          isCompleted={currentSubtask.status === 'done'}
                        />
                      ) : isCredentialManagementSubtask ? (
                        <CredentialManagementContent
                          subtaskTitle={`${currentSubtask.displayId} | ${currentSubtask.title}`}
                          subtaskId={activeSubtask}
                          onRelease={handleReleaseCredential}
                          onMarkCompleted={handleMarkSubtaskCompleted}
                          isCompleted={currentSubtask.status === 'done'}
                          onActivityAdd={handleCredentialActivity}
                        />
                      ) : isStateManagementSubtask ? (
                        <GenerateDataFileContent
                          subtaskTitle={`${currentSubtask.displayId} | ${currentSubtask.title}`}
                          subtaskId={activeSubtask}
                          onMarkCompleted={handleMarkSubtaskCompleted}
                          isCompleted={currentSubtask.status === 'done'}
                        />
                      ) : isDropboxSubtask ? (
                        <DropboxContent
                          subtaskTitle={`${currentSubtask.displayId} | ${currentSubtask.title}`}
                          subtaskId={activeSubtask}
                          onEnableTrigger={handleEnableTrigger}
                          onDisableTrigger={handleDisableTrigger}
                          onMarkCompleted={handleMarkSubtaskCompleted}
                          isCompleted={currentSubtask.status === 'done'}
                          onTerminate={handleTerminateWorkflow}
                          onReTrigger={handleReTriggerWorkflow}
                          pendingInstances={bannerTerminateInstances.length > 0 ? bannerTerminateInstances : undefined}
                          onPendingInstancesConsumed={() => setBannerTerminateInstances([])}
                        />
                      ) : (
                        <MainContent subtaskTitle={`${currentSubtask.displayId} | ${currentSubtask.title}`} />
                      )}
                    </div>

                    {/* Right Sidebar with Icon Bar */}
                    <div className="flex gap-0 h-[calc(100vh-200px)] flex-shrink-0 relative">
                      {/* Secondary Panel Content */}
                      <div
                        className={`h-full transition-all duration-300 ease-in-out overflow-hidden ${
                          activePanel === 'monitor' || activePanel === 'affected-transaction'
                            ? 'w-[calc(100vw-172px-104px)] opacity-100'
                            : activePanel === 'ai-summary' || activePanel === 'ask-are'
                              ? 'w-96 opacity-100'
                              : 'w-0 opacity-0'
                        }`}
                      >
                        {activePanel === 'ai-summary' && <AISummaryPanel ticketId={currentTicketId} ticketTitle="Workflow execution failure - WELLSKY-ELIGIBILITY" subtasks={subtasks} activities={activityEvents} tenantWorkflowData={tenantWorkflowData} />}
                        {activePanel === 'ask-are' && <AskAREPanel ticketId={currentTicketId} ticketTitle="Workflow execution failure - WELLSKY-ELIGIBILITY" subtasks={subtasks} activities={activityEvents} tenantWorkflowData={tenantWorkflowData} />}
                        {(activePanel === 'monitor' || activePanel === 'affected-transaction') && <MonitorPanel subtasks={subtasks} initialTab={activePanel === 'affected-transaction' ? 'affected-transaction' : 'performance'} onClose={() => setActivePanel(null)} />}
                      </div>

                      {/* Activity Timeline Panel - Always visible when activity is active */}
                      <div
                        className={`h-full transition-all duration-300 ease-in-out overflow-hidden ${
                          activePanel === 'activity'
                            ? 'w-96 opacity-100'
                            : 'w-0 opacity-0'
                        }`}
                      >
                        <ActivityCard events={activityEvents} onRecordClick={handleRecordClick} expandedActivity={expandedActivity} onClose={handleCloseExpandedActivity} />
                      </div>

                      {/* Icon Bar - Absolutely positioned to stay fixed */}
                      <div className="absolute right-0 top-0 bottom-0 w-20 z-10">
                        <RightSidebar activePanel={activePanel} onPanelChange={handlePanelChange} />
                      </div>

                      {/* Spacer to maintain layout space for icon bar */}
                      <div className="w-20 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Expanded Detail Panel - Overlay positioned absolutely */}
                  {expandedActivity && (
                    <div className="fixed left-[98px] right-[500px] top-[166px] h-[calc(100vh-200px)] z-50 pointer-events-none">
                      <div className="h-full w-[800px] ml-auto pointer-events-auto shadow-2xl">
                        <ActivityDetailPanel activity={expandedActivity} onClose={handleCloseExpandedActivity} />
                      </div>
                    </div>
                  )}
                </div>
              ) : null}

              {/* Action Center */}
              <ActionCenter />

              {/* Reset Ticket Modal */}
              <ResetTicketModal
                isOpen={showResetModal}
                onClose={() => setShowResetModal(false)}
                onConfirm={handleConfirmReset}
                ticketId={currentTicketId}
                isResetting={isResetting}
              />

              {/* Terminate Workflow Modal — opened from context banner on empty ticket */}
              <TerminateWorkflowModal
                isOpen={showBannerTerminateModal}
                onClose={() => setShowBannerTerminateModal(false)}
                prefilledWorkflow={T104_CONTEXT.workflow}
                prefilledVariant={T104_CONTEXT.variant}
                prefilledTenant={T104_CONTEXT.tenant}
                onAddToTicket={(instances) => {
                  setBannerTerminateInstances(instances);
                  handleTerminateWorkflow(instances.length);
                  setShowBannerTerminateModal(false);
                }}
              />
            </div>
          </div>
        </LayoutProvider>
      </ActivityProvider>
    </TicketAlertProvider>
  );
}