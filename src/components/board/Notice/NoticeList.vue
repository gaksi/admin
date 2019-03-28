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
            <button type="button" @click="navigate(list.id)">
            {{ list.title }}
            </button>
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
import { mapState } from 'vuex'

export default {
  name: 'Notice',
  computed: {
    ...mapState([ 'mode', 'noticeList' ]),
    notices: function () {
      return this.$store.getters.doneNotice
    }
  },
  mounted: function () {
    this.$store.dispatch(Constant.FETCH_NOTICE, { pageno: 0 })
  },
  methods: {
    navigate (no) {
      this.$router.push({ name: 'NoticeRead', params: { no: no } })
    }
  }
}
</script>
<style></style>
