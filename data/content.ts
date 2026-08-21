import {
  ProfileData,
  ProjectItem,
  ExperienceItem,
  SkillCategory,
  EducationItem,
  SocialLink,
} from "./types"

/**
 * ============================================================================
 * PORTFOLIO MASTER CONTENT & STATIC CONSTANTS
 * ============================================================================
 * Edit any text, title, project detail, URL, or metadata below.
 * Changes will immediately reflect live on the browser.
 */

// ----------------------------------------------------------------------------
// 1. IDENTITY & CONTACT CONSTANTS
// ----------------------------------------------------------------------------
export const profileData: ProfileData = {
  name: "Mohammed Rinshad P",
  preferredName: "Rinshad",
  title: "Full-Stack Software Engineer & Technical Lead",
  email: "rinshadmorayur09@gmail.com",
  phone: "+91-9895612423",
  linkedin: "https://linkedin.com/in/mrinshad",
  github: "https://github.com/mrinshad",
  portfolioUrl: "https://minshad.space",
  shortPositioning:
    "Full-Stack Software Engineer & Technical Lead specializing in enterprise web systems, custom ERP platforms, and cloud architecture.",
  shortIntro:
    "Specializing in architecting and developing scalable web applications, ERP platforms, enterprise systems, and cloud-native solutions using React, Next.js, Node.js, .NET Core, Azure, and SQL technologies.",
}

export const brandMark = "m.rinshad"
export const publicLocation = "Kerala, India"

// ----------------------------------------------------------------------------
// 2. GLOBAL NAVIGATION & FOOTER
// ----------------------------------------------------------------------------
export const navigationContent = {
  brand: "m.rinshad",
  links: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Get in Touch",
    href: "/contact",
  },
}

