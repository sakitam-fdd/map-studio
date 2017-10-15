<template>
  <div class="ms-user-studio-manage">
    <div class="manage-leftbox">
      <div class="box">
        <div class="template-box">
          <div class="header clearfix">
            <div class="title-icon">
              <i class="iconfont icon-star"></i>
            </div>
            <div class="title">自定义地图模板</div>
            <div class="num">
              <span class="switch">
                <i class="iconfont icon-tupianzuofan"></i>
              </span>
              <span class="page-active">1</span><span class="">2</span>
              <span class="switch">
                <i class="iconfont icon-tupianyoufan"></i>
              </span>
            </div>
          </div>
          <div class="main clearfix">
            <div class="template-item" v-for="item in templates">
              <div class="img" :style="{backgroundImage: 'url(' + item['icon'] + ') no-repeat;'}"></div>
              <div class="info">
                <div class="name">{{item.name}}</div>
                <a class="use">{{item.info}}</a>
                <a class="senior"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="user-style-box"></div>
      </div>
    </div>
    <div class="manage-rightbox"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        header: {
          title: '',
          devTitle: ''
        },
        templates: [
          {
            name: '标准',
            icon: 'http://lbs.amap.com/dev/config/mapstyle/img/normal.png',
            info: '使用该模板'
          }
        ]
      }
    },
    components: {}
  }
</script>
<style lang="scss">
  .ms-user-studio-manage {
    position: relative;
    height: 100%;
    max-height: 100%;
    min-height: 718px;
    overflow: auto;
    .manage-leftbox {
      background: #fbfbfb;
      position: absolute;
      left: 0;
      right: 402px;
      bottom: 0;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      .box {
        width: 720px;
        margin: 0 auto;
        .template-box {
          position: relative;
          .header {
            margin-top: 28px;
            margin-bottom: 30px;
            .title-icon {
              margin-left: -3px;
              float: left;
              background: #857dcd;
              width: 30px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              border-radius: 100%;
              margin-top: 3px;
              i {
                color: #fff;
                font-size: 14px;
              }
            }
            .title {
              float: left;
              font-size: 16px;
              color: #3c3d3f;
              line-height: 36px;
              margin-left: 10px;
            }
            .num {
              position: absolute;
              right: 0;
              top: 9px;
              span {
                display: inline-block;
                text-align: center;
                width: 18px;
                height: 18px;
                line-height: 18px;
                cursor: pointer;
                font-size: 12px;
                color: #a0a0a0;
                border-radius: 100%;
                margin: 0 7px;
              }
              .page-active {
                color: #fff;
                background: #15a4fa;
              }
              .switch {
                i {
                  font-size: 10px;
                  color: #d3d4db;
                }
              }
            }
          }
          .main {
            padding-bottom: 29px;
            border-bottom: 1px solid #e6ebec;
            min-height: 240px;
            .template-item {
              cursor: pointer;
              margin: 10px;
              width: 160px;
              height: 100px;
              float: left;
              position: relative;
              .img {
                border-radius: 4px;
                width: 160px;
                height: 100px;
                background-position: center;
                background-size: 160px 100px;
                box-shadow: 0 1px 7px rgba(0,0,0,.2);
              }
              .info {
                position: absolute;
                width: 100%;
                height: 61px;
                bottom: 0;
                font-size: 14px;
                color: #fff;
                border-radius: 4px;
                background: linear-gradient(-180deg,rgba(51,52,59,0),rgba(12,12,18,.3));
                .name {
                  position: absolute;
                  bottom: 6px;
                  text-align: center;
                  width: 100%;
                }
                a {
                  color: #108ee9;
                  background: transparent;
                  text-decoration: none;
                  outline: none;
                  cursor: pointer;
                  transition: color .3s ease;
                }
                .use {
                  display: none;
                }
              }
              &:hover {
                .info {
                  height: 100%;
                  background: rgba(0,0,0,.5);
                }
                .info .use {
                  display: block;
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  width: 100%;
                  font-size: 18px;
                  color: #fff;
                  text-align: center;
                  line-height: 96px;
                }
              }
            }
          }
        }
      }
    }
    .manage-rightbox {
      background: #fff;
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 402px;
      padding: 21px 41px;
    }
  }
</style>
