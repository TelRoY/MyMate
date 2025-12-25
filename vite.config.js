import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    build: {
        outDir: '/dist', 
        emptyOutDir: true,
      },
    server: { port: 3000, },
    plugins: [
      handlebars({
        context: {
          title: 'MyMate',
          user: {
            name: 'Anton',          
          }
        }
      })
    ],
    css: {
      postcss: '/postcss.config.js'
    }
})