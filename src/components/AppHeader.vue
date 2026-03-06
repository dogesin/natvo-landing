<template>
  <nav class="fixed top-0 left-0 right-0 z-50 h-14 border-b border-white/[0.08] bg-black/70 backdrop-blur-xl backdrop-saturate-[1.8]">
    <div class="mx-auto max-w-[1200px] px-6 h-full flex items-center justify-between gap-4">
      <router-link to="/" class="flex items-center gap-2.5 no-underline shrink-0">
        <img
          :src="logoUrl"
          alt="NatVo"
          class="h-8 w-auto object-contain"
        />
        <span class="text-[15px] font-medium tracking-tight text-[#e8e4de]">NatVo</span>
      </router-link>

      <div class="flex items-center gap-3 flex-wrap justify-end">
        <!-- Language switcher -->
        <div class="flex items-center gap-0.5 rounded-lg border border-white/10 p-0.5 bg-white/[0.03]">
          <button
            type="button"
            :class="locale === 'en' ? 'bg-white/10 text-[#e8e4de]' : 'text-[#6a6a6a] hover:text-[#8a8a8a]'"
            class="px-3 py-1.5 text-[12px] font-medium rounded-md transition-colors"
            @click="setLocale('en')"
          >
            EN
          </button>
          <button
            type="button"
            :class="locale === 'es' ? 'bg-white/10 text-[#e8e4de]' : 'text-[#6a6a6a] hover:text-[#8a8a8a]'"
            class="px-3 py-1.5 text-[12px] font-medium rounded-md transition-colors"
            @click="setLocale('es')"
          >
            ES
          </button>
        </div>

        <a href="#descargar" class="nav-dl px-3 py-2 text-[13px] font-medium text-[#e8e4de] border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-1.5">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2L3 9v12h18V9l-9-7zm0 2.18l6 4.67v9.15H6V8.85l6-4.67z"/></svg>
          {{ t('nav.downloadMac') }}
        </a>
        <a href="#descargar" class="nav-dl px-3 py-2 text-[13px] font-medium text-[#e8e4de] border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-1.5">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19z"/></svg>
          {{ t('nav.downloadIos') }}
        </a>
        <a href="#descargar" class="nav-dl px-3 py-2 text-[13px] font-medium text-[#e8e4de] border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-1.5">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5.5L10.5 3v7.5L3 12.5V5.5zm10.5 0L21 3v7.5l-7.5 3V5.5zM10.5 13.5L3 18v-6l7.5 1.5v0zm1.5 0l7.5 3v-6l-7.5-1.5v4.5z"/></svg>
          {{ t('nav.downloadWindows') }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { locale, t, setLocale } = useI18n()
const logoUrl = `${import.meta.env.BASE_URL}Logo_Natvo.png`
</script>
