'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Home, RefreshCw, Mail, Bug } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div>
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 dark:bg-red-950 rounded-full mb-6">
                <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
              <p className="text-xl text-muted-foreground mb-6">
                An unexpected error occurred while loading this page. Our team has been notified and will investigate the issue.
              </p>

              {process.env.NODE_ENV === 'development' && (
                <Card className="mb-6 text-left">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Bug className="h-4 w-4" />
                      <span className="font-medium">Error Details (Development)</span>
                    </div>
                    <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                      {error.message}
                    </pre>
                    {error.digest && (
                      <p className="text-xs text-muted-foreground mt-2">
                        Error ID: {error.digest}
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button onClick={reset} size="lg" className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
              <Button variant="outline" asChild>
                <Link href="/" className="gap-2">
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Report Issue
                </Link>
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">What happened?</h3>
                <div className="grid gap-4 md:grid-cols-2 text-left">
                  <div>
                    <h4 className="font-medium mb-2">Possible Causes</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Temporary server issue</li>
                      <li>• Network connectivity problem</li>
                      <li>• Browser compatibility issue</li>
                      <li>• Outdated cached data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">What to try</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Refresh the page</li>
                      <li>• Clear browser cache</li>
                      <li>• Try a different browser</li>
                      <li>• Check your internet connection</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold">Popular Pages</h3>
              <div className="grid gap-3 md:grid-cols-2">
                <Button variant="outline" className="h-auto p-4" asChild>
                  <Link href="/about" className="flex flex-col gap-2">
                    <Badge variant="secondary">About</Badge>
                    <span className="text-sm text-muted-foreground">Learn about my background</span>
                  </Link>
                </Button>
                
                <Button variant="outline" className="h-auto p-4" asChild>
                  <Link href="/projects" className="flex flex-col gap-2">
                    <Badge variant="secondary">Projects</Badge>
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