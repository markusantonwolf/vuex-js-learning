import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
    ]
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach( product => {
        product.price = product.price / payload.number
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      context.commit('reducePrice', payload)
    }
  }
})
