'use client'

import { AuthProvider } from '@/contexts/AuthContext'
import Sidebar from '@/components/Sidebar'
import RightSidebar from '@/components/RightSidebar'
import cn from 'classnames'

export default function MainLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background font-sans antialiased justify-center">
      {/* 전체 컨테이너 */}
      <div className="flex flex-shrink-0">
        {/* 좌측 사이드바: 240px 고정 */}
        <Sidebar />
        
        {/* 메인 콘텐츠: 960px 고정 */}
        <main className="flex-shrink-0 w-[960px]">
          <AuthProvider>
            {children}
          </AuthProvider>
        </main>

        {/* 우측 사이드바: 240px 고정, 1024px 이상에서만 표시 */}
        <aside 
          className="hidden lg:flex h-screen flex-col space-y-6 bg-background border-l p-4 w-[240px] flex-shrink-0"
        >
          <RightSidebar />
        </aside>

        {/* 우측 여백: 1440px부터 480px 고정 너비로 표시 */}
        <div className="hidden xl-1440:block h-screen bg-background w-[480px] flex-shrink-0" />
      </div>
    </div>
  )
}
