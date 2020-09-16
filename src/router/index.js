import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/containers/MainPage.vue'
import Home from '../views/Home.vue'
import Vegetables from '../views/Vegetables.vue'
import Groceries from '../views/Groceries.vue'
import MeatsPoultry from '../views/MeatsPoultry'

import Product from '../views/Product'


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
        redirect: '/groceries',
        name: "Home",
        component: Home,
        children: [
          {
            path: "/groceries",
            name: "Groceries",
            component: Groceries,
          },
          {
            path: "/vegetables",
            name: "Fruits & Vegs",
            component: Vegetables,
          },
          {
            path: "/fresh-meats-poultry",
            name: "Meats",
            component: MeatsPoultry,
          }
        ]
      },
      {
        path: "/item/:id",
        name: "Product",
        component: Product
      },
      {
        path: "/cart",
        name: "Cart",
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
