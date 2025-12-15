import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use a flag so Netlify can build with base="/" while GitHub Pages uses the repo path
const isGhPages = process.env.VITE_GH_PAGES === 'true';

export default defineConfig({
  plugins: [react()],
  base: isGhPages ? '/MareToursHvar/' : '/',
  build: {
    outDir: 'dist'
  }
});



