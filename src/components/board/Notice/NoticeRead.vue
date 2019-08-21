<template>
<div>
    <div class="notice-write">
      <div class="form-group">
        <h3>제목</h3>
        <p>{{notice.title }}</p>
      </div>
      <div class="form-group">
        <h3>작성자</h3>
        <p>{{notice.name }}</p>
      </div>
      <div class="form-group">
        <h3>작성일</h3>
        <p>{{notice.date }}</p>
      </div>
      <div class="form-group">
        <h3>내용</h3>
        <div class="content-show">{{notice.content}}</div>
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
      num: this.$route.params.no,
      notice: { title: '', content: '', date: '', name: '' }
    }
  },
  created () {
    var docRef = db.collection('notice').doc(this.$route.params.no)
    let vm = this
    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log(doc.data())
        vm.notice = doc.data()
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }).catch(function (error) {
      console.log('Error getting document:', error)
    })
    console.log(this.notice)

},
/*  firestore: {
    notice: db.collection('notice')
      .doc('8X59UVeetMa5rPwDplAQ')
      .get()
      .then(snapshot => {
        return snapshot.data()
        // do something with document
      })
  },*/
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
      this.$router.push({ name: 'NoticeForm', query: { mode: 'edit', no: this.id },
        params: { item: this.doneNoticeOne2 } })
    }
  }
}
</script>
<style>

</style>
