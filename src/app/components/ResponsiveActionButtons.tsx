import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLayout } from '@/app/contexts/LayoutContext';

export interface ActionButtonConfig {
  id: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  element: React.ReactNode;
}

interface ResponsiveActionButtonsProps {
  actions: ActionButtonConfig[];
  className?: string;
}

export function ResponsiveActionButtons({ 
  actions,
  className = ''
}: ResponsiveActionButtonsProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [useDropdown, setUseDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { isFloatingPanelOpen } = useLayout();

  // Detect if we need to use dropdown based on available space
  useEffect(() => {
    const checkSpace = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const parent = container.parentElement;
      if (!parent) return;

      // Get parent width
      const parentWidth = parent.offsetWidth;
      
      // If floating panel is open and parent width is constrained
      // Use a threshold to determine if we should switch to dropdown
      const shouldUseDropdown = isFloatingPanelOpen && parentWidth < 900;
      
      setUseDropdown(shouldUseDropdown);
    };

    checkSpace();

    const resizeObserver = new ResizeObserver(checkSpace);
    if (containerRef.current?.parentElement) {
      resizeObserver.observe(containerRef.current.parentElement);
    }

    window.addEventListener('resize', checkSpace);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', checkSpace);
    };
  }, [isFloatingPanelOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleDropdownItemClick = (action: ActionButtonConfig) => {
    if (!action.disabled) {
      action.onClick();
      setDropdownOpen(false);
    }
  };

  const handleDropdownItemKeyDown = (e: React.KeyboardEvent, action: ActionButtonConfig) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownItemClick(action);
    } else if (e.key === 'Escape') {
      setDropdownOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={className}>
      {!useDropdown ? (
        // Desktop/Normal: Show individual buttons
        <div className="flex gap-[8px] items-center">
          {actions.map((action) => (
            <div key={action.id}>
              {action.element}
            </div>
          ))}
        </div>
      ) : (
        // Responsive: Show "Actions" dropdown
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onKeyDown={(e) => e.key === 'Escape' && setDropdownOpen(false)}
            className="bg-[#354eb4] hover:bg-[#2d4299] content-stretch flex gap-[6.4px] items-center justify-center px-[12.8px] py-[6.4px] relative rounded-[4px] shrink-0 min-w-[100px] transition-all"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <div aria-hidden="true" className="absolute border border-[#354eb4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="font-['Roboto'] font-medium leading-normal relative shrink-0 text-[12.8px] text-white tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Actions
            </p>
            <ChevronDown className="size-[13.6px] text-white" />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-[100]">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {actions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleDropdownItemClick(action)}
                    onKeyDown={(e) => handleDropdownItemKeyDown(e, action)}
                    disabled={action.disabled}
                    className={`w-full text-left px-4 py-2 text-sm font-['Roboto'] transition-colors ${
                      action.disabled
                        ? 'text-gray-400 cursor-not-allowed bg-gray-50'
                        : 'text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none'
                    }`}
                    role="menuitem"
                    tabIndex={action.disabled ? -1 : 0}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
