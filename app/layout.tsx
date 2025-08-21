import type { Metadata } from 'next/types';
import Provider from './provider';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nhamdv.dev'),
  title: {
    default: 'Dao Van Nham - Full Stack Developer & Technical Lead',
    template: '%s | Dao Van Nham'
  },
  description:
    'Experienced Full Stack Developer with 8+ years in web and mobile development. Specialized in React, Next.js, Node.js, and modern JavaScript technologies. Currently leading technical teams and building scalable applications.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'React Developer',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Technical Lead',
    'Web Development',
    'Mobile Development',
    'React Native',
    'Vietnam Developer',
    'Hanoi',
    'Frontend Developer',
    'Backend Developer',
    'NestJS',
    'Express.js',
    'MongoDB',
    'MySQL',
    'AWS',
    'Docker'
  ],
  authors: [{ name: 'Dao Van Nham', url: 'https://nhamdv.dev' }],
  creator: 'Dao Van Nham',
  publisher: 'Dao Van Nham',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nhamdv.dev',
    title: 'Dao Van Nham - Full Stack Developer & Technical Lead',
    description:
      'Experienced Full Stack Developer with 8+ years in web and mobile development. Specialized in React, Next.js, Node.js, and modern JavaScript technologies.',
    siteName: 'Dao Van Nham Portfolio',
    images: [
      {
        url: '/avatar.png',
        width: 1200,
        height: 630,
        alt: 'Dao Van Nham - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dao Van Nham - Full Stack Developer & Technical Lead',
    description:
      'Experienced Full Stack Developer with 8+ years in web and mobile development. Specialized in React, Next.js, Node.js, and modern JavaScript technologies.',
    site: '@Nhamkin',
    creator: '@Nhamkin',
    images: ['/avatar.png']
  },
  alternates: {
    canonical: 'https://nhamdv.dev'
  },
  category: 'technology',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
  other: {
    'google-site-verification': 'your-google-verification-code-here', // Replace with your actual verification code
    'msvalidate.01': 'your-bing-verification-code-here' // Replace with your actual verification code
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark:bg-gray-900`}
      suppressHydrationWarning
    >
      <body>
        <Provider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </Provider>
      </body>
    </html>
  );
}
