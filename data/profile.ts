// Single source of truth for the portfolio. Everything here comes from the CV
// (CV_Mohamed_Touhami_Rhaima_FR.pdf, octobre 2026) or from public, verified sources
// (Packagist, GitHub pull requests). Edit this file to update the site.

export const site = {
  url: 'https://med-rhaima.me',
  title: 'Mohamed Touhami Rhaima — Développeur Full-Stack Senior Laravel / Vue.js',
  description:
    "Développeur Full-Stack Senior Laravel / Vue.js, 6+ ans d'expérience, contributeur au framework Laravel (recherche vectorielle MariaDB). CRM, LMS, e-commerce, VTC, applications Flutter.",
  locale: 'fr_FR',
  cv: '/CV_Mohamed_Touhami_Rhaima_FR.pdf',
}

export const person = {
  name: 'Mohamed Touhami Rhaima',
  shortName: 'Mohamed Rhaima',
  role: 'Développeur Full-Stack Senior — Laravel / Vue.js',
  location: 'Gabès, Tunisie',
  years: '6+',
  availability: 'Disponible sous un mois (préavis), en télétravail comme en présentiel.',
  email: 'mohamed.rhaima96@gmail.com',
  phone: '+216 24 836 687',
  phoneHref: 'tel:+21624836687',
  links: {
    github: 'https://github.com/Rhaima96',
    linkedin: 'https://www.linkedin.com/in/mohamed-touhami-rhaima',
  },
  languages: [
    { name: 'Français', level: 'courant' },
    { name: 'Anglais', level: 'bon niveau professionnel' },
    { name: 'Arabe', level: 'langue maternelle' },
  ],
  education: { title: 'BTS Informatique & Multimédia', school: 'ENTIC, Gabès', year: '2021' },
}

export const about = [
  "Je conçois des architectures évolutives et des plateformes métier complexes : CRM multi-tenant, LMS, e-commerce, VTC. Je suis présent à chaque étape, de l'analyse des besoins aux choix techniques, puis au développement, à l'optimisation et au déploiement.",
  "Depuis 2022, je travaille à distance avec des clients français et des équipes internationales, dont deux ans comme Team Lead d'une équipe de quatre développeurs.",
  "En 2026, j'ai ajouté le support MariaDB à la recherche vectorielle de Laravel et étendu sa CI aux versions récentes de MariaDB. Je conçois aussi des fonctionnalités d'IA appliquée (RAG, serveurs MCP) et j'utilise Claude Code et Cursor pour fiabiliser la revue de code, les tests et la documentation.",
]

export const highlights = [
  { value: '6+', label: "ans d'expérience" },
  { value: '7', label: 'pull requests mergées dans Laravel' },
  { value: '10 000+', label: 'commandes traitées par une plateforme e-commerce livrée' },
]

export interface SkillGroup {
  name: string
  items: string[]
  note?: string
}

