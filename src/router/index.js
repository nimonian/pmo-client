import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Project from '../components/Project.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/',
    name: 'About',
    component: About
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
