'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Grid, GridItem } from '@/components/ui/grid';
import { Badge } from '@/components/ui/badge';
import { useBreakpoint } from '@/hooks/use-breakpoint';
import { Responsive, ShowOnMobile, ShowOnDesktop } from '@/components/ui/responsive';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

export default function ResponsiveTestPage() {
  const breakpoint = useBreakpoint();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Listen to resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDeviceIcon = () => {
    if (breakpoint.isLgUp) return <Monitor className="h-5 w-5" />;
    if (breakpoint.isMdUp) return <Tablet className="h-5 w-5" />;
    return <Smartphone className="h-5 w-5" />;
  };

  const getDeviceType = () => {
    if (breakpoint.isLgUp) return 'Desktop';
    if (breakpoint.isMdUp) return 'Tablet';
    return 'Mobile';
  };

  return (
    <Section>
      <Container>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Responsive System Test</h1>
            <p className="text-muted-foreground">
              Test the responsive breakpoint system across different screen sizes
            </p>
          </div>

          {/* Current Breakpoint Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getDeviceIcon()}
                Current Breakpoint: {breakpoint.current.toUpperCase()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Screen Information</h4>
                  <div className="space-y-1 text-sm">
                    <p>Device Type: <Badge variant="outline">{getDeviceType()}</Badge></p>
                    <p>Window Size: {windowSize.width} × {windowSize.height}</p>
                    <p>Current Breakpoint: <Badge>{breakpoint.current}</Badge></p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Breakpoint Checks</h4>
                  <div className="space-y-1 text-sm">
                    <p>Small+: <Badge variant={breakpoint.isSmUp ? 'success' : 'outline'}>
                      {breakpoint.isSmUp ? '✓' : '✗'}
                    </Badge></p>
                    <p>Medium+: <Badge variant={breakpoint.isMdUp ? 'success' : 'outline'}>
                      {breakpoint.isMdUp ? '✓' : '✗'}
                    </Badge></p>
                    <p>Large+: <Badge variant={breakpoint.isLgUp ? 'success' : 'outline'}>
                      {breakpoint.isLgUp ? '✓' : '✗'}
                    </Badge></p>
                    <p>XLarge+: <Badge variant={breakpoint.isXlUp ? 'success' : 'outline'}>
                      {breakpoint.isXlUp ? '✓' : '✗'}
                    </Badge></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grid Responsiveness Test */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Grid System Test</h2>
            
            {/* Responsive Grid */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Responsive Grid (1 → 2 → 3 → 4 columns)
                </h3>
                <Grid cols={1} responsive={{ sm: 2, md: 3, lg: 4 }} gap="md">
                  {Array.from({ length: 8 }, (_, i) => (
                    <Card key={i}>
                      <CardContent className="p-4 text-center">
                        <p className="text-lg font-semibold">Item {i + 1}</p>
                        <p className="text-sm text-muted-foreground">
                          Grid responsive test
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </Grid>
              </div>

              {/* Grid with Spans */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Grid with Spans (12-column system)
                </h3>
                <Grid cols={12} gap="md">
                  <GridItem span={12}>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p>Full Width (span 12)</p>
                      </CardContent>
                    </Card>
                  </GridItem>
                  <GridItem span={6}>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p>Half Width (span 6)</p>
                      </CardContent>
                    </Card>
                  </GridItem>
                  <GridItem span={6}>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p>Half Width (span 6)</p>
                      </CardContent>
                    </Card>
                  </GridItem>
                  <GridItem span={4}>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p>1/3 Width (span 4)</p>
                      </CardContent>
                    </Card>
                  </GridItem>
                  <GridItem span={4}>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p>1/3 Width (span 4)</p>
                      </CardContent>
                    </Card>
                  </GridItem>
                  <GridItem span={4}>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p>1/3 Width (span 4)</p>
                      </CardContent>
                    </Card>
                  </GridItem>
                </Grid>
              </div>
            </div>
          </div>

          {/* Container Sizes Test */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Container Sizes Test</h2>
            <div className="space-y-4">
              <Container size="sm" className="bg-red-100 dark:bg-red-900/20 p-4 rounded">
                <p className="text-center">Small Container (max-w-3xl)</p>
              </Container>
              <Container size="md" className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded">
                <p className="text-center">Medium Container (max-w-5xl)</p>
              </Container>
              <Container size="lg" className="bg-green-100 dark:bg-green-900/20 p-4 rounded">
                <p className="text-center">Large Container (max-w-7xl)</p>
              </Container>
            </div>
          </div>

          {/* Responsive Component Tests */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Responsive Components Test</h2>
            <div className="space-y-4">
              
              {/* Mobile Only */}
              <ShowOnMobile>
                <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      <Badge variant="destructive">Mobile Only</Badge>
                      <span className="text-sm">This card only shows on mobile devices (&lt; 768px)</span>
                    </div>
                  </CardContent>
                </Card>
              </ShowOnMobile>

              {/* Desktop Only */}
              <ShowOnDesktop>
                <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      <Badge variant="info">Desktop Only</Badge>
                      <span className="text-sm">This card only shows on desktop devices (&ge; 1024px)</span>
                    </div>
                  </CardContent>
                </Card>
              </ShowOnDesktop>

              {/* Tablet Range */}
              <Responsive show={{ only: ['md', 'lg'] }}>
                <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Tablet className="h-4 w-4" />
                      <Badge variant="warning">Tablet Range</Badge>
                      <span className="text-sm">This card shows on medium and large breakpoints (md, lg)</span>
                    </div>
                  </CardContent>
                </Card>
              </Responsive>

              {/* Medium and Up */}
              <Responsive show={{ up: 'md' }}>
                <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      <Badge variant="success">Medium+</Badge>
                      <span className="text-sm">This card shows on medium screens and up (&ge; 768px)</span>
                    </div>
                  </CardContent>
                </Card>
              </Responsive>

              {/* Always Visible */}
              <Card className="border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-4 w-4" />
                    <Badge variant="outline">Always Visible</Badge>
                    <span className="text-sm">This card is always visible on all screen sizes</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Layout Behavior Test */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Layout Behavior Test</h2>
            <p className="text-muted-foreground mb-4">
              Resize your browser window to see how the layout adapts at different breakpoints.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Mobile First</h3>
                  <p className="text-sm text-muted-foreground">
                    Stacked vertically on mobile, 2 columns on tablet, 3 columns on desktop.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Responsive</h3>
                  <p className="text-sm text-muted-foreground">
                    Layout automatically adapts based on screen size using CSS Grid.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Breakpoints</h3>
                  <p className="text-sm text-muted-foreground">
                    Uses Tailwind&apos;s standard breakpoints: sm (640px), md (768px), lg (1024px).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Testing Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>How to test:</strong></p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Resize your browser window to different widths</li>
                  <li>Use browser dev tools to simulate different devices</li>
                  <li>Watch how the layout, grid, and component visibility changes</li>
                  <li>Check that the breakpoint information updates correctly</li>
                  <li>Verify that responsive components show/hide at correct breakpoints</li>
                </ol>
                <p className="mt-4"><strong>Key breakpoints to test:</strong></p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline">xs: 0px+</Badge>
                  <Badge variant="outline">sm: 640px+</Badge>
                  <Badge variant="outline">md: 768px+</Badge>
                  <Badge variant="outline">lg: 1024px+</Badge>
                  <Badge variant="outline">xl: 1280px+</Badge>
                  <Badge variant="outline">2xl: 1536px+</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}