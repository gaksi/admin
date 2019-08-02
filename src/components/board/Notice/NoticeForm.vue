<template>
  <div>
    <div class="notice-write">
      <div class="clearfix divided">
        <div class="form-group">
          <h3><label for="notice-title">제목</label></h3>
          <input type="text" id="notice-title" class="inp-text2" v-model="notice.title">
        </div>
        <div class="form-group">
          <h3><label for="notice-name">작성자</label></h3>
          <input type="text" id="notice-name" class="inp-text2" v-model="notice.name">
        </div>
      </div>
      <div class="form-group">
        <h3><label for="notice-contents">내용</label></h3>
        <vue-editor v-model="notice.content"
                    :editorToolbar="customToolbar"
                    id="notice-contents"
        ></vue-editor>
      </div>
      <div class="btn-box">
        <router-link :to="{ name:'NoticeList' }" class="btn-basic btn-notice-list">
          <i class="xi-list"></i> 목록 </router-link>
        <button type="button" @click="submitEvent()"
                class="btn-done btn-notice-write-done'"><i class="xi-check"></i> 완료</button>

      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { db } from '@/firebase.js'

export default {
  name: 'NoticeForm',
  components: {
    VueEditor
  },
  props: [
    'item'
  ],
  data () {
    return {
      no: this.$route.query.no,
      mode: this.$route.query.mode,
      notice: { id: 0, name: '', title: '', content: '', notice_time: 0 },
      customToolbar: [
        ['bold', 'underline'],
        [{ 'color': [] }], [ 'link' ]
      ]
    }
  },
  created () {
    if (this.mode === 'edit') {
      console.log(this.item)
      this.notice = this.item
    }
  },

  methods: {
    submitEvent () {
      if (this.mode === 'edit') {
        this.$router.push({ name: 'NoticeList' })
      } else {
        console.log('add NOtice 실행' + this.notice)
        const noticeIn2 = {
          title: this.notice.title,
          name: this.notice.name,
          content: this.notice.content,
          num: new Date()
        }
        console.log(noticeIn2)
        db.collection('notice').add(noticeIn2)
        this.$router.push({ name: 'NoticeList' })
      }
    }
  }
}
</script>
<style>
</style>
