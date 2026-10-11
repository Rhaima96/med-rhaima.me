<script setup lang="ts">
import { Menu, X, Download } from 'lucide-vue-next'
import { contents } from '~/composables/useContent'

const c = useContent()
const items = computed(() => navItems(c.value))
const other = computed(() => contents[c.value.locale === 'fr' ? 'en' : 'fr'])
const active = useActiveSection()
const open = ref(false)
const scrolled = ref(false)

onMounted(() => {
  const onScroll = () => (scrolled.value = window.scrollY > 24)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})

const close = () => (open.value = false)
watch(open, (v) => {
  if (import.meta.client) document.body.style.overflow = v ? 'hidden' : ''
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300"
    :class="scrolled || open ? 'border-b border-petrol-line/70 bg-petrol/85 backdrop-blur-md' : 'border-b border-transparent'"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" :aria-label="c.ui.navLabel">
      <a href="#top" class="group flex items-center gap-3" @click="close">
        <SiteMark class="h-8 w-8 transition-transform duration-500 group-hover:rotate-[24deg]" />
        <span class="font-display text-[1.05rem] font-semibold tracking-tight">Mohamed Rhaima</span>
      </a>

      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="item in items" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="relative rounded-full px-3 py-2 text-[0.95rem] transition-colors"
            :class="active === item.id ? 'text-sand' : 'text-sand-dim hover:text-sand'"
            :aria-current="active === item.id ? 'true' : undefined"
          >
            {{ item.label }}
            <span
              class="absolute inset-x-3 -bottom-0.5 h-px origin-left bg-date transition-transform duration-300"
              :class="active === item.id ? 'scale-x-100' : 'scale-x-0'"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <!-- Plain link: a full load gives the other language its own <html lang> and head. -->
        <a
          :href="other.path"
          :hreflang="other.htmlLang"
          :lang="other.htmlLang"
          :aria-label="c.ui.switchAria"
          class="inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold tracking-wide text-sand-dim transition-colors hover:bg-petrol-raised hover:text-sand"
        >
          {{ c.ui.switchLabel }}
        </a>
        <a
          :href="c.cv.href"
          download
          class="hidden items-center gap-2 rounded-full border border-date/50 px-4 py-2 text-sm font-medium text-date-soft transition-colors hover:bg-date hover:text-petrol-deep sm:inline-flex"
        >
          <Download class="h-4 w-4" aria-hidden="true" />
          {{ c.cv.short }}
        </a>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full text-sand lg:hidden"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          :aria-label="open ? c.ui.menuClose : c.ui.menuOpen"
          @click="open = !open"
        >
          <X v-if="open" class="h-6 w-6" aria-hidden="true" />
          <Menu v-else class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" id="mobile-menu" class="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-petrol-line/70 bg-petrol px-5 pb-10 pt-6 lg:hidden">
        <ul class="space-y-1">
          <li v-for="item in items" :key="item.id">
            <a :href="`#${item.id}`" class="block py-3 font-display text-3xl font-semibold tracking-tight" @click="close">
              {{ item.label }}
            </a>
          </li>
        </ul>
        <a :href="c.cv.href" download class="mt-8 inline-flex items-center gap-2 rounded-full bg-date px-5 py-3 font-medium text-petrol-deep" @click="close">
          <Download class="h-4 w-4" aria-hidden="true" />
          {{ c.cv.title }}
        </a>
      </div>
    </Transition>
  </header>
</template>
