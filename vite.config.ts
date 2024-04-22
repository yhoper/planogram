import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Asegúrate de descomentar esta línea si estás utilizando React
  base: '/lg/'
})
