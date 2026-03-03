'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { navGroups } from '@/lib/site-data';
import { useTheme } from '@/context/theme-provider';
import { useState } from 'react';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto mt-3 w-[97%] rounded-2xl glass px-4 py-3 shadow-lg">
      <nav className="flex items-center justify-between gap-4">
        <Link href="/" className="text-sm font-bold tracking-[0.15em] text-electric">
          WURAOLA // SYSTEMS
        </Link>
        <div className="hidden items-center gap-4 xl:flex">
          {navGroups.map((group) => (
            <div className="group relative" key={group.label}>
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 transition dark:text-slate-200">
                {group.label} <ChevronDown size={14} />
              </button>
              <motion.div className="invisible absolute left-0 top-7 w-56 rounded-xl glass p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {group.items.map(([label, href]) => (
                  <Link key={href} href={href} className="block rounded-md px-3 py-2 text-sm hover:bg-electric/15 hover:text-electric">
                    {label}
                  </Link>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full border border-slate-300 p-2 dark:border-slate-600">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((state) => !state)}
            aria-label="Toggle menu"
            className="rounded-full border border-slate-300 p-2 dark:border-slate-600 xl:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="mt-3 grid max-h-[65vh] gap-3 overflow-auto rounded-xl border border-slate-200/80 p-3 xl:hidden dark:border-slate-700">
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-1 text-xs uppercase tracking-[0.2em] text-electric">{group.label}</p>
              <div className="grid gap-1">
                {group.items.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-2 py-1 text-sm hover:bg-electric/15">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
