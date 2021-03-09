<template>
  <div id="home">
    <div id="top">
      <div class="logo">后台管理系统</div>
      <div class="util">
        <div class="logout">
          <i class="el-icon-switch-button"></i>
        </div>
      </div>
    </div>
    <div class="main">
      <div id="menu">
        <ul>
          <li>
            <img class="icon-img" src="@/assets/image/menu-icon/home-icon.png" alt />
            <span class="menu-name">home</span>
          </li>
          <li @click="$router.push('/article')">
            <img class="icon-img" src="@/assets/image/menu-icon/home-icon.png" alt />
            <span class="menu-name">article</span>
          </li>
          <li @click="$router.push('/comment')">
            <img class="icon-img" src="@/assets/image/menu-icon/home-icon.png" alt />
            <span class="menu-name">comment</span>
          </li>
          <li>
            <img class="icon-img" src="@/assets/image/menu-icon/home-icon.png" alt />
            <span class="menu-name">chat</span>
          </li>
        </ul>
      </div>
      <div id="view">
        <transition name="slide-fade">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

#home {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: url('../../assets/image/bgimg2.jpg') no-repeat;
  background-size: cover;
}
.main {
  height: 100%;
  display: flex;
}
#menu {
  width: 200px;
  height: 100%;
  color: #fff;
  /* background-image: -webkit-linear-gradient(
    rgba(191, 51, 78, 1) 54%,
    rgba(0, 0, 0, 0)
  ); */
  background-color: rgb(53, 64, 83);
}
#view {
  flex: 1;
  background-color: rgb(249, 249, 249);
}
#top {
  display: flex;
  width: 100%;
  height: 80px;
  background-color: rgb(53, 64, 83);
}
#top .logo {
  height: 80px;
  line-height: 80px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
  margin-left: 20px;
}
#top .util {
  display: flex;
  width: 700px;
  height: 80px;
  margin-left: auto;
  /* background-image:linear-gradient(
    to left,
    rgba(191,51,78,1) 50%,
    rgba(0,0,0,0)) */
}
#top .util .logout {
  height: 80px;
  line-height: 80px;
  margin-left: auto;
  margin-right: 30px;
}
ul li {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px 0;
  padding-left: 10px;
  font-size: 20px;
}
ul li:hover {
  background: rgba(0, 0, 0, 0.1);
}
.icon-img {
  width: 26px;
  height: 26px;
}
.menu-name {
  padding-left: 14px;
  font-size: 18px;
  text-align: center;
}

.test {
  margin-left: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, #323753 0%, #58608a 100%);
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.25),
    -3px -2px 20px rgba(255, 255, 255, 0.25);
  border-radius: 13px;
}
</style>