<template>
  <div class="map-sider">
    <div class="box">
      <div class="nav-box">
        <div class="nav">
          <nav-list
            :p-items="PItems"
            v-if="PItems.length > 0"></nav-list>
        </div>
      </div>
      <element-edit v-if="showEditor"></element-edit>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import navList from '../slider/nav'
  import elementEdit from '../slider/element-edit'
  export default {
    data () {
      return {
        PItems: [
          {
            title: '区域面',
            alias: 'polygon',
            isOpen: false,
            superset: true,
            children: [
              {
                title: '陆地',
                alias: 'island'
              },
              {
                title: '绿地',
                alias: 'island'
              }
            ]
          },
          {
            title: '水系',
            alias: 'water',
            isOpen: false,
            superset: true
          }
        ]
      }
    },
    computed: {
      ...mapState({
        showEditor: state => state.editPanel.showEditor
      })
    },
    methods: {
      clickItem (item) {
        if (item) {
          this.showEditor = true
        }
      }
    },
    components: {
      navList,
      elementEdit
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
      .nav-box {
        width: 200px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        background: #202020;
        .nav {
          width: 217px;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
        }
      }
    }
  }
</style>
