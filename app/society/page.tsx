"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users2, GraduationCap, HandHeart } from "lucide-react"
import Link from "next/link"

export default function Society() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-24 py-16">
      {/* Page Header */}
      <section className="container mx-auto px-4 text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t.society.title}</h1>
        <p className="text-xl text-muted-foreground">{t.society.subtitle}</p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Advisory & Organizing Committees */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Advisory */}
          <Card className="border-none bg-muted/30 shadow-none p-4 h-full">
            <CardHeader className="space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <GraduationCap className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-bold">{t.society.advisory.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.society.advisory.description}</p>
            </CardContent>
          </Card>

          {/* Organizing */}
          <Card className="border-none bg-primary/5 shadow-none p-4 h-full">
            <CardHeader className="space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Users2 className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-bold">{t.society.organizing.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.society.organizing.description}</p>
              <div className="mt-8 p-6 bg-background rounded-2xl border border-primary/20 italic text-primary font-medium">
                "We have no president or vice president. Instead, we believe in collective responsibility and teamwork."
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary/90 rounded-[3rem] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <HandHeart className="h-16 w-16 mx-auto opacity-80" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{t.society.join.title}</h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">{t.society.join.description}</p>
            <Button size="lg" variant="secondary" className="rounded-full px-12 text-lg font-bold" asChild>
              <Link href="/contact">{t.society.join.button}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
