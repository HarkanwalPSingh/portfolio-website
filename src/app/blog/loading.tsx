import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export default function BlogLoading() {
  return (
    <div>
      {/* Header Skeleton */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-10 w-24 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto mb-8" />
            
            <div className="grid gap-4 md:grid-cols-3 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-12 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Posts Skeleton */}
      <Section background="muted">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Skeleton className="w-2 h-2 rounded-full" />
              <Skeleton className="h-6 w-32" />
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2].map((i) => (
                <Card key={i} className="h-full flex flex-col">
                  <div className="aspect-[2/1] w-full bg-muted rounded-t-lg">
                    <Skeleton className="w-full h-full" />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    
                    <Skeleton className="h-16 w-full mb-4" />

                    <div className="flex gap-2">
                      <Badge variant="secondary">
                        <Skeleton className="h-3 w-12" />
                      </Badge>
                      <Badge variant="secondary">
                        <Skeleton className="h-3 w-16" />
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Skeleton className="h-9 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Regular Posts Skeleton */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Skeleton className="w-2 h-2 rounded-full" />
              <Skeleton className="h-6 w-28" />
            </div>
            
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="hidden md:block w-32 h-20 bg-muted rounded-lg flex-shrink-0">
                        <Skeleton className="w-full h-full" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 text-xs mb-2">
                          <Skeleton className="h-3 w-16" />
                          <Skeleton className="h-3 w-12" />
                          <Skeleton className="h-3 w-20" />
                        </div>
                        
                        <Skeleton className="h-5 w-full mb-2" />
                        <Skeleton className="h-5 w-3/4 mb-3" />
                        
                        <Skeleton className="h-10 w-full mb-3" />

                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <Badge variant="outline">
                              <Skeleton className="h-3 w-10" />
                            </Badge>
                            <Badge variant="outline">
                              <Skeleton className="h-3 w-14" />
                            </Badge>
                          </div>
                          <Skeleton className="h-8 w-20" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}