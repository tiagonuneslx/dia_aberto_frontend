import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    utilizador: "coordenador",
    estadoSubmissao: {
      A: { descricao: "Aceite", cor: "is-success" },
      P: { descricao: "Pendente", cor: "is-warning" },
      R: { descricao: "Rejeitada", cor: "is-danger" }
    },
    notificacoes: 0
  },
  mutations: {
    mudarUtilizador(state, utilizador) {
      state.utilizador = utilizador;
    }
  },
  actions: {},
  modules: {}
});
