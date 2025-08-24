'use client';

import { useMDXComponent } from 'next-contentlayer2/hooks';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';

const components = {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Alert,
  // Add more components as needed
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-4xl font-bold mb-6" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-3xl font-semibold mb-4 mt-8" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-2xl font-medium mb-3 mt-6" {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h4 className="text-xl font-medium mb-2 mt-4" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mb-4 leading-7" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="leading-7" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote 
      className="border-l-4 border-primary pl-6 italic my-6 text-muted-foreground" 
      {...props} 
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code 
      className="bg-muted px-2 py-1 rounded font-mono text-sm" 
      {...props} 
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre 
      className="bg-muted p-4 rounded-lg overflow-x-auto mb-6 border" 
      {...props} 
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      className="text-primary hover:underline" 
      target="_blank" 
      rel="noopener noreferrer" 
      {...props} 
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => <hr className="my-8 border-border" {...props} />,
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse border border-border" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th className="border border-border px-4 py-2 bg-muted font-semibold text-left" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td className="border border-border px-4 py-2" {...props} />
  ),
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}