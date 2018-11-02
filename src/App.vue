<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <p>Token: {{token}}</p>
    <login></login>
  </div>
</template>

<script>

import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo,
    'login': Login
  },
  data () {
    return {

    }
  },
  computed: {
    token() {
      return this.$store.state.token
    }
  }
}
</script>

<style>
* {
  font-family: 'Krub', sans-serif;
}
</style>
