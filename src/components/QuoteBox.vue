<template>
  <div>
   <p>"{{ currentQuote.quote }}"</p>
   <h3>- {{ currentQuote.author }}</h3>
  </div>
</template>


<script>
  export default {
    props: {
      currentQuote: Object
    }
  }
</script>

<style>
  p {
    font-style: italic;
  }
</style>
