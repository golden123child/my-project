import Link from 'next/link';
import { docsPages } from '@/lib/content';

export default function DocsPortalPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6">
      <h1 className="text-4xl font-semibold">Architecture Documentation Portal</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {docsPages.map((doc) => (
          <Link key={doc.slug} href={`/docs/${doc.slug}`} className="glass rounded-2xl p-5">
            <h2 className="font-semibold">{doc.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
