import Vue from 'vue'
import Vuex from 'vuex'
import CONF from '../Config'
import axios from 'axios'
import Constant from '../Constant'
import moment from 'moment'
Vue.use(Vuex)

const state = {
  mode: 'add',
  notice: { id: 0, title: '', content: '', fix_num: 0, notice_time: 0 },
  noticeList: {
    pageno: 0, pagesize: CONF.PAGESIZE, totalcount: 0, notices: []
  }
}

const getters = {
  doneNotice: state => {
    state.noticeList.notices.map((item) => {
      item.title = unescape(item.title)
      const timestemp = item.notice_time * 1000
      const date = new Date(timestemp)
      item.notice_time = moment(date).format('YY-MM-DD')
    })
    return state.noticeList.notices
  }
}

const mutations = {
  [Constant.FETCH_NOTICE]: (state, payload) => {
    state.noticeList.notices = payload.notices
  },
  [Constant.FETCH_ONE_NOTICE]: (state, payload) => {
    state.notice = payload.notice[0]
    console.log(payload.notice)
  }
}

const actions = {
  [Constant.FETCH_NOTICE]: (context, payload) => {
    axios.post(CONF.FETCH_NOTICE, {
      page: payload.pageno
    }).then((response) => {
      context.commit(Constant.FETCH_NOTICE, { notices: response.data.resData })
      return 0
    }).then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  },
  [Constant.FETCH_ONE_NOTICE]: (context, payload) => {
    axios.post(CONF.FETCH_ONE_NOTICE, {
      id: payload.no
    }).then((response) => {
      context.commit(Constant.FETCH_ONE_NOTICE, { notice: response.data.resData })
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
