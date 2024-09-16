import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ShelterInfo from './components/Pages/ShelterInfo.vue'
import Home from './components/Pages/Home.vue'

const routes = [
  { path: '/', name: 'App', component: App },
  { path: '/about', name: 'ShelterInfo', component: ShelterInfo },
  { path: '/about', name: 'Home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
createApp(App).mount('#app')
