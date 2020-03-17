<template>
  <div>
    <h1>现在最新count值为：{{count}}</h1>
    <h1>getter：{{addDis}}</h1>
    <button @click="reduce">-1</button>
    <button @click="reduceN(5)">-1*n</button>
    <button @click="asyncReduce">-1Async</button>
  </div>
</template>
<script>
  import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
  export default {
    data(){
      return{

      }
    },
    methods:{
      ...mapMutations(['reduce','reduceN']),
      ...mapActions(['asyncReduce'])

    },
    computed:{
      //利用计算属性传值（vuex)
      ...mapState(['count']),
      //getters中的封装数据也在其中
      ...mapGetters(['addDis'])
    }
  }
</script>
