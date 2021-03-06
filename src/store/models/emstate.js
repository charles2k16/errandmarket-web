import { Message } from 'element-ui'

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
    let duplicateItem = state.userShoppingCart.find(product => product.id === item.id);

    if (duplicateItem) {
      Message.error({
        message: 'Ops! Item already added to Cart',
        showClose: true,
      })
    } else {
      item.qty = 1;
      item.total = item.qty * item.price;
      state.userShoppingCart.push(item);
      Message.success({
        message: 'Item added to Cart',
        showClose: true,
      })
    }
  },
  REMOVE_CART_ITEM: (state, itemIndex) => {
    state.userShoppingCart.splice(itemIndex, 1);
  }
}

// actions
const actions = {
  addItemToCart({ commit }, response) {
    commit('UPDATE_CART', response);
  },
  removeItemFromCart({ commit }, response) {
    commit('REMOVE_CART_ITEM', response);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
