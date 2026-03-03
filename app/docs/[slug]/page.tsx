import { notFound } from 'next/navigation';
import { docsPages } from '@/lib/content';
import { PageShell } from '@/components/page-shell';

export default function DocsDetailPage({ params }: { params: { slug: string } }) {
  const doc = docsPages.find((entry) => entry.slug === params.slug);
  if (!doc) return notFound();
  return <PageShell title={doc.title} description="Real engineering documentation with implementation detail and architecture traceability." />;
}

export function generateStaticParams() {
  return docsPages.map((doc) => ({ slug: doc.slug }));
}
