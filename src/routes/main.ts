import type { RouteRecordRaw } from 'vue-router';

const mainRoutes: Array<RouteRecordRaw> = [
  { path: '/', component:() => import('@/views/main/index.vue') },
]

export default mainRoutes
