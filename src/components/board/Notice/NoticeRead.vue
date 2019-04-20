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
        <div class="content-show" v-html="doneNoticeOne.content"></div>
      </div>
      <div class="btn-box">
        <router-link :to="{ name:'NoticeList' }"
                     class="btn-basic btn-notice-list"><i class="xi-list"></i>
          목록 </router-link>
        <button type="button" @click="editMode"
                class="btn-basic btn-notice-write-done'" ><i class="xi-pen"></i> 수정</button>
        <button type="button" @click="deleteNotice" class="btn-delete btn-notice-delete'">
          <i class="xi-trash-o"></i> 삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import CONF from '@/Config'
import moment from 'moment'
import { create } from 'vue-modal-dialogs'
import AppDialog from '@/components/dialog/AppDialog'

const confirmDelete = create(AppDialog, 'title', 'description')
// const confirmDelete2 = create(AppDialog)

export default {
  name: 'NoticeForm',
  data () {
    return {
      no: this.$route.params.no,
      notice: { id: 0, title: '', content: '', fix_num: -1, notice_time: 0 }
    }
  },
  computed: {
    doneNoticeOne: function () {
      const timestemp = this.notice.notice_time * 1000
      const date = new Date(timestemp)
      return {
        id: this.notice.id,
        title: unescape(this.notice.title),
        content: unescape(this.notice.content),
        fix_num: this.notice.fix_num,
        notice_time: moment(date).format('YY-MM-DD')
      }
    }
  },
  created () {
    axios.post(CONF.FETCH_ONE_NOTICE, {
      id: this.no
    }).then((response) => {
      this.notice = response.data.resData[0]
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    deleteNotice: function () {
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
    },
    editMode () {
      this.$router.push({ name: 'NoticeForm', query: { mode: 'edit', no: this.no },
        params: { item: this.doneNoticeOne }})
    }
  }
}
</script>
<style>

</style>
