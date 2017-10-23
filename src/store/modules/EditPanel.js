/**
 * Created by FDD on 2017/9/14.
 * @desc 编辑器面板
 */

import {
  SET_SHOW_EDITOR
} from '../mutation-types'
// initial state
const state = {
  showEditor: false
}
// getters
const getters = {
  showEditor: state => state.showEditor
}
// actions
const actions = {
  actionShowEditor ({commit, state}, param) {
    commit(SET_SHOW_EDITOR, param)
  }
}
// mutations
const mutations = {
  [SET_SHOW_EDITOR] (state, data) {
    state.showEditor = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
