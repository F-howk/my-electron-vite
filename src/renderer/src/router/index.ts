import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@renderer/views/Home/IndexPage.vue'

const home = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...home]
})

export default router
