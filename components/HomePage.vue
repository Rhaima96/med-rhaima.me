<script setup lang="ts">
import { contents } from '~/composables/useContent'
import { person, site, packageMeta } from '~/data/shared'

const c = useContent()
const url = (path: string) => `${site.url}${path}`

useHead(() => ({
  htmlAttrs: { lang: c.value.htmlLang },
  title: c.value.title,
  link: [
    { rel: 'canonical', href: url(c.value.path) },
    { rel: 'alternate', hreflang: 'fr', href: url(contents.fr.path) },
    { rel: 'alternate', hreflang: 'en', href: url(contents.en.path) },
    { rel: 'alternate', hreflang: 'x-default', href: url(contents.fr.path) },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: url(c.value.path),
        inLanguage: c.value.htmlLang,
        mainEntity: {
          '@type': 'Person',
          name: person.name,
          jobTitle: c.value.jobTitle,
          email: `mailto:${person.email}`,
          url: site.url,
          address: { '@type': 'PostalAddress', addressLocality: 'Gabès', addressCountry: 'TN' },
          sameAs: [person.links.github, person.links.linkedin],
          alumniOf: { '@type': 'EducationalOrganization', name: 'ENTIC, Gabès' },
          knowsLanguage: ['fr', 'en', 'ar'],
          knowsAbout: ['Laravel', 'Vue.js', 'Inertia.js', 'PHP', 'Flutter', 'MariaDB', 'PostgreSQL', 'Redis', 'RAG', 'Model Context Protocol'],
          owns: Object.values(packageMeta).map((p) => ({ '@type': 'SoftwareSourceCode', name: p.name, codeRepository: p.github })),
        },
      }),
    },
  ],
}))

useSeoMeta({
  description: () => c.value.description,
  ogType: 'profile',
  ogSiteName: person.name,
  ogLocale: () => c.value.ogLocale,
  ogLocaleAlternate: () => [contents[c.value.locale === 'fr' ? 'en' : 'fr'].ogLocale],
  ogUrl: () => url(c.value.path),
  ogTitle: () => c.value.title,
  ogDescription: () => c.value.description,
  ogImage: () => url(c.value.ogImage),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => `${person.name}, ${c.value.jobTitle}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => c.value.title,
  twitterDescription: () => c.value.description,
  twitterImage: () => url(c.value.ogImage),
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <OpenSourceSection />
    <ContactSection />
  </div>
</template>
