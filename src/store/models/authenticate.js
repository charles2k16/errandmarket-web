const state = {
  user: null,
  userShoppingCart: [],
  token: '',
  isLoggedIn: false
}

// getters
const getters = {
  getUser: (state) => state.user,
  getCartItems: (state) => state.userShoppingCart,
  getToken: (state) => state.token,
  isLoggedIn: (state) => state.isLoggedIn
}

// mutations
const mutations = {
  UPDATE_CART: (state, item) => {
    state.userShoppingCart.push(item)
  },
  REMOVE_CART_ITEM: (state, itemIndex) => {
    state.userShoppingCart.splice(itemIndex, 1)
  }
}

// actions
const actions = {
  addItemToCart ({commit}, response) {
    commit('UPDATE_CART', response)
  },
  removeItemFromCart ({commit}, response) {
    commit('REMOVE_CART_ITEM', response)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
