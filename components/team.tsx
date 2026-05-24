const teamMembers = [
  {
    name: "Roksana Kozlovska",
    role: "Zakladatelka & Kosmetička",
    description: "Více než 15 let zkušeností v kosmetice. Specializuje se na ošetření pleti a make-up.",
    image: "",
  },
  {
    name: "Petra Svobodová",
    role: "Kosmetička",
    description: "Specialistka na lash lifting a brow design. Certifikovaná brow stylistka.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "Markéta Dvořáková",
    role: "Nehty & Masáže",
    description: "Profesionální nehtová specialistka a masérka. Vždy perfektní výsledky.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&auto=format&fit=crop&q=80",
  },
]

export function Team() {
  return (
    <section id="tym" className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Náš tým
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Profesionalita a péče v rukou expertů.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto aspect-square w-48 overflow-hidden rounded-full bg-muted">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/10 text-4xl font-serif text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
