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
            <router-link to="/minhasatividades">Minhas Atividades</router-link>
          </li>
        </ul>
      </nav>
      <b-button
        tag="router-link"
        :to="{ name: 'propor atividade' }"
        type="is-success"
        icon-left="plus"
        outlined
        style="margin-bottom: 0.5rem"
        >Propor nova atividade</b-button
      >
      <ListaAtividades :activities="atividades" />
    </div>
  </div>
</template>

<script>
import ListaAtividades from "../components/ListaAtividades";
import AtividadesMenuLateral from "../components/AtividadesMenuLateral";
export default {
  name: "MinhasAtividades",
  components: {
    ListaAtividades,
    AtividadesMenuLateral
  },
  data() {
    return {
      atividades: [
        require("../fixtures/atividades.json").map(model => model.fields)[0]
      ]
    };
  }
};
</script>
