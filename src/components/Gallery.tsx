import React from 'react';
import { SolarIcon } from './SolarIcon';

interface GalleryProps {
  onSelectImage: (src: string, title: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const galleryItems = [
    {
      id: 1,
      title: 'Free Weights & Dumbbells Arena',
      subtitle: 'Calibrated Iron up to 150 lbs',
      image:
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Barbell Conditioning & Olympic Turf',
      subtitle: '8 Competition Lifting Platforms',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Functional Sprint & Rig Complex',
      subtitle: 'Rigging, Sleds, Wall Balls & Rings',
      image:
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'High-Output Cardio & MetCon Zone',
      subtitle: 'Concept2 Rowers, SkiErgs, Echo Bikes',
      image:
        'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section id="gallery" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
              <span className="w-2 h-0.5 bg-lime-400"></span>
              <span>The Arena</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-50 uppercase text-balance">
              Facility & Equipment Gallery
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-zinc-400 text-sm max-w-md">
            Step inside our 15,000 sq ft performance space engineered for pure training focus.
          </p>
        </div>

        {/* 4 Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item.image, item.title)}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900 cursor-pointer aspect-4/5 hover:border-lime-400/50 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Bottom text */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end">
                <span className="text-[11px] font-mono uppercase tracking-wider text-lime-400 mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-base font-bold text-zinc-50 uppercase tracking-tight leading-snug group-hover:text-lime-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Expand icon pill */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-950/70 backdrop-blur-sm border border-zinc-700/60 flex items-center justify-center text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <SolarIcon icon="solar:magnifer-linear" size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
