import type { CSSProperties } from 'react'
import {
  Braces,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Network,
  Server,
  Terminal,
  Workflow,
} from 'lucide-react'

type OrbitStyle = CSSProperties & { '--skill-angle': string }

const SKILLS = [
  { name: 'C#', icon: Braces },
  { name: 'SQL SERVER', icon: Database },
  { name: 'JAVASCRIPT', icon: Code2 },
  { name: 'REACT', icon: Workflow },
  { name: 'NODE.JS', icon: Server },
  { name: 'MONGODB', icon: Database },
  { name: 'REST API', icon: Network },
  { name: 'GIT', icon: GitBranch },
  { name: 'HTML / CSS', icon: Terminal },
  { name: 'ASP.NET CORE', icon: Cpu },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Tech Stack
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          My{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-5xl items-center justify-center">
        <div className="skills-stage">
          <div className="skills-world">
            <img
              src="/world.jfif"
              alt="A digital view of the world"
              className="skills-world-image"
            />
            <div className="skills-world-grid" />
            <div className="skills-world-languages" aria-label="Technologies moving across the world">
              {[0, 1, 2].map((lane) => (
                <div
                  key={lane}
                  className={`world-language-lane ${lane % 2 ? 'world-language-lane-reverse' : ''}`}
                >
                  {[...SKILLS, ...SKILLS].map(({ name }, index) => (
                    <span key={`${lane}-${name}-${index}`}>
                      {name}
                      <i />
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="skills-world-core">
              <Globe2 className="size-7 text-cyan-200" strokeWidth={1.4} />
              <span>Global tech</span>
            </div>
          </div>

          <div className="skills-orbit" aria-label="Rotating skills list">
            {SKILLS.map(({ name, icon: Icon }, index) => {
              const angle = (360 / SKILLS.length) * index

              return (
                <span
                  key={`${name}-${index}`}
                  className="orbital-word"
                  style={{ '--skill-angle': `${angle}deg` } as OrbitStyle}
                >
                  <Icon className="size-4 text-cyan-200" strokeWidth={1.8} />
                  {name}
                </span>
              )
            })}
          </div>

          <div className="skills-signal skills-signal-one" />
          <div className="skills-signal skills-signal-two" />
          <div className="skills-signal skills-signal-three" />
        </div>
      </div>
    </section>
  )
}
