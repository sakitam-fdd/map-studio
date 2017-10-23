<template>
  <div class="color-picker">
    <div class="name">{{item.title}}</div>
    <div class="edit">
      <div class="color-picker-box">
        <input class="color-rgb" v-model="item.color">
        <div class="color-view color-view-no" @click.stop="showContentClick()"></div>
        <sketch v-if="showContent" class="color-picker-content" v-model="colors"></sketch>
      </div>
    </div>
  </div>
</template>
<script>
  import { Sketch } from 'vue-color'
  export default {
    props: {
      item: Object,
      valueChange: {
        type: Function
      }
    },
    mounted () {
      document.addEventListener('mousedown', this.handleMouseDown.bind(this))
    },
    data () {
      return {
        colors: {
          hex: '#194d33',
          hsl: {
            h: 150,
            s: 0.5,
            l: 0.2,
            a: 1
          },
          hsv: {
            h: 150,
            s: 0.66,
            v: 0.30,
            a: 1
          },
          rgba: {
            r: 25,
            g: 77,
            b: 51,
            a: 1
          },
          a: 1
        },
        showContent: false
      }
    },
    watch: {
      colors: function (value) {
        if (value['hex']) {
          this.item.color = value['hex']
          this.$emit('value-change', this.item)
        }
      }
    },
    methods: {
      showContentClick () {
        this.showContent = !this.showContent
      },
      handleMouseDown (event) {
        if (event.target !== document.querySelector('.color-view') && event.target !== document.querySelector('.color-picker-content')) {
//          this.showContent = false
        }
      }
    },
    components: {
      Sketch
    }
  }
</script>
<style lang="scss">
  .color-picker {
    margin-top: 28px;
    margin-bottom: 10px;
    .edit {
      position: absolute;
      right: 8px;
      top: 5px;
      background: #222;
      border: 1px solid #212020;
      border-radius: 3px;
      width: 138px;
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      .color-rgb {
        width: 70px;
        height: 25px;
        line-height: 25px;
        background: #222;
        color: #fff;
        border: none;
      }
      .color-view {
        width: 14px;
        height: 14px;
        background: url('../../../static/images/color.png') no-repeat;
        background-size: 14px 14px;
        overflow: hidden;
        cursor: pointer;
        position: absolute;
        right: 9px;
        top: 7px;
      }
      .color-picker-content {
        position: absolute;
        right: -230px;
        top: -40px;
      }
    }
  }
</style>
