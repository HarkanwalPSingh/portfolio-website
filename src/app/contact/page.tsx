import { ContactClient } from './contact-client';
import { generateSEO } from '@/lib/seo';

export async function generateMetadata() {
  return generateSEO({
    title: 'Contact',
    description: 'Get in touch with Harkanwal Singh for project discussions, collaborations, or technical consulting opportunities.',
    url: '/contact'
  });
}

export default function ContactPage() {
  return <ContactClient />;
}