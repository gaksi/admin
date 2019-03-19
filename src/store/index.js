import Vue from 'vue'
import Vuex from 'vuex'
import CONF from '../Config'
import axios from 'axios'
import Constant from '../Constant'
Vue.use(Vuex)

const state = {
  mode: 'add',
  notice: { id: 0, title: '', content: '', fix_num: 0, notice_time: 0 },
  noticeList: {
    pageno: 0, pagesize: CONF.PAGESIZE, totalcount: 0, notice: []
  }
}

const getters = {
}

const mutations = {
  [Constant.FETCH_NOTICE]: (state, payload) => {
    state.noticeList.notice = payload.noticeList
  }
}

const actions = {
  [Constant.FETCH_NOTICE]: (context, payload) => {
    axios.post(CONF.NOTICE_FETCH, {
      params: { page: payload.pageno }
    }).then((response) => {
      context.commit(Constant.FETCH_NOTICE, { noticeList: response.data })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
