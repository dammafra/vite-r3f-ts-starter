import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    liveReload('./src/**'),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
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
