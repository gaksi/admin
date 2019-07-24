<template>
  <div>
    <div class="notice-write">
      <div class="clearfix divided">
        <div class="form-group">
          <h3><label for="index">고정 여부</label></h3>
          <input type="radio" id="isFix" name="fix" value="fix" v-model="fixed">
          <label for="isFix">고정 </label>
          <input type="radio" id="nonFix" name="fix" value="nonfix" checked v-model="fixed">
          <label for="nonFix"> 고정 안 함 </label>
        </div>
        <div class="form-group">
          <h3><label for="index">고정 순서</label></h3>
          <input type="text" id="index" class="inp-text-s" maxlength="3" :disabled="disabled"
                 v-model="notice.fix_num">
          (0~N 숫자만 써주세요)
        </div>
      </div>
      <div class="form-group">
        <h3><label for="notice-title">제목</label></h3>
        <input type="text" id="notice-title" class="inp-text2" v-model="notice.title">
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
import axios from 'axios'
import CONF from '@/Config'
import moment from 'moment'
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
      fixed: 'nonfix',
      no: this.$route.query.no,
      mode: this.$route.query.mode,
      notice: { id: 0, title: '', content: '', fix_num: -1, notice_time: 0 },
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
  computed: {
    doneNoticeOne: function () {
      if (this.mode === 'edit') {
        const timestemp = this.notice.notice_time * 1000
        const date = new Date(timestemp)
        this.notice.title = unescape(this.notice.title)
        this.notice.content = unescape(this.notice.content)
        this.notice.notice_time = moment(date).format('YY-MM-DD')
        return {
          id: this.notice.id,
          title: unescape(this.notice.title),
          content: unescape(this.notice.content),
          fix_num: this.notice.fix_num,
          notice_time: moment(date).format('YY-MM-DD')
        }
      } else {
        return { id: 0, title: '', content: '', fix_num: -1, notice_time: 0 }
      }
    },
    disabled: function () {
      return this.fixed !== 'fix'
    },
    fix_num: function () {
      console.log(this.fixed)
      if (this.fixed !== 'fix') {
        return 0
      } else {
        return this.fixed
      }
    }
  },
  methods: {
    submitEvent () {
      if (this.mode === 'edit') {
        axios.post(CONF.EDIT_NOTICE, {
          id: this.notice.id,
          title: this.notice.title,
          content: this.notice.content,
          fix_num: this.notice.fix_num
        })
          .then((response) => {
            if (response.data.status === 'success') {
              console.log(response.data.status)
            } else {
              console.log(response.data)
            }
          })
          .catch((err) => {
            console.log(err)
          })
        this.$router.push({ name: 'NoticeList' })
      } else {
        console.log('add NOtice 실행' + this.notice)
        const noticeIn = {
          title: escape(this.notice.title),
          content: escape(this.notice.content),
          fix_num: this.notice.fix_num
        }
        console.log('보내는 내용은')
        console.log(noticeIn)
        axios.post(CONF.ADD_NOTICE, noticeIn)
          .then((response) => {
            if (response.data.status === 'success') {
              console.log(response.data.resData.insertId)
            } else {
              console.log(response.data)
            }
          })
          .catch((err) => {
            console.log(err)
          })
        this.$router.push({ name: 'NoticeList' })
      }
    }
  }
}
</script>
<style>
</style>
