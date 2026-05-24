import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="uvod" className="relative overflow-hidden bg-gradient-to-br from-accent/50 to-background">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Vaše krása, naše péče
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Profesionální kosmetické služby v Praze. Dopřejte si relax a profesionální péči o vaši pleť s produkty značky Renew.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="group rounded-full bg-primary px-6 hover:bg-primary/90">
                Naše služby
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Rezervovat termín
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80"
                alt="Kosmetický salon - ošetření pleti"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
