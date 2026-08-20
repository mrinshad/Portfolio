import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"
import { EditorialCareerJourney } from "@/components/editorial-career-journey"
import { leadershipExperience, skillCategories, educationData } from "@/data"

export const metadata = {
  title: "About & Engineering Experience",
  description:
    "Engineering profile, full-stack software development experience, technical leadership, and architectural capabilities of Mohammed Rinshad P.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About & Engineering Experience | Mohammed Rinshad P",
    description:
      "Full-stack software engineering, systems architecture, and technical leadership across production platforms.",
    url: "/about",
  },
}

const techTickerItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  ".NET Core",
  "PostgreSQL",
  "Prisma ORM",
  "Azure Cloud",
  "Linux (RHEL)",
  "SQL Server",
  "REST APIs & RBAC",
  "GitHub Actions",
  "Docker",
  "Tailwind CSS",
]

export default function AboutPage() {
  return (
    <main className="py-16 lg:py-24 space-y-24">
      {/* ========================================================================= */}
      {/* 1. PERSONAL EDITORIAL INTRODUCTION                                        */}
      {/* ========================================================================= */}
      <section className="container max-w-6xl px-6 space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
            01 / About Rinshad
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground uppercase leading-[1.08]">
            Driven by craft,
            <br />
            <span className="font-light text-muted-foreground italic font-sans lowercase">curiosity,</span> and
            <br />
            durable systems.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 border-t border-border/50">
          {/* Left Column: Personal Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl text-foreground font-normal leading-relaxed">
              I am Mohammed Rinshad P, a software engineer with an instinct for architecture, clarity, and building tools that last.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                With an academic foundation in Computer Science from Mar Athanasius College of Engineering, my background spans enterprise web engineering, custom ERP architecture, and technical consulting across high-impact business systems.
              </p>
              <p>
                I find satisfaction in untangling complex workflows—turning intricate data models, institutional operations, and organizational rules into software that feels clear, fast, and dependable.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-border/40 text-xs font-mono">
              <div>
                <span className="text-muted-foreground block">Origin & Base</span>
                <span className="text-foreground font-bold">Kerala / Chennai, IN</span>
              </div>
              <div>
                <span className="text-muted-foreground block">Engineering Focus</span>
                <span className="text-foreground font-bold">Full-Stack & Systems</span>
              </div>
              <div>
                <span className="text-muted-foreground block">Background</span>
                <span className="text-foreground font-bold">B.Tech CSE (MACE)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Persona Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border border-border/70 bg-card/40 p-8 rounded-2xl space-y-6 shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground flex items-center justify-between">
                  <span>Profile Note</span>
                  <span className="flex items-center gap-1.5 text-emerald-500 font-mono text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Active Engineering
                  </span>
                </div>
                <div className="font-dancing text-4xl sm:text-5xl font-bold text-foreground pt-1">
                  m.rinshad
                </div>
              </div>

              <div className="space-y-4 text-sm border-t border-border/50 pt-5">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Core Philosophy
                  </div>
                  <p className="text-foreground font-medium italic leading-relaxed">
                    &ldquo;The best software is unpretentious—it solves complex problems with quiet precision and durable architecture.&rdquo;
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border/40 text-xs font-mono">
                  <div>
                    <span className="text-muted-foreground block text-[10px]">Specialization</span>
                    <span className="text-foreground font-semibold">Full-Stack & Systems</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px]">Core Principle</span>
                    <span className="text-foreground font-semibold">Clarity &gt; Complexity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FULL-WIDTH CONTINUOUS TECH TICKER                                      */}
      {/* ========================================================================= */}
      <div className="w-full border-y border-border/40 py-4 overflow-hidden marquee-container">
        <div className="flex w-max items-center gap-10 animate-marquee-fast">
          {[...techTickerItems, ...techTickerItems, ...techTickerItems].map(
            (tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap"
              >
                <TechIcon name={tech} className="h-3.5 w-3.5 text-foreground" />
                <span>{tech}</span>
                <span className="h-1 w-1 rounded-full bg-accentBlue/60 ml-6" />
              </div>
            )
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. EDITORIAL CAREER PROGRESSION (01 Wizzo → 02 Griantek → 03 Veynad → 04 TCS) */}
      {/* ========================================================================= */}
      <section className="container max-w-6xl px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-foreground pb-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
              02 / Evolution
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Career Journey
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md font-mono">
            Chronological employment progression across full-stack engineering and enterprise platforms.
          </p>
        </div>

        {/* Scroll-Reactive Editorial Journey (01 to 04) */}
        <EditorialCareerJourney />
      </section>

      {/* ========================================================================= */}
      {/* 4. TECHNICAL LEADERSHIP & CONSULTING (Dedicated ByteN Section)            */}
      {/* ========================================================================= */}
      <section className="container max-w-6xl px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-foreground pb-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              03 / Leadership & Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Technical Leadership
            </h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-semibold bg-emerald-500/10 px-3 py-1 rounded">
            Active Technical Lead
          </span>
        </div>

        <div className="space-y-8">
          {leadershipExperience.map((item) => (
            <article
              key={item.id}
              className="py-6 sm:py-8 border-b border-border/40 last:border-b-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              {/* Left Metadata & Period (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                  <span className="text-foreground font-semibold">{item.period}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 ml-1" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                  {item.company}
                </h3>

                <div className="text-sm font-semibold text-emerald-500">
                  {item.role}
                </div>

                <div className="text-xs font-mono text-muted-foreground">
                  {item.location}
                </div>
              </div>

              {/* Right Editorial Story & Technologies (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-semibold">
                  Technical Leadership & System Architecture
                </div>

                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed font-normal">
                  Leading technical architecture and end-to-end development of custom ERP, accounting, and simulation platforms. Designing normalized PostgreSQL schemas, REST APIs, RBAC authorization, and engineering guidelines.
                </p>

                {item.technologies && (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs font-mono text-muted-foreground border-t border-border/40">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 text-foreground font-medium"
                      >
                        <TechIcon name={tech} className="h-3 w-3 text-muted-foreground" />
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNICAL DOMAINS & STACK (Editorial Grouping)                          */}
      {/* ========================================================================= */}
      <section className="container max-w-6xl px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-foreground pb-6">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
              04 / Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
              Technical Domains
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md font-mono">
            Hands-on technologies, paradigms, and infrastructure utilized across production environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((cat, idx) => (
            <div key={cat.category} className="space-y-4 border-t-2 border-foreground pt-4">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span className="text-foreground font-bold">0{idx + 1}</span>
                <span>{cat.category}</span>
              </div>

              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground py-0.5"
                  >
                    <TechIcon name={skill} className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EDUCATION & ACADEMIC FOUNDATION                                        */}
      {/* ========================================================================= */}
      <section className="container max-w-6xl px-6 space-y-8">
        <div className="border-b border-foreground pb-6">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
            05 / Foundation
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educationData.map((edu, idx) => (
            <div key={idx} className="space-y-2 border-t border-border/60 pt-4">
              <div className="text-xs font-mono uppercase tracking-widest text-accentBlue font-bold">
                {edu.period}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM GATEWAY LINKS                                                   */}
      {/* ========================================================================= */}
      <section className="container max-w-6xl px-6 pt-8 border-t-2 border-foreground">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-1">
            <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">
              Ready to explore production software?
            </h3>
            <p className="text-sm text-muted-foreground">
              Review case studies for eduByte, byteFlow, Crusher ERP, and byteBallot.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/work"
              className="group/work inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-background bg-foreground px-6 py-4 hover:bg-accentBlue hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2"
            >
              <span>Selected Systems</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover/work:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group/contact inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground border border-border px-6 py-4 hover:border-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
