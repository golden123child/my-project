import Link from 'next/link';
import { projects } from '@/lib/site-data';

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <p className="text-slate-600 dark:text-slate-300">12+ production-oriented builds with architecture-centered delivery narratives.</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="glass rounded-2xl p-5">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
            <p className="mt-3 text-xs text-electric">{project.stack.join(' • ')}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
