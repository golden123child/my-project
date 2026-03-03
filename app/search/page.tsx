import { GlobalSearch } from '@/components/global-search';

export default function SearchPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <h1 className="text-4xl font-semibold">Global Search</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Unified search layer across portfolio pages, projects, case studies, documentation, and blog content.
      </p>
      <GlobalSearch />
    </section>
  );
}
