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
            <router-link :to="{ name: 'atividades do departamento' }"
              >Atividades do Departamento</router-link
            >
          </li>
        </ul>
      </nav>
      <AtividadesDepartamentoTabela :activities="atividades" />
    </div>
  </div>
</template>

<script>
import AtividadesMenuLateral from "../components/AtividadesMenuLateral";
import AtividadesDepartamentoTabela from "../components/atividadesdepartamento/AtividadesDepartamentoTabela";
export default {
  name: "AtividadesDepartamento",
  components: {
    AtividadesDepartamentoTabela,
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
