import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/generator',
    component: Layout,
    redirect: '/generator/index',
    meta: { title: '生成器', icon: 'sfont system-shequ' },
    children: [
      {
        path: 'index',
        component: createNameComponent(() => import('@/views/generator/index.vue')),
        meta: { title: '生成器' }
      }
    ]
  }
]

export default route