import React, { useState } from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { ShieldCheck, CreditCard } from 'lucide-react';

export const FinanceLogin: React.FC = () => {
  const { logInteraction, updateLiveInput, setRevealActive } = useSimulation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      logInteraction('submit', 'Login Form');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setRevealActive(true);
      }, 2000); // Slightly longer delay to simulate "secure" login
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
    <div className="flex flex-col min-h-[500px] bg-slate-50">
      <div className="bg-blue-900 text-white p-6 pb-10 flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-4">
          <CreditCard size={28} className="text-blue-300" />
          <h1 className="text-2xl font-bold tracking-wide">PaySafe</h1>
        </div>
        <p className="text-blue-200 text-sm">Secure Your Financial Future</p>
      </div>
      
      <div className="flex-1 px-6 -mt-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Log in to your account</h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e, 'email')}
                onFocus={() => logInteraction('focus', 'Email Input')}
                onBlur={() => logInteraction('blur', 'Email Input')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e, 'password')}
                onFocus={() => logInteraction('focus', 'Password Input')}
                onBlur={() => logInteraction('blur', 'Password Input')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none transition-all"
                required
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-900 rounded border-gray-300" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm font-medium text-blue-900 hover:underline">
                Forgot password?
              </button>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-900 text-white py-3 px-4 rounded-md font-bold text-lg hover:bg-blue-800 transition-colors mt-6 flex justify-center items-center disabled:opacity-80"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Log In'
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 flex items-center justify-center text-sm text-green-700">
          <ShieldCheck size={18} className="mr-1" />
          <span>256-bit Secure Encrypted Connection</span>
        </div>
      </div>
    </div>
  );
};
