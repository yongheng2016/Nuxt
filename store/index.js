import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        info: ''
    },
    mutations: {
        getInfo(state,info) {
            state.info = info
        }
    }
})

export default store