<template>
  <div class="min-h-screen flex flex-col bg-black">
    <AppHeader />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useI18n } from './composables/useI18n'

const { locale } = useI18n()

watch(locale, (lang) => {
  document.title = lang === 'es' ? 'NatVo | OS de ingeniería local' : 'NatVo | Local Engineering OS'
}, { immediate: true })
</script>
