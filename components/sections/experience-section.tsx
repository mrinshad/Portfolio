import { MapPin, Calendar, Briefcase, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experienceData } from "@/data"

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-24 lg:py-32 border-t border-border/40"
    >
      <div className="container max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Track Record
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience & Technical Leadership
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Leading software architecture and delivering enterprise web applications, cloud-native platforms, and custom ERP systems.
          </p>
        </div>

        {/* Experience Timeline Track */}
        <div className="relative border-l-2 border-border/60 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((item) => {
            return (
              <div key={item.id} className="relative group">
                {/* Timeline Marker Bullet */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-6 h-3.5 w-3.5 rounded-full border-2 transition-transform group-hover:scale-125 ${
                    item.isLeadership
                      ? "border-emerald-500 bg-emerald-500/20"
                      : "border-foreground bg-background"
                  }`}
                />

                <Card
                  className={`border transition-all duration-200 shadow-sm ${
                    item.isLeadership
                      ? "border-emerald-500/30 bg-card hover:border-emerald-500/60"
                      : "border-border/70 bg-card hover:border-foreground/30"
                  }`}
                >
                  <CardHeader className="pb-3 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {item.isLeadership && (
                          <Badge variant="status" className="gap-1 text-[11px]">
                            <Award className="h-3 w-3" />
                            Technical Leadership
                          </Badge>
                        )}
                        <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.period}
                        </span>
                      </div>

                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>

                    <div>
                      <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                        {item.role}
                      </CardTitle>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground pt-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {item.company}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-foreground/50 shrink-0 mt-2" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
