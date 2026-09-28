import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 border border-lime-400/40 text-zinc-100 shadow-xl shadow-black/50 animate-bounce-short">
      <span className="w-2 h-2 rounded-full bg-lime-400"></span>
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 text-zinc-400 hover:text-zinc-100 text-xs font-bold"
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
};
