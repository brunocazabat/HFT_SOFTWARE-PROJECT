<template>
  <v-container
    id="user-profile-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <material-card
          color="primary"
          icon-small
          icon="mdi-account"
        >
          <template #title>
            Settings — <small class="text-body-1">Your account infos</small>
          </template>
        </material-card>
        <material-card>
          <v-simple-table>
            <thead>
              <template>
                <v-container fluid>
                  <v-row align="center">
                    <v-col
                      class="d-flex"
                      cols="12"
                      offset="1"
                      sm="4"
                    >
                      <v-select
                        :items="Languages"
                        label="Language"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </template>
            </thead>
          </v-simple-table>
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mr-6 mx-6 ma-6"
                color="primary"
                min-width="200"
                align-v="center"
                rounded
                v-bind="attrs"
                v-on="on"
              >
                Export Data
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Data Export is unsuccessful, Please try again later.
              </v-card-title>

              <v-divider />
            </v-card>
          </v-dialog>
        </material-card>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <app-card class="mt-4 text-center">
          <v-img
            class="rounded-circle elevation-6 mt-n12 d-inline-block"
            src="@/assets/user.png"
            width="128"
          />

          <v-card-text class="text-center">
            <h6 class="text-h6 mb-2 text--secondary">
              ADMINISTRATOR
            </h6>

            <h4 class="text-h4 mb-3 text--primary">
              Knauth Stefan
            </h4>
            <router-link
              to="/changepassword/"
              tag="v-btn"
            >
              <p class="text--secondary">
                <v-btn
                  class="mr-0"
                  color="primary"
                  min-width="100"
                  rounded
                >
                  Change Password
                </v-btn>
              </p>
            </router-link>
            <router-link
              to="/changeemail/"
              tag="v-btn"
            >
              <p class="text--secondary">
                <v-btn
                  class="mr-0"
                  color="primary"
                  min-width="100"
                  rounded
                >
                  Change Email
                </v-btn>
              </p>
            </router-link>
            <router-link
              to="/bugreport/"
              tag="v-btn"
            >
              <p class="text--secondary">
                <v-btn
                  class="mr-0"
                  color="primary"
                  min-width="100"
                  rounded
                >
                  Bug Report
                </v-btn>
              </p>
            </router-link>
          </v-card-text>
        </app-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import MaterialCard from '../components/MaterialCard.vue'
  export default {
    name: 'UserProfileView',
    components: { MaterialCard },
    data () {
      return {
        Languages: ['English', 'German'],
      }
    },
  }
</script>
