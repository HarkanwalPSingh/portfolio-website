import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="flex flex-col items-center justify-center py-20">
              <div className="flex items-center gap-3 mb-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="text-lg font-medium">Loading...</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Please wait while we prepare the content for you
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}