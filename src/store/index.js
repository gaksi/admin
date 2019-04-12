import Vue from 'vue'
import Vuex from 'vuex'
import CONF from '../Config'
import axios from 'axios'
import Constant from '../Constant'
import moment from 'moment'
Vue.use(Vuex)

const state = {
/*  mode: 'add',
  notice: { id: 0, title: '', content: '', fix_num: -1, notice_time: 0 },
  noticeList: {
    pageno: 0, pagesize: CONF.PAGESIZE, totalcount: 0, notices: []
  } */
}

const getters = {
  /* doneNotice: state => {
    state.noticeList.notices.forEach((item) => {
      item.title = unescape(item.title)
      const timestemp = item.notice_time * 1000
      const date = new Date(timestemp)
      item.notice_time = moment(date).format('YY-MM-DD')
    })
    return state.noticeList.notices
  },
  doneNoticeOne: state => {
    console.log('done 실행')
    state.notice.title = unescape(state.notice.title)
    state.notice.content = unescape(state.notice.content)
    const timestemp = state.notice.notice_time * 1000
    const date = new Date(timestemp)
    state.notice.notice_time = moment(date).format('YY-MM-DD')
    return state.notice
  } */
}

const mutations = {
  /* [Constant.FETCH_NOTICE]: (state, payload) => {
    state.noticeList.notices = payload.notices
  },
  [Constant.FETCH_ONE_NOTICE]: (state, payload) => {
    state.notice = payload.notice[0]
  },
  [Constant.CLEAR_NOTICE]: (state) => {
    console.log('clear 실행')
    state.notice = { id: 0, title: '', content: '', fix_num: -1, notice_time: new Date().getTime() }
  },
  [Constant.CHANGE_MODE]: (state, payload) => {
    state.mode = payload.mode
  } */
}

const actions = {
/*  [Constant.FETCH_NOTICE]: (context, payload) => {
    axios.post(CONF.FETCH_NOTICE, {
      page: payload.pageno
    }).then((response) => {
      context.commit(Constant.FETCH_NOTICE, { notices: response.data.resData })
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
  [Constant.EDIT_NOTICE]: (context, payload) => {
    const currentPageNo = context.state.noticeList.pageno
    const notice = payload.notice
    axios.post(CONF.EDIT_NOTICE, {
      id: notice.id,
      title: notice.title,
      content: notice.content,
      fix_num: notice.fix_num
    })
      .then((response) => {
        if (response.data.status === 'success') {
          context.dispatch(Constant.FETCH_NOTICE, { pageno: currentPageNo })
        } else {
          console.log(response.data)
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
  },
  [Constant.DELETE_NOTICE]: (context, payload) => {
    const currentPageNo = context.state.noticeList.pageno
    axios.post(CONF.DELETE_NOTICE, {
      id: payload.no
    }).then(() => {
      context.dispatch(Constant.FETCH_NOTICE, { pageno: currentPageNo })
    })
  } */
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
