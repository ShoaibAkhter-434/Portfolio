const CARDS = [
  {
    tag: 'Full-Stack Developer',
    body: 'I build modern, database-driven web applications using ASP.NET Core, C#, SQL Server, ADO.NET, Stored Procedures, HTML, CSS, JavaScript and Bootstrap..',
    image:
      'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'Backend & Database',
    body: 'My backend work focuses on ASP.NET Core and C#, with hands-on experience building SQL Server solutions using Stored Procedures, ADO.NET, CRUD operations and business logic.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'Real-World Projects',
    body: 'I have worked on practical business applications including real estate management, rental agreements, inventory systems and administrative dashboards.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
]

export function AboutCards() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-foreground">
        Hover to read more
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {CARDS.map((c) => (
          <div
            key={c.tag}
            className="group relative isolate overflow-hidden rounded-[2rem] border border-border bg-card/40 p-0 shadow-[0_0_26px_-18px_rgba(168,85,247,0.75)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/50"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(15, 15, 25, 0.18), rgba(15, 15, 25, 0.8)), url('${c.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative flex min-h-[260px] flex-col justify-between p-6">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent opacity-80" />

              <div className="relative flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                  {c.tag}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white/70">
                  info
                </span>
              </div>

              <div className="relative mt-14 overflow-hidden">
                <p className="text-pretty text-sm leading-relaxed text-white/80 transition-all duration-500 group-hover:translate-y-[-130%] group-hover:opacity-0">
                  {c.body}
                </p>
                <p className="pointer-events-none absolute inset-0 translate-y-5 opacity-0 text-pretty text-sm leading-relaxed text-white transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {c.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
