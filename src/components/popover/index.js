import Vue from 'vue'
import popoverVue from './popover.vue'

let Template = Vue.extend(popoverVue)
let instance
// 创建实例
const initInstance = () => {
  instance = new Template({
    el: document.createElement('div')
  })
}
// 获取虚拟dom
export const getPopupElement = (_params) => {
  initInstance()
  instance.params = getParams(_params)
  document.body.appendChild(instance.$el)
  return instance.$el
}
// 获取图层配置
export const getParams = params_ => {
  if (params_['id']) {
    return params_
  } else {
    console.info('缺少关键查询参数！')
  }
}
