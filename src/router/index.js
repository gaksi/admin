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
          title: '회원관리',
          redirect: { name: 'UserInfo' },
          children: [
            {
              path: '/userInfo',
              name: 'UserInfo',
              component: UserInfo,
              title: '회원 통합 관리'
            },
            {
              path: '/reportedUser',
              name: 'reportedUser',
              component: reportedUser,
              title: '신고 유저 관리'
            }
          ]
        },
        {
          path: '/board',
          name: 'Board',
          component: Board,
          title: '글 관리',
          redirect: { name: 'Notice' },
          children: [
            {
              path: '/notice',
              name: 'Notice',
              component: Notice,
              title: '공지사항 관리',
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
                  component: NoticeForm,
                  props: true
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
              title: 'FAQ 관리',
              sub: true
            },
            {
              path: '/push',
              name: 'Push',
              component: Push,
              title: '푸시 관리',
              sub: true
            },
            {
              path: '/article',
              name: 'Article',
              component: Article,
              title: '세부페이지 글 관리',
              sub: true
            }
          ]
        },
        {
          path: '/info',
          name: 'Info',
          component: Info,
          title: '고객센터',
          redirect: { name: 'Help' },
          children: [
            {
              path: '/help',
              name: 'Help',
              component: Help,
              title: '1:1 문의 관리'
            },
            {
              path: '/policy',
              name: 'Policy',
              component: Policy,
              title: '정책'
            }
          ]
        },
        {
          path: '/manage',
          name: 'Manage',
          component: Manage,
          title: '권한 관리',
          redirect: { name: 'Account' },
          children: [
            {
              path: '/account',
              name: 'Account',
              component: Account,
              title: '관리자 계정 관리'
            }
          ]
        },
        {
          path: '/pay',
          name: 'Pay',
          component: Pay,
          title: '결제 관리',
          redirect: { name: 'Payment' },
          children: [
            {
              path: '/payment',
              name: 'Payment',
              component: Payment,
              title: '결제내역 관리'
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
