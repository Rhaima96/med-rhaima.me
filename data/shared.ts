// Facts that are the same in every language: identity, links, stacks.
// All of it comes from the CV or from verified public sources (GitHub, Packagist, stores).

export const site = { url: 'https://med-rhaima.me' }

export const person = {
  name: 'Mohamed Touhami Rhaima',
  shortName: 'Mohamed Rhaima',
  nameLines: ['Mohamed', 'Touhami', 'Rhaima'],
  email: 'mohamed.rhaima96@gmail.com',
  phone: '+216 24 836 687',
  phoneHref: 'tel:+21624836687',
  links: {
    github: 'https://github.com/Rhaima96',
    linkedin: 'https://www.linkedin.com/in/mohamed-touhami-rhaima',
  },
}

export const projectMeta = {
  flync: {
    name: 'Flync',
    stack: ['Flutter', 'Laravel', 'Firebase', 'MySQL', 'Codemagic', 'GitHub Actions'],
    url: 'https://flync.pro',
    urlLabel: 'flync.pro',
    // Store listings published under the developer name Mohamed Rhaima.
    stores: {
      client: { ios: 'https://apps.apple.com/app/id6769872928', android: 'https://play.google.com/store/apps/details?id=com.flync.user' },
      restaurant: { ios: 'https://apps.apple.com/app/id6769869937', android: 'https://play.google.com/store/apps/details?id=com.flync.restau' },
      courier: { ios: 'https://apps.apple.com/app/id6769912654', android: 'https://play.google.com/store/apps/details?id=com.flync.delivery' },
    },
  },
  jasmin: {
    name: 'Jasmin Emballage',
    stack: ['Laravel', 'Vue.js', 'REST API', 'Pusher', 'Ionos'],
    url: 'https://jasminemballage.fr',
    urlLabel: 'jasminemballage.fr',
  },
  sosProtech: {
    name: 'SOS Protech',
    stack: ['Laravel', 'Vue.js 3', 'Inertia.js', 'Tailwind CSS', 'MySQL', 'GitHub Actions'],
    url: 'https://sosprotech.fr',
    urlLabel: 'sosprotech.fr',
  },
  prefev: { name: 'Préfev', stack: ['Laravel', 'Livewire', 'Bootstrap', 'MySQL'] },
}

export const jobMeta = {
  ecg: { company: 'ECG Assurance', stack: ['Laravel', 'Vue.js', 'MySQL', 'Git', 'Agile'] },
  blackGold: { company: 'Black Gold', stack: ['Laravel 10', 'Vue.js', 'Inertia.js', 'MySQL', 'Git'] },
  itSolve: { company: 'itSolve', stack: ['Laravel', 'Vue.js', 'Inertia.js', 'Livewire', 'Tailwind CSS', 'MySQL'] },
  tmkiin: { company: 'TMKiiN', stack: ['Laravel', 'Vue.js', 'Flutter', 'Docker', 'HMVC', 'JIRA', 'GitLab'] },
}

// Merged pull requests, verified on GitHub (October 2026).
const pr = (repo: 'framework' | 'docs', n: number) => ({ label: `${repo} #${n}`, url: `https://github.com/laravel/${repo}/pull/${n}` })
export const prRefs = {
  vectorSearch: [pr('framework', 61250)],
  ci: [pr('framework', 61615), pr('framework', 61641)],
  docs: [pr('docs', 11368), pr('docs', 11371), pr('docs', 11374), pr('docs', 11399)],
}

// Verified on Packagist (October 2026).
export const packageMeta = {
  vectorMetrics: {
    name: 'laravel-vector-metrics',
    composer: 'rhaima96/laravel-vector-metrics',
    packagist: 'https://packagist.org/packages/rhaima96/laravel-vector-metrics',
    github: 'https://github.com/Rhaima96/laravel-vector-metrics',
  },
  voltpanel: {
    name: 'VoltPanel',
    composer: 'rhaima/voltpanel',
    packagist: 'https://packagist.org/packages/rhaima/voltpanel',
    github: 'https://github.com/Rhaima96/voltpanel',
  },
  flouci: {
    name: 'laravel-flouci',
    composer: 'rhaima/laravel-flouci',
    packagist: 'https://packagist.org/packages/rhaima/laravel-flouci',
    github: 'https://github.com/Rhaima96/laravel-flouci',
  },
  larakonnect: {
    name: 'Larakonnect',
    composer: 'rhaima/larakonnect',
    packagist: 'https://packagist.org/packages/rhaima/larakonnect',
    github: 'https://github.com/Rhaima96/larakonnect',
  },
}

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
  { label: 'MCP', angle: -36, r: 0.64 },
]
