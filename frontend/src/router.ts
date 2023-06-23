import { createRouter, createWebHistory } from 'vue-router'
import Test from './pages/Test.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Test,
    },
  ],
})