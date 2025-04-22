import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/taco_table/', // <- MUITO IMPORTANTE!
  plugins: [react()]
})
