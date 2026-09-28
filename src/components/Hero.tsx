import React from 'react';

interface HeroProps {
  onOpenJoin?: () => void;
  onExplorePrograms?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image: z-0, opacity-40 */}
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        alt="The Gym Weight Room and Barbells"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-40 select-none pointer-events-none"
      />

      {/* Multi-layer Dual-Directional Gradient Overlays */}
      {/* 1. Bottom-to-top gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent pointer-events-none" />
      {/* 2. Left-to-right gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />
      {/* 3. Top subtle vignette for header transition */}
      <div className="absolute inset-x-0 top-0 h-36 z-0 bg-gradient-to-b from-zinc-950/90 to-transparent pointer-events-none" />

      {/* Content: z-10 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        {/* Pulsate dot badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold text-zinc-200 mb-8 backdrop-blur-md shadow-lg shadow-black/40">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400" />
          </span>
          <span className="tracking-wide">New Facility Open</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-zinc-50 uppercase max-w-5xl leading-[1.05] sm:leading-[1.02] text-balance mb-6">
          Transform Your{' '}
          <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
            Body
          </span>
          . Elevate Your Limits.
        </h1>

        {/* Subhead / Lead */}
        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl text-balance font-normal leading-relaxed mb-6">
          State-of-the-art iron, master-certified coaches, and high-intensity science-backed
          training built for those who refuse to settle.
        </p>

        {/* Quick Highlights / Stats strip */}
        <div className="mt-16 pt-10 border-t border-zinc-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 w-full max-w-4xl text-left">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-zinc-50 tracking-tight font-mono tabular-nums">
              15,000<span className="text-lime-400">+</span>
            </span>
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Sq Ft Floor Space
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-zinc-50 tracking-tight font-mono tabular-nums">
              45<span className="text-lime-400">+</span>
            </span>
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Elite Certified Coaches
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-zinc-50 tracking-tight font-mono tabular-nums">
              24/7
            </span>
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Member Keycard Access
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-zinc-50 tracking-tight font-mono tabular-nums">
              99.4<span className="text-lime-400">%</span>
            </span>
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium mt-1">
              Goal Achievement Rate
            </span>
          </div>
        </div>
      </div>

      {/* WhatsApp Button: Placed on the right and down side of the hero page */}
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-20">
        <a
          href="https://wa.me/918618490717?text=Hi%2C%20I%20am%20interested%20in%20The%20Gym%20membership%20and%20personal%20training!"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_4px_35px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-105 border border-white/20 backdrop-blur-sm cursor-pointer"
          aria-label="Chat on WhatsApp with The Gym at 8618490717"
        >
          <div className="relative flex items-center justify-center">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.484-8.418z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </section>
  );
};
