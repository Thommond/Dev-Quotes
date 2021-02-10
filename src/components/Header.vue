<template>
  <div>
    <h1>Developer Quote Generator!</h1>

    <button @click="window.location.reload(true)" type="button">New Quote</button>
 </div>
</template>

<style>

  h1 {
    border-bottom: 2px solid black;
  }

  button {
    width: 200px;
    height: 50px;
    font-size: 18pt;
    background-color: #fbfbfb;
  }

  div {
    background-color: black;
    max-width: 600px;
    padding: 20px;
    color: white;
  }

  template {
    color: purple;
  }
</style>
