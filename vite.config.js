import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'IziBricks',
      entry: resolve(__dirname, 'src/lib.js'),
      fileName: (format) => `izi-bricks.${format}.js`
    },
    rollupOptions: {
      output: {
        dir: resolve(__dirname, 'tmp/lib')
      }
      // external: ['vue'],
      // output: {
      //   // Provide global variables to use in the UMD build
      //   // for externalized deps
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
    },
  },
  plugins: [vue()]
})
