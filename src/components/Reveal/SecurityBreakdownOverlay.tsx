import React from 'react';
import { motion } from 'framer-motion';
import { useSimulation } from '../../context/SimulationContext';
import { ShieldAlert, AlertOctagon, Info, ArrowRight, XCircle } from 'lucide-react';

export const SecurityBreakdownOverlay: React.FC = () => {
  const { currentPlatform, resetSimulation } = useSimulation();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 z-50 bg-gray-900/95 flex flex-col items-center justify-center p-6 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-red-600 p-6 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 flex items-center justify-center">
            <ShieldAlert size={120} />
          </div>
          <AlertOctagon size={48} className="mx-auto mb-3 relative z-10" />
          <h2 className="text-2xl font-bold relative z-10">Simulation Complete</h2>
          <p className="text-red-100 mt-1 relative z-10 font-medium">This was a simulated phishing attack.</p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            You just gave away your <span className="capitalize">{currentPlatform}</span> credentials.
          </h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="flex items-center text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                <XCircle size={16} className="text-red-500 mr-2" />
                Red Flags You Missed
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="font-bold text-red-500 mr-2">•</span>
                  <span><strong>Suspicious URL:</strong> The web address was not the official domain (e.g., <em>secure.paysafe-wallet.co</em> instead of <em>paypal.com</em>). Always verify the URL.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-red-500 mr-2">•</span>
                  <span><strong>Design Inconsistencies:</strong> The branding, colors, and layout were slightly off compared to the real application.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-red-500 mr-2">•</span>
                  <span><strong>Urgency/Fear:</strong> Phishing often uses warnings (like "Secure Your Financial Future") to rush you into acting without thinking.</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h4 className="flex items-center text-sm font-bold text-blue-800 mb-2 uppercase tracking-wider">
                <Info size={16} className="mr-2" />
                The Attacker Perspective
              </h4>
              <p className="text-sm text-blue-900 leading-relaxed">
                As you typed, your data was instantly captured by the "Shadow Control Panel" on the right. 
                Attackers don't need you to hit "Submit" — they can log your keystrokes in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button 
            onClick={resetSimulation}
            className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors w-full justify-center"
          >
            End Simulation <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
