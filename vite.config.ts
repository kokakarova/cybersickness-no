import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cybersickness-no/',
  build: {
    outDir: 'dist', // Ensure this matches where your build is being output (e.g., 'dist' folder)
  },
})