<template>
  <div id="product-list-one">
    <h2>Login</h2>
    <button v-on:click="login" type="button" name="button">Login</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    login(){

      this.$http.post('https://data.craftplacr.com').then(response => {
        // success callback
        console.info(response)
      }, response => {
        // error callback
        console.info(response)
      });
      // this.$http.post('https://data.craftplacr.com/api/v1/login', {"username":"markus.wolf","password":"markus.wolf"}).then((response) => {
      //   console.info(response.headers)
      //   console.info(response)
      // });


      // this.$http.get('https://www.food-trucks-deutschland.de/api/tours/today').then(response => {
      //   // success callback
      //   console.info(response.headers.get('Access-Control-Allow-Origin'))
      // }, response => {
      //   // error callback
      //   console.info(response.headers.get('Access-Control-Allow-Origin'))
      // });


      // this.$http.get('https://www.food-trucks-deutschland.de/api/tours/today',
      // {
      //     headers: {
      //       'Access-Control-Allow-Origin': '*',
      //       'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
      //       'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
      //       'Content-Type': 'application/json',
      //       'Accept': 'application/json'
      //     }
      //   }
      //   ).then(function (response) {
      //     // Success
      //   }, function (response) {
      //     // Error
      //   })

    }
  }
}
</script>

<style>

</style>
