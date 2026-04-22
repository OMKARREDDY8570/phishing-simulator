import React, { createContext, useContext, useState, type ReactNode, useCallback } from 'react';

export type PlatformType = 'email' | 'social' | 'finance' | 'none';

export interface InteractionEvent {
  id: string;
  timestamp: string;
  type: 'focus' | 'blur' | 'keystroke' | 'click' | 'submit';
  target: string;
  value?: string;
}

interface SimulationContextType {
  currentPlatform: PlatformType;
  setCurrentPlatform: (platform: PlatformType) => void;
  interactionLogs: InteractionEvent[];
  logInteraction: (type: InteractionEvent['type'], target: string, value?: string) => void;
  liveInput: Record<string, string>;
  updateLiveInput: (field: string, value: string) => void;
  isRevealActive: boolean;
  setRevealActive: (active: boolean) => void;
  resetSimulation: () => void;
}

const SimulationContext = createContext<SimulationContextType | undefined>(undefined);

export const SimulationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPlatform, setCurrentPlatform] = useState<PlatformType>('none');
  const [interactionLogs, setInteractionLogs] = useState<InteractionEvent[]>([]);
  const [liveInput, setLiveInput] = useState<Record<string, string>>({});
  const [isRevealActive, setRevealActive] = useState(false);

  const logInteraction = useCallback((type: InteractionEvent['type'], target: string, value?: string) => {
    const newEvent: InteractionEvent = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit', fractionalSecondDigits: 3 }),
      type,
      target,
      value,
    };
    setInteractionLogs((prev) => [newEvent, ...prev].slice(0, 100)); // Keep last 100 events
  }, []);

  const updateLiveInput = useCallback((field: string, value: string) => {
    setLiveInput((prev) => ({ ...prev, [field]: value }));
  }, []);

  const resetSimulation = useCallback(() => {
    setInteractionLogs([]);
    setLiveInput({});
    setRevealActive(false);
  }, []);

  return (
    <SimulationContext.Provider
      value={{
        currentPlatform,
        setCurrentPlatform,
        interactionLogs,
        logInteraction,
        liveInput,
        updateLiveInput,
        isRevealActive,
        setRevealActive,
        resetSimulation,
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
};

export const useSimulation = () => {
  const context = useContext(SimulationContext);
  if (context === undefined) {
    throw new Error('useSimulation must be used within a SimulationProvider');
  }
  return context;
};
