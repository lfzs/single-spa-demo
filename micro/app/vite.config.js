import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  base: 'http://127.0.0.1:5500', // 子应用提供（基座直接复制 document.head）
  build: {
    modulePreload: false, // 必须关闭
    rollupOptions: {
      // https://github.com/vitejs/vite/discussions/14454
      input: ['./src/main.js', './index.html'], // 关键之处：实现了 html 中的入口 js 保留了 export
      preserveEntrySignatures: 'allow-extension',
    }
  }
})
