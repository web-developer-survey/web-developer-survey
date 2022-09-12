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
  surveyTokenQuantitative: '',
  surveyTokenQualitative: '',
  surveyType: '',
};

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  getters: {
    balanceAnswersIdx: (state) => state.balanceAnswersIdx,
    answerData: (state) => state.answerData,
    surveyTokenQuantitative: (state) => state.surveyTokenQuantitative,
    surveyTokenQualitative: (state) => state.surveyTokenQualitative,
    surveyType: (state) => state.surveyType,
  },
  actions: {
    balanceVote({ commit }, questionIdx) {
      commit('balanceAnswersIdx', questionIdx);
    },
    setAnswerData({ commit }, answerData) {
      commit('setAnswerData', answerData);
    },
    setSurveyTokenQuantitative({ commit }, surveyTokenQuantitative) {
      commit('setSurveyTokenQuantitative', surveyTokenQuantitative);
    },
    setSurveyTokenQualitative({ commit }, surveyTokenQualitative) {
      commit('setSurveyTokenQualitative', surveyTokenQualitative);
    },
    setSurveyType({ commit }, type) {
      commit('setSurveyType', type);
    },
  },
  mutations: {
    balanceVote(state, questionIdx) {
      state.balanceAnswersIdx.push(questionIdx);
    },
    setAnswerData(state, answerData) {
      state.answerData = answerData;
    },
    setSurveyTokenQuantitative(state, token) {
      // 정량 조사
      state.surveyTokenQuantitative = token;
    },
    setSurveyTokenQualitative(state, token) {
      // 정성 조사
      state.surveyTokenQualitative = token;
    },
    setSurveyType(state, type) {
      state.surveyType = type;
    },
  },
  modules: {},
});
