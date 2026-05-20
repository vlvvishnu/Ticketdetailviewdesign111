import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { DatadogValidationModal } from './DatadogValidationModal';
import { DatadogValidationTable, DatadogRecord } from './DatadogValidationTable';
import { useSubtaskData } from '@/app/hooks/useSubtaskData';
import { ContextBanner } from './ContextBanner';

interface DatadogValidationContentProps {
  subtaskTitle: string;
  subtaskId: string;
  onMarkCompleted?: (subtaskId: string, isCompleted: boolean) => void;
  isCompleted?: boolean;
}

// Sample records for the modal
export const sampleRecords: DatadogRecord[] = [
  {
    id: '1',
    transactionId: 'TXN-001',
    mrNumber: 'MR-10021',
    patientName: 'John Doe',
    episodeName: 'Episode-2024-001',
    workflow: 'WELLSKY-ELIGIBILITY',
    tenant: 'Brightstar Care',
    variant: 'Homehealth',
    transactionDate: '2025-01-10',
    status: 'Terminated',
    datadogLink: 'https://app.datadoghq.com/logs/12345',
    recordingLink: 'https://recordings.example.com/session-001',
    probableReason: 'No records retrieved in Workflow Console'
  },
  {
    id: '2',
    transactionId: 'TXN-002',
    mrNumber: 'MR-10045',
    patientName: 'Jane Smith',
    episodeName: 'Episode-2024-002',
    workflow: 'HCHB-AUTH',
    tenant: 'Brightstar Care',
    variant: 'Homehealth',
    transactionDate: '2025-01-11',
    status: 'Terminated',
    datadogLink: 'https://app.datadoghq.com/logs/12346',
    recordingLink: 'https://recordings.example.com/session-002',
    probableReason: 'Unable to access Maintain Facility'
  },
  {
    id: '3',
    transactionId: 'TXN-003',
    mrNumber: 'MR-10078',
    patientName: 'Robert Brown',
    episodeName: 'Episode-2024-003',
    workflow: 'WELLSKY-ELIGIBILITY',
    tenant: 'Brightstar Care',
    variant: 'Homehealth',
    transactionDate: '2025-01-12',
    status: 'Terminated',
    probableReason: 'Physician/Facility in Inclusion/Exclusion list'
  },
  {
    id: '4',
    transactionId: 'TXN-004',
    mrNumber: 'MR-10093',
    patientName: 'Emily Davis',
    episodeName: 'Episode-2024-004',
    workflow: 'MATRIX-BILLING-SYNC',
    tenant: 'Acmecorp',
    variant: 'Hospice',
    transactionDate: '2025-01-08',
    status: 'Failed',
    recordingLink: 'https://recordings.example.com/session-004',
    probableReason: 'Gateway timeout during notification dispatch'
  },
  {
    id: '5',
    transactionId: 'TXN-005',
    mrNumber: 'MR-10112',
    patientName: 'Michael Torres',
    episodeName: 'Episode-2024-005',
    workflow: 'WELLSKY-ELIGIBILITY',
    tenant: 'Brightstar Care',
    variant: 'Homehealth',
    transactionDate: '2025-01-13',
    status: 'Needs Intervention',
    datadogLink: 'https://app.datadoghq.com/logs/12349',
    recordingLink: 'https://recordings.example.com/session-005',
    probableReason: 'Submit button disabled — missing insurance field'
  },
  {
    id: '6',
    transactionId: 'TXN-006',
    mrNumber: 'MR-10134',
    patientName: 'Linda Patel',
    episodeName: 'Episode-2024-006',
    workflow: 'HCHB-CLAIMS-TO-INVSTAR',
    tenant: 'Globex',
    variant: 'V1',
    transactionDate: '2025-01-09',
    status: 'Terminated',
    datadogLink: 'https://app.datadoghq.com/logs/12350',
    probableReason: 'Workflow halted at physician validation step'
  },
  {
    id: '7',
    transactionId: 'TXN-007',
    mrNumber: 'MR-10156',
    patientName: 'Carlos Rivera',
    episodeName: 'Episode-2024-007',
    workflow: 'WELLSKY-IMMAT',
    tenant: 'Acmecorp',
    variant: 'V2',
    transactionDate: '2025-01-07',
    status: 'Failed',
    recordingLink: 'https://recordings.example.com/session-007',
    probableReason: 'Session expired before note submission'
  },
  {
    id: '8',
    transactionId: 'TXN-008',
    mrNumber: 'MR-10178',
    patientName: 'Angela White',
    episodeName: 'Episode-2024-008',
    workflow: '7NEED-EXTRACT',
    tenant: 'Globex',
    variant: 'Homehealth',
    transactionDate: '2025-01-14',
    status: 'Failed',
    datadogLink: 'https://app.datadoghq.com/logs/12353',
    recordingLink: 'https://recordings.example.com/session-008',
    probableReason: 'API 503 — coordination service unavailable'
  },
  {
    id: '9',
    transactionId: 'TXN-009',
    mrNumber: 'MR-10201',
    patientName: 'David Kim',
    episodeName: 'Episode-2024-009',
    workflow: 'WELLSKY-ELIGIBILITY',
    tenant: 'Brightstar Care',
    variant: 'Hospice',
    transactionDate: '2025-01-11',
    status: 'Terminated',
    datadogLink: 'https://app.datadoghq.com/logs/12354',
    probableReason: 'No records retrieved in Workflow Console'
  },
  {
    id: '10',
    transactionId: 'TXN-010',
    mrNumber: 'MR-10223',
    patientName: 'Susan Hall',
    episodeName: 'Episode-2024-010',
    workflow: 'HCHB-AUTH',
    tenant: 'Brightstar Care',
    variant: 'Homehealth',
    transactionDate: '2025-01-12',
    status: 'Terminated',
    recordingLink: 'https://recordings.example.com/session-010',
    probableReason: 'Facility not found in active provider list'
  }
];

