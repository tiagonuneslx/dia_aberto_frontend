import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VueHome from "../views/VueHome.vue";
import Activities from "../views/Activities.vue";
import Admin from "../views/Admin.vue";
import Coordenador from "../views/Coordinator.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/vuehome",
    name: "vuehome",
    component: VueHome
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/activities",
    name: "activities",
    component: Activities
  },
  {
    path: "/coordenador",
    name: "coordenador",
    component: Coordenador
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
