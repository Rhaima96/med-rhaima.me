export const navItems = [
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'open-source', label: 'Open source' },
  { id: 'contact', label: 'Contact' },
] as const

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
    for (const { id } of navItems) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    onBeforeUnmount(() => observer.disconnect())
  })
  return active
}
