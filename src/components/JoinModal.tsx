import React, { useState } from 'react';
import { SolarIcon } from './SolarIcon';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
  onSuccess: (plan: string, name: string) => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  onSuccess,
}) => {
  const [plan, setPlan] = useState(selectedPlan || 'Pro Performance');
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (selectedPlan) {
      setPlan(selectedPlan);
    }
  }, [selectedPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(plan, name);
      onClose();
    }, 500);
  };

  const getPrice = () => {
    if (plan.includes('Essential')) return billing === 'monthly' ? '₹2,000/mo' : '₹1,600/mo';
    if (plan.includes('Elite')) return billing === 'monthly' ? '₹6,000/mo' : '₹4,800/mo';
    return billing === 'monthly' ? '₹4,000/mo' : '₹3,200/mo';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl shadow-black/80 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 p-1"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-lime-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
            <span>Join The Gym</span>
          </div>
          <h3 className="text-2xl font-black text-zinc-50 uppercase tracking-tight">
            Claim Your Membership
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Complete your athlete registration below to activate your facility pass.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Selected Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Essential', val: 'Essential Iron' },
                { label: 'Pro', val: 'Pro Performance' },
                { label: 'Elite', val: 'Elite Mastery' },
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setPlan(item.val)}
                  className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                    plan === item.val
                      ? 'bg-zinc-800 border-lime-400 text-lime-400'
                      : 'border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <div>
              <span className="text-xs text-zinc-400 block">Billing Cadence</span>
              <span className="text-sm font-bold text-zinc-100">{getPrice()}</span>
            </div>
            <div className="flex rounded-lg bg-zinc-900 p-0.5 border border-zinc-800">
              <button
                type="button"
                onClick={() => setBilling('monthly')}
                className={`px-3 py-1 text-xs rounded-md ${
                  billing === 'monthly' ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling('yearly')}
                className={`px-3 py-1 text-xs rounded-md ${
                  billing === 'yearly' ? 'bg-lime-400 text-zinc-950 font-bold' : 'text-zinc-500'
                }`}
              >
                Annual (-20%)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Walker"
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@domain.com"
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 000-1122"
              className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-200 shadow-[0_0_15px_rgba(163,230,53,0.2)] cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Confirming...' : 'Complete Registration'}</span>
              <SolarIcon icon="solar:arrow-right-linear" size={16} />
            </button>
          </div>

          <p className="text-[11px] text-zinc-500 text-center">
            7-day risk-free money back guarantee. Cancel anytime without penalty.
          </p>
        </form>
      </div>
    </div>
  );
};
