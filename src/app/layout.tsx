import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Header } from '@/components/Header';
import { FavoriteWrapper } from '@/context/FavoriteContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marvel test',
  description: 'Marvel technical test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoriteWrapper>
          <Header />
          {children}
        </FavoriteWrapper>
      </body>
    </html>
  );
}
