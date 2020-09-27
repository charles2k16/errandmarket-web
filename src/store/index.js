import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import emstate from './models/emstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    emstate
  },
  plugins: [
    createPersistedState()
  ]
})
