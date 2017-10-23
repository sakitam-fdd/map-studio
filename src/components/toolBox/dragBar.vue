<template>
  <div class="drag-bar">
    <div class="name">{{item.title}}</div>
    <div class="edit">
      <input type="text" v-model="item.opacity" class="edit-opacity-txt">
      <span>%</span>
      <div class="edit-opacity">
        <Slider v-model="opacity"></Slider>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      item: Object,
      valueChange: {
        type: Function
      }
    },
    data () {
      return {
        opacity: 100
      }
    },
    methods: {
    },
    watch: {
      opacity: function (value) {
        this.item['opacity'] = value
        this.$emit('value-change', this.item)
      }
    },
    components: {
    }
  }
</script>
<style lang="scss">
  .drag-bar {
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
      .edit-opacity-txt {
        cursor: pointer;
        height: 28px;
        line-height: 28px;
        width: 21px;
        background: #222;
        border: none;
        color: #ffffff;
      }
      .edit-opacity {
        position: absolute;
        right: 9px;
        top: 0px;
        width: 39px;
        .ivu-slider {
          .ivu-slider-wrap {
            margin: 12px 0!important;
            height: 2px;
            background: #717171;
            .ivu-slider-button-wrap {
              top: -7px!important;
              .ivu-slider-button {
                width: 8px;
                height: 8px;
                border: none;
                &:hover {
                  border-color: #FFFFFF;
                  -ms-transform: scale(1);
                  transform: scale(1);
                }
              }
            }
          }
        }
      }
    }
  }
</style>
