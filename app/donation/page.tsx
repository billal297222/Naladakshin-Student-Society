"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2, CreditCard, Landmark, Smartphone, Wallet } from "lucide-react"

export default function Donation() {
  const { t } = useLanguage()
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    project: "",
    amount: "",
    customAmount: "",
    paymentMethod: "",
    name: "",
    email: "",
    phone: "",
    transactionId: "",
    message: "",
  })

  const amounts = ["১০০", "৫০০", "১০০০", "২০০০", "৫০০০"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-xl mx-auto space-y-8 bg-primary/5 p-12 rounded-[3rem] border border-primary/20">
          <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{t.donation.thanks.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.donation.thanks.message}</p>
          </div>
          <Button size="lg" className="rounded-full px-12" onClick={() => setSubmitted(false)}>
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Header */}
      <section className="container mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t.donation.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.donation.subtitle}</p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Intro */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto p-8 bg-muted/30 rounded-3xl border-l-4 border-primary">
          <p className="text-lg text-muted-foreground italic leading-relaxed">{t.donation.intro}</p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="container mx-auto px-4 pb-24">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            {/* Step 1: Project & Amount */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Label className="text-xl font-bold">{t.donation.selectProject}</Label>
                <RadioGroup
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  onValueChange={(v) => setFormData({ ...formData, project: v })}
                >
                  <Label className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="environment" />
                    <span>{t.home.wings.environment.title}</span>
                  </Label>
                  <Label className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="education" />
                    <span>{t.home.wings.education.title}</span>
                  </Label>
                  <Label className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="infrastructure" />
                    <span>{t.home.wings.infrastructure.title}</span>
                  </Label>
                  <Label className="flex items-center gap-3 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="agriculture" />
                    <span>{t.home.wings.agriculture.title}</span>
                  </Label>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label className="text-xl font-bold">{t.donation.selectAmount}</Label>
                <div className="grid grid-cols-3 gap-3">
                  {amounts.map((amt) => (
                    <Button
                      key={amt}
                      type="button"
                      variant={formData.amount === amt ? "default" : "outline"}
                      className="rounded-xl h-12 text-lg"
                      onClick={() => setFormData({ ...formData, amount: amt, customAmount: "" })}
                    >
                      ৳{amt}
                    </Button>
                  ))}
                  <div className="col-span-3">
                    <Input
                      placeholder={t.donation.customAmount}
                      value={formData.customAmount}
                      onChange={(e) => setFormData({ ...formData, customAmount: e.target.value, amount: "" })}
                      className="rounded-xl h-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="space-y-4">
              <Label className="text-xl font-bold">{t.donation.paymentMethod}</Label>
              <RadioGroup
                className="grid grid-cols-3 gap-4"
                onValueChange={(v) => setFormData({ ...formData, paymentMethod: v })}
              >
                <Label className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer text-center">
                  <RadioGroupItem value="bkash" className="sr-only" />
                  <Smartphone className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">{t.donation.bkash}</span>
                </Label>
                <Label className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer text-center">
                  <RadioGroupItem value="nagad" className="sr-only" />
                  <Wallet className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">{t.donation.nagad}</span>
                </Label>
                <Label className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer text-center">
                  <RadioGroupItem value="rocket" className="sr-only" />
                  <Landmark className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">{t.donation.rocket}</span>
                </Label>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-8">
            {/* Payment Instructions */}
            <Card className="border-none bg-primary/5 shadow-none overflow-hidden">
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  {t.donation.manual.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold">{t.donation.manual.step1}</p>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="p-3 bg-background rounded-lg border flex justify-between items-center">
                      <span className="font-bold">bKash (Merchant):</span>
                      <span className="font-mono text-primary font-bold">01700-000000</span>
                    </div>
                    <div className="p-3 bg-background rounded-lg border flex justify-between items-center">
                      <span className="font-bold">Nagad (Personal):</span>
                      <span className="font-mono text-primary font-bold">01900-000000</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>{t.donation.manual.step2}</li>
                  <li>{t.donation.manual.step3}</li>
                  <li>{t.donation.manual.step4}</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Details */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label>{t.donation.form.name}</Label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{t.donation.form.email}</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{t.donation.form.phone}</Label>
                    <Input
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-primary font-bold">{t.donation.form.transactionId}</Label>
                  <Input
                    required
                    placeholder="e.g. 8N7K9L2M"
                    value={formData.transactionId}
                    onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                    className="rounded-xl border-primary/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t.donation.form.message}</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl min-h-[100px]"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full text-lg font-bold">
                {t.donation.form.submit}
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
