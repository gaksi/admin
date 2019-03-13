import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../Constant'
Vue.use(Vuex)

const state = {
  currentView: 'AppLogin'
}

const getters = {
}

const mutations = {
  [Constant.LOGIN]: (state) => {
    state.currentView = 'AppAdmin'
  }
}

const actions = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
