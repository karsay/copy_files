import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from './pages/Top.vue'
import Login from './pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router