import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";
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
      <body className="antialiased">
        {children}
        <Toaster
          closeButton
          position="bottom-center"
          className="pointer-events-auto"
          icons={{
            error: <CircleAlert className="size-5 text-red-500" />,
            success: <CircleCheck className="size-5 text-emerald-500" />,
            info: <Info className="size-5 text-blue-500" />,
            warning: <TriangleAlert className="size-5 text-amber-500" />,
          }}
        />
      </body>
    </html>
  );
}
