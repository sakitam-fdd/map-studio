// import * as api from '../store/api'
// import moment from 'moment'
export default {
  timestampFormat (str, bl, flag) {
    if (bl) {
      str = parseInt(str) - 8 * 60 * 60 * 1000
    }
    let date = new Date(str)
    let yy = date.getFullYear()
    let mmmm = date.getMonth() + 1
    let dd = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    if (flag) {
      return yy + '-' + (mmmm < 10 ? ('0' + mmmm) : mmmm) + '-' + (dd < 10 ? ('0' + dd) : dd)
    } else {
      return yy + '-' + (mmmm < 10 ? ('0' + mmmm) : mmmm) + '-' + (dd < 10 ? ('0' + dd) : dd) + ' ' + (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (s < 10 ? ('0' + s) : s)
    }
  },
  dateFormat (date, concatStr) {
    date = new Date(date)
    let yy = date.getFullYear()
    let mmmm = date.getMonth() + 1
    let dd = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    if (!concatStr) {
      concatStr = '-'
    }
    return yy + concatStr + (mmmm < 10 ? ('0' + mmmm) : mmmm) + concatStr + (dd < 10 ? ('0' + dd) : dd) + ' ' + (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (s < 10 ? ('0' + s) : s)
  },
  getYMDDate (date, concatStr) {
    let yy = date.getFullYear()
    let mmmm = date.getMonth() + 1
    let dd = date.getDate()
    if (!concatStr) {
      concatStr = '-'
    }
    return (yy + concatStr + (mmmm < 10 ? ('0' + mmmm) : mmmm) + concatStr + (dd < 10 ? ('0' + dd) : dd))
  },
  getHMSDate (date, concatStr, isReturnS) {
    if (isReturnS === undefined || isReturnS === null || isReturnS === '') {
      isReturnS = true
    } else if (isReturnS === false) {
      isReturnS = false
    }
    let res = ''
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    if (!concatStr) {
      concatStr = ':'
    }
    res = (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m)
    if (isReturnS) {
      res += ':' + (s < 10 ? ('0' + s) : s)
    }
    return res
  }
}
