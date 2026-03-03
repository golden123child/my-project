import { notFound } from 'next/navigation';
import { caseStudies } from '@/lib/site-data';
import { PageShell } from '@/components/page-shell';

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const item = caseStudies.find((study) => study.slug === params.slug);
  if (!item) return notFound();
  return <PageShell title={item.title} description={item.outcome} />;
}

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}
