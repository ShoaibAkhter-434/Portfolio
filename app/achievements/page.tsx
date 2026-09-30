'use client'

import Link from 'next/link'

const achievements = [
  {
    title: 'Front end Developer ',
    description:
      "Worked as a front end developer for a year, building responsive and interactive web applications using modern frameworks and technologies.",
    image:
      'front end.jpg',
  },
  {
    title: 'Bachelor of Science in Software Engineering',
    description:
      'Graduated with honors, demonstrating a strong foundation in software development principles and practices.',
    image:
      'shoaib2.jfif',
  },
  {
    title: 'Software Development Internship',
    description:
      'Gained hands-on experience in software development, contributing to real-world projects and enhancing technical skills.',
    image:
      'shoaib1.jfif',
  },
  {
    title: 'Swimming Achievement',
    description:
      'Achieved a personal best time in the 50m freestyle event.',
    image:
      'shoaib3.jfif',
  },
  {
    title: 'Weighted Handstand Push-Up',
    description:
      'Mastered the weighted handstand push-up. Perfect balance between raw strength and precise control.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-card"
          >
            ← Back to home
          </Link>

          <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Milestones & Victories
          </div>
        </header>

        <section className="mb-10 overflow-hidden rounded-[2rem] border border-border bg-card/60 shadow-[0_0_40px_-18px_rgba(168,85,247,0.45)] backdrop-blur-sm">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85"
            alt="Software development workspace"
            className="h-72 w-full object-cover"
          />
          <div className="p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">My Achievements</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              From code to peaks, every achievement tells a story of dedication.
            </h1>
          </div>
        </section>

        <section className="space-y-8">
          {achievements.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-border bg-card/60 shadow-[0_0_24px_-18px_rgba(255,255,255,0.25)]"
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="order-2 p-6 sm:p-8 md:order-1">
                  <div className="mb-3 inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    #{index + 1}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">{item.title}</h2>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{item.description}</p>
                </div>

                <div className="order-1 h-72 md:order-2">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
