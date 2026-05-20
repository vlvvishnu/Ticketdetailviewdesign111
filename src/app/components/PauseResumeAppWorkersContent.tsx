import { useState } from 'react';
import { PauseResumeAppWorkersModal, AppWorker } from './PauseResumeAppWorkersModal';
import { AppWorkersTable, AppWorkerRow } from './AppWorkersTable';
import { CheckCircle } from 'lucide-react';
import { useSubtaskData } from '@/app/hooks/useSubtaskData';
import { ContextBanner } from './ContextBanner';

interface PauseResumeAppWorkersContentProps {
  subtaskTitle: string;
  subtaskId: string;
  onPause?: (count: number) => void;
  onResume?: (count: number) => void;
  onMarkCompleted?: (subtaskId: string, isCompleted: boolean) => void;
  isCompleted?: boolean;
}

export function PauseResumeAppWorkersContent({ 
  subtaskTitle, 
  subtaskId, 
  onPause, 
  onResume,
  onMarkCompleted,
  isCompleted = false
}: PauseResumeAppWorkersContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openedFromBanner, setOpenedFromBanner] = useState(false);
  // Use persisted data for this specific subtask instance
  const [addedWorkers, setAddedWorkers] = useSubtaskData<AppWorkerRow[]>(subtaskId, []);

  const handleAddWorkers = (selectedWorkers: AppWorker[], reason: string) => {
    const messages = [
      reason || 'App worker paused for maintenance',
      reason || 'Scheduled downtime',
      reason || 'Performance optimization',
      reason || 'System update in progress'
    ];
    
    // Convert AppWorker to AppWorkerRow with status
    const newWorkers: AppWorkerRow[] = selectedWorkers.map((worker, index) => ({
      id: worker.id,
      tenant: worker.tenant,
      workflow: worker.workflow,
      workflowVariant: worker.workflowVariant,
      application: worker.application,
      appVersion: worker.appVersion,
      status: 'Running Now' as const, // Default status
      message: messages[index % messages.length]
    }));
    
    setAddedWorkers(newWorkers);
    setIsModalOpen(false);
  };

  const handleRemoveWorkers = (ids: string[]) => {
    setAddedWorkers(addedWorkers.filter(w => !ids.includes(w.id)));
  };

  const handleWorkersChange = (updatedWorkers: AppWorkerRow[]) => {
    setAddedWorkers(updatedWorkers);
  };

  const handleModifyTicket = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white h-full min-h-0 flex flex-col rounded-[14px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Completion Banner - shown when completed */}
      {isCompleted && (
        <div className="bg-green-50 border-b border-green-200 px-6 py-3 flex items-center gap-2 flex-shrink-0">
          <CheckCircle className="w-4 h-4 text-green-600 fill-green-600" />
          <span className="text-sm font-medium text-green-700">This subtask is completed and locked. No further changes can be made.</span>
        </div>
      )}
      
      {/* Header Section */}
      <div className="flex-shrink-0 px-6 py-5 border-b border-gray-200 flex items-center justify-between" style={{ backgroundImage: "linear-gradient(175.185deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 100%" }}>
        <div>
          <h2 className="text-lg font-bold text-[#333333] mb-1">{subtaskTitle}</h2>
          <p className="text-sm text-[#4a5565]">Pause or resume app workers to manage workflow execution</p>
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

      {/* Content Area - Show either Dropbox or Table */}
      <div className="flex-1 min-h-0 flex flex-col">
        {addedWorkers.length > 0 ? (
          /* App Workers Table */
          <div className="flex-1 min-h-0 overflow-hidden p-6">
            <AppWorkersTable
              workers={addedWorkers}
              onRemove={handleRemoveWorkers}
              onModify={handleModifyTicket}
              onPause={onPause}
              onResume={onResume}
              isCompleted={isCompleted}
              onWorkersChange={handleWorkersChange}
            />
          </div>
        ) : (
          /* Initial Dropbox State */
          <div className="p-6 flex flex-col gap-4">
            {/* Context Banner */}
            <ContextBanner
              chips={[
                { label: 'Tenant', value: 'Brightstar Care' },
                { label: 'Workflow', value: 'Eligibility Verification' },
                { label: 'Variant', value: 'Homehealth' }
              ]}
              onClick={() => !isCompleted && (setOpenedFromBanner(true), setIsModalOpen(true))}
            />

            {/* Dropbox Button */}
            <button
              onClick={() => !isCompleted && (setOpenedFromBanner(false), setIsModalOpen(true))}
              disabled={isCompleted}
              className={`w-full h-[132px] border-dashed rounded-[3px] transition-all flex items-center justify-center ${
                isCompleted
                  ? 'bg-gray-50 border-gray-200 cursor-not-allowed'
                  : 'bg-[#eef6ff] hover:bg-[#e3f0ff]'
              }`}
              style={{ borderWidth: '1.75px', borderColor: isCompleted ? '#d1d5db' : '#a3caff' }}
              onMouseEnter={(e) => {
                if (!isCompleted) e.currentTarget.style.borderColor = '#8ab9ff';
              }}
              onMouseLeave={(e) => {
                if (!isCompleted) e.currentTarget.style.borderColor = '#a3caff';
              }}
            >
              <p className={`text-[16px] text-center px-4 max-w-[431px] ${
                isCompleted ? 'text-gray-400' : 'text-[#538ddc]'
              }`} style={{ fontVariationSettings: "'wdth' 100" }}>
                {isCompleted ? 'Subtask completed - no actions available' : 'Click here to select workers to pause/resume'}
              </p>
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <PauseResumeAppWorkersModal
        isOpen={isModalOpen && !isCompleted}
        onClose={() => { setIsModalOpen(false); setOpenedFromBanner(false); }}
        onConfirm={handleAddWorkers}
        prefilledTenant={openedFromBanner ? 'Brightstar Care' : undefined}
        prefilledWorkflow={openedFromBanner ? 'Eligibility Verification' : undefined}
        prefilledVariant={openedFromBanner ? 'Homehealth' : undefined}
      />
    </div>
  );
}