export const skills: SkillGroup[] = [
  {
    name: 'Backend',
    items: ['PHP', 'Laravel (v5–v13)', 'Symfony (v6 & v7)', 'REST APIs', 'MVC / HMVC', 'SOLID', 'Clean Architecture', 'Authentification & sécurité'],
  },
  {
    name: 'Frontend',
    items: ['Vue.js 2 & 3', 'Nuxt.js', 'Inertia.js', 'Livewire 3 & 4', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
  },
  {
    name: 'Bases de données',
    items: ['MySQL', 'MariaDB (dont MariaDB Vector)', 'PostgreSQL (dont pgvector)', 'SQLite', 'MongoDB', 'Redis', 'Architectures multi-tenant'],
    note: 'Redis pour le cache, les files d’attente et les sessions.',
  },
  {
    name: 'IA & LLM',
    items: ['RAG', 'Embeddings', 'Recherche sémantique', 'Serveurs MCP (Model Context Protocol)'],
    note: 'Recherche sémantique sur pgvector et MariaDB Vector.',
  },
  { name: 'Mobile', items: ['Flutter'] },
  {
    name: 'DevOps & outils',
    items: ['Git (GitHub / GitLab)', 'Docker', 'GitHub Actions', 'Codemagic', 'Filament v3', 'Nginx', 'Apache', 'Linux', 'OVH', 'Ionos', 'Hostinger', 'Agile / Scrum', 'JIRA', 'ClickUp'],
  },
  {
    name: 'Développement assisté par IA',
    items: ['Claude Code', 'Cursor', 'GitHub Copilot'],
    note: 'Automatisation de la revue de code, des tests et de la documentation.',
  },
]

export interface Project {
  name: string
  kind: string
  period?: string
  summary: string
  points: string[]
  results?: { value: string; label: string }[]
  stack: string[]
  url?: string
  urlLabel?: string
}

export const projects: Project[] = [
  {
    name: 'Flync',
    kind: 'Produit personnel, livraison de repas',
    summary:
      'Une plateforme complète de livraison de repas : trois applications mobiles, un backend et un tableau de bord, du code jusqu’aux stores.',
    points: [
      '3 applications Flutter (client, restaurant, livreur) publiées sur l’App Store et Google Play',
      'Backend Laravel et frontend Next.js en production, CI/CD automatisée (Codemagic, GitHub Actions)',
      'Firebase, paiement Flouci, zones de livraison, notifications push, tableau de bord temps réel',
    ],
    stack: ['Flutter', 'Laravel', 'Next.js', 'Firebase', 'MySQL', 'Codemagic', 'GitHub Actions'],
    url: 'https://flync.pro',
    urlLabel: 'flync.pro',
  },
  {
    name: 'Jasmin Emballage',
    kind: 'E-commerce pour itSolve',
    period: 'Août 2022 – Août 2023',
    summary: 'Boutique en ligne d’emballages alimentaires et colis pour le marché français.',
    points: [
      'Solution e-commerce ayant traité plus de 10 000 commandes',
      'API pour les applications mobiles',
      'Paiement Sogecommerce et livraison Boxtal intégrés',
    ],
    results: [
      { value: '10 000+', label: 'commandes' },
      { value: '−40 %', label: 'temps de traitement' },
    ],
    stack: ['Laravel', 'Vue.js', 'REST API', 'Pusher', 'Ionos'],
    url: 'https://jasminemballage.fr',
    urlLabel: 'jasminemballage.fr',
  },
  {
    name: 'SOS Protech',
    kind: 'Gestion d’interventions pour itSolve',
    period: 'Août 2023 – Déc. 2023',
    summary: 'Plateforme de gestion des interventions techniques, devis, factures et affectation des techniciens.',
    points: [
      'SSR avec Inertia.js',
      'Rapports PDF avec signature numérique, tableaux de bord multi-rôles (Chart.js)',
      'Déploiement et optimisation de serveurs VPS (Ubuntu, Apache)',
    ],
    results: [
      { value: '+45 %', label: 'trafic organique' },
      { value: '−30 %', label: 'temps de chargement' },
    ],
    stack: ['Laravel', 'Vue.js 3', 'Inertia.js', 'Tailwind CSS', 'MySQL', 'GitHub Actions'],
    url: 'https://sosprotech.fr',
    urlLabel: 'sosprotech.fr',
  },
  {
    name: 'Préfev',
    kind: 'Plateforme VTC pour itSolve',
    period: 'Déc. 2023 – Août 2024',
    summary: 'Plateforme de gestion VTC développée de bout en bout, avec la direction de l’équipe.',
    points: [
      'Réservation et dispatch des courses en temps réel',
      'Gestion des chauffeurs, des véhicules et de la facturation',
      'Paiement en ligne et tarification',
      'Management d’équipe, estimation de charge et planification',
    ],
    stack: ['Laravel', 'Livewire', 'Bootstrap', 'MySQL'],
  },
]

export interface Job {
  role: string
  company: string
  place: string
  period: string
  contract: string
  points: string[]
  stack: string[]
  note?: string
}

export const experience: Job[] = [
  {
    role: 'Développeur Full-Stack Laravel / Vue.js',
    company: 'ECG Assurance',
    place: 'Gabès, Tunisie',
    period: 'Sept. 2025 – aujourd’hui',
    contract: 'CDI',
    points: [
      'Conception et développement d’un CRM métier multi-tenant, avec une base de données distincte par client, de l’analyse des besoins jusqu’au déploiement',
      'Optimisation des performances et maintenance continue du système en production',
    ],
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Git', 'Agile'],
  },
  {
    role: 'Développeur Full-Stack Laravel / Inertia / Vue.js',
    company: 'Black Gold',
    place: 'Dammam, Arabie saoudite',
    period: 'Sept. 2024 – Août 2025',
    contract: 'CDD',
    points: [
      'Participation à l’architecture technique et aux choix technologiques',
      'Plateformes spécialisées : LMS (formation), SIRH (ressources humaines) et portail d’emploi',
      'Collaboration avec des équipes techniques internationales',
    ],
    stack: ['Laravel 10', 'Vue.js', 'Inertia.js', 'MySQL', 'Git'],
  },
  {
    role: 'Team Lead & Développeur Full-Stack Laravel',
    company: 'itSolve',
    place: 'Île-de-France, France (à distance)',
    period: 'Août 2022 – Août 2024',
    contract: 'Freelance',
    note: 'Management d’une équipe de 4',
    points: [
      'Jasmin Emballage : e-commerce, plus de 10 000 commandes, temps de traitement réduit de 40 %',
      'SOS Protech : gestion d’interventions, SSR Inertia.js, +45 % de trafic organique',
      'Préfev : plateforme VTC, réservation et dispatch en temps réel, direction de l’équipe',
    ],
    stack: ['Laravel', 'Vue.js', 'Inertia.js', 'Livewire', 'Tailwind CSS', 'MySQL'],
  },
  {
    role: 'Développeur Laravel',
    company: 'TMKiiN',
    place: 'Gabès, Tunisie',
    period: 'Juil. 2020 – Août 2022',
    contract: 'CDD',
    points: [
      'Backend de plateformes de livraison et de messagerie',
      'Intégration d’API tierces (WhatsApp, paiement Geidea)',
      'Maintenance, développement d’API et documentation technique',
    ],
    stack: ['Laravel', 'Vue.js', 'Flutter', 'Docker', 'HMVC', 'JIRA', 'GitLab'],
  },
]

export interface Contribution {
  title: string
  detail: string
  refs: { label: string; url: string }[]
}

// Merged pull requests, verified on GitHub (octobre 2026).
export const laravelContributions: Contribution[] = [
  {
    title: 'Recherche vectorielle sur MariaDB',
    detail:
      'Support MariaDB pour whereVectorSimilarTo et les autres requêtes de distance vectorielle, utilisées par la recherche sémantique de Laravel. La vérification du driver passe de la connexion au grammar.',
    refs: [{ label: 'framework #61250', url: 'https://github.com/laravel/framework/pull/61250' }],
  },
  {
    title: 'CI sur MariaDB 11.8 et 12.3 LTS',
    detail:
      'Les tests vectoriels et 11.7+ tournent désormais sur chaque pull request. Le nouveau job a détecté un test cassé par un changement de comportement de MariaDB 11.8.1.',
    refs: [
      { label: 'framework #61615', url: 'https://github.com/laravel/framework/pull/61615' },
      { label: 'framework #61641', url: 'https://github.com/laravel/framework/pull/61641' },
    ],
  },
  {
    title: 'Documentation officielle',
    detail:
      'Index vectoriels documentés, ancre vector() restaurée, driver mariadb dédié pour Homestead, DELETE multi-tables depuis 11.8.1 et support vectoriel natif de MariaDB clarifié.',
    refs: [
      { label: 'docs #11368', url: 'https://github.com/laravel/docs/pull/11368' },
      { label: 'docs #11371', url: 'https://github.com/laravel/docs/pull/11371' },
      { label: 'docs #11374', url: 'https://github.com/laravel/docs/pull/11374' },
      { label: 'docs #11399', url: 'https://github.com/laravel/docs/pull/11399' },
    ],
  },
]

export interface Package {
  name: string
  composer: string
  description: string
  packagist: string
  github: string
}

// Verified on Packagist (octobre 2026).
export const packages: Package[] = [
  {
    name: 'laravel-vector-metrics',
    composer: 'rhaima96/laravel-vector-metrics',
    description: 'Recherche vectorielle euclidienne et cosinus, index vectoriels configurables pour MariaDB et PostgreSQL.',
    packagist: 'https://packagist.org/packages/rhaima96/laravel-vector-metrics',
    github: 'https://github.com/Rhaima96/laravel-vector-metrics',
  },
  {
    name: 'VoltPanel',
    composer: 'rhaima/voltpanel',
    description: 'Générateur de panneaux d’administration Laravel sur la stack VILT (Vue, Inertia, Laravel, Tailwind).',
    packagist: 'https://packagist.org/packages/rhaima/voltpanel',
    github: 'https://github.com/Rhaima96/voltpanel',
  },
  {
    name: 'laravel-flouci',
    composer: 'rhaima/laravel-flouci',
    description: 'Intégration de la passerelle de paiement Flouci.',
    packagist: 'https://packagist.org/packages/rhaima/laravel-flouci',
    github: 'https://github.com/Rhaima96/laravel-flouci',
  },
  {
    name: 'Larakonnect',
    composer: 'rhaima/larakonnect',
    description: 'Intégration de la passerelle de paiement Konnect.network.',
    packagist: 'https://packagist.org/packages/rhaima/larakonnect',
    github: 'https://github.com/Rhaima96/larakonnect',
  },
]

// Points in the hero's vector field. Related skills sit at nearby angles,
// the way embeddings cluster: the angle (degrees) is what cosine distance sees.
export const vectorPoints: { label: string; angle: number; r: number }[] = [
  { label: 'Laravel', angle: -14, r: 0.84 },
  { label: 'PHP', angle: 2, r: 0.52 },
  { label: 'Symfony', angle: -26, r: 0.6 },
  { label: 'REST APIs', angle: 12, r: 0.92 },
  { label: 'Livewire', angle: 28, r: 0.9 },
  { label: 'Inertia.js', angle: 40, r: 0.54 },
  { label: 'Vue.js', angle: 52, r: 0.9 },
  { label: 'Nuxt.js', angle: 66, r: 0.66 },
  { label: 'TypeScript', angle: 82, r: 0.92 },
  { label: 'Tailwind CSS', angle: 100, r: 0.7 },
  { label: 'Flutter', angle: 128, r: 0.82 },
  { label: 'Codemagic', angle: 140, r: 0.5 },
  { label: 'Docker', angle: 166, r: 0.86 },
  { label: 'GitHub Actions', angle: 180, r: 0.7 },
  { label: 'Multi-tenant', angle: -158, r: 0.86 },
  { label: 'Redis', angle: -136, r: 0.66 },
  { label: 'MySQL', angle: -114, r: 0.9 },
  { label: 'PostgreSQL', angle: -96, r: 0.62 },
  { label: 'pgvector', angle: -78, r: 0.92 },
  { label: 'MariaDB Vector', angle: -62, r: 0.62 },
  { label: 'RAG', angle: -48, r: 0.94 },
  { label: 'Serveurs MCP', angle: -36, r: 0.64 },
]
