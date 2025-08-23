import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Harkanwal Singh - Software Engineer',
  description:
    'Portfolio of Harkanwal Singh, a software engineer based in Bengaluru with 5+ years of experience in backend development.',
  keywords: [
    'Harkanwal Singh',
    'Software Engineer',
    'Portfolio',
    'Backend Development',
    'Python',
    'Java',
    'Scala',
    'Bengaluru',
  ],
  authors: [{ name: 'Harkanwal Singh' }],
  creator: 'Harkanwal Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harkanwalpsingh.github.io',
    title: 'Harkanwal Singh - Software Engineer',
    description:
      'Portfolio of Harkanwal Singh, a software engineer based in Bengaluru with 5+ years of experience in backend development.',
    siteName: 'Harkanwal Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harkanwal Singh - Software Engineer',
    description:
      'Portfolio of Harkanwal Singh, a software engineer based in Bengaluru with 5+ years of experience in backend development.',
    creator: '@factbot_cereal',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
