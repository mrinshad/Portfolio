import Link from "next/link"
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"
import { flagshipProjects, clientWebsites } from "@/data"

export const metadata = {
  title: "Selected Work | Mohammed Rinshad P",
  description: "Production software systems, ERP platforms, and collaborative applications architected and developed by Mohammed Rinshad P.",
}

export default function WorkPage() {
  return (
    <main className="py-16 lg:py-24 space-y-28">
      <div className="container max-w-6xl px-6 space-y-24">
        {/* Page Header */}
        <div className="max-w-4xl space-y-6 border-b border-border/50 pb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Portfolio / 04 Flagships • 03 Websites
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-none">
            Selected
            <br />
            Systems
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            Production ERPs, workflow platforms, and custom business systems engineered for scale, reliability, and usability.
          </p>
        </div>

        {/* Flagship Projects - Editorial Showcase Stages */}
        <div className="space-y-32">
          {flagshipProjects.map((project, idx) => {
            const isEven = idx % 2 === 0
            const isLive = Boolean(project.liveUrl)
            const projectNumber = `0${idx + 1} / 0${flagshipProjects.length}`

            return (
              <div
                key={project.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {projectNumber} • {project.category}
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                    {project.name}
                  </h2>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground pt-2 space-y-2">
                    <div>Role: {project.role}</div>
                    <div>Status: {project.statusText}</div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center gap-1.5 text-foreground">
                          <TechIcon name={tech} className="h-3.5 w-3.5 text-muted-foreground" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-6">
                    <Link
                      href={`/work/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground border-b-2 border-foreground pb-1 hover:opacity-75 transition-opacity"
                    >
                      Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    {isLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
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
                    className="block overflow-hidden rounded-xl border border-border bg-card shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:border-foreground/40"
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
                    <div className="p-12 sm:p-16 flex flex-col items-center justify-center text-center space-y-4 min-h-[280px] bg-gradient-to-br from-card to-muted/30">
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
        <div className="pt-20 border-t border-border/60 space-y-12">
          <div className="max-w-xl space-y-2">
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
                className="group border-t-2 border-foreground pt-6 space-y-4 flex flex-col justify-between"
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
                  <span className="text-[11px] font-mono uppercase text-muted-foreground">
                    Role: Planning + Deployment
                  </span>
                  {site.liveUrl && (
                    <a
                      href={site.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-foreground hover:underline inline-flex items-center gap-1"
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
