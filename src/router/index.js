import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/containers/MainPage.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Main',
    component: MainPage,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/product/:",
        name: "Home",
        component: Home
      },
      {
        path: "/cart",
        name: "cart",
        component: Cart
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
