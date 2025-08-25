import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MDXContent } from '@/components/mdx-content';
import { generateSEO, generateStructuredData } from '@/lib/seo';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Share2,
  Link as LinkIcon
} from 'lucide-react';
import { SiX, SiLinkedin } from 'react-icons/si';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return generateSEO({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      noIndex: true
    });
  }

  return generateSEO({
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.date,
    authors: [post.author],
    tags: post.tags
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (minutes: number) => {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} read`;
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post.title);


  // Get related posts (same tags, excluding current post)
  const relatedPosts = allPosts
    .filter(p => 
      p.published && 
      p.slug !== post.slug && 
      p.tags?.some(tag => post.tags?.includes(tag))
    )
    .slice(0, 3);

  // Generate structured data for the article
  const articleSchema = generateStructuredData('article', {
    title: post.title,
    description: post.description,
    image: post.image,
    publishedTime: post.date,
    modifiedTime: post.date,
    url: `/blog/${post.slug}`,
    tags: post.tags
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <div>
      {/* Back Button */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blog" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Hero Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Featured Badge */}
            {post.featured && (
              <div className="text-center mb-6">
                <Badge variant="default">Featured Article</Badge>
              </div>
            )}

            {/* Title and Metadata */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {post.description}
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {getReadingTime(post.readingTime)}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="aspect-[2/1] w-full bg-muted rounded-lg overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Article Content */}
      <Section background="muted">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray dark:prose-invert max-w-none prose-lg">
              <MDXContent code={post.body.code} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Share Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                      <Share2 className="h-5 w-5" />
                      Share this article
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Help others discover this content
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <SiX className="h-4 w-4" />
                        X
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={`https://linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <SiLinkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={shareUrl}>
                        <LinkIcon className="h-4 w-4" />
                        Copy
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Author Section */}
      <Section background="muted">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">HS</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">About {post.author}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Software Engineer with 5+ years of experience in backend development, 
                      cloud computing, and modern web technologies. Passionate about writing 
                      clean code and sharing knowledge with the developer community.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="/about">Learn More</a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="/contact">Get in Touch</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section>
          <Container>
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Related Articles</h3>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="hover-lift h-full flex flex-col">
                    {relatedPost.image && (
                      <div className="aspect-[2/1] w-full bg-muted rounded-t-lg overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <CardContent className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(relatedPost.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {getReadingTime(relatedPost.readingTime)}
                        </div>
                      </div>
                      
                      <h4 className="font-semibold mb-2 line-clamp-2 flex-1">
                        <a 
                          href={`/blog/${relatedPost.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {relatedPost.title}
                        </a>
                      </h4>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {relatedPost.description}
                      </p>

                      {relatedPost.tags && relatedPost.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {relatedPost.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA Section */}
      <Section background="muted">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6">
              Check out more of my work or get in touch to discuss your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/blog">Read More Articles</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">View My Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      </div>
    </>
  );
}