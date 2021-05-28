<template>
  <div id="home">
    <el-container class="home-container">
      <el-header>
        <div id="top">
          <div class="logo">后台管理系统</div>
          <div class="util">
            <div class="logout">
              <i class="el-icon-switch-button" @click="logout"></i>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div id="menu">
            <el-row class="tac">
              <el-col>
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="rgb(53, 64, 83)"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                >
                  <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页资讯</span>
                  </el-menu-item>
                  <el-menu-item index="2" @click="$router.push('/article')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">文章管理</span>
                  </el-menu-item>
                  <el-menu-item index="3" @click="$router.push('/comment')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">评论管理</span>
                  </el-menu-item>
                  <el-menu-item index="4" @click="$router.push('/message')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">留言管理</span>
                  </el-menu-item>
                  <el-menu-item index="5" @click="$router.push('/users')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">用户管理</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-aside>
        <el-main>
          <div id="view" ref="mainview">
            <transition name="slide-fade">
              <router-view />
            </transition>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      clientHeight: '',
    }
  },
  methods: {
    changeMainViewHeight () {                        //动态修改样式
      this.clientHeight = document.documentElement.clientHeight
      this.$refs.mainview.style.height = `${this.clientHeight - 80}px`
    },
    logout () {
      window.localStorage.clear()
      this.$router.push("/adminLogin")
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  },
  created () {

  },
  mounted () {
    this.changeMainViewHeight()
  },
}
</script>

<style scoped>
#home {
  height: 100%;
}
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
.home-container {
  height: 100%;
}
.el-header {
  padding: 0;
  height: 80px !important;
}

#menu {
  color: #fff;
  height: 100%;
  background-color: rgb(53, 64, 83);
}
.el-main {
  padding: 0;
}
#view {
  overflow: auto;
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
}
#top .util .logout {
  height: 80px;
  line-height: 80px;
  margin-left: auto;
  margin-right: 30px;
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

.el-menu-item:hover {
  background: rgb(53, 64, 83) !important;
}
</style>