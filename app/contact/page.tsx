import { ArrowUpRight } from "lucide-react"
import { profileData } from "@/data"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact & Collaboration",
  description:
    "Get in touch with Mohammed Rinshad P for software architecture consultation, custom ERP development, and technical engineering opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Collaboration | Mohammed Rinshad P",
    description:
      "Available for software architecture consultation, custom ERP development, and technical engineering opportunities.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="py-16 lg:py-24 space-y-24">
      <div className="container max-w-5xl px-6 space-y-24">
        {/* Header */}
        <div className="space-y-6 border-b border-border/50 pb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
            Contact / Inquiries & Roles
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-none">
            Let&apos;s Build
            <br />
            Together
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
            Available for software architecture consultation, custom ERP development, and technical engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Large Typographic Direct Channels */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <div className="border-b border-border/40 pb-4 group">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Email
                </div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-xl sm:text-2xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors duration-200"
                >
                  {profileData.email}
                  <ArrowUpRight className="h-5 w-5 text-accentBlue" />
                </a>
              </div>

              <div className="border-b border-border/40 pb-4 group">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Phone / WhatsApp
                </div>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-xl sm:text-2xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors duration-200"
                >
                  {profileData.phone}
                  <ArrowUpRight className="h-5 w-5 text-accentBlue" />
                </a>
              </div>

              <div className="border-b border-border/40 pb-4 group">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  LinkedIn
                </div>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors duration-200"
                >
                  linkedin.com/in/mrinshad
                  <ArrowUpRight className="h-5 w-5 text-accentBlue" />
                </a>
              </div>

              <div className="border-b border-border/40 pb-4 group">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  GitHub
                </div>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors duration-200"
                >
                  github.com/mrinshad
                  <ArrowUpRight className="h-5 w-5 text-accentBlue" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Minimalist Open-Line Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
