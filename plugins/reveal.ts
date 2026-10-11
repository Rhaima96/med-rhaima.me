import type { Directive } from 'vue'

// v-reveal / v-reveal="120" (delay in ms). One shared observer, each element revealed once.
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  const reveal: Directive<HTMLElement, number | undefined> = {
    getSSRProps: () => ({ 'data-reveal': '' }),
    mounted(el, { value }) {
      el.setAttribute('data-reveal', '')
      if (value) el.style.setProperty('--reveal-delay', `${value}ms`)
      observer ??= new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue
            e.target.classList.add('is-visible')
            observer!.unobserve(e.target)
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
      )
      observer.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  }

  nuxtApp.vueApp.directive('reveal', reveal)
})
