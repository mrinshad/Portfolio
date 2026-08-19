import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { profileData, leadershipExperience, employmentExperience, skillCategories, educationData } from "@/data"

export const metadata = {
  title: "About & Experience | Mohammed Rinshad P",
  description: "Professional background, full-stack development at TCS, technical leadership at ByteN, and engineering capabilities of Mohammed Rinshad P.",
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
    <main className="py-16 lg:py-24 space-y-28">
      <div className="container max-w-5xl px-6 space-y-24">
        {/* Page Header */}
        <div className="space-y-6 border-b border-border/50 pb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            About / Engineering & Leadership
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-none">
            Background & Experience
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            Full-Stack Software Engineer currently at <span className="text-foreground font-bold">Tata Consultancy Services (TCS)</span>, with proven leadership in architecting custom ERP platforms, relational databases, and enterprise applications.
          </p>
        </div>

        {/* Continuous Tech Ticker */}
        <div className="w-full border-y border-border/40 py-4 overflow-hidden marquee-container">
          <div className="flex w-max items-center gap-10 animate-marquee-fast">
            {[...techTickerItems, ...techTickerItems, ...techTickerItems].map(
              (tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-10 font-mono text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap"
                >
                  <span>{tech}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground/40" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Primary Employment Experience (Editorial Rows) */}
        <div className="space-y-12">
          <div className="border-b border-foreground pb-4">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
              Professional Employment
            </h2>
          </div>

          <div className="space-y-16">
            {employmentExperience.map((item, idx) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-border/50 pb-12"
              >
                <div className="md:col-span-4 space-y-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {item.period}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {item.company}
                  </h3>
                  <div className="text-sm font-mono text-muted-foreground">
                    {item.role} • {item.location}
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="text-base text-muted-foreground leading-relaxed flex items-start gap-3"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0 mt-2.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground pt-3">
                      Stack: {item.technologies.join(" / ")}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Consulting Experience */}
        <div className="space-y-12 pt-8">
          <div className="border-b border-foreground pb-4">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
              Leadership & Consulting Experience
            </h2>
          </div>

          <div className="space-y-16">
            {leadershipExperience.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-border/50 pb-12"
              >
                <div className="md:col-span-4 space-y-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {item.period}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {item.company}
                  </h3>
                  <div className="text-sm font-mono text-muted-foreground">
                    {item.role} • {item.location}
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="text-base text-muted-foreground leading-relaxed flex items-start gap-3"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0 mt-2.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground pt-3">
                      Stack: {item.technologies.join(" / ")}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Taxonomy (Borderless Typographic Grid) */}
        <div className="space-y-12 pt-8">
          <div className="border-b border-foreground pb-4">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
              Technical Skill Taxonomy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="space-y-3 border-t border-border/40 pt-4">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {cat.category}
                </div>
                <div className="text-base font-medium text-foreground tracking-tight leading-relaxed">
                  {cat.skills.join("  /  ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Credentials */}
        <div className="space-y-12 pt-8">
          <div className="border-b border-foreground pb-4">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-foreground">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-2 border-t border-border/40 pt-4">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {edu.period}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {edu.degree}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gateway Link */}
        <div className="pt-16 border-t-2 border-foreground flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">
              Explore Live Software Systems
            </h3>
            <p className="text-sm text-muted-foreground">
              Review case studies for eduByte, byteFlow, Crusher ERP, and byteBallot.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-background bg-foreground px-8 py-4 hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Explore Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
