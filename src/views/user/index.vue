<template>
  <div class="ms-user">
    <index-header></index-header>
    <div class="ms-content">
      <ms-nav></ms-nav>
      <div class="ms-root">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import indexHeader from '../../components/ui/header'
  import msNav from '../../components/user/nav'
  export default {
    data () {
      return {
        header: {
          title: '',
          devTitle: ''
        }
      }
    },
    components: {
      msNav,
      indexHeader
    }
  }
</script>
<style lang="scss">
  .ms-user {
    .ms-content {
      position: absolute;
      top: 50px;
      bottom: 0;
      left: 0;
      right: 0px;
      .ms-root {
        height: 100%;
        min-height: 718px;
        width: 100%;
        padding-left: 100px;
      }
    }
  }
</style>
