import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { ArrowLeft } from 'lucide-react';

export const SimulationWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPlatform, resetSimulation } = useSimulation();

  return (
    <div className="relative w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
      {/* Educational Watermark */}
      <div className="absolute top-0 left-0 w-full bg-yellow-100 text-yellow-800 text-xs font-bold text-center py-1 uppercase tracking-widest z-50 opacity-90 pointer-events-none">
        Educational Simulation
      </div>

      {/* Fake Browser Header */}
      <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center space-x-2 pt-6">
        <button onClick={resetSimulation} className="p-1 hover:bg-gray-200 rounded text-gray-500">
          <ArrowLeft size={16} />
        </button>
        <div className="flex-1 bg-white border border-gray-300 rounded px-3 py-1 text-xs text-gray-600 flex items-center">
          <span className="text-gray-400 mr-1">https://</span>
          <span className={currentPlatform === 'finance' ? "text-green-600 font-semibold" : "text-gray-800"}>
            {currentPlatform === 'email' && 'accounts.g-mail-secure.com/login'}
            {currentPlatform === 'social' && 'm.instaconnect.net/auth'}
            {currentPlatform === 'finance' && 'secure.paysafe-wallet.co/verify'}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto relative">
        {children}
      </div>
    </div>
  );
};
