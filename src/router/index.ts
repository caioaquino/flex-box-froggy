import { createRouter, createWebHistory } from 'vue-router'
import FlexBoxFroggyView from '../views/FlexBoxFroggyView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FlexBoxFroggyView
    },

  ]
})

export default router
