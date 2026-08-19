import Link from "next/link"
import { Linkedin, Instagram, Github, Twitter } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mrinshad",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/rinshad_morayur?igshid=ZDdkNTZiNTM=",
    icon: Instagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/mrinshad",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/goblinTheDev",
    icon: Twitter,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 bg-background">
      <div className="container px-6 lg:px-24 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          href="#"
          className="font-dancing text-2xl font-bold tracking-wider text-foreground hover:opacity-80 transition-opacity"
        >
          m.rinshad
        </Link>

        <ul className="flex items-center gap-6">
          {socialLinks.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.name}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
