import { useState } from 'react';
import svgPaths from "./svg-jkq9jpxh5o";
import { Wrench, Info, FileText, Activity } from 'lucide-react';

interface ContainerProps {
  onClose: () => void;
  onSubmit: () => void;
}

const scopeCategories = [
  {
    category: 'Actionable Subtasks',
    icon: Wrench,
    color: 'blue',
    description: 'Execute actions to resolve issues',
    options: [
      { id: 'credential-management', label: 'Credential Management', description: 'Manage and update system credentials' },
      { id: 'enable-disable-workflow', label: 'Enable and Disable Workflow', description: 'Control workflow execution states' },
    ]
  },
  {
    category: 'Information Scope',
    icon: Info,
    color: 'purple',
    description: 'Gather and analyze information',
    options: [
      { id: 'rca-info', label: 'RCA Info', description: 'Root Cause Analysis information' },
      { id: 'log-validation-datadog', label: 'Log Validation in Datadog', description: 'Validate logs and traces in Datadog' },
    ]
  },
];

export function Container({ onClose, onSubmit }: ContainerProps) {
  const [selectedScope, setSelectedScope] = useState<string>('');

  const handleReset = () => {
    setSelectedScope('');
  };

  const handleChooseScope = () => {
    if (selectedScope) {
      console.log('Selected scope:', selectedScope);
      onSubmit();
    }
  };

  return (
    <div className="bg-white relative rounded-xl shadow-2xl w-[600px] max-h-[80vh] flex flex-col" data-name="Container">
      {/* Header */}
      <div className="flex-shrink-0 bg-gradient-to-br from-blue-50 via-white to-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-semibold text-2xl text-gray-900 mb-2">
              Command Center
            </h2>
            <p className="text-sm text-gray-600">
              Choose a scope for this subtask. This will be added to the above ticket.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <path
                clipRule="evenodd"
                d={svgPaths.p26a36a00}
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories - Scrollable */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="space-y-6">
          {scopeCategories.map((category) => {
            const IconComponent = category.icon;
            const colorClasses = {
              blue: {
                icon: 'text-blue-600',
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                hover: 'hover:bg-blue-100',
                selected: 'bg-blue-100 border-blue-500',
              },
              purple: {
                icon: 'text-purple-600',
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                hover: 'hover:bg-purple-100',
                selected: 'bg-purple-100 border-purple-500',
              },
            };
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div key={category.category} className="space-y-3">
                {/* Category Header */}
                <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${colors.bg} ${colors.border} border`}>
                  <div className={`p-2 bg-white rounded-lg ${colors.border} border`}>
                    <IconComponent className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-gray-900">
                      {category.category}
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-2 ml-2">
                  {category.options.map((option) => {
                    const isSelected = selectedScope === option.id;
                    return (
                      <label
                        key={option.id}
                        className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          isSelected
                            ? `${colors.selected} shadow-sm`
                            : `border-gray-200 bg-white ${colors.hover}`
                        }`}
                      >
                        <div className="flex items-center h-6">
                          <input
                            type="radio"
                            name="scope"
                            value={option.id}
                            checked={isSelected}
                            onChange={(e) => setSelectedScope(e.target.value)}
                            className="w-4 h-4 cursor-pointer accent-blue-600"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-gray-900 mb-1">
                            {option.label}
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {option.description}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4 flex items-center justify-between">
        <button
          onClick={handleReset}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
        >
          Reset
        </button>
        <button
          onClick={handleChooseScope}
          disabled={!selectedScope}
          className={`px-6 py-2 rounded-lg transition-all text-sm font-medium ${
            selectedScope
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Choose Scope
        </button>
      </div>
    </div>
  );
}