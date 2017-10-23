<template>
  <div id="app" oncontextmenu="return false">
    <div class="router-view">
      <router-view></router-view>
    </div>
    <loading :step="step" id="main-loading" @loading-end="LoadingEnd"></loading>
  </div>
</template>
<style lang="scss">
  $blue: '1b9de8';
  @import url(./assets/scss/popover.scss);
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }
  ul, li {
    list-style: none;
  }
  .clearfix {
    *zoom: 1;
  }
  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
  :focus {
    outline: none;
  }
  a {
    text-decoration: none;
    outline: none;
  }
  #app, body, html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 12px;
    line-height: 1.5;
    color: #3a3a3a;
  }
  #app {
    width: 100%;
    height: 100%;
    .router-view {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  .ms-button {
    height: 30px;
    line-height: 30px;
    background: #fff;
    color: #1f2d3d;
    border-radius: 15px;
    border: 1px solid #bfcbd9;
    padding: 0 10px;
    box-shadow: 0 4px 10px rgba(73,127,255,.42);
    transition: .3s;
    &:hover {
      cursor: pointer;
      border-color: $blue;
      color: $blue;
    }
  }
  .ms-button.primary {
    background: #1b9de8;
    border: 1px solid #1b9de8;
    color: #fff;
    &:hover {
      background: #1aafff;
      border-color: #1aafff;
    }
  }
</style>
<script>
  import store from './store'
  export default {
    name: 'app',
    mounted () {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          this.step = 1
        }
      }
      window.onresize = () => {
        return (() => {
          this.resize()
        })()
      }
    },
    data () {
      return {
        step: 50
      }
    },
    store,
    watch: {
      '$route': function (router) {
      }
    },
    methods: {
      resize () {
      },
      LoadingEnd () {
        document.querySelector('#main-loading').style.display = 'none'
      }
    },
    components: {
    }
  }
</script>
