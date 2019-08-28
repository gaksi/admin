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
        <div class="content-show" v-html="notice.content"></div>
      </div>
      <div class="btn-box">
        <router-link :to="{ name:'NoticeList' }"
                     class="btn-basic btn-notice-list"><i class="xi-list"></i>
          목록 </router-link>
            <button type="button" @click="editMode"
                class="btn-basic btn-notice-write-done'" ><i class="xi-pen"></i> 수정</button>
        <button type="button" class="btn-delete btn-notice-delete'" @click="deleteRowById(id)">
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
import moment from 'moment'

const confirmDelete = create(AppDialog, 'title', 'description')
// const confirmDelete2 = create(AppDialog)



export default {
  name: 'NoticeForm',
  data () {
    return {
      id: this.$route.params.no,
      notice: { title: '', content: '', date: '', name: '' }
    }
  },
  created () {
    var docRef = db.collection('notice').doc(this.$route.params.no)
    let vm = this
    docRef.get().then(function (doc) {
      if (doc.exists) {
        doc.data().date = moment(doc.data().date).format('YYYY-MM-YY')
        vm.notice = doc.data()
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }).catch(function (error) {
      console.log('Error getting document:', error)
    })
},
  methods: {
    deleteRowById: function (id) {
      var result = confirm('삭제하시겠습니까?')
      if (result) {
        db.collection('notice').doc(id).delete()
      }
      this.$router.push({
        name: 'NoticeList'
      })
    },
    editMode () {
      this.$router.push({
        name: 'NoticeForm',
        query: { mode: 'edit', no: this.id },
        params: { item: this.notice }
      })
    }
  }
}
</script>
<style>

</style>
