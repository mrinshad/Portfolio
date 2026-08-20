"use client"

import * as React from "react"
import { careerProgression, ExperienceItem } from "@/data"
import { TechIcon } from "./tech-icon"
import { ArrowLeft, ArrowRight, MapPin, Calendar, Briefcase, CheckCircle2 } from "lucide-react"

const experienceSummaries: { [key: string]: string } = {
  wizzo:
    "Engineered web and mobile application modules for restaurant, warehouse, and business management workflows using Laravel, React, Java, and MySQL.",
  griantek:
    "Developed full-stack web applications with Next.js and Node.js, built automated journal and lead workflows, and managed GCP/Supabase backend services.",
  veynad:
    "Engineered enterprise auditing platforms using React and .NET Core, implementing Azure AD B2C enterprise security and automated CI/CD deployment pipelines.",
  tcs:
    "Contributing to enterprise web applications, engineering UI components, integrating REST APIs, refactoring codebases, and administering Linux (RHEL) server environments.",
  byten:
    "Leading technical architecture and development for custom ERP, accounting, and simulation platforms. Designing relational PostgreSQL schemas, REST APIs, RBAC systems, and engineering standards.",
}

export function ExperienceScrollytelling() {
  const outerRef = React.useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [isReducedMotion, setIsReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(query.matches)

    const onChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }

    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  // Desktop Scroll-Driven Milestone Progress
  React.useEffect(() => {
    if (isReducedMotion) return

    let animationFrameId: number

    const handleScroll = () => {
      if (!outerRef.current) return

      const rect = outerRef.current.getBoundingClientRect()
      const totalScroll = rect.height - window.innerHeight
      if (totalScroll <= 0) return

      // Normalized progress between 0 and 1
      const currentScroll = Math.max(0, Math.min(totalScroll, -rect.top))
      const progress = currentScroll / totalScroll

      // Calculate active milestone index (0 to 4)
      const count = careerProgression.length
      const step = 1 / count
      const newIndex = Math.min(count - 1, Math.floor(progress / step))
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

  const scrollToMilestone = (targetIdx: number) => {
    if (!outerRef.current) return
    const rect = outerRef.current.getBoundingClientRect()
    const scrollTop = window.scrollY + rect.top
    const totalScroll = outerRef.current.clientHeight - window.innerHeight
    const targetScroll =
      scrollTop + (targetIdx / (careerProgression.length - 1)) * totalScroll
    window.scrollTo({ top: targetScroll, behavior: "smooth" })
    setActiveIndex(targetIdx)
  }

  const activeItem = careerProgression[activeIndex] || careerProgression[0]

  return (
    <section aria-label="Professional Experience Journey" className="w-full">
      {/* ========================================================================= */}
      {/* 1. DESKTOP SCROLLYTELLING VIEW (hidden on md & below)                      */}
      {/* ========================================================================= */}
      <div ref={outerRef} className="hidden md:block relative h-[210vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center py-8 overflow-hidden">
          <div className="container max-w-5xl px-6">
            {/* Header / Tracker Bar */}
            <div className="flex items-center justify-between pb-8 border-b border-border/40 mb-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
                  Career Progression
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                  Engineering Journey
                </h2>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  Milestone 0{activeIndex + 1} of 0{careerProgression.length}
                </span>
                <button
                  type="button"
                  onClick={() => scrollToMilestone(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  aria-label="Previous career milestone"
                  className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-foreground hover:border-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    scrollToMilestone(
                      Math.min(careerProgression.length - 1, activeIndex + 1)
                    )
                  }
                  disabled={activeIndex === careerProgression.length - 1}
                  aria-label="Next career milestone"
                  className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-foreground hover:border-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Scrollytelling Stage: Left Timeline Track + Right Active Chapter */}
            <div className="grid grid-cols-12 gap-10 items-start">
              {/* Left Column: Interactive Timeline Track (5 cols) */}
              <div className="col-span-4 relative pl-6 space-y-6">
                {/* Background Connecting Line */}
                <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-border/60" />

                {/* Active Dynamic Progress Line */}
                <div
                  className="absolute left-[11px] top-3 w-[2px] bg-accentBlue transition-all duration-500 ease-out"
                  style={{
                    height: `${(activeIndex / (careerProgression.length - 1)) * 88}%`,
                  }}
                />

                {careerProgression.map((item, idx) => {
                  const isCurrentActive = idx === activeIndex
                  const isPast = idx < activeIndex

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToMilestone(idx)}
                      className={`relative w-full text-left transition-all duration-300 group flex items-start gap-4 ${
                        isCurrentActive
                          ? "opacity-100 translate-x-1"
                          : isPast
                          ? "opacity-75 hover:opacity-100"
                          : "opacity-40 hover:opacity-80"
                      }`}
                    >
                      {/* Timeline Node Marker */}
                      <div
                        className={`relative z-10 mt-1 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${
                          isCurrentActive
                            ? "border-accentBlue bg-accentBlue ring-4 ring-accentBlue/25 scale-125"
                            : isPast
                            ? "border-accentBlue/80 bg-accentBlue/30"
                            : "border-muted-foreground/40 bg-background group-hover:border-foreground"
                        }`}
                      />

                      <div className="space-y-0.5">
                        <div
                          className={`text-[11px] font-mono uppercase tracking-wider ${
                            isCurrentActive
                              ? "text-accentBlue font-bold"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.period}
                        </div>
                        <div
                          className={`text-sm font-bold tracking-tight transition-colors ${
                            isCurrentActive
                              ? "text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {item.company}
                        </div>
                        <div className="text-xs text-muted-foreground/80 line-clamp-1">
                          {item.role}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Right Column: Active Experience Chapter Card (8 cols) */}
              <div className="col-span-8">
                <div className="border border-border/70 bg-card/80 p-8 sm:p-10 rounded-2xl shadow-xl backdrop-blur-sm space-y-6 transition-all duration-400">
                  {/* Milestone Classification Badge & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-accentBlue font-bold bg-accentBlue/10 px-2.5 py-1 rounded">
                        0{activeIndex + 1} / 0{careerProgression.length}
                      </span>
                      {activeItem.isLeadership && (
                        <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded">
                          Leadership & Architecture
                        </span>
                      )}
                      {activeItem.id === "tcs" && (
                        <span className="text-xs font-mono uppercase tracking-wider text-accentBlue font-semibold bg-accentBlue/10 px-2.5 py-1 rounded flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-accentBlue animate-pulse" />
                          Primary Employment
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                        {activeItem.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                        {activeItem.location}
                      </span>
                    </div>
                  </div>

                  {/* Company & Role */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                      {activeItem.company}
                    </h3>
                    <div className="text-base font-medium text-foreground/90 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-accentBlue" />
                      {activeItem.role}
                    </div>
                  </div>

                  {/* Concise Chapter Summary */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {experienceSummaries[activeItem.id] ||
                      activeItem.responsibilities[0]}
                  </p>

                  {/* Core Responsibilities / Contributions */}
                  <div className="space-y-2 pt-1 border-t border-border/40">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      Key Responsibilities & System Scope
                    </div>
                    <ul className="space-y-2">
                      {activeItem.responsibilities.slice(0, 3).map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                        >
                          <CheckCircle2 className="h-4 w-4 text-accentBlue/80 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Involved */}
                  {activeItem.technologies && activeItem.technologies.length > 0 && (
                    <div className="pt-2 border-t border-border/40 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        Technologies & Domains
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {activeItem.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground bg-muted/60 px-2.5 py-1 rounded border border-border/40"
                          >
                            <TechIcon
                              name={tech}
                              className="h-3.5 w-3.5 text-muted-foreground"
                            />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE NATURAL SEQUENTIAL TIMELINE (block on md & below)                */}
      {/* ========================================================================= */}
      <div className="block md:hidden space-y-8">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
            Engineering Journey
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">
            Career Progression
          </h2>
        </div>

        <div className="relative border-l-2 border-border/70 ml-2 pl-6 space-y-10">
          {careerProgression.map((item, idx) => {
            const isLatest = idx === careerProgression.length - 1

            return (
              <div key={item.id} className="relative space-y-3">
                {/* Node Marker */}
                <div
                  className={`absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    isLatest
                      ? "border-accentBlue bg-accentBlue ring-4 ring-accentBlue/25"
                      : "border-foreground bg-background"
                  }`}
                />

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-accentBlue bg-accentBlue/10 px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {item.company}
                  </h3>
                  <div className="text-xs font-medium text-foreground/80">
                    {item.role} • {item.location}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {experienceSummaries[item.id] || item.responsibilities[0]}
                </p>

                {item.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-muted-foreground bg-muted/50 px-2 py-0.5 rounded border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
