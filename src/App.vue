<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </div>
    <div id="container">
      <app-nav />
      <div id="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import AppNav from './components/AppNav'

export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>
<style lang="scss">
  body {
    margin: 0;
    font-family: Arial, 'Malgun Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    font-size: 14px;
    line-height: 1.4;
    color: #2c3e50;
  }
  h1 {
    margin: 20px;
    font-size: 24px;

    img {
      vertical-align: middle;
    }
  }
  h2 {
    font-size: 18px;
    margin: 0.6em 0;
  }
  h3 {
    font-size: 16px;
    margin: 0.6em 0;
  }
  h4 {
    font-size: 14px;
    margin: 0.6em 0;
  }
  p {
    margin: 0.6em 0
  }
  ul {
    padding: 0 20px;

    ul {
      padding-right: 0;
    }
  }
  a {
    color: inherit;
  }
  .router-link-exact-active {
    color: blue;
  }
  #container::after {
    content: '';
    display: block;
    clear: both;
  }
  #nav {
    float: left;
    padding-left: 10px;

    > ul {
      margin-top: 0;
    }
  }
  #content {
    overflow: hidden;

    h2:first-of-type {
      margin-top: 0;
    }
  }
  .item {
    padding: 10px;
    border: 1px solid #eee;
    margin: 10px 0;
  }
  .child {
    padding: 10px;
  }
  .action {
    padding-top: 10px;
  }
</style>
