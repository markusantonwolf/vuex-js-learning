<template>
  <div id="product-list-two">
    <h2>product-list-two</h2>
    <ul>
      <li v-for="product in saleProducts">
        {{product.name}} - Price: {{product.price}}
      </li>
    </ul>
    <button v-on:click="reducePrice" type="button" name="button">Change</button>
  </div>
</template>

<script>

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  data () {
    return {

    }
  },
  computed: {
    products(){
        return this.$store.state.products;
    },
    ...mapGetters([
      'saleProducts'
    ])
  },
  methods: {
    reducePrice() {
      this.$store.dispatch('reducePrice', {number: 0.5})
    //   // this.$store.commit('reducePrice', {number: 10})
    //   // this.$store.state.products[0].name = 'Changed'
    }
  }
}
</script>

<style>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