export const footerContent = {
  brand: "m.rinshad",
  title: "Full-Stack Software Engineer & Technical Lead",
  navLinks: [
    { label: "Selected Work", href: "/work" },
    { label: "About & Experience", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { name: "LinkedIn", href: "https://linkedin.com/in/mrinshad" },
    { name: "GitHub", href: "https://github.com/mrinshad" },
    { name: "Email", href: "mailto:rinshadmorayur09@gmail.com" },
  ],
  copyright: "© 2026 Mohammed Rinshad P. All rights reserved.",
  backToTopText: "TOP ↑",
}

// ----------------------------------------------------------------------------
// 3. HOME PAGE CONTENT
// ----------------------------------------------------------------------------
export const homePageContent = {
  hero: {
    eyebrow: "01 / Systems Architect & Full-Stack Engineer",
    headlineLine1: "Mohammed",
    headlineLine2: "Rinshad P",
    subtitle:
      "Architecting scalable ERP platforms, enterprise web applications, and durable backend systems. Focused on engineering clarity, clean data models, and production reliability.",
    ctaPrimary: { label: "Explore Selected Systems", href: "/work" },
    ctaSecondary: { label: "About & Experience", href: "/about" },
    ctaTertiary: { label: "Contact", href: "/contact" },
  },
  featuredSystems: {
    eyebrow: "02 / Selected Work • 04 Flagship Systems • 03 Commercial Websites",
    heading: "Featured Systems & Platforms",
    subtitle:
      "Production platforms, custom ERP solutions, and internal tools engineered with clean domain boundaries and relational schemas.",
    viewAllCta: { label: "Explore Selected Work", href: "/work" },
  },
  gateway: {
    eyebrow: "03 / Gateway",
    careerCard: {
      eyebrow: "Career Track Record",
      heading: "Engineering & Leadership",
      description:
        "Track record spanning enterprise web engineering, systems architecture, and technical leadership across production platforms.",
      linkText: "Read Background & Experience →",
      href: "/about",
    },
    contactCard: {
      eyebrow: "Direct Communication",
      heading: "Start a Conversation",
      description:
        "Available for system architecture consultation, full-stack development, and technical engineering opportunities.",
      linkText: "Get in Touch →",
      href: "/contact",
    },
  },
  finalCta: {
    eyebrow: "Direct Engagement",
    heading: "Have something worth building? Let's talk.",
    subtitle:
      "Available for architectural consultation, custom ERP development, and technical engineering roles.",
    primaryButton: { label: "Get in Touch", href: "/contact" },
    emailButton: {
      label: "rinshadmorayur09@gmail.com",
      href: "mailto:rinshadmorayur09@gmail.com",
    },
  },
}

// ----------------------------------------------------------------------------
// 4. ABOUT PAGE CONTENT
// ----------------------------------------------------------------------------
export const aboutPageContent = {
  hero: {
    eyebrow: "01 / About Rinshad",
    heading: "Driven by craft, curiosity, and durable systems.",
    storyParagraphs: [
      "I am Mohammed Rinshad P, a software engineer with an instinct for architecture, clarity, and building tools that last.",
      "With an academic foundation in Computer Science from Mar Athanasius College of Engineering, my background spans enterprise web engineering, custom ERP architecture, and technical consulting across high-impact business systems.",
      "I find satisfaction in untangling complex workflows—turning intricate data models, institutional operations, and organizational rules into software that feels clear, fast, and dependable.",
    ],
    metrics: [
      { label: "Origin & Base", value: "Kerala, India" },
      { label: "Engineering Focus", value: "Full-Stack & Systems" },
      { label: "Background", value: "B.Tech CSE (MACE)" },
    ],
    portraitImage: "/assets/photo.png",
  },
  marqueeSkills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    ".NET Core",
    "PostgreSQL",
    "Prisma ORM",
    "Azure Cloud",
    "Linux (RHEL)",
    "SQL Server",
    "REST APIs & RBAC",
    "GitHub Actions",
    "Docker",
    "Tailwind CSS",
  ],
  careerJourney: {
    eyebrow: "03 / Career Journey",
    heading: "Engineering Milestones",
    subtitle:
      "Chronological progression across enterprise systems, consultancy, automation, and full-stack development.",
  },
  technicalLeadership: {
    eyebrow: "04 / Leadership",
    heading: "Technical Leadership & Consulting",
  },
  capabilities: {
    eyebrow: "05 / Capabilities",
    heading: "Technical Domains & Core Stack",
    subtitle:
      "Categorized proficiencies across frontend engineering, backend architecture, databases, cloud, and engineering practices.",
  },
  education: {
    eyebrow: "06 / Academic Foundation",
    heading: "Education & Engineering Degrees",
  },
  finalCta: {
    eyebrow: "Direct Engagement",
    heading: "Have something worth building? Let's talk.",
    subtitle:
      "Available for architectural consultation, custom ERP development, and technical engineering roles.",
    primaryButton: { label: "Get in Touch", href: "/contact" },
    emailButton: {
      label: "rinshadmorayur09@gmail.com",
      href: "mailto:rinshadmorayur09@gmail.com",
    },
  },
}

// ----------------------------------------------------------------------------
// 5. WORK & PROJECT PAGES CONTENT
// ----------------------------------------------------------------------------
export const workPageContent = {
  header: {
    eyebrow: "Portfolio / 04 Flagships • 03 Websites",
    heading: "Selected Systems",
    subtitle:
      "Production ERPs, workflow platforms, and custom business systems engineered for reliability and scale.",
  },
  flagshipsHeader: {
    eyebrow: "Featured Engineering • 04 Flagships",
  },
  clientWebsitesHeader: {
    eyebrow: "02 / Commercial Platforms",
    heading: "Client Websites",
    subtitle:
      "Strategic digital presence, performance optimization, and production cloud deployment engineered for commercial organizations and academic institutions.",
  },
}

