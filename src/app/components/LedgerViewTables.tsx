import { CompactWorkflowTable } from './CompactWorkflowTable';

// Render a table section with horizontal scroll
export const renderTableWithScroll = (workflows: any[], title: string | undefined, selectedRows: Set<string>, onSelectAll: (workflows: any[]) => void, onSelectRow: (id: string) => void) => (
  <div className="mb-8">
    {title && (
      <div className="mb-4">
        <h3 className="text-[14px] font-semibold text-[#374659] mb-2">{title}</h3>
        <div className="border-t border-[#e0e0e0]" />
      </div>
    )}
    <div className="overflow-x-auto border border-[#e1dfdf] rounded-[4px]">
      <div className="min-w-[800px]">
        <CompactWorkflowTable 
          workflows={workflows}
          selectedRows={selectedRows}
          onSelectAll={onSelectAll}
          onSelectRow={onSelectRow}
        />
      </div>
    </div>
  </div>
);
