import { createRouter, createWebHistory } from 'vue-router'
import RouteHome from './views/RouteHome.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Catchall route, redirects back to homepage
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        name: 'RouteHome',
      },
    },
    {
      path: '/home',
      name: 'RouteHome',
      component: RouteHome,
      meta: {
        title: 'Home',
      },
    },
  ],
})

// Router guards
router.afterEach((to) => {
  document.title = `${to.meta.title} // Project name`
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

export default router
