import { createRouter, createWebHistory } from 'vue-router'
import contact from '../views/contactus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: contact
    }
  ]
})

export default router
