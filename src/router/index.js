import Vue from 'vue'
import Router from 'vue-router'
import AppAdmin from '../components/Admin'
import AppLogin from '../components/Login'
import Notice from '../components/board/Notice'
import FAQ from '../components/board/FAQ'
import Help from '../components/board/Help'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: AppLogin
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AppAdmin,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/notice',
          name: 'Notice',
          component: Notice,
          title: 'Notice'
        },
        {
          path: '/FAQ',
          name: 'FAQ',
          component: FAQ,
          title: 'FAQ'
        },
        {
          path: '/Help',
          name: 'Help',
          component: Help,
          title: 'Help'
        }
      ]
    }
  ]
})
router.onError((error) => {
  console.log('router error')
  console.error(error)
  router.push({
    name: 'CustomError',
    params: { message: 'route.onError handling' }
  })
})

/* router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser // 로그인 하였는가
  let requireAuth = to.matched.some(record => record.meta.requiresAuth) // 같은 경로로 반복 이동 하였을 때
  if (!currentUser && requireAuth) {
    next('login')
  } else if (currentUser && !requireAuth) {
    next()
  } else {
    next()
  }
}) */

export default router
