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
    'Senior Full-Stack Laravel / Vue.js developer with 6+ years of experience, Laravel framework contributor (MariaDB vector search) and AI integrations (MCP, RAG). CRM, LMS, e-commerce, ride-hailing, Flutter apps.',
  jobTitle: 'Senior Full-Stack Developer, Laravel / Vue.js',
  cv: { href: '/CV_Mohamed_Touhami_Rhaima_EN.pdf', title: 'Full CV', detail: 'PDF, 2 pages', short: 'CV (PDF)' },

  ui: {
    newTab: '(opens in a new tab)',
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    footerNavLabel: 'Footer navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    backToTop: 'Back to top',
    languageLabel: 'Language',
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
      'I build business platforms, CRM, LMS, e-commerce, ride-hailing, from requirements to production.',
      'Today I build AI features for a multi-tenant CRM handling millions of customer records: the MCP server that exposes its data to AI agents, and a Flutter assistant app that answers managers’ business questions in natural language.',
      'In 2026 I added MariaDB support to Laravel’s vector search and extended its CI to recent MariaDB releases. Since 2022 I have also worked remotely for French clients, including two years as Team Lead of a team of four developers.',
    ],
    highlights: [
      { value: '6+', label: 'years of experience' },
      { value: '7', label: 'merged pull requests in Laravel' },
      { value: '10,000+', label: 'orders processed by an e-commerce platform I delivered' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Arabic', level: 'native' },
      { name: 'French', level: 'fluent' },
      { name: 'English', level: 'professional working proficiency' },
    ],
    educationTitle: 'Education',
    education: { title: 'BTS (two-year higher national diploma) in Computer Science & Multimedia', school: 'ENTIC, Gabès', year: '2021' },
  },

  skills: {
    title: 'Skills',
    lead: 'Laravel and Vue.js at the core, with the databases, mobile and tooling that a production platform needs.',
    groups: [
      { name: 'Backend', items: ['PHP', 'Laravel (v5–v13)', 'Filament', 'REST APIs', 'Clean Architecture', 'SOLID', 'MVC / HMVC', 'Authentication & security'] },
      { name: 'Frontend', items: ['Vue.js 3', 'Nuxt', 'Inertia.js', 'Livewire', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
      { name: 'Testing', items: ['PHPUnit', 'Pest', 'Unit & feature tests', 'Test pipelines in CI'] },
      {
        name: 'AI & LLM',
        items: ['MCP servers & tools (Model Context Protocol)', 'RAG', 'Embeddings', 'Semantic search'],
        note: 'Semantic search on pgvector and MariaDB Vector.',
      },
      {
        name: 'Databases',
        items: ['MySQL', 'MariaDB (incl. Vector)', 'PostgreSQL (incl. pgvector)', 'SQLite', 'Redis', 'Multi-tenant (database per tenant)'],
        note: 'Redis for caching, queues and sessions.',
      },
      { name: 'Mobile', items: ['Flutter (iOS & Android, published apps)', 'Firebase'] },
      { name: 'DevOps', items: ['Git (GitHub / GitLab)', 'Docker', 'GitHub Actions', 'Codemagic', 'Nginx', 'Apache', 'Linux'] },
      { name: 'Methods', items: ['Agile / Scrum', 'JIRA', 'Technical documentation'] },
      {
        name: 'AI-assisted development',
        items: ['Claude Code', 'Cursor', 'GitHub Copilot'],
        note: 'Code review, testing and documentation.',
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
        kind: 'Interventions & invoicing for itSolve',
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
          'Driver, vehicle and billing management, online payments and pricing',
          'Led the team: effort estimation, planning and task distribution',
        ],
      },
    ],
  },

  experience: {
    title: 'Experience',
    lead: 'From Gabès to Dammam, with two years freelancing for a company in Île-de-France, and Flync on the side since 2026.',
    placePrefix: 'in',
    items: [
      {
        ...jobMeta.ecg,
        role: 'Full-Stack Developer, Laravel / Vue.js',
        place: 'Gabès, Tunisia',
        period: 'Sep 2025 – present',
        contract: 'Permanent',
        points: [
          'Owned the design and development of the MCP server and MCP toolbox of a multi-tenant CRM (database per tenant) managing millions of customer records, exposing CRM data to AI agents through the Model Context Protocol',
          'Built a Flutter mobile app: an AI assistant that answers managers’ business questions in natural language by querying the CRM through MCP and RAG',
          'Wrote automated tests (PHPUnit / Pest) for every CRM feature; optimized performance and maintained the production system',
        ],
      },
      {
        ...jobMeta.flync,
        role: 'Founder & Lead Developer',
        place: 'Tunisia',
        period: 'Mar 2026 – present',
        contract: 'Personal project',
        points: [
          'Built and launched a food delivery platform: 3 Flutter apps (customer, restaurant, courier) published on the App Store and Google Play',
          'Laravel backend in production: Flouci online payments, delivery zones, push notifications, real-time dashboard',
          'Automated CI/CD for the mobile apps and the web platform (Codemagic, GitHub Actions)',
        ],
      },
      {
        ...jobMeta.blackGold,
        role: 'Full-Stack Developer, Laravel / Inertia / Vue.js',
        place: 'Dammam, Saudi Arabia',
        period: 'Sep 2024 – Aug 2025',
        contract: 'Fixed-term',
        points: [
          'Built three platforms for the institute: an LMS (training programs), an HRIS (human resources) and a job portal',
          'Chose the architecture and stack (Laravel, Inertia.js, Vue.js) for the institute’s business platforms',
          'Worked on-site with an international engineering team, from specifications to delivery',
        ],
      },
      {
        ...jobMeta.itSolve,
        role: 'Team Lead & Full-Stack Laravel Developer',
        place: 'Île-de-France, France (remote from Gabès)',
        period: 'Aug 2022 – Aug 2024',
        contract: 'Freelance, long-term contract',
        note: 'Led a team of 4',
        points: [
          'Jasmin Emballage: e-commerce, 10,000+ orders, order processing time cut by 40%',
          'SOS Protech: interventions and invoicing, Inertia.js SSR, +45% organic traffic',
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
          'Backend development of delivery and messaging platforms',
          'Third-party API integrations (WhatsApp, Geidea payments)',
          'API development, ongoing maintenance and technical documentation',
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
