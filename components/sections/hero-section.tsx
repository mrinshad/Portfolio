import Link from "next/link"
import { ArrowDown, Linkedin, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profileData } from "@/data"

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20 lg:py-28"
    >
      <div className="container max-w-6xl px-6">
        <div className="max-w-3xl space-y-8">
          {/* Availability / Position Chip */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Full-Stack Software Engineer & Technical Lead
          </div>

          {/* Headline & Name */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {profileData.name}
            </h1>
            <p className="text-xl font-medium tracking-tight text-muted-foreground sm:text-2xl lg:text-3xl">
              {profileData.shortPositioning}
            </p>
          </div>

          {/* Description Narrative */}
          <p className="text-base text-muted-foreground leading-relaxed sm:text-lg max-w-2xl">
            {profileData.shortIntro}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild size="lg" className="rounded-full gap-2 px-6 shadow-sm">
              <Link href="#selected-work">
                Explore Selected Systems
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full gap-2 px-6 border-border/80 hover:bg-accent"
            >
              <Link href="#contact">
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>

            {/* Social Profile Anchors */}
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-border/60 sm:pl-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full text-muted-foreground hover:text-foreground"
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
                className="h-10 w-10 rounded-full text-muted-foreground hover:text-foreground"
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
    </section>
  )
}
