import { ExperienceItem } from "./types"

export const leadershipExperience: ExperienceItem[] = [
  {
    id: "byten",
    company: "ByteN",
    role: "Technical Lead & Full-Stack Developer",
    period: "Jul 2025 – Present",
    location: "Remote",
    isLeadership: true,
    responsibilities: [
      "Lead the technical design and development of custom software solutions across ERP, accounting, education, and simulation platforms while remaining actively involved in implementation.",
      "Architect application structures, relational database schemas, REST APIs, authentication workflows, and role-based access control (RBAC) systems for scalable, maintainable applications.",
      "Establish engineering standards, project structures, Git workflows, code review practices, and development guidelines to ensure consistency across projects.",
      "Drive technical planning, feature estimation, architectural discussions, and technology selection while collaborating closely with clients and development teams.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "System Architecture",
    ],
  },
]

export const employmentExperience: ExperienceItem[] = [
  {
    id: "tcs",
    company: "Tata Consultancy Services (TCS)",
    role: "Full-Stack Developer",
    period: "Jun 2025 – Present",
    location: "Chennai, Tamil Nadu",
    isLeadership: false,
    responsibilities: [
      "Contributed to an internal web application, developing new features, building forms and UI components, and extending existing application workflows.",
      "Implemented frontend and backend functionality, integrated APIs, and worked across application modules to deliver feature enhancements and fixes.",
      "Refactored and cleaned existing code to improve maintainability, reduce duplication, and simplify future feature development.",
      "Worked with Linux (RHEL) environments for system troubleshooting and administration, with additional exposure to Cisco CUCM and enterprise communication systems.",
    ],
    technologies: ["React", "JavaScript", "Linux (RHEL)", "REST APIs"],
  },
  {
    id: "veynad",
    company: "Veynad Pty Ltd",
    role: "Full-Stack Developer (Remote Contract)",
    period: "Apr 2025 – Jun 2025",
    location: "Melbourne, Australia",
    isLeadership: false,
    responsibilities: [
      "Engineered an enterprise auditing platform using React, Material UI, .NET Core, and SQL technologies, delivering scalable and maintainable business workflows.",
      "Designed and implemented secure authentication and authorization using Azure AD B2C and Managed Identity for enterprise-grade access control.",
      "Integrated Azure services including App Service, Static Web Apps, Blob Storage, and cloud-native deployment workflows.",
      "Built and maintained CI/CD pipelines using GitHub Actions to automate testing and application deployments.",
    ],
    technologies: [
      "React",
      ".NET Core",
      "Azure AD B2C",
      "Azure Cloud",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    id: "griantek",
    company: "Griantek",
    role: "Full-Stack Developer",
    period: "Dec 2024 – Apr 2025",
    location: "Kochi, Kerala (Hybrid)",
    isLeadership: false,
    responsibilities: [
      "Developed and deployed full-stack web applications using Next.js and Node.js with a focus on performance, scalability, and maintainability.",
      "Engineered automation solutions for journal processing, email workflows, and lead management, reducing manual operational effort.",
      "Managed backend infrastructure and application deployments using Google Cloud Platform, NGINX, Supabase, and SQLite.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Google Cloud Platform (GCP)",
      "Supabase",
      "NGINX",
      "SQLite",
    ],
  },
  {
    id: "wizzo",
    company: "Wizzo Technologies",
    role: "Full-Stack Developer",
    period: "Aug 2021 – Jun 2022",
    location: "Chemmad, Kerala",
    isLeadership: false,
    responsibilities: [
      "Developed web and Android applications for restaurant, warehouse, and business management systems using Laravel, React, Java, and MySQL.",
      "Implemented responsive user interfaces and integrated REST APIs across web and mobile applications to support business workflows.",
      "Contributed to application deployment, testing, and production support while collaborating with the development team to deliver client projects.",
    ],
    technologies: ["Laravel", "React", "Java", "MySQL", "Android", "REST APIs"],
  },
]

export const careerProgression: ExperienceItem[] = [
  employmentExperience[3], // Wizzo Technologies
  employmentExperience[2], // Griantek
  employmentExperience[1], // Veynad Pty Ltd
  employmentExperience[0], // Tata Consultancy Services (TCS)
]

export const experienceData: ExperienceItem[] = [
  ...leadershipExperience,
  ...employmentExperience,
]
