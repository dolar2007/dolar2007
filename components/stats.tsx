import { Star } from "lucide-react"

const stats = [
  { value: "15+", label: "Let zkušeností" },
  { value: "5000+", label: "Spokojených klientek" },
  { value: "4.9", label: "Hodnocení", icon: true },
  { value: "20+", label: "Služeb" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl font-bold text-primary lg:text-4xl">
                  {stat.value}
                </span>
                {stat.icon && (
                  <Star className="h-6 w-6 fill-primary text-primary" />
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
