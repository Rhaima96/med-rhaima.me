import type { Content } from '../types'
import { jobMeta, packageMeta, prRefs, projectMeta } from '../shared'

const { flync, jasmin, sosProtech, prefev } = projectMeta

export const en: Content = {
  locale: 'en',
  path: '/en/',
  htmlLang: 'en',
  ogLocale: 'en_US',
  ogImage: '/og-en.png',
  title: 'Mohamed Touhami Rhaima — Senior Full-Stack Developer, Laravel / Vue.js',
  description:
    'Senior Full-Stack Laravel / Vue.js developer with 6+ years of experience and a Laravel framework contributor (MariaDB vector search). CRM, LMS, e-commerce, ride-hailing, Flutter apps.',
  jobTitle: 'Senior Full-Stack Developer, Laravel / Vue.js',
  cv: { href: '/CV_Mohamed_Touhami_Rhaima_EN.pdf', title: 'Full résumé', detail: 'PDF, 2 pages', short: 'Résumé (PDF)' },

  ui: {
    newTab: '(opens in a new tab)',
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    footerNavLabel: 'Footer navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    backToTop: 'Back to top',
    switchLabel: 'FR',
    switchAria: 'Lire cette page en français',
    technologies: 'Technologies',
  },

  nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', openSource: 'Open source', contact: 'Contact' },

  hero: {
    location: 'Based in Gabès, Tunisia',
    lead: 'Senior full-stack developer. I build Laravel and Vue.js platforms that hold up in production, and I contribute to the Laravel framework itself.',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
    availability: 'Available within one month (notice period), remote or on-site.',
    fieldCaption:
      'Move your pointer over the field: each point is a skill, and the query finds the closest ones by cosine distance, like the vector search I added to Laravel for MariaDB.',
    fieldAria:
      'Vector field of skills. Use the arrow keys to turn the query; the three closest skills by cosine distance are listed below the diagram.',
    fieldTable: 'skills',
    fieldVar: '$query',
  },

  about: {
    title: 'Six years of shipping business platforms',
    paragraphs: [
      'I design scalable architectures and complex business platforms: multi-tenant CRM, LMS, e-commerce, ride-hailing. I take part in every stage, from requirements analysis and technical choices to development, optimization and deployment.',
      'Since 2022 I have worked remotely with French clients and international teams, including two years as Team Lead of a team of four developers.',
      'In 2026 I added MariaDB support to Laravel’s vector search and extended its CI to recent MariaDB releases. I also build applied AI features (RAG, MCP servers) and use Claude Code and Cursor to make code review, testing and documentation more reliable.',
    ],
    highlights: [
      { value: '6+', label: 'years of experience' },
      { value: '7', label: 'merged pull requests in Laravel' },
      { value: '10,000+', label: 'orders processed by an e-commerce platform I delivered' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'French', level: 'fluent' },
      { name: 'English', level: 'professional working proficiency' },
      { name: 'Arabic', level: 'native' },
    ],
    educationTitle: 'Education',
    education: { title: 'BTS (2-year degree) in Computer Science & Multimedia', school: 'ENTIC, Gabès', year: '2021' },
  },

  skills: {
    title: 'Skills',
    lead: 'Laravel and Vue.js at the core, with the databases, mobile and tooling that a production platform needs.',
    groups: [
      { name: 'Backend', items: ['PHP', 'Laravel (v5–v13)', 'Symfony (v6 & v7)', 'REST APIs', 'MVC / HMVC', 'SOLID', 'Clean Architecture', 'Authentication & security'] },
      { name: 'Frontend', items: ['Vue.js 2 & 3', 'Nuxt.js', 'Inertia.js', 'Livewire 3 & 4', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'] },
      {
        name: 'Databases',
        items: ['MySQL', 'MariaDB (including MariaDB Vector)', 'PostgreSQL (including pgvector)', 'SQLite', 'MongoDB', 'Redis', 'Multi-tenant architectures'],
        note: 'Redis for caching, queues and sessions.',
      },
      {
        name: 'AI & LLM',
        items: ['RAG', 'Embeddings', 'Semantic search', 'MCP servers (Model Context Protocol)'],
        note: 'Semantic search on pgvector and MariaDB Vector.',
      },
      { name: 'Mobile', items: ['Flutter'] },
      {
        name: 'DevOps & tools',
        items: ['Git (GitHub / GitLab)', 'Docker', 'GitHub Actions', 'Codemagic', 'Filament v3', 'Nginx', 'Apache', 'Linux', 'OVH', 'Ionos', 'Hostinger', 'Agile / Scrum', 'JIRA', 'ClickUp'],
      },
      {
        name: 'AI-assisted development',
        items: ['Claude Code', 'Cursor', 'GitHub Copilot'],
        note: 'Automated code review, testing and documentation.',
      },
    ],
  },

  projects: {
    title: 'Selected projects',
    lead: 'One product of my own in production, and three platforms delivered for French clients with itSolve.',
    architectureLabel: 'Flync architecture',
    backendTitle: 'Laravel backend',
    backendDetail: 'Firebase, Flouci payments, delivery zones, push notifications, real-time dashboard',
    appLabel: 'Flync app',
    items: [
      {
        ...flync,
        kind: 'Personal product, food delivery',
        summary: 'A complete food delivery platform: three mobile apps, a backend and a dashboard, from code to the app stores.',
        points: [
          '3 Flutter apps (customer, restaurant, courier) published on the App Store and Google Play',
          'Laravel backend in production, automated CI/CD (Codemagic, GitHub Actions)',
          'Firebase, Flouci payments, delivery zones, push notifications, real-time dashboard',
        ],
        apps: [
          { name: 'Customer', ...flync.stores.client },
          { name: 'Restaurant', ...flync.stores.restaurant },
          { name: 'Courier', ...flync.stores.courier },
        ],
      },
      {
        ...jasmin,
        kind: 'E-commerce for itSolve',
        period: 'Aug 2022 – Aug 2023',
        summary: 'Online store for food and parcel packaging, serving the French market.',
        points: ['E-commerce platform that processed more than 10,000 orders', 'APIs for the mobile apps', 'Sogecommerce payments and Boxtal shipping integrated'],
        results: [
          { value: '10,000+', label: 'orders' },
          { value: '−40%', label: 'processing time' },
        ],
      },
      {
        ...sosProtech,
        kind: 'Field service management for itSolve',
        period: 'Aug 2023 – Dec 2023',
        summary: 'Platform for managing technical interventions, quotes, invoices and technician assignment.',
        points: [
          'Server-side rendering with Inertia.js',
          'PDF reports with digital signatures, multi-role dashboards (Chart.js)',
          'VPS deployment and tuning (Ubuntu, Apache)',
        ],
        results: [
          { value: '+45%', label: 'organic traffic' },
          { value: '−30%', label: 'load time' },
        ],
      },
      {
        ...prefev,
        kind: 'Ride-hailing (VTC) platform for itSolve',
        period: 'Dec 2023 – Aug 2024',
        summary: 'Ride-hailing management platform built end to end, while leading the team.',
        points: [
          'Real-time ride booking and dispatch',
          'Driver, vehicle and billing management',
          'Online payments and pricing',
          'Team management, effort estimation and planning',
        ],
      },
    ],
  },

  experience: {
    title: 'Experience',
    lead: 'From Gabès to Dammam, with two years freelancing for a company in Île-de-France: four roles since 2020.',
    placePrefix: 'in',
    items: [
      {
        ...jobMeta.ecg,
        role: 'Full-Stack Developer, Laravel / Vue.js',
        place: 'Gabès, Tunisia',
        period: 'Sep 2025 – present',
        contract: 'Permanent',
        points: [
          'Designed and built a multi-tenant business CRM with a separate database per client, from requirements analysis to deployment',
          'Performance optimization and ongoing maintenance of the production system',
        ],
      },
      {
        ...jobMeta.blackGold,
        role: 'Full-Stack Developer, Laravel / Inertia / Vue.js',
        place: 'Dammam, Saudi Arabia',
        period: 'Sep 2024 – Aug 2025',
        contract: 'Fixed-term',
        points: [
          'Contributed to the technical architecture and technology choices',
          'Specialized platforms: LMS (training), HRIS (human resources) and a job portal',
          'Worked with international engineering teams',
        ],
      },
      {
        ...jobMeta.itSolve,
        role: 'Team Lead & Full-Stack Laravel Developer',
        place: 'Île-de-France, France (remote)',
        period: 'Aug 2022 – Aug 2024',
        contract: 'Freelance',
        note: 'Led a team of 4',
        points: [
          'Jasmin Emballage: e-commerce, more than 10,000 orders, processing time cut by 40%',
          'SOS Protech: field service management, Inertia.js SSR, +45% organic traffic',
          'Préfev: ride-hailing platform, real-time booking and dispatch, team lead',
        ],
      },
      {
        ...jobMeta.tmkiin,
        role: 'Laravel Developer',
        place: 'Gabès, Tunisia',
        period: 'Jul 2020 – Aug 2022',
        contract: 'Fixed-term',
        points: [
          'Backend for delivery and messaging platforms',
          'Third-party API integrations (WhatsApp, Geidea payments)',
          'Maintenance, API development and technical documentation',
        ],
      },
    ],
  },

  openSource: {
    title: 'Open source',
    lead: 'Seven merged pull requests in Laravel in 2026, around MariaDB and vector search, and four packages published on Packagist.',
    frameworkTitle: 'Laravel framework',
    packagesTitle: 'Laravel packages',
    mergedPr: 'merged pull request',
    linkOf: 'for',
    copy: 'Copy',
    copied: 'Copied',
    copyAria: 'Copy the install command for',
    contributions: [
      {
        title: 'Vector search on MariaDB',
        detail:
          'MariaDB support for whereVectorSimilarTo and the other vector distance queries behind Laravel’s semantic search. The driver capability check moved from the connection to the grammar.',
        refs: prRefs.vectorSearch,
      },
      {
        title: 'CI on MariaDB 11.8 and 12.3 LTS',
        detail: 'Vector and 11.7+ tests now run on every pull request. The new job caught a test broken by a behavior change in MariaDB 11.8.1.',
        refs: prRefs.ci,
      },
      {
        title: 'Official documentation',
        detail:
          'Documented vector indexes, restored the vector() anchor, switched Homestead to the dedicated mariadb driver, updated multi-table DELETE for 11.8.1 and clarified MariaDB’s native vector support.',
        refs: prRefs.docs,
      },
    ],
    packages: [
      { ...packageMeta.vectorMetrics, description: 'Euclidean and cosine vector search with configurable vector indexes for MariaDB and PostgreSQL.' },
      { ...packageMeta.voltpanel, description: 'Laravel admin panel builder on the VILT stack (Vue, Inertia, Laravel, Tailwind).' },
      { ...packageMeta.flouci, description: 'Integration for the Flouci payment gateway.' },
      { ...packageMeta.larakonnect, description: 'Integration for the Konnect.network payment gateway.' },
    ],
  },

  contact: {
    title: 'A Laravel or Vue.js project to launch, or a team to join?',
    lead: 'Available within one month (notice period), remote or on-site. Email is the easiest way to reach me.',
    copy: 'Copy address',
    copied: 'Address copied',
    phone: 'Phone',
  },

  footer: { tagline: 'Designed and built in Gabès, with Nuxt and Tailwind CSS.' },
}
