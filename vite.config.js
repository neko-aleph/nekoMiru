import { defineConfig } from 'vite'
import { vite as vidstack } from 'vidstack/plugins';
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('media-'),
        },
      },
    }),
    vidstack(),
  ],
  server: {
    allowedHosts: ["uncommon-luckily-spaniel.ngrok-free.app"],
  },
})
