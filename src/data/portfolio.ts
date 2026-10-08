import type { EngineeringProject, Experience, LinkConfig, PersonalProject, SkillGroup } from '../types/portfolio'

export const portfolio = {
  person: {
    name: 'Mark Ardon P. Bañga',
    shortName: 'Mark Bañga',
    title: 'Software Developer',
    location: 'Mandaue City, Cebu, Philippines',
    email: 'markardonbanga1403@gmail.com',
    headline: 'Software Developer building enterprise, full-stack, and realtime web applications.',
    summary:
      'I work primarily with React and TypeScript, Java and Spring Boot—building responsive interfaces, REST APIs, backend services, and realtime application features.',
  },
  links: {
    github: { label: 'GitHub', href: 'https://github.com/ragrats1403', configured: true } satisfies LinkConfig,
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mark-ardon-ba%C3%B1ga/',
      configured: true,
    } satisfies LinkConfig,
    email: {
      label: 'Email',
      href: 'mailto:markardonbanga1403@gmail.com',
      configured: true,
    } satisfies LinkConfig,
    resume: { label: 'Download résumé', href: './Mark_Banga_Resume.pdf', configured: true } satisfies LinkConfig,
  },
  about:
    'I began primarily in frontend development, translating product requirements and UI designs into responsive interfaces. I later moved into full-stack development, working across React applications, Spring Boot services, REST APIs, databases, testing, documentation, and cross-functional delivery for airline e-commerce, enterprise POS, and tenant management systems.',
} as const

export const experiences: Experience[] = [
  {
    id: 'airline-commerce',
    title: 'Airline E-commerce Platform',
    company: 'Alliance Software Inc.',
    role: 'Front-end Developer',
    period: 'November 2023 – August 2025',
    industry: 'Major Philippine airline e-commerce platform',
    overview:
      'Responsive e-commerce functionality supporting online booking, online check-in, and structured product experimentation.',
    responsibilities: [
      'Collaborated with stakeholders to understand and clarify business requirements.',
      'Translated UI/UX designs into responsive web interfaces.',
      'Developed and enhanced online booking and online check-in functionality.',
      'Worked on Test and Learn functionality and ran A/B and multivariate tests through Insider.',
      'Maintained technical and testing documentation.',
    ],
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Figma', 'Insider', 'Azure DevOps'],
    practices: ['Unit testing', 'QA collaboration', 'Code review', 'A/B testing', 'Multivariate testing'],
  },
  {
    id: 'cloudpos',
    title: 'CloudPOS',
    company: 'Alliance Software Inc.',
    role: 'Full-stack Developer',
    period: 'August 2025 – April 2026',
    overview: 'Enterprise POS and retail management system spanning desktop-facing UI and backend business services.',
    responsibilities: [
      'Worked with technical leads to clarify feature requirements.',
      'Implemented product, inventory, and transaction-related business logic.',
      'Performed database updates and worked on SQL/query optimization.',
    ],
    technologies: ['React', 'Electron', 'TypeScript', 'Java', 'Spring Boot', 'JPA', 'MySQL'],
    frontend: ['Built and enhanced React and Electron components with TypeScript.'],
    backend: ['Developed and maintained Spring Boot modules using Java and JPA.'],
    practices: ['Requirements clarification', 'Frontend/backend integration', 'Database updates', 'Query optimization'],
  },
  {
    id: 'tenant-management',
    title: 'Tenant Management System',
    company: 'Alliance Software Inc.',
    role: 'Full-stack Developer',
    period: 'April 2026 – August 2026',
    overview: 'Enterprise tenant management system based on service-oriented and microservice architecture.',
    responsibilities: [
      'Developed and maintained backend services and responsive frontend functionality.',
      'Implemented sales-data upload and processing functionality.',
      'Worked with API Gateway authentication and routing.',
      'Implemented file-service APIs for automated file ingestion and processing.',
      'Performed database updates, query optimization, and service integration support.',
    ],
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'JPA', 'Hibernate', 'REST APIs', 'MySQL'],
    frontend: ['Developed responsive functionality using React and TypeScript.'],
    backend: ['Built Spring Boot services and REST APIs with JPA and Hibernate.'],
    database: ['Maintained MySQL data structures and optimized queries.'],
    architecture: ['Microservices', 'API Gateway'],
    practices: ['Service integration', 'REST API development', 'Database updates', 'Query optimization'],
  },
]

