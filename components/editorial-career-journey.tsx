"use client"

import * as React from "react"
import { careerProgression } from "@/data"
import { TechIcon } from "./tech-icon"

const experienceStories: {
  [key: string]: {
    lead: string
    summary: string
    techHighlight: string[]
  }
} = {
  wizzo: {
    lead: "Application Engineering & Production Support",
    summary:
      "Developed web and Android applications for restaurant, warehouse, and business management systems using Laravel, React, Java, and MySQL while providing production support.",
    techHighlight: ["Laravel", "React", "Java", "MySQL", "Android"],
  },
  griantek: {
    lead: "Full-Stack Web Engineering & Automation",
    summary:
      "Developed and deployed full-stack Next.js and Node.js web applications, automated journal and lead processing workflows, and managed GCP/Supabase backend infrastructure.",
    techHighlight: ["Next.js", "Node.js", "GCP", "Supabase", "NGINX"],
  },
  veynad: {
    lead: "Enterprise Auditing Platform & Cloud Security",
    summary:
      "Engineered an enterprise auditing platform with React and .NET Core, implementing Azure AD B2C enterprise security and automated GitHub Actions CI/CD deployment pipelines.",
    techHighlight: ["React", ".NET Core", "Azure AD B2C", "Azure Cloud", "CI/CD"],
  },
  tcs: {
    lead: "Enterprise Web Systems & Linux Administration",
    summary:
      "Contributing to internal enterprise applications, engineering frontend forms and workflows, integrating REST APIs, refactoring codebases for long-term maintainability, and administering Linux (RHEL) server environments.",
    techHighlight: ["React", "JavaScript", "Linux (RHEL)", "REST APIs"],
  },
}

export function EditorialCareerJourney() {
  const itemRefs = React.useRef<(HTMLElement | null)[]>([])
  const [activeIndex, setActiveIndex] = React.useState<number>(0)
  const [isReducedMotion, setIsReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(query.matches)

    const onChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  // Robust Scroll-Driven Focus Tracking
  React.useEffect(() => {
    if (isReducedMotion) return

    const handleScroll = () => {
      const focalLine = window.innerHeight * 0.45
      let closestIdx = 0
      let minDistance = Infinity

      itemRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const elementCenter = rect.top + rect.height * 0.35
        const distance = Math.abs(elementCenter - focalLine)

        if (distance < minDistance) {
          minDistance = distance
          closestIdx = index
        }
      })

      setActiveIndex(closestIdx)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isReducedMotion])

  return (
    <div className="relative pl-6 sm:pl-10 space-y-12">
      {/* Subtle Progression Spine */}
      <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[1.5px] bg-border/50" />

      {careerProgression.map((item, idx) => {
        const story = experienceStories[item.id] || {
          lead: item.role,
          summary: item.responsibilities[0],
          techHighlight: item.technologies || [],
        }
        const isActive = activeIndex === idx
        const isPresent = item.period.includes("Present")
        const chapterNumber = `0${idx + 1}`

        return (
          <article
            key={item.id}
            ref={(el) => {
              itemRefs.current[idx] = el
            }}
            tabIndex={0}
            onFocus={() => setActiveIndex(idx)}
            className={`relative py-6 sm:py-8 border-b border-border/40 last:border-b-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-4 rounded-xl ${
              isActive || isReducedMotion
                ? "opacity-100 translate-x-1 sm:translate-x-2"
                : "opacity-40 hover:opacity-80 translate-x-0"
            }`}
          >
            {/* Progression Node Marker */}
            <div
              className={`absolute -left-[30px] sm:-left-[46px] top-8 sm:top-10 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                isActive && !isReducedMotion
                  ? "border-accentBlue bg-accentBlue ring-4 ring-accentBlue/25 scale-125"
                  : "border-muted-foreground/50 bg-background"
              }`}
            />

            {/* Left Metadata & Period (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                <span
                  className={`font-bold transition-colors duration-200 ${
                    isActive ? "text-accentBlue" : "text-muted-foreground"
                  }`}
                >
                  {chapterNumber}
                </span>
                <span className="text-muted-foreground">/</span>
                <span
                  className={`transition-colors duration-200 ${
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {item.period}
                </span>
                {isPresent && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 ml-1" />
                )}
              </div>

              <h3
                className={`text-2xl sm:text-3xl font-black uppercase tracking-tight transition-colors duration-200 ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.company}
              </h3>

              <div
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-foreground/90 font-semibold" : "text-muted-foreground"
                }`}
              >
                {item.role}
              </div>

              <div className="text-xs font-mono text-muted-foreground">
                {item.location}
              </div>
            </div>

            {/* Right Editorial Story & Technologies (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div
                className={`text-xs font-mono uppercase tracking-wider font-semibold transition-colors duration-200 ${
                  isActive ? "text-accentBlue" : "text-muted-foreground"
                }`}
              >
                {story.lead}
              </div>

              <p
                className={`text-base sm:text-lg leading-relaxed transition-colors duration-200 ${
                  isActive ? "text-foreground/90 font-normal" : "text-muted-foreground"
                }`}
              >
                {story.summary}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs font-mono text-muted-foreground border-t border-border/40">
                {story.techHighlight.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className={`inline-flex items-center gap-1.5 transition-colors duration-200 ${
                      isActive ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    <TechIcon name={tech} className="h-3 w-3 text-muted-foreground" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
