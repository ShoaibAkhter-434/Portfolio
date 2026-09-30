'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun, Calendar, Download } from 'lucide-react'

const LINKS = ['Home', 'About', 'Projects', 'Skills', 'Other']

export function SiteNav() {
  const [active, setActive] = useState('Home')
  const [light, setLight] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
  }, [light])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setLight((v) => !v)}
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground backdrop-blur-md transition hover:bg-card"
        >
          {light ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-card/60 p-1.5 backdrop-blur-md md:flex">
          {LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActive(link)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === link
                  ? 'bg-foreground/10 text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="/Shoaib_Akhter_Resume.docx.pdf"
          download="Shoaib_Akhter_Resume.pdf"
          className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition hover:bg-card"
        >
          <Download className="size-4" />
          <span className="hidden sm:inline">Download CV</span>
        </a>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition hover:bg-card"
        >
          <Calendar className="size-4" />
          <span className="hidden sm:inline">Book a Call</span>
        </button>
      </div>
    </header>
  )
}
