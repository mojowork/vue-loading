<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <bouncing-loader></bouncing-loader>
    <donut-loader></donut-loader>
    <bubbles-loader></bubbles-loader>
    <spokes-loader></spokes-loader>
    <bars-loader></bars-loader>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue-loading'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
