<template>
  <div class="map-popover-box">
    <ul>
      <li v-for="item in items" class="popover-box" @click="actionMenu(item)">
        <div class="popover-box-icon"></div>
        <span>{{item.label}}</span>
        <div class="popover-box-color" :style="{background: item.color}"></div>
      </li>
    </ul>
  </div>
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
    },
    methods: {
      actionMenu (item) {
        console.log(item)
      }
    }
  }
</script>
<style lang="scss">
  .map-popover-box {
    position: relative;
    background: #212020;
    border-radius: 2px;
    box-shadow: 0 0 9px #000;
    .popover-box {
      width: 200px;
      position: relative;
      height: 32px;
      line-height: 32px;
      font-size: 12px;
      color: #8a8a8a;
      padding-left: 50px;
      .popover-box-icon {
        position: absolute;
        left: 23px;
        top: 10px;
        background: #000;
        border-radius: 2px;
        width: 4px;
        height: 13px;
      }
      .popover-box-color {
        width: 13px;
        height: 13px;
        position: absolute;
        right: 13px;
        top: 10px;
        border-radius: 2px;
      }
      &:hover {
        cursor: pointer;
        color: #fff;
        .popover-box-icon {
          background: #019cfa;
        }
      }
    }
  }
</style>
