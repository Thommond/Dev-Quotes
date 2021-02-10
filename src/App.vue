<template>
  <div id="app">
    <Header />
    <QuoteBox />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuoteBox from './components/QuoteBox.vue'

export default {
  name: 'App',
  components: {
    Header,
    QuoteBox
  },
  mounted: function() {
    fetch('http://quotes.stormconsultancy.co.uk/random.json', {
      method: 'get'
    })
      .then((response) => {
        console.log(response.json());
      })
  }
}


</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
