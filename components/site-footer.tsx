import { Mail, ExternalLink, Star } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const REPOS = ['acarter/cube-solver', 'acarter/guess-who', 'acarter/nebula', 'acarter/improvement-tree']

export function SiteFooter() {
  return (
    <footer id="download" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Have a project in mind?{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let’s build something 
            </span>{' '}
            useful.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
       I build modern web applications, database-driven systems and business solutions that solve real problems.
          </p>
        </div>

        <p className="mt-12 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          My Services
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/40 px-5 py-4">
            <span className="flex items-center gap-3 text-sm font-medium">
               Start a conversation
            </span>
            <button className="rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
              To Build a project,
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/40 px-5 py-4">
            <span className="flex items-center gap-3 text-sm font-medium">
              What I do
            </span>
            <a href="#" className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
              Services  <ExternalLink className="size-3.5" />
            </a>
          </div>

          <div className="rounded-xl border border-border bg-background/40 px-5 py-4">
            <span className="flex items-center gap-3 text-sm font-medium">
              <Star className="size-5" /> My Projecta 
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {REPOS.map((r) => (
                <a
                  key={r}
                  href="#"
                  className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground transition hover:text-foreground"
                >
                  {r}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-5 py-4 text-sm font-medium text-muted-foreground">
            <Star className="size-5" />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
              AC
            </span>
            • © 2026 Shoaib Akhter. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/ShoaibAkhter-434" aria-label="GitHub" className="transition hover:text-foreground"><GithubIcon className="size-5" /></a>
            <a href="https://www.linkedin.com/in/shoaib-sanpal/" aria-label="LinkedIn" className="transition hover:text-foreground"><LinkedinIcon className="size-5" /></a>
            <a href="mailto:shoaibakhter123abc@gmail.com" aria-label="Email" className="transition hover:text-foreground"><Mail className="size-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
