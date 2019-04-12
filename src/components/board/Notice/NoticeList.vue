<template>
  <div>
    <h3 class="tit-con-box">공자사항 목록</h3>
    <table class="tb-normal">
      <colgroup>
        <col width="60px">
        <col width="80px">
        <col width="*">
        <col width="150px">
      </colgroup>
      <thead>
      <tr>
        <th>구분</th>
        <th>고정</th>
        <th>제목</th>
        <th>날짜</th>
      </tr>
      </thead>
      <tbody class="notice-tbody">
        <tr v-for="list in notices" :key="list.id">
          <td>{{ list.id }}</td>
          <td>{{ list.fix_num }} 번째</td>
          <td><p class="limit-width">
            <button type="button" @click="navigate(list.id)">
            {{ list.title }}
            </button>
          </p></td>
          <td>{{ list.notice_time }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-box-big">
      <button type="button" @click="addMode"
                   class="btn-basic-big btn-notice-write">
        글쓰기 </button>
    </div>
  </div>
</template>

<script>
import CONF from '@/Config'
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Notice',
  data () {
    return {
      noticeList: {
        pageno: 0, pagesize: CONF.PAGESIZE, totalcount: 0, notices: []
      }
    }
  },
  created () {
    axios.post(CONF.FETCH_NOTICE, {
      page: this.noticeList.pageno
    }).then((response) => {
      this.noticeList.notices = response.data.resData
    }).catch((err) => {
      console.log(err)
    })
  },
  computed: {
    notices: function () {
      this.noticeList.notices.forEach((item) => {
        item.title = unescape(item.title)
        const timestemp = item.notice_time * 1000
        const date = new Date(timestemp)
        item.notice_time = moment(date).format('YY-MM-DD')
      })
      return this.noticeList.notices
    }
  },
  methods: {
    navigate (no) {
      this.$router.push({ name: 'NoticeRead', params: { no: no } })
    },
    addMode () {
      this.$router.push({ name: 'NoticeForm', query: { mode: 'add' } })
    }
  }
}
</script>
<style></style>
