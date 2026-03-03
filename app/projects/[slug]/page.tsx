import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/site-data';

const blocks = [
  'Executive Summary', 'Business Context', 'Target Users', 'Technical Constraints',
  'Architecture Diagram', 'Database ER Diagram', 'API Structure', 'Authentication Strategy',
  'Scalability Decisions', 'Performance Benchmarks', 'DevOps & Deployment', 'Security Measures',
  'Lessons Learned', 'Future Roadmap'
];

const visualMap: Record<string, string> = {
  'Architecture Diagram': '/images/backend-infrastructure.svg',
  'Database ER Diagram': '/images/er-diagram.svg',
  'API Structure': '/images/api-flow.svg',
  'DevOps & Deployment': '/images/deployment-pipeline.svg'
};

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="mx-auto max-w-6xl space-y-6">
      <h1 className="text-4xl font-semibold">{project.name}</h1>
      <p className="text-slate-600 dark:text-slate-300">{project.summary}</p>
      <div className="grid gap-4 lg:grid-cols-2">
        <Image src="/images/whiteboard-planning.svg" alt="Whiteboard system planning" width={1000} height={600} className="h-64 w-full rounded-2xl object-cover" />
        <Image src="/images/data-analytics.svg" alt="Data analytics architecture" width={1000} height={600} className="h-64 w-full rounded-2xl object-cover" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {blocks.map((block) => (
          <article key={block} className="glass rounded-2xl p-5">
            <h2 className="font-semibold">{block}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Structured documentation for {block.toLowerCase()} with implementation decisions and measurable outcomes.</p>
            {visualMap[block] ? (
              <Image src={visualMap[block]} alt={`${block} visual`} width={900} height={520} className="mt-3 h-36 w-full rounded-xl object-cover" />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
