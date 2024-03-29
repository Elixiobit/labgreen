// export default {
//     root: "./public",
    // devServer: {
    //     proxy: {
    //       '^/api': {
    //         target: 'http://localhost:3070',
    //         changeOrigin: true
    //       },
    //     }
    //   }
// }; 
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // root: "./public",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})