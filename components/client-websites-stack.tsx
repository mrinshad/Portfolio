"use client"

import * as React from "react"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { clientWebsites, ProjectItem } from "@/data"

export function ClientWebsitesStack() {
  const [activeIdx, setActiveIdx] = React.useState<number>(1) // Center card default
  const [isHovering, setIsHovering] = React.useState<boolean>(false)
  const [isReducedMotion, setIsReducedMotion] = React.useState<boolean>(false)

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(query.matches)

    const onChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  const activeProject = clientWebsites[activeIdx] || clientWebsites[0]

  return (
    <section
      aria-label="Commercial Client Websites"
      className="container max-w-6xl px-6 pt-16 pb-8 border-t border-border/50 space-y-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Summary & Active Readout (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
              02 / Commercial Platforms
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Client Websites
            </h2>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Strategic digital presence, performance optimization, and production cloud deployment engineered for commercial organizations and academic institutions.
          </p>

          {/* Active Project Highlight Card */}
          <div className="p-6 rounded-2xl border border-border/70 bg-card/60 space-y-3 shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <span className="text-accentBlue font-bold">
                0{activeIdx + 1} / 0{clientWebsites.length}
              </span>
              <span>{activeProject.category}</span>
            </div>

            <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">
              {activeProject.name}
            </h3>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {activeProject.summary}
            </p>

            <div className="pt-3 border-t border-border/40 flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground">
                Role: {activeProject.role}
              </span>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:text-accentBlue hover:underline transition-colors"
                >
                  Visit Website
                  <ExternalLink className="h-3.5 w-3.5 text-accentBlue" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Physical Overlapping Preview Card Stack (7 cols) */}
        <div className="lg:col-span-7">
          {/* ========================================================================= */}
          {/* DESKTOP PHYSICAL OVERLAPPING STACK                                        */}
          {/* ========================================================================= */}
          <div
            className="hidden md:flex relative h-[360px] lg:h-[400px] items-center justify-center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {clientWebsites.map((site, idx) => {
              const isSelected = activeIdx === idx
              const total = clientWebsites.length
              const offset = idx - 1 // -1 for first, 0 for second, 1 for third

              // Stack offsets
              const baseTranslateX = offset * 110
              const baseRotate = isReducedMotion ? 0 : offset * 3
              const hoverTranslateY = isSelected ? -16 : 0
              const zIndex = isSelected ? 30 : idx === 1 ? 20 : 10
              const scale = isSelected ? 1.03 : 0.96
              const opacity = isHovering && !isSelected ? 0.75 : 1

              return (
                <div
                  key={site.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onFocus={() => setActiveIdx(idx)}
                  tabIndex={0}
                  style={{
                    transform: `translateX(${baseTranslateX}px) translateY(${hoverTranslateY}px) rotate(${baseRotate}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    transition:
                      "transform 350ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
                  }}
                  className={`absolute w-[340px] lg:w-[380px] rounded-xl border bg-card shadow-2xl overflow-hidden cursor-pointer group focus:outline-none focus:ring-2 focus:ring-accentBlue ${
                    isSelected
                      ? "border-accentBlue/80 shadow-2xl shadow-accentBlue/10"
                      : "border-border/80 hover:border-foreground/40"
                  }`}
                >
                  {/* Window Dot Header */}
                  <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          isSelected ? "bg-rose-500" : "bg-muted-foreground/30"
                        }`}
                      />
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          isSelected ? "bg-amber-400" : "bg-muted-foreground/30"
                        }`}
                      />
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          isSelected ? "bg-emerald-500" : "bg-muted-foreground/30"
                        }`}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground truncate max-w-[160px]">
                      {site.id}.byten.in / live
                    </span>
                    <div className="w-4" />
                  </div>

                  {/* Screenshot Image Preview */}
                  <div className="w-full aspect-[16/10] overflow-hidden bg-muted/10">
                    {site.image ? (
                      <img
                        src={site.image}
                        alt={`${site.name} preview`}
                        className="w-full h-full object-cover object-top block"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-muted/20">
                        <span className="font-bold text-foreground">{site.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-3.5 bg-card/90 flex items-center justify-between border-t border-border/40">
                    <div className="truncate pr-2">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground truncate">
                        {site.category}
                      </div>
                      <div className="text-sm font-bold text-foreground uppercase tracking-tight truncate">
                        {site.name}
                      </div>
                    </div>

                    {site.liveUrl && (
                      <a
                        href={site.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${site.name}`}
                        className="p-1.5 rounded-lg bg-muted/60 hover:bg-accentBlue hover:text-white text-muted-foreground transition-colors flex-shrink-0"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* ========================================================================= */}
          {/* MOBILE SEQUENTIAL STACK                                                   */}
          {/* ========================================================================= */}
          <div className="flex md:hidden flex-col gap-6">
            {clientWebsites.map((site, idx) => (
              <div
                key={site.id}
                onClick={() => setActiveIdx(idx)}
                className={`rounded-xl border bg-card shadow-lg overflow-hidden transition-all ${
                  activeIdx === idx ? "border-accentBlue ring-1 ring-accentBlue" : "border-border"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {site.name}
                  </span>
                  <div className="w-4" />
                </div>

                {/* Screenshot */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-muted/10">
                  {site.image && (
                    <img
                      src={site.image}
                      alt={`${site.name} preview`}
                      className="w-full h-full object-cover object-top block"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Footer */}
                <div className="p-4 flex items-center justify-between border-t border-border/40">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-muted-foreground">
                      {site.category}
                    </div>
                    <div className="text-base font-bold text-foreground uppercase">
                      {site.name}
                    </div>
                  </div>

                  {site.liveUrl && (
                    <a
                      href={site.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase text-accentBlue"
                    >
                      Visit
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
