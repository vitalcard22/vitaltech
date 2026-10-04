import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Explicit target so modern CSS is not silently down-levelled for iOS Safari
    cssTarget: ['safari14', 'chrome90', 'firefox90'],
  },
})
