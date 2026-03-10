import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Ferrymano | Crypto Data Analyst & Tokenomics Specialist',
    template: '%s | Ferrymano',
  },
  description:
    'On-chain analytics, tokenomics research та dashboard-driven insights для протоколів, фондів і DAO. Дані говорять — я перекладаю їх мовою рішень.',
  keywords: [
    'crypto data analyst',
    'tokenomics specialist',
    'on-chain analytics',
    'DeFi research',
    'blockchain analytics',
    'Web3 analyst',
    'Dune Analytics',
    'token economics',
  ],
  authors: [{ name: 'Ferrymano' }],
  metadataBase: new URL('https://ferrymano.top'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ferrymano.top',
    siteName: 'Ferrymano',
    title: 'Ferrymano | Crypto Data Analyst & Tokenomics Specialist',
    description:
      'On-chain analytics, tokenomics research та dashboard-driven insights для протоколів, фондів і DAO.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrymano | Crypto Data Analyst',
    description: 'On-chain analytics, tokenomics research і dashboard-driven insights для Web3.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
