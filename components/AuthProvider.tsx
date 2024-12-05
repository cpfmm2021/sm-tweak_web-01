'use client'

import { ReactNode, useEffect, useState } from 'react'
import { auth } from '@/lib/firebase'

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (auth) {
      const unsubscribe = auth.onAuthStateChanged(() => {
        setIsInitialized(true)
      })

      return () => unsubscribe()
    } else {
      setIsInitialized(true)
    }
  }, [])

  if (!isInitialized) {
    return null // or a loading spinner
  }

  return <>{children}</>
}
