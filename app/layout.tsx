import type { Metadata } from 'next/types';
import localFont from 'next/font/local';
import Provider from './provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio and Resume of Dao Van Nham',
  description: 'Portfolio and Resume of Dao Van Nham',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ]
  }
};

const sfProDisplay = localFont({
  src: [
    {
      path: '../public/fonts/sf-pro-display_regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-display_medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-display_semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-display_bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-display',
  display: 'swap',
});

const sfProText = localFont({
  src: [
    {
      path: '../public/fonts/sf-pro-text_light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-text_regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-text_medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/sf-pro-text_semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-text',
  display: 'swap',
});

const sfProIcons = localFont({
  src: '../public/fonts/sf-pro-icons_light.woff2',
  variable: '--font-sf-pro-icons',
  display: 'swap',
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sfProDisplay.variable} ${sfProText.variable} ${sfProIcons.variable} antialiased dark:bg-gray-900`}
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
