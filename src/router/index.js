// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Signup',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Signup.vue')
      },
      {
        path: 'axdif-step',
        name: 'AxdifStep',
        component: () => import('@/views/AxdifStep.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'privacy-policy',
        name: 'Privacy Policy',
        component: () => import('@/views/Signup.vue')
      },
      {
        path: 'terms-condition',
        name: 'Terms Condition',
        component: () => import('@/views/Signup.vue')
      },
      {
        path: 'forgot-password',
        name: 'Forgot Password',
        component: () => import('@/views/Signup.vue')
      },
    ]
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/dashboard/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'employee-stats',
        name: 'Employee Stats',
        component: () => import('@/views/EmployeeStats.vue')
      },
      {
        path: 'task',
        name: 'Task',
        component: () => import('@/views/Task.vue')
      },
      {
        path: 'chat',
        name: 'Chat',
        component: () => import('@/views/Chat.vue')
      },
      {
        path: 'payroll',
        name: 'Payroll',
        component: () => import('@/views/Payroll.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
