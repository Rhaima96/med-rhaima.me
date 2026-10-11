<script setup lang="ts">
import { GitMerge, Github, Package as PackageIcon, Copy, Check } from 'lucide-vue-next'
import { laravelContributions, packages } from '~/data/profile'

const copied = ref<string>()
let timer: ReturnType<typeof setTimeout> | undefined
async function copy(composer: string) {
  try {
    await navigator.clipboard.writeText(`composer require ${composer}`)
    copied.value = composer
    clearTimeout(timer)
    timer = setTimeout(() => (copied.value = undefined), 1800)
  } catch {
    // Clipboard blocked (insecure context or permissions): the command stays selectable.
  }
}
</script>

<template>
  <section id="open-source" class="section" aria-labelledby="open-source-titre">
    <h2 id="open-source-titre" v-reveal class="section-title">Open source</h2>
    <p v-reveal="80" class="section-lead">
      Sept pull requests mergées dans Laravel en 2026, autour de MariaDB et de la recherche vectorielle, et quatre packages publiés sur Packagist.
    </p>

    <div class="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 [&>*]:min-w-0">
      <div>
        <h3 v-reveal class="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight">
          <span class="grid h-9 w-9 place-items-center rounded-full bg-[#FF2D20]/10 text-[#FF6B5F]" aria-hidden="true">
            <GitMerge class="h-[1.1rem] w-[1.1rem]" />
          </span>
          Framework Laravel
        </h3>
        <ol class="mt-6 space-y-4">
          <li
            v-for="(c, i) in laravelContributions"
            :key="c.title"
            v-reveal="i * 80"
            class="rounded-2xl border border-petrol-line p-6 transition-colors hover:border-sand-faint/50"
          >
            <h4 class="font-display text-lg font-semibold">{{ c.title }}</h4>
            <p class="mt-2 text-sand-dim">{{ c.detail }}</p>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li v-for="r in c.refs" :key="r.url">
                <a
                  :href="r.url"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1.5 rounded-full bg-[#8957E5]/15 px-3 py-1 text-sm text-[#C9B0FF] transition-colors hover:bg-[#8957E5]/30"
                >
                  <GitMerge class="h-3.5 w-3.5" aria-hidden="true" />
                  {{ r.label }}
                  <span class="sr-only">, pull request mergée (nouvel onglet)</span>
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div>
        <h3 v-reveal class="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight">
          <span class="grid h-9 w-9 place-items-center rounded-full bg-date/10 text-date-soft" aria-hidden="true">
            <PackageIcon class="h-[1.1rem] w-[1.1rem]" />
          </span>
          Packages Laravel
        </h3>
        <ul class="mt-6 divide-y divide-petrol-line/70 border-y border-petrol-line/70">
          <li v-for="(p, i) in packages" :key="p.composer" v-reveal="i * 70" class="py-6">
            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 class="font-display text-lg font-semibold">{{ p.name }}</h4>
              <div class="flex shrink-0 gap-3 text-sm">
                <a :href="p.github" target="_blank" rel="noopener" class="link inline-flex items-center gap-1">
                  <Github class="h-3.5 w-3.5" aria-hidden="true" />GitHub<span class="sr-only"> de {{ p.name }} (nouvel onglet)</span>
                </a>
                <a :href="p.packagist" target="_blank" rel="noopener" class="link">
                  Packagist<span class="sr-only"> de {{ p.name }} (nouvel onglet)</span>
                </a>
              </div>
            </div>
            <p class="mt-2 text-sand-dim">{{ p.description }}</p>
            <div class="mt-3 flex items-center gap-2 rounded-lg bg-petrol-deep/80 py-1.5 pl-3 pr-1.5">
              <code class="min-w-0 flex-1 truncate font-mono text-[0.8rem] text-sand-dim">
                <span class="text-sand-faint">composer require</span> {{ p.composer }}
              </code>
              <button
                type="button"
                class="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md px-2.5 text-xs text-sand-dim transition-colors hover:bg-petrol-raised hover:text-sand"
                :aria-label="`Copier la commande d’installation de ${p.name}`"
                @click="copy(p.composer)"
              >
                <Check v-if="copied === p.composer" class="h-3.5 w-3.5 text-glass" aria-hidden="true" />
                <Copy v-else class="h-3.5 w-3.5" aria-hidden="true" />
                <span aria-live="polite">{{ copied === p.composer ? 'Copié' : 'Copier' }}</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
