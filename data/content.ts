import {
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillGroup,
} from "./types"

/* ───────────────────────────────────────────────────────────────────────────
   Identity
   ─────────────────────────────────────────────────────────────────────────── */

export const profile = {
  name: "Mohammed Rinshad P",
  short: "Rinshad",
  mark: "m.rinshad",
  role: "Full-Stack Software Engineer",
  roleLong: "Full-Stack Software Engineer & Technical Lead",
  org: "ByteN",
  location: "Kerala, India",
  email: "rinshadmorayur09@gmail.com",
  phone: "+91 98956 12423",
  phoneHref: "+919895612423",
  linkedin: "https://linkedin.com/in/mrinshad",
  github: "https://github.com/mrinshad",
  siteUrl: "https://minshad.space",
  available: "Open to architecture consulting and senior engineering roles",
}

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

/* ───────────────────────────────────────────────────────────────────────────
   Home
   ─────────────────────────────────────────────────────────────────────────── */

export const home = {
  masthead: {
    kicker: "Software Engineer · Kerala, India",
    lines: ["Systems that hold", "up under real", "business weight."],
    body: "I design and build ERP platforms, workflow tools and the relational data models underneath them. Currently a full-stack engineer at TCS, and lead developer at ByteN, where I ship school and quarry operations software that people use every working day.",
    primary: { label: "Read the work", href: "/work" },
    secondary: { label: "About me", href: "/about" },
  },
  facts: [
    { label: "Currently", value: "Full-Stack Developer, TCS" },
    { label: "Also", value: "Lead Developer, ByteN" },
    { label: "Based in", value: "Kerala, India" },
    { label: "Focus", value: "ERP · Data modelling · Full-stack" },
  ],
  principles: [
    {
      title: "Model the domain first",
      body: "Most of the difficulty in business software lives in the schema, not the screens. I spend the early effort on entities, invariants and the awkward edge cases — then the interface has something honest to render.",
    },
    {
      title: "Prefer boring infrastructure",
      body: "A relational database, a typed API boundary and a predictable deploy beat a clever stack nobody can operate at 2am. I reach for the established tool unless there is a concrete reason not to.",
    },
    {
      title: "Ship something people can use",
      body: "Scope that never lands is worth nothing. I work in slices that reach production, with the accounting and permissions correct from the first release rather than retrofitted later.",
    },
  ],
}

/* ───────────────────────────────────────────────────────────────────────────
   Work
   ─────────────────────────────────────────────────────────────────────────── */

export const workPage = {
  kicker: "Selected work · 2023 — 2026",
  heading: "Four systems, three sites,\none consistent standard.",
  body: "Client platforms and internal products I have architected and built end to end. Every entry links to a case study with the actual scope, the data model decisions and where the project stands today.",
}

