"use client"

import * as React from "react"
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, ArrowUpRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { profileData } from "@/data"

export function ContactSection() {
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
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="py-24 lg:py-32 border-t border-border/40 bg-muted/10"
    >
      <div className="container max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Get in Touch
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Have a complex system to build? Let&apos;s talk.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether you need technical architecture for an ERP platform, custom software engineering, or are looking to hire a Technical Lead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Tactile Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <a
              href={`mailto:${profileData.email}`}
              className="group block p-6 rounded-2xl border border-border/70 bg-card hover:border-foreground/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-muted/60 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground">Direct Email</div>
                    <div className="text-sm font-bold text-foreground">
                      {profileData.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${profileData.phone}`}
              className="group block p-6 rounded-2xl border border-border/70 bg-card hover:border-foreground/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-muted/60 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground">Phone / WhatsApp</div>
                    <div className="text-sm font-bold text-foreground">
                      {profileData.phone}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl border border-border/70 bg-card hover:border-foreground/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-muted/60 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground">Professional Network</div>
                    <div className="text-sm font-bold text-foreground">
                      linkedin.com/in/mrinshad
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl border border-border/70 bg-card hover:border-foreground/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-muted/60 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground">Code & Repositories</div>
                    <div className="text-sm font-bold text-foreground">
                      github.com/mrinshad
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </div>
            </a>
          </div>

          {/* Right Column: Clean Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl border border-border/70 bg-card shadow-sm">
              {submitted ? (
                <div className="py-14 flex flex-col items-center justify-center text-center space-y-4">
                  <CheckCircle2 className="h-14 w-14 text-emerald-500" />
                  <h4 className="text-2xl font-bold text-foreground">Message Dispatched</h4>
                  <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                    Thank you for reaching out. I will review your inquiry and get back to you promptly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-foreground"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Alex Morgan"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">Please enter your name.</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-foreground"
                    >
                      Work Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. alex@company.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">Please enter a valid email address.</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-wider text-foreground"
                    >
                      Project Scope & Requirements
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your system requirements, timeline, or engineering inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">Please enter your project details.</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2 rounded-xl font-semibold shadow-sm">
                    Send Inquiry
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