// ----------------------------------------------------------------------------
// 6. CONTACT PAGE CONTENT
// ----------------------------------------------------------------------------
export const contactPageContent = {
  header: {
    eyebrow: "Contact / Inquiries & Roles",
    headingLine1: "Let's Build",
    headingLine2: "Together",
    subtitle:
      "Available for software architecture consultation, custom ERP development, and technical engineering roles.",
  },
  channels: {
    emailLabel: "Email",
    phoneLabel: "Phone / WhatsApp",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  form: {
    nameField: {
      label: "01 / Your Name",
      placeholder: "Enter your name",
      error: "Please enter your name.",
    },
    emailField: {
      label: "02 / Work Email",
      placeholder: "name@company.com",
      error: "Please enter a valid email address.",
    },
    messageField: {
      label: "03 / Project Scope & Inquiries",
      placeholder: "Describe your system requirements or engineering role...",
      error: "Please enter your message details.",
    },
    submitButton: "Send Inquiry",
    sendingButton: "Sending...",
    successHeading: "Message Sent",
    successMessage:
      "Thank you for reaching out. I will review your message and respond promptly.",
    resetButton: "Send Another Inquiry",
  },
}

// ----------------------------------------------------------------------------
// 7. FLAGSHIP PROJECTS DATA
// ----------------------------------------------------------------------------
export const flagshipProjects: ProjectItem[] = [
  {
    id: "edubyte",
    name: "eduByte",
    category: "School Management ERP",
    type: "PAID_CLIENT_PRODUCTION",
    typeLabel: "Production ERP",
    statusText: "Production / In Active Use",
    client: "Kids covE School of Excellence",
    liveUrl: "https://edubyte.kidscoveozhukur.in/",
    summary:
      "A modular production school management ERP developed for institutional operational workflows.",
    scopeHighlights: [
      "Architected modular school ERP covering student lifecycle, fee structures, and accounting.",
      "Implemented complex backend logic for recurring fee generation, fine calculation, and payment allocation.",
      "Designed normalized relational schemas, REST APIs, RBAC authorization, and automated WhatsApp reminders.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Shadcn/UI",
    ],
    role: "Full-Stack Architecture & Development",
    image: "/assets/edubyte/1.png",
    images: [
      "/assets/edubyte/1.png",
      "/assets/edubyte/2.png",
      "/assets/edubyte/3.png",
      "/assets/edubyte/4.png",
      "/assets/edubyte/5.png",
    ],
    isFlagship: true,
  },
  {
    id: "byteflow",
    name: "byteFlow",
    category: "Project Management & Workflow Platform",
    type: "INTERNAL_PRODUCT",
    typeLabel: "Internal Product",
    statusText: "Completed / Used Internally",
    liveUrl: "https://byteflow.byten.in/",
    summary:
      "A Kanban-based collaborative project management platform with dynamic workflows and task tracking.",
    scopeHighlights: [
      "Architected normalized PostgreSQL schema supporting dynamic workflows, comments, labels, and audit logging.",
      "Engineered drag-and-drop task ordering, activity history, soft deletion, and JSON-based change tracking.",
      "Optimized database indexing and state management for real-time team collaboration.",
    ],
    technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL"],
    role: "System Design & Full-Stack Development",
    image: "/assets/byteflow/1.png",
    images: [
      "/assets/byteflow/1.png",
      "/assets/byteflow/2.png",
      "/assets/byteflow/3.png",
      "/assets/byteflow/4.png",
      "/assets/byteflow/5.png",
    ],
    isFlagship: true,
  },
  {
    id: "crusher-erp",
    name: "Crusher ERP",
    category: "Heavy Industry ERP & Accounting",
    type: "PAID_CLIENT_IN_DEVELOPMENT",
    typeLabel: "Client Project",
    statusText: "In Active Development (~50%)",
    summary:
      "A custom business management and accounting platform tailored for heavy materials and crusher operations.",
    scopeHighlights: [
      "Designing custom ERP modules to streamline procurement, inventory movement, sales, and logistics.",
      "Engineering relational database structures and transaction tracking for operational reporting.",
      "Developing specialized accounting and ledger architecture connecting operational workflows.",
    ],
    technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL"],
    role: "System Architecture & Full-Stack Development",
    image: "/assets/byteStrata/1.png",
    images: [
      "/assets/byteStrata/1.png",
      "/assets/byteStrata/2.png",
      "/assets/byteStrata/3.png",
      "/assets/byteStrata/4.png",
      "/assets/byteStrata/5.png",
    ],
    isFlagship: true,
  },
  {
    id: "byteballot",
    name: "byteBallot",
    category: "EVM Voting Simulator",
    type: "PUBLIC_PRODUCT",
    typeLabel: "Public Educational Project",
    statusText: "Publicly Available",
    liveUrl: "https://byteballot.byten.in/",
    summary:
      "A public educational voting simulator designed to help users understand and experience electronic voting workflows.",
    scopeHighlights: [
      "Engineered configurable electronic voting simulation workflows and scenario administration.",
      "Implemented secure vote recording, dynamic result aggregation, and outcome reporting.",
      "Designed an accessible, intuitive user interface for public educational exploration.",
    ],
    technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL"],
    role: "Full-Stack Development & Product Design",
    image: "/assets/byteballot/1.png",
    images: [
      "/assets/byteballot/1.png",
      "/assets/byteballot/2.png",
      "/assets/byteballot/3.png",
      "/assets/byteballot/4.png",
    ],
    isFlagship: true,
  },
]

// ----------------------------------------------------------------------------
// 8. COMMERCIAL CLIENT WEBSITES DATA
// ----------------------------------------------------------------------------
export const clientWebsites: ProjectItem[] = [
  {
    id: "kidscove",
    name: "Kids covE School of Excellence",
    category: "Institutional Website",
    type: "CLIENT_WEBSITE",
    typeLabel: "Client Website",
    statusText: "Live",
    liveUrl: "https://www.kidscoveozhukur.in/",
    image: "/assets/kidscove.png",
    summary:
      "Institutional web presence and public portal for Kids covE School of Excellence.",
    scopeHighlights: [
      "Strategic planning and deployment of modern institutional web platform.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    role: "Planning + Deployment",
    isFlagship: false,
    isClientWebsite: true,
  },
  {
    id: "skyra",
    name: "Skyra",
    category: "Education & Career Consultancy",
    type: "CLIENT_WEBSITE",
    typeLabel: "Client Website",
    statusText: "Live",
    liveUrl: "https://www.skyrallp.com/",
    image: "/assets/skyra.png",
    summary:
      "Corporate web presence for an education and career consulting organization.",
    scopeHighlights: [
      "Planning, content delivery structure, and cloud deployment.",
    ],
    technologies: ["Web Technologies", "Cloud Hosting"],
    role: "Planning + Deployment",
    isFlagship: false,
    isClientWebsite: true,
  },
  {
    id: "salichef",
    name: "SaliChef",
    category: "Culinary & Restaurant Consulting",
    type: "CLIENT_WEBSITE",
    typeLabel: "Client Website",
    statusText: "Live",
    liveUrl: "https://www.salichef.com/",
    image: "/assets/salichef.png",
    summary:
      "Brand presence and portfolio platform for a culinary consulting business.",
    scopeHighlights: [
      "Planning, responsive user experience, and cloud deployment.",
    ],
    technologies: ["Web Technologies", "Cloud Hosting"],
    role: "Planning + Deployment",
    isFlagship: false,
    isClientWebsite: true,
  },
]

// ----------------------------------------------------------------------------
// 9. CAREER PROGRESSION & LEADERSHIP DATA
// ----------------------------------------------------------------------------
export const careerProgression: (ExperienceItem & { headline: string; summary: string })[] = [
  {
    id: "wizzo",
    company: "Wizzo Technologies",
    role: "Full-Stack Developer",
    period: "Aug 2021 – Jun 2022",
    location: "Chemmad, Kerala",
    headline: "Application Engineering & Production Support",
    summary:
      "Developed web and Android applications for restaurant, warehouse, and business management systems using Laravel, React, Java, and MySQL while providing production support.",
    responsibilities: [
      "Developed web and Android applications for restaurant and warehouse systems.",
      "Implemented responsive UI components using React and styled-components.",
      "Built backend REST APIs using Laravel and integrated MySQL databases.",
      "Provided application maintenance, bug fixing, and client production support.",
    ],
    technologies: ["Laravel", "React", "Java", "MySQL", "Android", "REST APIs"],
  },
  {
    id: "griantek",
    company: "Griantek",
    role: "Full-Stack Developer",
    period: "Dec 2024 – Apr 2025",
    location: "Kochi, Kerala (Hybrid)",
    headline: "Full-Stack Web Engineering & Automation",
    summary:
      "Developed and deployed full-stack Next.js and Node.js web applications, automated journal and lead processing workflows, and managed GCP/Supabase backend infrastructure.",
    responsibilities: [
      "Developed and deployed full-stack Next.js web applications with modern styling.",
      "Built custom web automation scripts for journal publishing and lead management.",
      "Automated WhatsApp communications via cloud webhooks and message queues.",
      "Configured GCP virtual instances, NGINX reverse proxies, and Supabase / SQLite databases.",
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
    id: "veynad",
    company: "Veynad Pty Ltd",
    role: "Full-Stack Developer (Remote Contract)",
    period: "Apr 2025 – Jun 2025",
    location: "Melbourne, Australia",
    headline: "Enterprise Auditing Platform & Cloud Security",
    summary:
      "Engineered an enterprise auditing platform with React and .NET Core, implementing Azure AD B2C enterprise security and automated GitHub Actions CI/CD deployment pipelines.",
    responsibilities: [
      "Developed enterprise audit web application frontends using React and Material UI.",
      "Designed and integrated .NET Core REST APIs with Azure SQL Server backends.",
      "Implemented Azure AD B2C authentication, RBAC authorization, and token flows.",
      "Configured CI/CD deployment pipelines using GitHub Actions to Azure App Service.",
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
    id: "tcs",
    company: "Tata Consultancy Services (TCS)",
    role: "Full-Stack Developer",
    period: "Jun 2025 – Present",
    location: "Chennai, Tamil Nadu",
    headline: "Enterprise Web Systems & Linux Administration",
    summary:
      "Contributing to internal enterprise applications, engineering frontend forms and workflows, integrating REST APIs, refactoring codebases for long-term maintainability, and administering Linux (RHEL) server environments.",
    responsibilities: [
      "Developing and optimizing internal enterprise web applications using React.",
      "Administering and maintaining enterprise Linux (RHEL) server environments.",
      "Engineering reusable UI components, multi-step forms, and data grid workflows.",
      "Integrating REST APIs and refactoring legacy modules for maintainability.",
    ],
    technologies: ["React", "JavaScript", "Linux (RHEL)", "REST APIs"],
  },
]

export const experienceData = careerProgression

export const leadershipExperience: ExperienceItem[] = [
  {
    id: "byten",
    company: "ByteN",
    role: "Technical Lead & Full-Stack Developer",
    period: "Jul 2025 – Present",
    location: "Remote",
    isLeadership: true,
    responsibilities: [
      "Architecting full-stack web platforms and custom ERP solutions.",
      "Designing normalized PostgreSQL schemas and Prisma ORM data models.",
      "Engineering RESTful API endpoints, server actions, and RBAC authorization.",
      "Developing production-ready school management and voting simulation platforms.",
      "Overseeing software development lifecycle from requirements to deployment.",
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

// ----------------------------------------------------------------------------
// 10. CAPABILITIES, SKILLS & EDUCATION DATA
// ----------------------------------------------------------------------------
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

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mrinshad",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/mrinshad",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:rinshadmorayur09@gmail.com",
    icon: "mail",
  },
  {
    name: "Phone / WhatsApp",
    url: "https://wa.me/919895612423",
    icon: "phone",
  },
]

// ----------------------------------------------------------------------------
// 11. SEO & METADATA CONFIG
// ----------------------------------------------------------------------------
export const siteSeo = {
  siteUrl: "https://minshad.space",
  siteName: "Mohammed Rinshad P Portfolio",
  defaultTitle:
    "Mohammed Rinshad P | Full-Stack Software Engineer & Technical Lead",
  titleTemplate: "%s | Mohammed Rinshad P",
  defaultDescription:
    "Portfolio of Mohammed Rinshad P — Full-Stack Software Engineer & Technical Lead. Architecting scalable ERP platforms, relational schemas, and production web systems.",
  keywords: [
    "Mohammed Rinshad P",
    "Rinshad",
    "Full-Stack Developer",
    "Software Engineer",
    "Technical Lead",
    "Next.js",
    "React",
    "Node.js",
    ".NET Core",
    "PostgreSQL",
    "Prisma ORM",
    "ERP Architecture",
  ],
  ogImage: "/og-image.jpg",
  ogDescription:
    "Full-Stack Software Engineer & Technical Lead specializing in scalable ERP platforms, enterprise web applications, and cloud-native software.",
  twitterDescription:
    "Full-Stack Software Engineer & Technical Lead specializing in scalable ERP platforms and production systems.",
}
