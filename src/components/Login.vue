<template>
  <v-app id="login">
    <v-row
      align="center"
      class="pa-4"
    >
      <v-container>
        <v-row>
          <v-col
            sm="12"
            md="3"
            offset-md="5"
          >
            <v-card
              elevation="4"
              light
              tag="section"
            >
              <v-card-title align="center">
                <v-img
                  class="mx-auto"
                  src="@/assets/mm-login-logo.png"
                  max-width="100%"
                />
              </v-card-title>
              <v-card-text align="center">
                <h2 class="text-h2 mt-6">
                  Login
                </h2>
                <p class="text-caption mt-2">
                  Enter your email and password
                </p>
                <v-form>
                  <v-text-field
                    v-model="username"
                    class="mt-10"
                    outlined
                    label="Email"
                    type="email"
                  />
                  <v-text-field
                    v-model="password"
                    outlined
                    hide-details
                    label="Password"
                    type="password"
                  />
                  <v-select
                    v-model="selectedLocation"
                    class="mt-10"
                    :items="locations"
                    label="Location"
                  />
                </v-form>
                <p class="text-caption mt-6">
                  <router-link
                    to="/forgotpassword/"
                    tag="v-btn"
                  >
                    <a href=""> Forgot Password? </a>
                  </router-link>
                </p>
                <v-btn
                  class="mt-6"
                  block
                  color="info"
                  :large="$vuetify.breakpoint.smAndUp"
                  @click="login"
                >
                  Login
                </v-btn>
                <p class="text-caption mt-6">
                  Don't have an account?
                  <router-link
                    to="/signup/"
                    tag="v-btn"
                  >
                    <a href="">Sign Up</a>
                  </router-link>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
  import router from '../router'
  import store from '../store'
  export default {
    name: 'Login',
    data () {
      return {
        username: 'user@mail.com',
        password: 'password',
        selectedLocation: 'Berlin',
        locations: ['Berlin', 'Stuttgart'],
      }
    },
    methods: {
      login () {
        // TODO: Replace with actual login and set token / Check token still valid
        if (this.username === 'user@mail.com' && this.password === 'password') {
          store.set('app/location', this.selectedLocation)
          store.set('app/authenticationToken', 'someToken')
          router.push('/dashboard')
        }
      },
    },
  }
</script>

<style scoped>
#login {
  background: #363740
}
</style>
