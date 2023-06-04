import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      // 通知管理
      path: '/InformView',
      name: 'inform',
      component: () => import('../views/InformView.vue')
    },
    {
      // 用户管理
      path: '/UserView',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      // 课程管理
      path: '/CourseView',
      name: 'course',
      component: () => import('../views/CourseView.vue')
    },
    {
      // 成绩管理
      path: '/GradeView',
      name: 'grade',
      component: () => import('../views/GradeView.vue')
    },
    {
      // 登录账号
      path: '/LoginView',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router
