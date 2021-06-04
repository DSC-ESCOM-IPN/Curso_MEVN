import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Sale from '../views/Sale'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sales',
    name: 'Sales',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sales')
  },
  {
    path: '/sale/:id',
    name: 'Sale',
    component: Sale
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
