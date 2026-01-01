"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                NSS
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Naladakshin Student Society</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.home.hero.mission}</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.nav.home}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/society" className="hover:text-foreground transition-colors">
                  {t.nav.society}
                </Link>
              </li>
              <li>
                <Link href="/donation" className="hover:text-foreground transition-colors">
                  {t.nav.donation}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t.nav.contact}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t.contact.info.locationValue}</li>
              <li>nss@example.com</li>
              <li>+880 1234-567890</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Naladakshin Student Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
