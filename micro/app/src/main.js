import { createApp } from 'vue'
import App from './App.vue'
import './app.css'
import { createRouter } from './router/index'

const render = (props = {}) => {
  const app = createApp(App)
  const router = createRouter(props)
  app.use(router)
  app.mount('#app')
  return app
}

if (!window.singleSpaNavigate) {
  render()
}

let app
export async function bootstrap() {
  await Promise.resolve()
}
export async function mount(props) {
  console.log('基座提供的数据：', props)
  app = render(props)
  await Promise.resolve(app)
}
export async function unmount(props) {
  const { $router } = app.config.globalProperties
  $router.options.history.destroy() // 销毁子应用 vue-router 对 history 的监听（会影响到 single-spa 对路由的控制）
  app.unmount()
  app._container.innerHTML = ''
  app = null
  await Promise.resolve()
}