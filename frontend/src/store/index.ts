import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
export const state: { balanceAnswersIdx: number[] } = {
  balanceAnswersIdx: [],
};

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  getters: {
    balanceAnswersIdx: (state) => state.balanceAnswersIdx,
  },
  actions: {
    balanceVote({ commit }, questionIdx) {
      commit('balanceAnswersIdx', questionIdx);
    },
  },
  mutations: {
    balanceVote(state, questionIdx) {
      state.balanceAnswersIdx.push(questionIdx);
    },
  },
  modules: {},
});
