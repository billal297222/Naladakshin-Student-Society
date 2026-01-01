"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Wheat, MessageSquareText, Lightbulb, MapPin } from "lucide-react"

export default function Agriculture() {
  const { t } = useLanguage()

  const tips = [
    {
      title: "Soil Preparation",
      content: "Ensure proper plowing and use organic compost for the upcoming seasonal crops in Cumilla soil.",
    },
    {
      title: "Pest Management",
      content: "Use natural neem-based solutions for early-stage pest control in rice paddies.",
    },
    {
      title: "Water Management",
      content: "Plan for efficient irrigation schedules during the dry season to maximize yield.",
    },
  ]

  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="container mx-auto px-4 text-center space-y-6">
        <div className="mx-auto h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
          <Wheat className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t.agriculture.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.agriculture.subtitle}</p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Intro & Info */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-muted/30 p-8 rounded-[2rem]">
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg leading-relaxed">{t.agriculture.intro}</p>
          </div>
          <div className="bg-background p-6 rounded-2xl shadow-sm space-y-4 border border-border/50">
            <div className="flex items-center gap-2 text-primary font-bold">
              <MapPin className="h-5 w-5" />
              <span>Homna, Cumilla</span>
            </div>
            <p className="text-sm text-muted-foreground">Expert advice tailored for our local village soil.</p>
          </div>
        </div>
      </section>

      {/* Help Desk Form & Tips */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-3">
              <MessageSquareText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{t.agriculture.askQuestion}</h2>
            </div>
            <form className="space-y-6 bg-background p-8 rounded-3xl border border-border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>{t.agriculture.form.name}</Label>
                  <Input placeholder="আব্দুর রহিম" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>{t.agriculture.form.phone}</Label>
                  <Input placeholder="01700-000000" className="rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>{t.agriculture.form.village}</Label>
                <Input placeholder="নালাদক্ষিণ" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>{t.agriculture.form.question}</Label>
                <Textarea className="rounded-xl min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full font-bold">
                {t.agriculture.form.submit}
              </Button>
            </form>
          </div>

          {/* Tips Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">{t.agriculture.tips.title}</h2>
            </div>
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <Card key={index} className="border-none bg-primary/5 hover:bg-primary/10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip.content}</p>
                  </CardContent>
                </Card>
              ))}
              <div className="p-6 bg-muted/50 rounded-2xl border border-dashed border-border text-center">
                <p className="text-sm text-muted-foreground">{t.agriculture.tips.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
