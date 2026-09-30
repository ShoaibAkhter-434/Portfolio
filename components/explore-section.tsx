import { BookOpen, Trophy, Link2 } from 'lucide-react'

const CARDS = [
  {
    icon: BookOpen,
    title: 'Guestbook',
    href: '/guestbook',
    desc: 'Leave your mark and see what others have to say',
    color: 'text-primary',
    ring: 'group-hover:border-primary/60',
  },
  {
    icon: Trophy,
    title: 'Achievements',
    href: '/achievements',
    desc: 'Milestones, certifications, and accomplishments',
    color: 'text-amber-400',
    ring: 'group-hover:border-amber-400/60',
  },
  {
    icon: Link2,
    title: 'My Links',
    href: '/links',
    desc: 'Find me across the web and social platforms',
    color: 'text-sky-400',
    ring: 'group-hover:border-sky-400/60',
  },
]

export function ExploreSection() {
  return (
    <section id="other" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          More to{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Explore
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground">
          Check out these additional resources and connect with me
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {CARDS.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className={`explore-card group rounded-2xl border border-border bg-card/40 p-8 transition duration-500 hover:-translate-y-2 hover:scale-[1.025] hover:bg-card hover:shadow-[0_20px_55px_-28px_rgba(168,85,247,0.85)] ${c.ring}`}
          >
            <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-background/50 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              <c.icon className={`size-6 transition duration-500 group-hover:scale-110 ${c.color}`} />
            </span>
            <h3 className={`mt-5 text-xl font-bold ${c.color}`}>{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary">Explore →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
