import svgPaths from "@/imports/svg-ggujkzeubm";
import imgNeosLogoOriginal2 from "@/imports/Frame_5_(6).png";
import imgAvatar from "figma:asset/6a0a2f3669c898b54b0b47ba2da464b64af3354e.png";
import { useState, useRef, useEffect } from 'react';
import { RotateCcw, User, Settings, LogOut } from 'lucide-react';

interface TopNavigationProps {
  onResetTicket?: () => void;
  showResetOption?: boolean;
}

export function TopNavigation({ onResetTicket, showResetOption = false }: TopNavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResetClick = () => {
    setIsDropdownOpen(false);
    onResetTicket?.();
  };

  return (
    <nav className="relative bg-gradient-to-r from-[#38475a] to-[#1c2d42] via-[#2c3c50] via-[41.55%] h-[60px] flex items-center shadow-lg">
      {/* Logo - Left */}
      <div className="absolute inset-[34.46%_92.4%_37.24%_1.67%]">
        <div className="absolute inset-[24.54%_45.61%_-0.63%_0]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNeosLogoOriginal2} />
        </div>
      </div>

      {/* Menu Navigation - Center */}
      <div className="absolute content-stretch flex items-start left-[125px] top-1/2 translate-y-[-50%]">
        {/* Dashboard */}
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0">
          <p className="font-['Roboto',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]">
            Dashboard
          </p>
        </div>

        {/* Authorization */}
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0">
          <p className="font-['Roboto',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]">
            Authorization
          </p>
        </div>

        {/* Admin */}
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0">
          <p className="font-['Roboto',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]">
            Admin
          </p>
        </div>

        {/* Config */}
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0">
          <p className="font-['Roboto',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.25)]">
            Config
          </p>
        </div>

        {/* Support */}
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative shrink-0">
          <p className="font-['Roboto',sans-serif] font-normal leading-[22px] relative shrink-0 text-[16px] text-white">
            Support
          </p>
          <div className="relative shrink-0 size-[13px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <g>
                <path d={svgPaths.p9bd1700} fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Avatar - Right */}
      <div className="absolute inset-[29.17%_1.69%_31.94%_96.85%]" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="relative block w-full h-full hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img alt="" className="block max-w-none size-full rounded-full" height="28" src={imgAvatar} width="28" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">Sarah Chen</p>
              <p className="text-xs text-gray-500">sarah.chen@company.com</p>
            </div>

            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <User className="size-4 text-gray-400" />
              Profile
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <Settings className="size-4 text-gray-400" />
              Settings
            </button>

            {showResetOption && (
              <>
                <div className="my-1 border-t border-gray-100" />
                <button
                  onClick={handleResetClick}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <RotateCcw className="size-4" />
                  Reset Current Ticket
                </button>
              </>
            )}

            <div className="my-1 border-t border-gray-100" />

            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <LogOut className="size-4 text-gray-400" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}