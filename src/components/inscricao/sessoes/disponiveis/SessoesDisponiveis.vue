<template>
  <div>
    <div class="columns">
      <div class="column is-3">
        <SessoesDisponiveisMenuLateral />
      </div>
      <div class="column">
        <SessoesDisponiveisTabela />
      </div>
    </div>
  </div>
</template>

<script>
import SessoesDisponiveisMenuLateral from "./SessoesDisponiveisMenuLateral";
import SessoesDisponiveisTabela from "./SessoesDisponiveisTabela";
export default {
  name: "SessoesDisponiveis",
  components: { SessoesDisponiveisTabela, SessoesDisponiveisMenuLateral }
};
</script>

<style scoped></style>
