import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import SurveyView from '../views/SurveyView.vue';
import Home from '@/views/Home.vue';
import ResultView from '@/views/ResultView.vue';
import BalanceView from '@/views/BalanceView.vue';
import QuestionManageView from "@/views/QuestionManageView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/question',
    name: 'Question',
    component: SurveyView,
  },
  {
    path: '/result',
    name: 'Result',
    component: ResultView,
  },
  {
    path: '/balance',
    name: 'Balance',
    component: BalanceView,
  },
  {
    path: '/manage',
    name: 'Manage',
    component: QuestionManageView,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
