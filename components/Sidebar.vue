<template>
  <b-sidebar
    :open.sync="sidebarStore.status"
    type="is-light"
    :fullheight="sidebarStore.fullheight"
    mobile="fullWidth"
    :overlay="sidebarStore.overlay"
  >
    <div class="p-1">
      <b-menu class="container">
        <img
          src="https://cdn.discordapp.com/attachments/823858846899503136/827779054090190849/speedcat.gif"
          alt="Speedcatto sidebar image"
          style="height: 170px; flex-grow: 1"
        />
      </b-menu>
      <b-menu>
        <b-menu-list>
          <b-menu-item
            label="Close Sidebar"
            icon="close"
            type="is-light"
            @click="closeSidebar"
          />
        </b-menu-list>
        <b-menu-list icon="book-open" label="Series">
          <b-menu-item icon="star" label="Featured" disabled />
          <b-menu-item icon="bookshelf" label="Library" />
          <b-menu-item icon="book" label="Following" />
          <b-menu-item icon="book-search">
            <template #label="props">
              Search
              <b-icon
                class="is-pulled-right"
                :icon="!props.expanded ? 'chevron-down' : 'chevron-up'"
              />
            </template>
            <b-field message="What do you want to search?">
              <b-input
                placeholder="Quick search..."
                type="search"
                custom-class="is-small"
                expanded
              >
              </b-input>
              <p class="control">
                <b-button type="is-primary is-small" icon-right="magnify" />
              </p>
            </b-field>
            <b-menu-item icon="magnify" label="Advanced Search" />
          </b-menu-item>
        </b-menu-list>
        <b-menu-list v-if="true" icon="account-circle" label="Account">
          <b-menu-item icon="account" label="My Account" />
          <b-menu-item icon="cog" label="Settings" />
        </b-menu-list>
        <b-menu-list v-if="true" label="Admin">
          <b-menu-item icon="folder-cog" label="Series Administration" />
          <b-menu-item icon="account-cog" label="Users Administration" />
          <b-menu-item icon="cogs" label="Website Administration" />
        </b-menu-list>
      </b-menu>
    </div>
  </b-sidebar>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      open: false,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false,
    }
  },
  computed: {
    sidebarStore() {
      return this.$store.state.sidebar
    },
    sidebarStatus() {
      return this.$store.state.sidebar.status
    },
  },
  methods: {
    closeSidebar() {
      this.$store.commit('sidebar/closeSidebar')
    },
  },
}
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
