<template>
  <div class="default-layout">
    <Navbar />
    <Sidebar />
    <nuxt />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import Navbar from '~/components/Navbar'
export default {
  components: {
    Sidebar,
    Navbar,
  },
}
</script>
<style>
html,
body {
  height: 100%;
  margin: 0;
  background-image: none;
}
</style>
