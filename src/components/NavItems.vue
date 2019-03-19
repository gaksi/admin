<template>
  <ul class="gnb">
    <template v-for="(item, index) in items">
      <li v-if="item.title" :key="index">
        <span v-if="item.children && !item.sub" class="tit-nav">
          {{ item.title }}
        </span>
        <router-link v-else
          :to="{ name: item.name }">
          <i class="xi-night icon-left"></i> {{ item.title }}
          <i class="xi-angle-right-min right-arrow"></i>
        </router-link>
        <nav-items v-if="item.children"
          :items="item.children"
          :depth="depth + 1" />
      </li>
    </template>
  </ul>
</template>

<script>
import NavItems from './NavItems'

export default {
  name: 'NavItems',
  components: {
    NavItems
  },
  props: {
    items: Array,
    depth: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style>
  .gnb { margin-bottom:30px; }
  .tit-nav {
    padding:0 30px; margin-bottom:10px; letter-spacing: .05em;
    pointer-events: none; cursor: default;
    font-size: 11px; text-transform: uppercase;
    color: #cedce4; font-weight: 700; display:block;
  }
  .gnb a {
    color: #cedce4; display: block;
    padding: 7.5px 30px; font-size: 16px;
    position: relative;
  }
  .gnb a:hover { color:#fff; }
  .gnb a:hover .icon-left { transform:rotate(360deg); transition:all .5s }
  .gnb a.router-link-exact-active { color:#fff; }
  .gnb a.router-link-active { color:#fff; }
  .gnb a.act { color:#fff; }
  .icon-left { display:inline-block; margin:-5px 5px 0 0 ; font-size:12px; }

  .right-arrow {
    position:absolute; top:12px; right:27px
  }
</style>
