import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balanceAnswers: [0],
  },
  getters: {
    balanceAnswers: (state) => {
      return state.balanceAnswers
    },

  },
  mutations: {
    setBalanceAnswer(state , idx:number = 0){
      console.log(localStorage.balanceAnswers,'test')
      state.balanceAnswers = localStorage.balanceAnswers || []
      state.balanceAnswers.push(idx)
    }

  },
  actions: {
    setBalanceIdx({ commit }, idx){
      commit('setBalanceAnswer',idx)
    }

  },
  modules: {},
});
