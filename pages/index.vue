<template>
  <section>
    <div class="pt-5 blu">
      <div class="columns pt-5">
        <div class="column"></div>
        <div class="has-text-centered column is-9">
          <img
            src="https://cdn.discordapp.com/attachments/823858846899503136/827779054090190849/speedcat.gif"
            alt="Speedcatto landing image"
            style="height: 150px; flex-grow: 1"
          />
          <p class="title is-size-1 is-size-3-mobile has-text-light">
            Welcome to Speedcat!
          </p>
          <hr />
          <p class="is-size-3 is-size-4-mobile has-text-light">
            Hello! We are Speedcat, we simp for bugcat and our leader loves to
            speedrun! Hence, Speedcat.
          </p>
          <br />
          <p class="is-size-5 px-3 has-text-light">
            A group of simps who love to Simp for Elena’s beauty, thirsty for
            Nadricka cuteness and cry at Keira’s EQ. We actually wanted to simp
            for the hot bois but ended up simping for the MC instead.
          </p>
          <p class="is-size-7 has-text-light mb-5">
            <em><strike> and submit to our almighty leader </strike></em>
          </p>
          <b-button
            class="mt-5"
            type="is-large is-light"
            icon-left="chevron-down"
            rounded
            outlined
            @click="featuredScroll"
          >
            Featured
          </b-button>
        </div>
        <div class="column"></div>
      </div>
      <div class="custom-shape-divider-bottom-1618380753">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          />
        </svg>
      </div>
      <div
        ref="featured"
        class="has-background-white"
        style="padding-top: 90px"
      />
    </div>
    <div class="container has-text-centered">
      <p class="title is-size-2">Our featured translations!</p>
      <hr />
      <div class="p-5">
        <b-carousel
          :autoplay="true"
          with-carousel-list
          :indicator="false"
          :overlay="gallery"
        >
          <b-carousel-item v-for="(item, i) in items" :key="i">
            <div class="columns is-tablet">
              <div class="column is-5">
                <div class="columns is-gapless is-mobile">
                  <div class="column is-hidden-tablet"></div>
                  <div class="column is-8-mobile">
                    <figure class="image">
                      <b-image
                        style="max-height: 500px; width: auto; margin: auto"
                        :src="item.image"
                        src-fallback="http://placehold.it/700x1000"
                      />
                    </figure>
                    <div
                      class="columns is-mobile has-text-centered is-size-7 p-2 is-size-6-desktop"
                    >
                      <div class="column has-text-primary">
                        <i class="mdi mdi-eye"></i> 1000000
                      </div>
                      <div class="column has-text-info">
                        <i class="mdi mdi-bookmark"></i> 1000000
                      </div>
                      <div class="column has-text-warning-dark">
                        <i class="mdi mdi-star"></i> 8.75/10
                      </div>
                    </div>
                  </div>
                  <div class="column is-hidden-tablet"></div>
                </div>
              </div>
              <div class="column">
                <p class="title is-2">Book title</p>
                <p class="subtitle is-7">Akihibara Akihitoshi</p>
                <p class="subtitle is-6 has-text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  magnam consequuntur molestias dolorem soluta quam ut debitis
                  amet? Alias reiciendis explicabo eum praesentium officia
                  nihil. Exercitationem aut quos iusto inventore.
                </p>
                <div class="column has-text-right">
                  <b-button type="is-info" icon-left="book-play" outlined>
                    Read
                  </b-button>
                </div>
              </div>
            </div>
          </b-carousel-item>
          <template #list="props">
            <b-carousel-list
              v-model="props.active"
              :data="items"
              v-bind="al"
              as-indicator
              @switch="props.switch($event, false)"
            />
          </template>
        </b-carousel>
      </div>
    </div>
    <div class="has-background-white" style="padding-top: 90px" />
    <div class="container p-5">
      <p class="title is-1">Want more?</p>
      <p class="is-size-4">
        Start using our website by clicking on the expand sidebar button
        <b-button icon-left="menu" type="is-info"></b-button>
        (top-left), or go to <b-button icon-left="bookshelf">Library</b-button>
      </p>
    </div>
    <div class="has-background-white" style="padding-top: 500px" />
  </section>
</template>

<script>
export default {
  name: 'HomePage',

  components: {},
  layout: 'default-no-container',
  data() {
    return {
      test: 0,
      gallery: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 5,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 6,
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 7,
          },
        },
      },
      items: [
        {
          title: 'Slide 1',
          image:
            'https://speedcatto.files.wordpress.com/2021/04/resource-2-1.jpg',
        },
        {
          title: 'Slide 1',
          image:
            'https://speedcatto.files.wordpress.com/2021/04/resource-2-1.jpg',
        },
        {
          title: 'Slide 1',
          image: '',
        },
        {
          title: 'Slide 1',
          image:
            'https://speedcatto.files.wordpress.com/2021/04/resource-2-1.jpg',
        },
        {
          title: 'Slide 1',
          image:
            'https://speedcatto.files.wordpress.com/2021/04/resource-2-1.jpg',
        },
        {
          title: 'Slide 1',
          image:
            'https://speedcatto.files.wordpress.com/2021/04/resource-2-1.jpg',
        },
        {
          title: 'Slide 1',
          image:
            'https://speedcatto.files.wordpress.com/2021/04/resource-2-1.jpg',
        },
      ],
    }
  },
  methods: {
    info(value) {
      this.test = value
    },
    featuredScroll() {
      this.$refs.featured.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style>
.blu {
  background: #0099ff;
}

#B {
  background: #fff;
}
.custom-shape-divider-bottom-1618380753 {
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1618380753 svg {
  position: relative;
  display: block;
  width: calc(126% + 1.3px);
  height: 81px;
}

.custom-shape-divider-bottom-1618380753 .shape-fill {
  fill: #ffffff;
}
</style>
