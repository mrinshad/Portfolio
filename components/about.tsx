import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Mobile",
    skills: ["Android Development", "Java"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "Javascript", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Supabase"],
  },
  {
    category: "Database",
    skills: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    category: "Cloud",
    skills: ["Google Cloud VM", "cPanel"],
  },
  {
    category: "AI/ML",
    skills: ["Machine Learning", "Gemini API"],
  },
]

export function About() {
  return (
    <section id="about-us" className="py-24 border-t border-border/50">
      <div className="container px-6 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-foreground">
          About me :)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Name */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-none">
              MOHAMMED
              <br />
              <span className="text-muted-foreground">RINSHAD</span>
            </h3>
          </div>

          {/* Right Column: Bio Narrative & Skills */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="highlight-span">Full-Stack Developer</span> with expertise in both{" "}
                <span className="highlight-span">web and Android development</span>. I specialize in creating user-friendly applications with modern technologies across multiple platforms.
              </p>
              <p>
                I have experience working with companies like{" "}
                <span className="highlight-span">Wizzo Technologies</span>,{" "}
                <span className="highlight-span">Griantek</span>, and{" "}
                <span className="highlight-span">Veynad Pty Ltd</span>, where I developed various applications ranging from mobile POS systems to web-based automation solutions and cloud platforms.
              </p>
            </div>

            {/* Technical Skills List */}
            <div className="pt-4 border-t border-border/50 space-y-4">
              <h4 className="text-lg font-bold tracking-wide text-foreground">
                Technical Skills:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((item) => (
                  <div
                    key={item.category}
                    className="p-4 rounded-lg border border-border bg-card/40 space-y-2"
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {item.category}:
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs font-normal"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
