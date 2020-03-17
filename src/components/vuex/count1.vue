<template>
  <div>
    <h1>现在最新count值为：{{$store.state.count}}</h1>
    <h1>getter:{{$store.getters.addDis}}</h1>
    <button @click="countAdd">+1</button>
    <button @click="countAddN(5)">+1*n</button>
    <button @click="countAddAsync">+1async</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      countAdd(){
        this.$store.commit('add')
      },
      countAddN(step){
        this.$store.commit('addN',step)
      },
      countAddAsync(){
        //调用actions中含有异步操作的方法
        this.$store.dispatch('asyncAdd')
      }
    }
  }
</script>
