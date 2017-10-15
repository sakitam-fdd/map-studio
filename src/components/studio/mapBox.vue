<template>
  <div id="main-map" class="map-box">
  </div>
</template>
<script>
  import $Map from 'ol/map'
  import $View from 'ol/view'
  import $Tile from 'ol/layer/tile'
  import $OSM from 'ol/source/osm'
  import $Proj from 'ol/proj'
  export default {
    data () {
      return {
      }
    },
    mounted () {
      this.initMap()
    },
    methods: {
      initMap () {
        let Map = new $Map({
          target: 'main-map',
          layers: [
            new $Tile({
              source: new $OSM()
            })
          ],
          view: new $View({
            center: $Proj.fromLonLat([37.41, 8.82]),
            zoom: 4
          })
        })
        console.log(Map)
      }
    }
  }
</script>
<style lang="scss">
  .map-box {
    position: absolute;
    top: 38px;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: 200px;
    overflow: hidden;
  }
</style>
