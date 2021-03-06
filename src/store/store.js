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
    ],
    token: 'token'
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map( product => {
        return {
          name:  '**' + product.name + '**',
          price: product.price / 2,
        };
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach( product => {
        product.price = product.price / payload.number
      })
    },
    setToken: (state, payload) => {
      state.token = payload
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      context.commit('reducePrice', payload)
    },
    setToken: (context, payload) => {
      context.commit('setToken', payload)
    }
  }
})
