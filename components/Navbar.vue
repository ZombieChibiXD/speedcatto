<template>
  <div>
    <b-navbar
      type="is-info"
      style="background-color: #0099ff"
      :fixed-top="fixedTop"
    >
      <template #brand>
        <div class="navbar-brand navbar-branding">
          <b-navbar-item @click="openSidebar">
            &nbsp;&nbsp;&nbsp;
            <b-icon icon="menu" type="is-large" />
            &nbsp;&nbsp;&nbsp;
          </b-navbar-item>
          <div class="navbar-branding">&nbsp;</div>
          <b-navbar-item>
            <img
              src="https://media.discordapp.net/attachments/823858846899503136/827729560547360798/logo-2.png"
              style="max-height: none"
              alt="Brand"
              height="28px"
            />
          </b-navbar-item>
          <span class="navbar-branding" />
          <b-navbar-item>
            &nbsp;&nbsp;&nbsp;
            <b-icon icon="discord" type="is-large" />
            &nbsp;&nbsp;&nbsp;
          </b-navbar-item>
        </div>
      </template>
      <template #burger></template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixedTop: true,
    }
  },
  methods: {
    openSidebar() {
      this.$store.commit('sidebar/openSidebar')
    },
  },
}
</script>

<style>
.navbar-brand,
.navbar-branding {
  flex-grow: 1;
  justify-content: center;
}
.navbar-menu {
  display: none;
}
</style>
