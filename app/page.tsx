"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TreePine, BookOpen, Bold as Road, Wheat, ShieldCheck, Users, HeartHandshake, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const { t } = useLanguage()

  const stats = [
    { label: t.home.stats.donations, value: "৳৫,০০,০০০+", icon: HeartHandshake },
    { label: t.home.stats.trees, value: "১,৫০০+", icon: TreePine },
    { label: t.home.stats.students, value: "৩০০+", icon: BookOpen },
    { label: t.home.stats.projects, value: "৪", icon: CheckCircle2 },
  ]

  const wings = [
    {
      ...t.home.wings.environment,
      icon: TreePine,
      color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      ...t.home.wings.education,
      icon: BookOpen,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      ...t.home.wings.infrastructure,
      icon: Road,
      color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      ...t.home.wings.agriculture,
      icon: Wheat,
      color: "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400",
    },
  ]

  const trustPoints = [
    t.home.trust.transparency,
    t.home.trust.community,
    t.home.trust.nonprofit,
    t.home.trust.volunteer,
    t.home.trust.accountable,
  ]

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/lush-green-village-landscape-bangladesh.jpg"
            alt="Naladakshin Landscape"
            className="h-full w-full object-cover brightness-50"
          />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">{t.home.hero.headline}</h1>
            <p className="text-lg text-white/90 sm:text-xl text-pretty leading-relaxed">{t.home.hero.subheadline}</p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 text-lg" asChild>
                <Link href="/donation">{t.home.hero.donateBtn}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"
                asChild
              >
                <Link href="/about">{t.home.hero.learnBtn}</Link>
              </Button>
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-white/70 pt-8 border-t border-white/10">
              {t.home.hero.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 space-y-2 border-r last:border-r-0 border-border/50"
            >
              <stat.icon className="h-8 w-8 text-primary mb-2" />
              <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Wings (Projects) */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.home.wings.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.home.wings.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wings.map((wing, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-sm bg-muted/30">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="p-8 space-y-4 flex-grow">
                  <div className={`inline-flex p-3 rounded-2xl ${wing.color}`}>
                    <wing.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{wing.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{wing.description}</p>
                </div>
                <div className="px-8 pb-8">
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold" asChild>
                    <Link href="/donation">{t.home.hero.donateBtn} →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Trust NSS */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.home.trust.title}</h2>
              <div className="space-y-4">
                {trustPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background shadow-sm border border-border/50"
                  >
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="/bangladeshi-students-studying-together-village.jpg" alt="Community effort" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold uppercase tracking-widest text-sm">Community Led</span>
                  </div>
                  <p className="text-lg font-medium">Over 50+ active student volunteers in Naladakshin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[2rem] p-8 md:p-16 text-center text-primary-foreground space-y-8 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Ready to make a difference?</h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Join our community of supporters and help us build a more sustainable future for the students and farmers
              of Naladakshin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="rounded-full px-10 text-lg font-bold" asChild>
                <Link href="/donation">{t.home.hero.donateBtn}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 text-lg font-bold border-primary-foreground/20 hover:bg-white/10 text-primary-foreground bg-transparent"
                asChild
              >
                <Link href="/contact">{t.nav.contact}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
