<template>
  <div class="check-box">
    <div class="mycheckbox">
      <label class="checkbox-wrapper">
        <span class="checkbox"
              :class="item.checked ? 'checkbox-checked' : ''"
              @click.stop="checkClick()">
          <input type="checkbox" class="checkbox-input" v-model="isChecked">
          <span class="checkbox-inner"></span>
        </span>
      </label>
    </div>
    <div class="name">{{item.title}}</div>
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
        isChecked: true
      }
    },
    watch: {
      isChecked: function (value) {
        this.item.checked = value
        this.$emit('value-change', this.item)
      }
    },
    methods: {
      checkClick () {
        this.isChecked = !this.isChecked
      }
    },
    components: {
    }
  }
</script>
<style lang="scss">
  .check-box {
    margin-top: 28px;
    margin-bottom: 10px;
    .mycheckbox {
      margin-right: 11px;
      &:before {
        content: "";
        position: absolute;
        top: -12px;
        left: -5px;
        height: 1px;
        width: 281px;
        background: #3a3939;
      }
      .checkbox-wrapper {
        position: relative;
        cursor: pointer;
        font-size: 12px;
        display: inline-block;
        .checkbox {
          white-space: nowrap;
          cursor: pointer;
          outline: none;
          display: inline-block;
          line-height: 1;
          position: relative;
          vertical-align: text-bottom;
          .checkbox-input {
            position: absolute;
            left: 0;
            z-index: 1;
            cursor: pointer;
            opacity: 0;
            filter: alpha(opacity=0);
            top: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
            line-height: normal;
            box-sizing: border-box;
            padding: 0;
          }
          .checkbox-inner {
            width: 15px;
            background: #535353;
            border-radius: 100%;
            border: 1px solid #535353;
            position: relative;
            top: 0;
            left: 0;
            display: block;
            height: 14px;
            transition: all .3s;
            &:after {
              -webkit-transform: rotate(45deg) scale(0);
              -ms-transform: rotate(45deg) scale(0);
              transform: rotate(45deg) scale(0);
              position: absolute;
              left: 4px;
              top: 1px;
              display: table;
              width: 5px;
              height: 8px;
              border: 2px solid #fff;
              border-top: 0;
              border-left: 0;
              content: " ";
              transition: all .1s cubic-bezier(.71, -.46, .88, .6);
            }
          }
        }
        .checkbox-checked {
          .checkbox-inner {
            &:after {
              -webkit-transform: rotate(45deg) scale(1);
              -ms-transform: rotate(45deg) scale(1);
              transform: rotate(45deg) scale(1);
            }
          }
        }
      }
    }
  }
</style>
