import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '../components/etc/Home'
import Notice from '../components/etc/Notice'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppHome,
      alias: ['/home', '/main']
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
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

export default router
