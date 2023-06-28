import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Admin from './pages/Admin.vue'
import { useUserStore } from './services/userStore'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    { path: '/admin', component: Admin}
  ],
})

//Simple route guard
router.beforeEach((to, _, next) => {
  const userStore = useUserStore();
  if(to.path === '/admin' && !userStore.user?.isAdmin){
    next('/')
  }
  next()
})

export default router