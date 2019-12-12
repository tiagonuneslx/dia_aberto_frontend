import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: () => import("../views/Inicio.vue")
  },
  {
    path: "/atividades",
    name: "atividades",
    component: () =>
      import(/* webpackChunkName: "atividades" */ "../views/Atividades.vue")
  },
  {
    path: "/inscricoes",
    name: "inscricoes",
    component: () =>
      import(/* webpackChunkName: "inscricoes" */ "../views/Inscricoes.vue")
  },
  {
    path: "/transportes",
    name: "transportes",
    component: () =>
      import(/* webpackChunkName: "transportes" */ "../views/Transportes.vue")
  },
  {
    path: "/adicionartransporte",
    name: "adicionar transporte",
    component: () =>
      import(
        /* webpackChunkName: "transportes" */ "../views/AdicionarTransporte.vue"
      )
  },
  {
    path: "/almocos",
    name: "almocos",
    component: () =>
      import(/* webpackChunkName: "almocos" */ "../views/Almocos.vue")
  },
  {
    path: "/configuracao",
    name: "configuracao do dia aberto",
    component: () =>
      import(
        /* webpackChunkName: "configuracao" */ "../views/ConfiguracaoDiaAberto.vue"
      )
  },
  {
    path: "/inscricao",
    name: "inscricao",
    component: () =>
      import(/* webpackChunkName: "inscricao" */ "../views/Inscricao.vue")
  },
  {
    path: "/minhasatividades",
    name: "minhas atividades",
    component: () =>
      import(
        /* webpackChunkName: "minhasatividades" */ "../views/MinhasAtividades.vue"
      )
  },
  {
    path: "/proporatividade",
    name: "propor atividade",
    component: () =>
      import(
        /* webpackChunkName: "proporatividade" */ "../views/ProporAtividade.vue"
      )
  },
  {
    path: "/departamentoatividades",
    name: "atividades do departamento",
    component: () =>
      import(
        /* webpackChunkName: "departamentoatividades" */ "../views/AtividadesDepartamento.vue"
      )
  },
  {
    path: "/colaboradores",
    name: "colaboradores",
    component: () =>
      import(
        /* webpackChunkName: "colaboradores" */ "../views/Colaboradores.vue"
      )
  },
  {
    path: "/tarefas",
    name: "tarefas",
    component: () =>
      import(/* webpackChunkName: "tarefas" */ "../views/Tarefas.vue")
  },
  {
    path: "/adicionartarefa",
    name: "adicionar tarefa",
    component: () =>
      import(/* webpackChunkName: "tarefas" */ "../views/AdicionarTarefa.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
