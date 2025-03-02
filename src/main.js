import './assets/main.css'

import { createApp } from 'vue'
import store from '@/stores'

import App from './App.vue'
import router from './router/index'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
