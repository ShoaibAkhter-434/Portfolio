import { SiteNav } from '@/components/site-nav'
import { FreeTemplatePopup } from '@/components/free-template-popup'
import { Hero } from '@/components/hero'
import { NameBanner } from '@/components/name-banner'
import { AboutCards } from '@/components/about-cards'
import { CraftSection } from '@/components/craft-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { ExploreSection } from '@/components/explore-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 size-[32rem] rounded-full bg-primary/18 blur-[150px]" />
        <div className="absolute right-[-8rem] top-[25%] size-[34rem] rounded-full bg-accent/18 blur-[170px]" />
        <div className="absolute bottom-[-8rem] left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)]" />
      </div>

      <SiteNav />
      <FreeTemplatePopup />

      <main className="relative">
        <Hero />
        <NameBanner />
        <AboutCards />
        <CraftSection />
        <ProjectsSection />
        <SkillsSection />
        <ExploreSection />
      </main>

      <SiteFooter />
    </div>
  )
}
