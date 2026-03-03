import Image from 'next/image';
import { technologies } from '@/lib/site-data';
import { techIconMap } from '@/lib/tech-icons';
import { visualAssets } from '@/lib/visuals';
import { defaultProfile, pageProfiles } from '@/lib/page-profiles';

export function PageShell({ title, description }: { title: string; description: string }) {
  const profile = pageProfiles[title] ?? defaultProfile;

  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <header className="rounded-2xl glass p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-electric">Wuraola Folajimi Platform</p>
        <h1 className="mt-2 text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-4xl text-slate-600 dark:text-slate-300">{description}</p>
        <p className="mt-2 text-sm text-violet">{profile.tagline}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {profile.outcomes.map((metric) => (
          <article key={metric} className="glass rounded-2xl p-5">
            <p className="text-2xl font-semibold text-electric">{metric.split(' ')[0]}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{metric}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {profile.sections.map((section) => (
          <article key={section} className="glass rounded-2xl p-5">
            <h2 className="text-lg font-semibold">{section}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Structured engineering narrative on {section.toLowerCase()} with practical context and production-grade framing.
            </p>
          </article>
        ))}
      </div>

      <article className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold">Visual Architecture References</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {visualAssets.slice(0, 6).map((asset) => (
            <figure key={asset.src} className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              <Image src={asset.src} alt={asset.alt} width={800} height={450} className="h-40 w-full object-cover" />
              <figcaption className="px-3 py-2 text-xs text-slate-600 dark:text-slate-300">{asset.alt}</figcaption>
            </figure>
          ))}
        </div>
      </article>

      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-semibold">Technology Usage Context</h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech) => {
            const Icon = techIconMap[tech];
            return (
              <span key={tech} className="inline-flex items-center gap-2 rounded-xl border border-electric/40 px-3 py-2 text-xs">
                {Icon ? <Icon size={14} /> : null}
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
