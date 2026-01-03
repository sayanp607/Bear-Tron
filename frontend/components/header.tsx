"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react"
import { Menu, X } from "lucide-react"
import LanguageSelector from "@/components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslation } from "@/lib/translations"
import Cookies from "js-cookie"

export default function Header() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { t } = useTranslation()
  const isAuthenticated = status === "authenticated"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    Cookies.remove("auth-token")
    await signOut({ callbackUrl: "/" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="hidden sm:inline">BearTron</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.home}
          </Link>
          <Link href="#terms" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.termsOfUse}
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.faq}
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            {t.nav.aboutUs}
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-2 items-center">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-muted-foreground hidden xl:inline">
                {t.nav.hi}, {session?.user?.name}
              </span>
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  {t.nav.dashboard}
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                {t.nav.logout}
              </Button>
              <ThemeToggle />
              <LanguageSelector />
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button variant="outline" size="sm">
                  {t.nav.signIn}
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">{t.nav.getStarted}</Button>
              </Link>
              <ThemeToggle />
              <LanguageSelector />
            </>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden gap-2 items-center">
          <ThemeToggle />
          <LanguageSelector />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {/* Navigation Links */}
            <Link
              href="/"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="#terms"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.termsOfUse}
            </Link>
            <Link
              href="#faq"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.faq}
            </Link>
            <Link
              href="#about"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.aboutUs}
            </Link>

            {/* Auth Buttons */}
            <div className="pt-3 border-t border-border space-y-2">
              {isAuthenticated ? (
                <>
                  <span className="block py-2 text-sm text-muted-foreground">
                    {t.nav.hi}, {session?.user?.name}
                  </span>
                  <Link href="/dashboard" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">
                      {t.nav.dashboard}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      handleLogout()
                    }}
                  >
                    {t.nav.logout}
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/signin" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">
                      {t.nav.signIn}
                    </Button>
                  </Link>
                  <Link href="/signup" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="w-full">
                      {t.nav.getStarted}
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
