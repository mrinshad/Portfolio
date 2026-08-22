"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import { ProjectItem } from "@/data"

interface ProjectImageSliderProps {
  project: ProjectItem
}

export function ProjectImageSlider({ project }: ProjectImageSliderProps) {
  const images = project.images && project.images.length > 0 ? project.images : project.image ? [project.image] : []
  const [currentIdx, setCurrentIdx] = React.useState<number>(0)
  const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false)
  const [isReducedMotion, setIsReducedMotion] = React.useState<boolean>(false)

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(query.matches)
    const onChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  const total = images.length

  const handlePrev = React.useCallback(() => {
    setCurrentIdx((prev) => (prev === 0 ? total - 1 : prev - 1))
  }, [total])

  const handleNext = React.useCallback(() => {
    setCurrentIdx((prev) => (prev === total - 1 ? 0 : prev + 1))
  }, [total])

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev()
      } else if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handlePrev, handleNext, isFullscreen])

  if (images.length === 0) {
    return null
  }

  const currentImage = images[currentIdx]

  return (
    <div className="space-y-4">
      {/* Main Window Slider Card */}
      <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-2xl transition-all duration-300">
        {/* Window Top Bar */}
        <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-5 py-3.5">
          {/* Traffic Dots */}
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* Browser Address & Counter */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline-block">
              {project.id}.byten.in / screen-0{currentIdx + 1}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-muted/80 text-[10px] font-mono font-bold text-foreground">
              0{currentIdx + 1} / 0{total}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(true)}
              aria-label="View fullscreen image"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Display Stage */}
        <div className="relative w-full overflow-hidden bg-muted/5 min-h-[260px] sm:min-h-[420px] flex items-center justify-center">
          <div className="w-full relative">
            <Image
              key={currentImage}
              src={currentImage}
              alt={`${project.name} screenshot 0${currentIdx + 1}`}
              width={1600}
              height={900}
              priority={currentIdx === 0}
              className={`w-full h-auto block object-contain select-none ${
                isReducedMotion ? "" : "transition-opacity duration-300 animate-in fade-in"
              }`}
            />
          </div>

          {/* Left Arrow Button */}
          {total > 1 && (
            <button
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background text-foreground border border-border/80 shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          )}

          {/* Right Arrow Button */}
          {total > 1 && (
            <button
              onClick={handleNext}
              aria-label="Next screenshot"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background text-foreground border border-border/80 shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          )}
        </div>

        {/* Thumbnail & Dot Selector Strip */}
        {total > 1 && (
          <div className="border-t border-border/50 bg-muted/20 p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  aria-label={`Jump to screenshot ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIdx === idx
                      ? "w-8 bg-accentBlue"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnail Preview Selector */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {images.map((imgSrc, idx) => (
                <button
                  key={imgSrc}
                  onClick={() => setCurrentIdx(idx)}
                  aria-label={`Select screenshot 0${idx + 1}`}
                  className={`relative flex-shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-md overflow-hidden border transition-all ${
                    currentIdx === idx
                      ? "border-accentBlue ring-2 ring-accentBlue/30 scale-105"
                      : "border-border/60 opacity-60 hover:opacity-100 hover:border-foreground/40"
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`Thumbnail 0${idx + 1}`}
                    width={100}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 px-1 py-0.2 bg-background/80 text-[8px] font-mono font-bold">
                    0{idx + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md p-4 sm:p-8 flex flex-col justify-between items-center"
        >
          {/* Modal Header */}
          <div className="w-full max-w-7xl flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {project.name} • 0{currentIdx + 1} of 0{total}
              </span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              aria-label="Close fullscreen"
              className="p-2 rounded-full bg-muted/60 hover:bg-muted text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Image */}
          <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center my-auto">
            <Image
              src={currentImage}
              alt={`${project.name} fullscreen screenshot 0${currentIdx + 1}`}
              width={1920}
              height={1080}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />

            {total > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous screenshot"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-background text-foreground border border-border shadow-xl transition-all"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next screenshot"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 hover:bg-background text-foreground border border-border shadow-xl transition-all"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Modal Thumbnails */}
          {total > 1 && (
            <div className="flex items-center gap-2 py-2 overflow-x-auto max-w-full">
              {images.map((imgSrc, idx) => (
                <button
                  key={imgSrc}
                  onClick={() => setCurrentIdx(idx)}
                  className={`relative flex-shrink-0 w-14 aspect-[16/10] rounded overflow-hidden border transition-all ${
                    currentIdx === idx
                      ? "border-accentBlue ring-2 ring-accentBlue"
                      : "border-border/40 opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imgSrc}
                    alt={`Thumb 0${idx + 1}`}
                    width={80}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
