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
      <div
        class="box is-full admin-series-item-scroll has-background-light px-5 pb-5"
      >
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
                  <b-taglist class="tags">
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
                  </b-taglist>
                  <b-taglist class="tags">
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
                  </b-taglist>
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
          <div class="column card is-one-third is-offset-one-third mt-5">
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
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export default {
  data() {
    return {
      overviewLimit: 200,
      inputBox: '',
      defaultName: 'A',
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
      timeoutHelper: {},
    }
  },
  watch: {
    page(val) {
      clearTimeout(this.timeoutHelper.page)
      this.timeoutHelper.page = setTimeout(
        function () {
          this.isFetching = true
          if (this.scroller.content)
            this.scroller.content.scrollIntoView({ behavior: 'smooth' })
          this.getAsyncData().finally(
            function () {
              this.isFetching = false
            }.bind(this),
          )
        }.bind(this),
        200,
      )
    },
    name(val) {
      this.page = 1
      this.totalItems = 1
      this.totalPages = 1
      this.getAsyncData().finally(() => {
        this.isFetching = false
      })
    },
  },
  mounted() {
    this.isFetching = true
    this.getAsyncData().finally(
      async function () {
        this.scroller.content = this.$el.getElementsByClassName(
          'admin-series-item-scroll',
        )[0]
        await timeout(100)
        this.isFetching = false
      }.bind(this),
    )
  },
  methods: {
    onInput() {
      this.isFetching = true
      clearTimeout(this.timeoutHelper.name)
      this.timeoutHelper.name = setTimeout(
        function () {
          this.name = this.inputBox
        }.bind(this),
        200,
      )
    },
    async getAsyncData() {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${
        this.name || this.defaultName
      }&page=${this.page}`
      const result = await this.$http.$get(url)
      this.data = []
      const data = result
      data.results.forEach((item) => this.data.push(item))
      this.totalPages = data.total_pages
      this.totalItems = data.total_results
      return result
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
    width: 100%;
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
