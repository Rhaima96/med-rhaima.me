<script setup lang="ts">
import { experience } from '~/data/profile'
</script>

<template>
  <section id="parcours" class="section" aria-labelledby="parcours-titre">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16 [&>*]:min-w-0">
      <div class="lg:sticky lg:top-28 lg:self-start">
        <h2 id="parcours-titre" v-reveal class="section-title">Parcours</h2>
        <p v-reveal="80" class="section-lead">
          De Gabès à Dammam, en passant par deux ans en freelance pour une société d’Île-de-France : quatre postes depuis 2020.
        </p>
      </div>

      <ol class="tl relative">
        <li v-for="(job, i) in experience" :key="job.company" v-reveal="i * 60" class="relative pb-14 pl-10 last:pb-0 sm:pl-12">
          <span
            class="absolute left-0 top-1.5 grid h-[1.125rem] w-[1.125rem] place-items-center rounded-full border-2 bg-petrol"
            :class="i === 0 ? 'border-date' : 'border-petrol-line'"
            aria-hidden="true"
          >
            <span v-if="i === 0" class="h-1.5 w-1.5 animate-pulse rounded-full bg-date" />
          </span>

          <p class="text-sm tabular-nums text-sand-faint">
            <time>{{ job.period }}</time>, {{ job.contract }}
          </p>
          <h3 class="mt-1.5 font-display text-2xl font-semibold tracking-tight">{{ job.role }}</h3>
          <p class="mt-1 text-sand">
            {{ job.company }} <span class="text-sand-faint">à {{ job.place }}</span>
          </p>
          <p v-if="job.note" class="mt-1 text-sm text-date-soft">{{ job.note }}</p>

          <ul class="mt-4 space-y-2 text-sand-dim">
            <li v-for="pt in job.points" :key="pt" class="flex gap-3">
              <span class="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-sand-faint" aria-hidden="true" />
              {{ pt }}
            </li>
          </ul>
          <ul class="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
            <li v-for="t in job.stack" :key="t" class="chip px-2.5 py-0.5 text-xs">{{ t }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
/* Rail with a gold fill that follows scroll where scroll-driven animations exist;
   elsewhere the rail is simply static. */
.tl::before,
.tl::after {
  content: '';
  position: absolute;
  left: calc(1.125rem / 2 - 1px);
  top: 0.5rem;
  bottom: 0;
  width: 2px;
  border-radius: 2px;
}
.tl::before { background: theme('colors.petrol.line'); }
.tl::after {
  background: linear-gradient(theme('colors.date.DEFAULT'), theme('colors.glass.DEFAULT'));
  transform-origin: top;
  transform: scaleY(0);
}
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .tl::after {
      animation: fill linear both;
      animation-timeline: view();
      animation-range: entry 20% cover 70%;
    }
  }
}
@keyframes fill { to { transform: scaleY(1); } }
</style>
