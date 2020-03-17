<template>
  <div id="app">
    <count-add></count-add>
    -------------------------------------
    <count-low></count-low>
  </div>
</template>

<script>
import count1 from './components/vuex/count1'
import count2 from './components/vuex/count2'

export default {
  name: 'app',
  components: {
    countAdd:count1,
    countLow:count2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
