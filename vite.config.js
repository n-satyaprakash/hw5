import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'build', // Make sure this is correctly set
  },
  plugins: [react()]
});
