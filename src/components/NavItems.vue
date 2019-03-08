<template>
  <ul>
    <template v-for="(item, index) in items">
      <li v-if="item.title" :key="index">
        <span v-if="item.children">
          {{ item.title }}
        </span>

        <router-link v-else
          :to="{ name: item.name, params: item.customParams }">
          {{ item.title }}
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
