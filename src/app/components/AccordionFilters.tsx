import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

interface AccordionFilterProps {
  onFilterChange?: (filters: Record<string, string[]>) => void;
}

export function AccordionFilters({ onFilterChange }: AccordionFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    workflow: false,
    application: false,
    tenant: false,
    workflowVariant: false,
    alertType: false,
    gateway: false
  });

  const [filters, setFilters] = useState<Record<string, FilterOption[]>>({
    workflow: [
      { id: 'wellsky-eligibility', label: 'WELLSKY-ELIGIBILITY', checked: false },
      { id: 'hchb-auth', label: 'HCHB-AUTH', checked: false },
      { id: 'hchb-claims', label: 'HCHB-CLAIMS-TO-INVSTAR', checked: false },
      { id: 'matrix-billing', label: 'MATRIX-BILLING-SYNC', checked: false },
      { id: 'wellsky-immat', label: 'WELLSKY-IMMAT', checked: false },
    ],
    application: [
      { id: 'are', label: 'ARE', checked: false },
      { id: 'datadog', label: 'Datadog', checked: false },
      { id: 'freshdesk', label: 'Freshdesk', checked: false },
    ],
    tenant: [
      { id: 'archcare', label: 'Archcare', checked: false },
      { id: 'arden', label: 'Arden', checked: false },
      { id: 'brightspring', label: 'Brightspring', checked: false },
      { id: 'continuum', label: 'Continuum', checked: false },
      { id: 'deltacare', label: 'Delta Care', checked: false },
    ],
    workflowVariant: [
      { id: 'eligibility', label: 'ELIGIBILITY', checked: false },
      { id: 'authorizations', label: 'AUTHORIZATIONS', checked: false },
      { id: 'claims', label: 'CLAIMS PROCESSING', checked: false },
    ],
    alertType: [
      { id: 'critical', label: 'Critical', checked: false },
      { id: 'warning', label: 'Warning', checked: false },
      { id: 'info', label: 'Info', checked: false },
    ],
    gateway: [
      { id: 'api-gateway', label: 'API Gateway', checked: false },
      { id: 'web-gateway', label: 'Web Gateway', checked: false },
    ]
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCheckboxChange = (section: string, optionId: string) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        [section]: prev[section].map(option =>
          option.id === optionId ? { ...option, checked: !option.checked } : option
        )
      };

      // Automatically trigger filter change
      const selectedFilters: Record<string, string[]> = {};
      Object.entries(newFilters).forEach(([key, options]) => {
        const selected = options.filter(opt => opt.checked).map(opt => opt.id);
        if (selected.length > 0) {
          selectedFilters[key] = selected;
        }
      });

      onFilterChange?.(selectedFilters);

      return newFilters;
    });
  };

  const handleReset = () => {
    // Reset all checkboxes
    setFilters(prev => {
      const resetFilters: Record<string, FilterOption[]> = {};
      Object.entries(prev).forEach(([key, options]) => {
        resetFilters[key] = options.map(option => ({ ...option, checked: false }));
      });
      return resetFilters;
    });

    // Close all accordions
    setExpandedSections({
      workflow: false,
      application: false,
      tenant: false,
      workflowVariant: false,
      alertType: false,
      gateway: false
    });

    // Clear search
    setSearchTerm('');

    // Notify parent of reset
    onFilterChange?.({});
  };

  const sections = [
    { id: 'workflow', label: 'Workflow' },
    { id: 'application', label: 'Application' },
    { id: 'tenant', label: 'Tenant' },
    { id: 'workflowVariant', label: 'Workflow Variant' },
    { id: 'alertType', label: 'Alert Type' },
    { id: 'gateway', label: 'Gateway' },
  ];

  return (
    <div className="bg-white/95 border border-gray-200 rounded-xl shadow-md flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <p className="text-sm font-medium text-gray-600 mb-3">
          Showing Results Based on
        </p>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for any app or setting to filter"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 pr-8 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
          />
          <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="flex-1 overflow-y-auto">
        {sections.map((section, index) => (
          <div key={section.id}>
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-4 py-3.5 flex items-center justify-between bg-white/30 hover:bg-gray-50 transition-colors border-b border-gray-200"
            >
              <span className="text-sm font-medium text-gray-900">
                {section.label}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-900 transition-transform ${
                  expandedSections[section.id] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections[section.id] && (
              <div className="px-4 py-3 bg-white border-b border-gray-200">
                <div className="space-y-2">
                  {filters[section.id]
                    .filter(option =>
                      option.label.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((option) => (
                      <label
                        key={option.id}
                        className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 px-2 py-1.5 rounded transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={option.checked}
                          onChange={() => handleCheckboxChange(section.id, option.id)}
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="p-4 border-t border-gray-200 space-y-2 flex-shrink-0">
        <button className="w-full px-4 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded cursor-not-allowed opacity-50">
          Load Data
        </button>
        <button
          onClick={handleReset}
          className="w-full px-4 py-2 text-blue-600 text-sm font-medium rounded hover:bg-blue-50 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
