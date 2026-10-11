<script setup lang="ts">
import { about, highlights, person } from '~/data/profile'
</script>

<template>
  <section id="a-propos" class="section border-t border-petrol-line/60" aria-labelledby="a-propos-titre">
    <div class="grid grid-cols-1 gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20 [&>*]:min-w-0">
      <div>
        <h2 id="a-propos-titre" v-reveal class="section-title">Six ans à livrer des plateformes métier</h2>
        <div class="mt-8 max-w-prose space-y-5 text-sand-dim">
          <p v-for="(para, i) in about" :key="i" v-reveal="i * 90">{{ para }}</p>
        </div>
      </div>

      <div class="lg:pt-3">
        <dl class="divide-y divide-petrol-line/70 border-y border-petrol-line/70">
          <div v-for="(h, i) in highlights" :key="h.label" v-reveal="i * 90" class="flex items-baseline gap-5 py-5">
            <dt class="order-2 text-sand-dim">{{ h.label }}</dt>
            <dd class="order-1 w-[5.5ch] shrink-0 font-display text-4xl font-semibold tracking-tight text-date-soft">{{ h.value }}</dd>
          </div>
        </dl>

        <div v-reveal="200" class="mt-10 grid grid-cols-2 gap-8 text-sm">
          <div>
            <h3 class="font-sans text-sm font-semibold text-sand">Langues</h3>
            <ul class="mt-3 space-y-1.5 text-sand-dim">
              <li v-for="l in person.languages" :key="l.name">{{ l.name }}, {{ l.level }}</li>
            </ul>
          </div>
          <div>
            <h3 class="font-sans text-sm font-semibold text-sand">Formation</h3>
            <p class="mt-3 text-sand-dim">
              {{ person.education.title }}<br />
              {{ person.education.school }}, {{ person.education.year }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
