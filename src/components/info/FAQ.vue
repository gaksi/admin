<template>
  <div class="hello">
    <div class="page-header"><h2 class="tit-con-layout">FAQ</h2></div>
    <div class="content-box">
      <p>관리자 페이지 첫번째 페이지엔 무엇이 들어가는 걸까</p>
      <vue-editor v-model="content"
                  :editorToolbar="customToolbar"
      ></vue-editor>
      <div>{{ content }}</div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  name: 'FAQ',
  components: {
    VueEditor
  },
  data () {
    return {
      customToolbar: [
        ['bold', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'color': [] }], [ 'link' ]
      ],
      content: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
