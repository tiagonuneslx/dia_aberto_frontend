<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item :to="{ name: 'inicio' }" class="logo" tag="router-link">
        <img alt="Dia Aberto" src="../assets/img/logo-navbar.png" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <template v-for="(separador, index) in separadores[utilizador]">
        <b-navbar-item
          :key="index"
          :to="{ name: separador.nome }"
          class="is-tab router-link"
          tag="router-link"
        >
          {{ separador.descricao }}
        </b-navbar-item>
      </template>
    </template>
    <template slot="end">
      <b-navbar-item tag="a">
        <b-icon icon="bell" />
      </b-navbar-item>
      <b-navbar-item tag="div">
        <b-button icon-left="login-variant">
          Sair
        </b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      separadores: {
        administrador: [
          {
            nome: "atividades",
            descricao: "Atividades"
          },
          {
            nome: "inscricoes",
            descricao: "Inscrições"
          },
          {
            nome: "transportes",
            descricao: "Transportes"
          },
          {
            nome: "almocos",
            descricao: "Almoços"
          },
          {
            nome: "configuracao do dia aberto",
            descricao: "Configuração do Dia Aberto"
          }
        ]
      }
    };
  },
  computed: {
    utilizador() {
      return this.$store.state.utilizador;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../buefy";

.router-link.router-link-exact-active {
  @extend .navbar-item.is-tab:focus;
  color: $primary;
}
</style>
