import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {},
    cart: {}
  },
  mutations: {
    setUser(state, newUser) {
      Object.assign(state.userInfo, newUser);
    },
    setInCart(state, productObj) {
      const id = Object.keys(productObj)[0];
      if (state.cart[id]) {
        state.cart[id] = { ...state.cart[id], ...productObj[id] };
      } else {
        state.cart = { ...state.cart, ...productObj };
      }
    },
    unsetInCart(state, productId) {
      delete state.cart[productId];
    },
    unsetCart(state) {
      state.cart = {};
    },
  },
  actions: {
    registerUser(context, user) {
      context.commit('setUser', user);
    },
    updateCart(context, productObj) {
      context.commit('setInCart', productObj);
    },
    removeCartItem(context, productId) {
      context.commit('unsetInCart', productId);
    },
    emptyCart(context) {
      context.commit('unsetCart');
    }

  },
  modules: {
  },
  getters: {
    getUser(state) {
      return state.userInfo;
    }
  }
})
