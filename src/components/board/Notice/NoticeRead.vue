<template>
  <div>
    <h3 class="tit-con-box">공지사항</h3>
    <div class="notice-write">
      <div class="form-group">
        <h4>고정 순서</h4>
        <p></p>
      </div>
      <div class="form-group">
        <h4>제목</h4>
        <p></p>
\      </div>
      <div class="form-group">
        <h4>내용</h4>
        <div></div>
      </div>
      <div class="btn-box">
        <router-link :to="{ name:'NoticeList' }" class="btn-basic btn-notice-list"> 목록 </router-link>
        <input type="button" class="btn-basic btn-notice-write-done'" value="완료">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NoticeForm',
  props: ['no'],
  computed: {

  }
}
</script>
<style>

</style>
