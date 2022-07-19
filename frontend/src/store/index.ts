import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { sampleQuestion } from '@/util/default-setting/sample/sample-question';
import { State } from '@/interface/state';

Vue.use(Vuex);
export const state: State = {
  balanceAnswersIdx: [],
  questions: sampleQuestion,
  answerData: [],
};

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  getters: {
    balanceAnswersIdx: (state) => state.balanceAnswersIdx,
    answerData: (state) => state.answerData,
  },
  actions: {
    balanceVote({ commit }, questionIdx) {
      commit('balanceAnswersIdx', questionIdx);
    },
    setAnswerData({ commit }, answerData) {
      commit('setAnswerData', answerData);
    },
  },
  mutations: {
    balanceVote(state, questionIdx) {
      state.balanceAnswersIdx.push(questionIdx);
    },
    setAnswerData(state, answerData) {
      state.answerData = answerData;
    },
  },
  modules: {},
});
