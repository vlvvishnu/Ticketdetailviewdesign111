import { Sparkles, Clock, AlertCircle, TrendingUp, ChevronDown, ChevronRight } from 'lucide-react';
import { type Subtask } from '@/app/components/SubtaskTabs';
import { type ActivityEvent } from '@/app/components/ActivityCard';
import { useState } from 'react';
import { useTicketAlerts } from '@/app/contexts/TicketAlertContext';

interface TenantWorkflowData {
  tenant: string;
  workflow: string;
  workflowType: string;
  period: string;
}

interface AISummaryPanelProps {
  ticketId?: string;
  ticketTitle?: string;
  subtasks?: Subtask[];
  activities?: ActivityEvent[];
  tenantWorkflowData?: TenantWorkflowData[];
}

export function AISummaryPanel({ 
  ticketId = 'TK-12458',
  ticketTitle = 'Workflow execution failure - WELLSKY-ELIGIBILITY',
  subtasks = [],
  activities = [],
  tenantWorkflowData = []
}: AISummaryPanelProps) {
  // State for accordion
  const [isTenantsExpanded, setIsTenantsExpanded] = useState(false);
  
  // Get active alerts count from context
  const { alerts } = useTicketAlerts();
  const activeAlertsCount = alerts.filter(a => a.state === 'active').length;
  
  // Calculate subtask statistics
  const totalSubtasks = subtasks.length;
  const completedSubtasks = subtasks.filter(s => s.status === 'done');
  const inProgressSubtasks = subtasks.filter(s => s.status === 'in-progress');
  const todoSubtasks = subtasks.filter(s => s.status === 'todo');
  
  // Get completed work from activities (recent completions)
  const completedWork = activities
    .filter(a => {
      const action = a.action.toLowerCase();
      return action.includes('completed') || 
             action.includes('terminated') || 
             action.includes('disabled') || 
             action.includes('paused') ||
             action.includes('marked') ||
             action.includes('enabled') ||
             action.includes('resumed');
    })
    .slice(0, 5);
  
  // Get in-progress items
  const inProgressWork = inProgressSubtasks.slice(0, 4);
  
  // Get pending items
  const pendingWork = todoSubtasks.slice(0, 4);
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 bg-gradient-to-br from-purple-50 via-white to-white flex-shrink-0">
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-purple-600" />
          <div>
            <h2 className="text-sm font-semibold text-gray-900">AI Summary</h2>
            <p className="text-xs text-gray-500 mt-0.5">Intelligent insights powered by AI</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        <div className="space-y-4">
          {/* Ticket Progress Summary */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
            <div className="flex items-start gap-3">
              <Sparkles className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="w-full">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Ticket Summary</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {ticketId} is currently in progress with {totalSubtasks} subtasks created. {completedSubtasks.length} tasks completed, {inProgressSubtasks.length} in progress, {todoSubtasks.length} pending{activeAlertsCount > 0 ? `, and ${activeAlertsCount} active alert${activeAlertsCount === 1 ? '' : 's'}` : ''}.
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600 flex-wrap">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded">{completedSubtasks.length} Done</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">{inProgressSubtasks.length} In Progress</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">{todoSubtasks.length} To Do</span>
                  {activeAlertsCount > 0 && (
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded flex items-center gap-1">
                      <AlertCircle className="size-3" />
                      {activeAlertsCount} Alert{activeAlertsCount === 1 ? '' : 's'}
                    </span>
                  )}
                </div>
                
                {/* Affected Tenants & Workflows - Accordion Table */}
                {tenantWorkflowData.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <button
                      onClick={() => setIsTenantsExpanded(!isTenantsExpanded)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-gray-700 hover:text-blue-700 transition-colors"
                    >
                      <span>Affected Tenants & Workflows ({tenantWorkflowData.length})</span>
                      {isTenantsExpanded ? (
                        <ChevronDown className="size-4 text-blue-600" />
                      ) : (
                        <ChevronRight className="size-4 text-gray-500" />
                      )}
                    </button>
                    
                    {isTenantsExpanded && (
                      <div className="mt-2 overflow-x-auto">
                        <table className="w-full text-xs border-collapse">
                          <thead>
                            <tr className="bg-blue-100">
                              <th className="px-2 py-1.5 text-left font-semibold text-gray-700 border border-blue-200">Tenant</th>
                              <th className="px-2 py-1.5 text-left font-semibold text-gray-700 border border-blue-200">Workflow</th>
                              <th className="px-2 py-1.5 text-left font-semibold text-gray-700 border border-blue-200">Period</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tenantWorkflowData.map((item, index) => (
                              <tr key={index} className="hover:bg-blue-50 transition-colors">
                                <td className="px-2 py-1.5 text-gray-700 border border-blue-200 font-medium">{item.tenant}</td>
                                <td className="px-2 py-1.5 text-blue-600 border border-blue-200">{item.workflow}</td>
                                <td className="px-2 py-1.5 text-gray-500 border border-blue-200">{item.period}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Completed Activities */}
          {completedWork.length > 0 && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-start gap-3">
                <TrendingUp className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Completed Work</h3>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {completedWork.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{activity.action} by {activity.user}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* In Progress Activities */}
          {inProgressWork.length > 0 && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-100">
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Currently In Progress</h3>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {inProgressWork.map((subtask, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-amber-600 mt-0.5">⟳</span>
                        <span>{subtask.title} - {subtask.owner}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Pending Items */}
          {pendingWork.length > 0 && (
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="size-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Pending Actions</h3>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {pendingWork.map((subtask, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-purple-600 mt-0.5">○</span>
                        <span>{subtask.title} - {subtask.owner}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Empty State - Show when no subtasks exist */}
          {totalSubtasks === 0 && (
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-6 border border-gray-200">
              <div className="text-center">
                <Sparkles className="size-8 text-gray-400 mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-gray-900 mb-2">No Activity Yet</h3>
                <p className="text-sm text-gray-600">
                  Start adding subtasks to see intelligent AI-powered insights about your ticket progress.
                </p>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Recommended Next Steps</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-600 mt-1">•</span>
                <span>Complete RCA investigation to proceed with issue fixed note</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-600 mt-1">•</span>
                <span>Approve pending credential requests to unblock workflows</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-600 mt-1">•</span>
                <span>Prepare for safe deployment once RCA is finalized</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
        <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
          Refresh Summary
        </button>
      </div>
    </div>
  );
}