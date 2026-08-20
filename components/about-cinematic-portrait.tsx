"use client"

import * as React from "react"
import Image from "next/image"

export function AboutCinematicPortrait() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isReducedMotion, setIsReducedMotion] = React.useState(false)
  const [offset, setOffset] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(query.matches)
    const onChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setOffset({ x: x * 6, y: y * 6 })
  }

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md mx-auto lg:max-w-none flex items-center justify-center lg:justify-end overflow-visible select-none pointer-events-auto"
    >
      {/* Subject Portrait Container with Organic Edge Dissolve */}
      <div
        style={{
          transform: isReducedMotion
            ? undefined
            : `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] aspect-[3/4] overflow-hidden"
      >
        {/* Crisp Subject Image */}
        <Image
          src="/assets/photo.png"
          alt="Mohammed Rinshad P working on laptop"
          width={900}
          height={1200}
          priority
          className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.02]"
        />

        {/* ========================================================================= */}
        {/* MULTI-DIRECTIONAL SEAMLESS GRADIENT MASKS BLENDING INTO HERO BACKGROUND  */}
        {/* ========================================================================= */}

        {/* 1. Left Edge Blend (Gentle soft dissolve into text area) */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none z-10" />

        {/* 2. Bottom Edge Blend (Soft floor dissolve showing more torso & laptop) */}
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none z-10" />

        {/* 3. Top Edge Soft Feather */}
        <div className="absolute inset-x-0 top-0 h-10 sm:h-14 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none z-10" />

        {/* 4. Right Edge Soft Blend */}
        <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-background via-background/60 to-transparent pointer-events-none z-10" />

        {/* 5. Ambient Warm Glow Enhancer */}
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-amber-500/[0.04] dark:bg-amber-400/[0.05] blur-3xl pointer-events-none z-10" />
      </div>
    </div>
  )
}
