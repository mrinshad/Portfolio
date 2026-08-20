import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { TechIcon } from "@/components/tech-icon"
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

const employmentSummaries: { [key: string]: string } = {
  tcs: "Contributing to internal enterprise web applications, developing UI components, integrating REST APIs, refactoring codebases, and administering Linux (RHEL) server environments.",
  veynad: "Engineered an enterprise auditing platform with React and .NET Core, implementing Azure AD B2C authentication, cloud services, and automated GitHub Actions CI/CD pipelines.",
  griantek: "Developed and deployed full-stack Next.js and Node.js web applications, automated journal and lead processing workflows, and managed GCP/Supabase backend infrastructure.",
  wizzo: "Developed restaurant and warehouse management web and mobile applications using Laravel, React, Java, and MySQL while providing production support and testing.",
}

const leadershipSummaries: { [key: string]: string } = {
  byten: "Leading technical architecture and full-stack development of custom ERP, accounting, and simulation platforms. Designing relational PostgreSQL schemas, REST APIs, RBAC systems, Git workflows, and engineering guidelines.",
}

export default function AboutPage() {
  return (
    <main className="py-16 lg:py-24 space-y-24">
      {/* 1. Header Section */}
      <div className="container max-w-5xl px-6 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
          About Rinshad
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-none">
          Background & Experience
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-normal">
          Full-Stack Software Engineer currently at <span className="text-foreground font-semibold">Tata Consultancy Services (TCS)</span>, with proven experience in technical leadership, system architecture, and cloud-native application delivery.
        </p>
      </div>

      {/* 2. Full-Width Continuous Tech Ticker (Touches both ends of the viewport) */}
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

      {/* 3. Main Content Container */}
      <div className="container max-w-5xl px-6 space-y-24">
        {/* Primary Employment Timeline */}
        <div className="space-y-12">
          <div className="border-b border-foreground pb-4 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
              Professional Employment Timeline
            </h2>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {employmentExperience.length} Milestones
            </span>
          </div>

          <div className="relative border-l-2 border-border/70 ml-3 sm:ml-5 pl-6 sm:pl-10 space-y-12">
            {employmentExperience.map((item, idx) => {
              const isCurrent = idx === 0

              return (
                <div key={item.id} className="relative group space-y-3">
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-1.5 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                      isCurrent
                        ? "border-accentBlue bg-accentBlue ring-4 ring-accentBlue/20 scale-110"
                        : "border-foreground bg-background group-hover:bg-foreground"
                    }`}
                  />

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-foreground font-bold bg-muted/60 px-2.5 py-1 rounded">
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {item.location}
                    </span>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-accentBlue uppercase">
                        <span className="h-1.5 w-1.5 rounded-full bg-accentBlue animate-pulse" />
                        Current Position
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {item.company}
                    </h3>
                    <div className="text-sm font-medium text-foreground/80">
                      {item.role}
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                    {employmentSummaries[item.id] || item.responsibilities[0]}
                  </p>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-xs font-mono uppercase text-muted-foreground">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center gap-1.5 text-foreground">
                          <TechIcon name={tech} className="h-3.5 w-3.5 text-muted-foreground" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Leadership & Consulting Experience */}
        <div className="space-y-8 pt-4">
          <div className="border-b border-foreground pb-4 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
              Leadership & Consulting
            </h2>
            <span className="text-xs font-mono uppercase tracking-wider text-accentBlue font-semibold">
              Technical Lead
            </span>
          </div>

          <div className="space-y-8">
            {leadershipExperience.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-b border-border/50 pb-8"
              >
                <div className="md:col-span-4 space-y-1">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {item.period}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.company}
                  </h3>
                  <div className="text-xs font-mono text-muted-foreground">
                    {item.role} • {item.location}
                  </div>
                </div>

                <div className="md:col-span-8 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {leadershipSummaries[item.id] || item.responsibilities[0]}
                  </p>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-4 pt-1 text-xs font-mono uppercase text-muted-foreground">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center gap-1 text-foreground">
                          <TechIcon name={tech} className="h-3 w-3 text-muted-foreground" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Taxonomy with Icons */}
        <div className="space-y-10 pt-4">
          <div className="border-b border-foreground pb-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
              Technical Domains & Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="space-y-3 border-t border-border/40 pt-4">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground"
                    >
                      <TechIcon name={skill} className="h-3.5 w-3.5 text-muted-foreground" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Credentials */}
        <div className="space-y-8 pt-4">
          <div className="border-b border-foreground pb-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-1 border-t border-border/40 pt-4">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {edu.period}
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {edu.degree}
                </h3>
                <div className="text-xs text-muted-foreground">
                  {edu.institution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Gateway Link */}
        <div className="pt-12 border-t-2 border-foreground flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
              Explore Live Software Systems
            </h3>
            <p className="text-xs text-muted-foreground">
              Review case studies for eduByte, byteFlow, Crusher ERP, and byteBallot.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-background bg-foreground px-6 py-3.5 hover:bg-accentBlue hover:text-white transition-colors whitespace-nowrap"
          >
            Explore Work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
