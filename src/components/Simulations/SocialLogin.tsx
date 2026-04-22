import React, { useState } from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { Camera, Users } from 'lucide-react';

export const SocialLogin: React.FC = () => {
  const { logInteraction, updateLiveInput, setRevealActive } = useSimulation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      logInteraction('submit', 'Login Form');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setRevealActive(true);
      }, 1500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    if (field === 'username') setUsername(value);
    if (field === 'password') setPassword(value);
    
    updateLiveInput(field, value);
    logInteraction('keystroke', `${field} Input`, value);
  };

  const isFormValid = username.length > 0 && password.length > 5;

  return (
    <div className="p-8 flex flex-col items-center min-h-[500px] bg-white">
      <div className="mt-8 mb-10 flex flex-col items-center">
        <Camera size={48} className="text-pink-600 mb-2" />
        <h1 className="text-3xl font-serif italic text-gray-900">InstaConnect</h1>
      </div>
      
      <form onSubmit={handleLogin} className="w-full space-y-3">
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={(e) => handleInputChange(e, 'username')}
            onFocus={() => logInteraction('focus', 'Username Input')}
            onBlur={() => logInteraction('blur', 'Username Input')}
            placeholder="Phone number, username, or email"
            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-400"
            required
          />
        </div>
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => handleInputChange(e, 'password')}
            onFocus={() => logInteraction('focus', 'Password Input')}
            onBlur={() => logInteraction('blur', 'Password Input')}
            placeholder="Password"
            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-400"
            required
          />
        </div>
        
        <button 
          type="submit" 
          disabled={!isFormValid || loading}
          className={`w-full py-1.5 mt-2 rounded text-white font-semibold text-sm transition-colors ${
            isFormValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300'
          }`}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>

      <div className="flex items-center w-full my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-4 text-sm text-gray-500 font-semibold">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <button 
        type="button"
        onClick={() => logInteraction('click', 'Facebook Login Button')}
        className="flex items-center justify-center text-blue-900 font-semibold text-sm mb-4"
      >
        <Users size={18} className="mr-2" />
        Log in with Facebook
      </button>

      <button 
        type="button"
        onClick={() => logInteraction('click', 'Forgot Password')}
        className="text-xs text-blue-900"
      >
        Forgot password?
      </button>

      <div className="mt-auto pt-8 border-t border-gray-300 w-full text-center">
        <p className="text-sm text-gray-600">
          Don't have an account? <span className="text-blue-500 font-semibold cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};
