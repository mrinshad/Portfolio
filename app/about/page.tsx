import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"
import { EditorialCareerJourney } from "@/components/editorial-career-journey"
import { AboutCinematicPortrait } from "@/components/about-cinematic-portrait"
import { leadershipExperience, skillCategories, educationData, aboutPageContent } from "@/data"

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

export default function AboutPage() {
  const { hero, marqueeSkills, careerJourney, technicalLeadership, capabilities, education } = aboutPageContent

  return (
    <main className="py-16 lg:py-24 space-y-24">
      {/* ========================================================================= */}
      {/* 1. PERSONAL EDITORIAL INTRODUCTION                                        */}
      {/* ========================================================================= */}
      <section className="container max-w-6xl px-6 space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
            {hero.eyebrow}
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground uppercase leading-[1.08]">
            {hero.heading}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center pt-6 border-t border-border/50">
          {/* Left Column: Personal Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {hero.storyParagraphs[0] && (
              <p className="text-xl sm:text-2xl text-foreground font-normal leading-relaxed">
                {hero.storyParagraphs[0]}
              </p>
            )}

            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {hero.storyParagraphs.slice(1).map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-border/40 text-xs font-mono">
              {hero.metrics.map((metric, mIdx) => (
                <div key={mIdx}>
                  <span className="text-muted-foreground block">{metric.label}</span>
                  <span className="text-foreground font-bold">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Cinematic Subject Photo with Organic Edge Dissolve (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <AboutCinematicPortrait />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FULL-WIDTH CONTINUOUS TECH TICKER                                      */}
      {/* ========================================================================= */}
      <div className="w-full border-y border-border/40 py-4 overflow-hidden marquee-container">
        <div className="flex w-max items-center gap-10 animate-marquee-fast">
          {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map(
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
      {/* 2.5. PERSONAL QUOTE                                                        */}
      {/* ========================================================================= */}
      {aboutPageContent.personalQuote && (
        <section className="container max-w-6xl px-6">
          <blockquote className="border-l-2 border-accentBlue pl-6 py-2">
            <p className="text-xl sm:text-2xl font-light italic text-foreground/80 leading-relaxed">
              &ldquo;{aboutPageContent.personalQuote.text}&rdquo;
            </p>
            <cite className="block mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground not-italic">
              — {aboutPageContent.personalQuote.source}
            </cite>
          </blockquote>
        </section>
      )}

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
              Engineering Leadership
            </h2>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-semibold bg-emerald-500/10 px-3 py-1 rounded">
            Active Lead Developer
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
                  Engineering Leadership & System Architecture
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
