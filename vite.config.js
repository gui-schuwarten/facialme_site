import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // 🔁 Troque aqui para a porta que você quiser
    host: true, // permite acesso externo (necessário pro Docker)
    allowedHosts: ["facialme.com.br"]
  },
})
