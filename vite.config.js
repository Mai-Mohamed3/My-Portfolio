import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My-Portfolio/',  // ← ده اسم الريبو بتاعك
  plugins: [react()],
})
