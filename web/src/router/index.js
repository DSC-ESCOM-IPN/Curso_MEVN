import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import SalesApp from '../views/SalesApp.vue'
import Products from '../views/Products.vue'
import UserOrders from '../views/UserOrders.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    redirect: '/app/products'
  },
  {
    path: '/app',
    redirect: '/app/products'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/app',
    name: 'App',
    component: SalesApp,
    children: [
      {
        path: '/app/products',
        name: 'Products',
        component: Products
      },
      {
        path: '/app/orders',
        name: 'UserOrders',
        component: UserOrders
      },
      {
        path: '/app/profile',
        name: 'UserProfile',
        component: UserProfile
      },
      {
        path: '/app/cart',
        name: 'Cart',
        component: Cart
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
