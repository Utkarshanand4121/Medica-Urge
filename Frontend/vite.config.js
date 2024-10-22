import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests
      '/api': {
        target: 'http://localhost:8080', //  backend server
        changeOrigin: true,
        secure: false
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
