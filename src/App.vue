<template>
  <div id="app">
    <NavBar />
    <div class="hero is-primary is-bold" id="top-hero">
      <div class="hero-body" id="top-hero-body"></div>
    </div>
    <div id="page-content">
      <div class="card">
        <div class="card-content">
          <router-view />
        </div>
      </div>
    </div>
    <footer class="footer">
      <div style="float: left;">
        (c) 2020
      </div>
      <div style="float: right;">
        Designed by Grupo 9
      </div>
      <div style="margin: auto; width: max-content">
        Dia Aberto
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

<style lang="scss" scoped>
$top-hero-body-height: 45vh;
$top-hero-body-margin: 8vh;
$page-lateral-margin: 3rem;
$page-bottom-margin: 5rem;

#app {
  position: relative;
  min-height: 100vh;
  padding-bottom: $page-bottom-margin;
}

.has-background-image {
  background: url(assets/img/hero-background.jpg) center center;
  background-size: cover;
}

#top-hero-body {
  height: $top-hero-body-height;
}

#page-content {
  margin: -$top-hero-body-height + $top-hero-body-margin $page-lateral-margin 0;
}

#page-content .card {
  min-height: 70vh;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
