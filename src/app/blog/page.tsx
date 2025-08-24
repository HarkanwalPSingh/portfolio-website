import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Grid } from '@/components/ui/grid';
import { generateSEO } from '@/lib/seo';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export async function generateMetadata() {
  return generateSEO({
    title: 'Blog',
    description: 'Technical articles, insights, and thoughts on software development, AI, and modern web technologies by Harkanwal Singh.',
    url: '/blog'
  });
}

export default function BlogPage() {
  // Get published posts sorted by date
  const publishedPosts = allPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredPosts = publishedPosts.filter(post => post.featured);
  const regularPosts = publishedPosts.filter(post => !post.featured);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (minutes: number) => {
    return `${minutes} min read`;
  };

  return (
    <div>
      {/* Header */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Technical insights, development experiences, and thoughts on modern software engineering
            </p>
            
            <div className="grid gap-4 md:grid-cols-3 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{publishedPosts.length}</div>
                <div className="text-sm text-muted-foreground">Total Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{featuredPosts.length}</div>
                <div className="text-sm text-muted-foreground">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {Math.round(publishedPosts.reduce((acc, post) => acc + post.readingTime, 0) / publishedPosts.length)}
                </div>
                <div className="text-sm text-muted-foreground">Avg Read Time</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section background="muted">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Featured Articles
              </h2>
              
              <Grid cols={1} responsive={{ lg: 2 }} gap="lg">
                {featuredPosts.map((post) => (
                  <Card key={post.slug} className="hover-lift h-full flex flex-col">
                    {post.image && (
                      <div className="aspect-[2/1] w-full bg-muted rounded-t-lg overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <CardHeader className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {getReadingTime(post.readingTime)}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl mb-3 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                        {post.description}
                      </p>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardHeader>

                    <CardContent>
                      <Button asChild className="w-full group">
                        <a href={`/blog/${post.slug}`} className="gap-2">
                          Read Article
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </div>
          </Container>
        </Section>
      )}

      {/* All Posts */}
      <Section background={featuredPosts.length > 0 ? 'default' : 'muted'}>
        <Container>
          <div className="max-w-4xl mx-auto">
            {featuredPosts.length > 0 && (
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground"></span>
                Latest Articles
              </h2>
            )}
            
            <div className="space-y-6">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {post.image && (
                        <div className="hidden md:block w-32 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {getReadingTime(post.readingTime)}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          <a 
                            href={`/blog/${post.slug}`} 
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </a>
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                          {post.description}
                        </p>

                        <div className="flex items-center justify-between">
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {post.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{post.tags.length - 3}
                                </Badge>
                              )}
                            </div>
                          )}
                          
                          <Button variant="ghost" size="sm" asChild className="ml-auto">
                            <a href={`/blog/${post.slug}`} className="gap-1">
                              Read More
                              <ArrowRight className="h-3 w-3" />
                            </a>
                          </Button>
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

      {/* Empty State */}
      {publishedPosts.length === 0 && (
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles yet</h3>
              <p className="text-muted-foreground mb-4">
                Articles will appear here as they are published. Check back soon for technical insights and development experiences!
              </p>
            </div>
          </Container>
        </Section>
      )}

      {/* Newsletter CTA */}
      <Section background="muted">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get notified when I publish new articles about software development, AI, and technology trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Subscribe to Updates</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">View My Projects</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}