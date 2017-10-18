import Vue from 'vue'
import Vuex from 'vuex'

import studioHeader from './modules/studioHeader'
Vue.use(Vuex)
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    studioHeader
  }
})
