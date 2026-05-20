import { useState } from 'react';
import { Plus } from 'lucide-react';
import { GenerateDataFileModal, DataFileFilters } from './GenerateDataFileModal';
import { WorkflowsDataTable, WorkflowDataFile } from './WorkflowsDataTable';
import { useSubtaskData } from '@/app/hooks/useSubtaskData';

interface WorkflowsDataSectionProps {
  subtaskId: string;
}

export function WorkflowsDataSection({ subtaskId }: WorkflowsDataSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Use persisted data for this specific subtask instance
  const [dataFiles, setDataFiles] = useSubtaskData<WorkflowDataFile[]>(subtaskId, []);
  const [hasGeneratedOnce, setHasGeneratedOnce] = useSubtaskData<boolean>(`${subtaskId}-hasGenerated`, false);

  const handleRunQuery = (filters: DataFileFilters) => {
    // Generate a new request
    const newRequest: WorkflowDataFile = {
      id: `REQ-${Date.now()}`,
      requestId: `REQ-${Date.now()}`,
      tenant: filters.tenant || 'LHC',
      workflow: filters.workflow || 'Eligibility Verification',
      timeRange: filters.dateFilter === 'last7' ? 'Last 7 Days' : 
                 filters.dateFilter === 'last30' ? 'Last 30 Days' :
                 filters.dateFilter === 'last90' ? 'Last 90 Days' :
                 filters.dateFilter === 'today' ? 'Today' :
                 filters.dateFilter === 'yesterday' ? 'Yesterday' : 'Custom',
      status: 'Generating',
      message: 'File Generation'
    };

    setDataFiles([newRequest, ...dataFiles]);
    setIsModalOpen(false);
    setHasGeneratedOnce(true);

    // Simulate file generation completion after 3 seconds
    setTimeout(() => {
      setDataFiles(prev => prev.map(file => 
        file.id === newRequest.id 
          ? { ...file, status: 'Complete' as const }
          : file
      ));
    }, 3000);
  };

  const handleDownload = (id: string) => {
    // Mark download as clicked to enable upload
    setDataFiles(prev => prev.map(file => 
      file.id === id 
        ? { ...file, downloadClicked: true }
        : file
    ));
    
    // Simulate file download
    console.log('Downloading file:', id);
    alert('File download started!');
  };

  const handleUpload = (id: string) => {
    // Simulate file upload
    console.log('Uploading file:', id);
    alert('File upload initiated!');
  };

  // Initial empty state - just show the blue button
  if (!hasGeneratedOnce) {
    return (
      <div className="px-[32px] py-[24px]">
        {/* Dropbox - Empty State - Matches Other Subtasks */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full h-[132px] bg-[#eef6ff] border-dashed rounded-[3px] hover:bg-[#e3f0ff] transition-all flex items-center justify-center"
          style={{ borderWidth: '1.75px', borderColor: '#a3caff' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#8ab9ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#a3caff';
          }}
        >
          <p className="text-[16px] text-[#538ddc] text-center px-4 max-w-[431px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Click here to use the form below to specify the data you want to download
          </p>
        </button>

        {/* Modal */}
        <GenerateDataFileModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onRunQuery={handleRunQuery}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full px-[32px] py-[24px]">
      {/* Header with Button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-['Roboto'] font-medium text-[18px] text-[rgba(0,0,0,0.88)] leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Workflows
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#1677ff] flex items-center gap-[8px] h-[34px] px-[16px] rounded-[6px] font-['Roboto'] font-normal text-[14px] text-white leading-[22px] hover:bg-[#4096ff] transition-colors"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <Plus className="size-[16px]" />
          Generate New File
        </button>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto">
        <WorkflowsDataTable data={dataFiles} onDownload={handleDownload} onUpload={handleUpload} />
      </div>

      {/* Modal */}
      <GenerateDataFileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRunQuery={handleRunQuery}
      />
    </div>
  );
}