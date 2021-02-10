<template>
  <div id="app">
    <Header />
    <QuoteBox
    :currentQuote="quoteData"
    :refresh="refresh"
    />
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
  data() {
    return {
      quoteData: {},
      quote: 'quote',
      author: 'author'
    }
  },
  methods: {
    refresh() {
      return window.location.reload(true);
    }
  },
  mounted: function() {
    fetch('http://quotes.stormconsultancy.co.uk/random.json', {
      method: 'get'
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.quoteData = jsonData
      })
  }
}

</script>

<style>

body {
  display: flex;
  justify-content: center;
  background-color: tan;
}

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  background-color: brown;
}
</style>
