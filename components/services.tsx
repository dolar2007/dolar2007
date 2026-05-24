import { Sparkles, Diamond, Leaf, FlaskConical, Droplets, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Sparkles,
    title: "Hloubkové čištění pleti",
    description: "Komplexní ošetření přizpůsobené na míru potřebám vaší pleti. Zahrnuje čištění, peeling, masáž a masku.",
  },
  {
    icon: Diamond,
    title: "Diamond microdermabraze",
    description: "Neinvazivní metoda pro obnovu pleti. Odstraňuje odumřelé buňky a podporuje regeneraci.",
  },
  {
    icon: Leaf,
    title: "Ošetření akné",
    description: "Specializované ošetření pro problematickou pleť. Profesionální péče o mladistvou pleť.",
  },
  {
    icon: FlaskConical,
    title: "Chemický peeling",
    description: "Hloubková obnova pleti pomocí profesionálních kyselin. Rovnoměrný tón a textura pleti.",
  },
  {
    icon: Droplets,
    title: "Depilace cukrovou pastou",
    description: "Šetrná metoda odstraňování chloupků. Hladká pokožka bez podráždění.",
  },
  {
    icon: Heart,
    title: "Přizpůsobená péče",
    description: "Individuální přístup - vyhodnotíme typ pleti, roční období a vaše preference.",
  },
]

export function Services() {
  return (
    <section id="sluzby" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Naše služby
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Specializujeme se na přizpůsobená ošetření pleti. Naši kosmetičky vyhodnotí váš typ pleti a doporučí vhodnou péči s produkty značky Renew.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
