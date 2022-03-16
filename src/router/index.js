import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/TheHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/TheAbout.vue')
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('../views/TheStudent.vue')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/TheTeacher.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/TheContact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
