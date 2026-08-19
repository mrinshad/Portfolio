"use client"

import * as React from "react"
import { Mail, Phone, Github, Linkedin, Paperclip, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [fileCount, setFileCount] = React.useState(0)
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileCount(e.target.files.length)
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

    // Success response
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setFileCount(0)
    setErrors({})
  }

  return (
    <section id="contact-section" className="py-24 border-t border-border/50">
      <div className="container px-6 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-foreground">
          Contact me っ•́｡•́)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Description & Direct Contact Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Got a Project ? <br />
                Let&apos;s talk.
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                I hope you find my portfolio inspiring and engaging, and I look forward to hearing your feedback. Please feel free to contact me if you have any questions or would like to collaborate on a project.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 text-sm sm:text-base">
                <div className="h-10 w-10 rounded-full bg-muted/60 flex items-center justify-center text-foreground shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <a
                  href="mailto:rinshadmorayur09@gmail.com"
                  className="text-foreground hover:underline transition-all"
                >
                  rinshadmorayur09@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm sm:text-base">
                <div className="h-10 w-10 rounded-full bg-muted/60 flex items-center justify-center text-foreground shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <a
                  href="tel:+919895612423"
                  className="text-foreground hover:underline transition-all"
                >
                  +91 9895612423
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm sm:text-base">
                <div className="h-10 w-10 rounded-full bg-muted/60 flex items-center justify-center text-foreground shrink-0">
                  <Github className="h-5 w-5" />
                </div>
                <a
                  href="https://github.com/mrinshad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline transition-all"
                >
                  github.com/mrinshad
                </a>
              </div>

              <div className="flex items-center gap-4 text-sm sm:text-base">
                <div className="h-10 w-10 rounded-full bg-muted/60 flex items-center justify-center text-foreground shrink-0">
                  <Linkedin className="h-5 w-5" />
                </div>
                <a
                  href="https://linkedin.com/in/mrinshad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline transition-all"
                >
                  linkedin.com/in/mrinshad
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm shadow-sm">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  <h4 className="text-xl font-bold text-foreground">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Thanks for reaching out! I will get back to you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your good Name"
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
                    <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
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
                    <label htmlFor="message" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me something about your project details"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">Please enter some details.</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-between p-3 rounded-md border border-input border-dashed hover:border-foreground cursor-pointer transition-colors bg-muted/20"
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Paperclip className="h-4 w-4" />
                        <span>
                          {fileCount > 0
                            ? `${fileCount} file(s) selected`
                            : "Add the docs here"}
                        </span>
                      </div>
                      <span className="text-xs font-semibold uppercase text-foreground">
                        Browse
                      </span>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2 rounded-lg">
                    Send Mail
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
