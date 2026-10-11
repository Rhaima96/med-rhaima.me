<script setup lang="ts">
// Card whose border and surface catch a soft light under the pointer.
const el = ref<HTMLElement>()
function move(e: PointerEvent) {
  const r = el.value!.getBoundingClientRect()
  el.value!.style.setProperty('--x', `${e.clientX - r.left}px`)
  el.value!.style.setProperty('--y', `${e.clientY - r.top}px`)
}
</script>

<template>
  <article ref="el" class="spot relative overflow-hidden rounded-2xl border border-petrol-line bg-petrol-raised/40" @pointermove="move">
    <slot />
  </article>
</template>

<style scoped>
.spot::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s;
  background: radial-gradient(420px circle at var(--x, 50%) var(--y, 0%), rgba(233, 169, 59, 0.08), transparent 60%);
}
.spot:hover::before { opacity: 1; }
.spot:hover { border-color: rgba(233, 169, 59, 0.35); }
</style>
