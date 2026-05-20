import { useState } from 'react';
import svgPaths from '@/imports/svg-iu7q358syy';
import { ResponsiveActionButtons, type ActionButtonConfig } from '@/app/components/ResponsiveActionButtons';

export interface DatadogRecord {
  id: string;
  transactionId: string;
  mrNumber: string;
  patientName: string;
  episodeName?: string;
  workflow?: string;
  tenant?: string;
  variant?: string;
  transactionDate?: string;
  status: 'Terminated' | 'Failed' | 'Needs Intervention';
  datadogLink?: string;
  recordingLink?: string;
  probableReason: string;
}

interface DatadogValidationTableProps {
  records?: DatadogRecord[];
  onModifyTicket: () => void;
  onRemove?: (ids: string[]) => void;
  isCompleted?: boolean;
  onRecordsChange?: (records: DatadogRecord[]) => void;
}

const defaultRecords: DatadogRecord[] = [];

export function DatadogValidationTable({ records = defaultRecords, onModifyTicket, onRemove, isCompleted, onRecordsChange }: DatadogValidationTableProps) {
  const [selectedRecords, setSelectedRecords] = useState<Set<string>>(new Set());
  const [datadogRecords, setDatadogRecords] = useState<DatadogRecord[]>(records);
  const [searchFilters, setSearchFilters] = useState({
    transactionId: '',
    mrNumber: '',
    patientName: '',
    status: '',
    datadogLink: '',
    recordingLink: '',
    probableReason: ''
  });

  const toggleRecord = (id: string) => {
    if (isCompleted) return;
    const newSet = new Set(selectedRecords);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedRecords(newSet);
  };

  const toggleAll = () => {
    if (isCompleted) return;
    if (selectedRecords.size === datadogRecords.length && datadogRecords.length > 0) {
      setSelectedRecords(new Set());
    } else {
      setSelectedRecords(new Set(datadogRecords.map(r => r.id)));
    }
  };

  const handleRemoveSelected = () => {
    if (isCompleted || !onRemove || selectedRecords.size === 0) return;
    onRemove(Array.from(selectedRecords));
    setSelectedRecords(new Set());
  };

  const handleAnalyseLogs = () => {
    console.log('Opening AI Summary for log analysis');
  };

  const handleAnalyseVideo = () => {
    console.log('Opening AI Summary for video analysis');
  };

  const handleViewLog = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      alert('Opening Datadog log viewer...');
    }
  };

  const handleViewRecording = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      alert('Opening session recording...');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running Now':
        return '#52c41a';
      case 'Terminated':
        return '#ff4d4f';
      case 'Failed':
        return '#ff4d4f';
      case 'Needs Intervention':
        return '#1890ff';
      default:
        return '#52c41a';
    }
  };

  const actionButtons: ActionButtonConfig[] = [
    {
      id: 'analyse-logs',
      label: 'Analyse Logs',
      onClick: handleAnalyseLogs,
      disabled: selectedRecords.size === 0,
      element: (
        <button
          onClick={handleAnalyseLogs}
          disabled={selectedRecords.size === 0}
          className="bg-[#354eb4] content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[130px] disabled:opacity-20 enabled:opacity-100 enabled:hover:bg-[#2d4299] transition-all"
        >
          <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="css-ew64yg font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Analyse Logs
          </p>
        </button>
      )
    },
    {
      id: 'analyse-video',
      label: 'Analyse Video',
      onClick: handleAnalyseVideo,
      disabled: selectedRecords.size === 0,
      element: (
        <button
          onClick={handleAnalyseVideo}
          disabled={selectedRecords.size === 0}
          className="bg-[#354eb4] content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[130px] disabled:opacity-20 enabled:opacity-100 enabled:hover:bg-[#2d4299] transition-all"
        >
          <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="css-ew64yg font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Analyse Video
          </p>
        </button>
      )
    },
    {
      id: 'modify',
      label: 'Modify Ticket',
      onClick: onModifyTicket,
      disabled: isCompleted,
      element: (
        <button
          onClick={onModifyTicket}
          disabled={isCompleted}
          className="bg-[#354eb4] content-stretch flex items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[116px] hover:bg-[#2d4299] transition-colors disabled:opacity-50"
        >
          <p className="css-ew64yg font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Modify Ticket
          </p>
        </button>
      )
    },
    {
      id: 'remove',
      label: 'Remove from List',
      onClick: handleRemoveSelected,
      disabled: selectedRecords.size === 0,
      element: (
        <button
          disabled={selectedRecords.size === 0}
          onClick={handleRemoveSelected}
          className="content-stretch flex gap-[6.4px] items-center justify-center opacity-20 px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 w-[147.2px] disabled:opacity-20 enabled:opacity-100 enabled:hover:bg-gray-50 transition-all"
        >
          <div aria-hidden="true" className="absolute border border-[#e84e0f] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="relative shrink-0 size-[14.4px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g>
                <path d={svgPaths.p2692f600} fill="#E84E0F" fillOpacity="0.1" />
                <g>
                  <path d={svgPaths.p659e500} fill="#E84E0F" />
                  <path d={svgPaths.p7640f00} fill="#E84E0F" />
                </g>
              </g>
            </svg>
          </div>
          <p className="font-['Roboto'] font-medium leading-normal relative shrink-0 text-[#e84e0f] text-[12.8px] tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Remove from List
          </p>
        </button>
      )
    },
    {
      id: 'reload',
      label: 'Reload',
      onClick: () => {},
      disabled: false,
      element: (
        <button className="bg-white content-stretch flex items-center justify-center px-[12.8px] py-[6.4px] rounded-[4px] shrink-0 w-[33.6px] relative hover:bg-[#f0f5ff] transition-all">
          <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="relative shrink-0 size-[14.4px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g clipPath="url(#clip0_97_21735)">
                <path d={svgPaths.p1ab33a00} fill="#354EB4" />
              </g>
              <defs>
                <clipPath id="clip0_97_21735">
                  <rect fill="white" height="18" width="18" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-[13px]">
      <div className="flex items-center justify-between">
        <div className="h-[21px]">
          <p className="font-['Roboto'] font-bold leading-normal text-[#263238] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Transactions Affected
          </p>
        </div>
        <ResponsiveActionButtons actions={actionButtons} />
      </div>

      <div className="border border-[#e1dfdf] rounded-[8px] overflow-hidden max-h-[500px]">
        <div className="overflow-auto max-h-[500px]">
          <table className="w-full">
          <thead>
            <tr className="bg-[#f8fbff]">
              <th className="w-[45px] border-r border-[rgba(234,237,242,0.3)] p-[16px]">
                <input
                  type="checkbox"
                  checked={selectedRecords.size === datadogRecords.length && datadogRecords.length > 0}
                  onChange={toggleAll}
                  disabled={isCompleted}
                  className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </th>
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.transactionId ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Transaction ID</p>
                  </div>
                  <input type="text" placeholder="" value={searchFilters.transactionId} onChange={(e) => setSearchFilters({...searchFilters, transactionId: e.target.value})} disabled={isCompleted} className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed" />
                </div>
              </th>
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.mrNumber ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>MR Number</p>
                  </div>
                  <input type="text" placeholder="" value={searchFilters.mrNumber} onChange={(e) => setSearchFilters({...searchFilters, mrNumber: e.target.value})} disabled={isCompleted} className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed" />
                </div>
              </th>
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.patientName ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Patient Name</p>
                  </div>
                  <input type="text" placeholder="" value={searchFilters.patientName} onChange={(e) => setSearchFilters({...searchFilters, patientName: e.target.value})} disabled={isCompleted} className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed" />
                </div>
              </th>
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.status ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Status</p>
                  </div>
                  <input type="text" placeholder="" value={searchFilters.status} onChange={(e) => setSearchFilters({...searchFilters, status: e.target.value})} disabled={isCompleted} className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed" />
                </div>
              </th>
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.datadogLink ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Datadog Link</p>
                  </div>
                  <input type="text" placeholder="" value={searchFilters.datadogLink} onChange={(e) => setSearchFilters({...searchFilters, datadogLink: e.target.value})} disabled={isCompleted} className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed" />
                </div>
              </th>
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.recordingLink ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Recording Link</p>
                  </div>
                  <input type="text" placeholder="" value={searchFilters.recordingLink} onChange={(e) => setSearchFilters({...searchFilters, recordingLink: e.target.value})} disabled={isCompleted} className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed" />
                </div>
              </th>
              <th className="border-r border-[rgba(234,237,242,0.3)] p-[12px] text-left">
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[3px] items-center whitespace-nowrap">
                    <div className="size-[16px]">
                      <div className={`${searchFilters.probableReason ? 'bg-[#2563eb]' : 'bg-[#c9cdd5]'} rounded-[26px] size-full flex items-center justify-center`}>
                        <svg className="size-[10px]" fill="none" viewBox="0 0 16 16">
                          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Roboto'] font-medium text-[14px] text-black leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>Probable Reason / Error for Failure</p>
                  </div>
                  <input type="text" placeholder="" value={searchFilters.probableReason} onChange={(e) => setSearchFilters({...searchFilters, probableReason: e.target.value})} disabled={isCompleted} className="bg-white h-[22px] rounded-[4px] w-full border border-[#cad2d8] px-[8px] text-[13px] disabled:opacity-50 disabled:cursor-not-allowed" />
                </div>
              </th>
              <th className="w-[40px]"></th>
            </tr>
          </thead>
          <tbody>
            {datadogRecords.map((record) => (
              <tr key={record.id} className="bg-white border-b border-[#ebedf8] hover:bg-gray-50">
                <td className="p-[8px] text-center">
                  <input type="checkbox" checked={selectedRecords.has(record.id)} onChange={() => toggleRecord(record.id)} disabled={isCompleted} className="bg-white rounded-[4px] size-[16px] border border-[#cad2d8] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" />
                </td>
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{record.transactionId}</p>
                </td>
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{record.mrNumber}</p>
                </td>
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{record.patientName}</p>
                </td>
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  <div className="flex gap-[8px] items-center">
                    <div className="rounded-[50%] size-[8px]" style={{ backgroundColor: getStatusColor(record.status) }} />
                    <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{record.status}</p>
                  </div>
                </td>
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  {record.datadogLink ? (
                    <button onClick={() => handleViewLog(record.datadogLink)} className="font-['Roboto'] font-normal text-[#2563eb] text-[13px] leading-[16px] underline hover:text-[#1d4ed8]" style={{ fontVariationSettings: "'wdth' 100" }}>View</button>
                  ) : (
                    <p className="font-['Roboto'] font-normal text-[#9ca3af] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>—</p>
                  )}
                </td>
                <td className="px-[16px] py-[8px] whitespace-nowrap">
                  {record.recordingLink ? (
                    <button onClick={() => handleViewRecording(record.recordingLink)} className="font-['Roboto'] font-normal text-[#2563eb] text-[13px] leading-[16px] underline hover:text-[#1d4ed8]" style={{ fontVariationSettings: "'wdth' 100" }}>View Recording</button>
                  ) : (
                    <p className="font-['Roboto'] font-normal text-[#9ca3af] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>—</p>
                  )}
                </td>
                <td className="px-[16px] py-[8px]">
                  <p className="font-['Roboto'] font-normal text-[#263238] text-[13px] leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{record.probableReason}</p>
                </td>
                <td className="text-center w-[40px]">
                  <button className="p-[4px] hover:bg-gray-100 rounded">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="4" r="1.5" fill="#263238" />
                      <circle cx="8" cy="8" r="1.5" fill="#263238" />
                      <circle cx="8" cy="12" r="1.5" fill="#263238" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}