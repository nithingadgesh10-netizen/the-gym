import React, { useState } from 'react';
import { SolarIcon } from './SolarIcon';

interface ProgramsProps {
  onSelectProgram: (name: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const [filter, setFilter] = useState<'all' | 'strength' | 'cardio' | 'functional'>('all');

  const programs = [
    {
      id: 'crossfit',
      isWide: true,
      title: 'CrossFit Performance',
      category: 'functional',
      categoryLabel: 'Functional Fitness',
      intensity: 'Maximum (9.8/10)',
      duration: '60 min',
      coach: 'David Chen',
      description:
        'A comprehensive high-output strength and conditioning regimen incorporating Olympic lifting, gymnastics, high-intensity intervals, and functional movement patterns designed to forge versatile physical readiness.',
      features: [
        'Competition standard barbells & plates',
        'Gymnastics rings & climbing ropes',
        'Daily varied programmed WODs',
        'Heart rate biometric monitoring',
      ],
    },
    {
      id: 'strength',
      isWide: false,
      title: 'Heavy Strength & Hypertrophy',
      category: 'strength',
      categoryLabel: 'Strength',
      intensity: 'High (8.5/10)',
      duration: '75 min',
      coach: 'Marcus Vance',
      description:
        'Progressive overload protocol focused on the big three powerlifts, calibrated dumbbell complexes, and targeted accessory hypertrophy work.',
      features: ['Power racks & calibrated plates', 'Customized 1RM progression cycle'],
    },
    {
      id: 'olympic',
      isWide: false,
      title: 'Olympic Weightlifting',
      category: 'strength',
      categoryLabel: 'Strength',
      intensity: 'Very High (9.0/10)',
      duration: '90 min',
      coach: 'Elena Rostova',
      description:
        'Precision technique and explosive triple extension for the Snatch, Clean & Jerk. Built on specialized wooden platforms with Eleiko competition gear.',
      features: ['Video kinematic bar path analysis', 'Individual technique clinics'],
    },
    {
      id: 'hiit',
      isWide: false,
      title: 'HIIT & Metabolic Conditioning',
      category: 'cardio',
      categoryLabel: 'Cardio & Engine',
      intensity: 'High (8.8/10)',
      duration: '45 min',
      coach: 'David Chen',
      description:
        'Fast-paced interval circuits utilizing curved manual treadmills, Concept2 rowers, SkiErgs, and assault bikes to elevate VO2 max and burn calories.',
      features: ['Heart rate zone optimization', 'High calorie post-burn'],
    },
    {
      id: 'mobility',
      isWide: false,
      title: 'Mobility & Active Recovery',
      category: 'functional',
      categoryLabel: 'Recovery & Health',
      intensity: 'Moderate (5.0/10)',
      duration: '50 min',
      coach: 'Sarah Jenkins',
      description:
        'Systematic joint decompression, myofascial release, dynamic stretch flows, and contrast therapy access to speed up muscular tissue repair.',
      features: ['Infrared sauna & cold plunge integration', 'Postural alignment screening'],
    },
  ];

  const filteredPrograms =
    filter === 'all'
      ? programs
      : programs.filter((p) => p.category === filter || (p.isWide && filter === 'functional'));

  return (
    <section id="programs" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
              <span className="w-2 h-0.5 bg-lime-400"></span>
              <span>Our Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-50 uppercase text-balance">
              Targeted Training Programs
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto">
            {(
              [
                { key: 'all', label: 'All Programs' },
                { key: 'strength', label: 'Strength & Iron' },
                { key: 'cardio', label: 'Endurance / HIIT' },
                { key: 'functional', label: 'CrossFit & Mobility' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab.key
                    ? 'bg-zinc-800 text-lime-400 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => {
            if (program.isWide) {
              return (
                /* 2-column wide card for "CrossFit Performance" with faint flame icon */
                <div
                  key={program.id}
                  className="group md:col-span-2 relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-8 sm:p-10 hover:border-lime-400/50 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Faint background icon (flame-linear) at 10% opacity, translated 25% to bottom-right */}
                  <div
                    className="absolute right-0 bottom-0 pointer-events-none opacity-10 translate-x-[25%] translate-y-[25%] text-lime-400 select-none"
                    aria-hidden="true"
                  >
                    <iconify-icon
                      icon="solar:flame-linear"
                      width="380"
                      height="380"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-lime-400 px-2.5 py-1 rounded-md bg-lime-400/10 border border-lime-400/20">
                          {program.categoryLabel}
                        </span>
                        <span className="text-xs text-zinc-400 font-mono">
                          Coach: {program.coach}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                        <span>Intensity: {program.intensity}</span>
                        <span>·</span>
                        <span>{program.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-zinc-50 tracking-tight uppercase mb-3">
                      {program.title}
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {program.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <span className="text-lime-400">
                            <SolarIcon icon="solar:check-circle-linear" size={16} />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                    <span className="text-xs text-zinc-400 font-medium">
                      Daily Sessions: 6:00 AM · 12:00 PM · 5:30 PM · 7:00 PM
                    </span>
                    <button
                      onClick={() => onSelectProgram(program.title)}
                      className="group/btn inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-all duration-200 shadow-[0_0_15px_rgba(163,230,53,0.2)] cursor-pointer"
                    >
                      <span>Join Program</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        <SolarIcon icon="solar:arrow-right-linear" size={14} />
                      </span>
                    </button>
                  </div>
                </div>
              );
            }

            return (
              /* Regular Program Card */
              <div
                key={program.id}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 sm:p-7 hover:border-lime-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-zinc-300 px-2.5 py-0.5 rounded-md bg-zinc-800/80 border border-zinc-700/60">
                      {program.categoryLabel}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">{program.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 tracking-tight uppercase mb-2">
                    {program.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {program.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <span className="text-lime-400">
                          <SolarIcon icon="solar:check-circle-linear" size={14} />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">Coach: {program.coach}</span>
                  <button
                    onClick={() => onSelectProgram(program.title)}
                    className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-lime-400 hover:text-lime-300 transition-colors cursor-pointer"
                  >
                    <span>Enroll</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      <SolarIcon icon="solar:arrow-right-linear" size={14} />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
