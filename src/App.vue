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

<style>
@import './assets/css/base.css';
@import './assets/css/element.css';
</style>
