"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"

interface User {
  userId: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (token: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing token on mount
    const token = Cookies.get("auth-token")
    if (token) {
      try {
        const decoded = jwtDecode<User>(token)
        setUser(decoded)
      } catch (error) {
        console.error("Invalid token:", error)
        Cookies.remove("auth-token")
      }
    }
    setLoading(false)
  }, [])

  const login = (token: string) => {
    try {
      const decoded = jwtDecode<User>(token)
      setUser(decoded)
      Cookies.set("auth-token", token, { expires: 7 })
    } catch (error) {
      console.error("Invalid token:", error)
    }
  }

  const logout = () => {
    setUser(null)
    Cookies.remove("auth-token")
    router.push("/")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
