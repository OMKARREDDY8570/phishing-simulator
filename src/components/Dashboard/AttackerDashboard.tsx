import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { LiveInputFeed } from './LiveInputFeed';
import { RiskAssessment } from './RiskAssessment';
import { Terminal, Activity, Eye } from 'lucide-react';

export const AttackerDashboard: React.FC = () => {
  const { currentPlatform } = useSimulation();

  return (
    <div className="h-full flex flex-col p-6 font-mono text-gray-300 relative">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
        <div className="flex items-center space-x-3 text-attacker-text">
          <Terminal size={24} />
          <h2 className="text-xl font-bold tracking-widest uppercase">Shadow Control Panel</h2>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <span className="flex items-center">
            <Activity size={16} className="mr-2 text-red-500 animate-pulse" />
            Live Session
          </span>
          <span className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-400">
            Target: {currentPlatform}
          </span>
        </div>
      </div>

      <div className="flex-1 grid grid-rows-3 gap-6 min-h-0">
        {/* Top: Live Keystrokes & Interaction */}
        <div className="row-span-2 bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-hidden flex flex-col relative">
          <div className="absolute top-0 right-0 bg-attacker-text text-black text-[10px] font-bold px-2 py-1 rounded-bl uppercase flex items-center">
            <Eye size={12} className="mr-1" /> Intercepting
          </div>
          <h3 className="text-gray-500 text-xs font-bold mb-3 uppercase tracking-wider">Live Input Feed</h3>
          <LiveInputFeed />
        </div>

        {/* Bottom: Risk Analysis */}
        <div className="row-span-1 bg-gray-900 border border-gray-800 rounded-lg p-4 overflow-hidden flex flex-col">
          <h3 className="text-gray-500 text-xs font-bold mb-3 uppercase tracking-wider">Automated Risk Analysis</h3>
          <RiskAssessment />
        </div>
      </div>
    </div>
  );
};
