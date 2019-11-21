<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item
              :to="{ path: '/' }"
              class="logo router-link"
              style="padding-left: 30px; padding-right: 20px"
              tag="router-link"
      >
        <img alt="Logo" src="../assets/logo.png"/>
        <h1
                class="has-text-dark"
                style="padding-left: 6px; letter-spacing: -0.5px;"
        >
          <strong>UALG</strong>
        </h1>
        <h1
                class="has-text-primary"
                style="padding-left: 5px; letter-spacing: -0.5px;"
        >
          DIA ABERTO
        </h1>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item :to="{ path: '/' }" class="router-link" tag="router-link">
        Início
      </b-navbar-item>
      <b-navbar-item
              :to="{ path: '/about' }"
              class="router-link"
              tag="router-link"
      >
        Contactos
      </b-navbar-item>
      <b-navbar-dropdown label="Páginas em construção">
        <b-navbar-item
                :to="{ path: '/activities' }"
                class="router-link"
                tag="router-link"
        >
          Atividades
        </b-navbar-item>
        <b-navbar-item
                :to="{ path: '/admin' }"
                class="router-link"
                tag="router-link"
        >
          Admin
        </b-navbar-item>
        <b-navbar-item
                :to="{ path: '/coordenador' }"
                class="router-link"
                tag="router-link"
        >
          Coordenador
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Registar</strong>
          </a>
          <a class="button is-light">
            Entrar
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
  export default {
    name: "NavBar"
  };
</script>

<style lang="scss" scoped>
  @import "../buefy";

  .router-link:focus {
    outline: none;
  }

  .router-link.router-link-exact-active {
    color: $primary;
  }
</style>
