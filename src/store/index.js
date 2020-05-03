import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import authenticate from './models/authenticate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    authenticate
  },
  plugins: [
    createPersistedState()
  ]
})
