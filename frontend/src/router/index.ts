import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import QuestionView from "../views/QuestionView.vue";
import Home from "@/views/Home.vue";
import ResultView from "@/views/ResultView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/question",
    name: "Question",
    component: QuestionView,
  },
  {
    path: "/result",
    name: "Result",
    component: ResultView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
