<template>
  <div class="default-layout">
    <Navbar />
    <Sidebar />
    <section class="main-content container">
      <nuxt />
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar'
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
