<template>
  <div class="map-sider">
    <div class="box"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style lang="scss">
  .map-sider {
    position: absolute;
    top: 38px;
    left: 0;
    bottom: 0;
    width: 200px;
    .box {
      width: 200px;
      position: relative;
      height: 100%;
      background: #272727;
    }
  }
</style>
