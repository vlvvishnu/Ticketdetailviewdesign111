import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ActivityEvent } from './ActivityCard';

interface ActivityDetailPanelProps {
  activity: ActivityEvent;
  onClose: () => void;
}

interface ActionRecord {
  id: string;
  tenant: string;
  workflow: string;
  actionPerformed: string;
  previousState: string;
  currentState: string;
  executionStatus: 'Success' | 'Failed';
  timestamp: string;
  executedBy: string;
}

// Mock data generator based on activity event
function generateMockRecords(activity: ActivityEvent): ActionRecord[] {
  const recordCount = parseInt(activity.badge?.match(/(\d+)/)?.[1] || '0');
  const records: ActionRecord[] = [];
  
  // Determine action details based on activity type
  let actionType = 'Unknown';
  let previousState = 'N/A';
  let currentState = 'N/A';
  
  if (activity.action.includes('paused')) {
    actionType = 'Paused';
    previousState = 'Running';
    currentState = 'Paused';
  } else if (activity.action.includes('resumed')) {
    actionType = 'Resumed';
    previousState = 'Paused';
    currentState = 'Running';
  } else if (activity.action.includes('enabled trigger')) {
    actionType = 'Enabled';
    previousState = 'Disabled';
    currentState = 'Enabled';
  } else if (activity.action.includes('disabled trigger')) {
    actionType = 'Disabled';
    previousState = 'Enabled';
    currentState = 'Disabled';
  } else if (activity.action.includes('released credential')) {
    actionType = 'Released';
    previousState = 'Locked';
    currentState = 'Available';
  } else if (activity.action.includes('approved credentials')) {
    actionType = 'Approved';
    previousState = 'Pending';
    currentState = 'Approved';
  } else if (activity.action.includes('requested credential')) {
    actionType = 'Requested';
    previousState = 'N/A';
    currentState = 'Pending';
  }
  
  const tenants = ['tenant-alpha', 'tenant-beta', 'tenant-gamma', 'tenant-delta'];
  const workflows = ['workflow-001', 'workflow-002', 'workflow-003', 'workflow-004'];
  
  for (let i = 0; i < recordCount; i++) {
    records.push({
      id: `rec-${activity.id}-${i + 1}`,
      tenant: tenants[i % tenants.length],
      workflow: workflows[i % workflows.length],
      actionPerformed: actionType,
      previousState,
      currentState,
      executionStatus: Math.random() > 0.1 ? 'Success' : 'Failed',
      timestamp: activity.timestamp,
      executedBy: activity.user
    });
  }
  
  return records;
}

export function ActivityDetailPanel({ activity, onClose }: ActivityDetailPanelProps) {
  const records = generateMockRecords(activity);
  
  return (
    <div className="h-full bg-white rounded-xl border border-gray-200 shadow-lg flex flex-col">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-br from-blue-50 via-white to-white flex-shrink-0">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Action Details</h2>
            <p className="text-xs text-gray-500 mt-1">
              <span className="font-medium text-gray-700">{activity.user}</span>
              {' '}{activity.action}
              {' • '}
              <span className="text-gray-400">{activity.timestamp}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                Tenant
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                Workflow
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                Action Performed
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                Previous State
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                Current State
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                Timestamp
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                Executed By
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-700 font-mono">
                  {record.tenant}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 font-mono">
                  {record.workflow}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                  {record.actionPerformed}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {record.previousState}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                  {record.currentState}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      record.executionStatus === 'Success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {record.executionStatus}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 font-mono">
                  {record.timestamp}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {record.executedBy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Showing {records.length} record{records.length !== 1 ? 's' : ''}
          </p>
          <p className="text-xs text-gray-400">
            Read-only view • No actions available
          </p>
        </div>
      </div>
    </div>
  );
}