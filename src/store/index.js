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
    pageno: 0, pagesize: CONF.PAGESIZE, totalcount: 0, notices: []
  }
}

const getters = {
}

const mutations = {
  [Constant.FETCH_NOTICE]: (state, payload) => {
    state.noticeList.notices = payload.notices
  }
}

const actions = {
  [Constant.FETCH_NOTICE]: (context, payload) => {
    axios.post(CONF.FETCH_NOTICE, {
      page: payload.pageno
    }).then((response) => {
      context.commit(Constant.FETCH_NOTICE, { notices: response.data })
    }).catch((err) => {
      console.log(err)
    })
  },
  [Constant.EDIT_NOTICE]: (context) => {
    const currentPageNo = context.state.noticeList.pageno
    const notice = context.state.notice
    axios.post(CONF.EDIT_NOTICE, notice)
      .then((response) => {
        if (response.data.status === 'success') {
          context.dispatch(Constant.FETCH_NOTICE, { pageno: currentPageNo })
        } else {
          console.log('공지사항 변경 실패: ' + response.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  [Constant.ADD_NOTICE]: (context) => {
    axios.post(CONF.ADD_NOTICE, context.state.notice)
      .then((response) => {
        if (response.data.status === 'success') {
          context.dispatch(Constant.FETCH_NOTICE, { pageno: 1 })
        } else {
          console.log(response.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
