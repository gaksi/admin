<template>
  <div>
  <app-nav />
  <div class="content-layout">
    <header>
      <h1>오늘당장 관리자페이지</h1>
      <!-- https://github.com/vuejs/vue-router/issues/800 -->
      <router-link :to="{ name: 'Login' }" class="logout btn-basic" @click.native="logout">Logout</router-link>
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
    margin-left: 250px; padding: 5px 20px 50px; min-height: 80vh;
  }
  header {
    padding: 0 30px; background-color: #fff;  margin:-5px -20px 0;
    -webkit-box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
  }
  header h1 {
    height: 70px; line-height:70px; color:#708fd4;
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
    position:absolute; top:20px; right:40px;
  }

  .content-box {
    padding:20px 25px 25px; min-width:900px;
    -webkit-box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
    margin-bottom: 30px; background-color:#fff;
  }
  .tit-con-box {
    font-size:15px; margin-bottom: 30px; font-weight:700;
  }

  /* FORM */
  input[type="radio"] {width:15px; height:15px; margin:0 12px 0 5px}

  input[type=radio]:not(old) {
    margin:0; padding:0; opacity:0;
    background:url(../assets/radio_on.png) no-repeat 0 0;
    width:0;
  }
  input[type=radio]:not(old) + label {
    display: inline-block;
    text-align: left; height:20px; padding-left: 25px;
    background: url(../assets/radio_off.png) no-repeat 0 0;
    line-height: 130%; vertical-align: top;
  }
  input[type=radio]:not(old):checked + label {
    background: url(../assets/radio_on.png) no-repeat 0 0;
  }

  .inp-text {
    padding:10px; font-size:14px; width:100%;
    border-radius:2px; border:1px solid #ddd;
  }
  .inp-text-s {
    padding:8px; font-size:12px; width:50px;
    border-radius:2px; border:1px solid #ddd;
  }
  .txt-area01 {
    width:100%; padding:10px; line-height:1.5;
    border:0; border-radius:5px
  }

  .inp-text2 {
    padding:10px; font-size:14px; width:100%;
    border-radius:2px; border:1px solid #ddd;
  }
  .txt-area02 {
    width:100%; padding:10px; line-height:1.5;
    border-radius:5px; border:1px solid #ddd;
  }

  /* TABLE */

  table td, table a, table th { color:#6c757d; font-size:14px; }
  .limit-width {
    width:680px; margin:0 auto;
  }
  .limit-width a {
    width:100%; overflow:hidden; text-overflow: ellipsis;
    white-space:nowrap;
  }
  .tb-normal {
    width: 100%; border-collapse: collapse;
    text-align: center; margin-bottom: 30px;
    border-top: 1px solid #e3eaef;
    background-color: #fff;
  }
  .tb-normal td {
    border-top: 1px solid #e3eaef;
    font-size: 12px; padding:2px 10px;
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
    border-bottom: 2px solid #e3eaef; padding: 12px 0;
  }
  .tb-normal tbody th {
    border-right: 1px solid #ccc; border-bottom: 1px solid #e3eaef;
    padding: 20px 0; line-height: 1.9; font-size:17px;
  }

  /* TABLE 2 */
  .form-group { margin-bottom: 20px; }
  .form-group h4 { margin-bottom: 8px; font-weight:600 }
  .form-group input[type="radio"] { margin-left:15px; }
  .form-group input[type="radio"]:first-of-type { margin-left:0; }
  .divided { margin-bottom: 10px; }
  .divided > div { display:inline-block; margin-right:50px; }

  /* button */
  .btn-box {
    padding:25px 0 5px; margin-left:1px; border-top:1px solid #e3eaef;
    text-align: right;
  }
  .btn-box-big {
    padding:25px 0 5px; margin-left:1px; border-top:1px solid #e3eaef;
    text-align: center
  }
  .btn-box > a { margin-left:5px; }

  .btn-box input { display:inline-block; margin-left:5px; }
  .btn-box a:first-child { margin-left:0; }
  .btn-basic {
    padding: 5px 20px 7px; border-radius:3px; font-weight:600;
    border:1px solid #4d7fee; background-color:#4d7fee; color:#fff;
    box-shadow: 0 2px 6px 0 rgba(77, 127, 238, 0.5); font-size:13px;
    line-height:21px; display:inline-block;
  }
  .btn-basic:hover {
    border:1px solid #4d7fee;
    color:#4d7fee; background-color:#fff;
  }
  .btn-basic-big {
    padding: 10px 0 12px; width: 190px; text-align: center;
    border-radius: 6px; font-weight: 600; border: 1px solid #4d7fee;
    background-color: #4d7fee; color: #fff;
    -webkit-box-shadow: 0 2px 6px 0 rgba(77, 127, 238, 0.5);
    box-shadow: 0 2px 6px 0 rgba(77, 127, 238, 0.5);
    font-size: 14px; line-height: 21px; display: inline-block;
  }
  .btn-basic-big:hover {
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
