"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/translations"

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-border py-8 sm:py-10 md:py-12 bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h4 className="font-bold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.buyChallenge}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.tradingCompetition}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.pricing}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.blog}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.termsOfUse}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.faq}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t.footer.support}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.helpCenter}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.community}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t.footer.status}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
