import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pedro Azevedo Website CV',
  description: 'A CV website for Pedro Azevedo created using Next.js and shadcn/ui',
  icons: {
    icon: 'favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
        <Toaster />
        <Analytics/>
        <SpeedInsights />
      </body>
    </html>
  );
}
