import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'dotenv/config'

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
    host: true,
    strictPort: true
  },
  plugins: [vue()]
})
