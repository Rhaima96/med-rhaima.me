import { site, person } from './data/profile'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@fontsource-variable/bricolage-grotesque/index.css',
    '@fontsource-variable/instrument-sans/index.css',
    '~/assets/css/main.css',
  ],
  tailwindcss: { viewer: false },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: site.title,
      meta: [
        { name: 'description', content: site.description },
        { name: 'author', content: person.name },
        { name: 'theme-color', content: '#0F2A30' },
        { name: 'color-scheme', content: 'dark' },
        { property: 'og:type', content: 'profile' },
        { property: 'og:site_name', content: person.name },
        { property: 'og:locale', content: site.locale },
        { property: 'og:url', content: `${site.url}/` },
        { property: 'og:title', content: site.title },
        { property: 'og:description', content: site.description },
        { property: 'og:image', content: `${site.url}/og.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: `${person.name}, ${person.role}` },
        { property: 'profile:first_name', content: 'Mohamed' },
        { property: 'profile:last_name', content: 'Touhami Rhaima' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: site.title },
        { name: 'twitter:description', content: site.description },
        { name: 'twitter:image', content: `${site.url}/og.png` },
      ],
      link: [
        { rel: 'canonical', href: `${site.url}/` },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
  nitro: { prerender: { routes: ['/'] } },
})
