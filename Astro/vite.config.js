import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  base: './',
  assetsInclude: ['**/*.ejs'], // Include .ejs files as assets
  css: {
    postcss: './postcss.config.js', // Explicitly specify PostCSS configuration
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Define commonly used libraries as separate chunks
        },
      },
    },
  },
});
