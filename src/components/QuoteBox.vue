<template>
  <div>
   <h3>{{ currentQuote.author }}</h3>
   <p>{{ currentQuote.quote }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      currentQuote: Object
    }
  }
</script>
