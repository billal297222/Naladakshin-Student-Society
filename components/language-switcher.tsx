"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-8 px-3"
      >
        English
      </Button>
      <Button
        variant={language === "bn" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("bn")}
        className="h-8 px-3"
      >
        বাংলা
      </Button>
    </div>
  )
}
