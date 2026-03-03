import { technologies, projects } from '@/lib/site-data';
import { techIconMap } from '@/lib/tech-icons';

const pillars = [
  {
    title: 'Frontend Systems',
    tools: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    summary: 'Design-system aligned interfaces with structured motion and predictable composition patterns.'
  },
  {
    title: 'Backend Services',
    tools: ['Node.js', 'Express.js', 'REST API', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    summary: 'Reliable service boundaries, query contracts, data modeling, and authentication flow design.'
  },
  {
    title: 'Delivery Infrastructure',
    tools: ['Docker', 'CI/CD', 'Cloud Deployment', 'Git/GitHub'],
    summary: 'Containerized release process, deployment automation, and environment consistency.'
  }
];

export default function TechStackPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold">Tech Stack</h1>
        <p className="max-w-4xl text-slate-600 dark:text-slate-300">
          Practical technology ecosystem showing real implementation context and project linkage.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {technologies.map((tech) => {
          const Icon = techIconMap[tech];
          return (
            <article key={tech} className="glass rounded-2xl p-4">
              <div className="inline-flex items-center gap-2">
                {Icon ? <Icon size={16} className="text-electric" /> : null}
                <h2 className="font-semibold">{tech}</h2>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Used across architecture modules, documented in delivery workflows and system decision records.
              </p>
            </article>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="glass rounded-2xl p-5">
            <h3 className="text-xl font-semibold">{pillar.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{pillar.summary}</p>
            <p className="mt-3 text-xs text-electric">{pillar.tools.join(' • ')}</p>
          </article>
        ))}
      </div>

      <article className="glass rounded-2xl p-5">
        <h3 className="text-xl font-semibold">Project Linkage</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Every major technology appears in delivery contexts and can be traced to project execution records.
        </p>
        <ul className="mt-3 grid gap-2 md:grid-cols-2">
          {projects.slice(0, 8).map((project) => (
            <li key={project.slug} className="rounded-lg border border-slate-200 p-3 text-sm dark:border-slate-700">
              <span className="font-semibold">{project.name}</span> — {project.stack.join(', ')}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
