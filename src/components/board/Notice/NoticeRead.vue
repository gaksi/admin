<template>
<div>
    <div class="notice-write">
      <div class="form-group">
        <h3>제목</h3>
        <p>{{ doneNoticeOne2[0].title }}</p>
      </div>
      <div class="form-group">
        <h3>작성자</h3>
        <p>{{ doneNoticeOne2[0].name }}</p>
      </div>
      <div class="form-group">
        <h3>조회수</h3>
        <p>{{ doneNoticeOne2[0].hits }}</p>
      </div>
      <div class="form-group">
        <h3>작성일</h3>
        <p>{{ doneNoticeOne2[0].date }}</p>
      </div>
      <div class="form-group">
        <h3>내용</h3>
        <div class="content-show" v-text="doneNoticeOne2[0].content"></div>
      </div>
      <div class="btn-box">
        <router-link :to="{ name:'NoticeList' }"
                     class="btn-basic btn-notice-list"><i class="xi-list"></i>
          목록 </router-link>
        <button type="button" @click="editMode"
                class="btn-basic btn-notice-write-done'" ><i class="xi-pen"></i> 수정</button>
        <button type="button" class="btn-delete btn-notice-delete'">
          <i class="xi-trash-o"></i> 삭제 <!-- @click="deleteNotice"-->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { create } from 'vue-modal-dialogs'
import AppDialog from '@/components/dialog/AppDialog'
import { db } from '@/firebase.js'

const confirmDelete = create(AppDialog, 'title', 'description')
// const confirmDelete2 = create(AppDialog)

export default {
  name: 'NoticeForm',
  data () {
    return {
      no: this.$route.params.no,
      num: 0,
      notice2: [0, { title: '', num: '', content: '', hits: 0, date: '', name: '' }]
    }
  },
  firestore: {
    notice2: db.collection('notice')
  },
  computed: {
    doneNoticeOne2: function () {
      console.log(this.notice2)
      return this.notice2.filter((item, index) => {
        return item.num === String(this.num)
      })
    }
  },
  methods: {
/*    deleteNotice: function () {
      confirmDelete('Delete notice', 'Are you sure you want to delete...?').then(yes => {
        if (yes) {
          axios.post(CONF.DELETE_NOTICE, {
            id: this.no
          }).then(() => {
            console.log('delete')
          }).catch((err) => {
            console.log(err)
          })
          this.$router.push({ name: 'NoticeList' })
        }
      })
    },*/
    editMode () {
      this.$router.push({ name: 'NoticeForm', query: { mode: 'edit', no: this.no },
        params: { item: this.doneNoticeOne } })
    }
  }
}
</script>
<style>

</style>
