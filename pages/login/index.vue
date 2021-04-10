<template>
  <section class="section">
    <div
      class="columns is-flex is-centered is-vcentered"
      style="min-height: 85vh"
    >
      <div class="column is-three-fifths-desktop mb-5">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey is-size-4">
              <b-icon type="is-grey" icon="account-key" size="is-medium" />
              <span class="ml-2">&nbsp;</span>
              Log in
            </p>
          </header>
          <div class="card-content">
            <div class="columns is-centered is-vcentered">
              <div class="column mb-5">
                <form @submit.prevent="onLoginFormSubmitted">
                  <b-field label="Username">
                    <b-input
                      v-model="username"
                      icon="account"
                      placeholder="Username"
                    ></b-input>
                  </b-field>
                  <b-field label="Password">
                    <b-input
                      v-model="password"
                      icon="lock"
                      placeholder="Password"
                      type="password"
                    ></b-input>
                  </b-field>
                  <b-checkbox v-model="remember" type="is-dark">
                    Remember me
                  </b-checkbox>
                  <b-button
                    tag="input"
                    native-type="submit"
                    value="Log in"
                    icon-left="key-variant"
                    class="is-success is-large mt-3"
                    outlined
                    expanded
                  />
                </form>
              </div>

              <div class="column">
                <div class="buttons are-medium p-5">
                  <b-button
                    icon-left="facebook"
                    class="is-link"
                    style="background-color: #1877f2"
                    expanded
                  >
                    Log in with Facebook
                  </b-button>
                  <b-button
                    icon-left="google"
                    class="is-success is-light"
                    style="/**/"
                    outlined
                    expanded
                  >
                    Log in with Google
                  </b-button>
                  <b-button
                    icon-left="reddit"
                    class="is-danger"
                    style="background-color: #ff4500"
                    expanded
                  >
                    Log in with Reddit
                  </b-button>
                  <b-button
                    icon-left="twitter"
                    class="is-info"
                    style="background-color: #08a0e9"
                    expanded
                  >
                    Log in with Twitter
                  </b-button>
                  <b-button
                    icon-left="account-question"
                    class="is-primary"
                    style="/**/"
                    expanded
                  >
                    Log in with others
                  </b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer p-3">
            <b-button
              tag="router-link"
              to="/"
              icon-left="home"
              class="is-dark"
              outlined
            >
              Go back to Home
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Card from '~/components/Card'
export default {
  name: 'LoginPage',
  components: {
    // Card,
  },
  layout: 'blank',
  data() {
    return {
      username: '',
      password: '',
      remember: false,
    }
  },
  beforeMount() {
    document.documentElement.classList.add('login-bg')
  },
  beforeDestroy() {
    document.documentElement.classList.remove('login-bg')
  },
  methods: {
    onLoginFormSubmitted(event) {
      // eslint-disable-next-line no-console
      console.log(this.username, this.password, this.remember)
    },
  },
}
</script>
<style>
.login-bg {
  background-image: url('https://cdn.discordapp.com/attachments/823858846899503136/825489432177147934/2047298.png');
  background-size: cover;
}
</style>
