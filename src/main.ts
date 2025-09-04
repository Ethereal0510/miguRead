import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/routers'
import "@/assets/icon-zuoyouanniu/iconfont.css"
import "@/styles/main.css"

const app = createApp(App)

app.use(router)

app.mount('#app')
