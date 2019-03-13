<template>
  <nav>
    <router-link :to="{ name: 'Admin' }" class="logo">
      <img src="../assets/logo.png" alt="오늘당장 로고">
    </router-link>
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
  mounted () {
    console.log(this.$router.options.routes)
  }
}
</script>

<style>
.logo {
  width: 100px; text-align:center; margin:0 auto; display:block;
  padding:20px 0
}
.logo img { width: 100%; }

</style>
