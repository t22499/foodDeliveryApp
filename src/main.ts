import '@/common/style/index.scss'
import '@/common/style/font_tubiao/demo.css'
import '@/common/style/font_tubiao/iconfont.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Swipe, SwipeItem } from 'vant';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Swipe);
app.use(SwipeItem);
app.use(createPinia())
app.use(router)

app.mount('#app')
