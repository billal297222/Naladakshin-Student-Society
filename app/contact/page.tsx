"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Heart } from "lucide-react"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-20 py-16">
      {/* Header */}
      <section className="container mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t.contact.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.contact.subtitle}</p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t.contact.info.title}</h2>
              <p className="text-lg text-muted-foreground">{t.contact.intro}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t.contact.info.location}</h3>
                  <p className="text-muted-foreground">{t.contact.info.locationValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t.contact.info.email}</h3>
                  <p className="text-muted-foreground">nss@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t.contact.info.phone}</h3>
                  <p className="text-muted-foreground">+880 1234-567890</p>
                </div>
              </div>
            </div>

            {/* Volunteer Section */}
            <div className="p-8 bg-primary/5 rounded-[2rem] border border-primary/10 space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Heart className="h-6 w-6" />
                <h3 className="text-2xl font-bold">{t.contact.volunteer.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t.contact.volunteer.description}</p>
              <Button className="rounded-full px-8 font-bold" variant="default">
                Register as Volunteer
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background p-8 md:p-12 rounded-[3rem] border border-border shadow-sm h-fit">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label>{t.contact.form.name}</Label>
                <Input required className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label>{t.contact.form.email}</Label>
                <Input type="email" required className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label>{t.contact.form.subject}</Label>
                <Input required className="rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <Label>{t.contact.form.message}</Label>
                <Textarea required className="rounded-xl min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full text-lg font-bold flex gap-2">
                <Send className="h-5 w-5" />
                {t.contact.form.submit}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
