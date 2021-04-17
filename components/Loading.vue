<template>
  <div v-if="showTimeout || show" class="loading" :style="style"></div>
</template>

<script>
export default {
  props: {
    hardcode: {
      type: Boolean,
      default: true,
    },
    timeout: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      showTimeout: false,
    }
  },
  computed: {
    style() {
      return !this.hardcode ? '' : `background-image: url('/loading.svg'); `
    },
  },
  mounted() {
    if ((this.showTimeout = this.timeout))
      setTimeout(
        function () {
          this.showTimeout = false
        }.bind(this),
        5000,
      )
  },
}
</script>

<style>
.loading {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  backdrop-filter: blur(5px) brightness(90%);
  /* WARNING: MAY CAUSE ISSUES */
  z-index: 1;
}
</style>
