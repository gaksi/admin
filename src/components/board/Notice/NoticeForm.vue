<template>
  <div>
    <h3 class="tit-con-box">{{ headingText }}</h3>
    <div class="notice-write">
      <!--<h3 class="tit-contents">공지사항 글쓰기</h3>-->
      <div class="clearfix divided">
        <div class="form-group">
          <h4><label for="index">고정 여부</label></h4>
          <input type="radio" id="isFix" name="fix" value="fix" v-model="fixed">
          <label for="isFix">고정 </label>
          <input type="radio" id="nonFix" name="fix" value="nonfix" checked v-model="fixed">
          <label for="nonFix"> 고정 안 함 </label>
        </div>
        <div class="form-group">
          <h4><label for="index">고정 순서</label></h4>
          <input type="text" id="index" class="inp-text-s" maxlength="3" :disabled="disabled"
                 v-model="doneNoticeOne.fix_num">
          (0~N 숫자만 써주세요)
        </div>
      </div>
      <div class="form-group">
        <h4><label for="notice-title">제목</label></h4>
        <input type="text" id="notice-title" class="inp-text2" v-model="doneNoticeOne.title">
      </div>
      <div class="form-group">
        <h4><label for="notice-contents">내용</label></h4>
        <vue-editor v-model="doneNoticeOne.content"
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
import Constant from '@/Constant'
import { mapState, mapGetters } from 'vuex'
import { VueEditor } from 'vue2-editor'
// import moment from 'moment'

export default {
  name: 'NoticeForm',
  components: {
    VueEditor
  },
  data () {
    return {
      fixed: 'nonfix',
      customToolbar: [
        ['bold', 'underline'],
        [{ 'color': [] }], [ 'link' ]
      ]
    }
  },
  computed: {
    ...mapState([ 'mode', 'notice' ]),
    ...mapGetters([ 'doneNoticeOne' ]),
    disabled: function () {
      return this.fixed !== 'fix'
    },
    headingText: function () {
      if (this.mode !== 'edit') return '새로운 공지사항 추가'
      else return '공지사항 수정'
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
        this.$store.dispatch(Constant.EDIT_NOTICE, { notice: this.notice })
        this.$router.push({ name: 'NoticeList' })
      } else {
        console.log(this.notice)
        const date = new Date().getTime()
        const noticeIn = {
          id: this.notice.id,
          title: escape(this.notice.title),
          content: escape(this.notice.content),
          fix_num: this.notice.fix_num,
          notice_time: date
        }
        console.log(noticeIn)
        this.$store.dispatch(Constant.ADD_NOTICE, { notice: noticeIn })
        this.$router.push({ name: 'NoticeList' })
      }
    }
  },
  mounted () {
    console.log(this.doneNoticeOne)
    if (this.mode === 'add') {
      this.$store.commit(Constant.CLEAR_NOTICE)
    } else {

    }
  }
}
</script>
<style>
</style>
