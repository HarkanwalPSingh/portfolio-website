'use client';

import { useTheme } from 'next-themes';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sun, Moon, Monitor, Palette } from 'lucide-react';

export default function ThemeTestPage() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();

  return (
    <Section>
      <Container>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Theme System Test</h1>
            <p className="text-muted-foreground">
              Test light/dark mode switching and CSS variable integration
            </p>
          </div>

          {/* Theme Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Theme Controls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <span className="text-sm">Toggle between light and dark themes</span>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Manual Theme Selection:</h4>
                  <div className="flex gap-2">
                    <Button
                      variant={theme === 'light' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTheme('light')}
                      className="gap-2"
                    >
                      <Sun className="h-4 w-4" />
                      Light
                    </Button>
                    <Button
                      variant={theme === 'dark' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTheme('dark')}
                      className="gap-2"
                    >
                      <Moon className="h-4 w-4" />
                      Dark
                    </Button>
                    <Button
                      variant={theme === 'system' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTheme('system')}
                      className="gap-2"
                    >
                      <Monitor className="h-4 w-4" />
                      System
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Current Theme Info:</h4>
                    <div className="space-y-1 text-sm">
                      <p>Selected: <Badge variant="outline">{theme || 'loading...'}</Badge></p>
                      <p>System: <Badge variant="outline">{systemTheme || 'loading...'}</Badge></p>
                      <p>Resolved: <Badge variant="outline">{resolvedTheme || 'loading...'}</Badge></p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <div className="space-y-1 text-sm">
                      <p>✓ Persistent theme selection</p>
                      <p>✓ System preference detection</p>
                      <p>✓ No flash of wrong theme</p>
                      <p>✓ CSS variables integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color System Test */}
          <Card>
            <CardHeader>
              <CardTitle>Color System Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Semantic Colors:</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-background border-2"></div>
                      <span className="text-sm">Background</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-foreground"></div>
                      <span className="text-sm">Foreground</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-primary"></div>
                      <span className="text-sm">Primary</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-secondary"></div>
                      <span className="text-sm">Secondary</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-accent"></div>
                      <span className="text-sm">Accent</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-muted"></div>
                      <span className="text-sm">Muted</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-destructive"></div>
                      <span className="text-sm">Destructive</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded border bg-card"></div>
                      <span className="text-sm">Card</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Component Colors:</h4>
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

                <div>
                  <h4 className="font-semibold mb-3">Button Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Primary</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="outline" size="sm">Outline</Button>
                    <Button variant="ghost" size="sm">Ghost</Button>
                    <Button variant="destructive" size="sm">Destructive</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Layout Components in Different Themes */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Light Theme Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-background border rounded">
                    <p className="font-medium text-foreground">Primary Text</p>
                    <p className="text-muted-foreground">Muted text content</p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <p className="text-sm">Muted background section</p>
                  </div>
                  <div className="p-4 bg-accent rounded">
                    <p className="text-sm text-accent-foreground">Accent background</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded hover:bg-accent/50 transition-colors cursor-pointer">
                    <p className="font-medium">Hover Effect Test</p>
                    <p className="text-sm text-muted-foreground">Hover over this card</p>
                  </div>
                  <div className="p-4 border rounded focus-within:ring-2 focus-within:ring-ring">
                    <input 
                      className="w-full bg-transparent outline-none" 
                      placeholder="Focus test input"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Custom CSS Variables */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Brand Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <h3 className="text-lg font-semibold">Brand Gradient</h3>
                  <p className="opacity-90">Using CSS variables for consistent branding</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg" style={{backgroundColor: 'hsl(var(--brand-primary))'}}>
                  </div>
                  <div className="w-16 h-16 rounded-lg" style={{backgroundColor: 'hsl(var(--brand-secondary))'}}>
                  </div>
                  <div className="w-16 h-16 rounded-lg" style={{backgroundColor: 'hsl(var(--brand-accent))'}}>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testing Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Theme Testing Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Manual Testing:</h4>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Click the theme toggle button in the header</li>
                    <li>Use the manual theme selection buttons above</li>
                    <li>Check that all colors update immediately</li>
                    <li>Refresh the page - theme should persist</li>
                    <li>Test system theme detection</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Browser Testing:</h4>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Change system theme in OS settings</li>
                    <li>Set theme to &quot;system&quot; and verify it follows OS preference</li>
                    <li>Test in different browsers</li>
                    <li>Check for flash of unstyled content on page load</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Expected Behavior:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Smooth transitions between themes</li>
                    <li>No flash of wrong theme on initial load</li>
                    <li>All UI components adapt to theme changes</li>
                    <li>Theme preference persists across browser sessions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}