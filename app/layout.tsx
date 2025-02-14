import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio and Resume of Dao Van Nham",
  description: "Portfolio and Resume of Dao Van Nham",
};

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased dark:bg-gray-900">
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Provider>
      </body>
    </html>
  );
}
