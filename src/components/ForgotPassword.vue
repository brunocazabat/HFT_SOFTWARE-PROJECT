<template>
  <v-app id="forgotpassword">
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
                <h2 class="text-h4 mt-6">
                  Reset Password
                </h2>
                <p class="text-caption mt-2">
                  Enter your email
                </p>
                <v-form>
                  <v-text-field
                    v-model="username"
                    class="mt-10"
                    outlined
                    label="Email"
                    type="email"
                  />
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
                    Send Password Reset Link?
                  </v-btn>
                </router-link>
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
    name: 'ForgotPassword',
    data () {
      return {
        value: String,
      }
    },
  }
</script>

<style scoped>
#forgotpassword {
  background: #363740
}
</style>
