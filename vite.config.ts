import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/drop-n-drag/",
  plugins: [
    react()
  ],
  build: {
    outDir: 'build'
  }
})
