import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { sampleQuestion } from '@/util/default-setting/sample/sample-question';
import { State } from '@/interface/state';

Vue.use(Vuex);
export const state: State = {
  balanceAnswersIdx: [],
  questions: sampleQuestion,
};

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  getters: {
    balanceAnswersIdx: (state) => state.balanceAnswersIdx,
  },
  actions: {
    balanceVote({ commit }, questionIdx) {
      commit('ba lanceAnswersIdx', questionIdx);
    },
  },
  mutations: {
    balanceVote(state, questionIdx) {
      state.balanceAnswersIdx.push(questionIdx);
    },
  },
  modules: {},
});
