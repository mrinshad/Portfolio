import * as React from "react"

interface TechIconProps {
  name: string
  className?: string
}

export function TechIcon({ name, className = "h-4 w-4" }: TechIconProps) {
  const normalized = name.toLowerCase().trim()

  // 1. React
  if (normalized === "react" || normalized.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="React">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="3.8" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
        </g>
      </svg>
    )
  }

  // 2. Next.js
  if (normalized.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Next.js">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          d="M8.5 7.5v9M15.5 7.5v9M8.5 7.5l7 9"
          stroke="#000"
          className="dark:stroke-white stroke-white dark:stroke-black"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  // 3. TypeScript
  if (normalized.includes("typescript") || normalized === "ts") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="TypeScript">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M4.5 10.5h6M7.5 10.5v8M13 18.5c1.2.6 2.5.8 3.8.8 2 0 3.2-.8 3.2-2.2 0-1.4-.9-2-2.8-2.6-1.5-.5-2.2-1.1-2.2-2 0-1 .9-1.8 2.5-1.8 1.1 0 2.2.3 3 .7l-.5 1.5c-.8-.4-1.6-.6-2.5-.6-1 0-1.6.5-1.6 1.2 0 .9.8 1.4 2.5 2 1.8.6 2.6 1.3 2.6 2.6 0 1.5-1.2 2.5-3.4 2.5-1.3 0-2.8-.4-3.8-1l.7-1.7z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 4. JavaScript
  if (normalized.includes("javascript") || normalized === "js") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="JavaScript">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7 11.5v5c0 1.8 1.1 2.8 2.8 2.8.9 0 1.7-.3 2.2-.7l-.5-1.4c-.4.3-1 .5-1.6.5-1 0-1.4-.6-1.4-1.6v-4.6H7zm6.8 6.5c1.1.6 2.4.8 3.6.8 1.8 0 3-.8 3-2.1 0-1.3-.9-1.9-2.7-2.5-1.4-.5-2.1-1-2.1-1.9 0-.9.9-1.7 2.4-1.7 1 0 2.1.3 2.8.7l-.5 1.4c-.7-.4-1.5-.6-2.3-.6-.9 0-1.5.5-1.5 1.1 0 .8.8 1.3 2.4 1.9 1.7.6 2.5 1.2 2.5 2.5 0 1.4-1.1 2.4-3.2 2.4-1.2 0-2.6-.4-3.6-.9l.6-1.6z"
          fill="#000000"
        />
      </svg>
    )
  }

  // 5. Node.js
  if (normalized.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Node.js">
        <path
          d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z"
          fill="#5FA04E"
        />
        <path
          d="M12 4.4L18.8 8.3v7.8L12 20l-6.8-3.9V8.3L12 4.4z"
          fill="#339933"
        />
        <path
          d="M12 7.5l4.5 2.6v5.2L12 17.9l-4.5-2.6v-5.2L12 7.5z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 6. Express.js
  if (normalized.includes("express")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Express.js">
        <rect width="24" height="24" rx="5" fill="#353535" />
        <path
          d="M6 16l3.5-5L6 6h2.2l2.4 3.6L13 6h2.2l-3.5 5 3.7 5h-2.3L10.6 12 8.2 16H6zm10.5 0v-7h1.8v1.2c.4-.8 1.3-1.4 2.4-1.4v1.8c-.3 0-.6 0-.8.1-.9.2-1.6 1-1.6 2.1V16h-1.8z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 7. Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Tailwind CSS">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#06B6D4"
        />
      </svg>
    )
  }

  // 8. Material UI / MUI
  if (normalized.includes("material") || normalized.includes("mui")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Material UI">
        <path d="M0 2.475v10.395l6 3.465V5.94z" fill="#00B0FF" />
        <path d="M6 5.94v10.395l6 3.465V9.405z" fill="#0081CB" />
        <path d="M12 9.405v10.395l6-3.465V5.94z" fill="#00B0FF" />
        <path d="M18 5.94l6-3.465v10.395L18 16.335z" fill="#0081CB" />
      </svg>
    )
  }

  // 9. Shadcn/UI
  if (normalized.includes("shadcn")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="shadcn/ui">
        <circle cx="12" cy="12" r="11" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M17.5 14.5L12 20l-5.5-5.5m0-5L12 4l5.5 5.5"
          stroke="#000000"
          className="dark:stroke-white stroke-black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  // 10. .NET Core / C# / ASP.NET
  if (normalized.includes(".net") || normalized.includes("c#") || normalized.includes("dotnet")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label=".NET Core">
        <rect width="24" height="24" rx="5" fill="#512BD4" />
        <path
          d="M5 16.5V7.5h2.2l4.3 6.3V7.5h1.8v9h-2L7 10v6.5H5zm10.5 0V7.5h4v1.6h-2.2v2h2v1.6h-2v2.2h2.4v1.6h-4.2z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 11. Java
  if (normalized === "java" || normalized.includes("java")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Java">
        <path
          d="M8.8 17.8c0 0-1 .4-.2.6 1.8.4 4.5.3 6.4-.1.8-.2.2-.5.2-.5s-1.8.4-3.6.4c-1.8 0-2.8-.4-2.8-.4zM9 19.3c0 0-.8.4 0 .6 1.7.4 4.4.3 6.2-.1.9-.2.3-.5.3-.5s-1.8.4-3.6.4c-1.8 0-2.9-.4-2.9-.4z"
          fill="#E76F00"
        />
        <path
          d="M13.6 10.5c.8 1-.2 2.2-.2 2.2s2.2-1.1 1.2-2.5c-1-1.4-1.8-2.1.8-4.2-2.8 1.1-2.9 3.2-1.8 4.5zM15.5 13.8s2.8-1.5 1.5-3.3c-.9-1.2-1.5-1.8.7-3.5-2.6 1-2.9 2.7-2.2 4.1.7 1.3 0 2.7 0 2.7z"
          fill="#5382A1"
        />
        <path
          d="M6.5 21.2c4.2.8 9.3.4 12.3-.4 0 0-1.1.7-3.7 1-3.6.4-7.4.2-8.6-.6z"
          fill="#E76F00"
        />
      </svg>
    )
  }

  // 12. Laravel
  if (normalized.includes("laravel")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Laravel">
        <path
          d="M19.8 6.4L12.5 2.2a1 1 0 00-1 0L4.2 6.4a1 1 0 00-.5.9v8.4a1 1 0 00.5.9l7.3 4.2a1 1 0 001 0l7.3-4.2a1 1 0 00.5-.9V7.3a1 1 0 00-.5-.9zM12 4.1l5.7 3.3-2.6 1.5-5.7-3.3 2.6-1.5zm-6.3 4l5.7 3.3v5.8L5.7 14V8.1zm12.6 5.9l-5.7 3.3v-5.8l5.7-3.3V14z"
          fill="#FF2D20"
        />
      </svg>
    )
  }

  // 13. PostgreSQL
  if (normalized.includes("postgres") || normalized === "pg") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="PostgreSQL">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          fill="#336791"
        />
        <path
          d="M16.5 11.8c-.2-.6-.6-1.5-1.5-2.2-.9-.8-2-1.1-3.1-1.1-1.5 0-2.9.5-3.8 1.4-.9.9-1.3 2.1-1.3 3.5 0 1.2.4 2.2 1.1 3 .7.8 1.7 1.2 2.9 1.2 1 0 1.9-.3 2.7-.9.8-.6 1.3-1.4 1.5-2.4l-1.6-.3c-.2.7-.5 1.2-1 1.6-.5.4-1 .6-1.7.6-.8 0-1.4-.3-1.9-.8-.5-.5-.7-1.3-.7-2.3h7.9c0-.4 0-.9-.1-1.3zm-6.2-1c.4-.5.9-.7 1.6-.7.7 0 1.2.2 1.6.7.4.5.6 1.1.6 1.8H9.7c0-.7.2-1.3.6-1.8z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 14. MySQL
  if (normalized.includes("mysql")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="MySQL">
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <path
          d="M4.5 16.5v-6l2.5 4 2.5-4v6h-1.4v-3.5L6.9 15 5.8 13v3.5H4.5zm8 0v-4.2l2.2 4.2h1.4l2.2-4.2v4.2h1.4v-6h-1.8l-2.5 4.8L13 10.5h-1.8v6h1.3z"
          fill="#F29111"
        />
      </svg>
    )
  }

  // 15. SQLite
  if (normalized.includes("sqlite")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="SQLite">
        <rect width="24" height="24" rx="4" fill="#003B57" />
        <path
          d="M5 9.5c0-1.4 3.1-2.5 7-2.5s7 1.1 7 2.5v5c0 1.4-3.1 2.5-7 2.5s-7-1.1-7-2.5v-5z"
          fill="#00A2D9"
        />
        <ellipse cx="12" cy="9.5" rx="5.5" ry="1.8" fill="#FFFFFF" />
      </svg>
    )
  }

  // 16. Microsoft SQL Server
  if (normalized.includes("sql server") || normalized.includes("mssql")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="SQL Server">
        <rect width="24" height="24" rx="4" fill="#CC292B" />
        <path
          d="M6 7.5c0-1.1 2.7-2 6-2s6 .9 6 2v9c0 1.1-2.7 2-6 2s-6-.9-6-2v-9z"
          fill="#FFFFFF"
          fillOpacity="0.3"
        />
        <ellipse cx="12" cy="7.5" rx="5" ry="1.5" fill="#FFFFFF" />
        <path
          d="M7 11.5c0 .9 2.2 1.5 5 1.5s5-.6 5-1.5M7 14.5c0 .9 2.2 1.5 5 1.5s5-.6 5-1.5"
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />
      </svg>
    )
  }

  // 17. Supabase
  if (normalized.includes("supabase")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Supabase">
        <path
          d="M13.2 2.3c-.4-.5-1.2-.2-1.2.5v8.7H4.3c-.8 0-1.2.9-.6 1.5l8.5 9.2c.4.5 1.2.2 1.2-.5v-8.7h7.7c.8 0 1.2-.9.6-1.5l-8.5-9.2z"
          fill="#3ECF8E"
        />
      </svg>
    )
  }

  // 18. Prisma ORM
  if (normalized.includes("prisma")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Prisma ORM">
        <path
          d="M12.6 2.4a1 1 0 00-1.2 0L3.2 9.1a1 1 0 00-.4.8v8.2a1 1 0 00.5.9l8.2 4.6a1 1 0 001 0l8.2-4.6a1 1 0 00.5-.9V9.9a1 1 0 00-.4-.8L12.6 2.4z"
          fill="#2D3748"
        />
        <path
          d="M12 4.2l6.8 5.6-6.8 10-6.8-10L12 4.2z"
          fill="#16A394"
        />
      </svg>
    )
  }

  // 19. Microsoft Azure & Azure AD
  if (normalized.includes("azure")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Microsoft Azure">
        <path
          d="M13.3 3.5l-6.8 12.3H2L9.5 3.5h3.8zm1.2 1.8l-2.4 4.5 4.3 7.7H7.7l-1.2 2.5H22l-7.5-14.7z"
          fill="#0089D6"
        />
      </svg>
    )
  }

  // 20. Google Cloud Platform (GCP)
  if (normalized.includes("gcp") || normalized.includes("google cloud")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Google Cloud Platform">
        <path d="M19.3 10.1A5.5 5.5 0 009.6 7.4a4.4 4.4 0 00-5.1 4.3c0 .2 0 .4.1.6A4.5 4.5 0 005.5 21h13.8a4 4 0 000-8c-.1-.9-.5-1.7-1-2.9z" fill="#4285F4" fillOpacity="0.2" />
        <path d="M14.5 8a5.5 5.5 0 00-4.9-.6 4.4 4.4 0 00-5.1 4.3c0 .2 0 .4.1.6A4.5 4.5 0 005.5 21h4.8v-7.8l4.2-5.2z" fill="#4285F4" />
        <path d="M14.5 8l-4.2 5.2v7.8h9a4 4 0 000-8c-.1-.9-.5-1.7-1-2.9a5.5 5.5 0 00-3.8-2.1z" fill="#34A853" />
        <path d="M10.3 13.2l4.2-5.2a5.5 5.5 0 00-4.9-.6l.7 5.8z" fill="#EA4335" />
        <path d="M10.3 13.2H5.5a4.5 4.5 0 00-.9.1l5.7-.1z" fill="#FBBC05" />
      </svg>
    )
  }

  // 21. Docker
  if (normalized.includes("docker") || normalized.includes("container")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Docker">
        <path
          d="M22.5 11.5c-.3-.2-1.4-.4-2.3.2-.4.3-.7.8-.8 1.3-.8-.3-2.3-.2-3 .5-.1 0-.3 0-.4-.1-.7-.8-2-1-3-.7v-.2H3.5c-.3 0-.5.2-.5.5v3.8c0 3.2 2.6 5.8 5.8 5.8 4.2 0 7.7-2.6 8.9-6.3.7 0 2.8.2 4-1.8.8-1.4.9-2.8.8-3zM5.5 13H7v-1.5H5.5V13zm2.5 0h1.5v-1.5H8V13zm2.5 0H12v-1.5h-1.5V13zm-5-2.5H7V9H5.5v1.5zm2.5 0h1.5V9H8v1.5zm2.5 0H12V9h-1.5v1.5zm2.5 2.5h1.5v-1.5H13V13zm0-2.5h1.5V9H13v1.5zm2.5 2.5H17v-1.5h-1.5V13z"
          fill="#2496ED"
        />
      </svg>
    )
  }

  // 22. Linux & RHEL (Red Hat Enterprise Linux)
  if (normalized.includes("linux") || normalized.includes("rhel") || normalized.includes("red hat")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Linux RHEL">
        <path
          d="M21.5 14.5c-.8-1.5-3-2.6-5-2.8.5-1.2.8-2.6.4-3.8-.5-1.6-2-2.4-3.9-2.4-2.5 0-4.3 1.5-4.8 3.8-.2.9-.1 1.8.2 2.6-2.5.4-4.8 1.6-5.6 3.5-.8 1.8.2 3.6 2.3 4.2 3.8 1 9.4 1.2 13.5-.2 2.1-.7 3.7-2.9 2.9-4.9z"
          fill="#EE0000"
        />
        <path
          d="M12.5 7.5c1.4 0 2.5.7 2.8 1.8.3.9.1 2-.3 2.9-1.2-.2-2.5-.2-3.8 0-.3-.9-.4-1.9-.1-2.8.3-1.1 1.2-1.9 1.4-1.9z"
          fill="#111111"
        />
      </svg>
    )
  }

  // 23. NGINX
  if (normalized.includes("nginx")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="NGINX">
        <path
          d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z"
          fill="#009639"
        />
        <path
          d="M8.5 7.5v9h2.2l4.8-6.3v6.3h2.2v-9h-2.2L10.7 14V7.5H8.5z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 24. Vercel
  if (normalized.includes("vercel")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Vercel">
        <path d="M12 3L22 20.5H2L12 3z" fill="currentColor" />
      </svg>
    )
  }

  // 25. GitHub Actions
  if (normalized.includes("action") || (normalized.includes("github") && normalized.includes("action"))) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="GitHub Actions">
        <rect width="24" height="24" rx="5" fill="#2088FF" />
        <path
          d="M6 12a3 3 0 116 0 3 3 0 01-6 0zm10-4a2 2 0 110 4 2 2 0 010-4zm0 8a2 2 0 110 4 2 2 0 010-4z"
          fill="#FFFFFF"
        />
        <path d="M11.5 12h2.5M14 10l2-2M14 14l2 2" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    )
  }

  // 26. Git
  if (normalized === "git" || (normalized.includes("git") && !normalized.includes("hub"))) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Git">
        <path
          d="M21.7 11l-8.7-8.7a1.8 1.8 0 00-2.5 0L8.7 4.1l3.1 3.1a2.1 2.1 0 012.6 2.6l3 3a2.1 2.1 0 11-1.3 1.3l-2.8-2.8v4.2a2.1 2.1 0 11-1.8 0V9.8a2.1 2.1 0 01-1.1-1.1L7.3 5.6 2.3 10.6a1.8 1.8 0 000 2.5l8.7 8.7a1.8 1.8 0 002.5 0l8.2-8.2a1.8 1.8 0 000-2.6z"
          fill="#F05032"
        />
      </svg>
    )
  }

  // 27. GitHub
  if (normalized.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="GitHub">
        <circle cx="12" cy="12" r="11" fill="currentColor" fillOpacity="0.1" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          fill="currentColor"
        />
      </svg>
    )
  }

  // 28. Postman
  if (normalized.includes("postman")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Postman">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path
          d="M7 12.5l3.5-3.5 1.8 1.8-3.5 3.5zm7.5-3.5l1.5 1.5-5 5-1.5-1.5z"
          fill="#FFFFFF"
        />
        <circle cx="15.5" cy="8.5" r="1.5" fill="#FFFFFF" />
      </svg>
    )
  }

  // 29. Firebase
  if (normalized.includes("firebase")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Firebase">
        <path
          d="M4.5 17.2L6.8 3.5a.6.6 0 011.1-.2l3.2 6.1L4.5 17.2zm14.3-.8L15.3 4.2a.6.6 0 00-1.1 0L12 8.7l6.8 7.7zm-14.3.8l7.3 4.1a.8.8 0 00.8 0l7.2-4.1-7.6-13.4a.6.6 0 00-1.1 0L4.5 17.2z"
          fill="#FFA000"
        />
        <path
          d="M4.5 17.2l7.3 4.1a.8.8 0 00.8 0l7.2-4.1-4.8-2.7L4.5 17.2z"
          fill="#F57C00"
        />
        <path
          d="M11.8 3.9a.6.6 0 00-1.1 0L4.5 17.2l10.5-2.7-3.2-10.6z"
          fill="#FFCA28"
        />
      </svg>
    )
  }

  // 30. Android
  if (normalized.includes("android")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Android">
        <path
          d="M6 14a6 6 0 0112 0H6z"
          fill="#3DDC84"
        />
        <circle cx="9" cy="11.5" r="1" fill="#FFFFFF" />
        <circle cx="15" cy="11.5" r="1" fill="#FFFFFF" />
        <path
          d="M8 6.5l-1.5-2M16 6.5l1.5-2"
          stroke="#3DDC84"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect x="6" y="15.5" width="12" height="4.5" rx="1" fill="#3DDC84" />
      </svg>
    )
  }

  // 31. REST APIs
  if (normalized.includes("rest api") || normalized === "rest apis" || normalized.includes("api")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="REST APIs">
        <rect width="24" height="24" rx="5" fill="#10B981" />
        <path
          d="M6 12h12M12 6v12M7.5 7.5l9 9M16.5 7.5l-9 9"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
      </svg>
    )
  }

  // 32. System Design & Architecture
  if (normalized.includes("system design") || normalized.includes("system architecture") || normalized.includes("architecture")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="System Architecture">
        <rect x="2" y="3" width="7" height="6" rx="1.5" fill="#6366F1" />
        <rect x="15" y="3" width="7" height="6" rx="1.5" fill="#6366F1" />
        <rect x="8.5" y="15" width="7" height="6" rx="1.5" fill="#4F46E5" />
        <path
          d="M5.5 9v3.5a1 1 0 001 1h4m8-4.5v3.5a1 1 0 01-1 1h-4m0 0v2"
          stroke="#818CF8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  // 33. Database Design
  if (normalized.includes("database design") || normalized.includes("relational")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Database Design">
        <path
          d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3v12c0 1.7-3.6 3-8 3s-8-1.3-8-3V6z"
          fill="#0EA5E9"
          fillOpacity="0.2"
        />
        <ellipse cx="12" cy="6" rx="8" ry="3" fill="#0EA5E9" />
        <path
          d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3M4 18c0 1.7 3.6 3 8 3s8-1.3 8-3"
          stroke="#38BDF8"
          strokeWidth="1.5"
        />
      </svg>
    )
  }

  // 34. RBAC & Auth
  if (normalized.includes("rbac") || normalized.includes("auth")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Authentication & Authorization">
        <path
          d="M12 2L4 5.5v6.2c0 5.2 3.4 10 8 11.3 4.6-1.3 8-6.1 8-11.3V5.5L12 2z"
          fill="#F59E0B"
        />
        <path
          d="M12 8a2.5 2.5 0 00-2.5 2.5c0 1 .6 1.8 1.5 2.2V16h2v-3.3c.9-.4 1.5-1.2 1.5-2.2A2.5 2.5 0 0012 8z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 35. CI/CD Pipelines
  if (normalized.includes("ci/cd") || normalized.includes("pipeline")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="CI/CD Pipelines">
        <circle cx="6" cy="12" r="3.5" fill="#10B981" />
        <circle cx="18" cy="12" r="3.5" fill="#059669" />
        <path
          d="M9.5 12h5M12 9.5l2.5 2.5L12 14.5"
          stroke="#34D399"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  // 36. Agile Development
  if (normalized.includes("agile")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Agile Development">
        <circle cx="12" cy="12" r="9" stroke="#F43F5E" strokeWidth="2" fill="none" strokeDasharray="14 4" />
        <path
          d="M12 7v5l3.5 2"
          stroke="#FB7185"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  // 37. Web Technologies & Cloud Hosting
  if (normalized.includes("web") || normalized.includes("cloud")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Web Technologies">
        <circle cx="12" cy="12" r="9" fill="#0284C7" />
        <path
          d="M3.5 12h17M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />
      </svg>
    )
  }

  // Default Fallback
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label={name}>
      <rect width="24" height="24" rx="5" fill="#6366F1" />
      <path
        d="M7 8l5-3 5 3v8l-5 3-5-3V8z"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
