<script setup lang="ts">
import { site, person, packages } from '~/data/profile'

useHead({
  // Lets CSS hide reveal targets only when JS runs (no blank page without it).
  script: [
    { innerHTML: "document.documentElement.classList.add('js')", tagPosition: 'head' },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: site.url,
        inLanguage: 'fr',
        mainEntity: {
          '@type': 'Person',
          name: person.name,
          jobTitle: 'Développeur Full-Stack Senior Laravel / Vue.js',
          email: `mailto:${person.email}`,
          url: site.url,
          address: { '@type': 'PostalAddress', addressLocality: 'Gabès', addressCountry: 'TN' },
          sameAs: [person.links.github, person.links.linkedin],
          alumniOf: { '@type': 'EducationalOrganization', name: 'ENTIC, Gabès' },
          knowsLanguage: ['fr', 'en', 'ar'],
          knowsAbout: ['Laravel', 'Vue.js', 'Inertia.js', 'PHP', 'Flutter', 'MariaDB', 'PostgreSQL', 'Redis', 'RAG', 'Model Context Protocol'],
          owns: packages.map((p) => ({ '@type': 'SoftwareSourceCode', name: p.name, codeRepository: p.github })),
        },
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
