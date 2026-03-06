import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/natvo-landing/', // Rutas relativas: los assets cargan siempre (GitHub Pages, local, etc.)
})
