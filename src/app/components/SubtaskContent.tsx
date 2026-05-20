import { CheckCircle2, Circle, Clock } from 'lucide-react';
import type { Subtask } from './SubtaskTabs';

interface SubtaskContentProps {
  subtask: Subtask;
}

export function SubtaskContent({ subtask }: SubtaskContentProps) {
  const statusConfig = {
    'todo': { icon: Circle, label: 'To do', bgColor: 'bg-gray-100', textColor: 'text-gray-700' },
    'in-progress': { icon: Clock, label: 'In progress', bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
    'done': { icon: CheckCircle2, label: 'Done', bgColor: 'bg-green-100', textColor: 'text-green-700' }
  };

  const StatusIcon = statusConfig[subtask.status].icon;

  return (
    <div className="bg-white p-6">
      {/* Subtask Summary Header */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-gray-900">{subtask.title}</h2>
            
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${statusConfig[subtask.status].bgColor} ${statusConfig[subtask.status].textColor}`}>
              <StatusIcon className="size-4" />
              {statusConfig[subtask.status].label}
            </span>

            {/* Tags */}
            <div className="flex gap-2">
              {subtask.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-[rgba(0,0,0,0.02)] text-[rgba(0,0,0,0.88)] border border-[#d9d9d9]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex gap-8 text-sm">
          <div>
            <span className="text-gray-500">Owner:</span>
            <span className="ml-2 font-medium text-gray-900">{subtask.owner}</span>
          </div>
          <div>
            <span className="text-gray-500">ETA:</span>
            <span className="ml-2 font-medium text-gray-900">{subtask.eta}</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div>
        <div className="mb-4">
          <h3 className="text-base font-semibold text-gray-900">Execution details</h3>
          <p className="text-sm text-gray-600 mt-1">Runs for this subtask</p>
        </div>
        
        {/* Data Table */}
        <div className="border border-gray-200 rounded-lg overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Run ID</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Workflow Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Status</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Started At</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Duration</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Result</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Owner</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Environment</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Triggered By</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {[...Array(8)].map((_, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-gray-900 font-medium">RUN-{1000 + idx}</td>
                  <td className="px-4 py-3 text-gray-700">{subtask.title} - Workflow {idx + 1}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      idx % 3 === 0 ? 'bg-green-100 text-green-800' : 
                      idx % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {idx % 3 === 0 ? 'Success' : idx % 3 === 1 ? 'Running' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">Jan 14, 10:{10 + idx} AM</td>
                  <td className="px-4 py-3 text-gray-600">{2 + idx}m {15 * idx}s</td>
                  <td className="px-4 py-3 text-gray-600">{idx % 3 === 0 ? 'OK' : idx % 3 === 1 ? 'In Progress' : 'Queued'}</td>
                  <td className="px-4 py-3 text-gray-600">{idx % 2 === 0 ? 'System' : subtask.owner}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[rgba(0,0,0,0.02)] text-[rgba(0,0,0,0.88)] border border-[#d9d9d9]">
                      Prod
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{idx % 2 === 0 ? 'Auto' : 'Manual'}</td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">
                      View Details
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