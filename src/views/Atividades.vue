<template>
  <div class="columns">
    <div class="column is-3">
      <AtividadesMenuLateral :atividades="atividades" />
    </div>
    <div class="column">
      <nav aria-label="breadcrumbs" class="breadcrumb">
        <ul>
          <li>
            <router-link to="/">Início</router-link>
          </li>
          <li class="is-active">
            <router-link to="/atividades">Atividades</router-link>
          </li>
        </ul>
      </nav>
      <ListaAtividades :activities="atividades" />
    </div>
  </div>
</template>

<script>
import ListaAtividades from "../components/ListaAtividades.vue";
import AtividadesMenuLateral from "../components/AtividadesMenuLateral.vue";

export default {
  components: {
    ListaAtividades,
    AtividadesMenuLateral
  },
  data() {
    return {
      atividades: require("../fixtures/atividades.json").map(
        model => model.fields
      )
    };
  }
};
</script>
