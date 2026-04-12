import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload'

// https://vite.dev/config/
export default defineConfig({
  plugins: [liveReload('./src/**'), react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    // host: true,
  },
  build: {
    emptyOutDir: true,
    sourcemap: true,
  },
})
