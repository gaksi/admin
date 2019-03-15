import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import ES6Promise from 'es6-promise'
import axios from 'axios'

Vue.use(router)

ES6Promise.polyfill()
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
