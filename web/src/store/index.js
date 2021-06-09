import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: { "a": "test" }
  },
  mutations: {
    setUser(state, newUser) {
      state.userInfo = newUser;
    }
  },
  actions: {
    registerUser(context, user) {
      context.commit('setUser', user);
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
