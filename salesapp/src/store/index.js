import { createStore } from 'vuex'

export default createStore({
  state: {
    sales: []
  },
  mutations: {
    addSales(state, sale) {
      state.sales = [...state.sales, sale]
    }
  },
  actions: {
    addSale(context, sale) {
      context.commit('addSales', sale);
    }
  },
  modules: {
  },
  getters: {
    app_sales(state) {
      return state.sales;
    }
  }
})
