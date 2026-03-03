import {
  Braces,
  Code2,
  Container,
  Database,
  FileJson,
  Flame,
  GitBranch,
  Globe,
  Layers,
  Network,
  Orbit,
  Server,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const techIconMap: Record<string, LucideIcon> = {
  'HTML5': Globe,
  'CSS3': Layers,
  'JavaScript': Code2,
  'TypeScript': Braces,
  'React.js': Orbit,
  'Next.js': Flame,
  'Tailwind CSS': Layers,
  'Framer Motion': Workflow,
  'Three.js': Network,
  'Node.js': Server,
  'Express.js': Server,
  'MongoDB': Database,
  'PostgreSQL': Database,
  'REST API': FileJson,
  GraphQL: FileJson,
  Firebase: ShieldCheck,
  Docker: Container,
  'Git/GitHub': GitBranch,
  'CI/CD': Workflow,
  'Cloud Deployment': Network
};
