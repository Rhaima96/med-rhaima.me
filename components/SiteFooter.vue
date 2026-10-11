<script setup lang="ts">
import { person } from '~/data/shared'
const c = useContent()
const year = 2026 // ponytail: static so prerendered HTML never drifts from hydration; bump yearly
</script>

<template>
  <footer class="border-t border-petrol-line/60">
    <div class="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
      <div class="flex items-center gap-4">
        <SiteMark class="h-10 w-10" />
        <div>
          <p class="font-display text-lg font-semibold">{{ person.name }}</p>
          <p class="text-sm text-sand-faint">{{ c.footer.tagline }}</p>
        </div>
      </div>
      <nav :aria-label="c.ui.footerNavLabel">
        <ul class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-sand-dim">
          <li v-for="item in navItems(c)" :key="item.id">
            <a :href="`#${item.id}`" class="transition-colors hover:text-sand">{{ item.label }}</a>
          </li>
          <li><a href="#top" class="transition-colors hover:text-sand">{{ c.ui.backToTop }}</a></li>
        </ul>
      </nav>
    </div>
    <p class="mx-auto max-w-6xl px-5 pb-10 text-xs text-sand-faint sm:px-8">© {{ year }} {{ person.name }}</p>
  </footer>
</template>
