"use client"

import * as React from "react"
import { ArrowUpRight, ArrowRight, CheckCircle2, Send, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profileData } from "@/data"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [errors, setErrors] = React.useState<{ [key: string]: boolean }>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: false })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { [key: string]: boolean } = {}
    if (!formData.name.trim()) newErrors.name = true
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = true
    if (!formData.message.trim()) newErrors.message = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setErrors({})
  }

  return (
    <main className="py-16 lg:py-24 space-y-24">
      {/* ========================================================================= */}
      {/* 1. DOMINANT EDITORIAL CTA HERO                                            */}
      {/* ========================================================================= */}
      <section
        aria-label="Direct Contact Call to Action"
        className="container max-w-6xl px-6 space-y-10 relative overflow-hidden"
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accentBlue/10 blur-[120px] rounded-full dark:bg-accentBlue/[0.07]"
        />

        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accentBlue" />
            Initiate Collaboration
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
            Have something
            <br />
            worth building?
            <br />
            <span className="text-muted-foreground font-light">Let&apos;s talk.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-normal pt-2">
            Available for software architecture consultation, custom ERP development, and technical engineering roles.
          </p>

          {/* Primary CTA Action with subtle arrow movement */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${profileData.email}`}
              className="group inline-flex items-center gap-3 text-sm sm:text-base font-bold uppercase tracking-wider text-background bg-foreground px-8 sm:px-10 py-4 sm:py-5 hover:bg-accentBlue hover:text-white transition-colors"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
            </a>

            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Typically responds within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DIRECT CHANNELS & SECONDARY CONTACT FORM                               */}
      {/* ========================================================================= */}
      <section className="container max-w-6xl px-6 pt-12 border-t border-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Channels & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Direct Channels
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                Reach Out Directly
              </h2>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="border-t border-border/40 pt-4 group">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <Mail className="h-3 w-3 text-accentBlue" />
                  Direct Email
                </div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-lg sm:text-xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors"
                >
                  {profileData.email}
                  <ArrowUpRight className="h-4 w-4 text-accentBlue" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="border-t border-border/40 pt-4 group">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Professional Network
                </div>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors"
                >
                  linkedin.com/in/mrinshad
                  <ArrowUpRight className="h-4 w-4 text-accentBlue" />
                </a>
              </div>

              {/* GitHub */}
              <div className="border-t border-border/40 pt-4 group">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Code & Engineering
                </div>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors"
                >
                  github.com/mrinshad
                  <ArrowUpRight className="h-4 w-4 text-accentBlue" />
                </a>
              </div>

              {/* Location */}
              <div className="border-t border-border/40 pt-4">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  Primary Base
                </div>
                <div className="text-base font-bold text-foreground pt-1">
                  Chennai / Kerala, India
                </div>
                <div className="text-xs font-mono text-muted-foreground pt-0.5">
                  Open to Remote & Global Engagements
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Streamlined Secondary Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl border border-border/70 bg-card/60 space-y-8 shadow-lg">
              <div className="space-y-2 border-b border-border/40 pb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Send a Direct Note
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                  Inquiry Details
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                  <h4 className="text-xl font-bold uppercase tracking-tight text-foreground">
                    Message Dispatched
                  </h4>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Thank you for reaching out. I will review your project requirements and respond promptly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs uppercase tracking-wider font-bold hover:text-accentBlue hover:border-accentBlue"
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-mono uppercase tracking-widest text-muted-foreground block"
                    >
                      01 / Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="editorial-input text-base sm:text-lg font-medium text-foreground placeholder:text-muted-foreground/50 w-full"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive pt-1">Please enter your name.</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono uppercase tracking-widest text-muted-foreground block"
                    >
                      02 / Work Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="editorial-input text-base sm:text-lg font-medium text-foreground placeholder:text-muted-foreground/50 w-full"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive pt-1">Please enter a valid email address.</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-mono uppercase tracking-widest text-muted-foreground block"
                    >
                      03 / Requirements & Scope
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Describe your system requirements, timeline, or engineering role..."
                      value={formData.message}
                      onChange={handleChange}
                      className="editorial-input text-base sm:text-lg font-medium text-foreground placeholder:text-muted-foreground/50 resize-none w-full"
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive pt-1">Please enter your message details.</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-background bg-foreground px-8 py-4 hover:bg-accentBlue hover:text-white transition-colors"
                  >
                    <span>Send Inquiry</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
