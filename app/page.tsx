import Image from 'next/image';
import Link from 'next/link';
import { HeroNetwork } from '@/components/hero-network';
import { projects, caseStudies, technologies } from '@/lib/site-data';
import { visualAssets } from '@/lib/visuals';

const sections = [
  'Strategic Identity Overview',
  'Core Engineering Capabilities Grid',
  'Technology Ecosystem Visualization',
  'Featured Case Study',
  'Architecture Snapshot',
  'Product Innovation Highlights',
  'Metrics & Achievements',
  'Testimonials Preview',
  'Thought Leadership Preview',
  'Open Source Impact',
  'Delivery Pipeline Snapshot',
  'Final Strategic CTA'
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <section className="grid gap-8 rounded-3xl glass p-8 lg:grid-cols-[1.4fr,1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.25em] text-electric">Full Stack Developer | Systems Architect | Product Engineer | Technical Strategist</p>
          <h1 className="text-5xl font-semibold leading-tight">Designing Scalable Digital Systems.</h1>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">Balanced, massive, and elite portfolio ecosystem engineered to demonstrate architecture maturity, systems depth, and founder-level technical strategy.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/architecture-overview" className="rounded-xl bg-electric px-5 py-3 text-sm font-semibold text-white">Explore Architecture</Link>
            <Link href="/projects" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold">View Projects</Link>
            <Link href="/hire-me" className="rounded-xl border border-violet px-5 py-3 text-sm font-semibold text-violet">Work With Me</Link>
          </div>
        </div>
        <div className="space-y-4">
          <HeroNetwork />
          <Image src="/images/coding-workspace.svg" alt="Dark multi-monitor coding workspace" width={900} height={520} className="h-[220px] w-full rounded-2xl object-cover" priority />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((s) => (
          <article key={s} className="rounded-2xl glass p-5">
            <h2 className="font-semibold">{s}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Deep content with restrained visuals and motion-driven hierarchy tailored for CTO/recruiter decision confidence.</p>
          </article>
        ))}
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {visualAssets.slice(0, 5).map((asset) => (
          <Image key={asset.src} src={asset.src} alt={asset.alt} width={600} height={360} className="h-40 w-full rounded-xl border border-slate-200 object-cover dark:border-slate-700" />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl glass p-6">
          <h3 className="text-2xl font-semibold">Featured Projects</h3>
          <div className="mt-4 space-y-3">
            {projects.slice(0, 4).map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="block rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{p.summary}</p>
              </Link>
            ))}
          </div>
        </article>
        <article className="rounded-2xl glass p-6">
          <h3 className="text-2xl font-semibold">Architecture Documentation Portal</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Folder structure diagram</li><li>State management explanation</li><li>API endpoints list</li><li>Middleware structure</li><li>Load balancing & caching</li><li>CI/CD and monitoring strategy</li>
          </ul>
          <h4 className="mt-4 text-lg font-semibold">Technology ecosystem</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {technologies.map((t) => <span key={t} className="rounded-full border border-electric/40 px-3 py-1 text-xs">{t}</span>)}
          </div>
          <h4 className="mt-4 text-lg font-semibold">Case studies</h4>
          {caseStudies.slice(0, 2).map((c) => <p key={c.slug} className="text-sm text-slate-600 dark:text-slate-300">{c.title}: {c.outcome}</p>)}
        </article>
      </section>
    </div>
  );
}
