<template>
  <ul class="nav-menu">
    <li
      class="nav-menu-submenu-inline"
      v-for="PItem in PItems"
      @click.stop="itemClick(PItem)">
      <div v-if="PItem.superset" class="nav-menu-submenu-title">
        <span class="icon-folder"
              :class="!PItem.isOpen ? 'folder-close' : 'folder-open'"></span>
        <span>{{PItem.title}}</span>
        <span class="icon-folder-s"
              :class="PItem.isOpen ? 'folder-open-s' : ''"></span>
      </div>
      <div v-else>
        <span>{{PItem.title}}</span>
      </div>
      <nav-list
        v-if="PItem.isOpen && PItem.children && PItem.children.length > 0"
        class="children-menu"
        :p-items="PItem.children"></nav-list>
    </li>
  </ul>
</template>
<script>
  import navList from './nav'
  export default {
    name: 'navList',
    props: {
      PItems: Array
    },
    data () {
      return {
      }
    },
    methods: {
      itemClick (item) {
        console.log(item)
        if (item && item.hasOwnProperty('isOpen')) {
          item['isOpen'] = !item['isOpen']
        } else if (!item.hasOwnProperty('isOpen')) {
          this.$store.dispatch('actionShowEditor', item)
        }
      }
    },
    components: {
      navList
    }
  }
</script>
<style lang="scss">
  .nav-menu {
    width: 200px;
    color: hsla(0,0%,100%,.67);
    background: #404040;
    outline: none;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    box-shadow: none;
    line-height: 46px;
    .nav-menu-submenu-inline {
      position: relative;
      background: #272727;
      font-size: 14px;
      color: #c4c4c4;
      cursor: pointer;
      transition: all .3s;
      .nav-menu-submenu-title {
        font-size: 14px;
        text-indent: 0;
        line-height: 38px;
        height: 38px;
        padding: 0 16px;
        padding-left: 44px!important;
        box-shadow: 0 0 4px rgba(0,0,0,.4);
        background: #272727;
        border-bottom: 1px solid #202020;
        margin: 0;
        position: relative;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        transition: all .3s;
        .icon-folder {
          margin-right: 9px;
          display: inline-block;
          width: 12px;
          height: 11px;
          background: url('../../../static/images/folder-close.png') no-repeat;
          background-size: 12px 11px;
        }
        .folder-close {
          background: url('../../../static/images/folder-close.png') no-repeat;
          background-size: 12px 11px;
        }
        .folder-open {
          background: url('../../../static/images/folder-open.png') no-repeat;
          background-size: 12px 11px;
        }
        .icon-folder-s {
          position: relative;
          top: -2px;
          margin-left: 11px;
          display: inline-block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #000;
        }
        .folder-open-s {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 5px solid #000;
          border-top: none;
        }
      }
      .children-menu {
        li {
          font-size: 12px;
          padding-left: 65px!important;
          padding-right: 30px!important;
          background: #202020;
          color: #8a8a8a;
          box-shadow: none;
          border-bottom: none;
          position: relative;
          line-height: 38px;
          height: 38px;
          border-bottom: 1px solid #202020;
        }
      }
    }
  }
</style>
