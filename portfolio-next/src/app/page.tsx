import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container-custom py-6">
        <nav className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Harkanwal Singh</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I am{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Harkanwal
              </span>
              ,<br />
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              I'm a software engineer based in Bengaluru with 5+ years of
              experience in the software industry. My area of focus for the past
              few years have been backend development with Python, Java, and
              Scala.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg">
              View My Work
            </Button>
            <Button variant="ghost" size="lg">
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="container-custom section-padding bg-muted/50">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Works</h2>
          <p className="text-muted-foreground">
            Some of the projects I've been working on
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="card-hover p-6">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full mb-3">
                Web Development
              </span>
              <h3 className="text-xl font-semibold mb-2">
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
          </div>

          {/* Project 2 */}
          <div className="card-hover p-6">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full mb-3">
                Serverless App
              </span>
              <h3 className="text-xl font-semibold mb-2">TwitterAPI V2</h3>
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-custom py-8 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">
            © 2024 Harkanwal Singh. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              Blog
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            <Button variant="ghost" size="sm">
              Resume
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}