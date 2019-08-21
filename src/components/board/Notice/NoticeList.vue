<template>
  <div>
    <button type="button" @click="addMode"
            class="btn-basic btn-right btn-notice-write">
      <i class="xi-pen"></i> 등록 </button>
    <table class="tb-normal">
      <colgroup>
        <col width="200px">
        <col width="*">
        <col width="150px">
      </colgroup>
      <thead>
      <tr>
        <th>등록자</th>
        <th>제목</th>
        <th>등록일자</th>
      </tr>
      </thead>
      <tbody class="notice-tbody">
        <tr v-for="noti in notices2" :key="noti.id">
          <td>{{ noti.name }}</td>
          <td><p class="limit-width">
            <button type="button" @click="navigate(noti.id)">
              {{ noti.title }}
            </button>
          </p></td>
          <td>{{ noti.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '@/firebase.js'

export default {
  name: 'Notice',
  data () {
    return {
      notices2: []
    }
  },
  firestore: {
    notices2: db.collection('notice')
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
