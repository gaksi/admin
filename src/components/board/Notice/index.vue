<template>
  <div>
    <div class="page-header"><h2 class="tit-con-layout">공지사항</h2></div>
    <div class="path">글 관리 <i class="xi-angle-right-min"></i> 공지사항 <span v-if="path !==''"> <i class="xi-angle-right-min"></i> {{ path }}</span></div>
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  data () {
    return {
      path: ''
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'NoticeRead') this.path = '상세보기'
      else if (to.name === 'NoticeForm' && this.$route.query.mode === 'edit') this.path = '공지사항 수정'
      else if (to.name === 'NoticeForm' && this.$route.query.mode === 'add') this.path = '공지사항 등록'
      else this.path = ''
    }
  }
}
</script>
<style>

</style>
