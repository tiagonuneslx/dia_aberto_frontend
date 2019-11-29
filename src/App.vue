<template>
  <div id="app">
    <NavBar />
    <div class="hero is-primary is-bold">
      <div class="hero-body" id="top-hero-body"></div>
    </div>
    <div class="column is-offset-1 is-10" id="page-content">
      <div class="card">
        <div class="card-content" style="min-height: 430px">
          <router-view />
        </div>
      </div>
    </div>
    <footer style="background-color: white">
      <hr style="background-color: black; margin-bottom: 10px" />
      <div class="columns">
        <div class="column is-2" style="margin-left: 20px">
          (c) 2020
        </div>
        <div class="column is-8 has-text-centered">
          Dia Aberto
        </div>
        <div class="column is-2" style="margin-left: -20px">
          Designed by Grupo 9
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
$top-hero-body-height: 300px;
$top-hero-body-margin: 40px;
#top-hero-body {
  height: $top-hero-body-height;
}

#page-content {
  margin-top: -$top-hero-body-height + $top-hero-body-margin;
}
</style>
