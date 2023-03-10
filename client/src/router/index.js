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
    {
      path: '/movie',
      name: 'movie',
      component: () => import('../views/Movie.vue')
    },
    {
      path: '/theater',
      name: 'theater',
      component: () => import('../views/Theater.vue')
    },
    {
      path: '/booking/:id',
      name: 'booking',
      component: () => import('../views/Booking.vue'),
      props: true,
    },
    {
      path: '/movieinfo/:id',
      name: 'movieinfoDetail',
      component: () => import('../views/Movieinfo.vue'),
      props: true,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/Checkout.vue')
    }
  ]
})

export default router
