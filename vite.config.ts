import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/currency-table/",
  plugins: [
    react()
  ],
  build: {
    outDir: 'build'
  }
})
