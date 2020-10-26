import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {}
}


export default new Vuex.Store(store)
