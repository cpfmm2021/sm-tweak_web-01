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
      <body className={notoSansKr.className}>
        <AuthProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  )
}
