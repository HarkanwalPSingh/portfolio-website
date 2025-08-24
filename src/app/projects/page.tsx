import { ProjectsClient } from './projects-client';
import { generateSEO } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEO({
    title: 'Projects',
    description: 'A collection of projects showcasing web development, AI experiments, and software engineering work by Harkanwal Singh.',
    url: '/projects'
  });
}

export default function ProjectsPage() {
  return <ProjectsClient />;
}