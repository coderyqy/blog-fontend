<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/"></router-link>
    </div>-->
    <transition name="bounce">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  created () {
    window.console.log('虽不能至，心向往之。\r\n\r\n')
    window.console.log('%cfollow me %c https://github.com/coderyqy', 'color:red', 'color:green')
  }
}
</script>

<style>
@import './assets/css/base.css';
@import './assets/css/element.css';
</style>
