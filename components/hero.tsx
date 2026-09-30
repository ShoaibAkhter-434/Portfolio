'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

const QUICK = ['Work', 'About me', 'Skills', 'Contact']

const ANSWERS: Record<string, string> = {
  Work: ' I build scalable web applications and business systems — from responsive frontend experiences to powerful ASP.NET Core and SQL Server solutions.',

  'About me':
    'I’m a Full-Stack Developer specializing in ASP.NET Core, C#, SQL Server, and modern frontend development. I enjoy building real-world applications with clean interfaces, reliable backend systems, and efficient database solutions.',
  Skills:
    'My core stack spans ASP.NET Core, C#, SQL Server, Stored Procedures, ADO.NET, HTML, CSS, JavaScript, Bootstrap, and React.',
  Contact: 'The fastest way to reach me is the Book a Call button or my links in the footer.',
}

const DEFAULT_ANSWER =
  "Hey there! I'm just here to help showcase Shoaib's work and projects. How can I assist you today?"

export function Hero() {
  const [value, setValue] = useState('')
  const [answer, setAnswer] = useState('')
  const [isAnswering, setIsAnswering] = useState(false)

  function ask(q: string) {
    const question = q.trim()
    if (!question) return

    const matchedAnswer = ANSWERS[question] ?? ANSWERS[question[0].toUpperCase() + question.slice(1).toLowerCase()]
    setIsAnswering(true)
    setAnswer('')
    setValue('')

    window.setTimeout(() => {
      setAnswer(
        matchedAnswer ??
          DEFAULT_ANSWER,
      )
      setIsAnswering(false)
    }, 450)
  }

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center px-4 pb-20 pt-28 sm:pt-32">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative size-28 overflow-hidden rounded-full border border-border bg-card/80 shadow-[0_0_30px_rgba(168,85,247,0.35)] ring-8 ring-primary/5 sm:size-32">
          <Image src="/shoaib.png" alt="Shoaib Akhter avatar" fill className="object-cover" priority />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Full Stack Developer
        </p>

        <h1 className="mt-5 text-balance text-center text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-primary via-violet-300 to-accent bg-clip-text text-transparent">
            Shoaib Akhter
          </span>
        </h1>

        <div className="mt-8 flex w-full max-w-2xl flex-col rounded-[2rem] border border-border bg-card/55 p-4 shadow-[0_0_45px_-18px_rgba(168,85,247,0.8)] backdrop-blur-md">
          <div className="flex min-h-40 flex-1 items-center justify-center px-4 py-8 text-center">
            {isAnswering ? (
              <p className="text-base text-muted-foreground" aria-live="polite">
                Thinking<span className="animate-pulse">...</span>
              </p>
            ) : answer ? (
              <p className="text-pretty text-base text-foreground sm:text-lg" style={{ animation: 'float-in 0.4s ease-out' }}>
                {answer}
              </p>
            ) : (
              <p className="text-base text-muted-foreground sm:text-lg">Ask me anything about Shoaib...</p>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {QUICK.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => ask(q)}
                className="rounded-full border border-border bg-background/35 px-4 py-1.5 text-sm text-muted-foreground transition duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-background/60 hover:text-foreground"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              ask(value)
            }}
            className="mt-3 flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-2 shadow-inner shadow-black/5"
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ask anything about Shoaib..."
              className="min-w-0 flex-1 bg-transparent px-2 py-1 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              disabled={!value.trim()}
              aria-label="Send"
              className="flex size-9 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_8px_24px_rgba(168,85,247,0.5)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowUp className="size-4" />
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-col items-center gap-1 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
          Scroll to explore
          <ArrowDown className="size-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
