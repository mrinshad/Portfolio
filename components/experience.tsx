import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Briefcase } from "lucide-react"

interface ExperienceItem {
  company: string
  role: string
  date: string
  location: string
  summary?: string
  tags: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Assistant System Engineer",
    date: "Jun 2025 – Present",
    location: "Siruseri, Chennai",
    tags: ["TCS"],
  },
  {
    company: "Veynad Pty Ltd",
    role: "Full-Stack Developer",
    date: "Apr 2025 – Jun 2025",
    location: "Melbourne, Victoria, Australia (Remote)",
    summary:
      "Developed auditing applications with React frontend, .NET Core backend, and Azure cloud services with CI/CD pipeline implementation.",
    tags: ["React", ".NET Core", "Azure", "CI/CD"],
  },
  {
    company: "Griantek",
    role: "Full-Stack Developer",
    date: "Dec 2024 – Apr 2025",
    location: "Kochi, Kerala (Hybrid)",
    summary:
      "Built full-stack web applications and automation bots using Next.js, Node.js, and Google Cloud VM for journal tracking and lead management.",
    tags: ["Next.js", "Node.js", "Google Cloud", "Supabase"],
  },
  {
    company: "Wizzo Technologies",
    role: "Android Developer",
    date: "Aug 2021 – Jun 2022",
    location: "Chemmad, Kerala (Onsite)",
    summary:
      "Developed Android applications for POS, Restaurant, and Warehouse Management systems using Java, Laravel, and MySQL with RESTful API integrations.",
    tags: ["Android", "Java", "Laravel", "MySQL"],
  },
]

export function Experience() {
  return (
    <section id="timeline-section" className="py-24 border-t border-border/50">
      <div className="container px-6 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-foreground">
          My Journey ( ͡° ͜ʖ ͡°)
        </h2>

        <div className="relative border-l-2 border-border/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experiences.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker bullet */}
              <div className="absolute -left-[31px] md:-left-[47px] top-6 h-4 w-4 rounded-full border-2 border-foreground bg-background transition-transform group-hover:scale-125" />

              <Card className="border hover:border-foreground/40 transition-all hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                    {item.role}
                  </CardTitle>
                  <div className="flex items-center gap-1.5 text-base font-semibold text-muted-foreground pt-0.5">
                    <Briefcase className="h-4 w-4" />
                    {item.company}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {item.summary && (
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.summary}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs font-medium bg-muted/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
