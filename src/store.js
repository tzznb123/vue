import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0

  },
  mutations: {
    add(state){
      state.count++
    },
    reduce(state){
      state.count--
    },
    reduceN(state,step){
      state.count-=step
    },
    addN(state,step){
      state.count+=step
    },
    //异步操作只能用actions
    addSync(state){
      setTimeout(function () {
        state.count++
      },2)
    },
    reduceSync(state){
      setTimeout(function () {
        state.count--
      },2)
    }

  },
  actions: {
    asyncAdd(context){
      context.commit('addSync')
    },
    asyncReduce(context){
      context.commit('reduceSync')
    }

  },
  getters:{
    addDis(state){
      return `经过描述的最新值为${state.count}`
    }
  }
})
