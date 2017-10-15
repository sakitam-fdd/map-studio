<template>
  <div class="ms-studio">
    <ms-map-nav></ms-map-nav>
    <div class="ms-studio-root">
      <map-slider></map-slider>
      <map-box></map-box>
    </div>
  </div>
</template>
<script>
  import msMapNav from '../../components/studio/studioHeader'
  import mapSlider from '../../components/studio/mapSlider'
  import mapBox from '../../components/studio/mapBox'
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
      msMapNav,
      mapSlider,
      mapBox
    }
  }
</script>
<style lang="scss">
  .ms-studio {
    .ms-root {
      height: 100%;
      min-height: 718px;
      width: 100%;
      padding-left: 100px;
    }
  }
</style>
