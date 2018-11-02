<template>
  <div id="product-list-one">
    <h2>product-list-one</h2>
    <ul>
      <li v-for="product in products">
        {{product.name}} - Price: {{product.price}}
      </li>
    </ul>
    <button v-on:click="setCookie" type="button" name="button">SetCookie</button>
    <button v-on:click="getCookie" type="button" name="button">GetCookie</button>
    <button v-on:click="delCookie" type="button" name="button">DeleteCookie</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    setCookie() {
      // const today = new Date
      // this.$cookies.config('30d')
      this.$cookies.set("token","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", '30d')
      if (this.$cookies.isKey("token")) {
        console.info(true)
      }
    },
    getCookie() {
      if (this.$cookies.isKey("token")) {
        this.$store.dispatch('setToken', this.$cookies.get("token"))
      } else {
        console.info('COOKIE NOT AVAILIABLE')
      }
    },
    delCookie() {
      this.$cookies.remove("token");
      if (!this.$cookies.isKey("token")) {
        console.info(true)
        this.$store.dispatch('setToken', '')
      }
    }
  }
}
</script>

<style>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
