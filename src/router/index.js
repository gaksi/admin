import Vue from 'vue'
import Router from 'vue-router'

import AppAdmin from '@/components/Admin'
import AppLogin from '@/components/Login'

import User from '@/components/user/'
import UserInfo from '@/components/user/UserInfo'
import reportedUser from '@/components/user/reportedUser'

import Board from '@/components/board/'
import Notice from '@/components/board/Notice/'
import NoticeForm from '@/components/board/Notice/NoticeForm'
import NoticeList from '@/components/board/Notice/NoticeList'
import NoticeRead from '@/components/board/Notice/NoticeRead'
import Article from '@/components/board/Article/'
import FAQ from '@/components/board/FAQ/'
import Push from '@/components/board/Push/'

import Pay from '@/components/pay/'
import Payment from '@/components/pay/Payment'

import Info from '@/components/info/'
import Help from '@/components/info/Help'
import Policy from '@/components/info/Policy'

import Manage from '@/components/manage/'
import Account from '@/components/manage/Account'

import NotFoundPage from '@/views/NotFoundPage'

import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    },
    {
      path: '/',
      redirect: { name: 'Admin' }
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
            },
            {
              path: '/reportedUser',
              name: 'reportedUser',
              component: reportedUser,
              title: 'ReportedUser'
            }
          ]
        },
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
              title: 'Notice',
              sub: true,
              redirect: { name: 'NoticeList' },
              children: [
                {
                  path: '/notice/noticeList',
                  name: 'NoticeList',
                  component: NoticeList
                },
                {
                  path: '/notice/noticeForm',
                  name: 'NoticeForm',
                  component: NoticeForm
                },
                {
                  path: '/notice/:no',
                  name: 'NoticeRead',
                  component: NoticeRead
                }
              ]
            },
            {
              path: '/FAQ',
              name: 'FAQ',
              component: FAQ,
              title: 'FAQ',
              sub: true
            },
            {
              path: '/Push',
              name: 'Push',
              component: Push,
              title: 'Push',
              sub: true
            },
            {
              path: '/Article',
              name: 'Article',
              component: Article,
              title: 'Article',
              sub: true
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
            },
            {
              path: '/Policy',
              name: 'Policy',
              component: Policy,
              title: 'Policy'
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

router.beforeEach((to, from, next) => {
  let requireAuth = to.matched.some(record => record.meta.requiresAuth) // 같은 경로로 반복 이동 하였을 때

  // https://firebase.google.com/docs/auth/web/manage-users
  firebase.auth().onAuthStateChanged(user => {
    if (!user && requireAuth) {
      next({ name: 'Login' })
    } else if (user && !requireAuth) {
      next({ name: 'Admin' })
    } else {
      next()
    }
  })
})

export default router
