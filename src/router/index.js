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
        /* webpackChunkName: "almocos" */ "../views/ConfiguracaoDiaAberto.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
