<script setup lang="ts">
import { skills } from '~/data/profile'
</script>

<template>
  <section id="competences" class="section" aria-labelledby="competences-titre">
    <h2 id="competences-titre" v-reveal class="section-title">Compétences</h2>
    <p v-reveal="80" class="section-lead">
      Laravel et Vue.js au centre, avec les bases de données, le mobile et l’outillage qui vont avec une plateforme en production.
    </p>

    <ul class="mt-14 border-b border-petrol-line/70">
      <li
        v-for="(g, i) in skills"
        :key="g.name"
        v-reveal="i * 50"
        class="group grid gap-3 border-t border-petrol-line/70 py-6 md:grid-cols-[14rem_1fr] md:gap-10"
      >
        <h3 class="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-date-soft">{{ g.name }}</h3>
        <div>
          <ul class="flex flex-wrap gap-2" :aria-label="g.name">
            <li v-for="s in g.items" :key="s" class="chip transition-colors group-hover:border-sand-faint/60 group-hover:text-sand">{{ s }}</li>
          </ul>
          <p v-if="g.note" class="mt-3 text-sm text-sand-faint">{{ g.note }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
