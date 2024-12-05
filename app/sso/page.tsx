'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAuthContext } from '@/contexts/AuthContext'
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft } from 'lucide-react'

export default function SSOPage() {
const router = useRouter()
const { user, signIn, clearAuthState, loading } = useAuthContext()

useEffect(() => {
  clearAuthState()
}, [clearAuthState])

useEffect(() => {
  if (user && !loading) {
    console.log("User authenticated, redirecting to /learn")
    router.push('/learn')
  }
}, [user, loading, router])

const handleGoogleSignIn = async () => {
  try {
    await signIn()
    // 로그인 성공 후 강제로 페이지 새로고침
    window.location.href = '/learn'
  } catch (error) {
    console.error('로그인 오류:', error)
  }
}

if (loading) {
  return <div>로딩 중...</div>
}

return (
  <div className="min-h-screen w-full relative bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
    <Button
      variant="ghost"
      className="absolute top-4 left-4 text-white hover:bg-white/20 p-4"
      onClick={() => router.push('/')}
    >
      <ChevronLeft className="h-12 w-12" />
    </Button>
    <div className="w-full max-w-md px-4 py-8 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Tweak과 함께<br />여정을 시작하세요!
      </h1>
      <div className="space-y-4">
        <button
          className="w-full h-14 rounded-full flex items-center justify-center transition-colors"
          onClick={() => {/* Apple SSO 처리 */}}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SSO-Button-Kit-(Community)-BpzChXErNmUEWlAAClo1xoE21p9uX2.png"
            alt="Continue with Apple"
            width={280}
            height={56}
            className="h-14 w-auto"
          />
        </button>
        <button
          className="w-full h-14 rounded-full flex items-center justify-center transition-colors"
          onClick={handleGoogleSignIn}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SSO-Button-Kit-(Community)-lItkuYZxgwdZptTbIIe4Cc0LO09fzB.png"
            alt="Continue with Google"
            width={280}
            height={56}
            className="h-14 w-auto"
          />
        </button>
      </div>
    </div>
  </div>
)
}
