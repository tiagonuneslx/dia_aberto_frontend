<template>
  <div class="columns">
    <div class="column is-3">
      <TransportesMenuLateral :transportes="transportes" />
    </div>
    <div class="column">
      <nav aria-label="breadcrumbs" class="breadcrumb">
        <ul>
          <li>
            <router-link to="/">Início</router-link>
          </li>
          <li class="is-active">
            <router-link :to="{ name: 'transportes' }">Transportes</router-link>
          </li>
        </ul>
      </nav>
      <b-button
        icon-left="plus"
        tag="router-link"
        :to="{ name: 'adicionar transporte' }"
        type="is-success"
        outlined
        style="margin-bottom: 0.9rem; margin-right: 1rem"
      >
        Adicionar transporte
      </b-button>
      <b-button
        @click="submeter"
        icon-left="application-import"
        style="margin-bottom: 0.9rem"
      >
        Publicar transportes
      </b-button>
      <TransportesTabela :transportes="transportes" />
    </div>
  </div>
</template>

<script>
import TransportesMenuLateral from "../components/transportes/TransportesMenuLateral";
import TransportesTabela from "../components/transportes/TransportesTabela";
export default {
  name: "Transportes",
  components: { TransportesTabela, TransportesMenuLateral },
  data() {
    return {
      transportes: require("../fixtures/transportes.json").map(
        model => model.fields
      )
    };
  },
  methods: {
    submeter() {
      this.$buefy.dialog.confirm({
        message: "Tem a certeza que quer publicar os transporte?",
        cancelText: "Cancelar",
        confirmText: "Confirmar",
        type: "is-success",
        onConfirm: () => this.confirmado()
      });
    },
    confirmado() {
      this.$buefy.toast.open("Transportes publicados!");
      this.$store.commit(
        "adicionarNotificacao",
        "Os transportes foram publicados com sucesso!"
      );
    }
  }
};
</script>
