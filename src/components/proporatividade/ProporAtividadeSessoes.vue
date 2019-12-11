<template>
  <div>
    <div style="padding: 1rem 2vw 0">
      <hr />
      <h2 class="title has-text-grey is-uppercase" style="font-size: 0.9rem">
        Sessões da Atividade
      </h2>
      <SessoesTabela :sessoes="sessoes" />
      <hr />
      <h2
        class="title has-text-grey is-uppercase"
        style="font-size: 0.9rem; margin-bottom: 2rem;"
      >
        Adicionar Sessão
      </h2>
      <AdicionarSessao />
      <hr />
    </div>
  </div>
</template>

<script>
import SessoesTabela from "./sessoes/SessoesTabela";
import AdicionarSessao from "./sessoes/AdicionarSessao";
export default {
  name: "ProporAtividadeSessoes",
  components: { AdicionarSessao, SessoesTabela },
  data() {
    return {
      sessoes: require("../../fixtures/atividades.json").map(
        model => model.fields
      )[4].sessions
    };
  }
};
</script>
