import React from 'react';
import { SolarIcon } from './SolarIcon';

interface FooterProps {
  onOpenJoin: () => void;
  onSubscribe: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoin, onSubscribe }) => {
  const [email, setEmail] = React.useState('');

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <footer className="mt-auto pt-16 pb-12 border-t border-zinc-900 bg-zinc-950 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 group select-none">
              <div className="flex items-center font-extrabold text-2xl tracking-tighter text-zinc-50 font-mono">
                <span className="text-lime-400">T</span>
                <span>GB</span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 border-l border-zinc-800 pl-2 ml-1">
                The Gym | Transform Your Body
              </span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              A high-performance training ground dedicated to progressive overload, master coaching,
              and relentless physical transformation.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenJoin}
                type="button"
                className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-zinc-950 text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(163,230,53,0.2)] cursor-pointer"
              >
                <span>Join Today</span>
                <SolarIcon icon="solar:arrow-right-linear" size={14} />
              </button>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-zinc-100 font-bold uppercase tracking-wider text-xs mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#programs" className="hover:text-lime-400 transition-colors">
                  CrossFit Performance
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-lime-400 transition-colors">
                  Heavy Hypertrophy
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-lime-400 transition-colors">
                  Olympic Weightlifting
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-lime-400 transition-colors">
                  HIIT Conditioning
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-lime-400 transition-colors">
                  Mobility & Recovery
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-zinc-100 font-bold uppercase tracking-wider text-xs mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-lime-400 transition-colors">
                  About Facility
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-lime-400 transition-colors">
                  Membership Tiers
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-lime-400 transition-colors">
                  Coaching Roster
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-lime-400 transition-colors">
                  Arena Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-lime-400 transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-zinc-100 font-bold uppercase tracking-wider text-xs mb-4">
              Training Dispatch
            </h4>
            <p className="text-zinc-400 text-xs mb-3">
              Weekly lifting programming notes and nutrition science.
            </p>
            <form onSubmit={handleSub} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="athlete@domain.com"
                className="w-full bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
              />
              <button
                type="submit"
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold py-2 rounded-xl text-xs transition-colors cursor-pointer border border-zinc-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <p>© {new Date().getFullYear()} The Gym Performance Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Gym Rules & Etiquette
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
