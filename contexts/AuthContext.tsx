'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { User } from 'firebase/auth'
import { useAuth } from '@/hooks/useAuth'

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  clearAuthState: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, loading, signIn, signOut, clearAuthState } = useAuth()

  const value = {
    user,
    loading,
    signIn,
    signOut,
    clearAuthState,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

