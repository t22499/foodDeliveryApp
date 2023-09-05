import { createRouter, createWebHistory } from 'vue-router'
import MSite from '@/views/MSite/MSite.vue'
import Order from '@/views/Order/Order.vue'
import Profile from '@/views/Profile/Profile.vue'
import Search from '@/views/Search/Search.vue'
import Login from '@/views/Login/Login.vue'
import Shop from '@/views/Shop/Shop.vue'
import ShopGoods from '@/views/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '@/views/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '@/views/Shop/ShopRatings/ShopRatings.vue'


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
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop',
          redirect:'/shop/goods'
        }
      ]
    }
  ]
})

export default router
