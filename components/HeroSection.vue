<script setup lang="ts">
import { ArrowDown, Mail } from 'lucide-vue-next'
import { person } from '~/data/shared'

const c = useContent()
const nameLines = person.nameLines
</script>

<template>
  <section id="top" class="relative isolate pt-16">
    <!-- Soft glow behind the field: the only decorative light on the page. -->
    <div
      class="pointer-events-none absolute -right-40 top-10 -z-10 h-[42rem] w-[42rem] rounded-full opacity-40 blur-3xl"
      style="background: radial-gradient(circle, rgba(124, 207, 190, 0.18), transparent 65%)"
      aria-hidden="true"
    />
    <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 [&>*]:min-w-0 px-5 pb-20 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.08fr_1fr] lg:gap-10 lg:pb-28">
      <div>
        <p class="hero-in text-sand-dim" style="--i: 0">{{ c.hero.location }}</p>

        <h1 class="mt-5 font-display text-[clamp(3.4rem,10.5vw,7.4rem)] font-bold leading-[0.88] tracking-[-0.045em]">
          <span v-for="(line, i) in nameLines" :key="line" class="block overflow-hidden pb-[0.06em]">
            <span class="hero-line block" :style="{ '--i': i }">{{ i < nameLines.length - 1 ? `${line} ` : line }}</span>
          </span>
        </h1>

        <p class="hero-in mt-8 max-w-xl font-display text-[clamp(1.3rem,2.4vw,1.65rem)] font-medium leading-snug text-sand" style="--i: 3">
          {{ c.hero.lead }}
        </p>

        <div class="hero-in mt-10 flex flex-wrap items-center gap-3" style="--i: 4">
          <a
            href="#projects"
            class="group inline-flex items-center gap-2 rounded-full bg-date px-6 py-3.5 font-medium text-petrol-deep transition-[background-color,transform] hover:bg-date-soft active:scale-[0.98]"
          >
            {{ c.hero.ctaProjects }}
            <ArrowDown class="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-full border border-petrol-line px-6 py-3.5 font-medium text-sand transition-colors hover:border-sand-dim"
          >
            <Mail class="h-4 w-4" aria-hidden="true" />
            {{ c.hero.ctaContact }}
          </a>
        </div>

        <p class="hero-in mt-6 text-sm text-sand-faint" style="--i: 5">{{ c.hero.availability }}</p>
      </div>

      <div class="hero-in mx-auto w-full max-w-[34rem]" style="--i: 2">
        <VectorField />
        <p class="mt-3 text-sm text-sand-faint">{{ c.hero.fieldCaption }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-line {
  animation: rise 1s cubic-bezier(0.2, 0.75, 0.15, 1) both;
  animation-delay: calc(120ms + var(--i) * 110ms);
}
.hero-in {
  animation: fade-up 0.9s cubic-bezier(0.2, 0.75, 0.15, 1) both;
  animation-delay: calc(300ms + var(--i) * 110ms);
}
@keyframes rise { from { transform: translateY(105%); } }
@keyframes fade-up { from { opacity: 0; transform: translateY(14px); } }
</style>
