import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import Header from './Header';

const inter = Inter({ subsets: ['latin'] })
const NotoSansJP = Noto_Sans_JP ({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Next.js Memo App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
      <Header></Header>
      {children}
      </body>
    </html>
  )
}
