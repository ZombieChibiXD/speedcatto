<template>
  <div class="series-admin-main">
    <section class="top-section">
      <p class="title is-10">
        <b-icon icon="folder-cog" size="is-medium" />&nbsp;Series Administration
      </p>
      <b-input
        ref="input"
        v-model="inputBox"
        type="text"
        :loading="isFetching"
        placeholder="Search series name..."
        icon="magnify"
        @input="onInput"
      />
      <hr />
      <div class="columns">
        <div class="column is-10">
          <b-pagination
            v-model="page"
            :total="totalItems"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            order="is-centered"
            :per-page="perPage"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
          />
        </div>
        <div class="column is-2 has-text-centered">
          <b-button type="is-success" icon-left="plus">New Series</b-button>
        </div>
      </div>
    </section>
    <section class="mid-section">
      <div class="box admin-series-item-scroll px-5 pb-5">
        <div v-if="data.length > 0" class="wrapper">
          <div v-for="item in data" :key="item.id" class="columns is-centered">
            <div class="column card mt-5">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <div style="width: 7rem">
                      <figure class="image is-2by3">
                        <img
                          :src="`https://image.tmdb.org/t/p/w200/${item.poster_path}`"
                          :alt="`${item.title}'s image`"
                        />
                      </figure>
                    </div>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{ item.title }}</p>
                    <p></p>
                    <p class="subtitle is-6">{{ item.overview }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="columns">
          <div class="column card is-one-third mt-5">
            <p class="has-text-centered">Th ere is no data here</p>
          </div>
        </div>
      </div>
      <span>something</span>
    </section>
    <section class="end-section"></section>
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
      name: '',
      data: [],
      selected: null,
      isFetching: false,
      page: 1,
      totalItems: 1,
      totalPages: 1,
      perPage: 20,
      rangeBefore: 2,
      rangeAfter: 2,
    }
  },
  watch: {
    async page(val) {
      this.isFetching = true
      await this.getAsyncData()
      this.isFetching = false
    },
  },
  mounted() {
    ;(async () => {
      this.isFetching = true
      await this.inputAsyncCall()
      this.isFetching = false
    })()
  },
  methods: {
    onInput() {
      this.isFetching = true
      this.onInputDone()
    },
    onInputDone: debounce(async function () {
      await this.inputAsyncCall(this.inputBox)
      this.isFetching = false
    }, 500),
    inputAsyncCall(name) {
      // String update
      if (this.name !== name) {
        this.name = name || 'A'
        this.page = 1
        this.totalItems = 1
        this.totalPages = 1
      }
      return this.getAsyncData()
    },
    async getAsyncData() {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${this.name}&page=${this.page}`
      const result = await this.$http.$get(url)
      this.data = []
      const data = result
      data.results.forEach((item) => this.data.push(item))
      this.totalPages = data.total_pages
      this.totalItems = data.total_results
      await timeout(1000)
    },
  },
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
.series-admin-main {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.series-admin-main .top-section {
  flex: 0 1 auto;
}
.series-admin-main .end-section {
  flex: 0 1 1px;
}

.series-admin-main .mid-section {
  flex: 1 1 auto;
}
.admin-series-item-scroll {
  height: 15px;
  padding: 10px 4px 10px 4px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
