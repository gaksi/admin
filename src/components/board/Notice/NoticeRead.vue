<template>
  <div>
    <h3 class="tit-con-box">{{ headingText }}</h3>
    <div class="notice-write">
      <!--<h3 class="tit-contents">공지사항 글쓰기</h3>-->
      <table class="tb-normal2">
        <colgroup>
          <col width="12%">
          <col width="38%">
          <col width="12%">
          <col width="38%">
        </colgroup>
        <tbody>
        <tr>
          <th class="tit-contents"><label for="index">고정 여부</label></th>
          <td>
            <label for="fix">고정 </label>
            <input type="radio" id="fix" name="fix" value="fix" v-model="fixed">
            <label for="nonFix">고정 안 함 </label>
            <input type="radio" id="nonFix" name="fix" value="nonfix" checked="checked" v-model="fixed">
          </td>
          <th><label for="index">고정 순서</label></th>
          <td>
            <input type="text" id="index" class="inp-text-s" maxlength="3" :disabled="disabled"
                   v-model="notice.fix_num">
            (0~N 숫자만 써주세요)
          </td>
        </tr>
        <tr>
          <th><label for="notice-title">제목</label></th>
          <td colspan="3">
            <input type="text" id="notice-title" class="inp-text2" v-model="notice.title">
          </td>
        </tr>
        <tr>
          <th><label for="notice-contents">내용</label></th>
          <td colspan="3">
            <textarea id="notice-contents" class="txt-area02" cols="30" rows="10"
            v-model="notice.content"></textarea>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="btn-box">
        <router-link :to="{ name:'NoticeList' }" class="btn-basic btn-notice-list"> 목록 </router-link>
        <input type="button" @click="submitEvent()"
               class="btn-basic btn-notice-write-done'" value="완료">
      </div>
    </div>
  </div>
</template>

<script>
import Constant from '@/Constant'
import { mapState } from 'vuex'

export default {
  name: 'NoticeForm',
  data () {
    return {
      fixed: ''
    }
  },
  computed: {
    disabled () {
      return this.fixed !== 'fix'
    },
    headingText: function () {
      if (this.mode !== 'edit') return '새로운 공지사항 추가'
      else return '공지사항 수정'
    },
    ...mapState([ 'mode', 'notice' ])
  },
  methods: {
    submitEvent: function () {
      if (this.mode === 'edit') {
        this.$store.dispatch(Constant.EDIT_NOTICE)
      } else {
        this.$store.dispatch(Constant.ADD_NOTICE)
      }
    }
  }
}
</script>
<style>

</style>
