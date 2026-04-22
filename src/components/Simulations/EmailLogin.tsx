import React, { useState } from 'react';
import { useSimulation } from '../../context/SimulationContext';

export const EmailLogin: React.FC = () => {
  const { logInteraction, updateLiveInput, setRevealActive } = useSimulation();
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      logInteraction('submit', 'Email Form');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(2);
      }, 800);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      logInteraction('submit', 'Password Form');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setRevealActive(true);
      }, 1200);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    if (field === 'email') setEmail(value);
    if (field === 'password') setPassword(value);
    
    updateLiveInput(field, value);
    logInteraction('keystroke', `${field} Input`, value);
  };

  return (
    <div className="p-8 flex flex-col items-center min-h-[400px]">
      <div className="text-2xl font-medium text-blue-600 mb-2">G-Mail Secure</div>
      <h2 className="text-xl font-normal text-gray-800 mb-8">Sign in</h2>
      
      {step === 1 ? (
        <form onSubmit={handleEmailNext} className="w-full space-y-6">
          <p className="text-sm text-gray-600">Use your G-Mail Secure Account</p>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e, 'email')}
              onFocus={() => logInteraction('focus', 'Email Input')}
              onBlur={() => logInteraction('blur', 'Email Input')}
              placeholder="Email or phone"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              required
            />
          </div>
          <div className="flex justify-between items-center pt-4">
            <button type="button" className="text-sm text-blue-600 font-medium hover:underline">
              Create account
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors disabled:opacity-70"
            >
              {loading ? '...' : 'Next'}
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="w-full space-y-6">
          <div className="flex items-center justify-center space-x-2 border border-gray-200 rounded-full px-4 py-1 mb-6 cursor-pointer hover:bg-gray-50" onClick={() => setStep(1)}>
            <div className="w-5 h-5 rounded-full bg-gray-300"></div>
            <span className="text-sm text-gray-700">{email}</span>
            <span className="text-xs text-blue-600">▾</span>
          </div>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange(e, 'password')}
              onFocus={() => logInteraction('focus', 'Password Input')}
              onBlur={() => logInteraction('blur', 'Password Input')}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              required
            />
          </div>
          <div className="flex justify-between items-center pt-4">
            <button type="button" className="text-sm text-blue-600 font-medium hover:underline">
              Forgot password?
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors disabled:opacity-70"
            >
              {loading ? '...' : 'Next'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
