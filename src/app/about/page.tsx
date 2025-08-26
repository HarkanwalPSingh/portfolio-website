import { notFound } from 'next/navigation';
import { allPages } from 'contentlayer/generated';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MDXContent } from '@/components/mdx-content';
import { generateSEO } from '@/lib/seo';
import { Mail, Download, MapPin, Calendar } from 'lucide-react';

export async function generateMetadata() {
  const page = allPages.find((page) => page.slug === 'about');
  
  if (!page) {
    return generateSEO({
      title: 'About',
      description: 'Learn more about Harkanwal Singh, Software Engineer specializing in backend development and cloud technologies.',
      url: '/about'
    });
  }

  return generateSEO({
    title: page.title,
    description: page.description,
    url: '/about'
  });
}

export default function AboutPage() {
  const page = allPages.find((page) => page.slug === 'about');

  if (!page) {
    notFound();
  }

  const skills = {
    languages: ['Python', 'Go', 'Scala', 'Java', 'JavaScript/TypeScript', 'C++', 'Bash', 'SQL'],
    frameworks: ['Spring Boot', 'Node.js', 'React', 'FastAPI', 'Finatra', 'Conductor', 'Airflow', 'Spark', 'Hadoop'],
    cloud: ['Kubernetes', 'Docker', 'Terraform','AWS', 'EC2', 'ECS', 'Lambda', 'S3', 'DynamoDB', 'Step Functions', 'Kinesis', 'Cloudfront', 'Cloudflare'],
    data: ['Kafka', 'Redis', 'Elasticsearch', 'Trino', 'Snowflake', 'Databricks', 'Athena'],
    observability: ['Datadog', 'Grafana', 'CloudWatch']
  };

  const experience = [
    {
      period: '6+ Years',
      title: 'Backend Engineering',
      description: 'Large-scale distributed systems and performance optimization'
    },
    {
      period: '2+ Years', 
      title: 'Privacy & Compliance',
      description: 'GDPR-compliant systems and data deletion orchestration'
    },
    {
      period: '4+ Years',
      title: 'Cloud & DevOps',
      description: 'AWS services, Kubernetes, and infrastructure automation'
    },
    {
      period: '2+ Years',
      title: 'AI/ML Integration',
      description: 'OpenAI APIs, media processing, and generative AI systems'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-white">HS</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Harkanwal Singh</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Software Engineer • Backend Specialist • Cloud Enthusiast
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Bengaluru, India
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Available for opportunities
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="/portfolio-website/harkanwal-singh-resume.pdf" target="_blank" className="inline-flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/contact" className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* About Content */}
      <Section background="muted">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <MDXContent code={page.body.code} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
              <p className="text-muted-foreground">
                Technologies I work with to build scalable applications
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    Data & Streaming
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.data.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    Cloud & DevOps
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    Observability
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.observability.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                    Experience
                  </h3>
                  <div className="space-y-3">
                    {experience.map((exp, index) => (
                      <div key={index}>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {exp.period}
                          </Badge>
                          <span className="font-medium text-sm">{exp.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}