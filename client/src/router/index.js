import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../mockup/movies.json';


// router.get('/home', function (req, res, next) {
//   var searchtext = req.query.search;
//   var resultsearch = Movies;
//   if(searchtext){
//       resultsearch = Movies.filter(item => {
//           return item.title.toLowerCase().includes(searchtext.toLowerCase()) || item.author.toLowerCase().includes(searchtext.toLocaleLowerCase())
//       })
//   }
//   var data = { Movies: resultsearch , title: 'Express' }
//   res.render('index', data)
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('../views/Signin.vue')
    },
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
      path: '/booking/:roundId',
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
      path: '/movieintheater',
      name: 'movieintheater',
      component: () => import('../views/Movie-in-theter.vue'),
      props: true,
    },
    {
      path: '/myticket',
      name: 'myticket',
      component: () => import('../views/Myticket.vue'),
      props: true,
    },
    {
      path: '/theaterinbooking/:id',
      name: 'theaterinbooking',
      component: () => import('../views/theater-in-booking.vue'),
      props: true,
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: () => import('../views/Adminhome.vue'),
      props: true,
    },
    {
      path: '/admintheater',
      name: 'admintheater',
      component: () => import('../views/Admintheater.vue'),
      props: true,
    },
  ]
})

export default router
