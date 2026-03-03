import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/content';
import { PageShell } from '@/components/page-shell';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);
  if (!post) return notFound();

  return <PageShell title={post.title} description={post.excerpt} />;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
