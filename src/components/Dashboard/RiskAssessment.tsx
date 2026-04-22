import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { AlertTriangle, Database, FileText, Key } from 'lucide-react';

export const RiskAssessment: React.FC = () => {
  const { currentPlatform, liveInput } = useSimulation();

  const hasInput = Object.keys(liveInput).length > 0;

  const getRiskData = () => {
    switch (currentPlatform) {
      case 'email':
        return {
          level: 'CRITICAL',
          color: 'text-red-500',
          bg: 'bg-red-500/10',
          border: 'border-red-500/30',
          impacts: [
            { icon: <Database size={14} />, text: 'Access to password resets for linked accounts (banking, social)' },
            { icon: <FileText size={14} />, text: 'Exposure of personal and corporate documents in Drive' },
            { icon: <Key size={14} />, text: 'Ability to bypass 2FA via email verification' }
          ]
        };
      case 'finance':
        return {
          level: 'SEVERE',
          color: 'text-orange-500',
          bg: 'bg-orange-500/10',
          border: 'border-orange-500/30',
          impacts: [
            { icon: <Database size={14} />, text: 'Direct financial theft and unauthorized transfers' },
            { icon: <FileText size={14} />, text: 'Exposure of linked bank account and credit card details' },
            { icon: <Key size={14} />, text: 'Identity theft using stored personal information' }
          ]
        };
      case 'social':
        return {
          level: 'HIGH',
          color: 'text-yellow-500',
          bg: 'bg-yellow-500/10',
          border: 'border-yellow-500/30',
          impacts: [
            { icon: <Database size={14} />, text: 'Social engineering attacks on friends/family' },
            { icon: <FileText size={14} />, text: 'Extortion using private messages and photos' },
            { icon: <Key size={14} />, text: 'Brand damage and reputation destruction' }
          ]
        };
      default:
        return null;
    }
  };

  const data = getRiskData();

  if (!data) return null;

  return (
    <div className={`flex-1 rounded border ${data.border} ${data.bg} p-4 flex flex-col`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className={data.color} size={20} />
          <span className="font-bold text-sm text-gray-300">POTENTIAL COMPROMISE</span>
        </div>
        <div className={`text-xs font-bold px-2 py-1 rounded border ${data.border} ${data.color}`}>
          {hasInput ? data.level : 'MONITORING...'}
        </div>
      </div>

      <div className="flex-1">
        <p className="text-xs text-gray-400 mb-3">
          If credentials for <span className="font-bold text-white capitalize">{currentPlatform}</span> are captured, attackers gain:
        </p>
        <ul className="space-y-3">
          {data.impacts.map((impact, idx) => (
            <li key={idx} className={`flex items-start text-xs ${hasInput ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-500`}>
              <span className={`mr-2 mt-0.5 ${hasInput ? data.color : 'text-gray-700'}`}>
                {impact.icon}
              </span>
              <span>{impact.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {!hasInput && (
        <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest text-center animate-pulse">
          Awaiting target interaction...
        </div>
      )}
    </div>
  );
};
