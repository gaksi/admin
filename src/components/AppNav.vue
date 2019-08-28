<template>
  <nav>
    <div class="star-box">
      <img src="../assets/star.png" alt="" v-for="n in 20" :class="{['star'+n]: true}" :key="n">
    </div>
    <router-link :to="{ name: 'Admin' }" class="logo">
      <img src="../assets/adminLogo.png" alt="오늘당장 로고">
    </router-link>
    <nav-items
      :items="navItems" />
  </nav>
</template>

<script>
import NavItems from './NavItems'

export default {
  name: 'AppNav',
  components: {
    NavItems
  },
  data: function () {
    return {
      navItems: []
    }
  },
  created () {
    let adminRoute = this.$router.options.routes.filter((item, index) => {
      return item.name === 'Admin'
    })
    this.navItems = adminRoute[0].children
  }
}
</script>

<style>
.logo {
  width: 100px; text-align:center;
  margin:15px auto 20px; display:block;
  padding:20px 0
}
.logo img { width: 100%; }
nav .star-box { position:relative; opacity:0; filter:Alpha(opacity=0); -ms-opacity:0; transition:all 1s}
nav:hover .star-box { opacity:1; filter:Alpha(opacity=1); -ms-opacity:1; }

.star-box img { position:absolute; }
.star1 { left: 14px; top: 8px; width: 12px; height: 12px; opacity: 0; animation:starBlink01 3.3s 0s infinite alternate }
.star2 { left: 187px; top: 22px; width: 12px; height: 12px; opacity: 0; animation:starBlink01 3s 2s infinite alternate }
.star3 { left: 202px; top: 32px; width: 12px; height: 12px; opacity: 0; animation:starBlink01 5.1s 4s infinite alternate }
.star4 { left: 153px; top: 113px; width: 12px; height: 12px; opacity: 0; animation:starBlink01 5s 3.8s infinite alternate }
.star5 { left: 138px; top: 295px; width: 12px; height: 12px; opacity: 0; animation:starBlink01 1.2s 5s infinite alternate }
.star6 { left: 64px; top: 424px; width: 12px; height: 12px; opacity: 0; animation:starBlink01 5s 1.2s infinite alternate }
.star7 { left: 60px; top: 593px; width: 12px; height: 12px; opacity: 0; animation:starBlink01 2.5s .9s infinite alternate }
.star8 { left: 23px; top: 738px; width: 12px; height: 12px; opacity: 0; animation:starBlink01 3.5s 1.9s infinite alternate }
.star9 { left: 215px; top: 792px; width: 12px; height: 12px; opacity: 0; animation:starBlink01 4.6s .6s infinite alternate }
.star10 { left: 177px; top: 36px; width: 20px; height: 20px; opacity: 0; animation:starBlink02 6s 4s infinite alternate }
.star11 { left: 10px; top: 206px; width: 16px; height: 16px; opacity: 0; animation:starBlink02 4s 2.5s infinite alternate }
.star12 { left: 153px; top: 500px; width: 13px; height: 13px; opacity: 0; animation:starBlink02 5s 1s infinite alternate }
.star13 { left: 130px; top: 868px; width: 20px; height: 20px; opacity: 0; animation:starBlink02 1.6s 3.5s infinite alternate }
.star14 { left: 46px; top: 76px; width: 14px; height: 14px; opacity: 0; animation:starBlink03 2.6s .6s infinite alternate }
.star15 { left: 209px; top: 156px; width: 14px; height: 14px; opacity: 0; animation:starBlink03 2.1s 1.6s infinite alternate }
.star16 { left: 215px; top: 355px; width: 14px; height: 14px; opacity: 0; animation:starBlink03 3.9s 2.6s infinite alternate }
.star17 { left: 168px; top: 717px; width: 14px; height: 14px; opacity: 0; animation:starBlink03 2.9s 3.6s infinite alternate }
.star18 { left: 93px; top: 837px; width: 14px; height: 14px; opacity: 0; animation:starBlink03 4.9s 4.6s infinite alternate }
.star19 { left: 30px; top: 390px; width: 13px; height: 13px; opacity: 0; animation:starBlink03 4.1s 5.6s infinite alternate }
.star20 { left: 100px; top: 637px; width: 13px; height: 13px; opacity: 0; animation:starBlink03 2.1s 6.6s infinite alternate }

@keyframes starBlink01 {
  0% { opacity: 0; }
  100% { opacity: .3; }
}
@keyframes starBlink02 {
  0% { opacity: 0; }
  100% { opacity: .6; }
}
@keyframes starBlink03 {
  0% { opacity: 0; }
  100% { opacity: .5; }
}
</style>
