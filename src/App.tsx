import React from 'react';
import { SimulationProvider, useSimulation } from './context/SimulationContext';
import { SimulationSelector } from './components/SimulationSelector';
import { AttackerDashboard } from './components/Dashboard/AttackerDashboard';
import { SimulationWrapper } from './components/Simulations/SimulationWrapper';
import { EmailLogin } from './components/Simulations/EmailLogin';
import { SocialLogin } from './components/Simulations/SocialLogin';
import { FinanceLogin } from './components/Simulations/FinanceLogin';
import { SecurityBreakdownOverlay } from './components/Reveal/SecurityBreakdownOverlay';

const MainLayout: React.FC = () => {
  const { currentPlatform, isRevealActive } = useSimulation();

  if (currentPlatform === 'none') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <SimulationSelector />
      </div>
    );
  }

  const renderSimulation = () => {
    switch (currentPlatform) {
      case 'email': return <EmailLogin />;
      case 'social': return <SocialLogin />;
      case 'finance': return <FinanceLogin />;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100">
      {/* Victim View (Left/Top) */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center relative shadow-2xl z-10 overflow-y-auto">
        <div className="w-full max-w-md p-4">
          <SimulationWrapper>
            {renderSimulation()}
          </SimulationWrapper>
        </div>
        {isRevealActive && <SecurityBreakdownOverlay />}
      </div>

      {/* Attacker View (Right/Bottom) */}
      <div className="hidden lg:flex lg:flex-1 lg:w-1/2 bg-attacker-bg flex-col h-full overflow-hidden border-l border-gray-800">
        <AttackerDashboard />
      </div>
      
      {/* Mobile Attacker Dashboard toggle could be added here if needed */}
    </div>
  );
};

function App() {
  return (
    <SimulationProvider>
      <MainLayout />
    </SimulationProvider>
  );
}

export default App;
