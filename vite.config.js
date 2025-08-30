import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),       // 👈 this enables JSX transform
    tailwindcss(), // 👈 this enables Tailwind
  ],
})
