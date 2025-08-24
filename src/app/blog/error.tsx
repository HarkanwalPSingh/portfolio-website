'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileX, Home, RefreshCw } from 'lucide-react';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog Error:', error);
  }, [error]);

  return (
    <div>
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-50 dark:bg-orange-950 rounded-full mb-6">
                <FileX className="h-10 w-10 text-orange-600 dark:text-orange-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Blog Error</h1>
              <p className="text-xl text-muted-foreground mb-6">
                We encountered an issue while loading the blog content. This could be due to a temporary problem with the content management system.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button onClick={reset} size="lg" className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Reload Blog
              </Button>
              <Button variant="outline" asChild>
                <Link href="/" className="gap-2">
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
              </Button>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Alternative Content</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  While we fix the blog, you can explore these other sections:
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  <Button variant="outline" className="h-auto p-4" asChild>
                    <Link href="/projects" className="flex flex-col gap-2">
                      <Badge variant="secondary">Projects</Badge>
                      <span className="text-sm text-muted-foreground">View my development work</span>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4" asChild>
                    <Link href="/about" className="flex flex-col gap-2">
                      <Badge variant="secondary">About</Badge>
                      <span className="text-sm text-muted-foreground">Learn about my background</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-sm text-muted-foreground">
              <p>If this problem persists, please <Link href="/contact" className="text-primary hover:underline">contact me</Link> and I&apos;ll fix it as soon as possible.</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}