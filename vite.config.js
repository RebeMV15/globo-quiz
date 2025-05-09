import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/globo-quiz/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  publicDir: 'public'
})
