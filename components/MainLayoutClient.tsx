'use client'

import { AuthProvider } from '@/contexts/AuthContext'
import cn from 'classnames'

export default function MainLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background font-sans antialiased">
      {/* 메인 콘텐츠: 페이지별 레이아웃이 들어갈 자리 */}
      <AuthProvider>
        {children}
      </AuthProvider>
    </div>
  )
}
