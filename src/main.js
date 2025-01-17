import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import ES6Promise from 'es6-promise'
import axios from 'axios'
import * as ModalDialogs from 'vue-modal-dialogs'

import 'firebase'
import { firestorePlugin } from 'vuefire'

Vue.use(router)
Vue.use(ModalDialogs)
Vue.use(firestorePlugin)

ES6Promise.polyfill()
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
