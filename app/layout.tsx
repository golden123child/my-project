import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/context/theme-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wuraola Folajimi | Systems Architecture Portfolio',
  description:
    'Large-scale portfolio platform showcasing systems architecture, product engineering, and founder-level strategy.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen px-4 pb-16 pt-28 md:px-8">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
