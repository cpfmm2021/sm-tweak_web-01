import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { BookOpen, Library, MoreHorizontal } from 'lucide-react'
import { useAuthContext } from '@/contexts/AuthContext'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()
  const { user, signOut } = useAuthContext()

  const handleSignOut = async () => {
    try {
      await signOut()
      // 로그아웃 후 홈페이지로 리다이렉트
      window.location.href = '/'
    } catch (error) {
      console.error('로그아웃 오류:', error)
    }
  }

  return (
    <aside className="w-64 h-screen bg-background border-r p-4 flex flex-col justify-between">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-primary">Tweak</Link>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {[
            { href: "/", icon: BookOpen, label: "Learn" },
            { href: "/library", icon: Library, label: "Library" },
            { href: "/more", icon: MoreHorizontal, label: "More" }
          ].map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <Button 
                variant="ghost" 
                className={`w-full justify-start ${
                  pathname === href 
                    ? 'bg-[#15C452] text-white border-2 border-[#15C452]' 
                    : ''
                }`}
                asChild
              >
                <Link href={href} style={{ fontSize: '20px' }}>
                  <Icon className="mr-2 h-6 w-6" />
                  {label}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="mb-4 p-4 border-t">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user?.photoURL || ''} />
              <AvatarFallback>{user?.displayName?.[0] || user?.email?.[0] || 'U'}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{user?.displayName || user?.email}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        </div>
        <Button variant="ghost" className="w-full justify-start" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          로그아웃
        </Button>
      </div>
    </aside>
  )
}
