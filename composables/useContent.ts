import { fr } from '~/data/i18n/fr'
import { en } from '~/data/i18n/en'
import type { Content, Locale } from '~/data/types'

export const contents: Record<Locale, Content> = { fr, en }

/** Content for the current page's language: /en/… is English, everything else French. */
export function useContent() {
  const route = useRoute()
  return computed<Content>(() => (route.path === '/en' || route.path.startsWith('/en/') ? en : fr))
}
