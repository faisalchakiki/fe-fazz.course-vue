import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import Homepage from '../pages/Homepage.vue'

const routes : Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Homepage, 
    name: 'homepage'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;