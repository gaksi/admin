<template>
  <div>
    <h3 class="tit-con-box">공지사항</h3>
    <div class="notice-write">
      <div class="form-group">
        <h4>고정 순서</h4>
        <p>{{ doneNoticeOne.fix_num }}</p>
      </div>
      <div class="form-group">
        <h4>제목</h4>
        <p>{{ doneNoticeOne.title }}</p>
      </div>
      <div class="form-group">
        <h4>내용</h4>
        <div>{{ doneNoticeOne.content }}</div>
      </div>
      <div class="btn-box">
        <router-link :to="{ name:'NoticeList' }"
                     class="btn-basic btn-notice-list">
          목록 </router-link>
        <input type="button" @click="editMode"
                     class="btn-basic btn-notice-write-done'" value="수정">
        <input type="button" @click="deleteNotice" class="btn-basic btn-notice-delete'" value="삭제">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Constant from '@/Constant'
export default {
  name: 'NoticeForm',
  data () {
    return {
      no: this.$route.params.no
    }
  },
  computed: {
    ...mapState([ 'notice' ]),
    ...mapGetters([ 'doneNoticeOne' ])
    /* doneNoticeOne: () => {
      return this.$store.getters.doneNoticeOne
    } */
  },
  created () {
    this.$store.dispatch(Constant.FETCH_ONE_NOTICE, { no: this.no })
  },
  methods: {
    deleteNotice: function () {
      this.$store.dispatch(Constant.DELETE_NOTICE, { no: this.no })
      this.$router.push({ name: 'NoticeList' })
    },
    editMode () {
      this.$store.dispatch(Constant.FETCH_ONE_NOTICE, { no: this.no })
      this.$store.commit(Constant.CHANGE_MODE, { mode: 'edit' })
      this.$router.push({ name: 'NoticeForm' })
    }
  }
}
</script>
<style>

</style>
