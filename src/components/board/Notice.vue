<template>
  <div class="hello">
    <div class="page-header"><h2 class="tit-con-layout">Notice</h2></div>
    <div class="content-box">
      <h3 class="tit-con-box">공자사항 목록</h3>
      <table class="tb-normal">
        <colgroup>
          <col width="60px">
          <col width="60px">
          <col width="*">
          <col width="150px">
        </colgroup>
        <thead>
        <tr>
          <th>구분</th>
          <th>고정</th>
          <th>제목</th>
          <th>날짜</th>
        </tr>
        </thead>
        <tbody class="notice-tbody">
          <tr>
            <td>{{}}</td>
          </tr>
        </tbody>
      </table>
      <div class="btn-box">
        <button type="button" class="btn-basic btn-notice-write"> 글쓰기 </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome',
  data: function () {
    return { noticeList: [] }
  },
  methods: {
    fetchNoticeList: function () {

    }
  }

}
</script>
<style>

</style>
