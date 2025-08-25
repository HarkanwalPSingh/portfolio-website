import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background">

      {/* Hero Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl xl:text-6xl">
                  Hi, I am{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Harkanwal
                  </span>
                  ,<br />
                  Senior Software Engineer
                </h2>
                <p className="max-w-2xl text-lg text-muted-foreground md:text-xl mb-8">
                  I&apos;m a Senior Software Engineer at Twilio with 6+ years of
                  experience building large-scale distributed systems, privacy-compliant 
                  architectures, and high-performance solutions. I specialize in backend 
                  development with Python, Go, Scala, and Java.
                </p>

                <div className="mb-8 flex flex-wrap items-center gap-4">
                  <Button size="lg" asChild>
                    <a href="/portfolio-website/harkanwal-singh-resume.pdf" target="_blank" className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/projects">View My Work</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/HarkanwalPSingh" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/harkanwalpsingh/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:harkanwal.p.singh@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    <img 
                      src="/portfolio-website/harkanwal-profile.png"
                      alt="Harkanwalpreet Singh - Senior Software Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Work Section */}
      <Section background="muted">
        <Container>
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold">Featured Works</h2>
          <p className="text-muted-foreground">
            Some of the projects I&apos;ve been working on
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge variant="info" className="mb-3">
                  Web Development
                </Badge>
              <h3 className="mb-2 text-xl font-semibold">
                Portfolio Project 2024
              </h3>
              <p className="text-muted-foreground">
                This modern portfolio website built with Next.js 15, TypeScript,
                and Tailwind CSS. Features dark mode, animations, and a modern
                design system.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="h-3 w-3" />
                Live Demo
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Github className="h-3 w-3" />
                Source
              </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-3">
                  Serverless App
                </Badge>
              <h3 className="mb-2 text-xl font-semibold">TwitterAPI V2</h3>
              <p className="text-muted-foreground">
                Experimenting with AI tools to create tweet content and images.
                Features serverless functions on GCP with CRON-based scheduling.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="h-3 w-3" />
                Live Demo
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Github className="h-3 w-3" />
                Source
              </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        </Container>
      </Section>
    </div>
  );
}
