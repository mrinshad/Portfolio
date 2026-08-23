import Link from "next/link"
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react"
import { HeroAurora } from "@/components/hero-aurora"
import { Hero3DObject } from "@/components/hero-3d-object"
import { HeroPointerGlow } from "@/components/hero-pointer-glow"
import { ProjectTiltWindow } from "@/components/project-tilt-window"
import { flagshipProjects, homePageContent, profileData } from "@/data"

const heroMarqueeItems = [
  "SYSTEMS ARCHITECTURE",
  "FULL-STACK ENGINEERING",
  "ENTERPRISE ERP PLATFORMS",
  "RELATIONAL DATABASE DESIGN",
  "CLOUD-NATIVE SOLUTIONS",
  "REST APIS & RBAC",
  "DISTRIBUTED WORKFLOWS",
]

export default function Home() {
  const featuredTwo = flagshipProjects.slice(0, 2)
  const { hero, gateway } = homePageContent

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Refined Typographic Hero */}
      <section
        aria-label="Introduction"
        className="relative flex min-h-[calc(90vh-5rem)] flex-col justify-between py-16 lg:py-24 overflow-hidden gradient-mesh"
      >
        <HeroAurora />
        <HeroPointerGlow />
        <Hero3DObject />
        <div className="container max-w-6xl px-6 my-auto space-y-10 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
              {hero.eyebrow}
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground uppercase leading-none animate-hero-wipe">
              {hero.headlineLine1}
              <br />
              <span className="gradient-text">{hero.headlineLine2}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-normal max-w-2xl leading-relaxed pt-2">
              {hero.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-border/50">
            <Link
              href={hero.ctaPrimary.href}
              className="group/hero-cta glass-cta inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground px-7 py-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2"
            >
              <span>{hero.ctaPrimary.label}</span>
              <ArrowRight className="h-4 w-4 text-accentBlue transition-transform duration-200 ease-out group-hover/hero-cta:translate-x-1" />
            </Link>

            <Link
              href={hero.ctaTertiary.href}
              className="group/hero-contact glass-pill inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground px-7 py-4 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2"
            >
              <span>{hero.ctaTertiary.label}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover/hero-contact:translate-x-0.5 group-hover/hero-contact:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Continuous Monochrome Ticker with Restrained Accent Dot */}
        <div className="w-full border-y border-border/40 py-4 mt-12 overflow-hidden marquee-container">
          <div className="flex w-max items-center gap-10 animate-marquee">
            {[...heroMarqueeItems, ...heroMarqueeItems, ...heroMarqueeItems].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-10 text-xs font-mono tracking-widest text-muted-foreground uppercase whitespace-nowrap"
                >
                  <span>{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accentBlue/60" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 2. Featured Systems Section — Gradient Mesh Background */}
      <section className="py-24 border-y border-border/50 transition-colors gradient-mesh">
        <div className="container max-w-6xl px-6 space-y-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border/50 pb-8">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
                Featured Work / 01 — 02
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
                Selected Systems
              </h2>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-accentBlue hover:underline underline-offset-8 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 rounded-sm"
            >
              View All Systems ({flagshipProjects.length}) →
            </Link>
          </div>

          {/* Curated Editorial Rows */}
          <div className="space-y-24">
            {featuredTwo.map((project, idx) => {
              const projectNumber = `0${idx + 1} / 0${flagshipProjects.length}`

              return (
                <div
                  key={project.id}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Column */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {projectNumber} • {project.category}
                    </div>

                    <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase group-hover:text-foreground/90 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-base text-muted-foreground leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    <div className="text-xs font-mono text-muted-foreground pt-1">
                      Role: {project.role}
                    </div>

                    <div className="pt-3">
                      <Link
                        href={`/work/${project.id}`}
                        className="group/cs inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground border-b border-foreground pb-1 hover:text-accentBlue hover:border-accentBlue transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 rounded-sm"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="h-4 w-4 text-accentBlue transition-transform duration-200 ease-out group-hover/cs:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual Interface Stage with 3D Tilt & Uncropped Preview */}
                  <div className="lg:col-span-7">
                    <ProjectTiltWindow project={project} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Gateway Section — Glass Cards */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-3 border-l-2 border-foreground pl-6 hover:border-accentBlue transition-colors duration-200">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {gateway.careerCard.eyebrow}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
                {gateway.careerCard.heading}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {gateway.careerCard.description}
              </p>
              <div className="pt-2">
                <Link
                  href={gateway.careerCard.href}
                  className="group/gw inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:text-accentBlue hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 rounded-sm"
                >
                  <span>{gateway.careerCard.linkText}</span>
                </Link>
              </div>
            </div>

            <div className="space-y-3 border-l-2 border-foreground pl-6 hover:border-accentBlue transition-colors duration-200">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {gateway.contactCard.eyebrow}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
                {gateway.contactCard.heading}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {gateway.contactCard.description}
              </p>
              <div className="pt-2">
                <Link
                  href={gateway.contactCard.href}
                  className="group/gc inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:text-accentBlue hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2 rounded-sm"
                >
                  <span>{gateway.contactCard.linkText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
