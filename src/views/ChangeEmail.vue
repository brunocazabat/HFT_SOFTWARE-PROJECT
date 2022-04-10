<template>
  <v-app id="changeemail">
    <v-row
      align="center"
      class="pa-4"
    >
      <v-container>
        <v-row>
          <v-col
            sm="12"
            md="6"
            offset-md="3"
          >
            <v-card
              elevation="4"
              light
              tag="section"
            >
              <v-card-text align="center">
                <h2 class="text-h2 mt-6">
                  Change Email
                </h2>
                <v-form>
                  <v-text-field
                    v-model="username"
                    class="mt-5"
                    outlined
                    label="Enter Old Email"
                    type="email"
                  />
                  <v-text-field
                    v-model="username"
                    class="mt-5"
                    outlined
                    label="Enter New Email"
                    type="email"
                  />
                  <v-text-field
                    v-model="username"
                    class="mt-5"
                    outlined
                    label="Enter New Email Again"
                    type="email"
                  />
                </v-form>
                <router-link
                  to="/settings/"
                  tag="v-btn"
                >
                  <v-btn
                    class="mt-6"
                    block
                    color="info"
                    :large="$vuetify.breakpoint.smAndUp"
                  >
                    Change Email
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
    name: 'ChangeEmail',
    data () {
      return {
        value: String,
      }
    },
  }
</script>
