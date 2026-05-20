import { createContext, useContext, ReactNode } from 'react';

interface LayoutContextType {
  isFloatingPanelOpen: boolean;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ 
  children, 
  isFloatingPanelOpen 
}: { 
  children: ReactNode; 
  isFloatingPanelOpen: boolean;
}) {
  return (
    <LayoutContext.Provider value={{ isFloatingPanelOpen }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}
