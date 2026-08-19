import { MapPin, Calendar, Briefcase, Award, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experienceData } from "@/data"

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-24 lg:py-32 border-t border-border/40 bg-muted/10"
    >
      <div className="container max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Track Record
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Experience & Leadership
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Leading software architecture and delivering enterprise web applications, cloud-native platforms, and custom ERP systems.
          </p>
        </div>

        {/* Experience Timeline Track */}
        <div className="relative border-l-2 border-border/70 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item) => {
            return (
              <div key={item.id} className="relative group">
                {/* Timeline Marker Bullet */}
                <div
                  className={`absolute -left-[33px] sm:-left-[49px] top-6 h-4 w-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 ${
                    item.isLeadership
                      ? "border-emerald-500 bg-emerald-500 ring-4 ring-emerald-500/20"
                      : "border-foreground bg-background group-hover:bg-foreground"
                  }`}
                />

                <div
                  className={`rounded-2xl border transition-all duration-200 p-6 sm:p-8 ${
                    item.isLeadership
                      ? "border-emerald-500/40 bg-card shadow-md relative overflow-hidden"
                      : "border-border/70 bg-card/70 hover:border-foreground/30 hover:shadow-sm"
                  }`}
                >
                  {item.isLeadership && (
                    <div className="absolute top-0 right-0 h-28 w-28 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                  )}

                  <div className="space-y-4">
                    {/* Header: Period & Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {item.isLeadership && (
                          <Badge variant="status" className="gap-1 text-[11px] font-semibold">
                            <Award className="h-3 w-3" />
                            Technical Leadership
                          </Badge>
                        )}
                        <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.period}
                        </span>
                      </div>

                      <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground pt-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {item.company}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5 pt-2">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 shrink-0 mt-2" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="mono">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
