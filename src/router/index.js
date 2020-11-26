import Vue from 'vue'
import VueRouter from 'vue-router'
import Sales from '@/views/Sales'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sales',
    component: Sales
  },
  {
    path: '/panel',
    name: 'Panel',
    component: () => import('../views/Panel.vue')
  },
  {
    path: '/extensions',
    name: 'Extensions',
    component: () => import('../views/Extensions')
  },
  {
    path: '/design',
    name: 'Design',
    component: () => import('../views/Design')
  },
  {
    path: '/sales',
    name: 'Sales',
    component: () => import('../views/Sales')
  },
  {
    path: '/buyers',
    name: 'Buyers',
    component: () => import('../views/Buyers')
  },
  {
    path: 'marketing',
    name: 'Marketing',
    component: () => import('../views/Marketing')
  },
  {
    path: 'system',
    name: 'System',
    component: () => import('../views/System')
  },
  {
    path: 'help',
    name: 'NeedHelp',
    component: () => import('../views/NeedHelp')
  },
  {
    path: 'contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts')
  },
  {
    path: 'settings',
    name: 'Settings',
    component: () => import('../views/Settings')
  },
  {
    path: 'themes',
    name: 'Themes',
    component: () => import('../views/Themes')
  },
  {
    path: 'logout',
    name: 'Logout',
    component: () => import('../views/Logout')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
