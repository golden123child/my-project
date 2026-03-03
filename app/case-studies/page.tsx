import Link from 'next/link';
import { caseStudies } from '@/lib/site-data';

export default function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <h1 className="text-4xl font-semibold">Case Studies</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {caseStudies.map((item) => (
          <Link key={item.slug} href={`/case-studies/${item.slug}`} className="glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{item.outcome}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
