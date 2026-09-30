'use client'

import { useState } from 'react'
import { X, ArrowDown } from 'lucide-react'

export function FreeTemplatePopup() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <a
      href="#download"
      className="fixed right-4 top-24 z-40 hidden w-[19rem] rounded-2xl border border-primary/40 bg-popover/90 p-5 shadow-[0_0_40px_-8px] shadow-primary/40 backdrop-blur-md lg:block"
      style={{ animation: 'float-in 0.5s ease-out' }}
    >
      <button
        type="button"
        aria-label="Close free template popup"
        onClick={(e) => {
          e.preventDefault()
          setOpen(false)
        }}
        className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full bg-foreground/10 text-muted-foreground transition hover:text-foreground"
      >
        <X className="size-3.5" />
      </button>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">My Services </p>
      <p className="mt-2 text-[15px] font-medium leading-snug text-foreground">
        Want any services or contact me 
      </p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Go to Services 
        <ArrowDown className="size-3.5" />
      </span>
    </a>
  )
}
