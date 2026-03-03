'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';

export function BlogList() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
  const filtered = useMemo(
    () =>
      blogPosts.filter((post) => {
        const matchCategory = filter === 'All' || post.category === filter;
        const matchQuery = `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase());
        return matchCategory && matchQuery;
      }),
    [filter, query]
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search insights..." className="rounded-xl border border-slate-300 bg-transparent px-4 py-2 text-sm" />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-xl border border-slate-300 bg-transparent px-4 py-2 text-sm">
          {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-electric">{post.category}</p>
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
