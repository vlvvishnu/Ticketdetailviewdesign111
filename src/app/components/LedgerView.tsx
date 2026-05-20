import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { ChevronRight, ChevronDown, Search, ChevronUp, CalendarIcon, Clock, File, Users } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import svgPaths from '../imports/svg-nlv5247c7f';
import completeSvgPaths from '../imports/svg-3mkstx25d2';
import redirectSvgPaths from '../imports/svg-o92yqwqs8a';
import { TriggerDetailsTable } from './TriggerDetailsTable';
import { MultiSelect } from './ui/multi-select';
import { CompactWorkflowTable } from './CompactWorkflowTable';
import { TicketsView } from './TicketsView';
import { AgentsView } from './AgentsView';
import { activityLogData, credentialActivityLogData, triggerActivityLogData, appWorkerActivityLogData } from './activityLogData';
import { TicketSummaryOverlay } from './TicketSummaryOverlay';
import { getParentTicketId } from './ticketData';
import { TabFilterBar, FilterConfig } from './TabFilterBar';
import { OptionalFiltersBar } from './OptionalFiltersBar';
import { WorkflowMonitorSlideout } from './WorkflowMonitorSlideout';
import { TransactionMetricsDashboard } from './TransactionMetricsDashboard';
import { WorkflowFullDetailsView } from './WorkflowFullDetailsView';
import { VersionTable, VersionData } from './VersionTable';
import { OpenTasksView, TriggerOpenTasksView, AppWorkerOpenTasksView, ActivityLogView } from './LedgerViewOpenTasks';

// Real data structures
const tenants = [
  'Amedisys Home Health',
  'Enhabit Home Health & Hospice',
  'LHC Group Hospice Care',
  'AccentCare Home Health',
  'Bayada Home Health Care',
  'Gentiva Health Services',
  'VITAS Healthcare Hospice',
  'ProMedica Home Health',
  'Elara Caring Home Health',
  'Interim HealthCare Inc.'
];

const applications = ['HCHB', 'Availity', 'WellSky'];

const variants = ['Homehealth', 'Hospice'];

// Optional filter options
const statusOptions = ['Active', 'Inactive', 'Degraded', 'Pending'];
const credentialPolicyOptions = ['Shared', 'Centralized', 'Distributed', 'Dedicated'];
const triggerTypeOptions = ['Authorization', 'Claims', 'Eligibility', 'Referral'];
const healthStatusOptions = ['Healthy', 'Unhealthy', 'Warning'];
const timezoneOptions = ['EST', 'CST', 'MST', 'PST', 'UTC'];
const workflowTypeOptions = ['Authorization', 'Claims', 'Eligibility', 'Referral'];

const credentialData = [
  {
    id: 1,
    tenant: 'Amedisys Home Health',
    workflowName: 'Amedisys_authorization_homehealth',
    appName: 'HCHB',
    totalWorkers: 5,
    uniqueCredentials: 2,
    credentialsPerWorker: 'Shared (1 per 2–3 workers)',
    busyWorkers: 3,
    idleWorkers: 2,
    healthyWorkers: 5,
    unhealthyWorkers: 0,
    credentialPolicy: 'Shared',
    currentStatus: 'Active',
    isRunning: true,
    avgWorkersLast30Days: 5
  },
  {
    id: 2,
    tenant: 'Enhabit Home Health & Hospice',
    workflowName: 'Enhabit_authorization_homehealth',
    appName: 'Availity',
    totalWorkers: 4,
    uniqueCredentials: 1,
    credentialsPerWorker: 'Central (1 for all workers)',
    busyWorkers: 3,
    idleWorkers: 1,
    healthyWorkers: 4,
    unhealthyWorkers: 0,
    credentialPolicy: 'Centralized',
    currentStatus: 'Active',
    isRunning: true,
    avgWorkersLast30Days: 4
  },
  {
    id: 3,
    tenant: 'LHC Group Hospice Care',
    workflowName: 'LHC_authorization_hospice',
    appName: 'WellSky',
    totalWorkers: 6,
    uniqueCredentials: 3,
    credentialsPerWorker: 'Balanced (1 per 2 workers)',
    busyWorkers: 4,
    idleWorkers: 2,
    healthyWorkers: 5,
    unhealthyWorkers: 1,
    credentialPolicy: 'Distributed',
    currentStatus: 'Degraded',
    isRunning: false,
    avgWorkersLast30Days: 8
  },
  {
    id: 4,
    tenant: 'AccentCare Home Health',
    workflowName: 'AccentCare_claims_homehealth',
    appName: 'Availity',
    totalWorkers: 3,
    uniqueCredentials: 3,
    credentialsPerWorker: 'Dedicated (1 per worker)',
    busyWorkers: 2,
    idleWorkers: 1,
    healthyWorkers: 3,
    unhealthyWorkers: 0,
    credentialPolicy: 'Dedicated',
    currentStatus: 'Active',
    isRunning: true,
    avgWorkersLast30Days: 3
  },
  {
    id: 5,
    tenant: 'Bayada Home Health Care',
    workflowName: 'Bayada_authorization_homehealth',
    appName: 'HCHB',
    totalWorkers: 5,
    uniqueCredentials: 2,
    credentialsPerWorker: 'Shared',
    busyWorkers: 2,
    idleWorkers: 3,
    healthyWorkers: 4,
    unhealthyWorkers: 1,
    credentialPolicy: 'Shared',
    currentStatus: 'Warning',
    isRunning: false,
    avgWorkersLast30Days: 6
  },
  {
    id: 6,
    tenant: 'Gentiva Health Services',
    workflowName: 'Gentiva_authorization_homehealth',
    appName: 'WellSky',
    totalWorkers: 7,
    uniqueCredentials: 2,
    credentialsPerWorker: 'Shared',
    busyWorkers: 5,
    idleWorkers: 2,
    healthyWorkers: 7,
    unhealthyWorkers: 0,
    credentialPolicy: 'Shared',
    currentStatus: 'Active',
    isRunning: true,
    avgWorkersLast30Days: 6
  },
  {
    id: 7,
    tenant: 'VITAS Healthcare Hospice',
    workflowName: 'Vitas_authorization_hospice',
    appName: 'Availity',
    totalWorkers: 4,
    uniqueCredentials: 2,
    credentialsPerWorker: 'Dedicated',
    busyWorkers: 3,
    idleWorkers: 1,
    healthyWorkers: 4,
    unhealthyWorkers: 0,
    credentialPolicy: 'Dedicated',
    currentStatus: 'Active',
    isRunning: true,
    avgWorkersLast30Days: 4
  },
  {
    id: 8,
    tenant: 'ProMedica Home Health',
    workflowName: 'ProMedica_eligibility_homehealth',
    appName: 'WellSky',
    totalWorkers: 3,
    uniqueCredentials: 1,
    credentialsPerWorker: 'Central',
    busyWorkers: 1,
    idleWorkers: 2,
    healthyWorkers: 3,
    unhealthyWorkers: 0,
    credentialPolicy: 'Centralized',
    currentStatus: 'Active',
    isRunning: true,
    avgWorkersLast30Days: 3
  },
  {
    id: 9,
    tenant: 'Elara Caring Home Health',
    workflowName: 'Elara_claims_homehealth',
    appName: 'Availity',
    totalWorkers: 4,
    uniqueCredentials: 2,
    credentialsPerWorker: 'Shared',
    busyWorkers: 2,
    idleWorkers: 2,
    healthyWorkers: 4,
    unhealthyWorkers: 0,
    credentialPolicy: 'Shared',
    currentStatus: 'Active',
    isRunning: false,
    avgWorkersLast30Days: 4
  },
  {
    id: 10,
    tenant: 'Interim HealthCare Inc.',
    workflowName: 'Interim_authorization_homehealth',
    appName: 'HCHB',
    totalWorkers: 5,
    uniqueCredentials: 3,
    credentialsPerWorker: 'Distributed',
    busyWorkers: 4,
    idleWorkers: 1,
    healthyWorkers: 5,
    unhealthyWorkers: 0,
    credentialPolicy: 'Distributed',
    currentStatus: 'Active',
    isRunning: true,
    avgWorkersLast30Days: 5
  }
];

const triggerDetailsData = [
  {
    id: 1,
    triggerName: 'Trig 1',
    triggerTimeSchedule: 'Daily at 6:00 AM EST',
    triggerInput: 'Patient eligibility batch file',
    workflowName: 'Amedisys_authorization_homehealth',
    clientName: 'Amedisys Home Health',
    triggerStatus: 'Active',
    timezone: 'EST',
    workflowType: 'Authorization'
  },
  {
    id: 2,
    triggerName: 'Trig 2',
    triggerTimeSchedule: 'Every 2 hours',
    triggerInput: 'Authorization request queue',
    workflowName: 'Enhabit_authorization_homehealth',
    clientName: 'Enhabit Home Health & Hospice',
    triggerStatus: 'Active',
    timezone: 'CST',
    workflowType: 'Authorization'
  },
  {
    id: 3,
    triggerName: 'Trig 1',
    triggerTimeSchedule: 'Daily at 8:00 PM EST',
    triggerInput: 'Hospice claims batch',
    workflowName: 'LHC_authorization_hospice',
    clientName: 'LHC Group Hospice Care',
    triggerStatus: 'Inactive',
    timezone: 'EST',
    workflowType: 'Authorization'
  },
  {
    id: 4,
    triggerName: 'Trig 2',
    triggerTimeSchedule: 'Weekdays at 9:00 AM EST',
    triggerInput: 'Claims validation data',
    workflowName: 'AccentCare_claims_homehealth',
    clientName: 'AccentCare Home Health',
    triggerStatus: 'Active',
    timezone: 'EST',
    workflowType: 'Claims'
  },
  {
    id: 5,
    triggerName: 'Trig 1',
    triggerTimeSchedule: 'Every 4 hours',
    triggerInput: 'Patient authorization sync',
    workflowName: 'Bayada_authorization_homehealth',
    clientName: 'Bayada Home Health Care',
    triggerStatus: 'Paused',
    timezone: 'PST',
    workflowType: 'Authorization'
  },
  {
    id: 6,
    triggerName: 'Trig 2',
    triggerTimeSchedule: 'Daily at 7:00 AM EST',
    triggerInput: 'Authorization batch process',
    workflowName: 'Gentiva_authorization_homehealth',
    clientName: 'Gentiva Health Services',
    triggerStatus: 'Active',
    timezone: 'EST',
    workflowType: 'Authorization'
  }
];

