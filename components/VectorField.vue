<script setup lang="ts">
import { vectorPoints } from '~/data/profile'

// Skills laid out as 2D vectors. The pointer (or the arrow keys) sets a query vector;
// the three nearest skills by cosine distance light up, like a vector search would.
const DEG = Math.PI / 180
const points = vectorPoints.map((p, i) => ({
  ...p,
  i,
  x: +(Math.cos(p.angle * DEG) * p.r * 100).toFixed(2),
  y: +(-Math.sin(p.angle * DEG) * p.r * 100).toFixed(2),
  // Label sits outside the point, on the side away from the origin.
  anchor: (Math.cos(p.angle * DEG) > 0.25 ? 'start' : Math.cos(p.angle * DEG) < -0.25 ? 'end' : 'middle') as 'start' | 'end' | 'middle',
  dy: Math.sin(p.angle * DEG) > 0.6 ? -6 : Math.sin(p.angle * DEG) < -0.6 ? 10 : 3.5,
  dx: Math.cos(p.angle * DEG) > 0.25 ? 5 : Math.cos(p.angle * DEG) < -0.25 ? -5 : 0,
}))

const theta = ref(20) // degrees; deterministic so SSR and client agree
const interacting = ref(false)
const svg = ref<SVGSVGElement>()

const ranked = computed(() =>
  points
    .map((p) => ({ ...p, d: 1 - Math.cos((theta.value - p.angle) * DEG) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 3),
)
const nearest = computed(() => new Set(ranked.value.map((p) => p.i)))
const tip = computed(() => ({ x: Math.cos(theta.value * DEG) * 100, y: -Math.sin(theta.value * DEG) * 100 }))

function aim(e: PointerEvent) {
  const box = svg.value!.getBoundingClientRect()
  const dx = e.clientX - (box.left + box.width / 2)
  const dy = e.clientY - (box.top + box.height / 2)
  if (Math.hypot(dx, dy) < 6) return
  theta.value = Math.atan2(-dy, dx) / DEG
}

function onKey(e: KeyboardEvent) {
  const step = e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? 8 : e.key === 'ArrowRight' || e.key === 'ArrowDown' ? -8 : 0
  if (!step) return
  e.preventDefault()
  interacting.value = true
  theta.value = (theta.value + step + 360) % 360
}

// Idle sweep so touch and keyboard users see the idea without doing anything.
let raf = 0
let resumeTimer: ReturnType<typeof setTimeout> | undefined
onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let last = performance.now()
  const tick = (t: number) => {
    if (!interacting.value && !document.hidden) theta.value = (theta.value + (t - last) * 0.008) % 360
    last = t
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)
})
onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  clearTimeout(resumeTimer)
})

function hold() {
  clearTimeout(resumeTimer)
  interacting.value = true
}
function release() {
  clearTimeout(resumeTimer)
  resumeTimer = setTimeout(() => (interacting.value = false), 2500)
}

const fmt = (n: number) => n.toFixed(3)
</script>

<template>
  <figure class="relative">
    <svg
      ref="svg"
      viewBox="-136 -110 272 216"
      class="vf w-full select-none outline-none [touch-action:pan-y]"
      tabindex="0"
      role="img"
      aria-label="Champ vectoriel de compétences. Utilisez les flèches pour orienter la requête ; les trois compétences les plus proches par distance cosinus sont listées sous le schéma."
      @pointermove="aim"
      @pointerenter="hold"
      @pointerdown="hold"
      @pointerleave="release"
      @focus="hold"
      @blur="release"
      @keydown="onKey"
    >
      <g class="vf-grid" stroke="currentColor" fill="none">
        <circle r="100" />
        <circle r="66" />
        <circle r="33" />
        <path d="M-108 0H108M0 -108V108" />
      </g>

      <g v-for="p in ranked" :key="`l${p.i}`">
        <line x1="0" y1="0" :x2="p.x" :y2="p.y" class="vf-match" />
      </g>

      <line x1="0" y1="0" :x2="tip.x" :y2="tip.y" class="vf-query" />
      <circle :cx="tip.x" :cy="tip.y" r="3.4" class="fill-date" />
      <circle r="2.6" class="fill-sand" />

      <g v-for="p in points" :key="p.i" class="vf-point" :style="{ '--d': `${200 + p.r * 700}ms` }">
        <circle :cx="p.x" :cy="p.y" :r="nearest.has(p.i) ? 3.2 : 1.9" :class="nearest.has(p.i) ? 'fill-glass' : 'fill-sand-dim'" class="transition-[r] duration-300" />
        <text
          :x="p.x + p.dx"
          :y="p.y + p.dy"
          :text-anchor="p.anchor"
          class="vf-label"
          :class="nearest.has(p.i) ? 'fill-sand font-semibold' : 'fill-sand-faint'"
        >
          {{ p.label }}
        </text>
      </g>
    </svg>

    <figcaption class="mt-4 rounded-xl border border-petrol-line bg-petrol-deep/70 p-4 text-sm">
      <code class="block font-mono text-[0.8rem] text-sand-dim">
        whereVectorSimilarTo(<span class="text-date-soft">'competences'</span>, $requete)
      </code>
      <ol class="mt-3 space-y-1.5 font-mono text-[0.8rem]">
        <li v-for="(p, n) in ranked" :key="p.i" class="flex items-baseline gap-3">
          <span class="text-sand-faint">{{ n + 1 }}</span>
          <span class="flex-1 text-sand">{{ p.label }}</span>
          <span class="tabular-nums text-glass">{{ fmt(p.d) }}</span>
        </li>
      </ol>
    </figcaption>
  </figure>
</template>

<style scoped>
.vf { color: theme('colors.petrol.line'); cursor: crosshair; }
.vf:focus-visible { outline: 2px solid theme('colors.date.DEFAULT'); outline-offset: 6px; border-radius: 1rem; }
.vf-grid { stroke-width: 0.6; }
.vf-query { stroke: theme('colors.date.DEFAULT'); stroke-width: 1.6; stroke-linecap: round; }
.vf-match { stroke: theme('colors.glass.DEFAULT'); stroke-width: 0.8; stroke-dasharray: 2 2.4; opacity: 0.85; }
.vf-label { font-family: theme('fontFamily.sans'); font-size: 6.6px; transition: fill 0.25s; }
.vf-point { animation: vf-in 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both; animation-delay: var(--d); }
@keyframes vf-in { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: none; } }
.vf-grid, .vf-query { animation: vf-fade 1.2s ease both; }
@keyframes vf-fade { from { opacity: 0; } }
</style>
