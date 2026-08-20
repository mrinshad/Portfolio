import Link from "next/link"
import { ArrowDown, Linkedin, Github, ArrowUpRight, Terminal, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profileData } from "@/data"

const heroMarqueeItems = [
  "SYSTEMS ARCHITECTURE",
  "FULL-STACK ENGINEERING",
  "ENTERPRISE ERP PLATFORMS",
  "RELATIONAL DATABASE DESIGN",
  "CLOUD-NATIVE SOLUTIONS",
  "REST APIS & RBAC",
  "DISTRIBUTED WORKFLOWS",
]

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-between overflow-hidden pt-12 pb-6 lg:pt-20 lg:pb-8 bg-grid-pattern"
    >
      {/* Ambient Radial Backdrop Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-foreground/[0.03] blur-3xl" />

      <div className="container relative z-10 max-w-6xl px-6 my-auto">
        <div className="max-w-4xl space-y-8">
          {/* Status Chip with Pulse */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm shadow-sm transition-all hover:border-foreground/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Technical Lead & Full-Stack Engineer
            </span>
          </div>

          {/* Headline Scale */}
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {profileData.name}
            </h1>
            <p className="text-2xl font-semibold tracking-tight text-foreground/90 sm:text-3xl lg:text-4xl max-w-3xl leading-snug">
              Designing & building real-world software systems, ERP platforms, and cloud applications.
            </p>
          </div>

          {/* Description Narrative */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {profileData.shortIntro}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full gap-2 px-7 text-sm font-medium shadow-sm transition-all duration-200 hover:scale-[1.02]"
            >
              <Link href="#selected-work">
                Explore Selected Systems
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full gap-2 px-7 text-sm font-medium border-border/80 hover:bg-accent transition-all duration-200 hover:scale-[1.02]"
            >
              <Link href="#contact">
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-border/60 sm:pl-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50"
                aria-label="LinkedIn Profile"
              >
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50"
                aria-label="GitHub Profile"
              >
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Living Motion: Horizontal Marquee Strip */}
      <div className="relative z-10 w-full border-y border-border/40 bg-background/50 backdrop-blur-sm py-3 mt-12 overflow-hidden marquee-container">
        <div className="flex w-max items-center gap-8 animate-marquee">
          {[...heroMarqueeItems, ...heroMarqueeItems, ...heroMarqueeItems].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center gap-8 text-xs font-mono tracking-widest text-muted-foreground uppercase whitespace-nowrap"
              >
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
