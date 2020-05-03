const state = {
  user: null,
  cart: [],
  token: '',
  isLoggedIn: false
}

// getters
const getters = {
  getUser: (state) => state.user,
  getCartItems: (state) => state.cart,
  getToken: (state) => state.token,
  isLoggedIn: (state) => state.isLoggedIn
}

// mutations
const mutations = {
  UPDATE_CART: (state, product) => {
    let newItem = state.cart.push(product)
    state.cart = newItem
  }
}

// actions
const actions = {
  addItemToCart ({commit}, response) {
    commit('UPDATE_CART', response)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
