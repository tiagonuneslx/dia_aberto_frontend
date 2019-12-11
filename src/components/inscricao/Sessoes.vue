<template>
  <div style="padding: 1rem 2vw 0">
    <hr />
    <h2 class="title has-text-grey is-uppercase" style="font-size: 0.9rem">
      Sessões Escolhidas
    </h2>
    <SesoesEscolhidasTabela />
    <hr />
    <h2 class="title has-text-grey is-uppercase" style="font-size: 0.9rem">
      Sessões Disponíveis
    </h2>
    <SessoesDisponiveis />
    <hr />
  </div>
</template>

<script>
import SessoesDisponiveis from "./sessoes/disponiveis/SessoesDisponiveis";
import SesoesEscolhidasTabela from "./sessoes/escolhidas/SesoesEscolhidasTabela";
export default {
  name: "Sessoes",
  components: { SesoesEscolhidasTabela, SessoesDisponiveis }
};
</script>

<style scoped></style>
