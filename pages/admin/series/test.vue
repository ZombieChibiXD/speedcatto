<template>
  <div class="series-admin-main">
    <section class="top-section">
      <p class="title is-10">
        <b-icon icon="folder-cog" size="is-medium" />&nbsp;Series Administration
      </p>
      <div class="columns has-text-centered">
        <div class="column py-5">
          <b-input
            ref="input"
            v-model="inputBox"
            type="text"
            :loading="isFetching"
            placeholder="Search series name..."
            icon="magnify"
            @input="onInput"
          />
        </div>
      </div>
      <hr />
      <div class="columns px-5">
        <div class="column is-9">
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
        <div class="column is-3 has-text-centered">
          <b-button type="is-success" icon-left="plus">New Series</b-button>
        </div>
      </div>
    </section>
    <section class="content-top">&nbsp;</section>
    <section class="mid-section">
      <div class="box admin-series-item-scroll has-background-light px-5 pb-5">
        <div v-if="data.length > 0" class="wrapper">
          <div
            v-for="item in data"
            :key="item.id"
            class="content-items box columns px-3 mt-5"
          >
            <div class="column is-10-desktop is-9-tablet">
              <div class="media px-2">
                <div class="media-left">
                  <div style="width: 10rem">
                    <b-image
                      :src="`https://image.tmdb.org/t/p/w200/${item.poster_path}`"
                      :alt="`${item.title}'s image`"
                      ratio="2by3"
                      lazy
                    >
                    </b-image>
                    <!-- <figure class="image is-2by3">
                      <img
                        :src="`https://image.tmdb.org/t/p/w200/${item.poster_path}`"
                        :alt="`${item.title}'s image`"
                      />
                    </figure> -->
                  </div>
                </div>
                <div class="media-content">
                  <div class="level m-0">
                    <p class="level-item title is-5 py-1">{{ item.title }}</p>
                    <p class="level-item heading is-6 py-1">
                      By: Grin-p writer
                    </p>
                  </div>
                  <b-tag-taglist class="tags">
                    <b-tag type="is-primary is-light">
                      <b-icon icon="eye" size="is-small"></b-icon> &nbsp; 10000
                    </b-tag>
                    <b-tag type="is-info is-light">
                      <b-icon icon="bookmark" size="is-small"></b-icon>&nbsp;
                      10000
                    </b-tag>
                    <b-tag type="is-warning is-light">
                      <b-icon icon="star" type="is-warning" size="is-small" />
                      &nbsp; 8.5
                    </b-tag>
                  </b-tag-taglist>
                  <b-tag-taglist class="tags">
                    <b-tag style="background: transparent">Tags:</b-tag>
                    <b-tag>Tag label3</b-tag>
                    <b-tag>Tag label4</b-tag>
                    <b-tag>Tag label5</b-tag>
                    <b-tag>Tag </b-tag>
                    <b-tag>Tag label</b-tag>
                    <b-tag>Tag label</b-tag>
                    <b-tag>Tag label</b-tag>
                    <b-tag>Tag label</b-tag>
                    <b-tag>Tag label</b-tag>
                    <b-tag>Tag label</b-tag>
                  </b-tag-taglist>
                  <p class="subtitle is-7">
                    {{
                      item.overview.substring(0, overviewLimit).trim() +
                      (overviewLimit > item.overview.length ? '' : '...')
                    }}
                    <span
                      v-if="overviewLimit < item.overview.length"
                      class="subtitle is-7 has-text-weight-light"
                    >
                      (cont)
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="column columns is-mobile is-multiline">
              <div class="column is-full-tablet">
                <b-button type="is-warning" icon-left="pencil" expanded>
                  Edit
                </b-button>
              </div>
              <div class="column is-full-tablet">
                <b-button type="is-danger" icon-left="delete" expanded>
                  Delete
                </b-button>
              </div>
              <div class="column is-full-tablet">
                <b-button type="is-primary" icon-left="book" expanded>
                  Details
                </b-button>
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
    </section>
    <section class="end-section my-5">
      <div class="columns px-5">
        <div class="column">
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
      </div>
    </section>
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
      overviewLimit: 200,
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
      scroller: {},
    }
  },
  watch: {
    page(val) {
      this.onPageChange()
    },
  },
  mounted() {
    ;(async () => {
      this.isFetching = true
      await this.inputAsyncCall()
      await timeout(100)
      this.isFetching = false
      this.scroller.content = this.$el.getElementsByClassName(
        'admin-series-item-scroll',
      )[0]
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
    }, 100),
    onPageChange: debounce(async function () {
      this.isFetching = true
      if (this.scroller.content)
        this.scroller.content.scrollIntoView({ behavior: 'smooth' })
      await this.getAsyncData()
      this.isFetching = false
    }, 200),
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
    },
  },
}
</script>

<style>
@media (min-width: 768px) {
  html,
  body {
    height: 100%;
    margin: 0;
  }
  #__nuxt,
  #__layout,
  .default-layout,
  .main-content.container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .end-section {
    display: none;
  }
}

.main-content.container {
  overflow-y: auto;
}
.series-admin-main {
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 5px;
  overflow: hidden;
}
.series-admin-main .top-section {
  flex: 0 1 auto;
}
.series-admin-main .end-section {
  flex: 0 1 auto;
}

.series-admin-main .mid-section {
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  overflow-y: auto;
  min-height: 400px;
}
.admin-series-item-scroll {
  padding: 10px 4px 10px 4px;
}
</style>
