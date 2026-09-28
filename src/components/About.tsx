import React from 'react';
import { SolarIcon } from './SolarIcon';

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large section wrapper with rounded-3xl corners */}
        <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-10 lg:p-14 relative overflow-hidden backdrop-blur-sm">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text + Icon boxes */}
            <div className="flex flex-col">
              {/* Category / Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
                <span className="w-2 h-0.5 bg-lime-400"></span>
                <span>About The Gym</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-50 uppercase text-balance leading-tight mb-6">
                Engineered For Pure Performance & Unrelenting Progress
              </h2>

              {/* Paragraphs */}
              <p className="text-zinc-300 text-base leading-relaxed mb-4">
                At The Gym, we discard gimmicks and prioritize what actually builds strength,
                stamina, and mental resilience. Our facility is designed from the rubber flooring up
                to provide serious athletes and dedicated novices an uncompromising training
                environment.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                From Olympic platforms and custom-calibrated dumbbells to state-of-the-art metabolic
                conditioning equipment, every square foot is curated for high-efficiency workouts.
              </p>

              {/* Icon Feature Boxes: bolt-linear and shield-check-linear */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Box 1: bolt-linear */}
                <div className="group rounded-2xl bg-zinc-900/80 border border-zinc-800/90 p-5 hover:border-lime-400/50 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-lime-400 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <SolarIcon icon="solar:bolt-linear" size={24} />
                  </div>
                  <h3 className="text-base font-bold text-zinc-100 tracking-tight mb-1.5">
                    Uncompromising Intensity
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Designed for focused power output, metabolic conditioning, and measurable athletic
                    breakthroughs.
                  </p>
                </div>

                {/* Box 2: shield-check-linear */}
                <div className="group rounded-2xl bg-zinc-900/80 border border-zinc-800/90 p-5 hover:border-lime-400/50 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-lime-400 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <SolarIcon icon="solar:shield-check-linear" size={24} />
                  </div>
                  <h3 className="text-base font-bold text-zinc-100 tracking-tight mb-1.5">
                    Certified Master Coaches
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Our training staff holds premier strength certifications (CSCS, USAW, NASM) with proven track records.
                  </p>
                </div>
              </div>

              {/* Explore Facility CTA */}
              <div className="flex items-center gap-4">
                <a
                  href="#programs"
                  onClick={onLearnMore}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-lime-400 hover:text-lime-300 transition-colors"
                >
                  <span>Discover Our Training Disciplines</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <SolarIcon icon="solar:arrow-right-linear" size={16} />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Image with scale-105 hover and rounded-3xl container */}
            <div className="group relative rounded-3xl overflow-hidden border border-zinc-800/80 aspect-4/3 sm:aspect-16/11 shadow-2xl shadow-black/80">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                alt="Athlete training in The Gym weight facility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Stat / Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-lime-400">
                    Elite Standards
                  </p>
                  <p className="text-sm font-semibold text-zinc-200">
                    Eleiko, Rogue, Hammer Strength
                  </p>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-zinc-400">Purity</span>
                  <p className="text-sm font-bold text-zinc-100">100% Iron</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
