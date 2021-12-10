import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        dir: resolve(__dirname, 'tmp/demo')
      }
      // input: {
      //   lib: resolve(__dirname, 'src/lib.js'),
      //   demo: resolve(__dirname, 'index.html'),
      //   // nested: resolve(__dirname, 'nested/index.html')
      // }
    },
  },
  plugins: [vue()]
})
