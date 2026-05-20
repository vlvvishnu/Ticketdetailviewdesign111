import { CheckCircle2, Circle, Clock, MoreVertical } from 'lucide-react';

export interface SubtaskProps {
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  tags: string[];
  owner: string;
  eta: string;
  lastUpdated: string;
}

export function SubtaskCard({ title, status, tags, owner, eta, lastUpdated }: SubtaskProps) {
  const statusConfig = {
    'todo': { icon: Circle, label: 'To do', color: 'text-gray-400' },
    'in-progress': { icon: Clock, label: 'In progress', color: 'text-blue-600' },
    'done': { icon: CheckCircle2, label: 'Done', color: 'text-green-600' }
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Subtask Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {/* Status indicator */}
            <div className={`flex items-center gap-2 ${statusConfig[status].color}`}>
              <StatusIcon className="size-5" />
              <span className="text-sm font-medium">{statusConfig[status].label}</span>
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>

            {/* Tags */}
            <div className="flex gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-[rgba(0,0,0,0.02)] text-[rgba(0,0,0,0.88)] border border-[#d9d9d9]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Metadata */}
            <div className="flex gap-6 text-xs text-gray-500">
              <div>
                <span className="font-medium text-gray-700">Owner:</span> {owner}
              </div>
              <div>
                <span className="font-medium text-gray-700">ETA:</span> {eta}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                View details
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Area */}
      <div className="px-6 py-4 bg-gray-50">
        <div className="mb-3">
          <span className="text-sm font-medium text-gray-700">Execution details</span>
        </div>
        
        {/* Data grid placeholder */}
        <div className="bg-white border border-gray-200 rounded overflow-auto max-h-[400px]">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-700">ID</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Workflow</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Started</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Duration</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Result</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Owner</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Environment</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Triggered By</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[...Array(8)].map((_, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-600">EX-{1000 + idx}</td>
                  <td className="px-4 py-3 text-gray-900">Workflow {idx + 1}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                      idx % 3 === 0 ? 'bg-green-100 text-green-800' : 
                      idx % 3 === 1 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {idx % 3 === 0 ? 'Success' : idx % 3 === 1 ? 'Running' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">10:{10 + idx} AM</td>
                  <td className="px-4 py-3 text-gray-600">{2 + idx}m</td>
                  <td className="px-4 py-3 text-gray-600">OK</td>
                  <td className="px-4 py-3 text-gray-600">System</td>
                  <td className="px-4 py-3 text-gray-600">Prod</td>
                  <td className="px-4 py-3 text-gray-600">Auto</td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-800 text-xs">View</button>
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