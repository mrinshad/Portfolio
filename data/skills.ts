import { SkillCategory, EducationItem } from "./types"

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "Shadcn/UI",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", ".NET Core", "Java", "REST APIs"],
  },
  {
    category: "Databases & ORM",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "SQLite",
      "Supabase",
      "Prisma ORM",
    ],
  },
  {
    category: "Cloud, Infra & DevOps",
    skills: [
      "Linux (RHEL)",
      "Azure",
      "Google Cloud Platform (GCP)",
      "GitHub Actions",
      "NGINX",
      "Vercel",
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: ["Git", "GitHub", "Postman", "Firebase"],
  },
  {
    category: "Software Engineering",
    skills: [
      "System Design",
      "Database Design",
      "Authentication & Authorization (RBAC)",
      "CI/CD Pipelines",
      "Agile Development",
    ],
  },
]

export const educationData: EducationItem[] = [
  {
    institution: "Mar Athanasius College of Engineering, Kothamangalam, Kerala",
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    period: "2021 – 2024",
  },
  {
    institution: "AKNM GPTC Thirurangadi, Thirurangadi, Kerala",
    degree: "Diploma in Computer Engineering",
    period: "2018 – 2021",
  },
]
