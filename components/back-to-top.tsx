'use client';

import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 right-5 z-40 rounded-full bg-electric p-3 text-white shadow-glow"
      aria-label="Back to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
