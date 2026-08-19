import Link from "next/link"
import { ArrowUpRight, ExternalLink, ShieldCheck, Clock, Globe, Laptop } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { flagshipProjects, clientWebsites } from "@/data"

export function ProjectsSection() {
  return (
    <section
      id="selected-work"
      aria-label="Selected Work"
      className="py-24 lg:py-32 border-t border-border/40"
    >
      <div className="container max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Selected Work
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Software Systems & Platforms
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Real-world enterprise ERPs, collaborative platforms, and business systems engineered for production reliability and operational scale.
          </p>
        </div>

        {/* Priority 1: Flagship Core Systems */}
        <div className="space-y-12 mb-20">
          {flagshipProjects.map((project, idx) => {
            const isEven = idx % 2 === 0
            const isLive = Boolean(project.liveUrl)

            return (
              <Card
                key={project.id}
                className="overflow-hidden border border-border/70 bg-card hover:border-foreground/30 transition-all duration-200 shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Status & Type Bar */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        {project.type === "PAID_CLIENT_PRODUCTION" && (
                          <Badge variant="status" className="gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Production ERP
                          </Badge>
                        )}
                        {project.type === "INTERNAL_PRODUCT" && (
                          <Badge variant="status" className="gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Internal Product
                          </Badge>
                        )}
                        {project.type === "PAID_CLIENT_IN_DEVELOPMENT" && (
                          <Badge variant="secondary" className="gap-1.5 font-mono text-[11px]">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            In Development
                          </Badge>
                        )}
                        {project.type === "PUBLIC_PRODUCT" && (
                          <Badge variant="secondary" className="gap-1.5 font-mono text-[11px]">
                            <Globe className="h-3 w-3 text-muted-foreground" />
                            Public Educational
                          </Badge>
                        )}

                        <span className="text-xs text-muted-foreground font-mono">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Summary */}
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                          {project.name}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Engineering Highlights */}
                      <div className="space-y-2.5 pt-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-foreground block">
                          Key Engineering Scope:
                        </span>
                        <ul className="space-y-2">
                          {project.scopeHighlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 shrink-0 mt-2" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer: Tech Stack & Live Link */}
                    <div className="pt-6 mt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Link */}
                      {isLive ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline"
                        >
                          Visit Live System
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground font-mono italic">
                          Active Client Implementation
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Visual Interface Container */}
                  <div
                    className={`lg:col-span-5 bg-muted/20 border-t lg:border-t-0 ${
                      isEven ? "lg:border-l lg:order-2" : "lg:border-r lg:order-1"
                    } border-border/50 p-6 sm:p-8 flex flex-col justify-center items-center text-center`}
                  >
                    <div className="w-full max-w-sm rounded-lg border border-border/80 bg-background/80 p-6 space-y-4 shadow-sm backdrop-blur-sm">
                      <div className="flex items-center justify-between border-b border-border/50 pb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                        </div>
                        <span className="text-[11px] font-mono text-muted-foreground truncate max-w-[150px]">
                          {project.id}.system
                        </span>
                      </div>

                      <div className="space-y-2 py-4">
                        <Laptop className="h-8 w-8 mx-auto text-muted-foreground/60" />
                        <div className="text-xs font-semibold text-foreground">
                          {project.name}
                        </div>
                        <div className="text-[11px] font-mono text-muted-foreground">
                          Role: {project.role}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-border/40 text-[11px] text-muted-foreground font-mono">
                        {project.statusText}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Priority 2: Supporting Client Work */}
        <div className="space-y-6 pt-12 border-t border-border/40">
          <div className="max-w-xl space-y-1">
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Commercial Client Websites
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic planning and production deployment for commercial organizations across education, consulting, and hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {clientWebsites.map((site) => (
              <Card
                key={site.id}
                className="flex flex-col justify-between border border-border/60 bg-card hover:border-foreground/30 transition-all hover:shadow-sm"
              >
                <CardHeader className="pb-3 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="mono" className="text-[10px]">
                      {site.category}
                    </Badge>
                    <Badge variant="secondary" className="text-[10px] font-medium">
                      Planning + Deployment
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {site.name}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                    {site.summary}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="pt-3 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {site.technologies.join(" • ")}
                  </span>
                  {site.liveUrl && (
                    <a
                      href={site.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
