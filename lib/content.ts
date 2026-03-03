export const blogPosts = Array.from({ length: 10 }).map((_, i) => ({
  slug: `architecting-at-scale-${i + 1}`,
  title: `Architecting at Scale ${i + 1}`,
  category: i % 2 === 0 ? 'Architecture' : 'Product Engineering',
  excerpt: 'In-depth tactical notes on systems design, operational resilience, and business alignment.'
}));

export const docsPages = [
  { slug: 'folder-structure', title: 'Folder Structure Diagram' },
  { slug: 'state-management', title: 'State Management Strategy' },
  { slug: 'api-endpoints', title: 'API Endpoints Registry' },
  { slug: 'middleware', title: 'Middleware Architecture' },
  { slug: 'security', title: 'Security Practices' },
  { slug: 'caching', title: 'Caching Layer and Load Balance' },
  { slug: 'cicd', title: 'CI/CD Visualization' },
  { slug: 'monitoring', title: 'Monitoring and Error Handling' }
];
