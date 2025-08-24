import { Metadata } from 'next';

export const siteConfig = {
  name: 'Harkanwalpreet Singh',
  description: 'Senior Software Engineer at Twilio specializing in large-scale distributed systems, privacy-compliant architectures, and performance optimization. 6+ years of experience in backend development.',
  url: 'https://harkanwalsingh.dev',
  ogImage: '/og-image.png',
  author: {
    name: 'Harkanwalpreet Singh',
    email: 'harkanwal.p.singh@gmail.com',
    twitter: '@factbot_cereal',
    github: 'HarkanwalPSingh',
    linkedin: 'harkanwalpsingh'
  },
  keywords: [
    'Senior Software Engineer',
    'Backend Development',
    'Distributed Systems',
    'Privacy Engineering',
    'GDPR Compliance',
    'Performance Optimization',
    'Cloud Computing',
    'AWS',
    'Python',
    'Go',
    'Scala',
    'Java',
    'Kafka',
    'Redis',
    'AI/ML Integration',
    'Cost Optimization',
    'Twilio',
    'System Architecture'
  ]
};

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
};

export function generateSEO({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags
}: SEOProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : `${siteConfig.name} - Software Engineer`;

  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const fullImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: siteConfig.keywords.join(', '),
    authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors || [siteConfig.author.name],
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: siteConfig.author.twitter,
      site: siteConfig.author.twitter,
    },
    metadataBase: new URL(siteConfig.url),
  };
}

export function generateStructuredData(type: 'person' | 'article' | 'website', data: Record<string, unknown> = {}) {
  const baseData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'person':
      return {
        ...baseData,
        '@type': 'Person',
        name: siteConfig.author.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/harkanwal-profile.png`,
        jobTitle: 'Software Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Independent'
        },
        sameAs: [
          `https://github.com/${siteConfig.author.github}`,
          `https://www.linkedin.com/in/${siteConfig.author.linkedin}/`,
          `https://twitter.com/${siteConfig.author.twitter.replace('@', '')}`
        ],
        email: siteConfig.author.email,
        ...data
      };

    case 'article':
      return {
        ...baseData,
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image ? `${siteConfig.url}${data.image}` : `${siteConfig.url}/og-image.png`,
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        author: {
          '@type': 'Person',
          name: siteConfig.author.name,
          url: siteConfig.url
        },
        publisher: {
          '@type': 'Person',
          name: siteConfig.author.name,
          url: siteConfig.url
        },
        url: `${siteConfig.url}${data.url}`,
        ...data
      };

    case 'website':
    default:
      return {
        ...baseData,
        '@type': 'WebSite',
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        author: {
          '@type': 'Person',
          name: siteConfig.author.name
        },
        ...data
      };
  }
}