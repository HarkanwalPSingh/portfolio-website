'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { VisuallyHidden } from '@/components/ui/visually-hidden';
import { FocusTrap } from '@/components/ui/focus-trap';
import { announceToScreenReader } from '@/lib/accessibility';
import { 
  Heart, 
  Star, 
  Bookmark, 
  Download, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  Volume2,
  Keyboard,
  MousePointer,
  Monitor
} from 'lucide-react';

export default function AccessibilityTestPage() {
  const [likes, setLikes] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    announceToScreenReader(`Post liked. Total likes: ${newLikes}`, 'polite');
  };

  const handleBookmark = () => {
    const newBookmarked = !bookmarked;
    setBookmarked(newBookmarked);
    announceToScreenReader(
      newBookmarked ? 'Post bookmarked' : 'Bookmark removed',
      'polite'
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    announceToScreenReader('Form submitted successfully', 'polite');
    setFormData({ name: '', email: '', message: '' });
    setShowModal(false);
  };

  return (
    <Section>
      <Container>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Accessibility Features Test</h1>
            <p className="text-muted-foreground">
              Testing keyboard navigation, screen reader support, and WCAG compliance
            </p>
          </div>

          {/* Keyboard Navigation Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Keyboard className="h-5 w-5" />
                Keyboard Navigation Test
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Use Tab to navigate through focusable elements. Shift+Tab to go backwards.
                  All interactive elements should have visible focus indicators.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link Button</Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small</Button>
                  <Button>Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Star className="h-4 w-4" />
                    <VisuallyHidden>Star button</VisuallyHidden>
                  </Button>
                </div>

                <div className="max-w-md space-y-4">
                  <div>
                    <Label htmlFor="test-input-1">Regular Input</Label>
                    <Input 
                      id="test-input-1" 
                      placeholder="Type here and press Tab" 
                      aria-describedby="test-input-1-help"
                    />
                    <p id="test-input-1-help" className="text-xs text-muted-foreground mt-1">
                      This input has proper labeling and description
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="test-input-2">Email Input</Label>
                    <Input 
                      id="test-input-2" 
                      type="email" 
                      placeholder="email@example.com"
                      aria-required="true"
                      aria-describedby="test-input-2-help"
                    />
                    <p id="test-input-2-help" className="text-xs text-muted-foreground mt-1">
                      Required field with email validation
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="test-password">Password Input</Label>
                    <div className="relative">
                      <Input 
                        id="test-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Screen Reader Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Screen Reader Support Test
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Interactive Elements with ARIA</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      onClick={handleLike}
                      variant="outline"
                      className="gap-2"
                      aria-label={`Like this post. Current likes: ${likes}`}
                    >
                      <Heart className={`h-4 w-4 ${likes > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                      {likes}
                      <VisuallyHidden>likes</VisuallyHidden>
                    </Button>

                    <Button
                      onClick={handleBookmark}
                      variant="outline"
                      className="gap-2"
                      aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this post'}
                      aria-pressed={bookmarked}
                    >
                      <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
                      <VisuallyHidden>
                        {bookmarked ? 'bookmarked' : 'not bookmarked'}
                      </VisuallyHidden>
                    </Button>

                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                      <VisuallyHidden>PDF file, 2.1 MB</VisuallyHidden>
                    </Button>

                    <Button variant="outline" className="gap-2" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        External Link
                        <VisuallyHidden>(opens in new window)</VisuallyHidden>
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Status Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="success">Online</Badge>
                      <span className="text-sm">System Status</span>
                      <VisuallyHidden>All systems operational</VisuallyHidden>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">{likes > 0 ? 'Active' : 'Inactive'}</Badge>
                      <span className="text-sm">Engagement Level</span>
                      <VisuallyHidden>
                        {likes > 0 ? `${likes} user interactions` : 'No interactions yet'}
                      </VisuallyHidden>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Live Regions</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Click buttons above to test live announcements to screen readers
                  </p>
                  <div className="p-3 bg-muted rounded-md">
                    <p className="text-sm">
                      <strong>Recent Actions:</strong>
                    </p>
                    <div aria-live="polite" aria-atomic="true" className="sr-only">
                      {/* Live region for screen reader announcements */}
                    </div>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Likes: {likes}</li>
                      <li>• Bookmarked: {bookmarked ? 'Yes' : 'No'}</li>
                      <li>• Last action will be announced to screen readers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Focus Management Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MousePointer className="h-5 w-5" />
                Focus Management Test
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Test focus trapping in modal dialogs and proper focus restoration
                </p>
                
                <Button onClick={() => setShowModal(true)}>
                  Open Modal (Focus Trap Demo)
                </Button>

                {showModal && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <FocusTrap active={showModal}>
                      <Card className="w-full max-w-md mx-4">
                        <CardHeader>
                          <CardTitle>Contact Form</CardTitle>
                        </CardHeader>
                        <form onSubmit={handleFormSubmit}>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="modal-name">Name *</Label>
                                <Input
                                  id="modal-name"
                                  value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                                  required
                                  aria-required="true"
                                />
                              </div>
                              <div>
                                <Label htmlFor="modal-email">Email *</Label>
                                <Input
                                  id="modal-email"
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                  required
                                  aria-required="true"
                                />
                              </div>
                              <div>
                                <Label htmlFor="modal-message">Message</Label>
                                <Input
                                  id="modal-message"
                                  value={formData.message}
                                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                                  placeholder="Optional message"
                                />
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="gap-2">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </Button>
                            <Button type="submit">
                              Send Message
                            </Button>
                          </CardFooter>
                        </form>
                      </Card>
                    </FocusTrap>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* WCAG Compliance Checklist */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                WCAG Compliance Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Badge variant="success">✓</Badge>
                      Perceivable
                    </h4>
                    <ul className="text-sm space-y-1 ml-6">
                      <li>• Alt text for images (where applicable)</li>
                      <li>• Proper color contrast ratios</li>
                      <li>• Resizable text up to 200%</li>
                      <li>• Content visible without color alone</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Badge variant="success">✓</Badge>
                      Operable
                    </h4>
                    <ul className="text-sm space-y-1 ml-6">
                      <li>• Keyboard accessible navigation</li>
                      <li>• No seizure-inducing content</li>
                      <li>• Skip links for main content</li>
                      <li>• Focus indicators on all interactive elements</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Badge variant="success">✓</Badge>
                      Understandable
                    </h4>
                    <ul className="text-sm space-y-1 ml-6">
                      <li>• Clear, readable language</li>
                      <li>• Consistent navigation patterns</li>
                      <li>• Form labels and error messages</li>
                      <li>• Predictable functionality</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Badge variant="success">✓</Badge>
                      Robust
                    </h4>
                    <ul className="text-sm space-y-1 ml-6">
                      <li>• Valid HTML structure</li>
                      <li>• Compatible with assistive technologies</li>
                      <li>• Semantic HTML elements</li>
                      <li>• ARIA attributes where needed</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-md">
                  <h4 className="font-semibold mb-2">Testing Tools Recommended:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Screen readers: NVDA (Windows), VoiceOver (Mac), Orca (Linux)</li>
                    <li>• Browser extensions: axe DevTools, Lighthouse accessibility audit</li>
                    <li>• Keyboard navigation: Tab, Shift+Tab, Arrow keys, Enter, Space, Escape</li>
                    <li>• Color contrast tools: WebAIM Color Contrast Checker</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testing Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Testing Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Keyboard Testing:</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside ml-4">
                    <li>Use Tab key to navigate through all focusable elements</li>
                    <li>Verify all interactive elements have visible focus indicators</li>
                    <li>Test Shift+Tab for reverse navigation</li>
                    <li>Use Enter/Space to activate buttons and links</li>
                    <li>Test Escape key to close modals</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Screen Reader Testing:</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside ml-4">
                    <li>Enable VoiceOver (Mac: Cmd+F5) or NVDA (Windows)</li>
                    <li>Navigate using screen reader commands</li>
                    <li>Verify all content is read aloud correctly</li>
                    <li>Test form labels and error messages</li>
                    <li>Check that live regions announce updates</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Visual Testing:</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside ml-4">
                    <li>Test with 200% browser zoom</li>
                    <li>Check color contrast in both light and dark themes</li>
                    <li>Verify content is understandable without color</li>
                    <li>Test with reduced motion preferences</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}