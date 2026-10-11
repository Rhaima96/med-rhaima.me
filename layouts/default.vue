<template>
  <div class="relative min-h-screen overflow-x-clip">
    <a
      href="#contenu"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-date focus:px-4 focus:py-2 focus:font-medium focus:text-petrol-deep"
    >
      Aller au contenu
    </a>
    <SiteHeader />
    <main id="contenu">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
