import React, { useState } from 'react';
import { SolarIcon } from './SolarIcon';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess(email);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl shadow-black/80">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 p-1"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 font-mono font-bold text-xl">
            <span className="text-lime-400">T</span>GB
          </div>
          <h3 className="text-2xl font-black text-zinc-50 uppercase tracking-tight">
            Athlete Portal Log In
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Access your training logs, class bookings, and facility keycard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">
              Registered Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="athlete@domain.com"
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-zinc-300">Password</label>
              <a href="#" className="text-[11px] text-lime-400 hover:underline">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-200 shadow-[0_0_15px_rgba(163,230,53,0.2)] cursor-pointer disabled:opacity-50"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In To Account'}</span>
            <SolarIcon icon="solar:arrow-right-linear" size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};
