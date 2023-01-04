<template>
  <nav-bar-vue />
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view />
</template>

<script>
//use defineAsyncComponent to load the component asynchronously
import { defineAsyncComponent } from 'vue';


export default {
  name: 'App',
  components: {
    NavBarVue: defineAsyncComponent(() => import(/*webpackChunkName: "Navbar" */'@/modules/shared/components/NavBar.vue')),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
