<template>
  <div class="columns">
    <div class="column is-3">
      <ColaboradoresMenuLateral :atividades="atividades" />
    </div>
    <div class="column">
      <nav aria-label="breadcrumbs" class="breadcrumb">
        <ul>
          <li>
            <router-link to="/">Início</router-link>
          </li>
          <li class="is-active">
            <router-link :to="{ name: 'colaboradores' }"
              >Colaboradores</router-link
            >
          </li>
        </ul>
      </nav>
      <b-button
        icon-left="plus"
        style="margin-bottom: 1rem"
        type="is-success"
        outlined
        >Adicionar Colaborador</b-button
      >
      <ColaboradoresTabela :activities="atividades" />
    </div>
  </div>
</template>

<script>
import ColaboradoresMenuLateral from "../components/colaboradores/ColaboradoresMenuLateral";
import ColaboradoresTabela from "../components/colaboradores/ColaboradoresTabela";
export default {
  name: "Colaboradores",
  components: { ColaboradoresTabela, ColaboradoresMenuLateral }
};
</script>
