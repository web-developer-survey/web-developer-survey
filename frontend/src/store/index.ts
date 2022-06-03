import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const state:{balanceAnswersIdx:number[]} = {
  balanceAnswersIdx: []

}

export default new Vuex.Store({
  state,
  getters: {
    balanceAnswersIdx: (state) => state.balanceAnswersIdx
  },
  actions: {
    balanceVote({commit},questionIdx){
      commit('')
    }
  },
  mutations: {
    balanceVote(state, questionIdx){
      state.balanceAnswersIdx.push(questionIdx)
    }
  },
  modules: {},
});
