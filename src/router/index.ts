import { createRouter, createWebHistory } from 'vue-router'
import MSite from '@/views/MSite/MSite.vue'
import Order from '@/views/Order/Order.vue'
import Profile from '@/views/Profile/Profile.vue'
import Search from '@/views/Search/Search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/msite',
      component:MSite
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})

export default router
