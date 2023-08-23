import { createRouter, createWebHistory } from 'vue-router'
import MSite from '@/views/MSite/MSite.vue'
import Order from '@/views/Order/Order.vue'
import Profile from '@/views/Profile/Profile.vue'
import Search from '@/views/Search/Search.vue'
import Login from '@/views/Login/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter: true,
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter: true,
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter: true,
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter: true,
      }
    },
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router