const openTasksData = [
  {
    id: 'WF284751',
    subticket: 'SUB-001',
    workflowName: 'Amedisys_authorization_homehealth',
    tenant: 'Amedisys Home Health',
    variant: 'Homehealth',
    application: 'HCHB',
    numCredentials: 2,
    durationForAccess: '4 Hours',
    environment: 'Production',
    submittedBy: 'Sarah Martinez',
    submittedFor: 'Self',
    reason: 'Authorization processing for new patient onboarding workflow',
    status: 'Pending Approval',
    message: 'Approval request sent to approvers.'
  },
  {
    id: 'WF391826',
    subticket: 'SUB-001',
    workflowName: 'Enhabit_authorization_homehealth',
    tenant: 'Enhabit Home Health & Hospice',
    variant: 'Homehealth',
    application: 'Availity',
    numCredentials: 1,
    durationForAccess: '1 Day',
    environment: 'Production',
    submittedBy: 'Sarah Martinez',
    submittedFor: 'vishnu.venkatesan@e5.ai, ranjith.t@e5.ai',
    reason: 'Same subticket but different tenant workflow',
    status: 'Pending Approval',
    message: 'Request rejected by compliance team'
  },
  {
    id: 'WF572094',
    subticket: 'SUB-001',
    workflowName: 'LHC_authorization_hospice',
    tenant: 'LHC Group Hospice Care',
    variant: 'Hospice',
    application: 'WellSky',
    numCredentials: 3,
    durationForAccess: '2 Days',
    environment: 'Production',
    submittedBy: 'Sarah Martinez',
    submittedFor: 'Self, john.doe@e5.ai, jane.smith@e5.ai',
    reason: 'Same subticket but different variant workflow',
    status: 'Pending Approval',
    message: '1Password Link sent via email'
  },
  {
    id: 'WF648352',
    subticket: 'SUB-002',
    workflowName: 'AccentCare_claims_homehealth',
    tenant: 'AccentCare Home Health',
    variant: 'Homehealth',
    application: 'Availity',
    numCredentials: 2,
    durationForAccess: '1 Day',
    environment: 'Production',
    submittedBy: 'David Thompson',
    submittedFor: 'operations.team@e5.ai, claims.processing@e5.ai',
    reason: 'Urgent claims submission for pending reimbursements',
    status: 'Running Now',
    message: 'User released the credential'
  },
  {
    id: 'WF729418',
    subticket: 'SUB-003',
    workflowName: 'Bayada_authorization_homehealth',
    tenant: 'Bayada Home Health Care',
    variant: 'Homehealth',
    application: 'HCHB',
    numCredentials: 2,
    durationForAccess: '6 Hours',
    environment: 'Staging',
    submittedBy: 'Lisa Anderson',
    submittedFor: 'Self',
    reason: 'Testing authorization workflow updates in staging environment',
    status: 'Pending Approval',
    message: 'Awaiting security team approval for staging access'
  },
  {
    id: 'WF856203',
    subticket: 'SUB-004',
    workflowName: 'Vitas_authorization_hospice',
    tenant: 'VITAS Healthcare Hospice',
    variant: 'Hospice',
    application: 'Availity',
    numCredentials: 1,
    durationForAccess: '8 Hours',
    environment: 'Production',
    submittedBy: 'Robert Kim',
    submittedFor: 'Self, admissions.team@vitashealthcare.com',
    reason: 'Hospice patient admission authorization processing',
    status: 'Running Now',
    message: 'Workflow executing successfully'
  }
];

// Workflow Info data - 10 workflows matching credential data
const workflowInfoData = [
  {
    workflowName: 'Amedisys_authorization_homehealth',
    clientName: 'Amedisys Home Health',
    appName: 'HCHB',
    workflowType: 'Authorization',
    currentStatus: 'Active',
    nextScheduledRun: '2025-01-12 06:00 AM',
    lastRunTime: '2025-01-11 06:00 AM',
    runFrequency: 'Every 24 hours',
    timezone: 'EST'
  },
  {
    workflowName: 'Enhabit_authorization_homehealth',
    clientName: 'Enhabit Home Health & Hospice',
    appName: 'Availity',
    workflowType: 'Authorization',
    currentStatus: 'Active',
    nextScheduledRun: '2025-01-12 08:00 AM',
    lastRunTime: '2025-01-11 08:00 AM',
    runFrequency: 'Daily',
    timezone: 'CST'
  },
  {
    workflowName: 'LHC_authorization_hospice',
    clientName: 'LHC Group Hospice Care',
    appName: 'WellSky',
    workflowType: 'Authorization',
    currentStatus: 'Degraded',
    nextScheduledRun: '2025-01-13 07:00 AM',
    lastRunTime: '2025-01-11 07:00 AM',
    runFrequency: 'Every 48 hours',
    timezone: 'EST'
  },
  {
    workflowName: 'AccentCare_claims_homehealth',
    clientName: 'AccentCare Home Health',
    appName: 'Availity',
    workflowType: 'Claims',
    currentStatus: 'Active',
    nextScheduledRun: '2025-01-12 04:00 AM',
    lastRunTime: '2025-01-11 04:00 AM',
    runFrequency: 'Daily',
    timezone: 'EST'
  },
  {
    workflowName: 'Bayada_authorization_homehealth',
    clientName: 'Bayada Home Health Care',
    appName: 'HCHB',
    workflowType: 'Authorization',
    currentStatus: 'Warning',
    nextScheduledRun: '2025-01-13 02:00 PM',
    lastRunTime: '2025-01-11 02:00 PM',
    runFrequency: 'Every 48 hours',
    timezone: 'PST'
  },
  {
    workflowName: 'Gentiva_authorization_homehealth',
    clientName: 'Gentiva Health Services',
    appName: 'WellSky',
    workflowType: 'Authorization',
    currentStatus: 'Active',
    nextScheduledRun: '2025-01-12 03:00 PM',
    lastRunTime: '2025-01-11 03:00 PM',
    runFrequency: 'Every 12 hours',
    timezone: 'MST'
  },
  {
    workflowName: 'Vitas_authorization_hospice',
    clientName: 'VITAS Healthcare Hospice',
    appName: 'Availity',
    workflowType: 'Authorization',
    currentStatus: 'Active',
    nextScheduledRun: '2025-01-13 05:00 AM',
    lastRunTime: '2025-01-12 05:00 AM',
    runFrequency: 'Every 24 hours',
    timezone: 'EST'
  },
  {
    workflowName: 'ProMedica_eligibility_homehealth',
    clientName: 'ProMedica Home Health',
    appName: 'WellSky',
    workflowType: 'Eligibility',
    currentStatus: 'Active',
    nextScheduledRun: '2025-01-12 10:00 AM',
    lastRunTime: '2025-01-11 10:00 AM',
    runFrequency: 'Every 6 hours',
    timezone: 'CST'
  },
  {
    workflowName: 'Elara_claims_homehealth',
    clientName: 'Elara Caring Home Health',
    appName: 'Availity',
    workflowType: 'Claims',
    currentStatus: 'Active',
    nextScheduledRun: '2025-01-11 11:00 PM',
    lastRunTime: '2025-01-11 09:00 PM',
    runFrequency: 'Every 2 hours',
    timezone: 'EST'
  },
  {
    workflowName: 'Interim_authorization_homehealth',
    clientName: 'Interim HealthCare Inc.',
    appName: 'HCHB',
    workflowType: 'Authorization',
    currentStatus: 'Active',
    nextScheduledRun: '2025-01-12 01:00 AM',
    lastRunTime: '2025-01-11 01:00 AM',
    runFrequency: 'Every 12 hours',
    timezone: 'PST'
  }
];

