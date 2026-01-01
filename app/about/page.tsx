"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, ShieldCheck, Leaf, BookOpen } from "lucide-react"

export default function About() {
  const { t } = useLanguage()

  const values = [
    { ...t.about.values.transparency, icon: ShieldCheck },
    { ...t.about.values.sustainability, icon: Leaf },
    { ...t.about.values.community, icon: Eye },
    { ...t.about.values.education, icon: BookOpen },
  ]

  return (
    <div className="flex flex-col gap-24 py-16">
      {/* Page Header */}
      <section className="container mx-auto px-4 text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t.about.title}</h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Story & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">{t.about.story.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.about.story.content}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">{t.about.vision.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.about.vision.content}</p>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="/rural-bangladesh-community-gathering.jpg"
              alt="Our Community"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.about.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-sm h-full hover:shadow-md transition-shadow">
                <CardContent className="p-8 space-y-4 text-center flex flex-col items-center">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary mb-2">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
