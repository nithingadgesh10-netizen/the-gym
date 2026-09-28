import React, { useState } from 'react';
import { SolarIcon } from './SolarIcon';

interface NavbarProps {
  onOpenJoin?: () => void;
  onOpenLogin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/60 transition-all">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo: Text-based "GB" with T in lime-400 */}
        <a
          href="#"
          className="flex items-center gap-2 group select-none outline-none focus-visible:ring-1 focus-visible:ring-lime-400 rounded-lg px-1 py-0.5"
          aria-label="The Gym Home"
        >
          <div className="flex items-center font-extrabold text-2xl tracking-tighter text-zinc-50 font-mono">
            <span className="text-lime-400">T</span>
            <span>GB</span>
          </div>
          <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-zinc-400 border-l border-zinc-800 pl-2 ml-1">
            The Gym
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Area: Click to Call for 8618490717 */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+918618490717"
            className="group relative inline-flex items-center gap-2.5 bg-lime-400 hover:bg-lime-300 text-zinc-950 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-[0_0_15px_rgba(163,230,53,0.25)] hover:shadow-[0_0_25px_rgba(163,230,53,0.4)] cursor-pointer"
          >
            <span className="shrink-0 text-zinc-950 transition-transform duration-300 group-hover:scale-110">
              <SolarIcon icon="solar:phone-calling-linear" size={18} />
            </span>
            <span className="font-mono tracking-tight">Call: +91 86184 90717</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+918618490717"
            className="inline-flex items-center gap-1.5 bg-lime-400 text-zinc-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(163,230,53,0.2)]"
          >
            <SolarIcon icon="solar:phone-calling-linear" size={14} />
            <span>Call</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-900 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <SolarIcon
              icon={mobileMenuOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'}
              size={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-lime-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
            <a
              href="tel:+918618490717"
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-bold bg-lime-400 text-zinc-950 rounded-xl shadow-[0_0_15px_rgba(163,230,53,0.2)]"
            >
              <SolarIcon icon="solar:phone-calling-linear" size={18} />
              <span>Call: +91 86184 90717</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
