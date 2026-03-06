<template>
  <section class="relative pt-32 pb-20 overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none" aria-hidden="true">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)]" />
    </div>
    <div
      class="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style="background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 64px 64px; mask-image: radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent); -webkit-mask-image: radial-gradient(ellipse 70% 50% at 50% 0%, black, transparent);"
    />

    <div class="relative mx-auto max-w-[1200px] px-6 text-left">
      <div class="animate-fade-up" style="animation-delay: 0s">
        <span class="inline-block font-mono text-[11px] text-purple-400 uppercase tracking-[0.2em] border border-white/[0.1] rounded-full px-4 py-1.5 bg-purple-500/[0.08]">
          {{ t('hero.kicker') }}
        </span>
      </div>

      <h1 class="mt-8 text-[clamp(30px,4.2vw,46px)] font-medium tracking-[-0.02em] leading-[1.2] max-w-[28ch] text-[#e8e4de] animate-fade-up" style="animation-delay: 0.08s">
        {{ t('hero.title') }}
      </h1>

      <p class="mt-5 text-[16px] text-[#8a8a8a] max-w-[560px] leading-[1.65] animate-fade-up" style="animation-delay: 0.16s">
        {{ t('hero.subtitle') }}
      </p>

      <div id="descargar" class="mt-8 flex flex-wrap gap-3 animate-fade-up" style="animation-delay: 0.24s">
        <a href="#" class="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-black bg-[#e8e4de] rounded-lg hover:bg-white hover:-translate-y-px transition-all duration-200 shadow-lg">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 9v12h18V9l-9-7zm0 2.18l6 4.67v9.15H6V8.85l6-4.67z"/></svg>
          {{ t('hero.downloadMac') }}
        </a>
        <a href="#" class="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#e8e4de] bg-white/[0.06] border border-white/[0.1] rounded-lg hover:bg-white/[0.1] hover:border-white/[0.16] hover:-translate-y-px transition-all duration-200">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19z"/></svg>
          {{ t('hero.downloadIos') }}
        </a>
        <a href="#" class="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#e8e4de] bg-white/[0.06] border border-white/[0.1] rounded-lg hover:bg-white/[0.1] hover:border-white/[0.16] hover:-translate-y-px transition-all duration-200">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5L10.5 3v7.5L3 12.5V5.5zm10.5 0L21 3v7.5l-7.5 3V5.5zM10.5 13.5L3 18v-6l7.5 1.5v0zm1.5 0l7.5 3v-6l-7.5-1.5v4.5z"/></svg>
          {{ t('hero.downloadWindows') }}
        </a>
      </div>

      <div class="mt-16 animate-scale-in group" style="animation-delay: 0.36s; perspective: 1200px">
        <div class="relative rounded-2xl overflow-hidden border-[0.5px] border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_32px_100px_-24px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_-20px_rgba(0,0,0,0.8),0_0_100px_-20px_rgba(168,85,247,0.1)] group-hover:-translate-y-1" style="transform: rotateX(2deg)">
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(168,85,247,0.08)_0%,transparent_60%)] pointer-events-none z-10" />
          <img src="/Module_Endpoint_Preview.png" :alt="t('hero.altStage')" class="w-full block bg-black" loading="lazy">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>
