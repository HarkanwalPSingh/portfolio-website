import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Search, ArrowLeft, Mail, FolderOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div>
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-full mb-6">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h1 className="text-6xl font-bold mb-4">404</h1>
              <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">What can you do?</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="text-left">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Go Back
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use your browser&apos;s back button to return to the previous page.
                    </p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      Visit Homepage
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Start over from the homepage and navigate to what you need.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button asChild size="lg">
                <Link href="/" className="gap-2">
                  <Home className="h-4 w-4" />
                  Go to Homepage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Popular Pages</h3>
              <div className="grid gap-3 md:grid-cols-2">
                <Button variant="outline" className="h-auto p-4" asChild>
                  <Link href="/about" className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">About</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">Learn about my background</span>
                  </Link>
                </Button>
                
                <Button variant="outline" className="h-auto p-4" asChild>
                  <Link href="/projects" className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="h-4 w-4" />
                      <Badge variant="secondary">Projects</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">View my work portfolio</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}