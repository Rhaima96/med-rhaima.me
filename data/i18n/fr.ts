import type { Content } from '../types'
import { jobMeta, packageMeta, prRefs, projectMeta } from '../shared'

const { flync, jasmin, sosProtech, prefev } = projectMeta

export const fr: Content = {
  locale: 'fr',
  path: '/',
  htmlLang: 'fr',
  ogLocale: 'fr_FR',
  ogImage: '/og.png',
  title: 'Mohamed Touhami Rhaima — Développeur Full-Stack Senior Laravel / Vue.js',
  description:
    "Développeur Full-Stack Senior Laravel / Vue.js, 6+ ans d'expérience, contributeur au framework Laravel (recherche vectorielle MariaDB) et intégrations IA (MCP, RAG). CRM, LMS, e-commerce, VTC, applications Flutter.",
  jobTitle: 'Développeur Full-Stack Senior Laravel / Vue.js',
  cv: { href: '/CV_Mohamed_Touhami_Rhaima_FR.pdf', title: 'CV complet', detail: 'PDF, 2 pages', short: 'CV (PDF)' },

  ui: {
    newTab: '(nouvel onglet)',
    skip: 'Aller au contenu',
    navLabel: 'Navigation principale',
    footerNavLabel: 'Navigation du pied de page',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    backToTop: 'Haut de page',
    languageLabel: 'Langue',
    switchAria: 'Read this page in English',
    technologies: 'Technologies',
  },

  nav: { about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Parcours', openSource: 'Open source', contact: 'Contact' },

  hero: {
    location: 'Basé à Gabès, Tunisie',
    lead: 'Développeur full-stack senior. Je construis des plateformes Laravel et Vue.js qui tiennent en production, et je contribue au framework Laravel lui-même.',
    ctaProjects: 'Voir les projets',
    ctaContact: 'Me contacter',
    availability: 'Disponible sous un mois (préavis), en télétravail comme en présentiel.',
    fieldCaption:
      'Bougez le pointeur sur le champ : chaque point est une compétence, et la requête retrouve les plus proches par distance cosinus, comme la recherche vectorielle que j’ai ajoutée à Laravel pour MariaDB.',
    fieldAria:
      'Champ vectoriel de compétences. Utilisez les flèches pour orienter la requête ; les trois compétences les plus proches par distance cosinus sont listées sous le schéma.',
    fieldTable: 'competences',
    fieldVar: '$requete',
  },

  about: {
    title: 'Six ans à livrer des plateformes métier',
    paragraphs: [
      'Je conçois des plateformes métier, CRM, LMS, e-commerce, VTC, du cahier des charges à la mise en production.',
      "Aujourd'hui, je développe des fonctionnalités d'IA pour un CRM multi-tenant qui gère des millions de fiches clients : le serveur MCP qui expose ses données aux agents IA, et une app Flutter d'assistant qui répond en langage naturel aux questions des managers.",
      "En 2026, j'ai ajouté le support MariaDB à la recherche vectorielle de Laravel et étendu sa CI aux versions récentes de MariaDB. Depuis 2022, j'ai aussi travaillé à distance pour des clients français, dont deux ans comme Team Lead d'une équipe de quatre développeurs.",
    ],
    highlights: [
      { value: '6+', label: "ans d'expérience" },
      { value: '7', label: 'pull requests mergées dans Laravel' },
      { value: '10 000+', label: 'commandes traitées par une plateforme e-commerce livrée' },
    ],
    languagesTitle: 'Langues',
    languages: [
      { name: 'Arabe', level: 'langue maternelle' },
      { name: 'Français', level: 'courant' },
      { name: 'Anglais', level: 'capacité professionnelle' },
    ],
    educationTitle: 'Formation',
    education: { title: 'BTS (Brevet de technicien supérieur) en Informatique et multimédia', school: 'ENTIC, Gabès', year: '2021' },
  },

  skills: {
    title: 'Compétences',
    lead: 'Laravel et Vue.js au centre, avec les bases de données, le mobile et l’outillage qui vont avec une plateforme en production.',
    groups: [
      { name: 'Backend', items: ['PHP', 'Laravel (v5–v13)', 'Filament', 'API REST', 'Clean Architecture', 'SOLID', 'MVC / HMVC', 'Authentification & sécurité'] },
      { name: 'Frontend', items: ['Vue.js 3', 'Nuxt', 'Inertia.js', 'Livewire', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
      { name: 'Tests', items: ['PHPUnit', 'Pest', 'Tests unitaires & fonctionnels', 'Pipelines de tests en CI'] },
      {
        name: 'IA & LLM',
        items: ['Serveurs & outils MCP (Model Context Protocol)', 'RAG', 'Embeddings', 'Recherche sémantique'],
        note: 'Recherche sémantique sur pgvector et MariaDB Vector.',
      },
      {
        name: 'Bases de données',
        items: ['MySQL', 'MariaDB (dont Vector)', 'PostgreSQL (dont pgvector)', 'SQLite', 'Redis', 'Multi-tenant (une base par client)'],
        note: 'Redis pour le cache, les files d’attente et les sessions.',
      },
      { name: 'Mobile', items: ['Flutter (iOS & Android, apps publiées)', 'Firebase'] },
      { name: 'DevOps', items: ['Git (GitHub / GitLab)', 'Docker', 'GitHub Actions', 'Codemagic', 'Nginx', 'Apache', 'Linux'] },
      { name: 'Méthodes', items: ['Agile / Scrum', 'JIRA', 'Documentation technique'] },
      {
        name: 'Développement assisté par IA',
        items: ['Claude Code', 'Cursor', 'GitHub Copilot'],
        note: 'Revue de code, tests et documentation.',
      },
    ],
  },

  projects: {
    title: 'Projets sélectionnés',
    lead: 'Un produit personnel en production, et trois plateformes livrées pour des clients français avec itSolve.',
    architectureLabel: 'Architecture de Flync',
    backendTitle: 'Backend Laravel',
    backendDetail: 'Firebase, paiement Flouci, zones de livraison, notifications push, tableau de bord temps réel',
    appLabel: 'application Flync',
    items: [
      {
        ...flync,
        kind: 'Produit personnel, livraison de repas',
        summary: 'Une plateforme complète de livraison de repas : trois applications mobiles, un backend et un tableau de bord, du code jusqu’aux stores.',
        points: [
          '3 applications Flutter (client, restaurant, livreur) publiées sur l’App Store et Google Play',
          'Backend Laravel en production, CI/CD automatisée (Codemagic, GitHub Actions)',
          'Firebase, paiement Flouci, zones de livraison, notifications push, tableau de bord temps réel',
        ],
        apps: [
          { name: 'Client', ...flync.stores.client },
          { name: 'Restaurant', ...flync.stores.restaurant },
          { name: 'Livreur', ...flync.stores.courier },
        ],
      },
      {
        ...jasmin,
        kind: 'E-commerce pour itSolve',
        period: 'Août 2022 – Août 2023',
        summary: 'Boutique en ligne d’emballages alimentaires et colis pour le marché français.',
        points: ['Solution e-commerce ayant traité plus de 10 000 commandes', 'API pour les applications mobiles', 'Paiement Sogecommerce et livraison Boxtal intégrés'],
        results: [
          { value: '10 000+', label: 'commandes' },
          { value: '−40 %', label: 'temps de traitement' },
        ],
      },
      {
        ...sosProtech,
        kind: 'Gestion d’interventions pour itSolve',
        period: 'Août 2023 – Déc. 2023',
        summary: 'Plateforme d’interventions et de facturation : interventions techniques, devis, factures et affectation des techniciens.',
        points: [
          'SSR avec Inertia.js',
          'Rapports PDF avec signature électronique, tableaux de bord statistiques multi-rôles (Chart.js)',
          'Déploiement et optimisation de serveurs VPS (Ubuntu, Apache)',
        ],
        results: [
          { value: '+45 %', label: 'trafic organique' },
          { value: '−30 %', label: 'temps de chargement' },
        ],
      },
      {
        ...prefev,
        kind: 'Plateforme VTC pour itSolve',
        period: 'Déc. 2023 – Août 2024',
        summary: 'Plateforme de gestion VTC développée de bout en bout, avec la direction de l’équipe.',
        points: [
          'Réservation et dispatch des courses en temps réel',
          'Gestion des chauffeurs, des véhicules et de la facturation, paiements en ligne et tarification',
          'Pilotage de l’équipe : estimation des charges, planification et répartition des tâches',
        ],
      },
    ],
  },

  experience: {
    title: 'Parcours',
    lead: 'De Gabès à Dammam, en passant par deux ans en freelance pour une société d’Île-de-France, et Flync en parallèle depuis 2026.',
    placePrefix: 'à',
    items: [
      {
        ...jobMeta.ecg,
        role: 'Développeur Full-Stack Laravel / Vue.js',
        place: 'Gabès, Tunisie',
        period: 'Sept. 2025 – aujourd’hui',
        contract: 'CDI',
        points: [
          'Conception et développement du serveur MCP et de la toolbox MCP d’un CRM multi-tenant (une base de données par client) qui gère des millions de fiches clients, pour exposer ses données aux agents IA via le Model Context Protocol',
          'Développement d’une app mobile Flutter : un assistant IA qui répond en langage naturel aux questions métier des managers en interrogeant le CRM via MCP et RAG',
          'Tests automatisés (PHPUnit / Pest) pour chaque fonctionnalité du CRM ; optimisation des performances et maintenance du système en production',
        ],
      },
      {
        ...jobMeta.flync,
        role: 'Fondateur & Lead Developer',
        place: 'Tunisie',
        period: 'Mars 2026 – aujourd’hui',
        contract: 'Projet personnel',
        points: [
          'Création et lancement d’une plateforme de livraison de repas : 3 apps Flutter (client, restaurant, livreur) publiées sur l’App Store et Google Play',
          'Backend Laravel en production : paiement en ligne Flouci, zones de livraison, notifications push, tableau de bord en temps réel',
          'CI/CD automatisée pour les apps mobiles et la plateforme web (Codemagic, GitHub Actions)',
        ],
      },
      {
        ...jobMeta.blackGold,
        role: 'Développeur Full-Stack Laravel / Inertia / Vue.js',
        place: 'Dammam, Arabie saoudite',
        period: 'Sept. 2024 – Août 2025',
        contract: 'CDD',
        points: [
          'Développement de trois plateformes pour l’institut : un LMS (programmes de formation), un SIRH (ressources humaines) et un portail d’emploi',
          'Choix de l’architecture et de la stack (Laravel, Inertia.js, Vue.js) des plateformes métier de l’institut',
          'Travail sur site avec une équipe d’ingénieurs internationale, de la spécification à la livraison',
        ],
      },
      {
        ...jobMeta.itSolve,
        role: 'Team Lead & Développeur Full-Stack Laravel',
        place: 'Île-de-France, France (à distance depuis Gabès)',
        period: 'Août 2022 – Août 2024',
        contract: 'Freelance, mission longue durée',
        note: 'Encadrement d’une équipe de 4',
        points: [
          'Jasmin Emballage : e-commerce, plus de 10 000 commandes, temps de traitement des commandes réduit de 40 %',
          'SOS Protech : interventions et facturation, SSR Inertia.js, +45 % de trafic organique',
          'Préfev : plateforme VTC, réservation et dispatch en temps réel, pilotage de l’équipe',
        ],
      },
      {
        ...jobMeta.tmkiin,
        role: 'Développeur Laravel',
        place: 'Gabès, Tunisie',
        period: 'Juil. 2020 – Août 2022',
        contract: 'CDD',
        points: [
          'Développement backend de plateformes de livraison et de messagerie',
          'Intégrations d’API tierces (WhatsApp, paiements Geidea)',
          'Développement d’API, maintenance continue et documentation technique',
        ],
      },
    ],
  },

  openSource: {
    title: 'Open source',
    lead: 'Sept pull requests mergées dans Laravel en 2026, autour de MariaDB et de la recherche vectorielle, et quatre packages publiés sur Packagist.',
    frameworkTitle: 'Framework Laravel',
    packagesTitle: 'Packages Laravel',
    mergedPr: 'pull request mergée',
    linkOf: 'de',
    copy: 'Copier',
    copied: 'Copié',
    copyAria: 'Copier la commande d’installation de',
    contributions: [
      {
        title: 'Recherche vectorielle sur MariaDB',
        detail:
          'Support MariaDB pour whereVectorSimilarTo et les autres requêtes de distance vectorielle, utilisées par la recherche sémantique de Laravel. La vérification du driver passe de la connexion au grammar.',
        refs: prRefs.vectorSearch,
      },
      {
        title: 'CI sur MariaDB 11.8 et 12.3 LTS',
        detail: 'Les tests vectoriels et 11.7+ tournent désormais sur chaque pull request. Le nouveau job a détecté un test cassé par un changement de comportement de MariaDB 11.8.1.',
        refs: prRefs.ci,
      },
      {
        title: 'Documentation officielle',
        detail:
          'Index vectoriels documentés, ancre vector() restaurée, driver mariadb dédié pour Homestead, DELETE multi-tables depuis 11.8.1 et support vectoriel natif de MariaDB clarifié.',
        refs: prRefs.docs,
      },
    ],
    packages: [
      { ...packageMeta.vectorMetrics, description: 'Recherche vectorielle euclidienne et cosinus, index vectoriels configurables pour MariaDB et PostgreSQL.' },
      { ...packageMeta.voltpanel, description: 'Générateur de panneaux d’administration Laravel sur la stack VILT (Vue, Inertia, Laravel, Tailwind).' },
      { ...packageMeta.flouci, description: 'Intégration de la passerelle de paiement Flouci.' },
      { ...packageMeta.larakonnect, description: 'Intégration de la passerelle de paiement Konnect.network.' },
    ],
  },

  contact: {
    title: 'Un projet Laravel ou Vue.js à lancer, ou une équipe à rejoindre ?',
    lead: 'Disponible sous un mois (préavis), en télétravail comme en présentiel. Le plus simple pour me joindre reste l’email.',
    copy: 'Copier l’adresse',
    copied: 'Adresse copiée',
    phone: 'Téléphone',
  },

  footer: { tagline: 'Conçu et développé à Gabès, avec Nuxt et Tailwind CSS.' },
}
