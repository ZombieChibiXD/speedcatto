<template>
  <section>
    <div class="pt-5 blu">
      <div class="columns pt-5">
        <div class="column"></div>
        <div class="has-text-centered column is-9 pt-5">
          <img
            src="https://cdn.discordapp.com/attachments/823858846899503136/827779054090190849/speedcat.gif"
            alt="Speedcatto landing image"
            style="height: 170px; flex-grow: 1"
          />
          <p class="title is-size-1 has-text-light">Welcome to Speedcat!</p>
          <hr />
          <p class="is-size-3 has-text-light">
            Hello! We are Speedcat, we simp for bugcat and our leader loves to
            speedrun! Hence, Speedcat.
          </p>
          <br />
          <p class="is-size-5 has-text-light">
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
    <div class="has-text-centered">
      <p class="title is-size-2">Our featured translations!</p>
      <hr />
      <div class="p-5">
        <b-carousel-list @aut v-model="test" :data="items" :items-to-show="2">
          <template #item="list">
            <div class="card mx-3 my-2">
              <div class="card-image">
                <figure class="image is-4by2">
                  <a @click="info(list.index)"><img :src="list.image" /></a>
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="title is-5">Book title</p>
                  <p class="subtitle is-7">Akihibara Akihitoshi</p>
                  <div class="columns is-mobile is-vcentered">
                    <div class="column has-text-left">
                      <p
                        class="is-size-7 has-text-primary"
                        style="padding: 0; margin: 0"
                      >
                        <b-icon icon="eye" size="is-small"></b-icon>
                        1000000
                      </p>
                      <p
                        class="is-size-7 has-text-info"
                        style="padding: 0; margin: 0"
                      >
                        <b-icon icon="bookmark" size="is-small"></b-icon>
                        1000000
                      </p>
                      <p
                        class="is-size-7 has-text-warning-dark"
                        style="padding: 0; margin: 0"
                      >
                        <b-icon icon="star" size="is-small"></b-icon>
                        8.75/10
                      </p>
                    </div>
                    <div class="column is-4-tablet has-background-success">
                      <b-button type="is-info" icon-left="book-play" outlined>
                        Read
                      </b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
      <p class="is-size-3">
        Hello! We are Speedcat, we simp for bugcat and our leader loves to
        speedrun! Hence, Speedcat.
      </p>
      <br />
      <p class="is-size-5">
        A group of simps who love to Simp for Elena’s beauty, thirsty for
        Nadricka cuteness and cry at Keira’s EQ. We actually wanted to simp for
        the hot bois but ended up simping for the MC instead.
      </p>
      <p class="title is-size-2">Our featured translations!</p>
      <hr />
      <p class="is-size-3">
        Hello! We are Speedcat, we simp for bugcat and our leader loves to
        speedrun! Hence, Speedcat.
      </p>
      <br />
      <p class="is-size-5">
        A group of simps who love to Simp for Elena’s beauty, thirsty for
        Nadricka cuteness and cry at Keira’s EQ. We actually wanted to simp for
        the hot bois but ended up simping for the MC instead.
      </p>
      <p class="title is-size-2">Our featured translations!</p>
      <hr />
      <p class="is-size-3">
        Hello! We are Speedcat, we simp for bugcat and our leader loves to
        speedrun! Hence, Speedcat.
      </p>
      <br />
      <p class="is-size-5">
        A group of simps who love to Simp for Elena’s beauty, thirsty for
        Nadricka cuteness and cry at Keira’s EQ. We actually wanted to simp for
        the hot bois but ended up simping for the MC instead.
      </p>
      <p class="title is-size-2">Our featured translations!</p>
      <hr />
      <p class="is-size-3">
        Hello! We are Speedcat, we simp for bugcat and our leader loves to
        speedrun! Hence, Speedcat.
      </p>
      <br />
      <p class="is-size-5">
        A group of simps who love to Simp for Elena’s beauty, thirsty for
        Nadricka cuteness and cry at Keira’s EQ. We actually wanted to simp for
        the hot bois but ended up simping for the MC instead.
      </p>
      <p class="title is-size-2">Our featured translations!</p>
      <hr />
      <p class="is-size-3">
        Hello! We are Speedcat, we simp for bugcat and our leader loves to
        speedrun! Hence, Speedcat.
      </p>
      <br />
      <p class="is-size-5">
        A group of simps who love to Simp for Elena’s beauty, thirsty for
        Nadricka cuteness and cry at Keira’s EQ. We actually wanted to simp for
        the hot bois but ended up simping for the MC instead.
      </p>
      <p class="title is-size-2">Our featured translations!</p>
      <hr />
      <p class="is-size-3">
        Hello! We are Speedcat, we simp for bugcat and our leader loves to
        speedrun! Hence, Speedcat.
      </p>
      <br />
      <p class="is-size-5">
        A group of simps who love to Simp for Elena’s beauty, thirsty for
        Nadricka cuteness and cry at Keira’s EQ. We actually wanted to simp for
        the hot bois but ended up simping for the MC instead.
      </p>
      <p class="title is-size-2">Our featured translations!</p>
      <hr />
      <p class="is-size-3">
        Hello! We are Speedcat, we simp for bugcat and our leader loves to
        speedrun! Hence, Speedcat.
      </p>
      <br />
      <p class="is-size-5">
        A group of simps who love to Simp for Elena’s beauty, thirsty for
        Nadricka cuteness and cry at Keira’s EQ. We actually wanted to simp for
        the hot bois but ended up simping for the MC instead.
      </p>
      <p class="title is-size-2">Our featured translations!</p>
      <hr />
      <p class="is-size-3">
        Hello! We are Speedcat, we simp for bugcat and our leader loves to
        speedrun! Hence, Speedcat.
      </p>
      <br />
      <p class="is-size-5">
        A group of simps who love to Simp for Elena’s beauty, thirsty for
        Nadricka cuteness and cry at Keira’s EQ. We actually wanted to simp for
        the hot bois but ended up simping for the MC instead.
      </p>
    </div>
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
      items: [
        {
          title: 'Slide 1',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 4.4,
        },
        {
          title: 'Slide 2',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 3.5,
        },
        {
          title: 'Slide 3',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 5,
        },
        {
          title: 'Slide 4',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
        },
        {
          title: 'Slide 5',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 5,
        },
        {
          title: 'Slide 6',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 4,
        },
        {
          title: 'Slide 7',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 2.7,
        },
        {
          title: 'Slide 8',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          rating: 1.5,
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
