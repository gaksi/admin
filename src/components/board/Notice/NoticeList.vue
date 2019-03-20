<template>
  <div>
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
        <tr v-for="list in notices" :key="list.id">
          <td>{{ list.id }}</td>
          <td>{{ list.fix_num }}</td>
          <td><p class="limit-width">
            <router-link to="/noticeRead">
            {{ list.title }}
            </router-link>
          </p></td>
          <td>{{ list.notice_time }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-box-big">
      <router-link :to="{ name: 'NoticeForm' }" class="btn-basic-big btn-notice-write"> 글쓰기 </router-link>
    </div>
  </div>
</template>

<script>
import Constant from '@/Constant'
import Vue from 'vue'
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'Notice',
  computed: {
    ...mapState([ 'mode', 'noticeList' ]),
    noticeData: function () {
      console.log(this.noticeList.notices.resData)
      return this.noticeList.notices.resData
    },
    notices: () => {
      /* console.log(this.noticeData())
      for (let i = 0; i < this.noticeData.length; i++) {
        this.noticeData[i].title = decodeURIComponent(this.noticeData[i].title)
        const timestemp = this.noticeData[i].notice_time * 1000
        const date = new Date(timestemp)
        this.noticeData[i].notice_time = moment(date, 'YY-MM-DD')
      }
      return this.noticeData */
      Vue.nextTick()
        .then(() => {
          setTimeout(() => {
            return this.noticeData.map((item) => {
              item.title = decodeURIComponent(item.title)
              const timestemp = item.notice_time * 1000
              const date = new Date(timestemp)
              item.notice_time = moment(date, 'YY-MM-DD')
            })
          })
        })
    }
  },
  mounted: function () {
    this.$store.dispatch(Constant.FETCH_NOTICE, { pageno: 0 })
    /*    const arrObj = [
      {
        title: 'title',
        contents: 'content'
      },
      {
        title: 'title2',
        contents: 'content2'
      }
    ]
    arrObj.map((item) => {
      item.title = 'newTitle'
      item.contents = 'newContents'
    }) */
  }
}
</script>
<style></style>
