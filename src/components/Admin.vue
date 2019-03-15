<template>
  <div>
  <app-nav />
  <div class="content-layout">
    <header>
      <h1>오늘당장 관리자페이지</h1>
      <router-link :to="{ name: 'login' }" class="logout btn-basic" @click="logout">Logout</router-link>
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

<style>
  nav {
    width: 250px; position: fixed; top: 0; bottom: 0;
    background: linear-gradient(135deg, #13b7e4 0 , #4d7fee 45%, #8b36f1 85%);
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
    height: 70px; line-height:70px; color:#4d7fee;
    font-size:16px; font-weight:600;
  }
  .content-layout-in {
    width: 100%; padding-right: 15px; padding-left: 15px;
    margin-right: auto; margin-left: auto;
  }
  .page-header { position:relative; }
  .tit-con-layout {
    font-size: 20px; line-height: 85px; font-weight:700
  }
  .logout {
    position:absolute; top:22px; right:40px;
  }

  .content-box {
    padding:15px;
    -webkit-box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    margin-bottom: 30px; background-color:#fff;
  }
  .tit-con-box {
    font-size:15px; margin-bottom: 10px;
  }

  /* TABLE */
  .tb-normal {
    width: 100%; border-collapse: collapse;
    text-align: center;
    border-top: 2px solid #4d7fee;
    border-left: 1px solid #f8f9fe;
    background-color: #fff;
  }
  .tb-normal td {
    border-right: 1px solid #f8f9fe;
    border-bottom: 1px solid #f8f9fe;
    font-size: 12px;
  }

  .tb-normal td a {
    padding: 10px 5px; display:block; font-size:14px; min-height:36px;
  }
  .tb-normal td a:hover {
    font-weight:bold; text-decoration: underline;
  }
  .tb-normal td .no-pin {
    display:none;
  }
  .tb-normal thead th {
    border-bottom: 1px solid #888;
    border-right: 1px solid #eef1f8;
    padding: 9px 0;
    font-size: 15px;
  }
  .tb-normal tbody th {
    border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;
    padding: 20px 0; line-height: 1.9; font-size:17px;
  }

  /* button */

  .btn-box { text-align:right; margin-top:10px; margin-right:1px; }
  .btn-basic {
    padding:5px 16px 7px; border-radius:3px;
    border:1px solid #4d7fee; background-color:#4d7fee; color:#fff;
  }
  .btn-basic:hover {
    border:1px solid #4d7fee;
    color:#4d7fee; background-color:#fff;
  }
  div.btn-submit {
    width:100%; height:70px; margin-top:20px;
  }
  .btn-submit button {
    height:40px; line-height:40px; color:#fff;
    background:linear-gradient(to right, #13b7e4, #8b36f1); font-weight:bold;
    border-radius:8px; width:100%; display:block; font-size:14px;
  }
  div.btn-rewrite {
    width:100%; height:70px; margin-top:20px;
  }
  .btn-rewrite button {
    height:40px; line-height:40px; color:#fff;
    background:linear-gradient(to right, #13b7e4, #8b36f1); font-weight:bold;
    border-radius:8px; width:100%; display:block; font-size:14px;
  }

</style>
