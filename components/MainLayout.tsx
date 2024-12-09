'use client'

import { AuthProvider } from '@/contexts/AuthContext'
import Sidebar from '@/components/Sidebar'
import RightSidebar from '@/components/RightSidebar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen justify-center">
        <div className="flex w-full max-w-[1440px]">
          {/* 좌측 사이드바: 항상 240px */}
          <Sidebar />
          
          {/* 컨텐츠 영역 */}
          <div className="ml-[240px] w-[960px] max-w-[calc(100%-240px)]">
            {children}
          </div>

          {/* 우측 사이드바: 1080px 이상에서만 표시, 1440px 이상일 때 우측 여백 생성 */}
          <div className="w-[240px] fixed hidden lg:block" style={{
            right: 'max(240px, calc((100vw - 1440px)/2 + 240px))'
          }}>
            <RightSidebar />
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}