export const skillGroups: SkillGroup[] = [
  { name: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Angular', 'HTML', 'CSS', 'Bootstrap'] },
  { name: 'Backend', skills: ['Java', 'Spring Boot', 'REST APIs', 'JPA', 'Hibernate', 'NestJS'] },
  { name: 'Database', skills: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Prisma'] },
  { name: 'Realtime & Messaging', skills: ['Socket.IO', 'WebSockets', 'Redis', 'BullMQ'] },
  { name: 'Infrastructure & Tooling', skills: ['Docker', 'Git', 'GitHub', 'Azure Repos', 'Azure DevOps', 'MinIO', 'Postman', 'FFmpeg', 'Figma'] },
  { name: 'Testing & Engineering Practices', skills: ['Unit Testing', 'Functional Testing', 'QA Collaboration', 'Code Review', 'A/B Testing', 'Multivariate Testing', 'Agile'] },
]

export const engineeringProjects: EngineeringProject[] = [
  {
    id: 'ai-video-clipping',
    name: 'AI Video Clipping SaaS',
    status: 'Active Development',
    type: 'Durable media-processing platform',
    role: 'Full-stack Developer',
    description:
      'My current primary engineering project: a TypeScript monorepo that turns source videos into processed clips through durable background jobs and media workers.',
    implemented: [
      'NestJS API with PostgreSQL, Prisma, persisted job state, processing stages, and failure handling.',
      'Transactional outbox delivery, durable BullMQ jobs through Redis, and media-processing workers.',
      'MinIO / S3-compatible object storage, source integrity verification, and generated clip persistence.',
      'FFmpeg and FFprobe media rendering, plus implemented transcription and caption-processing workflows.',
    ],
    challenges: [
      'Keeping database state authoritative while queue delivery and worker execution remain retry-safe.',
      'Persisting generated media and stage outcomes across failures and restarts.',
      'Separating the broader AI-assisted product objective from currently implemented processing infrastructure.',
    ],
    technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'MinIO', 'FFmpeg', 'FFprobe', 'Docker Compose'],
    architecture: ['Web client', 'NestJS API', 'PostgreSQL', 'Transactional outbox', 'BullMQ + Redis', 'Worker', 'FFmpeg + FFprobe', 'MinIO'],
    planned: ['AI-assisted clip analysis remains part of the product direction and is not presented as complete.'],
  },
  {
    id: 'guildwave',
    name: 'Guildwave',
    alternateName: 'Project Nexus',
    status: 'Paused',
    type: 'Full-stack realtime communication platform',
    role: 'Full-stack Developer',
    description:
      'Development is currently paused while I focus on another engineering project. The architecture and features shown here represent the implemented state of this Discord-style full-stack communication platform.',
    implemented: [
      'Authentication, communities, invitations, channels, replies, editing, deletion, and reactions.',
      'Cursor-paginated messages, typing indicators, presence, and persisted unread/read state.',
      'NEW MESSAGES divider, reconnect handling, and responsive desktop/mobile UI.',
    ],
    challenges: [
      'Coordinating REST state with Socket.IO events without duplicating messages or reactions.',
      'Restoring presence, read state, and subscriptions safely after socket reconnection.',
      'Managing database migrations and containerized local services across the application stack.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'React Router', 'Socket.IO', 'NestJS', 'PostgreSQL', 'Prisma', 'Redis', 'MinIO', 'Docker Compose'],
    architecture: ['React client', 'REST APIs + Socket.IO', 'NestJS API', 'PostgreSQL · Redis · MinIO'],
  },
  {
    id: 'ragrats-kp',
    name: 'Ragrats KP',
    alternateName: 'KathanaHelper',
    status: 'Released / Maintained',
    type: 'Desktop utility',
    role: 'Developer & Maintainer',
    description:
      'A released and maintained desktop keypress and input utility focused on compatibility across different applications and older games.',
    implemented: [
      'Original/normal, force, and PyDirectInput input modes behind a configurable interface.',
      'Application settings, compatibility improvements, and regression coverage.',
      'Packaging, versioned releases, and maintenance work through release 2.5.2.',
    ],
    challenges: [
      'Preserving established behavior while introducing additional input implementations.',
      'Abstracting input modes so application-specific compatibility changes remain maintainable.',
      'Migrating configuration safely and preventing regressions during release packaging.',
    ],
    technologies: ['Python', 'Tkinter', 'PyDirectInput', 'PyInstaller', 'Regression Testing'],
  },
]

export const personalProjects: PersonalProject[] = [
  {
    name: 'AI Bill Utility App',
    description:
      'A responsive household electricity-bill tracker that reads bill images on-device, lets users validate extracted fields, and organizes monthly usage, spending, payment status, and reminders.',
    technologies: ['React', 'TypeScript', 'Tesseract.js', 'Cloudflare D1', 'Cloudflare R2', 'Drizzle ORM', 'Tailwind CSS'],
    image: './projects/ai-bill-utility-app.webp',
    challenges: [
      'Normalizing imperfect OCR output into structured electricity-bill fields.',
      'Keeping document recognition private while supporting persistent household records.',
    ],
    features: [
      'On-device OCR with editable extracted data and confidence feedback.',
      'Monthly consumption, spending history, bill status, and reminder workflows.',
      'Responsive mobile layout with D1 records and optional R2 document storage.',
    ],
  },
  {
    name: 'Wuthering Waves Discord Themes',
    description:
      'A pair of configurable BetterDiscord themes—Resonance and Starlit Tides—designed around readable translucent surfaces, restrained motion, and an optimized single-wallpaper rendering strategy.',
    technologies: ['CSS', 'BetterDiscord', 'PowerShell', 'WebP', 'Chromium DevTools'],
    image: './projects/wuthering-waves-theme.webp',
    challenges: [
      'Styling Discord’s frequently changing generated class names with resilient fallbacks.',
      'Balancing layered visual effects with paint, layout, and accessibility constraints.',
    ],
    features: [
      'Balanced, performance, and cinematic configuration presets.',
      'Reduced-motion support and transform/opacity-focused interaction effects.',
      'Build-and-install workflow that embeds an optimized runtime background.',
    ],
  },
  {
    name: 'FaciNBuild',
    description:
      'A web-based facility management system for coordinating facility reservations, equipment requests, schedules, and maintenance-related workflows across different user roles.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'DataTables', 'HTML', 'CSS'],
    challenges: [
      'Preventing conflicting reservations across facility, date, and time selections.',
      'Coordinating reservation details, equipment add-ons, and approval states across role-specific interfaces.',
    ],
    features: [
      'Facility reservation creation with schedule-conflict validation.',
      'Equipment selection, reservation tracking, and searchable data tables.',
      'User, CAD, facility director, and administrative workflows.',
    ],
  },
]
