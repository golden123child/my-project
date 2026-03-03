export const navGroups = [
  {
    label: 'Profile',
    items: [
      ['About', '/about'],
      ['Vision', '/vision'],
      ['Leadership', '/leadership-strategy'],
      ['Resume', '/resume'],
      ['Experience', '/experience']
    ]
  },
  {
    label: 'Engineering',
    items: [
      ['Skills', '/skills'],
      ['Tech Stack', '/tech-stack'],
      ['Architecture', '/architecture-overview'],
      ['System Design', '/system-design-principles'],
      ['Database', '/database-architecture'],
      ['API Docs', '/api-documentation']
    ]
  },
  {
    label: 'Work',
    items: [
      ['Projects', '/projects'],
      ['Case Studies', '/case-studies'],
      ['DevOps', '/devops-deployment'],
      ['Security', '/security-practices'],
      ['Clients', '/clients']
    ]
  },
  {
    label: 'Innovation',
    items: [
      ['Research Lab', '/research-lab'],
      ['Experiments', '/experiments'],
      ['Open Source', '/open-source'],
      ['Whitepapers', '/whitepapers']
    ]
  },
  {
    label: 'Insights',
    items: [
      ['Blog', '/blog'],
      ['Technical Articles', '/technical-articles'],
      ['Knowledge Base', '/knowledge-base'],
      ['Media', '/media-talks']
    ]
  },
  {
    label: 'Connect',
    items: [
      ['Services', '/services'],
      ['Consulting', '/consulting'],
      ['Hire Me', '/hire-me'],
      ['Contact', '/contact']
    ]
  }
] as const;

export const technologies = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion',
  'Three.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL', 'Firebase',
  'Docker', 'Git/GitHub', 'CI/CD', 'Cloud Deployment'
];

export const projects = Array.from({ length: 12 }).map((_, i) => ({
  slug: `system-project-${i + 1}`,
  name: `System Project ${i + 1}`,
  summary: 'Executive-grade full stack platform with measured performance and resilient architecture.',
  stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']
}));

export const caseStudies = Array.from({ length: 8 }).map((_, i) => ({
  slug: `case-study-${i + 1}`,
  title: `Architecture Case Study ${i + 1}`,
  outcome: 'Scaled operational throughput by 3x through architectural decomposition.'
}));

export const staticPages = [
  ['about', 'About'],
  ['vision', 'Vision'],
  ['engineering-philosophy', 'Engineering Philosophy'],
  ['leadership-strategy', 'Leadership & Strategy'],
  ['resume', 'Resume'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['tech-stack', 'Tech Stack'],
  ['core-competencies', 'Core Competencies'],
  ['architecture-overview', 'Architecture Overview'],
  ['system-design-principles', 'System Design Principles'],
  ['database-architecture', 'Database Architecture'],
  ['api-documentation', 'API Documentation'],
  ['devops-deployment', 'DevOps & Deployment'],
  ['security-practices', 'Security Practices'],
  ['research-lab', 'Research Lab'],
  ['experiments', 'Experiments'],
  ['open-source', 'Open Source'],
  ['knowledge-base', 'Knowledge Base'],
  ['technical-articles', 'Technical Articles'],
  ['media-talks', 'Media & Talks'],
  ['whitepapers', 'Whitepapers'],
  ['future-roadmap', 'Future Roadmap'],
  ['clients', 'Clients'],
  ['testimonials', 'Testimonials'],
  ['certifications', 'Certifications'],
  ['awards', 'Awards'],
  ['community-involvement', 'Community Involvement'],
  ['services', 'Services'],
  ['consulting', 'Consulting'],
  ['hire-me', 'Hire Me'],
  ['contact', 'Contact'],
  ['faq', 'FAQ'],
  ['privacy-policy', 'Privacy Policy'],
  ['terms-of-service', 'Terms of Service']
] as const;
