import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/Signin.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: () => import('../views/Forgotpassword.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
  ]
})

export default router
