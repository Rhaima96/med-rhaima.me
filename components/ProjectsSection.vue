<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { projects } from '~/data/profile'

const [featured, ...others] = projects
</script>

<template>
  <section id="projets" class="section" aria-labelledby="projets-titre">
    <h2 id="projets-titre" v-reveal class="section-title">Projets sélectionnés</h2>
    <p v-reveal="80" class="section-lead">
      Un produit personnel en production, et trois plateformes livrées pour des clients français avec itSolve.
    </p>

    <!-- Featured: Flync -->
    <SpotlightCard v-reveal class="mt-14">
      <div class="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p class="text-sm text-sand-faint">{{ featured.kind }}</p>
          <h3 class="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">{{ featured.name }}</h3>
          <p class="mt-5 max-w-prose text-lg text-sand-dim">{{ featured.summary }}</p>
          <ul class="mt-6 space-y-2.5 text-sand-dim">
            <li v-for="pt in featured.points" :key="pt" class="flex gap-3">
              <span class="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-date" aria-hidden="true" />
              {{ pt }}
            </li>
          </ul>
          <ul class="mt-7 flex flex-wrap gap-2" aria-label="Technologies">
            <li v-for="t in featured.stack" :key="t" class="chip">{{ t }}</li>
          </ul>
          <a v-if="featured.url" :href="featured.url" target="_blank" rel="noopener" class="link mt-8 inline-flex items-center gap-1.5 font-medium">
            {{ featured.urlLabel }}
            <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
            <span class="sr-only">(nouvel onglet)</span>
          </a>
        </div>

        <!-- Architecture as described in the CV: three apps, one backend. -->
        <div class="flex flex-col justify-center" aria-label="Architecture de Flync">
          <div class="grid grid-cols-3 gap-2 sm:gap-3">
            <div
              v-for="app in featured.apps"
              :key="app.name"
              class="flex aspect-[9/16] max-h-60 flex-col items-center justify-end rounded-[1.4rem] border border-petrol-line bg-petrol-deep/80 p-2 pb-3 text-center sm:p-3"
            >
              <span class="mb-auto mt-1.5 h-1 w-8 rounded-full bg-petrol-line" aria-hidden="true" />
              <span class="font-display text-sm font-semibold sm:text-base">{{ app.name }}</span>
              <span class="text-xs text-sand-faint">Flutter</span>
              <span class="mt-3 flex w-full flex-col gap-1.5">
                <a
                  v-for="store in [{ name: 'App Store', url: app.ios }, { name: 'Google Play', url: app.android }]"
                  :key="store.url"
                  :href="store.url"
                  target="_blank"
                  rel="noopener"
                  class="whitespace-nowrap rounded-full bg-sand/10 px-1.5 py-1.5 text-[0.66rem] leading-none text-sand transition-colors hover:bg-date hover:text-petrol-deep"
                >
                  {{ store.name }}<span class="sr-only">, application Flync {{ app.name }} (nouvel onglet)</span>
                </a>
              </span>
            </div>
          </div>
          <div class="mx-auto h-8 w-px bg-gradient-to-b from-petrol-line to-date/70" aria-hidden="true" />
          <div class="rounded-xl border border-date/40 bg-date/[0.06] px-4 py-3 text-center">
            <span class="font-display font-semibold">Backend Laravel</span>
            <span class="block text-xs text-sand-dim">Firebase, paiement Flouci, zones de livraison, notifications push, tableau de bord temps réel</span>
          </div>
        </div>
      </div>
    </SpotlightCard>

    <div class="mt-6 grid gap-6 lg:grid-cols-3">
      <SpotlightCard v-for="(p, i) in others" :key="p.name" v-reveal="i * 90" class="flex flex-col">
        <div class="flex flex-1 flex-col p-6 sm:p-8">
          <p class="text-sm text-sand-faint">{{ p.kind }}</p>
          <h3 class="mt-2 font-display text-2xl font-bold tracking-tight">{{ p.name }}</h3>
          <p class="mt-1 text-sm text-sand-faint">{{ p.period }}</p>

          <dl v-if="p.results" class="mt-6 flex gap-8">
            <div v-for="r in p.results" :key="r.label">
              <dt class="sr-only">{{ r.label }}</dt>
              <dd class="font-display text-3xl font-semibold tracking-tight text-date-soft">{{ r.value }}</dd>
              <dd class="text-sm text-sand-dim" aria-hidden="true">{{ r.label }}</dd>
            </div>
          </dl>

          <p class="mt-6 text-sand-dim">{{ p.summary }}</p>
          <ul class="mt-4 space-y-2 text-sm text-sand-dim">
            <li v-for="pt in p.points" :key="pt" class="flex gap-3">
              <span class="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-glass" aria-hidden="true" />
              {{ pt }}
            </li>
          </ul>

          <div class="mt-auto pt-7">
            <ul class="flex flex-wrap gap-1.5" aria-label="Technologies">
              <li v-for="t in p.stack" :key="t" class="chip px-2.5 py-0.5 text-xs">{{ t }}</li>
            </ul>
            <a v-if="p.url" :href="p.url" target="_blank" rel="noopener" class="link mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
              {{ p.urlLabel }}
              <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
              <span class="sr-only">(nouvel onglet)</span>
            </a>
          </div>
        </div>
      </SpotlightCard>
    </div>
  </section>
</template>
