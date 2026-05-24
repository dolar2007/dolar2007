const priceItems = [
  { name: "Hloubkové čištění pleti", duration: "80 min", price: "1 299 Kč" },
  { name: "Diamond microdermabraze", duration: "60 min", price: "999 Kč" },
  { name: "Ošetření akné", duration: "90 min", price: "1 599 Kč" },
  { name: "Chemický peeling", duration: "60 min", price: "1 300 Kč" },
  { name: "Depilace - podpaží", duration: "15 min", price: "200 Kč" },
  { name: "Depilace - brazilská + podpaží", duration: "40 min", price: "500 Kč" },
  { name: "Depilace - celé nohy", duration: "60 min", price: "1 000 Kč" },
]

export function Pricing() {
  return (
    <section id="cenik" className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ceník
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transparentní ceny za profesionální péči o vaši pleť.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
          <div className="divide-y divide-border">
            {priceItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <div>
                  <h4 className="font-medium text-foreground">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.duration}</p>
                </div>
                <span className="text-lg font-semibold text-primary">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            * Ceny jsou konečné a zahrnují DPH. Pro první návštěvu nabízíme 10% slevu.
          </p>
        </div>
      </div>
    </section>
  )
}
