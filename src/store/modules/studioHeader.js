/**
 * Created by FDD on 2017/9/14.
 * @desc 关联头部store
 */

import {
  SET_MAP_CENTER,
  SET_MAP_ZOOM
} from '../mutation-types'
// initial state
const state = {
  center: [],
  zoom: 0
}
// getters
const getters = {
  center: state => state.center,
  zoom: state => state.zoom
}
// actions
const actions = {
  actionMapCenter ({commit, state}, param) {
    commit(SET_MAP_CENTER, param)
  },
  actionMapZoom ({commit, state}, param) {
    commit(SET_MAP_ZOOM, param)
  }
}
// mutations
const mutations = {
  [SET_MAP_CENTER] (state, data) {
    state.center = data
  },
  [SET_MAP_ZOOM] (state, data) {
    state.zoom = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
