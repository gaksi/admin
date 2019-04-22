<template>
  <div>
    <button type="button" @click="addMode"
            class="btn-basic btn-right btn-notice-write">
      <i class="xi-pen"></i> 등록 </button>
    <table class="tb-normal">
      <colgroup>
        <col width="50px">
        <col width="140px">
        <col width="*">
        <col width="110px">
        <col width="60px">
      </colgroup>
      <thead>
      <tr>
        <th>번호</th>
        <th>등록자</th>
        <th>제목</th>
        <th>등록일자</th>
        <th>조횟수</th>
      </tr>
      </thead>
      <tbody class="notice-tbody">
        <tr v-for="list in notices" :key="list.id">
          <td>{{ list.id }}</td>
          <td>deong rok ja</td>
          <td><p class="limit-width">
            <button type="button" @click="navigate(list.id)">
            {{ list.title }}
            </button>
          </p></td>
          <td>{{ list.notice_time }}</td>
          <td>999</td>
        </tr>
      </tbody>
    </table>
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
