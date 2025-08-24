import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const social = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Email', href: 'mailto:hello@example.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container-custom">
        <div className="py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left side - Brand and description */}
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center space-x-2 font-bold text-xl"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Harkanwal Singh
                </span>
              </Link>
              <p className="max-w-md text-muted-foreground">
                Software Engineer passionate about building scalable web applications
                and exploring new technologies. Based in Bengaluru, India.
              </p>
              <div className="flex space-x-4">
                {social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Navigation */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Navigate</h3>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/resume"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/uses"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Uses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/changelog"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Harkanwal Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}