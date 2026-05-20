import { Home, Ticket, Eye, Users, Settings, Menu, Layers } from 'lucide-react';
import Group1 from '@/imports/Group1410083415/Group1410083415';
import { useState, useEffect, useRef } from 'react';

interface LeftSidebarProps {
  activeView?: string;
  onNavigate?: (view: string) => void;
  onResetTicket?: () => void;
}

export function LeftSidebar({ activeView = 'home', onNavigate, onResetTicket }: LeftSidebarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'tickets', label: 'Tickets', icon: Ticket },
    { id: 'ticket-view-2', label: 'Ticket\nView – P1', icon: Layers },
    { id: 'version', label: 'Version\nVisibility', icon: Eye },
    { id: 'workers', label: 'Scale\nworkers', icon: Users },
  ];

  return (
    <div className="relative h-screen w-[74px] bg-[#354eb4] shadow-[1px_4px_5px_0px_rgba(0,0,0,0.2)] flex flex-col items-center z-50">
      {/* Logo at top */}
      <div className="mt-3 w-12 h-12 flex items-center justify-center">
        <div className="w-8 h-8">
          <Group1 />
        </div>
      </div>

      {/* Divider */}
      <div className="w-[74px] h-px bg-black/10 mt-[26.55px]" />

      {/* Menu Items */}
      <div className="flex flex-col gap-5 mt-8 items-center">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate?.(item.id)}
              className={`flex flex-col items-center gap-2 transition-opacity ${
                isActive ? 'opacity-100' : 'opacity-35 hover:opacity-60'
              }`}
            >
              <Icon className="w-6 h-6 text-white" />
              <span className="text-white text-[8px] font-semibold uppercase text-center leading-tight whitespace-pre-line">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* User Avatar at bottom */}
      <div className="mt-auto mb-8">
        <div className="w-[34px] h-[34px] bg-[#DE350D] rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">BA</span>
        </div>
      </div>

      {/* Settings button */}
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mb-5 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
      >
        <Settings className="w-5 h-5 text-white" />
      </button>

      {/* Settings Menu Dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed left-[74px] bottom-5 bg-white rounded-lg shadow-xl border border-gray-200 w-56 z-50"
        >
          <div className="p-2">
            <button className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors">
              Account Settings
            </button>
            <button className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors">
              Preferences
            </button>
            {onResetTicket && (
              <>
                <div className="border-t border-gray-200 my-1" />
                <button
                  onClick={() => { setIsMenuOpen(false); onResetTicket(); }}
                  className="w-full px-3 py-2 text-left text-sm text-orange-600 hover:bg-orange-50 rounded transition-colors"
                >
                  Reset Current Ticket
                </button>
              </>
            )}
            <div className="border-t border-gray-200 my-1" />
            <button className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 rounded transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}