import React from 'react';

interface LightboxModalProps {
  image: { src: string; title: string } | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-950/80 text-zinc-200 hover:text-white flex items-center justify-center border border-zinc-700/60"
          aria-label="Close image preview"
        >
          ✕
        </button>

        <div className="relative aspect-16/10 max-h-[75vh] w-full bg-black">
          <img
            src={image.src}
            alt={image.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 bg-zinc-900 flex items-center justify-between border-t border-zinc-800">
          <h4 className="text-base font-bold text-zinc-100 uppercase tracking-tight">
            {image.title}
          </h4>
          <span className="text-xs text-lime-400 font-mono">The Gym Facility View</span>
        </div>
      </div>
    </div>
  );
};
