"use client"

import * as React from "react"
import { useTheme } from "next-themes"

interface HeroVideoPortraitProps {
  videoSrc?: string
  className?: string
}

export function HeroVideoPortrait({
  videoSrc = "/assets/hero-portrait.mp4",
  className = "",
}: HeroVideoPortraitProps) {
  const { resolvedTheme } = useTheme()
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false)
  const [hasError, setHasError] = React.useState(false)

  // Fluid scrubbing refs (no re-renders on mousemove for 60-120fps fluidity)
  const prevXRef = React.useRef<number | null>(null)
  const targetTimeRef = React.useRef<number>(0)
  const isSeekingRef = React.useRef<boolean>(false)
  const rafIdRef = React.useRef<number | null>(null)

  // Sensitivity tuning: 0.65 yields smooth, responsive turnaround without skipping
  const SENSITIVITY = 0.65

  React.useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const video = videoRef.current
    if (!video) return

    // If reduced motion is requested, play at slow cinematic pace
    if (prefersReducedMotion) {
      video.playbackRate = 0.75
      video.play().catch(() => {})
      return
    }

    // High-performance pointer tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (prevXRef.current === null) {
        prevXRef.current = e.clientX
        return
      }

      const deltaX = e.clientX - prevXRef.current
      prevXRef.current = e.clientX

      const duration = video.duration
      if (!duration || Number.isNaN(duration)) return

      const timeDelta = (deltaX / window.innerWidth) * SENSITIVITY * duration
      targetTimeRef.current = Math.max(
        0,
        Math.min(duration, targetTimeRef.current + timeDelta)
      )

      // Schedule seek using requestAnimationFrame for zero-hang fluidity
      if (!isSeekingRef.current) {
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
        rafIdRef.current = requestAnimationFrame(() => {
          if (!video) return
          isSeekingRef.current = true
          if (typeof (video as any).fastSeek === "function") {
            try {
              ;(video as any).fastSeek(targetTimeRef.current)
            } catch {
              video.currentTime = targetTimeRef.current
            }
          } else {
            video.currentTime = targetTimeRef.current
          }
        })
      }
    }

    const handleMouseLeave = () => {
      prevXRef.current = null
    }

    // Touch support for mobile/tablets
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return
      const touchX = e.touches[0].clientX
      if (prevXRef.current === null) {
        prevXRef.current = touchX
        return
      }
      const deltaX = touchX - prevXRef.current
      prevXRef.current = touchX

      const duration = video.duration
      if (!duration || Number.isNaN(duration)) return

      const timeDelta = (deltaX / window.innerWidth) * SENSITIVITY * duration
      targetTimeRef.current = Math.max(
        0,
        Math.min(duration, targetTimeRef.current + timeDelta)
      )

      if (!isSeekingRef.current) {
        isSeekingRef.current = true
        video.currentTime = targetTimeRef.current
      }
    }

    const handleTouchEnd = () => {
      prevXRef.current = null
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
    }
  }, [])

  // Seek Queue to prevent frame drops or decoder hangs
  const handleSeeked = () => {
    const video = videoRef.current
    if (!video) return

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.03) {
      if (typeof (video as any).fastSeek === "function") {
        try {
          ;(video as any).fastSeek(targetTimeRef.current)
        } catch {
          video.currentTime = targetTimeRef.current
        }
      } else {
        video.currentTime = targetTimeRef.current
      }
    } else {
      isSeekingRef.current = false
    }
  }

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (video) {
      setIsVideoLoaded(true)
      // Start around mid-frame where the subject is centered
      const initialTime = (video.duration || 4) * 0.3
      video.currentTime = initialTime
      targetTimeRef.current = initialTime
    }
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 lg:right-6 xl:right-12 top-1/2 -translate-y-1/2 z-10 hidden sm:flex items-center justify-center select-none ${className}`}
    >
      {/* 
        Container with theme-adaptive ambient styling:
        - In Dark mode: 100% transparent blend into hero aurora & gradient-mesh
        - In Light mode: Soft ambient circular cameo with delicate rim lighting
      */}
      <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] flex items-center justify-center">
        {/* Ambient Halo Behind Portrait */}
        <div
          className={`absolute inset-4 rounded-full transition-opacity duration-700 pointer-events-none ${
            isDark
              ? "bg-accentBlue/10 blur-3xl opacity-60"
              : "bg-neutral-950/5 dark:bg-transparent rounded-full blur-2xl opacity-80"
          }`}
        />

        {/* Light theme delicate circular pedestal / vignette backdrop */}
        {!isDark && (
          <div
            className="absolute inset-2 sm:inset-4 rounded-full pointer-events-none transition-all duration-700"
            style={{
              background:
                "radial-gradient(circle at 50% 48%, rgba(24, 24, 27, 0.96) 0%, rgba(9, 9, 11, 0.92) 58%, rgba(0, 0, 0, 0.6) 72%, transparent 88%)",
              boxShadow:
                "0 20px 40px -15px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          />
        )}

        {/* 
          Video Wrapper with Organic Radial Masking:
          Softly dissolves the black outer video borders into zero opacity
        */}
        <div
          className="relative w-full h-full overflow-hidden rounded-full flex items-center justify-center"
          style={{
            maskImage:
              "radial-gradient(circle at 50% 48%, black 50%, rgba(0, 0, 0, 0.8) 68%, transparent 88%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 48%, black 50%, rgba(0, 0, 0, 0.8) 68%, transparent 88%)",
          }}
        >
          {/* Background Video */}
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            onSeeked={handleSeeked}
            onLoadedMetadata={handleLoadedMetadata}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover object-center scale-[1.06] transition-opacity duration-500 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* 
            Watermark Remover:
            Occludes the KlingAI 3.0 logo in the bottom-right corner with 100% seamless #000000
          */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-36 h-16 pointer-events-none z-20"
            style={{ backgroundColor: "#000000" }}
          />

          {/* Fallback image if video is not yet placed in public/assets */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-xs text-muted-foreground bg-background/50 backdrop-blur-sm rounded-full">
              <span>Place hero-portrait.mp4 in public/assets/</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
