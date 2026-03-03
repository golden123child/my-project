import { blogPosts, docsPages } from '@/lib/content';
import { caseStudies, projects, staticPages } from '@/lib/site-data';

export const searchRecords = [
  ...staticPages.map(([slug, title]) => ({
    id: `page-${slug}`,
    title,
    type: 'Page',
    href: `/${slug}`,
    summary: `Core platform section for ${title}.`
  })),
  ...projects.map((project) => ({
    id: `project-${project.slug}`,
    title: project.name,
    type: 'Project',
    href: `/projects/${project.slug}`,
    summary: project.summary
  })),
  ...caseStudies.map((study) => ({
    id: `case-${study.slug}`,
    title: study.title,
    type: 'Case Study',
    href: `/case-studies/${study.slug}`,
    summary: study.outcome
  })),
  ...blogPosts.map((post) => ({
    id: `blog-${post.slug}`,
    title: post.title,
    type: 'Blog',
    href: `/blog/${post.slug}`,
    summary: post.excerpt
  })),
  ...docsPages.map((doc) => ({
    id: `doc-${doc.slug}`,
    title: doc.title,
    type: 'Documentation',
    href: `/docs/${doc.slug}`,
    summary: `Architecture reference: ${doc.title}`
  }))
];
