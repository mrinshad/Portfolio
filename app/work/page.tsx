import Link from "next/link"
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import { flagshipProjects, clientWebsites } from "@/data"

export const metadata = {
  title: "Selected Work | Mohammed Rinshad P",
  description: "Production software systems, ERP platforms, and collaborative applications architected and developed by Mohammed Rinshad P.",
}

export default function WorkPage() {
  const [edubyteProject, ...remainingProjects] = flagshipProjects

  return (
    <main className="py-16 lg:py-24 space-y-28">
      <div className="container max-w-6xl px-6 space-y-28">
        {/* Page Header */}
        <div className="max-w-4xl space-y-4 border-b border-border/50 pb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
            Portfolio / 04 Flagships • 03 Websites
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-none">
            Selected
            <br />
            Systems
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal">
            Production ERPs, workflow platforms, and custom business systems engineered for reliability and scale.
          </p>
        </div>

        {/* 1. First Flagship Project: eduByte (Large Editorial Visual Showcase) */}
        <section aria-label="eduByte Showcase" className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="text-emerald-500 font-bold">01</span>
              <span>/</span>
              <span>04</span>
              <span>•</span>
              <span className="text-emerald-500 font-medium">Production ERP</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground uppercase">
              {edubyteProject.name}
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              School Management ERP
            </p>
          </div>

          {/* Large Project Visual Presentation */}
          <div className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-500 hover:border-foreground/30">
            <Link href={`/work/${edubyteProject.id}`} className="block">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-border/70 bg-muted/30 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  edubyte.byten.in / live-system
                </span>
                <div className="w-8" />
              </div>

              {/* Visual Presentation Canvas */}
              <div className="p-12 sm:p-24 flex flex-col items-center justify-center text-center space-y-4 min-h-[340px] sm:min-h-[420px] bg-gradient-to-br from-card via-muted/20 to-card transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                <div className="text-xs font-mono uppercase tracking-widest text-emerald-500/80">
                  Institutional Architecture
                </div>
                <div className="text-4xl sm:text-5xl font-black text-foreground tracking-tight uppercase">
                  {edubyteProject.name}
                </div>
                <div className="text-sm font-mono text-muted-foreground max-w-md">
                  Modular School Management & Accounting Engine
                </div>
              </div>
            </Link>
          </div>

          {/* Concise Supporting Details & Actions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-4 border-t border-border/50">
            <div className="md:col-span-8 space-y-2">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {edubyteProject.summary}
              </p>
              <div className="text-xs font-mono text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>Production / Client Project</span>
                <span>•</span>
                <span>Role: {edubyteProject.role}</span>
              </div>
            </div>

            <div className="md:col-span-4 flex items-center md:justify-end gap-6 pt-2 md:pt-0">
              <Link
                href={`/work/${edubyteProject.id}`}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground border-b-2 border-foreground pb-1 hover:text-emerald-500 hover:border-emerald-500 transition-colors"
              >
                Explore Case Study
                <ArrowRight className="h-4 w-4 text-emerald-500" />
              </Link>

              {edubyteProject.liveUrl && (
                <a
                  href={edubyteProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  Live System
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Remaining Flagship Projects (Maintained for Continuity) */}
        <div className="space-y-32 pt-12 border-t border-border/40">
          {remainingProjects.map((project, idx) => {
            const isEven = idx % 2 === 0
            const isLive = Boolean(project.liveUrl)
            const projectNumber = `0${idx + 2} / 0${flagshipProjects.length}`

            return (
              <div
                key={project.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-accentBlue" />
                    <span>{projectNumber}</span>
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase group-hover:text-foreground/90 transition-colors">
                    {project.name}
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="text-xs font-mono text-muted-foreground pt-1 space-y-1">
                    <div>Role: {project.role}</div>
                    <div>Status: {project.statusText}</div>
                  </div>

                  <div className="pt-4 flex items-center gap-6">
                    <Link
                      href={`/work/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground border-b-2 border-foreground pb-1 hover:text-accentBlue hover:border-accentBlue transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4 text-accentBlue" />
                    </Link>

                    {isLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accentBlue transition-colors"
                      >
                        Live System
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Interface Stage */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/work/${project.id}`}
                    className="block overflow-hidden rounded-xl border border-border bg-card shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:border-accentBlue/60"
                  >
                    {/* Window Title Bar */}
                    <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-border" />
                        <span className="h-2.5 w-2.5 rounded-full bg-border" />
                        <span className="h-2.5 w-2.5 rounded-full bg-border" />
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        {project.id}.byten.in / showcase
                      </span>
                      <div className="w-8" />
                    </div>

                    {/* Window Visual Body */}
                    <div className="p-12 sm:p-16 flex flex-col items-center justify-center text-center space-y-3 min-h-[280px] bg-gradient-to-br from-card to-muted/30">
                      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        {project.typeLabel}
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                        {project.name}
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">
                        {project.category}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Supporting Commercial Client Websites */}
        <div className="pt-20 border-t border-border/60 space-y-10">
          <div className="max-w-xl space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Commercial Client Web Platforms
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground uppercase">
              Client Websites
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic planning and production deployment for commercial organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientWebsites.map((site) => (
              <div
                key={site.id}
                className="group border-t-2 border-foreground pt-6 space-y-3 flex flex-col justify-between hover:border-accentBlue transition-colors"
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {site.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {site.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {site.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Planning + Deployment
                  </span>
                  {site.liveUrl && (
                    <a
                      href={site.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      Visit
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
