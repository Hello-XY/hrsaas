<template>
  <div style="margin: 0 8px">
    <SvgIcon
      className="fullscreen"
      @click="onFullScreen"
      iconClass="fullscreen"
    />
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'FullScreen',
  data() {
    return {}
  },

  created() {},

  methods: {
    onFullScreen() {
      if (screenfull.isEnabled) {
        screenfull.toggle()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.fullscreen {
  color: #fff;
}
</style>
