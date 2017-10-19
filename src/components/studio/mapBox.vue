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
  import MapBoxStyle from '../../assets/scripts/mapboxStyle'
//  import $Style from 'ol/style/style'
//  import $Fill from 'ol/style/fill'
//  import $Stroke from 'ol/style/stroke'
//  import $Icon from 'ol/style/icon'
//  import $Text from 'ol/style/text'
//  import { createMapboxStreetsV6Style } from '../../assets/scripts/mapbox-streets-v6-style'
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
        const layer = new $VectorTile({
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
//                url: 'https://{a-d}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1Ijoic21pbGVmZGQiLCJhIjoiY2owbDBkb2RwMDJyMTMycWRoeDE4d21sZSJ9.dWlPeAWsgnhUKdv1dCLTnw',
            url: this.$Config.services.$LayerUrl + this.$Config.services.$key,
            wrapX: false
          })
        })
        Vue.prototype.$Map = new $Map({
          target: 'main-map',
          layers: [],
          view: new $View({
            center: $Proj.fromLonLat([113.534501, 34.441045]),
            zoom: 4
          })
        })
        /* eslint new-cap: ["error", { "newIsCap": false }] */
        let map = new MapBoxStyle(this.$Map, layer, this.$Config.services.$StyleUrl + this.$Config.services.$key)
        console.log(map)
        Vue.prototype.$View = this.$Map.getView()
        this.$View.on('change:center', this.handelCenter_, this)
        this.$View.on('change:resolution', this.handelResolution_, this)
        this.$store.dispatch('actionMapCenter', this.fixCenter(this.$View.getCenter()))
        this.$store.dispatch('actionMapZoom', Math.ceil(4))
      },
      handelCenter_ (event) {
        let center = event.target.getCenter()
        let centerProj = this.fixCenter(center)
        this.$store.dispatch('actionMapCenter', centerProj)
      },
      fixCenter (center) {
        let sourceProj = this.$View.getProjection()
        let c1 = $Proj.transform(center, sourceProj, 'EPSG:4326')
        let centerProj = [c1[0].toFixed(6), c1[1].toFixed(6)]
        return centerProj
      },
      handelResolution_ (event) {
        let zoom = event.target.getZoom()
        this.$store.dispatch('actionMapZoom', Math.ceil(zoom))
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
