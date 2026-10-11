<script setup lang="ts">
useHead({
  // Lets CSS hide reveal targets only when JS runs (no blank page without it).
  script: [{ innerHTML: "document.documentElement.classList.add('js')", tagPosition: 'head' }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
