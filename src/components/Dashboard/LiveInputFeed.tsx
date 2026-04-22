import React, { useEffect, useRef } from 'react';
import { useSimulation, type InteractionEvent } from '../../context/SimulationContext';

export const LiveInputFeed: React.FC = () => {
  const { interactionLogs, liveInput } = useSimulation();
  const feedEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    feedEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [interactionLogs]);

  const renderEvent = (log: InteractionEvent) => {
    const time = <span className="text-gray-500">[{log.timestamp}]</span>;
    
    switch (log.type) {
      case 'focus':
        return <div className="text-blue-400">{time} User focused on: <span className="font-bold">{log.target}</span></div>;
      case 'blur':
        return <div className="text-gray-500">{time} User left: {log.target}</div>;
      case 'click':
        return <div className="text-yellow-400">{time} Click event: <span className="font-bold">{log.target}</span></div>;
      case 'submit':
        return <div className="text-red-400 font-bold">{time} FORM SUBMITTED: {log.target}</div>;
      case 'keystroke':
        // Mask passwords partially for the dashboard display to emphasize it's a simulation
        let displayValue = log.value || '';
        if (log.target.toLowerCase().includes('password') && displayValue.length > 2) {
          displayValue = displayValue.charAt(0) + '*'.repeat(displayValue.length - 2) + displayValue.charAt(displayValue.length - 1);
        }
        return (
          <div className="text-attacker-highlight">
            {time} Keystroke logged in {log.target}: <span className="bg-gray-800 px-1 rounded text-white">{displayValue}</span>
          </div>
        );
      default:
        return <div>{time} Unknown event</div>;
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Current State Summary */}
      <div className="mb-4 p-3 bg-black rounded border border-gray-800 text-xs">
        <div className="text-gray-500 mb-1">CURRENT EXTRACTED DATA:</div>
        {Object.entries(liveInput).length === 0 ? (
          <div className="text-gray-600 italic">Waiting for input...</div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(liveInput).map(([key, value]) => {
              const isPassword = key.toLowerCase().includes('password');
              const displayValue = isPassword ? '*'.repeat(value.length) : value;
              return (
                <div key={key} className="flex">
                  <span className="text-gray-500 w-24 capitalize">{key}:</span>
                  <span className="text-white truncate">{displayValue || '-'}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Live Log Feed */}
      <div className="flex-1 overflow-y-auto font-mono text-[11px] sm:text-xs space-y-1 pr-2 custom-scrollbar">
        {[...interactionLogs].reverse().map((log) => (
          <div key={log.id} className="py-0.5 animate-in fade-in slide-in-from-bottom-1">
            {renderEvent(log)}
          </div>
        ))}
        <div ref={feedEndRef} />
      </div>
    </div>
  );
};
