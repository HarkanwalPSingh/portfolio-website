'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Grid, GridItem } from '@/components/ui/grid';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';
import { CardSkeleton, ProjectCardSkeleton, BlogPostSkeleton, ProfileSkeleton } from '@/components/ui/skeletons';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { FocusTrap } from '@/components/ui/focus-trap';
import { Responsive, ShowOnMobile, ShowOnDesktop } from '@/components/ui/responsive';
import { useBreakpoint } from '@/hooks/use-breakpoint';
import { Star, Heart, Download, ExternalLink } from 'lucide-react';

export default function TestComponentsPage() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const breakpoint = useBreakpoint();

  const toggleLoading = () => {
    setLoading(!loading);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="min-h-screen py-8">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Phase 2 Component Testing</h1>
            <p className="text-muted-foreground">
              Testing all components built in Phase 2 of the portfolio modernization
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm">Current breakpoint: <Badge variant="outline">{breakpoint.current}</Badge></p>
              <p className="text-sm mt-2">
                Screen: {breakpoint.isMdUp ? 'Desktop/Tablet' : 'Mobile'} | 
                Width checks: {breakpoint.isLgUp ? '✓ Large+' : '✗ Large+'} | 
                {breakpoint.isMdUp ? '✓ Medium+' : '✗ Medium+'}
              </p>
            </div>
          </div>

          {/* UI Components Section */}
          <Section padding="md" background="muted">
            <h2 className="text-3xl font-semibold mb-8">UI Components</h2>
            
            {/* Buttons */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h3 className="text-xl font-medium mb-4">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>

              {/* Form Elements */}
              <div>
                <h3 className="text-xl font-medium mb-4">Form Elements</h3>
                <div className="max-w-md space-y-4">
                  <div>
                    <Label htmlFor="test-input">Test Input</Label>
                    <Input id="test-input" placeholder="Type something..." />
                  </div>
                  <div>
                    <Label htmlFor="test-email">Email</Label>
                    <Input id="test-email" type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="test-password">Password</Label>
                    <Input id="test-password" type="password" placeholder="••••••••" />
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Card Components */}
          <Section>
            <h2 className="text-3xl font-semibold mb-8">Card Components</h2>
            <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
              <Card>
                <CardHeader>
                  <CardTitle>Simple Card</CardTitle>
                  <CardDescription>A basic card component example</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is the card content area where you can put any content.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Action</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Project Card <Badge variant="success">New</Badge>
                  </CardTitle>
                  <CardDescription>With icons and badges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Tailwind</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Clone
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>With loading states</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button onClick={toggleLoading} className="w-full">
                      {loading ? <Spinner size="sm" /> : 'Test Loading'}
                    </Button>
                    {loading && (
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Section>

          {/* Loading States */}
          <Section background="muted">
            <h2 className="text-3xl font-semibold mb-8">Loading States</h2>
            <Grid cols={1} responsive={{ md: 2 }} gap="lg">
              <div>
                <h3 className="text-lg font-medium mb-4">Skeleton Components</h3>
                <div className="space-y-4">
                  <CardSkeleton />
                  <BlogPostSkeleton />
                  <ProfileSkeleton />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Spinners</h3>
                <div className="flex items-center gap-4 mb-4">
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                </div>
                <ProjectCardSkeleton />
              </div>
            </Grid>
          </Section>

          {/* Layout Components */}
          <Section>
            <h2 className="text-3xl font-semibold mb-8">Layout Components</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Grid System</h3>
                <Grid cols={4} gap="md">
                  <GridItem span={1}>
                    <div className="bg-primary/10 p-4 rounded text-center">1</div>
                  </GridItem>
                  <GridItem span={1}>
                    <div className="bg-primary/10 p-4 rounded text-center">2</div>
                  </GridItem>
                  <GridItem span={2}>
                    <div className="bg-primary/20 p-4 rounded text-center">Span 2</div>
                  </GridItem>
                </Grid>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Container Sizes</h3>
                <div className="space-y-4">
                  <Container size="sm" className="bg-muted p-4 rounded">
                    <p className="text-center">Small Container (max-w-3xl)</p>
                  </Container>
                  <Container size="md" className="bg-muted p-4 rounded">
                    <p className="text-center">Medium Container (max-w-5xl)</p>
                  </Container>
                  <Container size="lg" className="bg-muted p-4 rounded">
                    <p className="text-center">Large Container (max-w-7xl)</p>
                  </Container>
                </div>
              </div>
            </div>
          </Section>

          {/* Responsive Components */}
          <Section background="accent">
            <h2 className="text-3xl font-semibold mb-8">Responsive Components</h2>
            <div className="space-y-4">
              <ShowOnMobile>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="info">Mobile</Badge>
                      <p>This card only shows on mobile devices</p>
                    </div>
                  </CardContent>
                </Card>
              </ShowOnMobile>

              <ShowOnDesktop>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="success">Desktop</Badge>
                      <p>This card only shows on desktop devices</p>
                    </div>
                  </CardContent>
                </Card>
              </ShowOnDesktop>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Badge>Always Visible</Badge>
                    <p>This card shows on all screen sizes</p>
                  </div>
                </CardContent>
              </Card>

              <Responsive show={{ up: 'md' }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Medium+</Badge>
                      <p>Visible on medium screens and up</p>
                    </div>
                  </CardContent>
                </Card>
              </Responsive>
            </div>
          </Section>

          {/* Accessibility Features */}
          <Section>
            <h2 className="text-3xl font-semibold mb-8">Accessibility Features</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Screen Reader Content</h3>
                <Button>
                  Like <Heart className="h-4 w-4 ml-1" />
                  <VisuallyHidden>(this will like the post)</VisuallyHidden>
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Focus Management</h3>
                <Button onClick={() => setShowModal(true)}>
                  Open Modal (Focus Trap Demo)
                </Button>
                
                {showModal && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <FocusTrap active={showModal}>
                      <Card className="w-full max-w-md mx-4">
                        <CardHeader>
                          <CardTitle>Modal with Focus Trap</CardTitle>
                          <CardDescription>
                            Focus is trapped within this modal. Try tabbing through the elements.
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <Input placeholder="First input" />
                            <Input placeholder="Second input" />
                            <Input placeholder="Third input" />
                          </div>
                        </CardContent>
                        <CardFooter className="gap-2">
                          <Button variant="outline" onClick={() => setShowModal(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setShowModal(false)}>
                            Save
                          </Button>
                        </CardFooter>
                      </Card>
                    </FocusTrap>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Focus Styles</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  All interactive elements have proper focus indicators:
                </p>
                <div className="flex gap-2">
                  <Button>Tab to focus</Button>
                  <Input placeholder="Focus with keyboard" />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </Container>
    </div>
  );
}