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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>

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
