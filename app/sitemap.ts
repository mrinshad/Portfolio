import { MetadataRoute } from "next"
import { flagshipProjects } from "@/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mrinshad.github.io/Portfolio"
  const currentDate = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = flagshipProjects.map((project) => ({
    url: `${siteUrl}/work/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes]
}
