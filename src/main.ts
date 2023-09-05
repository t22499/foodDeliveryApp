import '@/common/style/index.scss'
import '@/common/style/font_tubiao/demo.css'
import '@/common/style/font_tubiao/iconfont.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Swipe, SwipeItem, PullRefresh} from 'vant'
import { Icon } from 'vant'
import 'vant/lib/index.css';
import  '../src/mock/mockServer.js';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Icon)
app.use(Swipe)
app.use(SwipeItem)
app.use(PullRefresh);
app.use(createPinia())
app.use(router)

app.mount('#app')
