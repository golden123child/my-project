import type { MetadataRoute } from 'next';
import { projects, caseStudies, staticPages } from '@/lib/site-data';
import { blogPosts, docsPages } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://wuraola.systems';
  const routes = [
    '', 'projects', 'case-studies', 'blog', 'docs', 'search',
    ...staticPages.map(([slug]) => slug),
    ...projects.map((p) => `projects/${p.slug}`),
    ...caseStudies.map((c) => `case-studies/${c.slug}`),
    ...blogPosts.map((b) => `blog/${b.slug}`),
    ...docsPages.map((d) => `docs/${d.slug}`)
  ];

  return routes.map((route) => ({
    url: `${base}/${route}`.replace(/\/$/, ''),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8
  }));
}
