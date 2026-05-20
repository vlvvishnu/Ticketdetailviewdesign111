import { useState } from 'react';
import { Edit3, CheckCircle } from 'lucide-react';
import { useSubtaskData } from '@/app/hooks/useSubtaskData';

interface TextNotesContentProps {
  subtaskTitle: string;
  subtaskId: string;
  onMarkCompleted?: (subtaskId: string, isCompleted: boolean) => void;
  isCompleted?: boolean;
}

export function TextNotesContent({ subtaskTitle, subtaskId, onMarkCompleted, isCompleted }: TextNotesContentProps) {
  // Helper to get base type (remove instance suffix like -1, -2, etc.)
  const getBaseType = (id: string) => id.replace(/-\d+$/, '');
  
  // Pre-populate with some example data for demonstration
  const getInitialContent = (id: string) => {
    const baseType = getBaseType(id);
    switch (baseType) {
      case 'failure-notes':
        return 'Credential authentication failed for HCHB application. Multiple workers unable to access the system due to expired tokens. Impact: 15 workflows paused. Root cause under investigation.';
      case 'rca-identification':
        return 'Root Cause: OAuth token refresh mechanism was disabled during last deployment on Jan 10, 2024. The automated token renewal job was not triggered, causing all credentials to expire after 7 days.\n\nContributing Factors:\n1. Deployment checklist did not include token service validation\n2. No monitoring alert configured for token expiration\n3. Manual intervention required for token refresh';
      case 'issue-fixed-note':
        return '';
      default:
        return '';
    }
  };

  // Use persisted data for this specific subtask instance
  const [content, setContent] = useSubtaskData<string>(subtaskId, getInitialContent(subtaskId));

  const getPlaceholder = (id: string) => {
    const baseType = getBaseType(id);
    switch (baseType) {
      case 'failure-notes':
        return 'Describe the failure, impact, and initial observations...';
      case 'rca-identification':
        return 'Document the root cause analysis, contributing factors, and investigation findings...';
      case 'issue-fixed-note':
        return 'Describe the fix implemented, validation steps, and confirmation of resolution...';
      default:
        return 'Enter your notes here...';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col">
      {/* Completion Banner - shown when completed */}
      {isCompleted && (
        <div className="bg-green-50 border-b border-green-200 px-6 py-3 flex items-center gap-2 flex-shrink-0">
          <CheckCircle className="w-4 h-4 text-green-600 fill-green-600" />
          <span className="text-sm font-medium text-green-700">This subtask is completed and locked. No further changes can be made.</span>
        </div>
      )}
      
      {/* Card Header */}
      <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-br from-purple-50 via-white to-white flex-shrink-0">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-[#333333]">{subtaskTitle}</h2>
            </div>
            <p className="text-sm text-gray-600 mt-1">Document and save your notes for this task</p>
          </div>
          {isCompleted ? (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-4 h-4 fill-green-600" />
              <span className="text-sm font-medium">Completed</span>
            </div>
          ) : (
            <button 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              onClick={() => onMarkCompleted?.(subtaskId, true)}
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Mark as Completed</span>
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-4">
          {/* Text Area */}
          <div>
            <textarea
              value={content}
              onChange={(e) => !isCompleted && setContent(e.target.value)}
              placeholder={getPlaceholder(subtaskId)}
              readOnly={isCompleted}
              disabled={isCompleted}
              className={`w-full h-[calc(100vh-450px)] px-4 py-3 text-sm border-2 rounded-lg resize-none font-mono leading-relaxed ${
                isCompleted 
                  ? 'border-gray-200 bg-gray-50 text-gray-600 cursor-not-allowed' 
                  : 'border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              }`}
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}