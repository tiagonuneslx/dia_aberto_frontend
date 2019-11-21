<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/vue-logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import HelloWorld from "../components/HelloWorld.vue";

  export default {
    components: {
      HelloWorld
    }
  };
</script>

<style>
  .home {
    text-align: center;
  }
</style>
