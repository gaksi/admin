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
      }
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice,
      title: 'Notice',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ,
      title: 'FAQ',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Help',
      name: 'Help',
      component: Help,
      title: 'Help',
      meta: {
        requiresAuth: true
      }
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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  }
})

export default router
