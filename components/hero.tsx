import Link from "next/link"
import { Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <section id="wrapper" className="min-h-[calc(100vh-5rem)] flex items-center py-16">
      <div className="container px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            <span className="text-sm md:text-base uppercase tracking-widest text-muted-foreground font-medium">
              Hello, Welcome
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              I&apos;m Rinshad
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I&apos;m a <span className="highlight-span">Full-Stack Developer</span> with expertise in{" "}
              <span className="highlight-span">web and Android development</span>, automation, and machine learning. I focus on creating user-friendly applications with modern technologies like <span className="highlight-span">Java</span>, <span className="highlight-span">Next.js</span>, <span className="highlight-span">Node.js</span>, and <span className="highlight-span">Python</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full gap-2 shadow-md">
                <a
                  href="https://www.linkedin.com/in/mrinshad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full gap-2">
                <Link href="#projection-section">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Stats Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Card className="w-full max-w-xs border-2 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 flex flex-col divide-y divide-border">
                <div className="pb-6 text-center">
                  <div className="text-5xl font-extrabold tracking-tight text-foreground mb-1">
                    1+
                  </div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="pt-6 text-center">
                  <div className="text-5xl font-extrabold tracking-tight text-foreground mb-1">
                    10+
                  </div>
                  <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                    Projects
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
