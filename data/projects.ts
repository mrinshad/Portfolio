import { ProjectItem } from "./types"

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
    image: "/assets/projects/edubyte-preview.jpg",
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
    image: "/assets/projects/byteflow-preview.jpg",
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
    image: "/assets/projects/crusher-preview.jpg",
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
    image: "/assets/projects/byteballot-preview.jpg",
    isFlagship: true,
  },
]

export const clientWebsites: ProjectItem[] = [
  {
    id: "kidscove",
    name: "Kids covE School of Excellence",
    category: "Institutional Website",
    type: "CLIENT_WEBSITE",
    typeLabel: "Client Website",
    statusText: "Live",
    liveUrl: "https://www.kidscoveozhukur.in/",
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
