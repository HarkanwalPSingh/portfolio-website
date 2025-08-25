'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate form submission (replace with actual implementation)
    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus('success');
      setFormMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFormStatus('error');
      setFormMessage('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'harkanwal.p.singh@gmail.com',
      href: 'mailto:harkanwal.p.singh@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91-9779238824',
      href: 'tel:+91-9779238824'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Bengaluru, India',
      href: null
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <SiGithub className="h-5 w-5" />,
      label: 'GitHub',
      value: 'HarkanwalPSingh',
      href: 'https://github.com/HarkanwalPSingh'
    },
    {
      icon: <SiLinkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: 'harkanwalpsingh',
      href: 'https://www.linkedin.com/in/harkanwalpsingh/'
    },
    {
      icon: <SiX className="h-5 w-5" />,
      label: 'X',
      value: '@factbot_cereal',
      href: 'https://twitter.com/factbot_cereal'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Backend Systems',
    'API Development',
    'Cloud Solutions',
    'AI/ML Integration',
    'Technical Consulting',
    'Code Reviews',
    'Other'
  ];

  return (
    <div>
      {/* Header */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to discuss your next project or have a question? I&apos;d love to hear from you.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Available for new opportunities</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="muted">
        <Container>
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                        required
                        rows={6}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                      />
                    </div>

                    <div>
                      <Label className="text-sm text-muted-foreground mb-3 block">
                        What type of project are you interested in?
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <Badge
                            key={type}
                            variant="outline"
                            className="text-xs cursor-pointer hover:bg-accent"
                            onClick={() => {
                              if (!formData.subject.includes(type)) {
                                setFormData(prev => ({
                                  ...prev,
                                  subject: prev.subject ? `${prev.subject}, ${type}` : type
                                }));
                              }
                            }}
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Status Messages */}
                    {formStatus === 'success' && (
                      <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-green-800 dark:text-green-200">{formMessage}</span>
                      </div>
                    )}

                    {formStatus === 'error' && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-md">
                        <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                        <span className="text-sm text-red-800 dark:text-red-200">{formMessage}</span>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to receive email communications from me. 
                      I respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-muted-foreground mt-0.5">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Connect on Social</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-muted-foreground">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{social.label}</p>
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {social.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/portfolio-website/resume.pdf" target="_blank">
                      <Badge variant="secondary" className="mr-2">PDF</Badge>
                      Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/projects">
                      <Badge variant="secondary" className="mr-2">Work</Badge>
                      View Projects
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/about">
                      <Badge variant="secondary" className="mr-2">Info</Badge>
                      About Me
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Here are answers to some common questions about working with me.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What type of projects do you work on?</h3>
                  <p className="text-sm text-muted-foreground">
                    I specialize in backend development, API design, cloud solutions, and full-stack web applications. 
                    I also work on AI/ML integration and technical consulting projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What&apos;s your typical response time?</h3>
                  <p className="text-sm text-muted-foreground">
                    I aim to respond to all inquiries within 24 hours. For urgent matters, 
                    please mention it in your message and I&apos;ll prioritize accordingly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do you work with startups?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! I enjoy working with startups and early-stage companies. 
                    I understand the unique challenges and can help build scalable solutions from the ground up.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Are you available for remote work?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, I work remotely with clients globally. I&apos;m experienced in remote collaboration 
                    and use modern tools to ensure effective communication and project delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}