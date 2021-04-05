<template>
  <div>
    <pre>{{ inputBox }}</pre>
    <b-input
      ref="input"
      v-model="inputBox"
      type="text"
      :loading="isFetching"
      placeholder="Search series name"
      icon="magnify"
      @input="onInput"
      @typing="getAsyncData"
    />
    <div class="container">
      <pre>{{ inputBox }}</pre>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export default {
  data() {
    return {
      inputBox: '',
      isFetching: false,
    }
  },
  methods: {
    onInput() {
      const currentValue = this.getValue(this.selected)
      if (currentValue && currentValue === this.inputBox) return
      this.$emit('typing', this.newValue)
    },
    getAsyncData: debounce(async function () {
      this.isFetching = true
      await timeout()
      this.isFetching = false
    }, 500),
  },
}
</script>
