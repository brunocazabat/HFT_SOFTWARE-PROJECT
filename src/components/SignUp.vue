<template>
  <v-app id="signup">
    <v-row
      align="center"
      class="pa-2"
    >
      <v-container>
        <v-row>
          <v-col
            sm="12"
            md="6"
            offset-md="3"
          >
            <v-card
              elevation="12"
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
                <h2 class="text-h3 mt-6">
                  Registration
                </h2>
                <p class="text-caption mt-2">
                  Enter your details
                </p>
                <v-form>
                  <v-text-field
                    v-model="username"
                    outlined
                    label="Enter UserName"
                    type="text"
                  />
                  <v-text-field
                    v-model="username"
                    outlined
                    label="Enter Email"
                    type="email"
                  />
                  <v-text-field
                    v-model="username"
                    outlined
                    hide-details
                    label="Enter Password"
                    type="password"
                  />
                  <br>
                  <v-text-field
                    v-model="username"
                    outlined
                    hide-details
                    label="Enter Password Again"
                    type="password"
                  />
                  <br>
                  <h2 class="text-sm-left">
                    Choose Roles
                  </h2>
                  <v-container fluid>
                    <p>{{ selected }}</p>
                    <v-checkbox
                      v-model="selected"
                      label="Station Worker"
                      value="StationWorker"
                    />
                    <v-checkbox
                      v-model="selected"
                      label="Administrator"
                      value="Administrator"
                    />
                    <v-checkbox
                      v-model="selected"
                      label="Manager"
                      value="Manager"
                    />
                    <v-checkbox
                      v-model="selected"
                      label="Other (Any role can be added)"
                      value="Other"
                    />
                  </v-container>
                </v-form>
                <router-link
                  to="/"
                  tag="v-btn"
                >
                  <v-btn
                    class="mt-6"
                    block
                    color="info"
                    :large="$vuetify.breakpoint.smAndUp"
                  >
                    Sign Up
                  </v-btn>
                </router-link>
                <p class="text-caption mt-6">
                  Have an account? <a href="/">Login</a>
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
  export default {
    name: 'Signup',
    data () {
      return {
        value: String,
      }
    },
  }
</script>

<style scoped>
#signup {
  background: #363740
}
</style>
