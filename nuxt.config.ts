// Per-language title, description, Open Graph, hreflang and JSON-LD live in components/HomePage.vue.
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
      meta: [
        { name: 'author', content: 'Mohamed Touhami Rhaima' },
        { name: 'theme-color', content: '#0F2A30' },
        { name: 'color-scheme', content: 'dark' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
  nitro: { prerender: { routes: ['/', '/en/'] } },
})
