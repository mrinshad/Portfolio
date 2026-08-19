import Link from "next/link"
import { ArrowRight, ArrowUpRight, Laptop, Layers, Award, Terminal } from "lucide-react"
import { profileData, flagshipProjects } from "@/data"

const heroMarqueeItems = [
  "SYSTEMS ARCHITECTURE",
  "FULL-STACK ENGINEERING",
  "ENTERPRISE ERP PLATFORMS",
  "RELATIONAL DATABASE DESIGN",
  "CLOUD-NATIVE SOLUTIONS",
  "REST APIS & RBAC",
  "DISTRIBUTED WORKFLOWS",
]

export default function Home() {
  const featuredTwo = flagshipProjects.slice(0, 2)

  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Massive Typographic Hero */}
      <section
        aria-label="Introduction"
        className="relative flex min-h-[calc(85vh-5rem)] flex-col justify-between py-16 lg:py-24"
      >
        <div className="container max-w-6xl px-6 my-auto space-y-12">
          <div className="space-y-6">
            <div className="inline-block text-xs font-mono tracking-widest uppercase text-muted-foreground">
              Full-Stack Software Engineer & Technical Lead
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground uppercase leading-none">
              Mohammed
              <br />
              Rinshad P
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/90 font-medium tracking-tight max-w-3xl leading-snug pt-4">
              Architecting scalable software systems, enterprise ERPs, and cloud-native web applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-border/50">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-foreground hover:underline underline-offset-8"
            >
              Explore Selected Systems
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-8"
            >
              About & Experience
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-8"
            >
              Contact
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Continuous Monochrome Ticker */}
        <div className="w-full border-y border-border/40 py-4 mt-16 overflow-hidden marquee-container">
          <div className="flex w-max items-center gap-10 animate-marquee">
            {[...heroMarqueeItems, ...heroMarqueeItems, ...heroMarqueeItems].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-10 text-xs font-mono tracking-widest text-muted-foreground uppercase whitespace-nowrap"
                >
                  <span>{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 2. Full-Black Contrast Featured Systems Section */}
      <section className="py-28 bg-black text-white dark:bg-zinc-950 border-y border-zinc-800">
        <div className="container max-w-6xl px-6 space-y-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Featured Work / 01 — 02
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
                Selected Systems
              </h2>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-300 hover:text-white hover:underline underline-offset-8"
            >
              View All Systems ({flagshipProjects.length}) →
            </Link>
          </div>

          {/* Large Editorial Showcase Rows */}
          <div className="space-y-28">
            {featuredTwo.map((project, idx) => {
              const projectNumber = `0${idx + 1} / 0${flagshipProjects.length}`

              return (
                <div
                  key={project.id}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Text Column */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      {projectNumber} • {project.category}
                    </div>

                    <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                      {project.name}
                    </h3>

                    <p className="text-base text-zinc-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 pt-2">
                      Stack: {project.technologies.slice(0, 4).join(" / ")}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/work/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white border-b border-white pb-1 hover:opacity-80 transition-opacity"
                      >
                        Read Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Visual Interface Stage */}
                  <div className="lg:col-span-7">
                    <Link
                      href={`/work/${project.id}`}
                      className="block overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:border-zinc-600"
                    >
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {project.id}.byten.in / production
                        </span>
                        <div className="w-8" />
                      </div>

                      {/* Visual Interface Canvas */}
                      <div className="p-12 sm:p-16 flex flex-col items-center justify-center text-center space-y-4 min-h-[260px] bg-gradient-to-br from-zinc-900 to-black">
                        <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                          Production Platform
                        </div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {project.name}
                        </div>
                        <div className="text-xs font-mono text-zinc-400">
                          Role: {project.role}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Editorial Gateway Row */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 border-l-2 border-foreground pl-6">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Career Track Record
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
                Engineering & Leadership
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full-Stack Developer at Tata Consultancy Services (TCS) with technical leadership & consulting experience at ByteN.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:underline"
                >
                  Read Background & Experience →
                </Link>
              </div>
            </div>

            <div className="space-y-4 border-l-2 border-foreground pl-6">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Inquiries & Roles
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
                Start a Conversation
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Available for software architecture consultation, custom ERP development, and technical leadership roles.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:underline"
                >
                  Get in Touch Directly →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
