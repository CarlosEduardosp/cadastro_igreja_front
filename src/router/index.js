import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cadastro from '../views/Cadastro.vue'
import Contato from '../views/Contato.vue'
import Pessoas from '../views/Pessoas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('../views/Cadastro.vue')
    },
    {
      path: '/contato',
      name: 'Contato',
      component: () => import('../views/Contato.vue')
    },
    {
      path: '/pessoas',
      name: 'Pessoas',
      component: () => import('../views/Pessoas.vue')
    }
  ]
})

export default router
