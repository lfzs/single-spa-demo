import { registerApplication, start } from 'single-spa'
import { createApp, ref } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.config.globalProperties.appLoading = ref(false)
app.mount('#root')

const parseHTMLEntry = html => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const links = doc.head.querySelectorAll('link')
  links.forEach(i => document.head.appendChild(i))

  const styles = doc.head.querySelectorAll('style')
  styles.forEach(i => document.head.appendChild(i))

  const scripts = Array.from(doc.head.querySelectorAll('script'))
  const entry = scripts.pop() // 默认最后一个
  scripts.forEach(i => i.src ? document.head.appendChild(i) : eval(i.innerHTML))
  return entry.src
}

registerApplication({
  name: 'app',
  app: async () => {
    try {
      app.config.globalProperties.appLoading.value = true
      const res = await fetch('http://127.0.0.1:5500')
      const html = await res.text()
      const src = parseHTMLEntry(html)
      const entry = await import(/* @vite-ignore */src)
      return entry
    } finally {
      app.config.globalProperties.appLoading.value = false
    }
  },
  activeWhen: '/v',
  customProps: {
    routerBase: '/v'
  },
})

start()