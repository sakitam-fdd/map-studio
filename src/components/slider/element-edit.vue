<template>
  <div class="element-edit-bar">
    <div class="title">{{title}}</div>
    <div class="close-btn" @click.stop="close()">
      <i class="iconfont icon-guanbi"></i>
    </div>
    <div v-for="item in items">
      <check-box
        v-if="item.type === 'checkBox'"
        :item="item"
        @value-change="valueChange"
        class="element-editor"></check-box>
      <color-picker
        v-else-if="item.type === 'colorPicker'"
        :item="item"
        @value-change="valueChange"
        class="element-editor"></color-picker>
      <drag-bar
        v-else="item.type === 'dragBar'"
        :item="item"
        @value-change="valueChange"
        class="element-editor"></drag-bar>
    </div>
  </div>
</template>
<script>
  import checkBox from '../toolBox/checkBox'
  import colorPicker from '../toolBox/colorPicker'
  import dragBar from '../toolBox/dragBar'
  export default {
    props: {
    },
    data () {
      return {
        title: '陆地',
        items: [
          {
            type: 'checkBox',
            title: '是否显示',
            checked: true
          },
          {
            type: 'colorPicker',
            title: '颜色',
            color: '多种颜色'
          },
          {
            type: 'dragBar',
            title: '不透明度',
            opacity: 100
          },
          {
            type: 'colorPicker',
            title: '描边颜色',
            color: '多种颜色'
          },
          {
            type: 'dragBar',
            title: '描边不透明度',
            opacity: 100
          }
        ]
      }
    },
    watch: {
      items: function (value) {
        console.log(value)
      }
    },
    methods: {
      close () {
        this.$store.dispatch('actionShowEditor', false)
      },
      valueChange (item) {
        console.log(this.items, item)
      }
    },
    components: {
      checkBox,
      colorPicker,
      dragBar
    }
  }
</script>
<style lang="scss">
  .element-edit-bar {
    width: 300px;
    position: absolute;
    top: 0;
    left: 200px;
    right: 0;
    bottom: 0;
    background: #343434;
    color: #fff;
    padding: 10px 14px 14px;
    display: block;
    -webkit-animation: .2s moveLeft forwards;
    animation: .2s moveLeft forwards;
    z-index: 1;
    .title {
      padding-left: 13px;
      &:before {
        position: absolute;
        content: "";
        height: 13px;
        width: 3px;
        background: #019cfa;
        left: 15px;
        top: 12px;
        border-radius: 4px;
      }
    }
    .close-btn {
      width: 12px;
      height: 12px;
      line-height: 12px;
      text-align: center;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-size: 12px;
      color: #5a5858;
    }
    .element-editor {
      position: relative;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -moz-box-orient: horizontal;
      -moz-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      height: 40px;
      line-height: 40px;
      padding-left: 12px;
    }
  }
</style>
