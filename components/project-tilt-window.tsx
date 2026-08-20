"use client"

import * as React from "react"
import Link from "next/link"
import { ProjectItem } from "@/data"

interface ProjectTiltWindowProps {
  project: ProjectItem
  className?: string
}

export function ProjectTiltWindow({
  project,
  className = "",
}: ProjectTiltWindowProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [tilt, setTilt] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isPointerOver, setIsPointerOver] = React.useState(false)
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion) return
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    // Normalized coordinates (-0.5 to +0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    // Max 3.0 degrees tilt rotation on X and Y
    setTilt({
      x: -y * 6, // Range: -3.0deg to +3.0deg
      y: x * 6,  // Range: -3.0deg to +3.0deg
    })
  }

  const handleMouseEnter = () => setIsPointerOver(true)
  const handleMouseLeave = () => {
    setIsPointerOver(false)
    setTilt({ x: 0, y: 0 })
  }

  const transformStyle = isReducedMotion
    ? undefined
    : {
        transform: `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) ${
          isPointerOver ? "translateZ(8px)" : "translateZ(0px)"
        }`,
        transformStyle: "preserve-3d" as const,
        transition: isPointerOver
          ? "transform 80ms ease-out, border-color 300ms ease, box-shadow 300ms ease"
          : "transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 300ms ease, box-shadow 300ms ease",
      }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
      className={`group block overflow-hidden rounded-xl border border-border bg-card shadow-xl transition-all duration-300 will-change-transform transform-gpu hover:border-accentBlue/60 hover:shadow-2xl ${className}`}
    >
      <Link
        href={`/work/${project.id}`}
        className="block focus:outline-none focus:ring-2 focus:ring-accentBlue rounded-xl overflow-hidden"
      >
        {/* Window Header */}
        <div className="flex items-center justify-between border-b border-border/70 bg-muted/30 px-5 py-3 relative z-10">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30 group-hover:bg-rose-500 transition-colors duration-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30 group-hover:bg-amber-400 transition-colors duration-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30 group-hover:bg-emerald-500 transition-colors duration-300" />
          </div>
          <span className="text-[11px] font-mono text-muted-foreground">
            {project.id}.byten.in / live-preview
          </span>
          <div className="w-8" />
        </div>

        {/* Visual Screenshot Image - Complete 100% Uncropped Display */}
        <div className="w-full overflow-hidden bg-muted/10">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} interface preview`}
              className="w-full h-auto block"
              loading="lazy"
            />
          ) : (
            <div className="aspect-[16/9] p-12 flex flex-col items-center justify-center text-center space-y-3 h-full bg-gradient-to-br from-card via-muted/20 to-card">
              <div className="text-3xl font-black text-foreground tracking-tight uppercase">
                {project.name}
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
