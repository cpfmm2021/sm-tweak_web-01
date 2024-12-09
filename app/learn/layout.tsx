import MainLayoutClient from '@/components/MainLayoutClient'

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background font-sans antialiased">
      {/* 전체 컨테이너 */}
      <div className="flex">
        {/* 좌측 사이드바: 240px 고정 */}
        {/* <aside className="flex-shrink-0 w-[240px] h-screen bg-background border-r">
        </aside> */}

        {/* 메인 콘텐츠: 최대 960px */}
        <main className="flex-grow max-w-[960px] h-screen bg-background">
          {children}
        </main>

        {/* 우측 여백: 1441px부터 표시, 크기 조정 */}
        <div className="hidden xl-1441:block h-screen bg-background flex-shrink-0" style={{ width: `calc(100vw - 1440px)` }} />
      </div>
    </div>
  )
}
