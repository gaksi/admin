<template>
  <div class="hello">
    <div class="page-header"><h2 class="tit-con-layout">Notice</h2></div>
    <div class="content-box">
      <h3 class="tit-con-box">공자사항 목록</h3>
      <table class="tb-normal">
        <colgroup>
          <col width="60px">
          <col width="60px">
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
          <tr v-for="list in noticeList.notice" :key="list.id">
            <td>{{ list.id }}</td>
            <td>{{ list.insertId }}</td>
            <td>{{ list.title }}</td>
            <td>{{ list.notice_time }}</td>
          </tr>
        </tbody>
      </table>
      <div class="btn-box">
        <button type="button" class="btn-basic btn-notice-write"> 글쓰기 </button>
      </div>
    </div>
  </div>
</template>

<script>
import CONF from '../../Config.js'
export default {
  name: 'AppHome',
  data: function () {
    return {
      target_notice: { id: 0, title: '', content: '', notice_time: 0, insertId: 0 },
      noticeList: {
        pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, notice: []
      }
    }
  },
  created () {
    this.fetchNotice()
  },
  methods: {
    fetchNotice: function () {
      this.$axios.post(CONF.FETCH, { page: this.noticeList.pageno })
        .then((response) => {
          this.noticeList.notice = response.data
        })
        .catch((ex) => {
          console.log('fetchContacts failed', ex)
          this.noticeList.notice = []
        })
    }
  }

}
</script>
<style>

</style>
