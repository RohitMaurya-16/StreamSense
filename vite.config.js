import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths work on Netlify
  build: {
    assetsDir: 'assets', // Avoids path issues with static files
  }
});
