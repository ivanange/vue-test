import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/About.vue')
  },

  { path: '/login', component: () => import('@/views/Login.vue') },
  { path: '/signin', component: () => import('@/views/SignIn.vue') },
  {
    path: '/products',
    component: () => import('../views/Product.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/products/ProductList.vue')
      },
      {
        path: ':id',
        component: () => import('@/components/products/ProductItem.vue')
      },
      {
        path: ':id/edit',
        component: () => import('@/components/products/EditProduct.vue')
      },
      {
        path: 'new',
        component: () => import('@/components/products/AddProduct.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
