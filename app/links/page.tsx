'use client'

import Link from 'next/link'

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    description: 'See my code, projects, and experiments',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    description: 'Connect professionally and follow my updates',
  },
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    description: 'Reach out for collaborations and opportunities',
  },
]

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-card"
          >
            ← Back to home
          </Link>

          <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Connect With Me
          </div>
        </header>

        <section className="rounded-[2rem] border border-border bg-card/60 p-6 shadow-[0_0_40px_-18px_rgba(168,85,247,0.45)] backdrop-blur-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">My Links</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Find me across the web and social platforms</h1>

          <div className="mt-8 space-y-4">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[1.5rem] border border-border bg-background/50 p-4 transition hover:border-primary/50 hover:bg-background"
              >
                <div>
                  <p className="text-xl font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
                <span className="text-lg font-medium text-primary transition group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
