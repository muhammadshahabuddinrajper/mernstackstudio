import type { Metadata } from 'next';
import './globals.css';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  title: 'MERNSTACKSTUDIO — Premium Digital Product Agency',
  description:
    'Cinematic engineering for ambitious brands. Strategy, design, and full-stack MERN performance that earns trust from the first scroll.',
  keywords: [
    'MERN Stack', 'Next.js', 'React', 'UI/UX Design', 'SaaS Development',
    'Digital Agency', 'Web Development Pakistan', 'Product Design',
  ],
  openGraph: {
    title: 'MERNSTACKSTUDIO — Premium Digital Product Agency',
    description: 'Cinematic engineering for ambitious brands.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-ink text-white antialiased">
        {/* Film grain noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
