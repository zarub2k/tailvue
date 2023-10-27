import { createRouter, createWebHistory } from "vue-router"
const Home = () => import('../views/Home.vue')

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router