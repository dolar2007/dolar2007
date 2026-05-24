const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&auto=format&fit=crop&q=80",
    alt: "Ošetření pleti",
  },
  {
    src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&auto=format&fit=crop&q=80",
    alt: "Lash lifting výsledek",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80",
    alt: "Manikúra gelová",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&auto=format&fit=crop&q=80",
    alt: "Pedikúra",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&auto=format&fit=crop&q=80",
    alt: "Masáž",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&auto=format&fit=crop&q=80",
    alt: "Make-up",
  },
]

export function Gallery() {
  return (
    <section id="galerie" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Galerie
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Podívejte se na ukázky naší práce.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
