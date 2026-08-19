import { GraduationCap, Code2, Database, Cloud, Layers, Terminal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillCategories, educationData } from "@/data"

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-label="Capabilities & Background"
      className="py-24 lg:py-32 border-t border-border/40"
    >
      <div className="container max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Capabilities & Background
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Engineering Strengths & Stack
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A comprehensive overview of architectural competencies, software engineering standards, and technical domains.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Systems Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-xl border border-border/70 bg-card space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-foreground">
                How I Build Systems
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I approach software from the foundation up: starting with business requirement discovery, normalized relational database modeling, and clear API boundaries before crafting intuitive, responsive user interfaces.
                </p>
                <p>
                  Whether leading custom ERP projects at ByteN or implementing enterprise workflows at TCS and Veynad, my focus remains on building maintainable, secure, and production-ready applications.
                </p>
              </div>
            </div>

            {/* Education Credentials */}
            <div className="p-6 rounded-xl border border-border/70 bg-card space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <GraduationCap className="h-4 w-4" />
                Education
              </div>
              <div className="space-y-3 divide-y divide-border/40">
                {educationData.map((edu, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-3" : ""}>
                    <div className="text-xs font-semibold text-foreground">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {edu.institution}
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground pt-0.5">
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Categorized Technical Skills Matrix */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <Card
                  key={cat.category}
                  className="border border-border/60 bg-card hover:border-foreground/30 transition-colors shadow-none"
                >
                  <CardHeader className="p-5 pb-2">
                    <CardTitle className="text-sm font-bold text-foreground">
                      {cat.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cat.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs font-normal bg-muted/40 text-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
