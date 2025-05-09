import { defineConfig } from 'vite'

export default defineConfig({
  base: '/globo-quiz/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    fs: {
      strict: false
    }
  }
}) 