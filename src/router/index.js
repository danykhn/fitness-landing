import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import PlanDetail from '@/views/PlanDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/plan/:id', name: 'PlanDetail', component: PlanDetail, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router