export const flagshipProjects: ProjectItem[] = [
  {
    id: "edubyte",
    index: "01",
    name: "eduByte",
    category: "School management ERP",
    status: "in-production",
    statusText: "In production",
    year: "2024 — present",
    client: "Kids covE School of Excellence",
    summary:
      "A modular school ERP covering admissions, academics, fees and accounting, built for a school that was running those workflows on paper and spreadsheets.",
    lede: "eduByte replaces the disconnected spreadsheets a school office runs on with a single relational system: one student record, one fee ledger, one place where a payment is reconciled.",
    role: "Architecture & full-stack development",
    scope: [
      "Designed the relational schema for students, guardians, classes, fee structures and payments, with the fee ledger as the source of truth.",
      "Built recurring fee generation, fine calculation and payment allocation as explicit server-side steps rather than UI-side arithmetic.",
      "Implemented role-based access control so office staff, accountants and teachers each see only the records their role covers.",
      "Added scheduled WhatsApp reminders for fee due dates, driven by the same ledger that produces the receipts.",
    ],
    notes: [
      {
        label: "The hard part",
        body: "Fees in a real school are not one number. They are a structure, a schedule, a set of concessions and a running balance. Modelling those separately — and letting the balance be derived rather than stored — is what keeps receipts correct when a payment is partly allocated or a fine is waived.",
      },
      {
        label: "Data model",
        body: "A normalised PostgreSQL schema accessed through Prisma. Fee schedules generate ledger entries; payments allocate against those entries; reports read the ledger. No module writes a balance directly.",
      },
      {
        label: "Status",
        body: "Live and in daily use by the school office. The deployment runs on Supabase with the Next.js application server-rendering the operational views.",
      },
    ],
    technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL", "Supabase", "Shadcn/UI"],
    liveUrl: "https://edubyte.kidscoveozhukur.in/",
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
    index: "02",
    name: "byteFlow",
    category: "Project & workflow platform",
    status: "internal",
    statusText: "Used internally",
    year: "2025",
    summary:
      "A Kanban project platform with drag-and-drop ordering, custom workflows and a full audit trail, built for teams that need to know who changed what.",
    lede: "byteFlow is the internal tool ByteN runs its own delivery on. Boards, tasks, comments and labels, with every mutation written to an activity history instead of overwriting state.",
    role: "System design & full-stack development",
    scope: [
      "Designed a normalised schema for projects, boards, columns, tasks, labels, comments and activity records.",
      "Implemented drag-and-drop task ordering with persisted positions, so ordering survives a reload and a concurrent edit.",
      "Built soft deletion and JSON change tracking, giving each task a readable history rather than a lost previous state.",
      "Added indexing and query shaping around the board view, which is the read path that runs on every page load.",
    ],
    notes: [
      {
        label: "The hard part",
        body: "Ordering is deceptively hard. Storing a position as an integer means every reorder rewrites its neighbours; storing it sparsely means the numbers run out. The board keeps ordering explicit and server-authoritative so two people dragging at once cannot silently corrupt the sequence.",
      },
      {
        label: "Audit trail",
        body: "Rather than a generic log line, each mutation records the fields that changed and their before and after values. That makes the history useful to a person reading it, not just to a database.",
      },
      {
        label: "Status",
        body: "Complete and in internal use. The public landing page is live; the workspace itself is behind authentication.",
      },
    ],
    technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL"],
    liveUrl: "https://byteflow.byten.in/",
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
    index: "03",
    name: "byteStrata",
    category: "Quarry operations & commercial ledger",
    status: "in-development",
    statusText: "In development",
    year: "2025 — present",
    summary:
      "An ERP for stone crushers and aggregate suppliers, covering weighbridge dispatch, inventory movement, sales and a commercial ledger that ties them together.",
    lede: "Heavy materials businesses are reconciled by weight and by truck. byteStrata follows a load from the weighbridge through dispatch and billing into the ledger, so the tonnage on the invoice matches the tonnage on the bridge.",
    role: "System architecture & full-stack development",
    scope: [
      "Designing modules for procurement, inventory movement, sales, dispatch and logistics around a single transaction record.",
      "Building weighbridge-oriented data structures so each dispatch carries its vehicle, net weight and commercial value.",
      "Developing a double-entry ledger that connects operational events to accounts rather than bolting accounting on afterwards.",
      "Engineering reporting views over operational and financial data for day-to-day decision making.",
    ],
    notes: [
      {
        label: "The hard part",
        body: "Accounting for a quarry is not a separate module, it is a consequence of operations. A dispatch changes stock, creates a receivable and moves a ledger balance. The design keeps those effects in one transaction so the books cannot drift from the yard.",
      },
      {
        label: "Where it stands",
        body: "Roughly half complete, in active development with the client. Operational modules are being built first; the accounting layer is being developed alongside them rather than deferred.",
      },
      {
        label: "Status",
        body: "Not publicly deployed. Screens shown here are from the working build.",
      },
    ],
    technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL"],
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
    index: "04",
    name: "byteBallot",
    category: "EVM voting simulator",
    status: "public",
    statusText: "Publicly available",
    year: "2025",
    summary:
      "A public simulator that walks a voter through an electronic voting machine — ballot unit, symbols, LED confirmation and the count afterwards.",
    lede: "Most people have never touched an EVM before the day it matters. byteBallot is an educational replica: configurable elections, a faithful ballot unit interaction and a result view that explains what the machine recorded.",
    role: "Full-stack development & product design",
    scope: [
      "Built configurable election scenarios with constituencies, candidates and party symbols.",
      "Implemented the ballot unit interaction — candidate selection, vote confirmation and the VVPAT-style acknowledgement.",
      "Engineered vote recording and result aggregation with an outcome view suitable for classroom and public demonstration.",
      "Designed the interface for first-time users with no assumed knowledge of the process.",
    ],
    notes: [
      {
        label: "The hard part",
        body: "The value of a simulator is fidelity, not features. The interaction had to feel like the real unit — the sequence, the confirmation light, the printed slip — because the point is familiarity on the day, not a game.",
      },
      {
        label: "Audience",
        body: "Built for voter education: schools, first-time voters and anyone who wants to understand the process before standing in a booth.",
      },
      {
        label: "Status",
        body: "Publicly available and free to use.",
      },
    ],
    technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL"],
    liveUrl: "https://byteballot.byten.in/",
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

export const clientWebsites: ProjectItem[] = [
  {
    id: "kidscove",
    index: "05",
    name: "Kids covE",
    category: "School website",
    status: "in-production",
    statusText: "Live",
    year: "2024",
    client: "Kids covE School of Excellence",
    summary:
      "The public site for the school that runs eduByte — admissions information, facilities and contact, deployed on Vercel.",
    lede: "A calm institutional site for parents evaluating the school, kept deliberately separate from the ERP behind it.",
    role: "Planning & deployment",
    scope: [
      "Planned the information structure around what parents actually look for: admissions, facilities and how to visit.",
      "Built and deployed the site on Vercel with the school's own domain.",
    ],
    notes: [],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://www.kidscoveozhukur.in/",
    image: "/assets/kidscove.png",
    images: ["/assets/kidscove.png"],
    isFlagship: false,
    isClientWebsite: true,
  },
  {
    id: "skyra",
    index: "06",
    name: "Skyra",
    category: "Education consultancy",
    status: "in-production",
    statusText: "Live",
    year: "2024",
    client: "Skyra",
    summary:
      "A consultancy site for international education and career guidance, with service pages and an enquiry path.",
    lede: "Corporate presence for an education consultancy working with students heading abroad.",
    role: "Planning & deployment",
    scope: [
      "Structured the content around the consultancy's services and destinations.",
      "Handled deployment and hosting on the client's domain.",
    ],
    notes: [],
    technologies: ["Next.js", "Tailwind CSS", "Cloud hosting"],
    liveUrl: "https://www.skyrallp.com/",
    image: "/assets/skyra.png",
    images: ["/assets/skyra.png"],
    isFlagship: false,
    isClientWebsite: true,
  },
  {
    id: "salichef",
    index: "07",
    name: "SaliChef",
    category: "Culinary consulting",
    status: "in-production",
    statusText: "Live",
    year: "2024",
    client: "SaliChef",
    summary:
      "A brand site for a culinary consulting business, built to present the work and make the first contact easy.",
    lede: "A portfolio-shaped site for a chef-consultant, where the food photography carries the page.",
    role: "Planning & deployment",
    scope: [
      "Planned the page structure around the consulting offer and past work.",
      "Deployed and maintained the site on its production domain.",
    ],
    notes: [],
    technologies: ["Next.js", "Tailwind CSS", "Cloud hosting"],
    liveUrl: "https://www.salichef.com/",
    image: "/assets/salichef.png",
    images: ["/assets/salichef.png"],
    isFlagship: false,
    isClientWebsite: true,
  },
]

/* ───────────────────────────────────────────────────────────────────────────
   About
   ─────────────────────────────────────────────────────────────────────────── */

export const aboutPage = {
  kicker: "About",
  heading: "I like the part of the job\nwhere the domain finally\nmakes sense.",
  story: [
    "I am Mohammed Rinshad P, a software engineer from Kerala. I started with a diploma in computer engineering, then a B.Tech in computer science and engineering with a data science specialisation at Mar Athanasius College of Engineering.",
    "Since 2021 I have worked across restaurant and warehouse systems, cloud-hosted web platforms, an enterprise auditing product on Azure, and internal applications at TCS. Alongside that I lead development at ByteN, where I design and build the ERP platforms in this portfolio.",
    "The work I care most about is unglamorous and load-bearing: fee ledgers, weighbridge dispatch, permissions, audit trails. Software a business depends on every day has to be correct before it is impressive.",
  ],
  quote: {
    text: "And seek help through patience and prayer.",
    source: "Qur'an 2:45",
  },
  facts: [
    { label: "Name", value: "Mohammed Rinshad P" },
    { label: "Base", value: "Kerala, India" },
    { label: "Role", value: "Full-Stack Engineer & Technical Lead" },
    { label: "Education", value: "B.Tech CSE (Data Science), MACE" },
    { label: "Focus", value: "Enterprise systems, data modelling" },
    { label: "Availability", value: "Open to consulting and senior roles" },
  ],
}

export const experience: ExperienceItem[] = [
  {
    id: "tcs",
    company: "Tata Consultancy Services",
    role: "Full-Stack Developer",
    period: "Jun 2025 — Present",
    location: "Chennai, Tamil Nadu",
    summary:
      "Internal enterprise applications, plus administration of the Linux servers they run on.",
    points: [
      "Develop and extend internal enterprise web applications in React.",
      "Build reusable UI components, multi-step forms and data grid workflows.",
      "Integrate REST APIs and refactor legacy modules for maintainability.",
      "Administer and troubleshoot Linux (RHEL) server environments.",
    ],
    technologies: ["React", "JavaScript", "REST APIs", "Linux (RHEL)"],
  },
  {
    id: "byten",
    company: "ByteN",
    role: "Lead Developer",
    period: "Jul 2025 — Present",
    location: "Remote",
    summary:
      "Technical lead across a portfolio of ERP, accounting, education and simulation platforms — architecture, delivery and engineering standards.",
    points: [
      "Architect full-stack platforms and the relational schemas behind them.",
      "Design REST APIs, server actions and role-based authorisation.",
      "Set project structure, Git workflow, code review practice and engineering guidelines.",
      "Run technical planning and estimation directly with clients.",
    ],
    technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL", "System architecture"],
    isLeadership: true,
  },
  {
    id: "veynad",
    company: "Veynad Pty Ltd",
    role: "Full-Stack Developer (Contract)",
    period: "Apr 2025 — Jun 2025",
    location: "Melbourne, Australia · Remote",
    summary:
      "An enterprise auditing platform on Azure, with enterprise identity and automated deployment.",
    points: [
      "Built the React and Material UI front end for an enterprise audit product.",
      "Designed and integrated .NET Core REST APIs over Azure SQL Server.",
      "Implemented Azure AD B2C authentication, RBAC and token flows.",
      "Set up GitHub Actions pipelines deploying to Azure App Service.",
    ],
    technologies: ["React", ".NET Core", "Azure AD B2C", "Azure", "GitHub Actions"],
  },
  {
    id: "griantek",
    company: "Griantek",
    role: "Full-Stack Developer",
    period: "Dec 2024 — Apr 2025",
    location: "Kochi, Kerala · Hybrid",
    summary:
      "Full-stack web delivery plus the automation and infrastructure behind it.",
    points: [
      "Developed and deployed Next.js and Node.js applications.",
      "Wrote automation for journal publishing, email workflows and lead management.",
      "Automated WhatsApp messaging through cloud webhooks and message queues.",
      "Configured GCP instances, NGINX reverse proxies and Supabase / SQLite databases.",
    ],
    technologies: ["Next.js", "Node.js", "GCP", "Supabase", "NGINX", "SQLite"],
  },
  {
    id: "wizzo",
    company: "Wizzo Technologies",
    role: "Full-Stack Developer",
    period: "Aug 2021 — Jun 2022",
    location: "Chemmad, Kerala",
    summary:
      "First professional role: web and Android applications for restaurant and warehouse operations.",
    points: [
      "Developed web and Android applications for restaurant and warehouse systems.",
      "Built responsive interfaces in React and styled-components.",
      "Wrote Laravel REST APIs against MySQL databases.",
      "Handled deployment, bug fixing and client production support.",
    ],
    technologies: ["Laravel", "React", "Java", "MySQL", "Android"],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "Frontend",
    note: "Interfaces that hold their shape on a slow connection and a small screen.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Shadcn/UI"],
  },
  {
    index: "02",
    title: "Backend",
    note: "Typed API boundaries, explicit server actions, authorisation enforced server-side.",
    skills: ["Node.js", "Express.js", ".NET Core", "Java", "REST APIs"],
  },
  {
    index: "03",
    title: "Data",
    note: "Normalised schemas, transactional safety, and indexes that match the read path.",
    skills: ["PostgreSQL", "SQL Server", "MySQL", "SQLite", "Prisma ORM", "Supabase"],
  },
  {
    index: "04",
    title: "Infrastructure",
    note: "Deployments that a small team can operate without a platform engineer.",
    skills: ["Linux (RHEL)", "Azure", "Google Cloud", "GitHub Actions", "NGINX", "Vercel"],
  },
  {
    index: "05",
    title: "Practice",
    note: "How the work stays maintainable once the first version ships.",
    skills: ["System design", "Database design", "RBAC & authentication", "CI/CD", "Code review"],
  },
  {
    index: "06",
    title: "Tools",
    note: "The everyday kit around the code.",
    skills: ["Git", "GitHub", "Postman", "Firebase", "Docker"],
  },
]

export const education: EducationItem[] = [
  {
    institution: "Mar Athanasius College of Engineering",
    degree: "B.Tech, Computer Science & Engineering (Data Science)",
    period: "2021 — 2024",
    location: "Kothamangalam, Kerala",
  },
  {
    institution: "AKNM GPTC Thirurangadi",
    degree: "Diploma, Computer Engineering",
    period: "2018 — 2021",
    location: "Thirurangadi, Kerala",
  },
]

/* ───────────────────────────────────────────────────────────────────────────
   Contact
   ─────────────────────────────────────────────────────────────────────────── */

export const contactPage = {
  kicker: "Contact",
  heading: "Tell me what\nyou are building.",
  body: "I read everything that arrives. Useful first messages say what the system is, who uses it, and where it currently hurts — a short paragraph beats a template.",
  channels: [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone / WhatsApp", value: profile.phone, href: `https://wa.me/${profile.phoneHref.replace("+", "")}` },
    { label: "LinkedIn", value: "linkedin.com/in/mrinshad", href: profile.linkedin },
    { label: "GitHub", value: "github.com/mrinshad", href: profile.github },
  ],
  availability: [
    { label: "Consulting", value: "Architecture review, data modelling, ERP scoping" },
    { label: "Roles", value: "Senior full-stack engineering" },
    { label: "Location", value: "Remote, or on-site in India" },
    { label: "Response", value: "Usually within two working days" },
  ],
  form: {
    name: "Your name",
    email: "Email address",
    subject: "What is this about?",
    message: "The short version",
    submit: "Send message",
    sending: "Opening your mail client…",
    hint: "This form composes an email in your own client. Nothing is stored on this site.",
  },
}

/* ───────────────────────────────────────────────────────────────────────────
   SEO
   ─────────────────────────────────────────────────────────────────────────── */

export const seo = {
  title: "Mohammed Rinshad P — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer in Kerala, India. ERP platforms, workflow systems and relational data models built for production — eduByte, byteFlow, byteStrata and byteBallot.",
  keywords: [
    "Mohammed Rinshad P",
    "mrinshad",
    "m.rinshad",
    "Rinshad Kerala",
    "full-stack software engineer",
    "ERP developer",
    "Next.js developer",
    "PostgreSQL",
    "Prisma ORM",
    "Kerala software engineer",
    "ByteN",
  ],
}
