'use client'

import { usePathname, useRouter } from 'next/navigation'
import Sidebar from '@/components/sidebar'
import RightSidebar from '@/components/right-sidebar'
import { useAuthContext } from '@/contexts/AuthContext'
import { useEffect } from 'react'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, loading } = useAuthContext()

  const isPublicPage = pathname === '/' || pathname === '/sso'

  useEffect(() => {
    if (!loading) {
      if (!user && !isPublicPage) {
        router.push('/sso')
      } else if (user && isPublicPage) {
        router.push('/learn')
      }
    }
  }, [user, loading, isPublicPage, router])

  if (loading) {
    return <div>로딩 중...</div>
  }

  if (isPublicPage) {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-grow overflow-auto">
        {children}
      </main>
      <RightSidebar />
    </div>
  )
}
