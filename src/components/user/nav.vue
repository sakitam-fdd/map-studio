<template>
  <div class="ms-left-nav" id="ms-left-nav">
    <span v-for="item in navList"
       class="nav-item iconfont"
       @click="itemClick(item)"
       :style="{backgroundImage: 'url(' + item['icon'] + ')'}"
       :class="itemSelected === item.className ? 'active' : ''">{{item.name}}</span>
  </div>
</template>
<script>
  import router from '@/router'
  export default {
    name: 'nav',
    data () {
      return {
        navList: [
          {
            icon: './static/images/app.png',
            name: '应用管理',
            className: 'left-nav-app',
            router: ''
          },
          {
            icon: './static/images/mapEdit.png',
            name: '自定义地图',
            className: 'nav-item-mapstyle',
            router: 'studioManage'
          }
        ],
        itemSelected: ''
      }
    },
    mounted () {
      Ps.initialize(document.querySelector('#ms-left-nav'))
    },
    methods: {
      itemClick (item) {
        this.itemSelected = item['className']
        router.push({name: item['router']})
      }
    }
  }
</script>
<style lang="scss">
  .ms-left-nav {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    width: 100px;
    background-color: #323C4D;
    min-height: 718px;
    span {
      display: block;
      height: 100px;
      font-size: 14px;
      padding-top: 60px;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center 25px;
      background-size: 26px 25px;
      border-bottom: 1px solid #3C495F;
      color: rgba(255,255,255,.5);
      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #3F495E;
      }
    }
    .active {
      color: #fff;
      background-color: #3F495E;
    }
  }
</style>
