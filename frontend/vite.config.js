import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  server: {
    host: true, // Required for Docker
    port: 3000,
  },
  plugins: [react()],
});

