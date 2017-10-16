<template>
  <div id="main-map" class="map-box">
  </div>
</template>
<script>
  import Vue from 'vue'
  import $Map from 'ol/map'
  import $View from 'ol/view'
  import $VectorTile from 'ol/layer/vectortile'
  import $VectorSource from 'ol/source/vectortile'
  import $Tilegrid from 'ol/tilegrid'
  import $FormatMvt from 'ol/format/mvt'
  import $Proj from 'ol/proj'
  import $Style from 'ol/style/style'
  import $Fill from 'ol/style/fill'
  import $Stroke from 'ol/style/stroke'
  import $Icon from 'ol/style/icon'
  import $Text from 'ol/style/text'
  import { createMapboxStreetsV6Style } from '../../assets/scripts/mapbox-streets-v6-style'
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
        Vue.prototype.$Map = new $Map({
          target: 'main-map',
          layers: [
            new $VectorTile({
              renderBuffer: 100,
              renderMode: 'hybrid', // 渲染方式image，hybrid，vector，性能由高到低
              preload: 0,
              source: new $VectorSource({
                format: new $FormatMvt(),
                projection: 'EPSG:3857',
                overlaps: true,
                /* eslint new-cap: ["error", { "newIsCap": false }] */
                tileGrid: new $Tilegrid.createXYZ({
                  extent: $Proj.get('EPSG:3857').getExtent(),
                  tileSize: 256,
                  minZoom: 0,
                  maxZoom: 22
                }),
                url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1Ijoic21pbGVmZGQiLCJhIjoiY2owbDBkb2RwMDJyMTMycWRoeDE4d21sZSJ9.dWlPeAWsgnhUKdv1dCLTnw',
                wrapX: false
              }),
              style: createMapboxStreetsV6Style($Style, $Fill, $Stroke, $Icon, $Text)
            })
          ],
          view: new $View({
            center: $Proj.fromLonLat([37.41, 8.82]),
            zoom: 4
          })
        })
        Vue.prototype.$View = this.$Map.getView()
        this.$View.on('change:center', this.handelCenter_, this)
        this.$View.on('change:resolution', this.handelResolution_, this)
      },
      handelCenter_ (event) {
        console.log(event)
      },
      handelResolution_ (event) {
        console.log(event)
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
