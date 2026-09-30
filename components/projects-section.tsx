import { Star } from 'lucide-react'

const PROJECTS = [
  {
    n: '01',
    kind: 'Web Application',
    title: 'Real Estate Management System',
    desc: 'A database-driven real estate management system for managing properties, users, listings, and administrative operations through a secure dashboard.',
    tags: ['ASP.NET CORE MVC', 'C#', 'SQL SERVER', 'ADO.NET', 'BOOTSTRAP'],
    gradient: 'from-orange-500 to-amber-400',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
  },
  {
    n: '02',
    kind: 'Web Application',
    title: 'Rental Agreement Management',
    desc: 'A business application for managing rental agreements, tenant information, property details, payments, and agreement records through an organized management interface.',
    tags: ['ASP.NET CORE MVC', 'C#', 'SQL SERVER', 'STORED PROCEDURES', 'ADO.NET', 'BOOTSTRAP'],
    gradient: 'from-emerald-500 to-green-400',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    n: '03',
    kind: 'Business Application',
    title: 'Admin Dashboard',
    desc: 'A responsive administrative dashboard designed to manage application data, users, records, and business operations from a centralized interface.',
    tags: ['ASP.NET CORE MVC', 'C#', 'SQL SERVER', 'ADO.NET', 'BOOTSTRAP'],
    gradient: 'from-fuchsia-500 to-purple-400',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  },
  {
    n: '04',
    kind: 'Business Application',
    title: 'Inventory Management System',
    desc: 'A database-driven inventory system for managing products, stock transactions, purchases, sales, and inventory records with structured business logic.',
    tags: ['ASP.NET CORE MVC', 'C#', 'SQL SERVER', 'STORED PROCEDURES', 'ADO.NET', 'BOOTSTRAP'],
    gradient: 'from-sky-500 to-blue-400',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Portfolio
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Featured{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
          A selection of real-world applications built with modern web technologies, database-driven architecture, and practical business solutions.
        </p>
      </div>

      <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.n} className="project-card group flex flex-col rounded-[2rem] border border-border bg-card/35 p-5 shadow-[0_0_30px_-18px_rgba(168,85,247,0.6)] transition duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-card/55 hover:shadow-[0_24px_70px_-34px_rgba(168,85,247,0.9)] sm:p-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-muted-foreground">{p.n}</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {p.kind}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{p.title}</h3>
              <button className="flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground transition hover:text-foreground">
                <Star className="size-3.5" />
                Star
              </button>
            </div>

            <div className={`mt-5 flex-1 rounded-[1.6rem] bg-gradient-to-br ${p.gradient} p-6`}>
              <p className="text-pretty text-base font-medium leading-snug text-white sm:text-lg">{p.desc}</p>
              <div
                className="project-image mt-6 flex h-48 items-end rounded-[1.2rem] border border-white/15 bg-cover bg-center p-4 text-sm font-medium uppercase tracking-[0.2em] text-white/85 transition duration-700 group-hover:scale-[1.02]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(10, 10, 18, 0.08), rgba(10, 10, 18, 0.82)), url('${p.image}')`,
                }}
              >
                <span>{p.title}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href=""
          className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card"
        >
          Explore all projects on GitHub
        </a>
      </div>
    </section>
  )
}
