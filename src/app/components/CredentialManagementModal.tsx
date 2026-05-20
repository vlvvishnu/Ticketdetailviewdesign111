import { useState } from 'react';
import { X } from 'lucide-react';

export interface CredentialRequest {
  id: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  application: string;
  noOfCredentials: string;
  durationForAccess: string;
  environment: 'Production' | 'Non-Production';
  submitted: string;
}

interface CredentialManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
}

export function CredentialManagementModal({ isOpen, onClose, onConfirm }: CredentialManagementModalProps) {
  const [requestType, setRequestType] = useState<'any' | 'particular'>('any');
  const [reason, setReason] = useState('');
  
  // Form states
  const [application, setApplication] = useState('');
  const [workflow, setWorkflow] = useState('');
  const [workflowVariant, setWorkflowVariant] = useState('');
  const [tenant, setTenant] = useState('');
  const [noOfCredentials, setNoOfCredentials] = useState('');
  const [specificCredential, setSpecificCredential] = useState('');
  const [environment, setEnvironment] = useState<'Production' | 'Non-Production'>('Production');
  const [durationType, setDurationType] = useState<'Hour' | 'Day'>('Hour');
  const [durationValue, setDurationValue] = useState('');
  const [submittedFor, setSubmittedFor] = useState<'self' | 'another'>('self');
  const [anotherUserEmail, setAnotherUserEmail] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(reason);
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setRequestType('any');
    setReason('');
    setApplication('');
    setWorkflow('');
    setWorkflowVariant('');
    setTenant('');
    setNoOfCredentials('');
    setSpecificCredential('');
    setEnvironment('Production');
    setDurationType('Hour');
    setDurationValue('');
    setSubmittedFor('self');
    setAnotherUserEmail('');
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-[1394px] max-w-[95vw] flex flex-col h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-[34px] py-[24px] border-b border-[#CAD2D8] flex-shrink-0">
          <h2 className="text-[16px] font-medium text-black">Request Credential</h2>
          <button onClick={onClose} className="text-[#8993AE] hover:text-gray-700 transition-colors">
            <X className="w-[17px] h-[16px]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[35px] py-[18px]">
          {/* Radio Group */}
          <div className="mb-[24px]">
            <p className="text-[14px] text-[rgba(0,0,0,0.8)] mb-[10px]">
              Choose how do you like to proceed:
            </p>
            <div className="flex gap-[8px]">
              <label className="flex items-center gap-[8px] cursor-pointer">
                <div className="relative size-[16px]">
                  <input
                    type="radio"
                    checked={requestType === 'any'}
                    onChange={() => setRequestType('any')}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className={`size-full rounded-full border ${
                    requestType === 'any' ? 'border-[#1677ff]' : 'border-[#d9d9d9]'
                  }`}>
                    {requestType === 'any' && (
                      <div className="absolute left-[4px] top-[4px] size-[8px] rounded-full bg-[#1677ff]" />
                    )}
                  </div>
                </div>
                <span className="text-[14px] text-[rgba(0,0,0,0.88)]">Request any Credential</span>
              </label>
              <label className="flex items-center gap-[8px] cursor-pointer">
                <div className="relative size-[16px]">
                  <input
                    type="radio"
                    checked={requestType === 'particular'}
                    onChange={() => setRequestType('particular')}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className={`size-full rounded-full border ${
                    requestType === 'particular' ? 'border-[#1677ff]' : 'border-[#d9d9d9]'
                  }`}>
                    {requestType === 'particular' && (
                      <div className="absolute left-[4px] top-[4px] size-[8px] rounded-full bg-[#1677ff]" />
                    )}
                  </div>
                </div>
                <span className="text-[14px] text-[rgba(0,0,0,0.88)]">Request Particular Credential</span>
              </label>
            </div>
          </div>

          {/* First Row - Filters */}
          <div className="flex gap-[21px] items-end mb-[32px]">
            {/* Application */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>Application</span>
                <span>:</span>
              </label>
              <select 
                value={application}
                onChange={(e) => setApplication(e.target.value)}
                className="h-[40px] w-[224px] px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: application ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', 
                  backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'right 12px center' 
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                <option value="HCHB" style={{ color: 'rgba(0,0,0,0.88)' }}>HCHB</option>
                <option value="Other" style={{ color: 'rgba(0,0,0,0.88)' }}>Other</option>
              </select>
            </div>

            {/* Workflow */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>Workflow</span>
                <span>:</span>
              </label>
              <select 
                value={workflow}
                onChange={(e) => setWorkflow(e.target.value)}
                className="h-[40px] w-[242px] px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: workflow ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', 
                  backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'right 12px center' 
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                <option value="Eligibility Verification" style={{ color: 'rgba(0,0,0,0.88)' }}>Eligibility Verification</option>
              </select>
            </div>

            {/* Workflow Variant */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>Workflow Variant</span>
                <span>:</span>
              </label>
              <select 
                value={workflowVariant}
                onChange={(e) => setWorkflowVariant(e.target.value)}
                className="h-[40px] w-[150px] px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: workflowVariant ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', 
                  backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'right 12px center' 
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                <option value="Homehealth" style={{ color: 'rgba(0,0,0,0.88)' }}>Homehealth</option>
                <option value="Hospice" style={{ color: 'rgba(0,0,0,0.88)' }}>Hospice</option>
              </select>
            </div>

            {/* Tenant */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>Tenant</span>
                <span>:</span>
              </label>
              <select 
                value={tenant}
                onChange={(e) => setTenant(e.target.value)}
                className="h-[40px] w-[318px] px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: tenant ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', 
                  backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'right 12px center' 
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                <option value="ASHN" style={{ color: 'rgba(0,0,0,0.88)' }}>ASHN</option>
              </select>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-[21px] items-end mb-[32px]">
            {requestType === 'any' ? (
              <>
                {/* No. of Credentials Required */}
                <div className="flex flex-col">
                  <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                    <span>No. of Credentials Required</span>
                    <span>:</span>
                  </label>
                  <select 
                    value={noOfCredentials}
                    onChange={(e) => setNoOfCredentials(e.target.value)}
                    className="h-[32px] w-[224px] px-[12px] py-[4px] border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                    style={{ 
                      color: noOfCredentials ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', 
                      backgroundRepeat: 'no-repeat', 
                      backgroundPosition: 'right 12px center' 
                    }}
                  >
                    <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                    <option value="1" style={{ color: 'rgba(0,0,0,0.88)' }}>1</option>
                    <option value="2" style={{ color: 'rgba(0,0,0,0.88)' }}>2</option>
                    <option value="3" style={{ color: 'rgba(0,0,0,0.88)' }}>3</option>
                  </select>
                </div>

                {/* Environment */}
                <div className="flex flex-col">
                  <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                    <span>Environment</span>
                    <span>:</span>
                  </label>
                  <div className="flex gap-[18px] h-[32px] items-center">
                    <label className="flex items-center gap-[8px] cursor-pointer">
                      <div className="relative size-[16px]">
                        <input
                          type="radio"
                          checked={environment === 'Production'}
                          onChange={() => setEnvironment('Production')}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className={`size-full rounded-full border ${
                          environment === 'Production' ? 'border-[#1677ff]' : 'border-[#d9d9d9]'
                        }`}>
                          {environment === 'Production' && (
                            <div className="absolute left-[4px] top-[4px] size-[8px] rounded-full bg-[#1677ff]" />
                          )}
                        </div>
                      </div>
                      <span className="text-[14px] text-[rgba(0,0,0,0.88)]">Production</span>
                    </label>
                    <label className="flex items-center gap-[8px] cursor-pointer">
                      <div className="relative size-[16px]">
                        <input
                          type="radio"
                          checked={environment === 'Non-Production'}
                          onChange={() => setEnvironment('Non-Production')}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className={`size-full rounded-full border ${
                          environment === 'Non-Production' ? 'border-[#1677ff]' : 'border-[#d9d9d9]'
                        }`}>
                          {environment === 'Non-Production' && (
                            <div className="absolute left-[4px] top-[4px] size-[8px] rounded-full bg-[#1677ff]" />
                          )}
                        </div>
                      </div>
                      <span className="text-[14px] text-[rgba(0,0,0,0.88)]">Non - Production</span>
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Specific Credential Required */}
                <div className="flex flex-col">
                  <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                    <span>Specific Credential Required</span>
                    <span>:</span>
                  </label>
                  <select 
                    value={specificCredential}
                    onChange={(e) => setSpecificCredential(e.target.value)}
                    className="h-[32px] w-[270px] px-[12px] py-[4px] border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                    style={{ 
                      color: specificCredential ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', 
                      backgroundRepeat: 'no-repeat', 
                      backgroundPosition: 'right 12px center' 
                    }}
                  >
                    <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                    <option value="cred1" style={{ color: 'rgba(0,0,0,0.88)' }}>Credential 1</option>
                    <option value="cred2" style={{ color: 'rgba(0,0,0,0.88)' }}>Credential 2</option>
                  </select>
                </div>
              </>
            )}

            {/* Duration of Access */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>Duration of Access</span>
                <span>:</span>
              </label>
              <div className="flex gap-[8px] items-center">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <div className="relative size-[16px]">
                    <input
                      type="radio"
                      checked={durationType === 'Hour'}
                      onChange={() => setDurationType('Hour')}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className={`size-full rounded-full border ${
                      durationType === 'Hour' ? 'border-[#1677ff]' : 'border-[#d9d9d9]'
                    }`}>
                      {durationType === 'Hour' && (
                        <div className="absolute left-[4px] top-[4px] size-[8px] rounded-full bg-[#1677ff]" />
                      )}
                    </div>
                  </div>
                  <span className="text-[14px] text-[rgba(0,0,0,0.88)]">Hour</span>
                </label>
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <div className="relative size-[16px]">
                    <input
                      type="radio"
                      checked={durationType === 'Day'}
                      onChange={() => setDurationType('Day')}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className={`size-full rounded-full border ${
                      durationType === 'Day' ? 'border-[#1677ff]' : 'border-[#d9d9d9]'
                    }`}>
                      {durationType === 'Day' && (
                        <div className="absolute left-[4px] top-[4px] size-[8px] rounded-full bg-[#1677ff]" />
                      )}
                    </div>
                  </div>
                  <span className="text-[14px] text-[rgba(0,0,0,0.88)]">Day</span>
                </label>
                <select 
                  value={durationValue}
                  onChange={(e) => setDurationValue(e.target.value)}
                  className="h-[32px] w-[143px] px-[12px] py-[4px] border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                  style={{ 
                    color: durationValue ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundPosition: 'right 12px center' 
                  }}
                >
                  <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                  <option value="1" style={{ color: 'rgba(0,0,0,0.88)' }}>1</option>
                  <option value="2" style={{ color: 'rgba(0,0,0,0.88)' }}>2</option>
                  <option value="3" style={{ color: 'rgba(0,0,0,0.88)' }}>3</option>
                  <option value="4" style={{ color: 'rgba(0,0,0,0.88)' }}>4</option>
                  <option value="5" style={{ color: 'rgba(0,0,0,0.88)' }}>5</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submitted For */}
          <div className="mb-[32px]">
            <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
              <span>Submitted For</span>
              <span>:</span>
            </label>
            <div className="flex gap-[18px] items-center">
              <label className="flex items-center gap-[8px] cursor-pointer">
                <div className="relative size-[16px]">
                  <input
                    type="checkbox"
                    checked={submittedFor === 'self'}
                    onChange={(e) => setSubmittedFor(e.target.checked ? 'self' : 'another')}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className={`size-full rounded-[4px] border ${
                    submittedFor === 'self' ? 'border-[#1677ff] bg-[#1677ff]' : 'border-[#d9d9d9] bg-white'
                  }`}>
                    {submittedFor === 'self' && (
                      <svg className="w-full h-full" viewBox="0 0 16 16" fill="none">
                        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[14px] text-[rgba(0,0,0,0.88)]">Self</span>
              </label>
              <label className="flex items-center gap-[8px] cursor-pointer">
                <div className="relative size-[16px]">
                  <input
                    type="checkbox"
                    checked={submittedFor === 'another'}
                    onChange={(e) => setSubmittedFor(e.target.checked ? 'another' : 'self')}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className={`size-full rounded-[4px] border ${
                    submittedFor === 'another' ? 'border-[#1677ff] bg-[#1677ff]' : 'border-[#d9d9d9] bg-white'
                  }`}>
                    {submittedFor === 'another' && (
                      <svg className="w-full h-full" viewBox="0 0 16 16" fill="none">
                        <path d="M13 4L6 11L3 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[14px] text-[rgba(0,0,0,0.88)]">Another User</span>
              </label>
              {submittedFor === 'another' && (
                <input
                  type="text"
                  value={anotherUserEmail}
                  onChange={(e) => setAnotherUserEmail(e.target.value)}
                  placeholder="Comma Separated Email Ids"
                  className="flex-1 h-[32px] px-[12px] py-[4px] border border-[#d9d9d9] rounded-[6px] text-[14px] placeholder:text-[#989898] text-[rgba(0,0,0,0.88)]"
                />
              )}
            </div>
          </div>

          {/* Reason/Message */}
          <div className="mb-[24px]">
            <label className="text-[14px] font-medium text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
              <span>Reason/ Message (Optional)</span>
              <span>:</span>
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="e.g HCHB Outage, scheduled maintenance, etc"
              className="w-full h-[69px] px-[12px] py-[5px] border border-[#d9d9d9] rounded-[6px] text-[14px] placeholder:text-[#989898] text-[rgba(0,0,0,0.88)] resize-none focus:outline-none focus:border-[#1677ff]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-[12px] px-[34px] py-[24px] border-t border-gray-200 flex-shrink-0">
          <button
            onClick={handleReset}
            className="px-[43px] py-[8px] border border-[#d9d9d9] rounded-[6px] text-[14px] text-[rgba(0,0,0,0.88)] hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={handleConfirm}
            className="px-[16px] py-[8px] rounded-[4px] text-[16px] font-medium text-white transition-colors bg-[#354eb4] hover:bg-[#2a3d8f]"
          >
            Add To Ticket
          </button>
        </div>
      </div>
    </div>
  );
}