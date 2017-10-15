<template>
  <div class="ms-user">
    <ms-nav></ms-nav>
    <div class="ms-root">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
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
      msNav
    }
  }
</script>
<style lang="scss">
  .ms-user {
    .ms-root {
      height: 100%;
      min-height: 718px;
      width: 100%;
      padding-left: 100px;
    }
  }
</style>
