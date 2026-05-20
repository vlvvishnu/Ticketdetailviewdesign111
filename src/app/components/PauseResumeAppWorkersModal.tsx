import { useState, useEffect } from 'react';
import svgPaths from '@/imports/svg-f8ewim7v6r';

export interface AppWorker {
  id: string;
  tenant: string;
  workflow: string;
  workflowVariant: string;
  application: string;
  appVersion: string;
}

interface PauseResumeAppWorkersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedWorkers: AppWorker[], reason: string) => void;
  prefilledTenant?: string;
  prefilledWorkflow?: string;
  prefilledVariant?: string;
}

export function PauseResumeAppWorkersModal({ isOpen, onClose, onConfirm, prefilledTenant, prefilledWorkflow, prefilledVariant }: PauseResumeAppWorkersModalProps) {
  const [application, setApplication] = useState('HCHB');
  const [appVersion, setAppVersion] = useState('');
  const [workflow, setWorkflow] = useState('');
  const [tenant, setTenant] = useState('');
  const [selectedWorkers, setSelectedWorkers] = useState<Set<string>>(new Set());
  const [reason, setReason] = useState('');
  const [searchResults, setSearchResults] = useState<AppWorker[]>([]);

  // Mock data for search results
  const mockResults: AppWorker[] = [
    {
      id: '1',
      tenant: 'Brightstar Care',
      workflow: 'Eligibility Verification',
      workflowVariant: 'Homehealth',
      application: 'HCHB',
      appVersion: '1.0.3'
    },
    {
      id: '2',
      tenant: 'Brightstar Care',
      workflow: 'Eligibility Verification',
      workflowVariant: 'Homehealth',
      application: 'HCHB',
      appVersion: '2.1.0'
    },
    {
      id: '3',
      tenant: 'Brightstar Care',
      workflow: 'Eligibility Verification',
      workflowVariant: 'Hospice',
      application: 'HCHB',
      appVersion: '1.0.3'
    },
    {
      id: '4',
      tenant: 'Alpine Care Home Health',
      workflow: 'Eligibility Verification',
      workflowVariant: 'Homehealth',
      application: 'HCHB',
      appVersion: '1.5.0'
    }
  ];

  // Initialize with prefilled values and auto-search
  useEffect(() => {
    if (isOpen && prefilledWorkflow && prefilledVariant) {
      setWorkflow(prefilledWorkflow);
      if (prefilledTenant) {
        setTenant(prefilledTenant);
      }

      // Auto-trigger search with prefilled values - filter mock results
      const filtered = mockResults.filter(worker => {
        const workflowMatch = worker.workflow === prefilledWorkflow;
        const variantMatch = worker.workflowVariant === prefilledVariant;
        const tenantMatch = !prefilledTenant || worker.tenant === prefilledTenant;
        return workflowMatch && variantMatch && tenantMatch;
      });

      setSearchResults(filtered);
    }
  }, [isOpen, prefilledWorkflow, prefilledVariant, prefilledTenant]);

  const handleSearch = () => {
    setSearchResults(mockResults);
  };

  const handleReset = () => {
    setApplication('HCHB');
    setAppVersion('');
    setWorkflow('');
    setTenant('');
    setSearchResults([]);
    setSelectedWorkers(new Set());
    setReason('');
  };

  const toggleWorker = (id: string) => {
    const newSet = new Set(selectedWorkers);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedWorkers(newSet);
  };

  const toggleSelectAll = () => {
    if (selectedWorkers.size === searchResults.length && searchResults.length > 0) {
      setSelectedWorkers(new Set());
    } else {
      setSelectedWorkers(new Set(searchResults.map(w => w.id)));
    }
  };

  const handleConfirm = () => {
    const selected = searchResults.filter(w => selectedWorkers.has(w.id));
    onConfirm(selected, reason);
    handleReset();
  };

  if (!isOpen) return null;

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
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-['Roboto'] font-medium text-[16px] text-black">
            Pause/Resume App Workers
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="p-[24px] flex-1 overflow-auto">
          <div className="grid grid-cols-4 gap-[16px] mb-[24px]">
            {/* Application */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>Application</span>
                <span>:</span>
              </label>
              <select
                value={application}
                onChange={(e) => setApplication(e.target.value)}
                className="h-[40px] w-full px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
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
                <option value="Safescan" style={{ color: 'rgba(0,0,0,0.88)' }}>Safescan</option>
                <option value="PayQuick" style={{ color: 'rgba(0,0,0,0.88)' }}>PayQuick</option>
              </select>
            </div>

            {/* App Version */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>App Version</span>
                <span>:</span>
              </label>
              <select
                value={appVersion}
                onChange={(e) => setAppVersion(e.target.value)}
                className="h-[40px] w-full px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: appVersion ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center'
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                <option value="1.0.3" style={{ color: 'rgba(0,0,0,0.88)' }}>1.0.3</option>
                <option value="2.1.0" style={{ color: 'rgba(0,0,0,0.88)' }}>2.1.0</option>
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
                className="h-[40px] w-full px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
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
                <option value="Onboarding" style={{ color: 'rgba(0,0,0,0.88)' }}>Onboarding</option>
                <option value="Payment Processing" style={{ color: 'rgba(0,0,0,0.88)' }}>Payment Processing</option>
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
                className="h-[40px] w-full px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{
                  color: tenant ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center'
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                <option value="Brightstar Care" style={{ color: 'rgba(0,0,0,0.88)' }}>Brightstar Care</option>
                <option value="Acmecorp" style={{ color: 'rgba(0,0,0,0.88)' }}>Acmecorp</option>
                <option value="Globex" style={{ color: 'rgba(0,0,0,0.88)' }}>Globex</option>
              </select>
            </div>
          </div>

          {/* Search Buttons */}
          <div className="flex justify-end gap-[8px] mb-[24px]">
            <button
              onClick={handleReset}
              className="bg-white h-[32px] px-[15px] py-[4px] border border-[#d9d9d9] rounded-[6px] font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] hover:border-[#4096ff] hover:text-[#4096ff] transition-colors"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Reset
            </button>
            <button
              onClick={handleSearch}
              className="bg-[#1677ff] h-[32px] px-[15px] py-[4px] rounded-[6px] font-['Roboto'] font-normal text-[14px] text-white leading-[22px] hover:bg-[#4096ff] transition-colors"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              Search
            </button>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <>
              <h3 className="font-['Roboto'] font-semibold text-[16px] text-[rgba(0,0,0,0.88)] leading-[24px] mb-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Search result
              </h3>
              <div className="border border-[#f0f0f0] rounded-[8px] mb-[24px] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#fafafa] border-b border-[#f0f0f0]">
                      <th className="p-[16px] text-left w-[48px]">
                        <input
                          type="checkbox"
                          checked={selectedWorkers.size === searchResults.length && searchResults.length > 0}
                          onChange={toggleSelectAll}
                          className="bg-white rounded-[4px] size-[16px] border border-[#d9d9d9] cursor-pointer"
                        />
                      </th>
                      <th className="p-[16px] text-left font-['Roboto'] font-medium text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Tenant
                      </th>
                      <th className="p-[16px] text-left font-['Roboto'] font-medium text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Workflow
                      </th>
                      <th className="p-[16px] text-left font-['Roboto'] font-medium text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Workflow Variant
                      </th>
                      <th className="p-[16px] text-left font-['Roboto'] font-medium text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Application
                      </th>
                      <th className="p-[16px] text-left font-['Roboto'] font-medium text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        App Version
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((worker) => (
                      <tr key={worker.id} className="border-b border-[#f0f0f0] last:border-b-0 hover:bg-[#fafafa]">
                        <td className="p-[16px]">
                          <input
                            type="checkbox"
                            checked={selectedWorkers.has(worker.id)}
                            onChange={() => toggleWorker(worker.id)}
                            className="bg-white rounded-[4px] size-[16px] border border-[#d9d9d9] cursor-pointer"
                          />
                        </td>
                        <td className="p-[16px] font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {worker.tenant}
                        </td>
                        <td className="p-[16px] font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {worker.workflow}
                        </td>
                        <td className="p-[16px] font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {worker.workflowVariant}
                        </td>
                        <td className="p-[16px] font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {worker.application}
                        </td>
                        <td className="p-[16px] font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {worker.appVersion}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Reason/Message - Only show after search */}
          {searchResults.length > 0 && (
            <div className="mb-[24px]">
              <label className="font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] mb-[8px] block" style={{ fontVariationSettings: "'wdth' 100" }}>
                Reason/ Message (Optional) :
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="e.g HCHB Outage, scheduled maintenance, etc"
                className="bg-white w-full h-[80px] border border-[#d9d9d9] rounded-[6px] px-[12px] py-[8px] font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] resize-none placeholder:text-[rgba(0,0,0,0.25)]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-[8px] p-[24px] border-t border-[#e8e8e8]">
          <button
            onClick={onClose}
            className="bg-white h-[32px] px-[15px] py-[4px] border border-[#d9d9d9] rounded-[6px] font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] hover:border-[#4096ff] hover:text-[#4096ff] transition-colors"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={selectedWorkers.size === 0}
            className="bg-[#1677ff] h-[32px] px-[15px] py-[4px] rounded-[6px] font-['Roboto'] font-normal text-[14px] text-white leading-[22px] hover:bg-[#4096ff] disabled:bg-[#f5f5f5] disabled:text-[rgba(0,0,0,0.25)] disabled:cursor-not-allowed transition-colors"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
}