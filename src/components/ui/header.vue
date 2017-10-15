<template>
  <header class="ms-header">
    <h1 class="ms-header-logo">
      <a class="header-lbs" href="/">
        <span class="text">{{header.title}}</span>
      </a>
      <a class="header-dev" href="/dev">
        <span class="text">{{header.devTitle}}</span>
      </a>
    </h1>
    <div class="ms-header-nav-right">
    </div>
  </header>
</template>
<script>
  export default {
    name: 'header',
    data () {
      return {
        header: {
          title: '',
          devTitle: ''
        }
      }
    }
  }
</script>
<style lang="scss">
  .ms-header {
    position: relative;
    width: 100%;
    min-width: 1280px;
    height: 50px;
    padding: 0 40px 0 20px;
    font-size: 14px;
    color: #fff;
    background-color: #1b9de8;
    .ms-header-logo {
      float: left;
      padding: 10px 0;
      a {
        display: block;
        width: 150px;
        height: 30px;
        background-image: url(//lbs.amap.com/dev/web/public/dist/images/logo_white_2x.2b40a3.png);
        background-repeat: no-repeat;
        background-size: 214.5px 30px;
        float: left;
      }
      .header-dev {
        width: 64.5px;
        transition: .3s;
        background-position: right;
      }
    }
    .ms-header-nav-right {
    }
  }
</style>
