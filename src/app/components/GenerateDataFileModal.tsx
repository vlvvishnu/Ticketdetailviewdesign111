import { useState } from 'react';
import svgPaths from '@/imports/svg-0onv8ey8lw';

interface GenerateDataFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRunQuery: (filters: DataFileFilters) => void;
}

export interface DataFileFilters {
  workflow: string;
  workflowVariant: string;
  workflowVersion: string;
  tenant: string;
  stateTable: string;
  dateFilter: 'today' | 'yesterday' | 'last7' | 'last30' | 'last90' | 'custom';
  dateColumn: string;
}

export function GenerateDataFileModal({ isOpen, onClose, onRunQuery }: GenerateDataFileModalProps) {
  const [workflow, setWorkflow] = useState('');
  const [workflowVariant, setWorkflowVariant] = useState('');
  const [workflowVersion, setWorkflowVersion] = useState('');
  const [tenant, setTenant] = useState('');
  const [stateTable, setStateTable] = useState('');
  const [dateFilter, setDateFilter] = useState<'today' | 'yesterday' | 'last7' | 'last30' | 'last90' | 'custom'>('last7');
  const [dateColumn, setDateColumn] = useState('Created Date');
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  // Mock data
  const workflows = ['Eligibility Verification', 'Cash Posting', 'Patient Intake'];
  const variants = ['Homehealth', 'Hospice'];
  const versions = ['v1.0', 'v2.0', 'v3.0'];
  const tenants = ['ASHN', 'LHC', 'Acmecorp'];
  const stateTables = ['State_Table_A', 'State_Table_B', 'State_Table_C'];
  const dateColumns = ['Created Date', 'Updated Date', 'Completed Date'];

  const handleReset = () => {
    setWorkflow('');
    setWorkflowVariant('');
    setWorkflowVersion('');
    setTenant('');
    setStateTable('');
    setDateFilter('last7');
    setDateColumn('Created Date');
  };

  const handleRunQuery = () => {
    onRunQuery({
      workflow,
      workflowVariant,
      workflowVersion,
      tenant,
      stateTable,
      dateFilter,
      dateColumn
    });
  };

  const handleClose = () => {
    onClose();
    handleReset();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-[1394px] max-w-[95vw] flex flex-col h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-['Roboto'] font-medium text-[16px] text-black">
            Generate Data File
          </h2>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-auto p-[24px]">
          {/* Dropdowns Row */}
          <div className="flex gap-[21px] mb-[32px] flex-wrap">
            {/* Workflow */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>Workflow Workflow</span>
                <span>:</span>
              </label>
              <select
                value={workflow}
                onChange={(e) => setWorkflow(e.target.value)}
                className="h-[40px] w-[224px] px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: workflow ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center'
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                {workflows.map((wf) => (
                  <option key={wf} value={wf} style={{ color: 'rgba(0,0,0,0.88)' }}>{wf}</option>
                ))}
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
                className="h-[40px] w-[202px] px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: workflowVariant ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center'
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                {variants.map((variant) => (
                  <option key={variant} value={variant} style={{ color: 'rgba(0,0,0,0.88)' }}>{variant}</option>
                ))}
              </select>
            </div>

            {/* Workflow Version */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>Workflow Version</span>
                <span>:</span>
              </label>
              <select
                value={workflowVersion}
                onChange={(e) => setWorkflowVersion(e.target.value)}
                className="h-[40px] w-[150px] px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: workflowVersion ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center'
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                {versions.map((version) => (
                  <option key={version} value={version} style={{ color: 'rgba(0,0,0,0.88)' }}>{version}</option>
                ))}
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
                className="h-[40px] w-[306px] px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: tenant ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center'
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                {tenants.map((t) => (
                  <option key={t} value={t} style={{ color: 'rgba(0,0,0,0.88)' }}>{t}</option>
                ))}
              </select>
            </div>

            {/* State Table */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[rgba(0,0,0,0.88)] mb-[8px] flex gap-[4px]">
                <span>State Table</span>
                <span>:</span>
              </label>
              <select
                value={stateTable}
                onChange={(e) => setStateTable(e.target.value)}
                className="h-[40px] w-[270px] px-[12px] py-0 border border-[#d9d9d9] rounded-[6px] text-[14px] bg-white appearance-none"
                style={{ 
                  color: stateTable ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0.25)',
                  lineHeight: '40px',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M4 6L8 10L12 6\' stroke=\'%23878787\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center'
                }}
              >
                <option value="" style={{ color: 'rgba(0,0,0,0.25)' }}>Select</option>
                {stateTables.map((st) => (
                  <option key={st} value={st} style={{ color: 'rgba(0,0,0,0.88)' }}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#ededed] mb-[32px]" />

          {/* Date Filter Section */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[8px]">
              <p className="font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.5)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                Show Results based on
              </p>
              <div className="relative">
                <button
                  onClick={() => setShowDateDropdown(!showDateDropdown)}
                  className="flex items-center gap-[4px] text-[#1677ff] font-['Roboto'] font-normal text-[14px] leading-[22px] hover:underline"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {dateColumn}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 5.5L7 8.5L10 5.5" stroke="#1677ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {showDateDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-[#d9d9d9] rounded-[6px] shadow-lg z-10 min-w-[150px]">
                    {dateColumns.map((col) => (
                      <button
                        key={col}
                        onClick={() => {
                          setDateColumn(col);
                          setShowDateDropdown(false);
                        }}
                        className="w-full text-left px-[12px] py-[8px] text-[14px] text-[rgba(0,0,0,0.88)] hover:bg-[#f5f5f5] font-['Roboto']"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Radio Options */}
            <div className="flex gap-[18px] flex-wrap">
              {[
                { value: 'today', label: 'Today' },
                { value: 'yesterday', label: 'Yesterday' },
                { value: 'last7', label: 'Last 7 days' },
                { value: 'last30', label: 'Last 30 days' },
                { value: 'last90', label: 'Last 90 days' },
                { value: 'custom', label: 'Custom' }
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-[8px] cursor-pointer">
                  <div className="relative size-[16px]">
                    <input
                      type="radio"
                      name="dateFilter"
                      value={option.value}
                      checked={dateFilter === option.value}
                      onChange={(e) => setDateFilter(e.target.value as any)}
                      className="absolute opacity-0 size-full cursor-pointer"
                    />
                    <div className={`size-full rounded-full border ${
                      dateFilter === option.value ? 'border-[#1677ff]' : 'border-[#d9d9d9]'
                    }`}>
                      {dateFilter === option.value && (
                        <div className="absolute left-[4px] top-[4px] size-[8px] rounded-full bg-[#1677ff]" />
                      )}
                    </div>
                  </div>
                  <span className="text-[14px] text-[rgba(0,0,0,0.88)]">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-[8px] p-[24px] border-t border-[#cad2d8]">
          <button
            onClick={handleReset}
            className="bg-white h-[34px] px-[43px] border border-[#d9d9d9] rounded-[6px] font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] hover:border-[#4096ff] hover:text-[#4096ff] transition-colors"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Reset
          </button>
          <button
            onClick={handleRunQuery}
            className="bg-[#354eb4] h-[34px] px-[16px] rounded-[4px] font-['Roboto'] font-medium text-[16px] text-white leading-normal hover:bg-[#4a62c9] transition-colors"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Run Query
          </button>
        </div>
      </div>
    </div>
  );
}