<template>
  <div>
  <app-nav />
  <div class="content-layout">
    <header>
      <h1>오늘당장 관리자페이지</h1>
      <router-link :to="{ name: 'login' }" class="logout" @click="logout">Logout</router-link>
    </header>
    <div class="content-layout-in">
      <router-view/>
    </div>
  </div>
  </div>
</template>

<script>
import AppNav from './AppNav'
import firebase from 'firebase'
export default {
  name: 'Admin',
  components: {
    AppNav
  },
  data () {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped>
  nav {
    width: 250px; position: fixed; top: 0; bottom: 0;
    background: linear-gradient(135deg, #13b7e4 0 , #5d70f1 45%, #8b36f1 85%);
  }
  .content-layout {
    margin-left: 250px; padding: 5px 20px; min-height: 80vh;
  }
  header {
    padding: 0 30px; background-color: #fff;  margin:-5px -20px 0;
    -webkit-box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
  }
  header h1 {
    height: 70px; line-height:70px; color: #666;
    font-size:16px; font-weight:500;
  }
  .content-layout-in {
    width: 100%; padding-right: 15px; padding-left: 15px;
    margin-right: auto; margin-left: auto;
  }
  .page-header {
    font-size: 18px; line-height: 85px; font-weight:700
  }
</style>
