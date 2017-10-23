<template>
  <div class="loading-page">
    <div class="counter">
      <p>loading</p>
      <h1>{{counter}}%</h1>
      <hr>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'loading',
    props: {
      step: {
        type: [String, Number],
        default: function () {
          return 50
        }
      }
    },
    data () {
      return {
        counter: 0,
        timer: null
      }
    },
    mounted () {
      this.timer = window.setInterval(() => {
        document.querySelector('.loading-page .counter h1').innerHTML = this.counter + '%'
        document.querySelector('.loading-page .counter hr').style.width = this.counter + '%'
        this.counter++
        if (this.counter === 101) {
          window.clearInterval(this.timer)
          this.$emit('loading-end', this.counter)
        }
      }, Number(this.step))
    }
  }
</script>
<style lang="sass">
  .loading-page
    position: absolute
    top: 0
    left: 0
    background: #0d0d0d
    width: 100vw
    height: 100vh
    display: flex
    z-index: 999
    justify-content: center
    align-items: center
    .counter
      text-align: center
      p
        font-size: 40px
        font-weight: 100
        color: #1b9de8
      h1
        color: white
        font-size: 60px
        margin-top: -10px
      hr
        background: #1b9de8
        border: none
        height: 1px
    .counter
      position: relative
      width: 200px
      h1.abs
        position: absolute
        top: 0
        width: 100%
      .color
        width: 0px
        overflow: hidden
        color: #f60d54
</style>
