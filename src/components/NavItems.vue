<template>
  <ul class="gnb">
    <template v-for="(item, index) in items">
      <li :key="index">
        <span v-if="item.children">
          {{ item.title }}
        </span>
        <router-link v-else
          :to="{ name: item.name }">
          <i class="xi-command icon-left"></i> {{ item.title }}
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
  },
  mounted () {
    console.log(this.items)
  }
}
</script>
<style>
  .gnb a {
    color: #cedce4; display: block;
    padding: 10px 30px; font-size: 14px;
    position: relative; -webkit-transition: all .4s;
    transition: all .4s;
  }
  .gnb a:hover { color:#fff; }
  .gnb a.router-link-exact-active { color:#fff; }
  .icon-left { display:inline-block; margin:-2px 5px 0 0 ; font-size:12px; }
  .right-arrow {
    position:absolute; top:15px; right:27px
  }
</style>
