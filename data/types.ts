export type Locale = 'fr' | 'en'

export interface SkillGroup {
  name: string
  items: string[]
  note?: string
}

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
  apps?: { name: string; ios: string; android: string }[]
}

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

export interface Contribution {
  title: string
  detail: string
  refs: { label: string; url: string }[]
}

export interface Package {
  name: string
  composer: string
  description: string
  packagist: string
  github: string
}

/** Everything a page shows in one language. fr.ts and en.ts both implement it. */
export interface Content {
  locale: Locale
  path: string
  htmlLang: string
  ogLocale: string
  ogImage: string
  title: string
  description: string
  jobTitle: string
  cv: { href: string; title: string; detail: string; short: string }
  ui: {
    newTab: string
    skip: string
    navLabel: string
    footerNavLabel: string
    menuOpen: string
    menuClose: string
    backToTop: string
    languageLabel: string
    switchAria: string
    technologies: string
  }
  nav: { about: string; skills: string; projects: string; experience: string; openSource: string; contact: string }
  hero: {
    location: string
    lead: string
    ctaProjects: string
    ctaContact: string
    availability: string
    fieldCaption: string
    fieldAria: string
    fieldTable: string
    fieldVar: string
  }
  about: {
    title: string
    paragraphs: string[]
    highlights: { value: string; label: string }[]
    languagesTitle: string
    languages: { name: string; level: string }[]
    educationTitle: string
    education: { title: string; school: string; year: string }
  }
  skills: { title: string; lead: string; groups: SkillGroup[] }
  projects: {
    title: string
    lead: string
    architectureLabel: string
    backendTitle: string
    backendDetail: string
    appLabel: string
    items: Project[]
  }
  experience: { title: string; lead: string; placePrefix: string; items: Job[] }
  openSource: {
    title: string
    lead: string
    frameworkTitle: string
    packagesTitle: string
    mergedPr: string
    linkOf: string
    copy: string
    copied: string
    copyAria: string
    contributions: Contribution[]
    packages: Package[]
  }
  contact: { title: string; lead: string; copy: string; copied: string; phone: string }
  footer: { tagline: string }
}
