"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { flagshipProjects } from "@/data"

const projectAccents = {
  edubyte: {
    badge: "text-emerald-500",
    hoverBorder: "group-hover:border-emerald-500/60",
    activeBorder: "border-emerald-500/60",
    hoverText: "hover:text-emerald-500",
    hoverBg: "hover:bg-emerald-500/10",
    arrowColor: "text-emerald-500",
    canvasBadge: "text-emerald-500/80",
  },
  byteflow: {
    badge: "text-accentBlue",
    hoverBorder: "group-hover:border-accentBlue/60",
    activeBorder: "border-accentBlue/60",
    hoverText: "hover:text-accentBlue",
    hoverBg: "hover:bg-accentBlue/10",
    arrowColor: "text-accentBlue",
    canvasBadge: "text-accentBlue/80",
  },
  "crusher-erp": {
    badge: "text-amber-500",
    hoverBorder: "group-hover:border-amber-500/60",
    activeBorder: "border-amber-500/60",
    hoverText: "hover:text-amber-500",
    hoverBg: "hover:bg-amber-500/10",
    arrowColor: "text-amber-500",
    canvasBadge: "text-amber-500/80",
  },
  byteballot: {
    badge: "text-sky-500",
    hoverBorder: "group-hover:border-sky-500/60",
    activeBorder: "border-sky-500/60",
    hoverText: "hover:text-sky-500",
    hoverBg: "hover:bg-sky-500/10",
    arrowColor: "text-sky-500",
    canvasBadge: "text-sky-500/80",
  },
}

