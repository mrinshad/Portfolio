import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export const metadata: Metadata = {
  title: "Rinshad | Full-Stack Developer",
  description:
    "Portfolio of Mohammed Rinshad - Full-Stack Developer with expertise in web and Android development, automation, and machine learning.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
