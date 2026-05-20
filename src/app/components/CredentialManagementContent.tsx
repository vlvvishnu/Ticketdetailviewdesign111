import { useState } from 'react';
import { CredentialManagementModal } from './CredentialManagementModal';
import { CredentialRequestsTable, CredentialRequestRow } from './CredentialRequestsTable';
import { CheckCircle, Plus } from 'lucide-react';
import { useSubtaskData } from '@/app/hooks/useSubtaskData';

interface CredentialManagementContentProps {
  subtaskTitle: string;
  subtaskId: string;
  onRelease?: (count: number) => void;
  onMarkCompleted?: (subtaskId: string, isCompleted: boolean) => void;
  isCompleted?: boolean;
  onActivityAdd?: (action: string, user: string, badge?: string, badgeColor?: string) => void;
}

export function CredentialManagementContent({ 
  subtaskTitle, 
  subtaskId,
  onRelease,
  onMarkCompleted,
  isCompleted = false,
  onActivityAdd
}: CredentialManagementContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use persisted data for this specific subtask instance
  const [addedRequests, setAddedRequests] = useSubtaskData<CredentialRequestRow[]>(subtaskId, []);

  const handleAddRequest = (reason: string) => {
    // Add new request to the table
    const newRequest: CredentialRequestRow = {
      id: String(addedRequests.length + 1),
      tenant: 'ASHN',
      workflow: 'Eligibility Verification',
      workflowVariant: 'Homehealth',
      application: 'HCHB',
      noOfCredentials: '1',
      durationForAccess: '1 Hour',
      environment: 'Production',
      submitted: 'Sarah Chen',
      status: 'Pending Approval',
      message: reason || 'Approval request sent'
    };
    
    setAddedRequests([...addedRequests, newRequest]);
    
    // Add activity log for requested credential
    if (onActivityAdd) {
      const count = parseInt(newRequest.noOfCredentials) || 1;
      onActivityAdd('requested credential', 'K Vishnu Venkatesan', `${count} Record${count > 1 ? 's' : ''}`, 'bg-gray-100 text-gray-700 border-gray-200');
    }
  };

  const handleRemoveRequests = (ids: string[]) => {
    setAddedRequests(addedRequests.filter(r => !ids.includes(r.id)));
  };

  const handleModifyTicket = () => {
    setIsModalOpen(true);
  };

  const handleReleaseCredential = (ids: string[]) => {
    // Update the status of selected credentials to "Released"
    setAddedRequests(addedRequests.map(request =>
      ids.includes(request.id)
        ? { ...request, status: 'Released', message: 'User released the credential' }
        : request
    ));
    
    // Call parent onRelease callback if provided
    if (onRelease) {
      onRelease(ids.length);
    }
    
    // Add activity log
    if (onActivityAdd) {
      onActivityAdd('Release Credential', 'Sarah Chen', 'Released', 'green');
    }
  };

  const handleUpdateStatus = (ids: string[], newStatus: string, newMessage: string) => {
    // Update the status and message of selected credentials
    setAddedRequests(addedRequests.map(request =>
      ids.includes(request.id)
        ? { ...request, status: newStatus, message: newMessage }
        : request
    ));
    
    // Add activity log based on status
    if (onActivityAdd) {
      if (newStatus === 'Approved') {
        // Calculate total count of credentials being approved
        const approvedRequests = addedRequests.filter(r => ids.includes(r.id));
        const totalCount = approvedRequests.reduce((sum, req) => {
          return sum + (parseInt(req.noOfCredentials) || 1);
        }, 0);
        onActivityAdd('approved credentials', 'K Ganesh', `${totalCount} Record${totalCount > 1 ? 's' : ''}`, 'bg-gray-100 text-gray-700 border-gray-200');
      }
    }
  };

  return (
    <div className="bg-white h-full min-h-0 flex flex-col rounded-[14px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Header Section */}
      <div className="flex-shrink-0 px-6 py-5 border-b border-gray-200 flex items-center justify-between" style={{ backgroundImage: "linear-gradient(175.185deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 100%" }}>
        <div className="flex-1">
          <h2 className="text-lg font-bold text-[#333333] mb-1">{subtaskTitle}</h2>
          <p className="text-sm text-[#4a5565]">Request and manage credentials for troubleshooting</p>
        </div>
        <div className="flex items-center gap-3">
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

      {/* Credential Requests Table - Always shown */}
      <div className="flex-1 min-h-0 overflow-hidden p-6">
        <CredentialRequestsTable
          requests={addedRequests}
          onRemove={handleRemoveRequests}
          onModify={handleModifyTicket}
          onRelease={handleReleaseCredential}
          onUpdateStatus={handleUpdateStatus}
          isCompleted={isCompleted}
        />
      </div>

      {/* Modal */}
      <CredentialManagementModal
        isOpen={isModalOpen && !isCompleted}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAddRequest}
      />
    </div>
  );
}