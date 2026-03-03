'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { searchRecords } from '@/lib/search-data';

export function GlobalSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return searchRecords.slice(0, 12);
    return searchRecords.filter((record) =>
      `${record.title} ${record.type} ${record.summary}`.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="space-y-4">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search projects, docs, pages, and insights..."
        className="w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm"
      />
      <div className="grid gap-3 md:grid-cols-2">
        {results.map((result) => (
          <Link key={result.id} href={result.href} className="glass rounded-2xl p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-electric">{result.type}</p>
            <h2 className="mt-2 font-semibold">{result.title}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{result.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
