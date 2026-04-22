import React from 'react';
import { Mail, Camera, CreditCard, ShieldAlert } from 'lucide-react';
import { useSimulation, type PlatformType } from '../context/SimulationContext';

const platforms: { id: PlatformType; name: string; icon: React.ReactNode; color: string }[] = [
  { id: 'email', name: 'G-Mail Secure', icon: <Mail size={32} />, color: 'bg-red-500' },
  { id: 'social', name: 'InstaConnect', icon: <Camera size={32} />, color: 'bg-pink-500' },
  { id: 'finance', name: 'PaySafe Wallet', icon: <CreditCard size={32} />, color: 'bg-blue-600' },
];

export const SimulationSelector: React.FC = () => {
  const { setCurrentPlatform, resetSimulation } = useSimulation();

  const handleSelect = (id: PlatformType) => {
    resetSimulation();
    setCurrentPlatform(id);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
      <div className="text-center space-y-4 max-w-2xl">
        <ShieldAlert size={64} className="mx-auto text-yellow-500" />
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Phishing Mirror Lab</h1>
        <p className="text-lg text-gray-600">
          Select a platform to experience a simulated phishing attack. 
          Observe how your interactions and keystrokes can be captured in real-time by an attacker.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => handleSelect(platform.id)}
            className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className={`${platform.color} text-white p-4 rounded-full mb-4 group-hover:scale-110 transition-transform`}>
              {platform.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{platform.name}</h3>
            <span className="text-sm text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Launch Simulation &rarr;
            </span>
          </button>
        ))}
      </div>
      
      <div className="mt-12 text-sm text-gray-400 max-w-md text-center">
        Disclaimer: This is an educational tool. No real data is collected, stored, or transmitted. Do not enter real passwords.
      </div>
    </div>
  );
};
