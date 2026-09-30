'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const TECH = ['ASP.NET CORE', 'C#', 'SQL SERVER', 'ADO.NET', 'STORED PROCEDURES', 'HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'REACT', 'GIT']

const SIDE_IMAGES = [
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
]

const PORTRAIT_IMAGES = ['/shoaib.png', '/shoaib1.jfif', '/shoaib2.jfif']

export function CraftSection() {
  const [sideIndex, setSideIndex] = useState(0)
  const [portraitIndex, setPortraitIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSideIndex((prev) => (prev + 1) % SIDE_IMAGES.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setPortraitIndex((prev) => (prev + 1) % PORTRAIT_IMAGES.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_1.2fr_1.05fr]">
        <div
          className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border bg-card/40 p-6 shadow-[0_0_30px_-18px_rgba(168,85,247,0.7)] transition duration-500 hover:-translate-y-1"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10,10,18,0.12), rgba(10,10,18,0.8)), url('${SIDE_IMAGES[sideIndex]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold tracking-tight text-white">Development</h3>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-white/80">
              Building modern <span className="font-semibold text-white">web applications and business systems</span>.
            </p>
            <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-white/70">
              I focus on creating responsive frontend experiences and reliable backend systems using ASP.NET Core, C#, SQL Server and modern web technologies.
            </p>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_0_34px_-18px_rgba(168,85,247,0.8)]">
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: portraitIndex === 0 ? 1 : 0,
            }}
          >
            <Image src={PORTRAIT_IMAGES[0]} alt="Portrait" fill className="object-cover object-top opacity-95" />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: portraitIndex === 1 ? 1 : 0,
            }}
          >
            <Image src={PORTRAIT_IMAGES[1]} alt="Portrait alternative" fill className="object-cover object-top opacity-95" />
          </div>
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: portraitIndex === 2 ? 1 : 0,
            }}
          >
            <Image src={PORTRAIT_IMAGES[2]} alt="Portrait alternative 2" fill className="object-cover object-top opacity-95" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
        </div>

        <div
          className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[2rem] border border-border bg-card/40 p-6 shadow-[0_0_30px_-18px_rgba(168,85,247,0.7)] transition duration-500 hover:-translate-y-1"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10,10,18,0.12), rgba(10,10,18,0.8)), url('${SIDE_IMAGES[(sideIndex + 1) % SIDE_IMAGES.length]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          <div className="relative z-10">
            <p className="text-pretty leading-relaxed text-white/80">
              Full-Stack Developer focused on real-world applications, database-driven systems and clean, user-friendly interfaces.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/85">
              <span className="size-2 rounded-full bg-emerald-400" />
              Open to collaboration & freelance
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-[2rem] border border-border bg-card/40 py-5 shadow-[0_0_24px_-18px_rgba(168,85,247,0.7)]">
        <div className="flex w-max animate-marquee gap-10 px-5">
          {[...TECH, ...TECH].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
            >
              <span className="size-2 rounded-full bg-primary/60" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-6 h-44 overflow-hidden rounded-[2rem] border border-border shadow-[0_0_26px_-18px_rgba(168,85,247,0.7)]">
        <Image src="/map-dark.png" alt="Map background" fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/45 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-7">
          <p className="text-2xl font-bold tracking-tight">LAHORE, PAKISTAN</p>
          <p className="mt-1 font-mono text-sm text-muted-foreground">PAKISTAN</p>
          <p className="font-mono text-sm text-primary">— GMT+5</p>
        </div>
      </div>
    </section>
  )
}
