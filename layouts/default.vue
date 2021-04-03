<template>
  <div>
    <nav
      class="navbar header has-shadow is-light is-info"
      role="navigation"
      aria-label="main navigation"
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
    <section class="main-content columns">
      <aside v-if="false" class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
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
