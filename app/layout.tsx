import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import LayoutWrapper from '@/components/LayoutWrapper'
import { notoSansKr } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Tweak Learning Platform',
  description: 'Learn and improve your skills with Tweak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${notoSansKr.variable} font-sans`}>
      <head>
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1133994205573957"
          crossOrigin="anonymous"
        />
        {/* Google AdSense 코드는 여기에 들어갈 예정입니다 */}
      </head>
      <body className={notoSansKr.className}>
        <AuthProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}
