'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setWidth(scrolled || 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="fixed left-0 top-0 z-[60] h-1 bg-electric transition-all" style={{ width: `${width}%` }} />;
}
