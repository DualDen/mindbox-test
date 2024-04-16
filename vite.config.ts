import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: './build'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/shared/assets'),
      '@widgets': path.resolve(__dirname,'./src/widgets'),
      '@features': path.resolve(__dirname,'./src/features'),
      '@pages': path.resolve(__dirname,'./src/pages'),
      '@shared': path.resolve(__dirname,'./src/shared'),
      '@entities': path.resolve(__dirname,'./src/entities'),
    },
  },
  plugins: [react()],
})
