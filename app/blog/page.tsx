import { BlogList } from '@/components/blog-list';

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <h1 className="text-4xl font-semibold">Blog</h1>
      <p className="text-slate-600 dark:text-slate-300">Dynamic insights engine with filtering, search, and architecture-level commentary.</p>
      <BlogList />
    </section>
  );
}
