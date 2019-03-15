<template id="login">
  <div class="log-bg" >
    <div class="log-layout clearfix">
      <div class="left-box">
        <div class="light1"></div> <div class="light2"></div>
        <img src="../assets/logo.png" alt="">
        <img src="../assets/logo.png" alt="" class="ani-img">
      </div>
      <div class="right-box">
        <i class="xi-profile icon-login"></i>
        <h1 class="tit-login"> SIGN IN </h1>
        <div class="log-form">
          <input type="text" placeholder="ID" v-model="email" class="ip-01">
          <input type="password" placeholder="PASSWORD" v-model="password" class="ip-01">
          <div class="btn-box">
            <input type="submit" value="SIGN UP" class="btn-login" @click="SignUp">
            <input type="submit" value="LOG IN" class="btn-login" @click="SignIn">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import firebase from 'firebase'
export default {
  name: 'AppHome',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    SignUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log('sign up success')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    SignIn () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            this.$router.push('/admin')
            console.log('login success')
          })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCKw7wtCj4NvxFJCQeCrs-T7nC8alhDfKk',
  authDomain: 'admin-rightaway.firebaseapp.com',
  databaseURL: 'https://admin-rightaway.firebaseio.com',
  projectId: 'admin-rightaway',
  storageBucket: 'admin-rightaway.appspot.com',
  messagingSenderId: '919370117474'
}

firebase.initializeApp(config)
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.log-bg {
  position:fixed; top:0; left:0; right:0; bottom:0;
  background:linear-gradient(135deg, #13b7e4 0 , #5d70f1 45%, #8b36f1 85%);
}
.log-layout {
  background-color:#fff; border-radius:10px;
  position:absolute; left:50%; top:50%;
  width:100%; max-width:1200px; overflow:hidden;
  box-shadow: 0 0 35px 0 rgba(68, 62, 107, 0.5);
  transform: translate(-50%, -50%);
}
 .left-box {
   float:left; width: 65%; text-align:center; height:416px; position:relative;
   background:linear-gradient(-135deg, #13b7e4 0 , #5d70f1 45%, #8b36f1 85%);
   overflow:hidden;
 }
.left-box img {
  position:absolute; top:50%; left:50%; margin-left:-168.5px; margin-top:-125.5px;
 }
  img.ani-img {
    opacity:0; margin-top:-122px
  }
 .left-box:hover .ani-img {
   animation:bounce .3s 0s ;
   animation-iteration-count: 2
 }
 @keyframes bounce {
   0% { transform:scale(.999); opacity:1 }
   100% { transform:scale(1.15); opacity:0 }
 }
 .light1 {
   width:100px; height:1000px; transform:rotate(45deg);
   position:absolute; left:1320px; top:-400px;
   animation: lightEffect1 1s .5s; background-color:rgba(255,255,255,.3)
 }
 .light2 {
   width:50px; height:1000px; transform:rotate(45deg);
   position:absolute; left:1200px; top:-400px;
   animation: lightEffect2 1s .5s; background-color:rgba(255,255,255,.3)
 }
 @keyframes lightEffect1 {
   0% {left: -280px }
   100% {left: 1320px }
 }
 @keyframes lightEffect2 {
   0% {left: -400px }
   100% {left: 1200px }
 }
 .right-box {
   float:right; width: 35%; background-color:#fff;
   text-align:center; padding:45px 0 0;
 }
 .icon-login {
   font-size: 100px; color:#4d7fee;
  }
 .tit-login { font-size:25px; font-weight:lighter; }
 .log-form { margin:23px 50px 0 }
  input.ip-01 {
    display: block; width: 100%; margin-bottom:8px;
    border-radius: 5px; padding: 9px 15px;
    font-size: 13px; border: 1px solid #ccc;
    font-weight: 400; line-height: 1.5;
    background-color: #fff;
  }
  .btn-login {
    width:49%; border-radius:5px; background-color:#4d7fee;
    color:#fff; padding:12px 0; text-align:center; margin-top:10px;
    cursor:pointer; font-size:15px; font-weight:600; margin-left:2%;
    border:1px solid #4d7fee
  }
  .btn-login:first-child {
    margin-left:0;
  }
  .btn-login:hover {
    border:1px solid #4d7fee; background-color:#fff;
    color:#4d7fee
  }
</style>
