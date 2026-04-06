import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MERNSTACKSTUDIO — Premium Digital Experiences',
  description:
    'We craft cinematic, high-performance digital products for ambitious brands. MERN product design and development that defies gravity.',
  openGraph: {
    title: 'MERNSTACKSTUDIO — Premium Digital Experiences',
    description:
      'Cinematic digital products for ambitious brands. Strategy, design, and engineering that earns trust from the first scroll.',
    type: 'website',
    locale: 'en_US',
    siteName: 'MERNSTACKSTUDIO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MERNSTACKSTUDIO — Premium Digital Experiences',
    description:
      'Cinematic digital products for ambitious brands.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
