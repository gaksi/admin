import Vue from 'vue'
import Router from 'vue-router'

import AppAdmin from '../components/Admin'
import AppLogin from '../components/Login'

import Board from '../components/board/'
import Notice from '../components/board/Notice'

import Info from '../components/info/'
import FAQ from '../components/info/FAQ'
import Help from '../components/info/Help'

import Manage from '../components/manage/'
import Account from '../components/manage/Account'
import Menu from '../components/manage/Menu'

import Pay from '../components/pay/'
import Payment from '../components/pay/Payment'

import User from '../components/user/'
import UserInfo from '../components/user/UserInfo'

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
      redirect: { name: 'Board' },
      children: [
        {
          path: '/board',
          name: 'Board',
          component: Board,
          title: 'Board',
          redirect: { name: 'Notice' },
          children: [
            {
              path: '/notice',
              name: 'Notice',
              component: Notice,
              title: 'Notice'
            }
          ]
        },
        {
          path: '/info',
          name: 'Info',
          component: Info,
          title: 'Info',
          redirect: { name: 'FAQ' },
          children: [
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
        },
        {
          path: '/manage',
          name: 'Manage',
          component: Manage,
          title: 'Manage',
          redirect: { name: 'Account' },
          children: [
            {
              path: '/account',
              name: 'Account',
              component: Account,
              title: 'Account'
            },
            {
              path: '/menu',
              name: 'Menu',
              component: Menu,
              title: 'Menu'
            }
          ]
        },
        {
          path: '/pay',
          name: 'Pay',
          component: Pay,
          title: 'Pay',
          redirect: { name: 'Payment' },
          children: [
            {
              path: '/payment',
              name: 'Payment',
              component: Payment,
              title: 'Payment'
            }
          ]
        },
        {
          path: '/user',
          name: 'User',
          component: User,
          title: 'User',
          redirect: { name: 'UserInfo' },
          children: [
            {
              path: '/userInfo',
              name: 'UserInfo',
              component: UserInfo,
              title: 'UserInfo'
            }
          ]
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