// Version visibility data
const versionVisibilityData: VersionData[] = [
  {
    tenant: 'Amedisys Home Health',
    workflow: 'Amedisys_authorization_homehealth',
    baseWorkflowVersion: 'v2.5.0',
    workflowVariant: 'Homehealth',
    variantVersion: 'v1.8.2',
    variantVersionStatus: 'up-to-date',
    configVersion: 'v3.1.0',
    platformVersion: 'v4.2.1',
    avility: { sdk: 'v2.3.1', worker: 'v1.9.0' },
    carelon: { sdk: '-', worker: '-' },
    sftp: { sdk: 'v1.2.0', worker: 'v1.0.5' },
    waystar: { sdk: '-', worker: '-' },
    iqies: { sdk: 'v3.0.1', worker: 'v2.1.0' }
  },
  {
    tenant: 'Enhabit Home Health & Hospice',
    workflow: 'Enhabit_authorization_homehealth',
    baseWorkflowVersion: 'v2.5.0',
    workflowVariant: 'Homehealth',
    variantVersion: 'v1.7.8',
    variantVersionStatus: 'update available',
    configVersion: 'v3.0.5',
    platformVersion: 'v4.2.1',
    avility: { sdk: 'v2.3.1', worker: 'v1.9.0' },
    carelon: { sdk: 'v1.5.2', worker: 'v1.2.0' },
    sftp: { sdk: '-', worker: '-' },
    waystar: { sdk: 'v2.1.0', worker: 'v1.5.3' },
    iqies: { sdk: '-', worker: '-' }
  },
  {
    tenant: 'LHC Group Hospice Care',
    workflow: 'LHC_authorization_hospice',
    baseWorkflowVersion: 'v2.4.2',
    workflowVariant: 'Hospice',
    variantVersion: 'v1.6.5',
    variantVersionStatus: 'deprecated',
    configVersion: 'v2.9.8',
    platformVersion: 'v4.1.5',
    avility: { sdk: '-', worker: '-' },
    carelon: { sdk: 'v1.5.2', worker: 'v1.2.0' },
    sftp: { sdk: 'v1.2.0', worker: 'v1.0.5' },
    waystar: { sdk: '-', worker: '-' },
    iqies: { sdk: 'v2.8.9', worker: 'v2.0.3' }
  },
  {
    tenant: 'AccentCare Home Health',
    workflow: 'AccentCare_claims_homehealth',
    baseWorkflowVersion: 'v2.5.0',
    workflowVariant: 'Homehealth',
    variantVersion: 'v1.8.2',
    variantVersionStatus: 'up-to-date',
    configVersion: 'v3.1.0',
    platformVersion: 'v4.2.1',
    avility: { sdk: 'v2.3.1', worker: 'v1.9.0' },
    carelon: { sdk: '-', worker: '-' },
    sftp: { sdk: 'v1.2.0', worker: 'v1.0.5' },
    waystar: { sdk: 'v2.1.0', worker: 'v1.5.3' },
    iqies: { sdk: '-', worker: '-' }
  },
  {
    tenant: 'Bayada Home Health Care',
    workflow: 'Bayada_authorization_homehealth',
    baseWorkflowVersion: 'v2.5.0',
    workflowVariant: 'Homehealth',
    variantVersion: 'v1.8.0',
    variantVersionStatus: 'update available',
    configVersion: 'v3.0.9',
    platformVersion: 'v4.2.0',
    avility: { sdk: 'v2.2.8', worker: 'v1.8.5' },
    carelon: { sdk: 'v1.4.9', worker: 'v1.1.8' },
    sftp: { sdk: '-', worker: '-' },
    waystar: { sdk: '-', worker: '-' },
    iqies: { sdk: 'v3.0.1', worker: 'v2.1.0' }
  },
  {
    tenant: 'Gentiva Health Services',
    workflow: 'Gentiva_authorization_homehealth',
    baseWorkflowVersion: 'v2.5.0',
    workflowVariant: 'Homehealth',
    variantVersion: 'v1.8.2',
    variantVersionStatus: 'up-to-date',
    configVersion: 'v3.1.0',
    platformVersion: 'v4.2.1',
    avility: { sdk: '-', worker: '-' },
    carelon: { sdk: 'v1.5.2', worker: 'v1.2.0' },
    sftp: { sdk: 'v1.2.0', worker: 'v1.0.5' },
    waystar: { sdk: 'v2.1.0', worker: 'v1.5.3' },
    iqies: { sdk: '-', worker: '-' }
  },
  {
    tenant: 'VITAS Healthcare Hospice',
    workflow: 'Vitas_authorization_hospice',
    baseWorkflowVersion: 'v2.5.0',
    workflowVariant: 'Hospice',
    variantVersion: 'v1.7.5',
    variantVersionStatus: 'up-to-date',
    configVersion: 'v3.0.8',
    platformVersion: 'v4.2.1',
    avility: { sdk: 'v2.3.1', worker: 'v1.9.0' },
    carelon: { sdk: '-', worker: '-' },
    sftp: { sdk: '-', worker: '-' },
    waystar: { sdk: 'v2.1.0', worker: 'v1.5.3' },
    iqies: { sdk: 'v3.0.1', worker: 'v2.1.0' }
  },
  {
    tenant: 'ProMedica Home Health',
    workflow: 'ProMedica_eligibility_homehealth',
    baseWorkflowVersion: 'v2.5.0',
    workflowVariant: 'Homehealth',
    variantVersion: 'v1.8.2',
    variantVersionStatus: 'up-to-date',
    configVersion: 'v3.1.0',
    platformVersion: 'v4.2.1',
    avility: { sdk: 'v2.3.1', worker: 'v1.9.0' },
    carelon: { sdk: 'v1.5.2', worker: 'v1.2.0' },
    sftp: { sdk: 'v1.2.0', worker: 'v1.0.5' },
    waystar: { sdk: '-', worker: '-' },
    iqies: { sdk: '-', worker: '-' }
  },
  {
    tenant: 'Elara Caring Home Health',
    workflow: 'Elara_claims_homehealth',
    baseWorkflowVersion: 'v2.4.8',
    workflowVariant: 'Homehealth',
    variantVersion: 'v1.7.9',
    variantVersionStatus: 'update available',
    configVersion: 'v3.0.2',
    platformVersion: 'v4.1.9',
    avility: { sdk: 'v2.3.1', worker: 'v1.9.0' },
    carelon: { sdk: '-', worker: '-' },
    sftp: { sdk: '-', worker: '-' },
    waystar: { sdk: 'v2.0.8', worker: 'v1.5.0' },
    iqies: { sdk: 'v2.9.5', worker: 'v2.0.8' }
  },
  {
    tenant: 'Interim HealthCare Inc.',
    workflow: 'Interim_authorization_homehealth',
    baseWorkflowVersion: 'v2.5.0',
    workflowVariant: 'Homehealth',
    variantVersion: 'v1.8.2',
    variantVersionStatus: 'up-to-date',
    configVersion: 'v3.1.0',
    platformVersion: 'v4.2.1',
    avility: { sdk: 'v2.3.1', worker: 'v1.9.0' },
    carelon: { sdk: 'v1.5.2', worker: 'v1.2.0' },
    sftp: { sdk: 'v1.2.0', worker: 'v1.0.5' },
    waystar: { sdk: 'v2.1.0', worker: 'v1.5.3' },
    iqies: { sdk: 'v3.0.1', worker: 'v2.1.0' }
  }
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-screen w-[80px] bg-gradient-to-b from-[#38475a] to-[#1c2d42] flex flex-col items-center py-6 z-50">
      {/* Logo */}
      <div className="relative w-[57px] h-[57px] mb-[48px] px-[3px] py-[0px] mx-auto mt-[0px] mr-[11px] ml-[22px]">
        <div className="absolute bg-[#ffe5d1] left-[4px] rounded-[2px] w-[41px] h-[41px] top-[4px]" />
        <div className="absolute bg-[#ff760e] left-0 rounded-[2px] w-[41px] h-[41px] top-0" />
        <div className="absolute left-[6px] top-[5px] w-[29.493px] h-[29.493px]">
          <svg className="block size-full" fill="none" viewBox="0 0 30 30">
            <path d={svgPaths.p157cd800} fill="white" />
            <path d={svgPaths.p1fcaf800} fill="white" />
          </svg>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-4 items-center">
        <button 
          onClick={() => onSectionChange('tickets')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-opacity ${activeSection !== 'tickets' ? 'opacity-60 hover:opacity-80' : ''}`}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
            <path d={svgPaths.p344d1100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
          <p className="text-white text-[12px] text-center">Tickets</p>
        </button>

        <div className="w-[43px] h-[1px] bg-white opacity-24" />

        <button 
          onClick={() => onSectionChange('entity-ledger')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-opacity ${activeSection !== 'entity-ledger' ? 'opacity-60 hover:opacity-80' : ''}`}
        >
          <File className="w-8 h-8 text-white" />
          <p className="text-white text-[12px] text-center leading-tight">Ledger<br />View</p>
        </button>

        <div className="w-[43px] h-[1px] bg-white opacity-24" />

        <button 
          onClick={() => onSectionChange('agents')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-opacity ${activeSection !== 'agents' ? 'opacity-60 hover:opacity-80' : ''}`}
        >
          <Users className="w-8 h-8 text-white" />
          <p className="text-white text-[12px] text-center">Agents</p>
        </button>
      </div>
    </div>
  );
}

export function LedgerView() {
  const [activeSection, setActiveSection] = useState('tickets');
  
  // Common filters (shared across all tabs)
  const [searchBy, setSearchBy] = useState<'tenant' | 'application'>('tenant');
  const [selectedTenants, setSelectedTenants] = useState<string[]>([]);
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>([]);
  const [selectedVariants, setSelectedVariants] = useState<string[]>([]);
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [selectedTenantsForApp, setSelectedTenantsForApp] = useState<string[]>([]);
  const [selectedWorkflowsForApp, setSelectedWorkflowsForApp] = useState<string[]>([]);
  const [selectedVariantsForApp, setSelectedVariantsForApp] = useState<string[]>([]);
  
  // Optional filter states for each main tab
  const [workflowInfoActiveOptionalFilters, setWorkflowInfoActiveOptionalFilters] = useState<string[]>([]);
  const [credentialActiveOptionalFilters, setCredentialActiveOptionalFilters] = useState<string[]>([]);
  const [triggerActiveOptionalFilters, setTriggerActiveOptionalFilters] = useState<string[]>([]);
  const [appWorkerActiveOptionalFilters, setAppWorkerActiveOptionalFilters] = useState<string[]>([]);

  // Optional filter data for each tab
  // Workflow Info optional filters
  const [workflowInfoStatusFilter, setWorkflowInfoStatusFilter] = useState<string[]>([]);
  const [workflowInfoWorkflowTypeFilter, setWorkflowInfoWorkflowTypeFilter] = useState<string[]>([]);

  // Credential optional filters
  const [credentialPolicyFilter, setCredentialPolicyFilter] = useState<string[]>([]);
  const [credentialStatusFilter, setCredentialStatusFilter] = useState<string[]>([]);

  // Trigger optional filters
  const [triggerTypeFilter, setTriggerTypeFilter] = useState<string[]>([]);
  const [triggerStatusFilter, setTriggerStatusFilter] = useState<string[]>([]);
  const [triggerTimezoneFilter, setTriggerTimezoneFilter] = useState<string[]>([]);

  // App Worker optional filters
  const [appWorkerStatusFilter, setAppWorkerStatusFilter] = useState<string[]>([]);
  const [appWorkerHealthFilter, setAppWorkerHealthFilter] = useState<string[]>([]);

  // Version Visibility state
  const [versionSelectedRows, setVersionSelectedRows] = useState<number[]>([]);
  
  // Workflow monitor slideout state
  const [isWorkflowMonitorOpen, setIsWorkflowMonitorOpen] = useState(false);
  const [selectedWorkflowForMonitor, setSelectedWorkflowForMonitor] = useState<any>(null);

  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [activeMainTab, setActiveMainTab] = useState('workflow-info');
  const [activeWorkflowInfoTab, setActiveWorkflowInfoTab] = useState('details');
  const [activeCredentialTab, setActiveCredentialTab] = useState('details');
  const [activeTriggerTab, setActiveTriggerTab] = useState('details');
  const [activeAppWorkerTab, setActiveAppWorkerTab] = useState('details');
  const [filteredCredentialData, setFilteredCredentialData] = useState(credentialData);
  const [filteredTriggerDetailsData, setFilteredTriggerDetailsData] = useState(triggerDetailsData);
  const [selectedTriggerRows, setSelectedTriggerRows] = useState<Set<number>>(new Set());
  const [filteredOpenTasksData, setFilteredOpenTasksData] = useState(openTasksData);
  const [filteredActivityLogData, setFilteredActivityLogData] = useState(activityLogData);
  const [filteredCredentialActivityLogData, setFilteredCredentialActivityLogData] = useState(credentialActivityLogData);
  const [filteredTriggerActivityLogData, setFilteredTriggerActivityLogData] = useState(triggerActivityLogData);
  const [filteredAppWorkerActivityLogData, setFilteredAppWorkerActivityLogData] = useState(appWorkerActivityLogData);
  const [filteredWorkflowInfoData, setFilteredWorkflowInfoData] = useState(workflowInfoData);
  const [ticketToNavigate, setTicketToNavigate] = useState<string | null>(null);

  const handleNavigateToActivityLog = (tenant: string, workflow: string, variant: string) => {
    setActiveSection('entity-ledger');
    setActiveMainTab('workflow-info');
    setActiveWorkflowInfoTab('activity-log');
    setSelectedTenants([tenant]);
    setSelectedWorkflows([workflow]);
    setSelectedVariants([variant]);
    performSearch([tenant], [workflow], [variant], []);
  };

  const handleNavigateToTicket = (ticketId: string) => {
    setTicketToNavigate(ticketId);
    setActiveSection('tickets');
  };

  const handleOpenWorkflowMonitor = (workflowName: string) => {
    const workflowInfo = workflowInfoData.find(w => w.workflowName === workflowName);
    const credentialInfo = credentialData.find(c => c.workflowName === workflowName);
    
    if (workflowInfo && credentialInfo) {
      setSelectedWorkflowForMonitor({
        workflowName: workflowInfo.workflowName,
        tenant: workflowInfo.clientName,
        application: workflowInfo.appName,
        isRunning: credentialInfo.isRunning,
        triggerFrequency: workflowInfo.runFrequency,
        timezone: workflowInfo.timezone,
        totalWorkers: credentialInfo.totalWorkers,
        activeWorkers: credentialInfo.busyWorkers,
        avgWorkersLast30Days: credentialInfo.avgWorkersLast30Days,
        totalCredentials: credentialInfo.uniqueCredentials
      });
      setIsWorkflowMonitorOpen(true);
    }
  };

  const toggleRow = (id: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const handleTriggerRowSelect = (id: number) => {
    const newSelected = new Set(selectedTriggerRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedTriggerRows(newSelected);
  };

  const performSearch = (tenants: string[], workflows: string[], variants: string[], applications: string[] = []) => {
    let filteredCreds = credentialData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = applications.length === 0 || applications.includes(item.appName);
      const variantMatch = variants.length === 0 || 
        variants.some(variant => item.workflowName.toLowerCase().includes(variant.toLowerCase()));
      
      return tenantMatch && workflowMatch && variantMatch && appMatch;
    });
    setFilteredCredentialData(filteredCreds);

    let filteredTriggers = triggerDetailsData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.clientName);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = applications.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && applications.includes(cred.appName));
      
      return tenantMatch && workflowMatch && appMatch;
    });
    setFilteredTriggerDetailsData(filteredTriggers);

    let filteredTasks = openTasksData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const variantMatch = variants.length === 0 || variants.includes(item.variant);
      const appMatch = applications.length === 0 || applications.includes(item.application);
      
      return tenantMatch && workflowMatch && variantMatch && appMatch;
    });
    setFilteredOpenTasksData(filteredTasks);

    let filteredLogs = activityLogData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = applications.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && applications.includes(cred.appName));
      
      return tenantMatch && workflowMatch && appMatch;
    });
    setFilteredActivityLogData(filteredLogs);

    let filteredCredLogs = credentialActivityLogData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = applications.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && applications.includes(cred.appName));
      
      return tenantMatch && workflowMatch && appMatch;
    });
    setFilteredCredentialActivityLogData(filteredCredLogs);

    let filteredTrigLogs = triggerActivityLogData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = applications.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && applications.includes(cred.appName));
      
      return tenantMatch && workflowMatch && appMatch;
    });
    setFilteredTriggerActivityLogData(filteredTrigLogs);

    let filteredWorkerLogs = appWorkerActivityLogData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = applications.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && applications.includes(cred.appName));
      
      return tenantMatch && workflowMatch && appMatch;
    });
    setFilteredAppWorkerActivityLogData(filteredWorkerLogs);

    let filteredWorkflows = workflowInfoData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.clientName);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = applications.length === 0 || applications.includes(item.appName);
      const variantMatch = variants.length === 0 || 
        variants.some(variant => item.workflowName.toLowerCase().includes(variant.toLowerCase()));
      
      return tenantMatch && workflowMatch && variantMatch && appMatch;
    });
    setFilteredWorkflowInfoData(filteredWorkflows);
  };

  const handleSearch = () => {
    if (searchBy === 'tenant') {
      performSearch(selectedTenants, selectedWorkflows, selectedVariants, []);
    } else {
      performSearch(selectedTenantsForApp, selectedWorkflowsForApp, selectedVariantsForApp, selectedApplications);
    }
  };

  const handleWorkflowInfoAddFilter = (filterId: string) => {
    setWorkflowInfoActiveOptionalFilters([...workflowInfoActiveOptionalFilters, filterId]);
  };

  const handleWorkflowInfoRemoveFilter = (filterId: string) => {
    setWorkflowInfoActiveOptionalFilters(workflowInfoActiveOptionalFilters.filter(id => id !== filterId));
    if (filterId === 'status') setWorkflowInfoStatusFilter([]);
    if (filterId === 'workflowType') setWorkflowInfoWorkflowTypeFilter([]);
  };

  const handleCredentialAddFilter = (filterId: string) => {
    setCredentialActiveOptionalFilters([...credentialActiveOptionalFilters, filterId]);
  };

  const handleCredentialRemoveFilter = (filterId: string) => {
    setCredentialActiveOptionalFilters(credentialActiveOptionalFilters.filter(id => id !== filterId));
    if (filterId === 'credentialPolicy') setCredentialPolicyFilter([]);
    if (filterId === 'status') setCredentialStatusFilter([]);
  };

  const handleTriggerAddFilter = (filterId: string) => {
    setTriggerActiveOptionalFilters([...triggerActiveOptionalFilters, filterId]);
  };

  const handleTriggerRemoveFilter = (filterId: string) => {
    setTriggerActiveOptionalFilters(triggerActiveOptionalFilters.filter(id => id !== filterId));
    if (filterId === 'triggerType') setTriggerTypeFilter([]);
    if (filterId === 'status') setTriggerStatusFilter([]);
    if (filterId === 'timezone') setTriggerTimezoneFilter([]);
  };

  const handleAppWorkerAddFilter = (filterId: string) => {
    setAppWorkerActiveOptionalFilters([...appWorkerActiveOptionalFilters, filterId]);
  };

  const handleAppWorkerRemoveFilter = (filterId: string) => {
    setAppWorkerActiveOptionalFilters(appWorkerActiveOptionalFilters.filter(id => id !== filterId));
    if (filterId === 'status') setAppWorkerStatusFilter([]);
    if (filterId === 'healthStatus') setAppWorkerHealthFilter([]);
  };

  const handleVersionSelectRow = (index: number) => {
    if (versionSelectedRows.includes(index)) {
      setVersionSelectedRows(versionSelectedRows.filter(i => i !== index));
    } else {
      setVersionSelectedRows([...versionSelectedRows, index]);
    }
  };

  const handleVersionSelectAll = (selected: boolean) => {
    if (selected) {
      setVersionSelectedRows(versionVisibilityData.map((_, index) => index));
    } else {
      setVersionSelectedRows([]);
    }
  };

  const handleWorkflowInfoSearch = () => {
    const tenants = searchBy === 'tenant' ? selectedTenants : selectedTenantsForApp;
    const workflows = searchBy === 'tenant' ? selectedWorkflows : selectedWorkflowsForApp;
    const variants = searchBy === 'tenant' ? selectedVariants : selectedVariantsForApp;
    const apps = searchBy === 'application' ? selectedApplications : [];

    let filtered = workflowInfoData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.clientName);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = apps.length === 0 || apps.includes(item.appName);
      const variantMatch = variants.length === 0 || 
        variants.some(variant => item.workflowName.toLowerCase().includes(variant.toLowerCase()));
      
      const statusMatch = workflowInfoStatusFilter.length === 0 || workflowInfoStatusFilter.includes(item.currentStatus);
      const workflowTypeMatch = workflowInfoWorkflowTypeFilter.length === 0 || workflowInfoWorkflowTypeFilter.includes(item.workflowType);
      
      return tenantMatch && workflowMatch && variantMatch && appMatch && statusMatch && workflowTypeMatch;
    });
    setFilteredWorkflowInfoData(filtered);

    let filteredLogs = activityLogData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = apps.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && apps.includes(cred.appName));
      
      return tenantMatch && workflowMatch && appMatch;
    });
    setFilteredActivityLogData(filteredLogs);
  };

  useEffect(() => {
    handleWorkflowInfoSearch();
  }, [selectedTenants, selectedWorkflows, selectedVariants, 
      selectedApplications, selectedTenantsForApp, selectedWorkflowsForApp, 
      selectedVariantsForApp, searchBy, workflowInfoStatusFilter, 
      workflowInfoWorkflowTypeFilter]);

  const handleCredentialSearch = () => {
    const tenants = searchBy === 'tenant' ? selectedTenants : selectedTenantsForApp;
    const workflows = searchBy === 'tenant' ? selectedWorkflows : selectedWorkflowsForApp;
    const variants = searchBy === 'tenant' ? selectedVariants : selectedVariantsForApp;
    const apps = searchBy === 'application' ? selectedApplications : [];

    let filtered = credentialData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = apps.length === 0 || apps.includes(item.appName);
      const variantMatch = variants.length === 0 || 
        variants.some(variant => item.workflowName.toLowerCase().includes(variant.toLowerCase()));
      
      const policyMatch = credentialPolicyFilter.length === 0 || credentialPolicyFilter.includes(item.credentialPolicy);
      const statusMatch = credentialStatusFilter.length === 0 || credentialStatusFilter.includes(item.currentStatus);
      
      return tenantMatch && workflowMatch && variantMatch && appMatch && policyMatch && statusMatch;
    });
    setFilteredCredentialData(filtered);

    let filteredCredLogs = credentialActivityLogData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = apps.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && apps.includes(cred.appName));
      
      return tenantMatch && workflowMatch && appMatch;
    });
    setFilteredCredentialActivityLogData(filteredCredLogs);
  };

  useEffect(() => {
    handleCredentialSearch();
  }, [selectedTenants, selectedWorkflows, selectedVariants, 
      selectedApplications, selectedTenantsForApp, selectedWorkflowsForApp, 
      selectedVariantsForApp, searchBy, credentialPolicyFilter, credentialStatusFilter]);

  const handleTriggerSearch = () => {
    const tenants = searchBy === 'tenant' ? selectedTenants : selectedTenantsForApp;
    const workflows = searchBy === 'tenant' ? selectedWorkflows : selectedWorkflowsForApp;
    const variants = searchBy === 'tenant' ? selectedVariants : selectedVariantsForApp;
    const apps = searchBy === 'application' ? selectedApplications : [];

    let filtered = triggerDetailsData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.clientName);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = apps.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && apps.includes(cred.appName));
      
      const triggerTypeMatch = triggerTypeFilter.length === 0 || triggerTypeFilter.includes(item.workflowType);
      const statusMatch = triggerStatusFilter.length === 0 || triggerStatusFilter.includes(item.triggerStatus);
      const timezoneMatch = triggerTimezoneFilter.length === 0 || triggerTimezoneFilter.includes(item.timezone);
      
      return tenantMatch && workflowMatch && appMatch && triggerTypeMatch && statusMatch && timezoneMatch;
    });
    setFilteredTriggerDetailsData(filtered);

    let filteredTrigLogs = triggerActivityLogData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = apps.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && apps.includes(cred.appName));
      
      return tenantMatch && workflowMatch && appMatch;
    });
    setFilteredTriggerActivityLogData(filteredTrigLogs);
  };

  useEffect(() => {
    handleTriggerSearch();
  }, [selectedTenants, selectedWorkflows, selectedVariants, 
      selectedApplications, selectedTenantsForApp, selectedWorkflowsForApp, 
      selectedVariantsForApp, searchBy, triggerTypeFilter, triggerStatusFilter, triggerTimezoneFilter]);

  const handleAppWorkerSearch = () => {
    const tenants = searchBy === 'tenant' ? selectedTenants : selectedTenantsForApp;
    const workflows = searchBy === 'tenant' ? selectedWorkflows : selectedWorkflowsForApp;
    const variants = searchBy === 'tenant' ? selectedVariants : selectedVariantsForApp;
    const apps = searchBy === 'application' ? selectedApplications : [];

    let filtered = credentialData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = apps.length === 0 || apps.includes(item.appName);
      const variantMatch = variants.length === 0 || 
        variants.some(variant => item.workflowName.toLowerCase().includes(variant.toLowerCase()));
      
      const statusMatch = appWorkerStatusFilter.length === 0 || appWorkerStatusFilter.includes(item.currentStatus);
      const healthMatch = appWorkerHealthFilter.length === 0 || 
        appWorkerHealthFilter.some(health => 
          (health === 'Healthy' && item.healthyWorkers > 0) ||
          (health === 'Unhealthy' && item.unhealthyWorkers > 0)
        );
      
      return tenantMatch && workflowMatch && variantMatch && appMatch && statusMatch && (appWorkerHealthFilter.length === 0 || healthMatch);
    });
    setFilteredCredentialData(filtered);

    let filteredWorkerLogs = appWorkerActivityLogData.filter(item => {
      const tenantMatch = tenants.length === 0 || tenants.includes(item.tenant);
      const workflowMatch = workflows.length === 0 || workflows.includes(item.workflowName);
      const appMatch = apps.length === 0 || 
        credentialData.some(cred => cred.workflowName === item.workflowName && apps.includes(cred.appName));
      
      return tenantMatch && workflowMatch && appMatch;
    });
    setFilteredAppWorkerActivityLogData(filteredWorkerLogs);
  };

  useEffect(() => {
    handleAppWorkerSearch();
  }, [selectedTenants, selectedWorkflows, selectedVariants, 
      selectedApplications, selectedTenantsForApp, selectedWorkflowsForApp, 
      selectedVariantsForApp, searchBy, appWorkerStatusFilter, appWorkerHealthFilter]);

  useEffect(() => {
    handleSearch();
  }, [selectedTenants, selectedWorkflows, selectedVariants, selectedApplications, selectedTenantsForApp, selectedWorkflowsForApp, selectedVariantsForApp, searchBy]);

  const workflows = Array.from(new Set(workflowInfoData.map(d => d.workflowName)));

  const filteredWorkflows = selectedTenants.length === 0
    ? workflows
    : Array.from(new Set(workflowInfoData
        .filter(w => selectedTenants.includes(w.clientName))
        .map(w => w.workflowName)));

  const filteredTenantsForApp = selectedApplications.length === 0
    ? tenants
    : Array.from(new Set(credentialData
        .filter(item => selectedApplications.includes(item.appName))
        .map(item => item.tenant)));

  const filteredWorkflowsForApp = selectedApplications.length === 0 && selectedTenantsForApp.length === 0
    ? workflows
    : Array.from(new Set(credentialData
        .filter(item => {
          const appMatch = selectedApplications.length === 0 || selectedApplications.includes(item.appName);
          const tenantMatch = selectedTenantsForApp.length === 0 || selectedTenantsForApp.includes(item.tenant);
          return appMatch && tenantMatch;
        })
        .map(item => item.workflowName)));

  const filteredVariantsForApp = selectedApplications.length === 0 && selectedTenantsForApp.length === 0 && selectedWorkflowsForApp.length === 0
    ? variants
    : Array.from(new Set(credentialData
        .filter(item => {
          const appMatch = selectedApplications.length === 0 || selectedApplications.includes(item.appName);
          const tenantMatch = selectedTenantsForApp.length === 0 || selectedTenantsForApp.includes(item.tenant);
          const workflowMatch = selectedWorkflowsForApp.length === 0 || selectedWorkflowsForApp.includes(item.workflowName);
          return appMatch && tenantMatch && workflowMatch;
        })
        .map(item => {
          if (item.workflowName.toLowerCase().includes('hospice')) return 'Hospice';
          if (item.workflowName.toLowerCase().includes('homehealth')) return 'Homehealth';
          return '';
        })
        .filter(v => v !== '')));

  useEffect(() => {
    if (selectedTenants.length > 0) {
      const validWorkflows = workflowInfoData
        .filter(w => selectedTenants.includes(w.clientName))
        .map(w => w.workflowName);
      
      const updatedSelectedWorkflows = selectedWorkflows.filter(wf => 
        validWorkflows.includes(wf)
      );
      
      if (updatedSelectedWorkflows.length !== selectedWorkflows.length) {
        setSelectedWorkflows(updatedSelectedWorkflows);
      }
    }
  }, [selectedTenants]);

  useEffect(() => {
    if (searchBy === 'tenant') {
      setSelectedApplications([]);
      setSelectedTenantsForApp([]);
      setSelectedWorkflowsForApp([]);
      setSelectedVariantsForApp([]);
    } else {
      setSelectedTenants([]);
      setSelectedWorkflows([]);
      setSelectedVariants([]);
    }
  }, [searchBy]);

  useEffect(() => {
    if (selectedApplications.length > 0) {
      const validTenants = Array.from(new Set(credentialData
        .filter(item => selectedApplications.includes(item.appName))
        .map(item => item.tenant)));
      
      const updatedTenants = selectedTenantsForApp.filter(t => validTenants.includes(t));
      if (updatedTenants.length !== selectedTenantsForApp.length) {
        setSelectedTenantsForApp(updatedTenants);
      }
    }
  }, [selectedApplications]);

  useEffect(() => {
    if (selectedTenantsForApp.length > 0 || selectedApplications.length > 0) {
      const validWorkflows = Array.from(new Set(credentialData
        .filter(item => {
          const appMatch = selectedApplications.length === 0 || selectedApplications.includes(item.appName);
          const tenantMatch = selectedTenantsForApp.length === 0 || selectedTenantsForApp.includes(item.tenant);
          return appMatch && tenantMatch;
        })
        .map(item => item.workflowName)));
      
      const updatedWorkflows = selectedWorkflowsForApp.filter(wf => validWorkflows.includes(wf));
      if (updatedWorkflows.length !== selectedWorkflowsForApp.length) {
        setSelectedWorkflowsForApp(updatedWorkflows);
      }
    }
  }, [selectedTenantsForApp, selectedApplications]);

  return (
    <div className="flex min-h-screen bg-[#1677ff]">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {activeSection === 'tickets' && (
        <div className="ml-[80px] flex-1">
          <div className="bg-white min-h-screen rounded-tl-[15px] rounded-bl-[15px]">
            <TicketsView 
              onNavigateToLedgerView={handleNavigateToActivityLog}
              initialTicketId={ticketToNavigate}
              onTicketViewed={() => setTicketToNavigate(null)}
            />
          </div>
        </div>
      )}

      {activeSection === 'agents' && (
        <div className="ml-[80px] flex-1">
          <div className="bg-white min-h-screen rounded-tl-[15px] rounded-bl-[15px]">
            <AgentsView />
          </div>
        </div>
      )}

      {activeSection === 'entity-ledger' && (
        <div className="ml-[80px] flex-1">
          <div className="flex flex-col h-full bg-white">
            <div className="px-6 py-4 border-b border-[#e6e6e6]">
              <h2 className="text-[24px] mb-1">Ledger View</h2>
              <p className="text-[14px] text-gray-600">Monitor and manage workflow credentials and tasks</p>
            </div>

            <div className="px-8 pt-6 pb-4 border-b border-[#e6e6e6]">
              <TabFilterBar
                searchBy={searchBy}
                onSearchByChange={setSearchBy}
                filters={
                  searchBy === 'tenant'
                    ? [
                        {
                          id: 'tenant',
                          label: 'Tenant',
                          options: tenants,
                          selected: selectedTenants,
                          onChange: setSelectedTenants,
                          placeholder: 'All Tenant'
                        },
                        {
                          id: 'workflow',
                          label: 'Workflow',
                          options: filteredWorkflows,
                          selected: selectedWorkflows,
                          onChange: setSelectedWorkflows,
                          placeholder: 'All Workflow'
                        },
                        {
                          id: 'variant',
                          label: 'Variant',
                          options: variants,
                          selected: selectedVariants,
                          onChange: setSelectedVariants,
                          placeholder: 'All Variants'
                        }
                      ]
                    : [
                        {
                          id: 'application',
                          label: 'Application',
                          options: applications,
                          selected: selectedApplications,
                          onChange: setSelectedApplications,
                          placeholder: 'All Applications'
                        },
                        {
                          id: 'tenant',
                          label: 'Tenant',
                          options: filteredTenantsForApp,
                          selected: selectedTenantsForApp,
                          onChange: setSelectedTenantsForApp,
                          placeholder: 'All Tenant'
                        },
                        {
                          id: 'workflow',
                          label: 'Workflow',
                          options: filteredWorkflows,
                          selected: selectedWorkflowsForApp,
                          onChange: setSelectedWorkflowsForApp,
                          placeholder: 'All Workflow'
                        },
                        {
                          id: 'variant',
                          label: 'Variant',
                          options: filteredVariantsForApp,
                          selected: selectedVariantsForApp,
                          onChange: setSelectedVariantsForApp,
                          placeholder: 'All Variants'
                        }
                      ]
                }
                onSearch={() => {}}
                optionalFilters={[]}
              />
            </div>

          <div className="flex-1 overflow-auto p-8">
          <Tabs value={activeMainTab} onValueChange={setActiveMainTab} className="w-full">
            <div className="relative border-b border-[#CFCFCF] m-[0px] px-[0px] py-[3px] py-[2px]">
              <TabsList className="bg-transparent rounded-none h-auto p-0 gap-[11px] justify-start border-0">
                <TabsTrigger 
                  value="workflow-info" 
                  className="data-[state=active]:bg-[#f6faff] data-[state=active]:text-[#1890ff] data-[state=active]:shadow-[-1px_0px_0px_0px_inset_#cfcfcf,0px_1px_0px_0px_inset_#cfcfcf,1px_0px_0px_0px_inset_#cfcfcf] data-[state=inactive]:text-[rgba(0,0,0,0.85)] rounded-none rounded-t-[5px] px-[16px] py-[9px] text-[14px] leading-[22px]"
                >
                  Workflow Info
                </TabsTrigger>
                <TabsTrigger 
                  value="credential" 
                  className="data-[state=active]:bg-[#f6faff] data-[state=active]:text-[#1890ff] data-[state=active]:shadow-[-1px_0px_0px_0px_inset_#cfcfcf,0px_1px_0px_0px_inset_#cfcfcf,1px_0px_0px_0px_inset_#cfcfcf] data-[state=inactive]:text-[rgba(0,0,0,0.85)] rounded-none rounded-t-[5px] px-[16px] py-[9px] text-[14px] leading-[22px]"
                >
                  Credential
                </TabsTrigger>
                <TabsTrigger 
                  value="trigger" 
                  className="data-[state=active]:bg-[#f6faff] data-[state=active]:text-[#1890ff] data-[state=active]:shadow-[-1px_0px_0px_0px_inset_#cfcfcf,0px_1px_0px_0px_inset_#cfcfcf,1px_0px_0px_0px_inset_#cfcfcf] data-[state=inactive]:text-[rgba(0,0,0,0.85)] rounded-none rounded-t-[5px] px-[16px] py-[9px] text-[14px] leading-[22px]"
                >
                  Trigger
                </TabsTrigger>
                <TabsTrigger 
                  value="app-worker" 
                  className="data-[state=active]:bg-[#f6faff] data-[state=active]:text-[#1890ff] data-[state=active]:shadow-[-1px_0px_0px_0px_inset_#cfcfcf,0px_1px_0px_0px_inset_#cfcfcf,1px_0px_0px_0px_inset_#cfcfcf] data-[state=inactive]:text-[rgba(0,0,0,0.85)] rounded-none rounded-t-[5px] px-[16px] py-[9px] text-[14px] leading-[22px]"
                >
                  App Worker
                </TabsTrigger>
                <TabsTrigger 
                  value="version-visibility" 
                  className="data-[state=active]:bg-[#f6faff] data-[state=active]:text-[#1890ff] data-[state=active]:shadow-[-1px_0px_0px_0px_inset_#cfcfcf,0px_1px_0px_0px_inset_#cfcfcf,1px_0px_0px_0px_inset_#cfcfcf] data-[state=inactive]:text-[rgba(0,0,0,0.85)] rounded-none rounded-t-[5px] px-[16px] py-[9px] text-[14px] leading-[22px]"
                >
                  Version Visibility
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="workflow-info" className="mt-0 border-l border-r border-b border-[#CFCFCF]">
              <OptionalFiltersBar
                optionalFilters={[
                  {
                    id: 'status',
                    label: 'Status',
                    options: statusOptions,
                    selected: workflowInfoStatusFilter,
                    onChange: setWorkflowInfoStatusFilter,
                    placeholder: 'All Status'
                  },
                  {
                    id: 'workflowType',
                    label: 'Workflow Type',
                    options: triggerTypeOptions,
                    selected: workflowInfoWorkflowTypeFilter,
                    onChange: setWorkflowInfoWorkflowTypeFilter,
                    placeholder: 'All Types'
                  }
                ]}
                activeOptionalFilters={workflowInfoActiveOptionalFilters}
                onAddFilter={handleWorkflowInfoAddFilter}
                onRemoveFilter={handleWorkflowInfoRemoveFilter}
              />
              
              <div>
                <div className="flex items-center border-b border-[#CBCBCB] px-5 px-[20px] py-[-3px] mx-[-1px] my-[-8px]">
                  <div className="flex gap-[10px]">
                    <button
                      onClick={() => setActiveWorkflowInfoTab('details')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ${
                        activeWorkflowInfoTab === 'details' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Workflow Details
                      {activeWorkflowInfoTab === 'details' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveWorkflowInfoTab('open-tasks')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeWorkflowInfoTab === 'open-tasks' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Open Tasks
                      {activeWorkflowInfoTab === 'open-tasks' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveWorkflowInfoTab('activity-log')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeWorkflowInfoTab === 'activity-log' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Activity Log
                      {activeWorkflowInfoTab === 'activity-log' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveWorkflowInfoTab('workflow-full-details')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeWorkflowInfoTab === 'workflow-full-details' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Workflow Full Details
                      {activeWorkflowInfoTab === 'workflow-full-details' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveWorkflowInfoTab('transaction-metrics')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeWorkflowInfoTab === 'transaction-metrics' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Transaction Metrics
                      {activeWorkflowInfoTab === 'transaction-metrics' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                  </div>
                </div>

                {activeWorkflowInfoTab === 'details' && (
                  <div className="m-0 p-0">
                    <WorkflowInfoTable data={filteredWorkflowInfoData} onWorkflowClick={handleOpenWorkflowMonitor} />
                  </div>
                )}

                {activeWorkflowInfoTab === 'open-tasks' && (
                  <div className="m-0 p-0">
                    <OpenTasksView 
                      data={openTasksData} 
                      selectedTenants={selectedTenants}
                      selectedWorkflows={selectedWorkflows}
                      selectedVariants={selectedVariants}
                      onNavigateToTicket={handleNavigateToTicket}
                    />
                  </div>
                )}

                {activeWorkflowInfoTab === 'activity-log' && (
                  <div className="m-0 p-0">
                    <ActivityLogView data={filteredActivityLogData} />
                  </div>
                )}

                {activeWorkflowInfoTab === 'workflow-full-details' && (
                  <div className="m-0 p-0">
                    <WorkflowFullDetailsView data={filteredWorkflowInfoData} />
                  </div>
                )}

                {activeWorkflowInfoTab === 'transaction-metrics' && (
                  <div className="m-0 p-0">
                    <TransactionMetricsDashboard className="p-5" />
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="credential" className="mt-0 border-l border-r border-b border-[#CFCFCF]">
              <OptionalFiltersBar
                optionalFilters={[
                  {
                    id: 'credentialPolicy',
                    label: 'Credential Policy',
                    options: credentialPolicyOptions,
                    selected: credentialPolicyFilter,
                    onChange: setCredentialPolicyFilter,
                    placeholder: 'All Policies'
                  },
                  {
                    id: 'status',
                    label: 'Status',
                    options: statusOptions,
                    selected: credentialStatusFilter,
                    onChange: setCredentialStatusFilter,
                    placeholder: 'All Status'
                  }
                ]}
                activeOptionalFilters={credentialActiveOptionalFilters}
                onAddFilter={handleCredentialAddFilter}
                onRemoveFilter={handleCredentialRemoveFilter}
              />
              
              <div className="mt-0">
                <div className="flex items-center border-b border-[#CBCBCB] px-5">
                  <div className="flex gap-[10px]">
                    <button
                      onClick={() => setActiveCredentialTab('details')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ${
                        activeCredentialTab === 'details' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Credential Details
                      {activeCredentialTab === 'details' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveCredentialTab('open-tasks')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeCredentialTab === 'open-tasks' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Open Tasks
                      {activeCredentialTab === 'open-tasks' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveCredentialTab('activity-log')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeCredentialTab === 'activity-log' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Activity Log
                      {activeCredentialTab === 'activity-log' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                  </div>
                </div>

                {activeCredentialTab === 'details' && (
                  <div className="m-0 p-0">
                    <CredentialDetailsTable data={filteredCredentialData} expandedRows={expandedRows} toggleRow={toggleRow} />
                  </div>
                )}

                {activeCredentialTab === 'open-tasks' && (
                  <div className="m-0 p-0">
                    <OpenTasksView 
                      data={openTasksData} 
                      selectedTenants={selectedTenants}
                      selectedWorkflows={selectedWorkflows}
                      selectedVariants={selectedVariants}
                      onNavigateToTicket={handleNavigateToTicket}
                    />
                  </div>
                )}

                {activeCredentialTab === 'activity-log' && (
                  <div className="m-0 p-0">
                    <ActivityLogView data={filteredCredentialActivityLogData} />
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="trigger" className="mt-0 border-l border-r border-b border-[#CFCFCF]">
              <OptionalFiltersBar
                optionalFilters={[
                  {
                    id: 'triggerType',
                    label: 'Trigger Type',
                    options: triggerTypeOptions,
                    selected: triggerTypeFilter,
                    onChange: setTriggerTypeFilter,
                    placeholder: 'All Types'
                  },
                  {
                    id: 'status',
                    label: 'Status',
                    options: statusOptions,
                    selected: triggerStatusFilter,
                    onChange: setTriggerStatusFilter,
                    placeholder: 'All Status'
                  }
                ]}
                activeOptionalFilters={triggerActiveOptionalFilters}
                onAddFilter={handleTriggerAddFilter}
                onRemoveFilter={handleTriggerRemoveFilter}
              />
              
              <div>
                <div className="flex items-center border-b border-[#CBCBCB] px-5">
                  <div className="flex gap-[10px]">
                    <button
                      onClick={() => setActiveTriggerTab('details')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ${
                        activeTriggerTab === 'details' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Trigger Details
                      {activeTriggerTab === 'details' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTriggerTab('open-tasks')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeTriggerTab === 'open-tasks' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Open Tasks
                      {activeTriggerTab === 'open-tasks' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTriggerTab('activity-log')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeTriggerTab === 'activity-log' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Activity Log
                      {activeTriggerTab === 'activity-log' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                  </div>
                </div>

                {activeTriggerTab === 'details' && (
                  <div className="m-0 p-0">
                    <TriggerDetailsTable 
                      data={filteredTriggerDetailsData} 
                      selectedRows={selectedTriggerRows} 
                      onRowSelect={handleTriggerRowSelect} 
                    />
                  </div>
                )}

                {activeTriggerTab === 'open-tasks' && (
                  <div className="m-0 p-0">
                    <TriggerOpenTasksView 
                      data={openTasksData} 
                      selectedTenants={selectedTenants}
                      selectedWorkflows={selectedWorkflows}
                      selectedVariants={selectedVariants}
                    />
                  </div>
                )}

                {activeTriggerTab === 'activity-log' && (
                  <div className="m-0 p-0">
                    <ActivityLogView data={filteredTriggerActivityLogData} />
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="app-worker" className="mt-0 border-l border-r border-b border-[#CFCFCF]">
              <OptionalFiltersBar
                optionalFilters={[
                  {
                    id: 'status',
                    label: 'Status',
                    options: statusOptions,
                    selected: appWorkerStatusFilter,
                    onChange: setAppWorkerStatusFilter,
                    placeholder: 'All Status'
                  },
                  {
                    id: 'healthStatus',
                    label: 'Health Status',
                    options: healthStatusOptions,
                    selected: appWorkerHealthFilter,
                    onChange: setAppWorkerHealthFilter,
                    placeholder: 'All Health Status'
                  }
                ]}
                activeOptionalFilters={appWorkerActiveOptionalFilters}
                onAddFilter={handleAppWorkerAddFilter}
                onRemoveFilter={handleAppWorkerRemoveFilter}
              />
              
              <div>
                <div className="flex items-center border-b border-[#CBCBCB] px-5">
                  <div className="flex gap-[10px]">
                    <button
                      onClick={() => setActiveAppWorkerTab('details')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ${
                        activeAppWorkerTab === 'details' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      App Worker Details
                      {activeAppWorkerTab === 'details' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveAppWorkerTab('open-tasks')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeAppWorkerTab === 'open-tasks' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Open Tasks
                      {activeAppWorkerTab === 'open-tasks' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveAppWorkerTab('activity-log')}
                      className={`relative px-0 py-[13px] font-medium text-[16px] ml-7 ${
                        activeAppWorkerTab === 'activity-log' ? 'text-[#0184f7]' : 'text-[#7e8b99]'
                      }`}
                    >
                      Activity Log
                      {activeAppWorkerTab === 'activity-log' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0184f7]" />
                      )}
                    </button>
                  </div>
                </div>

                {activeAppWorkerTab === 'details' && (
                  <div className="m-0 p-0">
                    <CredentialDetailsTable data={filteredCredentialData} expandedRows={expandedRows} toggleRow={toggleRow} />
                  </div>
                )}

                {activeAppWorkerTab === 'open-tasks' && (
                  <div className="m-0 p-0">
                    <AppWorkerOpenTasksView 
                      data={openTasksData} 
                      selectedTenants={selectedTenants}
                      selectedWorkflows={selectedWorkflows}
                      selectedVariants={selectedVariants}
                    />
                  </div>
                )}

                {activeAppWorkerTab === 'activity-log' && (
                  <div className="m-0 p-0">
                    <ActivityLogView data={filteredAppWorkerActivityLogData} />
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="version-visibility" className="mt-0 border-l border-r border-b border-[#CFCFCF]">
              <div className="overflow-x-auto p-5">
                <VersionTable 
                  data={versionVisibilityData}
                  selectedRows={versionSelectedRows}
                  onSelectRow={handleVersionSelectRow}
                  onSelectAll={handleVersionSelectAll}
                />
              </div>
            </TabsContent>
          </Tabs>
          </div>
        </div>
        </div>
      )}

      {isWorkflowMonitorOpen && selectedWorkflowForMonitor && (
        <WorkflowMonitorSlideout
          isOpen={isWorkflowMonitorOpen}
          onClose={() => setIsWorkflowMonitorOpen(false)}
          workflowData={selectedWorkflowForMonitor}
        />
      )}
    </div>
  );
}

function WorkflowInfoTable({ data, onWorkflowClick }: { data: any[], onWorkflowClick: (workflowName: string) => void }) {
  return (
    <div className="p-5">
      <div className="overflow-x-auto border border-[#e1dfdf] rounded-[4px] max-w-[calc(100vw-180px)]">
        <table className="w-full min-w-[1400px] border-collapse relative">
          <thead className="bg-[#f3f9fc]">
            <tr>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black border-b border-[#e0e0e0] whitespace-nowrap min-w-[280px]">
                Workflow Name
              </th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black border-b border-[#e0e0e0] whitespace-nowrap min-w-[250px]">
                Tenant Name
              </th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black border-b border-[#e0e0e0] whitespace-nowrap min-w-[120px]">
                App Name
              </th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black border-b border-[#e0e0e0] whitespace-nowrap min-w-[200px]">
                Workflow Type
              </th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black border-b border-[#e0e0e0] whitespace-nowrap min-w-[140px]">
                Current Status
              </th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black border-b border-[#e0e0e0] whitespace-nowrap min-w-[100px]">
                Timezone
              </th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black border-b border-[#e0e0e0] whitespace-nowrap min-w-[180px]">
                Next Scheduled Run
              </th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black border-b border-[#e0e0e0] whitespace-nowrap min-w-[180px]">
                Last Run Time
              </th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black border-b border-[#e0e0e0] whitespace-nowrap min-w-[160px]">
                Run Frequency
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b border-[#e0e0e0] hover:bg-gray-50">
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal whitespace-nowrap">
                  <button
                    onClick={() => onWorkflowClick(row.workflowName)}
                    className="text-blue-600 hover:text-blue-800 hover:underline text-left"
                  >
                    {row.workflowName}
                  </button>
                </td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">
                  {row.clientName}
                </td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">
                  {row.appName}
                </td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">
                  {row.workflowType}
                </td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      row.currentStatus === 'Active' ? 'bg-[#52C41A]' : 
                      row.currentStatus === 'Pending' ? 'bg-[#FAAD14]' : 
                      row.currentStatus === 'Running' ? 'bg-[#1890FF]' : 
                      row.currentStatus === 'Failed' ? 'bg-[#FF4D4F]' : 
                      row.currentStatus === 'Paused' ? 'bg-[#8C8C8C]' : 
                      'bg-[#8993AE]'
                    }`} />
                    {row.currentStatus}
                  </div>
                </td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    {row.timezone}
                  </span>
                </td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">
                  {row.nextScheduledRun}
                </td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">
                  {row.lastRunTime}
                </td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">
                  {row.runFrequency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CredentialDetailsTable({ data, expandedRows, toggleRow }: { data: any[], expandedRows: Set<number>, toggleRow: (id: number) => void }) {
  const allCredentialDetailsData = [
    { id: 1, resourceName: 'HCHB_Amedisys_Prod_Login', assetName: 'HCHB_Amedisys_Prod_homehealth_login1', username: 'amedisys_admin', appName: 'HCHB', credentialPolicy: 'Shared', workflowName: 'Amedisys_authorization_homehealth', tenant: 'Amedisys Home Health', variant: 'Homehealth', env: 'Production', daysToExpiry: 30, action: 'sendReminder', comment: 'Reminder has been sent. Followed up with Andrew Cassety' },
    { id: 2, resourceName: 'HCHB_Amedisys_Prod_Login', assetName: 'HCHB_Amedisys_Prod_homehealth_login2', username: 'amedisys_user', appName: 'HCHB', credentialPolicy: 'Shared', workflowName: 'Amedisys_authorization_homehealth', tenant: 'Amedisys Home Health', variant: 'Homehealth', env: 'Production', daysToExpiry: 45, action: 'shareSlack', comment: 'Backup credential for peak hours' },
    { id: 3, resourceName: 'Availity_Enhabit_Prod_Login', assetName: 'Availity_Enhabit_Prod_homehealth_login1', username: 'enhabit_central', appName: 'Availity', credentialPolicy: 'Centralized', workflowName: 'Enhabit_authorization_homehealth', tenant: 'Enhabit Home Health & Hospice', variant: 'Homehealth', env: 'Production', daysToExpiry: 15, action: 'sendReminder', comment: 'Central credential used by all workers' },
    { id: 4, resourceName: 'WellSky_LHC_Prod_Login', assetName: 'WellSky_LHC_Prod_hospice_login1', username: 'lhc_hospice_admin1', appName: 'WellSky', credentialPolicy: 'Distributed', workflowName: 'LHC_authorization_hospice', tenant: 'LHC Group Hospice Care', variant: 'Hospice', env: 'Production', daysToExpiry: 7, action: 'sendReminder', comment: 'High priority credential' },
    { id: 5, resourceName: 'WellSky_LHC_Prod_Login', assetName: 'WellSky_LHC_Prod_hospice_login2', username: 'lhc_hospice_admin2', appName: 'WellSky', credentialPolicy: 'Distributed', workflowName: 'LHC_authorization_hospice', tenant: 'LHC Group Hospice Care', variant: 'Hospice', env: 'Production', daysToExpiry: 60, action: null, comment: '' },
    { id: 6, resourceName: 'WellSky_LHC_Prod_Login', assetName: 'WellSky_LHC_Prod_hospice_login3', username: 'lhc_hospice_user', appName: 'WellSky', credentialPolicy: 'Distributed', workflowName: 'LHC_authorization_hospice', tenant: 'LHC Group Hospice Care', variant: 'Hospice', env: 'Production', daysToExpiry: 90, action: null, comment: '' },
    { id: 7, resourceName: 'Availity_AccentCare_Prod_Login', assetName: 'Availity_AccentCare_Prod_homehealth_login1', username: 'accent_worker1', appName: 'Availity', credentialPolicy: 'Dedicated', workflowName: 'AccentCare_claims_homehealth', tenant: 'AccentCare Home Health', variant: 'Homehealth', env: 'Production', daysToExpiry: 120, action: null, comment: 'Dedicated to worker 1' },
    { id: 8, resourceName: 'Availity_AccentCare_Prod_Login', assetName: 'Availity_AccentCare_Prod_homehealth_login2', username: 'accent_worker2', appName: 'Availity', credentialPolicy: 'Dedicated', workflowName: 'AccentCare_claims_homehealth', tenant: 'AccentCare Home Health', variant: 'Homehealth', env: 'Production', daysToExpiry: 120, action: null, comment: 'Dedicated to worker 2' },
    { id: 9, resourceName: 'Availity_AccentCare_Prod_Login', assetName: 'Availity_AccentCare_Prod_homehealth_login3', username: 'accent_worker3', appName: 'Availity', credentialPolicy: 'Dedicated', workflowName: 'AccentCare_claims_homehealth', tenant: 'AccentCare Home Health', variant: 'Homehealth', env: 'Production', daysToExpiry: 120, action: 'shareSlack', comment: 'Dedicated to worker 3' },
    { id: 10, resourceName: 'HCHB_Bayada_Staging_Login', assetName: 'HCHB_Bayada_Staging_homehealth_login1', username: 'bayada_test_admin', appName: 'HCHB', credentialPolicy: 'Shared', workflowName: 'Bayada_authorization_homehealth', tenant: 'Bayada Home Health Care', variant: 'Homehealth', env: 'Staging', daysToExpiry: 180, action: null, comment: 'Test environment credential' },
    { id: 11, resourceName: 'HCHB_Bayada_Staging_Login', assetName: 'HCHB_Bayada_Staging_homehealth_login2', username: 'bayada_test_user', appName: 'HCHB', credentialPolicy: 'Shared', workflowName: 'Bayada_authorization_homehealth', tenant: 'Bayada Home Health Care', variant: 'Homehealth', env: 'Staging', daysToExpiry: 180, action: null, comment: 'Test environment credential' },
    { id: 12, resourceName: 'WellSky_Gentiva_Prod_Login', assetName: 'WellSky_Gentiva_Prod_homehealth_login1', username: 'gentiva_shared1', appName: 'WellSky', credentialPolicy: 'Shared', workflowName: 'Gentiva_authorization_homehealth', tenant: 'Gentiva Health Services', variant: 'Homehealth', env: 'Production', daysToExpiry: 25, action: 'sendReminder', comment: 'Shared across 3-4 workers' },
    { id: 13, resourceName: 'WellSky_Gentiva_Prod_Login', assetName: 'WellSky_Gentiva_Prod_homehealth_login2', username: 'gentiva_shared2', appName: 'WellSky', credentialPolicy: 'Shared', workflowName: 'Gentiva_authorization_homehealth', tenant: 'Gentiva Health Services', variant: 'Homehealth', env: 'Production', daysToExpiry: 25, action: 'sendReminder', comment: 'Shared across 3-4 workers' },
    { id: 14, resourceName: 'Availity_Vitas_Prod_Login', assetName: 'Availity_Vitas_Prod_hospice_login1', username: 'vitas_worker1', appName: 'Availity', credentialPolicy: 'Dedicated', workflowName: 'Vitas_authorization_hospice', tenant: 'VITAS Healthcare Hospice', variant: 'Hospice', env: 'Production', daysToExpiry: 10, action: 'sendReminder', comment: 'Dedicated credential for hospice worker 1' },
    { id: 15, resourceName: 'Availity_Vitas_Prod_Login', assetName: 'Availity_Vitas_Prod_hospice_login2', username: 'vitas_worker2', appName: 'Availity', credentialPolicy: 'Dedicated', workflowName: 'Vitas_authorization_hospice', tenant: 'VITAS Healthcare Hospice', variant: 'Hospice', env: 'Production', daysToExpiry: 10, action: 'sendReminder', comment: 'Dedicated credential for hospice worker 2' },
    { id: 16, resourceName: 'WellSky_ProMedica_Prod_Login', assetName: 'WellSky_ProMedica_Prod_homehealth_login1', username: 'promedica_central', appName: 'WellSky', credentialPolicy: 'Centralized', workflowName: 'ProMedica_eligibility_homehealth', tenant: 'ProMedica Home Health', variant: 'Homehealth', env: 'Production', daysToExpiry: 90, action: null, comment: 'Single credential for all workers' },
    { id: 17, resourceName: 'Availity_Elara_Prod_Login', assetName: 'Availity_Elara_Prod_homehealth_login1', username: 'elara_shared1', appName: 'Availity', credentialPolicy: 'Shared', workflowName: 'Elara_claims_homehealth', tenant: 'Elara Caring Home Health', variant: 'Homehealth', env: 'Production', daysToExpiry: 40, action: 'shareSlack', comment: 'Shared between 2 workers' },
    { id: 18, resourceName: 'Availity_Elara_Prod_Login', assetName: 'Availity_Elara_Prod_homehealth_login2', username: 'elara_shared2', appName: 'Availity', credentialPolicy: 'Shared', workflowName: 'Elara_claims_homehealth', tenant: 'Elara Caring Home Health', variant: 'Homehealth', env: 'Production', daysToExpiry: 40, action: null, comment: 'Shared between 2 workers' },
  ];

  const handleAction = (action: string | null, credentialId: number) => {
    if (action === 'sendReminder') {
      alert(`Sending password expiry reminder for credential ${credentialId}`);
    } else if (action === 'shareSlack') {
      alert(`Sharing credential info on Slack for credential ${credentialId}`);
    }
  };

  const renderActionButton = (action: string | null, credentialId: number) => {
    if (!action) return null;
    
    if (action === 'sendReminder') {
      return (
        <button
          onClick={() => handleAction(action, credentialId)}
          className="px-3 py-1.5 text-[12px] font-['Inter',sans-serif] font-medium text-white bg-[#1890ff] hover:bg-[#40a9ff] rounded transition-colors"
        >
          Send Reminder
        </button>
      );
    } else if (action === 'shareSlack') {
      return (
        <button
          onClick={() => handleAction(action, credentialId)}
          className="px-3 py-1.5 text-[12px] font-['Inter',sans-serif] font-medium text-[#1890ff] bg-white border border-[#1890ff] hover:bg-[#e6f7ff] rounded transition-colors"
        >
          Share on Slack
        </button>
      );
    }
    return null;
  };

  return (
    <div className="m-5">
      <div className="overflow-x-auto border border-[#e1dfdf] rounded-[4px]">
        <table className="w-full min-w-[1800px]">
          <thead className="bg-[#f3f9fc] border-b border-[#e0e0e0]">
            <tr>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[220px]">Resource Name</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[280px]">Asset Name</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[150px]">Username</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[120px]">App Name</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[160px]">Credential Policy</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[280px]">Workflow Name</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[220px]">Tenant</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[120px]">Variant</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[120px]">Environment</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[130px]">Days to Expiry</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[150px]">Actions</th>
              <th className="p-3 text-left text-[12px] font-['Inter',sans-serif] font-semibold text-black whitespace-nowrap min-w-[300px]">Comment</th>
            </tr>
          </thead>
          <tbody>
            {allCredentialDetailsData.map(row => (
              <tr key={row.id} className="border-b border-[#e0e0e0] hover:bg-gray-50">
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.resourceName}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.assetName}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.username}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.appName}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.credentialPolicy}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.workflowName}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.tenant}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.variant}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.env}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">{row.daysToExpiry !== null ? row.daysToExpiry : ''}</td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black whitespace-nowrap">
                  {renderActionButton(row.action, row.id)}
                </td>
                <td className="p-3 text-[12px] font-['Inter',sans-serif] font-normal text-black">{row.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
