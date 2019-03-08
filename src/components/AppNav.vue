<template>
  <nav id="nav">
    <nav-items
      :items="$router.options.routes" />
  </nav>
</template>

<script>
import NavItems from './NavItems'

export default {
  name: 'AppNav',
  components: {
    NavItems
  },
  mounted() {
    console.log(this.$router.options.routes)
  }
}
</script>

<style>

</style>
