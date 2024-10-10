import { createRouter as vueCreateRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/about',
    component: () => import('../views/about.vue'),
  },
]

function createRouter({ routerBase }) {
  const router = vueCreateRouter({ routes, history: createWebHistory(routerBase) })
  return router
}

export {
  createRouter,
}
