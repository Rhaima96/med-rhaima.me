<script setup lang="ts">
import { Github, Linkedin, Phone, Download, Copy, Check, ArrowUpRight } from 'lucide-vue-next'
import { person, site } from '~/data/profile'

const copied = ref(false)
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(person.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {}
}

const links = [
  { label: 'LinkedIn', detail: 'mohamed-touhami-rhaima', href: person.links.linkedin, icon: Linkedin },
  { label: 'GitHub', detail: 'Rhaima96', href: person.links.github, icon: Github },
]
</script>

<template>
  <section id="contact" class="section pb-32" aria-labelledby="contact-titre">
    <div class="relative overflow-hidden rounded-[2rem] border border-petrol-line bg-petrol-deep px-6 py-14 sm:px-12 sm:py-20">
      <div
        class="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full opacity-60 blur-3xl"
        style="background: radial-gradient(circle, rgba(233, 169, 59, 0.16), transparent 65%)"
        aria-hidden="true"
      />
      <h2 id="contact-titre" v-reveal class="section-title max-w-3xl">Un projet Laravel ou Vue.js à lancer, ou une équipe à rejoindre ?</h2>
      <p v-reveal="80" class="section-lead">{{ person.availability }} Le plus simple pour me joindre reste l’email.</p>

      <div v-reveal="140" class="mt-10 flex flex-wrap items-center gap-3">
        <a
          :href="`mailto:${person.email}`"
          class="font-display text-[clamp(1.1rem,5vw,2.75rem)] [overflow-wrap:anywhere] font-semibold tracking-tight text-date-soft underline decoration-date/40 decoration-2 underline-offset-[0.2em] transition-colors hover:decoration-date"
        >
          {{ person.email }}
        </a>
        <button
          type="button"
          class="inline-flex h-10 items-center gap-1.5 rounded-full border border-petrol-line px-4 text-sm text-sand-dim transition-colors hover:border-sand-faint hover:text-sand"
          @click="copyEmail"
        >
          <Check v-if="copied" class="h-4 w-4 text-glass" aria-hidden="true" />
          <Copy v-else class="h-4 w-4" aria-hidden="true" />
          <span aria-live="polite">{{ copied ? 'Adresse copiée' : 'Copier l’adresse' }}</span>
        </button>
      </div>

      <ul v-reveal="200" class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="l in links" :key="l.label">
          <a
            :href="l.href"
            target="_blank"
            rel="noopener"
            class="group flex h-full items-center gap-3 rounded-xl border border-petrol-line px-4 py-4 transition-colors hover:border-sand-faint"
          >
            <component :is="l.icon" class="h-5 w-5 text-sand-dim" aria-hidden="true" />
            <span class="flex-1">
              <span class="block font-medium">{{ l.label }}</span>
              <span class="block text-sm text-sand-faint">{{ l.detail }}</span>
            </span>
            <ArrowUpRight class="h-4 w-4 text-sand-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            <span class="sr-only">(nouvel onglet)</span>
          </a>
        </li>
        <li>
          <a :href="person.phoneHref" class="group flex h-full items-center gap-3 rounded-xl border border-petrol-line px-4 py-4 transition-colors hover:border-sand-faint">
            <Phone class="h-5 w-5 text-sand-dim" aria-hidden="true" />
            <span>
              <span class="block font-medium">Téléphone</span>
              <span class="block text-sm tabular-nums text-sand-faint">{{ person.phone }}</span>
            </span>
          </a>
        </li>
        <li>
          <a :href="site.cv" download class="group flex h-full items-center gap-3 rounded-xl bg-date px-4 py-4 text-petrol-deep transition-colors hover:bg-date-soft">
            <Download class="h-5 w-5" aria-hidden="true" />
            <span>
              <span class="block font-medium">CV complet</span>
              <span class="block text-sm opacity-75">PDF, 2 pages</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
