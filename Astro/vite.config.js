import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Automatically opens the analysis in the browser
    }),
  ],
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
