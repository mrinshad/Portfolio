import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowUpRight, Github } from "lucide-react"

interface ProjectItem {
  title: string
  tag: string
  description: string
  techStack: string
  href: string
}

const projects: ProjectItem[] = [
  {
    title: "ChatPDF",
    tag: "Full-Stack App",
    description:
      "A full-stack web application for document processing and content extraction with a chat interface powered by Gemini API for context-aware responses.",
    techStack: "FastAPI • React • Gemini API • Docker",
    href: "https://github.com/mrinshad/ChatPDF",
  },
  {
    title: "Curio",
    tag: "Web App",
    description:
      "Platform to explore recommendations and tier lists from Reddit posts and comments, with content analysis powered by Gemini API for deeper insights.",
    techStack: "FastAPI • Next.js • Reddit API • Gemini API",
    href: "https://github.com/mrinshad/Curio",
  },
  {
    title: "CardioFed",
    tag: "ML",
    description:
      "Federated learning system for cardiovascular disease detection ensuring data privacy, using Flower framework and ensemble modeling.",
    techStack: "Python • Federated Learning • Flower • XGBoost",
    href: "https://github.com/mrinshad/CardioFed",
  },
  {
    title: "IPTS",
    tag: "Computer Vision",
    description:
      "Real-time face recognition system for monitoring and tracking individuals with accurate image processing and database integration.",
    techStack: "Python • Flask • OpenCV • PostgreSQL",
    href: "https://github.com/mrinshad/IPTS-Intelligent-particpantion-tracking-system",
  },
  {
    title: "Hotel Management System",
    tag: "Desktop App",
    description:
      "Desktop application for hotel business management with booking, customer handling, and reporting features.",
    techStack: "Java • SQL • iReport",
    href: "https://github.com/mrinshad/Hotel-Management-Desktop",
  },
  {
    title: "Wallet Manager",
    tag: "Mobile App",
    description:
      "Financial management app for tracking expenses, managing budgets, and setting financial goals.",
    techStack: "Java • SQLite • Firebase",
    href: "https://github.com/mrinshad/WalletManager",
  },
]

export function Projects() {
  return (
    <section id="projection-section" className="py-24 border-t border-border/50">
      <div className="container px-6 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-foreground">
          My Projects (⌐■_■)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full focus:outline-none"
            >
              <Card className="h-full flex flex-col justify-between border hover:border-foreground/40 transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1 bg-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs font-semibold">
                      {project.tag}
                    </Badge>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-foreground/90 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 pb-4">
                  <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="pt-3 border-t border-border/40 text-xs text-muted-foreground font-medium flex items-center justify-between">
                  <span>{project.techStack}</span>
                  <span className="font-semibold text-foreground flex items-center gap-1 group-hover:underline">
                    View &rarr;
                  </span>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>

        {/* More Works Link */}
        <div className="mt-16 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full gap-2 border-border hover:bg-accent"
          >
            <a
              href="https://github.com/mrinshad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              Click here for more of my works!
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
