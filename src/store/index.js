import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    utilizador: "administrador",
    estadoSubmissao: {
      A: { descricao: "Aceite", cor: "is-success" },
      P: { descricao: "Pendente", cor: "is-warning" },
      R: { descricao: "Rejeitada", cor: "is-danger" }
    },
    notificacoes: [],
    inscritos: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    tarefa: false
  },
  mutations: {
    mudarUtilizador(state, utilizador) {
      state.utilizador = utilizador;
      state.notificacoes = [];
      state.tarefa = false;
      state.inscritos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      router.push({ name: "inicio" });
    },
    adicionarNotificacao(state, notificacao) {
      state.notificacoes.push(notificacao);
    },
    mudarInscritos(state, id, inscritos) {
      state.inscritos[id] = inscritos;
    },
    carregarTarefa(state) {
      state.tarefa = true;
    }
  },
  actions: {},
  modules: {}
});
