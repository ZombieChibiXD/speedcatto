<template>
  <div class="default-layout">
    <nav
      class="navbar is-info"
      role="navigation"
      aria-label="main navigation"
      style="background-color: #0099ff"
    >
      <div class="navbar-brand branding">
        <b-navbar-item @click="openSidebar">
          &nbsp;&nbsp;&nbsp;
          <b-icon icon="menu" type="is-large" />
          &nbsp;&nbsp;&nbsp;
        </b-navbar-item>
        <span class="branding" />
        <b-navbar-item>
          <img
            src="https://media.discordapp.net/attachments/823858846899503136/827729560547360798/logo-2.png"
            style="max-height: none"
            alt="Brand"
            height="28px"
          />
        </b-navbar-item>
        <span class="branding" />
        <b-navbar-item>
          &nbsp;&nbsp;&nbsp;
          <b-icon icon="discord" type="is-large" />
          &nbsp;&nbsp;&nbsp;
        </b-navbar-item>
      </div>
    </nav>
    <Sidebar />
    <nuxt />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
export default {
  components: {
    Sidebar,
  },
  methods: {
    openSidebar() {
      this.$store.commit('sidebar/openSidebar')
    },
  },
}
</script>
<style>
.branding {
  flex-grow: 1;
  justify-content: center;
}
</style>

<style>
html,
body {
  height: 100%;
  margin: 0;
  background-image: none;
}
</style>
