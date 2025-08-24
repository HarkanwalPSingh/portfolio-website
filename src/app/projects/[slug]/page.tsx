import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MDXContent } from '@/components/mdx-content';
import { 
  Calendar, 
  Folder, 
  ExternalLink, 
  Github, 
  ArrowLeft,
  Clock,
  CheckCircle,
  AlertCircle,
  Circle
} from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project || !project.published) {
    notFound();
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'planning':
        return <Circle className="h-4 w-4 text-blue-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'planning':
        return 'info';
      default:
        return 'secondary';
    }
  };

  return (
    <div>
      {/* Back Button */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/projects" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Project Image */}
            {project.image && (
              <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Project Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>
                {project.featured && (
                  <Badge variant="default" className="whitespace-nowrap">
                    Featured Project
                  </Badge>
                )}
              </div>

              {/* Project Metadata */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(project.date)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Folder className="h-4 w-4" />
                  <span>{project.category}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {getStatusIcon(project.status)}
                  <Badge variant={getStatusColor(project.status)} className="text-xs">
                    {project.status.replace('-', ' ')}
                  </Badge>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <Button asChild>
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Content */}
      <Section background="muted">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <MDXContent code={project.body.code} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Technologies & Additional Info */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Technologies */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Project Details
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Category:</span>
                      <span className="ml-2 text-sm">{project.category}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Status:</span>
                      <span className="ml-2">
                        <Badge variant={getStatusColor(project.status)} className="text-xs">
                          {project.status.replace('-', ' ')}
                        </Badge>
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Completed:</span>
                      <span className="ml-2 text-sm">{formatDate(project.date)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Additional Images Gallery */}
      {project.images && project.images.length > 0 && (
        <Section background="muted">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {project.images.map((image, index) => (
                  <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Related Projects or Call to Action */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in Similar Projects?</h3>
            <p className="text-muted-foreground mb-6">
              Check out more of my work or get in touch to discuss potential collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}