import Vue from 'vue'
import Vuex from 'vuex'

import studioHeader from './modules/studioHeader'
import editPanel from './modules/EditPanel'
Vue.use(Vuex)
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    studioHeader,
    editPanel
  }
})
