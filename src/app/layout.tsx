import '@/styles/globals.css'
import { ReduxProvider } from '@/providers/ReduxProvider'
import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rahbord Hooshmand Test App',
  description: 'This is a product list and user app.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
