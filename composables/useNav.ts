import type { Content } from '~/data/types'

// Section anchors are language-neutral so links work the same on / and /en/.
const sections = ['about', 'skills', 'projects', 'experience', 'open-source', 'contact'] as const
const labelKey = { about: 'about', skills: 'skills', projects: 'projects', experience: 'experience', 'open-source': 'openSource', contact: 'contact' } as const

export function navItems(c: Content) {
  return sections.map((id) => ({ id, label: c.nav[labelKey[id]] }))
}

/** Id of the section currently in the middle band of the viewport. */
export function useActiveSection() {
  const active = ref<string>('')
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) active.value = e.target.id
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    onBeforeUnmount(() => observer.disconnect())
  })
  return active
}
