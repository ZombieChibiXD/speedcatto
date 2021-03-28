<template>
  <section class="section">
    <div
      class="columns is-flex is-centered is-vcentered"
      style="min-height: 75vh"
    >
      <div class="column is-three-fifths mb-5">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title has-text-grey is-size-4">
              <b-icon type="is-primary" icon="account-key" size="is-medium" />
              <span class="ml-2">&nbsp;</span>
              Log in
            </p>
          </header>
          <div class="card-content columns is-flex is-centered is-vcentered">
            <div class="column is-half mb-5">
              <b-field label="Username">
                <b-input></b-input>
              </b-field>

              <b-field label="Password">
                <b-input type="password"></b-input>
              </b-field>
              <b-checkbox>Remember me</b-checkbox>
              <b-button
                icon-left="key-variant"
                class="is-success is-large mt-3"
                outlined
                expanded
              >
                Log in
              </b-button>
            </div>
            <div class="column is-half">
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
                  class="is-success-light"
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
          <div class="card-footer p-3">
            <p>&copy;&nbsp;Speedcatto 2021</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Card from '~/components/Card'
export default {
  name: 'LoginOtherPage',
  components: {
    // Card,
  },
  layout: 'blank',
}
</script>
