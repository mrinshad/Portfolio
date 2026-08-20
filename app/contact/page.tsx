"use client"

import * as React from "react"
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react"
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
                  className="text-xl sm:text-2xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors"
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
                  className="text-xl sm:text-2xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors"
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
                  className="text-xl sm:text-2xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors"
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
                  className="text-xl sm:text-2xl font-bold text-foreground hover:text-accentBlue hover:underline inline-flex items-center gap-2 pt-1 transition-colors"
                >
                  github.com/mrinshad
                  <ArrowUpRight className="h-5 w-5 text-accentBlue" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Minimalist Open-Line Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 border border-border p-8">
                <CheckCircle2 className="h-12 w-12 text-accentBlue" />
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">
                  Message Sent
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Thank you for reaching out. I will review your message and respond promptly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-none text-xs uppercase tracking-wider font-bold hover:text-accentBlue hover:border-accentBlue"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
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
                    className="editorial-input text-lg font-medium text-foreground placeholder:text-muted-foreground/50 w-full"
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
                    className="editorial-input text-lg font-medium text-foreground placeholder:text-muted-foreground/50 w-full"
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
                    03 / Project Scope & Inquiries
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your system requirements or engineering role..."
                    value={formData.message}
                    onChange={handleChange}
                    className="editorial-input text-lg font-medium text-foreground placeholder:text-muted-foreground/50 resize-none w-full"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive pt-1">Please enter your message details.</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-background bg-foreground px-10 py-4 hover:bg-accentBlue hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2"
                >
                  Send Inquiry
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