export function DatadogValidationContent({
  subtaskTitle,
  subtaskId,
  onMarkCompleted,
  isCompleted = false
}: DatadogValidationContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [records, setRecords] = useSubtaskData<DatadogRecord[]>(subtaskId, []);

  const handleAddRecords = (selectedRecords: DatadogRecord[]) => {
    setRecords(prev => [...prev, ...selectedRecords]);
    setIsModalOpen(false);
  };

  const handleModifyTicket = () => {
    setIsModalOpen(true);
  };

  const handleRemoveRecords = (ids: string[]) => {
    setRecords(prev => prev.filter(r => !ids.includes(r.id)));
  };

  return (
    <>
      <div className="bg-white h-full min-h-0 flex flex-col rounded-[14px] border border-[#e5e7eb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Completion Banner */}
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
            <p className="text-sm text-[#4a5565]">Task Description will come here - a small description</p>
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

        {/* Content Area */}
        <div className="flex-1 min-h-0 flex flex-col">
          {records.length > 0 ? (
            /* Table View */
            <div className="flex-1 min-h-0 overflow-auto p-6">
              <DatadogValidationTable
                records={records}
                onModifyTicket={handleModifyTicket}
                onRemove={handleRemoveRecords}
                isCompleted={isCompleted}
              />
            </div>
          ) : (
            /* Dropbox Area */
            <div className="p-6 flex flex-col gap-4">
              {/* Context Banner */}
              <ContextBanner
                chips={[
                  { label: 'Tenant', value: 'Brightstar Care' },
                  { label: 'Workflow', value: 'Eligibility Verification' },
                  { label: 'Variant', value: 'Homehealth' }
                ]}
                onClick={() => !isCompleted && setIsModalOpen(true)}
              />

              {/* Dropbox Button */}
              <button
                onClick={() => !isCompleted && setIsModalOpen(true)}
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
                  {isCompleted ? 'Subtask completed - no actions available' : 'Click here to add transaction records for Evidence Package'}
                </p>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && !isCompleted && (
        <DatadogValidationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddRecords}
          availableRecords={sampleRecords}
          existingRecords={records}
          prefilledTenant="Brightstar Care"
          prefilledWorkflow="Eligibility Verification"
          prefilledVariant="Homehealth"
        />
      )}
    </>
  );
}