export function HorizontalWorkShowcase() {
  const outerRef = React.useRef<HTMLDivElement | null>(null)
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [hoveredProjectId, setHoveredProjectId] = React.useState<string | null>(null)
  const [isReducedMotion, setIsReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(reducedMotionQuery.matches)

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    reducedMotionQuery.addEventListener("change", handleReducedMotionChange)
    return () => {
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange)
    }
  }, [])

  // Desktop Scroll-Driven Horizontal Translation
  React.useEffect(() => {
    if (isReducedMotion) return

    let animationFrameId: number

    const handleScroll = () => {
      if (!outerRef.current || !trackRef.current) return

      const rect = outerRef.current.getBoundingClientRect()
      const totalScroll = rect.height - window.innerHeight
      if (totalScroll <= 0) return

      // Compute normalized progress between 0 and 1
      const currentScroll = Math.max(0, Math.min(totalScroll, -rect.top))
      const progress = currentScroll / totalScroll

      // Primary Track Horizontal Travel
      const trackWidth = trackRef.current.scrollWidth
      const viewportWidth = window.innerWidth
      const maxTranslate = Math.max(0, trackWidth - viewportWidth + 96)

      const translateX = progress * maxTranslate
      trackRef.current.style.transform = `translate3d(-${translateX}px, 0, 0)`

      // Update active indicator (0 to 3)
      const newIndex = Math.min(
        flagshipProjects.length - 1,
        Math.floor(progress * flagshipProjects.length)
      )
      setActiveIndex(newIndex)
    }

    const onScrollThrottled = () => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", onScrollThrottled, { passive: true })
    window.addEventListener("resize", onScrollThrottled)
    handleScroll()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("scroll", onScrollThrottled)
      window.removeEventListener("resize", onScrollThrottled)
    }
  }, [isReducedMotion])

  const scrollToStep = (targetIdx: number) => {
    if (!outerRef.current) return
    const rect = outerRef.current.getBoundingClientRect()
    const scrollTop = window.scrollY + rect.top
    const totalScroll = outerRef.current.clientHeight - window.innerHeight
    const targetScroll = scrollTop + (targetIdx / (flagshipProjects.length - 1)) * totalScroll
    window.scrollTo({ top: targetScroll, behavior: "smooth" })
  }

  return (
    <section aria-label="Flagship Systems Showcase" className="w-full">
      {/* ========================================================================= */}
      {/* 1. DESKTOP PINNED HORIZONTAL GALLERY (hidden on md & below)               */}
      {/* ========================================================================= */}
      <div ref={outerRef} className="hidden md:block relative h-[180vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-between py-10 overflow-hidden">
          {/* Top Progress & Navigation Indicator */}
          <div className="container max-w-6xl px-6 flex items-center justify-between z-20 pb-4 border-b border-border/40">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-muted-foreground">
              <span className="text-foreground font-bold">
                0{activeIndex + 1}
              </span>
              <span>/</span>
              <span>0{flagshipProjects.length}</span>
              <span>•</span>
              <span className="text-foreground font-medium">
                {flagshipProjects[activeIndex].name}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mr-2">
                Scroll or navigate
              </span>
              <button
                type="button"
                onClick={() => scrollToStep(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-foreground hover:border-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  scrollToStep(Math.min(flagshipProjects.length - 1, activeIndex + 1))
                }
                disabled={activeIndex === flagshipProjects.length - 1}
                aria-label="Next project"
                className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-foreground hover:border-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Horizontally Progressing Track with Balanced Information + Visual Composition */}
          <div
            ref={trackRef}
            className="flex gap-14 lg:gap-18 will-change-transform pl-[max(1.5rem,calc((100vw-72rem)/2))] pr-32 my-auto items-center"
          >
            {flagshipProjects.map((project, idx) => {
              const projectNumber = `0${idx + 1}`
              const isLive = Boolean(project.liveUrl)
              const isHovered = hoveredProjectId === project.id
              const isOtherHovered =
                hoveredProjectId !== null && hoveredProjectId !== project.id
              const accent =
                projectAccents[project.id as keyof typeof projectAccents] ||
                projectAccents.byteflow

              return (
                <article
                  key={project.id}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className={`w-[82vw] lg:w-[76vw] max-w-6xl flex-shrink-0 transition-all duration-300 ${
                    isOtherHovered ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Project Information & Actions (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        <span className={`font-bold ${accent.badge}`}>
                          {projectNumber}
                        </span>
                        <span>/</span>
                        <span>0{flagshipProjects.length}</span>
                        <span>•</span>
                        <span className={`font-medium ${accent.badge}`}>
                          {project.typeLabel}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase">
                          <Link
                            href={`/work/${project.id}`}
                            onFocus={() => setHoveredProjectId(project.id)}
                            onBlur={() => setHoveredProjectId(null)}
                            className="hover:underline underline-offset-8 transition-colors focus:outline-none focus:ring-2 focus:ring-accentBlue rounded-sm"
                          >
                            {project.name}
                          </Link>
                        </h2>
                        <p className="text-sm font-medium text-muted-foreground">
                          {project.category}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Role & Status */}
                      <div className="text-xs font-mono text-muted-foreground space-y-1 pt-2 border-t border-border/40">
                        <div>
                          <span className="text-foreground font-medium">Role:</span>{" "}
                          {project.role}
                        </div>
                        <div>
                          <span className="text-foreground font-medium">Status:</span>{" "}
                          {project.statusText}
                        </div>
                      </div>

                      {/* Concise Technologies */}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-mono text-muted-foreground">
                          {project.technologies.slice(0, 4).map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="bg-muted/50 px-2 py-0.5 rounded border border-border/40 text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center gap-6 pt-3">
                        <Link
                          href={`/work/${project.id}`}
                          onFocus={() => setHoveredProjectId(project.id)}
                          onBlur={() => setHoveredProjectId(null)}
                          className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground border-b-2 border-foreground pb-1 ${accent.hoverText} ${accent.hoverBorder} transition-colors focus:outline-none focus:ring-1 focus:ring-accentBlue`}
                        >
                          Explore Case Study
                          <ArrowRight className={`h-4 w-4 ${accent.arrowColor}`} />
                        </Link>

                        {isLive && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-1 focus:ring-accentBlue"
                          >
                            Live System
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Project Visual Window (7 cols) - Unified Container Zoom */}
                    <div className="lg:col-span-7">
                      <Link
                        href={`/work/${project.id}`}
                        onFocus={() => setHoveredProjectId(project.id)}
                        onBlur={() => setHoveredProjectId(null)}
                        className={`group block overflow-hidden rounded-xl border bg-card shadow-xl transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accentBlue ${
                          isHovered
                            ? `${accent.activeBorder} ring-1 ring-border/50`
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        {/* Window Header */}
                        <div className="flex items-center justify-between border-b border-border/70 bg-muted/30 px-5 py-3 relative z-10">
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                                isHovered || activeIndex === idx
                                  ? "bg-rose-500"
                                  : "bg-muted-foreground/30 group-hover:bg-rose-500"
                              }`}
                            />
                            <span
                              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                                isHovered || activeIndex === idx
                                  ? "bg-amber-400"
                                  : "bg-muted-foreground/30 group-hover:bg-amber-400"
                              }`}
                            />
                            <span
                              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                                isHovered || activeIndex === idx
                                  ? "bg-emerald-500"
                                  : "bg-muted-foreground/30 group-hover:bg-emerald-500"
                              }`}
                            />
                          </div>
                          <span className="text-[11px] font-mono text-muted-foreground">
                            {project.id}.byten.in / preview
                          </span>
                          <div className="w-8" />
                        </div>

                        {/* Visual Screenshot Image - Unified Container */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/20">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={`${project.name} interface preview`}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                          ) : (
                            <div className="p-12 flex flex-col items-center justify-center text-center space-y-3 h-full bg-gradient-to-br from-card via-muted/20 to-card">
                              <div className="text-3xl font-black text-foreground tracking-tight uppercase">
                                {project.name}
                              </div>
                            </div>
                          )}
                        </div>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Bottom Visual Scroll Bar */}
          <div className="container max-w-6xl px-6 flex items-center gap-4 z-20 pt-2">
            <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accentBlue transition-all duration-300 rounded-full"
                style={{
                  width: `${((activeIndex + 1) / flagshipProjects.length) * 100}%`,
                }}
              />
            </div>
            <span className="text-[11px] font-mono text-muted-foreground">
              04 Flagships
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE NATIVE HORIZONTAL SWIPE GALLERY (block on md & below)           */}
      {/* ========================================================================= */}
      <div className="block md:hidden space-y-8">
        <div className="px-6 flex items-center justify-between">
          <div className="text-xs font-mono tracking-widest uppercase text-muted-foreground flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
            Swipe to explore systems
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            01 — 04
          </span>
        </div>

        {/* Native Touch-Snap Track */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-6 scrollbar-none">
          {flagshipProjects.map((project, idx) => {
            const projectNumber = `0${idx + 1}`
            const isLive = Boolean(project.liveUrl)
            const accent =
              projectAccents[project.id as keyof typeof projectAccents] ||
              projectAccents.byteflow

            return (
              <article
                key={project.id}
                className="w-[85vw] sm:w-[78vw] flex-shrink-0 snap-start space-y-4"
              >
                {/* Project Header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    <span className={`font-bold ${accent.badge}`}>
                      {projectNumber}
                    </span>
                    <span>/</span>
                    <span>0{flagshipProjects.length}</span>
                    <span>•</span>
                    <span className={`font-medium ${accent.badge}`}>
                      {project.typeLabel}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground uppercase">
                    {project.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {project.category}
                  </p>
                </div>

                {/* Project Visual Stage with Image */}
                <Link
                  href={`/work/${project.id}`}
                  className="block overflow-hidden rounded-xl border border-border bg-card shadow-lg"
                >
                  <div className="flex items-center justify-between border-b border-border/70 bg-muted/30 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {project.id}.byten.in
                    </span>
                    <div className="w-4" />
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/20">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.name} interface preview`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="p-8 flex flex-col items-center justify-center text-center space-y-2 h-full bg-gradient-to-br from-card to-muted/20">
                        <div className="text-xl font-black text-foreground tracking-tight uppercase">
                          {project.name}
                        </div>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Supporting Details & Actions */}
                <div className="space-y-2.5 pt-1">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="text-[11px] font-mono text-muted-foreground space-y-0.5">
                    <div>Role: {project.role}</div>
                    <div>Status: {project.statusText}</div>
                  </div>

                  {project.technologies && (
                    <div className="flex flex-wrap gap-1 pt-0.5 text-[10px] font-mono text-muted-foreground">
                      {project.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-muted/50 px-1.5 py-0.5 rounded border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-1 flex items-center gap-6">
                    <Link
                      href={`/work/${project.id}`}
                      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground border-b-2 border-foreground pb-0.5 ${accent.hoverText} transition-colors`}
                    >
                      Explore Case Study
                      <ArrowRight className={`h-3.5 w-3.5 ${accent.arrowColor}`} />
                    </Link>

                    {isLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Live
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
