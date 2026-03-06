<template>
  <footer class="py-12 border-t border-white/[0.08]">
    <div class="mx-auto max-w-[1200px] px-6 text-center">
      <p class="font-mono text-xs text-zinc-600 tracking-widest uppercase">
        {{ t('footer.tech') }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>
