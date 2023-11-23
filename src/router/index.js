import { createRouter, createWebHistory } from "vue-router"
const Home = () => import('../views/Home.vue')

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/responsive',
    component: () => import('../views/Responsive.vue')
  },
  {
    path: '/dark',
    component: () => import('../views/Darkmode.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router