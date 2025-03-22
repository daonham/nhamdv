import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './provider';
import Ruler from '@/components/ruler';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio and Resume of Dao Van Nham',
  description: 'Portfolio and Resume of Dao Van Nham'
};

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased dark:bg-gray-900`}
      suppressHydrationWarning
    >
      <body>
        <Provider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="relative isolate flex min-h-[100dvh] w-full flex-col items-center overflow-hidden">
            <Ruler />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
