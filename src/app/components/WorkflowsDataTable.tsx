import { useState } from 'react';
import { Download, Upload } from 'lucide-react';

export interface WorkflowDataFile {
  id: string;
  requestId: string;
  tenant: string;
  workflow: string;
  timeRange: string;
  status: 'Generating' | 'File Generation' | 'Complete' | 'Failed';
  message: string;
  downloadClicked?: boolean; // Track if download button was clicked
}

interface WorkflowsDataTableProps {
  data: WorkflowDataFile[];
  onDownload: (id: string) => void;
  onUpload?: (id: string) => void;
}

export function WorkflowsDataTable({ data, onDownload, onUpload }: WorkflowsDataTableProps) {
  const [searchFilters, setSearchFilters] = useState({
    requestId: '',
    tenant: '',
    workflow: '',
    timeRange: '',
    files: '',
    status: '',
    message: ''
  });

  const filteredData = data.filter((row) => {
    return (
      row.requestId.toLowerCase().includes(searchFilters.requestId.toLowerCase()) &&
      row.tenant.toLowerCase().includes(searchFilters.tenant.toLowerCase()) &&
      row.workflow.toLowerCase().includes(searchFilters.workflow.toLowerCase()) &&
      row.timeRange.toLowerCase().includes(searchFilters.timeRange.toLowerCase()) &&
      row.status.toLowerCase().includes(searchFilters.status.toLowerCase()) &&
      row.message.toLowerCase().includes(searchFilters.message.toLowerCase())
    );
  });

  return (
    <div className="overflow-auto border border-gray-200 rounded-lg [&::-webkit-scrollbar]:h-[8px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#d1d5db] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-[#9ca3af]">
      <table className="w-full border-collapse" style={{ minWidth: '1376px' }}>
        <thead>
          {/* Column Headers */}
          <tr className="border-b border-[#e8e8e8] h-[70px]">
            <th className="text-left px-[16px] align-middle w-[48px]" style={{ width: '48px' }}>
              <div className="flex items-center justify-center h-full">
                <input
                  type="checkbox"
                  className="size-[16px] rounded-[4px] border border-[#d9d9d9] cursor-pointer"
                />
              </div>
            </th>
            <th className="text-left px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.5)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", width: '176px' }}>
              Request ID
            </th>
            <th className="text-left px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.5)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", width: '120px' }}>
              Tenant
            </th>
            <th className="text-left px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.5)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", width: '196px' }}>
              Workflow
            </th>
            <th className="text-left px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.5)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", width: '140px' }}>
              Time Range
            </th>
            <th className="text-left px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.5)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", width: '304px' }}>
              Files
            </th>
            <th className="text-left px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.5)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", width: '130px' }}>
              Status
            </th>
            <th className="text-left px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.5)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", width: '180px' }}>
              Message
            </th>
          </tr>

          {/* Search Row */}
          <tr className="border-b border-[#e8e8e8] bg-[#fafafa] h-[70px]">
            <th className="px-[16px] align-middle"></th>
            <th className="px-[16px] align-middle">
              <div className="flex items-center h-full">
                <input
                  type="text"
                  placeholder="🔍"
                  value={searchFilters.requestId}
                  onChange={(e) => setSearchFilters({ ...searchFilters, requestId: e.target.value })}
                  className="w-full h-[32px] px-[8px] border border-[#d9d9d9] rounded-[4px] text-[14px] font-['Roboto'] placeholder:text-[rgba(0,0,0,0.25)]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </th>
            <th className="px-[16px] align-middle">
              <div className="flex items-center h-full">
                <input
                  type="text"
                  placeholder="🔍"
                  value={searchFilters.tenant}
                  onChange={(e) => setSearchFilters({ ...searchFilters, tenant: e.target.value })}
                  className="w-full h-[32px] px-[8px] border border-[#d9d9d9] rounded-[4px] text-[14px] font-['Roboto'] placeholder:text-[rgba(0,0,0,0.25)]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </th>
            <th className="px-[16px] align-middle">
              <div className="flex items-center h-full">
                <input
                  type="text"
                  placeholder="🔍"
                  value={searchFilters.workflow}
                  onChange={(e) => setSearchFilters({ ...searchFilters, workflow: e.target.value })}
                  className="w-full h-[32px] px-[8px] border border-[#d9d9d9] rounded-[4px] text-[14px] font-['Roboto'] placeholder:text-[rgba(0,0,0,0.25)]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </th>
            <th className="px-[16px] align-middle">
              <div className="flex items-center h-full">
                <input
                  type="text"
                  placeholder="🔍"
                  value={searchFilters.timeRange}
                  onChange={(e) => setSearchFilters({ ...searchFilters, timeRange: e.target.value })}
                  className="w-full h-[32px] px-[8px] border border-[#d9d9d9] rounded-[4px] text-[14px] font-['Roboto'] placeholder:text-[rgba(0,0,0,0.25)]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </th>
            <th className="px-[16px] align-middle">
              <div className="flex items-center h-full">
                <input
                  type="text"
                  placeholder="🔍"
                  value={searchFilters.files}
                  onChange={(e) => setSearchFilters({ ...searchFilters, files: e.target.value })}
                  className="w-full h-[32px] px-[8px] border border-[#d9d9d9] rounded-[4px] text-[14px] font-['Roboto'] placeholder:text-[rgba(0,0,0,0.25)]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </th>
            <th className="px-[16px] align-middle">
              <div className="flex items-center h-full">
                <input
                  type="text"
                  placeholder="🔍"
                  value={searchFilters.status}
                  onChange={(e) => setSearchFilters({ ...searchFilters, status: e.target.value })}
                  className="w-full h-[32px] px-[8px] border border-[#d9d9d9] rounded-[4px] text-[14px] font-['Roboto'] placeholder:text-[rgba(0,0,0,0.25)]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </th>
            <th className="px-[16px] align-middle">
              <div className="flex items-center h-full">
                <input
                  type="text"
                  placeholder="🔍"
                  value={searchFilters.message}
                  onChange={(e) => setSearchFilters({ ...searchFilters, message: e.target.value })}
                  className="w-full h-[32px] px-[8px] border border-[#d9d9d9] rounded-[4px] text-[14px] font-['Roboto'] placeholder:text-[rgba(0,0,0,0.25)]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                />
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={8} className="text-center py-[32px] text-[rgba(0,0,0,0.45)] font-['Roboto'] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                No data files generated yet. Click "Generate New File" to get started.
              </td>
            </tr>
          ) : (
            filteredData.map((row) => (
              <tr key={row.id} className="border-b border-[#e8e8e8] hover:bg-[#fafafa] transition-colors h-[44px]">
                <td className="px-[16px] align-middle">
                  <div className="flex items-center justify-center h-full">
                    <input
                      type="checkbox"
                      className="size-[16px] rounded-[4px] border border-[#d9d9d9] cursor-pointer"
                    />
                  </div>
                </td>
                <td className="px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {row.requestId}
                </td>
                <td className="px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {row.tenant}
                </td>
                <td className="px-[16px] align-middle whitespace-nowrap overflow-hidden">
                  <div className="flex items-center gap-[8px] max-w-full">
                    <span className="font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] truncate" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {row.workflow}
                    </span>
                    <span className="bg-[#f0f0f0] px-[8px] py-[2px] rounded-[4px] text-[12px] text-[rgba(0,0,0,0.65)] font-['Roboto'] flex-shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                      +2 More
                    </span>
                  </div>
                </td>
                <td className="px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {row.timeRange}
                </td>
                <td className="px-[16px] align-middle whitespace-nowrap overflow-hidden">
                  <div className="flex items-center gap-[21px] max-w-full">
                    {/* Left Side - Download/Generate File */}
                    <div className="flex items-center gap-[8px] whitespace-nowrap flex-shrink-0">
                      {row.status === 'Generating' ? (
                        <>
                          <div className="size-[16px] border-2 border-[#8C8C8C] border-t-transparent rounded-full animate-spin" />
                          <span className="font-['Roboto'] font-normal text-[13px] text-[#263238] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Generating
                          </span>
                        </>
                      ) : row.status === 'Complete' ? (
                        <>
                          <Download className="size-[16px] text-[#354eb4]" />
                          <button
                            onClick={() => onDownload(row.id)}
                            className="font-['Roboto'] font-normal text-[13px] text-[#354eb4] leading-[16px] hover:underline"
                            style={{ fontVariationSettings: "'wdth' 100" }}
                          >
                            Download File
                          </button>
                        </>
                      ) : null}
                    </div>

                    {/* Vertical Divider */}
                    <div className="h-[17px] w-0 border-l border-[#DADADA] opacity-20 flex-shrink-0" />

                    {/* Right Side - Upload File */}
                    <div className={`flex items-center gap-[8px] whitespace-nowrap flex-shrink-0 ${!row.downloadClicked ? 'opacity-20 pointer-events-none' : ''}`}>
                      <Upload className="size-[16px] text-[#354eb4]" />
                      <button
                        onClick={() => onUpload?.(row.id)}
                        disabled={!row.downloadClicked}
                        className="font-['Roboto'] font-normal text-[13px] text-[#354eb4] leading-[16px] hover:underline disabled:cursor-not-allowed"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Upload File
                      </button>
                    </div>
                  </div>
                </td>
                <td className="px-[16px] align-middle whitespace-nowrap">
                  <div className="flex items-center gap-[8px]">
                    <div className={`size-[8px] rounded-full ${
                      row.status === 'Complete' ? 'bg-[#52c41a]' :
                      row.status === 'Failed' ? 'bg-[#f5222d]' :
                      'bg-[#1677ff]'
                    }`} />
                    <span className="font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {row.status}
                    </span>
                  </div>
                </td>
                <td className="px-[16px] align-middle font-['Roboto'] font-normal text-[14px] text-[rgba(0,0,0,0.88)] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  {row.message || '-'}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}