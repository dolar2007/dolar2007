"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresa",
    content: ["V Olšinách 65", "100 00 Praha"],
  },
  {
    icon: Phone,
    title: "Telefon",
    content: ["+420 608 932 157"],
  },
  {
    icon: Mail,
    title: "E-mail",
    content: ["roksana.kozlovska@icloud.com"],
  },
  {
    icon: Clock,
    title: "Otevírací doba",
    content: ["Po - Pá: 9:00 - 21:00", "So - Ne: Dle dohody"],
  },
]

export function Contact() {
  return (
    <section id="kontakt" className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center lg:text-left">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Kontaktujte nás
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Máte dotazy nebo si chcete rezervovat termín? Neváhejte nás kontaktovat telefonicky, e-mailem nebo nás navštivte přímo v salonu.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="grid gap-8 sm:grid-cols-2">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  {item.content.map((line, i) => (
                    <p key={i} className="text-sm text-primary-foreground/80">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-background p-6 text-foreground lg:p-8">
            <h3 className="font-serif text-xl font-semibold">Ozvěte se nám</h3>
            <form className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Jméno</Label>
                <Input id="name" placeholder="Vaše jméno" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="vas@email.cz" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" placeholder="+420" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Zpráva</Label>
                <Textarea id="message" placeholder="Vaše zpráva..." rows={4} />
              </div>
              <Button type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90">
                Odeslat zprávu
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
