import React from 'react';
import { SolarIcon } from './SolarIcon';

interface TrainersProps {
  onBookTrainer: (name: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onBookTrainer }) => {
  const trainers = [
    {
      id: 1,
      name: 'Marcus Vance',
      role: 'Head Strength & Conditioning',
      credentials: 'CSCS · USAPL Senior Coach',
      experience: '12 Years Exp.',
      image:
        'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1887&auto=format&fit=crop',
      // Standard object positioning
      objectPosition: 'object-center',
      socials: {
        instagram: '@marcus.strength',
        twitter: '@m_vance_coach',
      },
    },
    {
      id: 2,
      name: 'Elena Rostova',
      role: 'Olympic Weightlifting Lead',
      credentials: 'USAW Level 3 · Master Coach',
      experience: '9 Years Exp.',
      image:
        'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop',
      // Standard object positioning
      objectPosition: 'object-center',
      socials: {
        instagram: '@elena.lifts',
        twitter: '@rostova_olympic',
      },
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'CrossFit & Engine Specialist',
      credentials: 'CF-L3 · Aerobic Capacity Cert',
      experience: '8 Years Exp.',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
      // Source Quirk: Inconsistent object-top positioning specifically on Trainer 3
      objectPosition: 'object-top',
      socials: {
        instagram: '@davidchen.fit',
        twitter: '@chen_metcon',
      },
    },
    {
      id: 4,
      name: 'Sarah Jenkins',
      role: 'Mobility & Hypertrophy Coach',
      credentials: 'NASM-CPT · FMS Level 2',
      experience: '7 Years Exp.',
      image:
        'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1887&auto=format&fit=crop',
      // Standard object positioning
      objectPosition: 'object-center',
      socials: {
        instagram: '@jenkins_mobility',
        twitter: '@sarahj_fit',
      },
    },
  ];

  return (
    <section id="trainers" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
              <span className="w-2 h-0.5 bg-lime-400"></span>
              <span>Coaching Faculty</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-50 uppercase text-balance">
              Master Level Trainers
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-zinc-400 text-sm max-w-md">
            World-class instruction, biomechanical precision, and personalized intensity to push your
            limits safely.
          </p>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden hover:border-lime-400/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Frame with Grayscale-to-color filter transition & inconsistent object-top on Trainer 3 */}
              <div className="relative aspect-4/5 w-full overflow-hidden bg-zinc-950">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover ${trainer.objectPosition} grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out`}
                />
                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

                {/* Social links slide up from bottom on hover */}
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800/80 flex items-center justify-between z-20">
                  <span className="text-xs font-mono text-lime-400">{trainer.experience}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-300 hover:text-lime-400 font-mono transition-colors">
                      {trainer.socials.instagram}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold text-zinc-100 uppercase tracking-tight group-hover:text-lime-400 transition-colors">
                      {trainer.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-lime-400 mb-1">{trainer.role}</p>
                  <p className="text-xs text-zinc-400 font-mono">{trainer.credentials}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onBookTrainer(trainer.name)}
                    className="w-full text-center py-2 text-xs font-semibold text-zinc-200 bg-zinc-800/80 hover:bg-lime-400 hover:text-zinc-950 rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
