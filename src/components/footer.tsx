import Link from 'next/link';
import { Mail } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const social = [
  { name: 'GitHub', href: 'https://github.com/HarkanwalPSingh', icon: SiGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/harkanwalpsingh/', icon: SiLinkedin },
  { name: 'X', href: 'https://twitter.com/factbot_cereal', icon: SiX },
  { name: 'Email', href: 'mailto:harkanwal.p.singh@gmail.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container-custom">
        <div className="py-16 md:py-20">
          <div className="text-center">
            {/* Brand and description */}
            <div className="space-y-4">
              <Link
                href="/"
                className="flex items-center justify-center space-x-2 font-bold text-xl"
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Harkanwal Singh
                </span>
              </Link>
              <p className="max-w-md mx-auto text-muted-foreground">
                Software Engineer passionate about building scalable web applications
                and exploring new technologies. Based in Bengaluru, India.
              </p>
              <div className="flex justify-center space-x-4">
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