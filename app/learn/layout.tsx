'use client'

import MainLayoutClient from '@/components/MainLayoutClient'
import Sidebar from '@/components/Sidebar'
import RightSidebar from '@/components/right-sidebar'

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MainLayoutClient>
      <div className="flex h-screen">
        {/* 좌측 사이드바: 240px 고정 */}
        <Sidebar />

        {/* 메인 콘텐츠: 최대 960px, 화면 크기에 따라 자동 조절 */}
        <main 
          className="flex-1 min-w-0 overflow-auto"
          style={{ maxWidth: '960px' }}
        >
          {children}
        </main>

        {/* 우측 사이드바: 360px 고정, 1024px 이상에서만 표시 */}
        <aside className="hidden lg:flex h-screen flex-col space-y-6 bg-background border-l p-4 w-[360px] flex-shrink-0 flex-grow-0">
          <RightSidebar />
        </aside>

        {/* 우측 여백: 1441px부터 표시, 크기 조정 */}
        <div className="hidden xl-1441:block h-screen bg-background flex-shrink-0" style={{ width: `calc(100vw - 1440px)` }} />
      </div>
    </MainLayoutClient>
  )
}
