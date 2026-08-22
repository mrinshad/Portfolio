"use client"

import * as React from "react"
import { CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactPageContent } from "@/data"

export function ContactForm() {
  const { form } = contactPageContent
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

  if (submitted) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 border border-border p-8">
        <CheckCircle2 className="h-12 w-12 text-accentBlue" />
        <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">
          {form.successHeading}
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          {form.successMessage}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-none text-xs uppercase tracking-wider font-bold hover:text-accentBlue hover:border-accentBlue"
        >
          {form.resetButton}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-xs font-mono uppercase tracking-widest text-muted-foreground block"
        >
          {form.nameField.label}
        </label>
        <input
          id="name"
          name="name"
          placeholder={form.nameField.placeholder}
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          className="editorial-input text-lg font-medium text-foreground placeholder:text-muted-foreground/50 w-full"
        />
        {errors.name && (
          <p className="text-xs text-destructive pt-1">{form.nameField.error}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-xs font-mono uppercase tracking-widest text-muted-foreground block"
        >
          {form.emailField.label}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={form.emailField.placeholder}
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className="editorial-input text-lg font-medium text-foreground placeholder:text-muted-foreground/50 w-full"
        />
        {errors.email && (
          <p className="text-xs text-destructive pt-1">{form.emailField.error}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-mono uppercase tracking-widest text-muted-foreground block"
        >
          {form.messageField.label}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={form.messageField.placeholder}
          value={formData.message}
          onChange={handleChange}
          className="editorial-input text-lg font-medium text-foreground placeholder:text-muted-foreground/50 resize-none w-full"
        />
        {errors.message && (
          <p className="text-xs text-destructive pt-1">{form.messageField.error}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-background bg-foreground px-10 py-4 hover:bg-accentBlue hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue focus-visible:ring-offset-2"
      >
        {form.submitButton}
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}
