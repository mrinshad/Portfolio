"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Clock, Globe, Laptop, ChevronDown, ChevronUp, Layers, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { flagshipProjects, clientWebsites } from "@/data"

export function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = React.useState<{ [key: string]: boolean }>({})

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section
      id="selected-work"
      aria-label="Selected Work"
      className="py-24 lg:py-32 border-t border-border/40 relative"
    >
      <div className="container max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Selected Work
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Featured Systems & Platforms
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Real-world enterprise ERPs, collaborative platforms, and business systems engineered for production reliability.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              4 Flagship Systems • 3 Client Websites
            </span>
          </div>
        </div>

        {/* Priority 1: Flagship Core Systems */}
        <div className="space-y-16 mb-24">
          {flagshipProjects.map((project, idx) => {
            const isEven = idx % 2 === 0
            const isLive = Boolean(project.liveUrl)
            const isExpanded = Boolean(expandedProjects[project.id])
            const projectNumber = `0${idx + 1}`

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-border/70 bg-card overflow-hidden transition-all duration-300 hover:border-foreground/40 hover:shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Top Bar: Number & Status */}
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-3xl sm:text-4xl font-mono font-bold text-muted-foreground/30 group-hover:text-foreground/40 transition-colors">
                          {projectNumber}
                        </span>

                        <div className="flex flex-wrap items-center gap-2">
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
                              Public Simulator
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Project Title & Category */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                          {project.category}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                          {project.name}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Primary Engineering Highlights */}
                      <div className="space-y-2.5 pt-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                          Engineering Highlights
                        </div>
                        <ul className="space-y-2">
                          {project.scopeHighlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer: Tech Stack & Action Links */}
                    <div className="pt-8 mt-8 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Live Link Button */}
                      {isLive ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:underline group/btn"
                        >
                          Visit Live System
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground font-mono italic">
                          Active Client Implementation
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Visual Interface Mockup Window */}
                  <div
                    className={`lg:col-span-5 bg-muted/30 border-t lg:border-t-0 ${
                      isEven ? "lg:border-l lg:order-2" : "lg:border-r lg:order-1"
                    } border-border/50 p-6 sm:p-10 flex flex-col justify-center items-center relative overflow-hidden`}
                  >
                    {/* Visual Window Mockup */}
                    <div className="w-full rounded-xl border border-border/80 bg-background shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                      {/* macOS Window Title Bar */}
                      <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="text-[11px] font-mono text-muted-foreground truncate max-w-[180px]">
                          {project.id}.byten.in
                        </span>
                        <div className="w-8" />
                      </div>

                      {/* Window Body */}
                      <div className="p-6 space-y-5 bg-card/60">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold text-foreground truncate">
                            {project.name}
                          </div>
                          <Badge variant="mono" className="text-[10px]">
                            {project.role.split(" ")[0]}
                          </Badge>
                        </div>

                        <div className="h-24 rounded-lg border border-border/60 bg-muted/20 flex flex-col items-center justify-center p-4 text-center space-y-1">
                          <Layers className="h-6 w-6 text-muted-foreground/60" />
                          <span className="text-[11px] font-mono text-muted-foreground">
                            {project.category}
                          </span>
                        </div>

                        <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-muted-foreground border-t border-border/40">
                          <span>Status:</span>
                          <span className="text-foreground font-semibold">
                            {project.statusText.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Priority 2: Supporting Client Websites */}
        <div className="space-y-8 pt-16 border-t border-border/40">
          <div className="max-w-xl space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Commercial Client Websites
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic planning and cloud deployment for commercial organizations across education, consulting, and hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {clientWebsites.map((site) => (
              <Card
                key={site.id}
                className="group flex flex-col justify-between border border-border/60 bg-card hover:border-foreground/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader className="pb-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="mono" className="text-[10px]">
                      {site.category}
                    </Badge>
                    <Badge variant="secondary" className="text-[10px] font-medium">
                      Planning + Deployment
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-foreground transition-colors">
                    {site.name}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                    {site.summary}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {site.technologies.join(" • ")}
                  </span>
                  {site.liveUrl && (
                    <a
                      href={site.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1 group/link"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3 transition-transform group-link:translate-x-0.5 group-link:-translate-y-0.5" />
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
