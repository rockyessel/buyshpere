import '@/app/styles/globals.css';
import { Inter } from 'next/font/google';
import ThemeContextProvider from '../contexts/theme';
import { Navbar, PageWrapper } from '@/app/components';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Buysphere',
  description:
    'Correct the inability to style clickable types in iOS and Safari.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Navbar />
        <ThemeContextProvider>
          <PageWrapper>{children}</PageWrapper>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
