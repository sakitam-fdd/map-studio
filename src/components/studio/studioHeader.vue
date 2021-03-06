<template>
  <div class="studio-header clearfix">
    <div class="map-action">
      <Tooltip
        v-for="action in actions"
        :key="action.alias"
        class="item" effect="dark" :content="action.tooltip" placement="bottom">
        <i class="iconfont" :class="action.icon"></i>
      </Tooltip>
    </div>
    <a class="out-icon" @click="publish()">
      <i class="iconfont icon-zititubiaotuichu"></i>
    </a>
    <div class="clearfix" :class="isActive ? 'name-save' : 'name'" @click="edit_()">
      <div v-if="isActive">
        <input type="text"
          autofocus="autofocus"
          maxlength="20"
          v-model="studioName"
          @blur="onblur()">
        <i class="iconfont icon-wancheng"></i>
      </div>
      <div v-else>
        <span class="nameTxt text-overflow">{{studioName}}</span>
        <i class="iconfont icon-bianji"></i>
      </div>
    </div>
    <div class="map-zoom">
      <span class="txt">缩放级别</span>
      <span class="btn" @click="zoomAction(-1)">
        <i class="iconfont icon-suoxiao"></i>
      </span>
      <input type="text" name="mapZoom" v-model="zoom">
      <span class="btn" @click="zoomAction(1)">
        <i class="iconfont icon-ziyuan"></i>
      </span>
    </div>
    <div class="map-center clearfix">
      <span>地图中心</span>
      <span class="txt-x">X</span>
      <input type="text" v-model="center[0]">
      <span class="txt-y">Y</span>
      <input type="text" v-model="center[1]">
      <span class="mapicon-locate" @click="getLocation()">
        <i class="iconfont icon-dingwei"></i>
      </span>
    </div>
    <div class="map-redo">
      <span class="disable" id="style-undo">
        <Tooltip class="item" effect="dark" content="撤销" placement="bottom">
          <i class="iconfont icon-huitui"></i>
        </Tooltip>
      </span>
      <span class="disable" id="style-redo">
        <Tooltip class="item" effect="dark" content="重做" placement="bottom">
          <i class="iconfont icon-huitui"></i>
        </Tooltip>
      </span>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import $Easing from 'ol/easing'
  import $Proj from 'ol/proj'
  export default {
    data () {
      return {
        actions: [
          {
            icon: 'icon-fabu',
            tooltip: '发布',
            alias: 'icon-fabu'
          },
          {
            icon: 'icon-baocun',
            tooltip: '保存',
            alias: 'icon-baocun'
          },
          {
            icon: 'icon-icon28',
            tooltip: '我要反馈',
            alias: 'icon-icon28'
          }
        ],
        studioName: '自定义样式',
        isActive: false,
        duration_: 250
      }
    },
    computed: {
      ...mapState({
        center: state => state.studioHeader.center,
        zoom: state => state.studioHeader.zoom
      })
    },
    methods: {
      publish () {
        console.info('发布')
      },
      edit_ () {
        this.isActive = true
      },
      onblur () {
        console.log(this.studioName)
        this.isActive = false
      },
      zoomAction (delta) {
        if (!this.$View) {
          throw new Error('未获取到视图！')
        } else {
          let currentResolution = this.$View.getResolution()
          if (currentResolution) {
            let newResolution = this.$View.constrainResolution(currentResolution, delta)
            if (this.duration_ > 0) {
              if (this.$View.getAnimating()) {
                this.$View.cancelAnimations()
              }
              this.$View.animate({
                resolution: newResolution,
                duration: this.duration_,
                easing: $Easing.easeOut
              })
            } else {
              this.$View.setResolution(newResolution)
            }
          }
        }
      },
      getLocation () {
        if (!navigator.geolocation) {
          this.$alert('您的浏览器不支持地理位置', '用户提示', {
            confirmButtonText: '确定'
          })
        } else {
          navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError)
        }
      },
      locationSuccess (position) {
        let longitude = position.coords.longitude
        let latitude = position.coords.latitude
        let sourceProj = this.$View.getProjection()
        let location = $Proj.transform([longitude, latitude], 'EPSG:4326', sourceProj)
        this.$View.animate({
          center: location,
          duration: 250,
          easing: $Easing.easeOut
        })
      },
      locationError () {
        this.$alert('定位失败', '用户提示', {
          confirmButtonText: '确定'
        })
      }
    }
  }
</script>
<style lang="scss">
  .studio-header {
    height: 38px;
    line-height: 38px;
    background-image: linear-gradient(-180deg,#393939,#2d2d2d);
    font-size: 12px;
    color: #b7b7b7;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .map-action {
      float: right;
      div.item {
        margin-right: 38px;
        &:hover {
          cursor: pointer;
          color: #FFFFFF;
        }
      }
    };
    .out-icon {
      float: left;
      background: #15a4fa;
      width: 38px;
      height: 38px;
      line-height: 37px;
      text-align: center;
      i {
        color: #fff;
        font-size: 18px;
      }
      &:hover {
        background: #45b7fe;
        cursor: pointer;
      }
    };
    .name-save {
      cursor: pointer;
      float: left;
      margin-left: 13px;
      input {
        display: inline-block;
        background: #222;
        border: 1px solid #161616;
        border-radius: 3px;
        height: 26px;
        line-height: 26px;
        padding: 0 12px;
        color: #FFFFFF;
        font-family: inherit;
        font-size: inherit;
      }
      i {
        color: #9f9f9f;
        margin-left: 10px;
        font-size: 12px;
        display: inline-block;
        &:hover {
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
    .name {
      cursor: pointer;
      float: left;
      margin-left: 26px;
      font-size: 12px;
      color: #fbfbfb;
      line-height: 38px;
      .nameTxt {
        float: left;
        display: inline-block;
        max-width: 152px;
      }
      .text-overflow {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      i {
        float: left;
        display: inline-block;
        margin-left: 16px;
        font-size: 13px;
        color: #9f9f9f;
        &:hover {
          color: #ffffff;
          cursor: pointer;
        }
      }
    };
    .map-zoom {
      float: right;
      margin-right: 120px;
      .txt {
        margin-right: 16px;
      }
      .btn {
        cursor: pointer;
        display: inline-block;
        background: #3c3b3b;
        border-radius: 3px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        position: relative;
        top: 0;
        i {
          font-size: 10px;
          color: #f0f0f0;
        }
        &:hover {
          background: #606060;
        }
      }
      input {
        display: inline-block;
        cursor: pointer;
        margin: 0 14px;
        background: #222;
        border: 1px solid #161616;
        border-radius: 3px;
        width: 44px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
      }
    }
    .map-center {
      float: right;
      margin-right: 71px;
      line-height: 38px;
      .txt-x {
        margin: 0 8px 0 20px;
      }
      .txt-y {
        margin: 0 8px 0 23px;
      }
      input {
        display: inline-block;
        cursor: pointer;
        background: #222;
        border: 1px solid #161616;
        border-radius: 3px;
        width: 80px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
      }
      .mapicon-locate {
        float: right;
        margin-left: 20px;
        i {
          color: #9f9f9f;
          cursor: pointer;
          &:hover {
            color: #f0f0f0;
          }
        }
      }
    }
    .map-redo {
      float: right;
      margin-right: 70px;
      i {
        cursor: pointer;
        font-size: 15px;
        color: #9f9f9f;
        &:hover {
          color: #f0f0f0;
        }
      }
      #style-redo {
        margin-left: 18px;
        .item {
          transform: rotateY(180deg);
        }
      }
      .disable i {
        color: #696969;
      }
    }
  }
</style>
