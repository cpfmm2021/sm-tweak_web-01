'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useAuthContext } from '@/contexts/AuthContext'

export default function AuthButton() {
  const router = useRouter()
  const { user, signOut } = useAuthContext()

  const handleAuthAction = async () => {
    if (user) {
      await signOut()
      router.push('/')  // 로그아웃 후 홈페이지로 이동
    } else {
      router.push('/sso')
    }
  }

  return (
    <Button onClick={handleAuthAction}>
      {user ? '로그아웃' : '로그인/회원가입'}
    </Button>
  )
}

