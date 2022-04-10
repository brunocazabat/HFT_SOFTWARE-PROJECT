<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>
        <div>
          <router-link to="/">
            <v-img
              v-show="$vuetify.breakpoint.mdAndUp"
              class="mx-2"
              src="@/assets/mm-logo.png"
              max-height="160"
              max-width="160"
              contain
            />
          </router-link>
        </div>
      </v-toolbar-title>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div
            class="profile-section"
            v-bind="attrs"
            v-on="on"
          >
            <v-btn
              text
              height="100%"
              tile
            >
              <v-row
                no-gutters
                justify="center"
                align="center"
              >
                <div class="mr-4">
                  <v-avatar size="40">
                    <v-img src="@/assets/user.png" />
                  </v-avatar>
                </div>
                <div class="mr-2">
                  <v-row no-gutters>
                    <div>
                      John Doe
                    </div>
                  </v-row>
                  <v-row no-gutters>
                    <div class="location">
                      Stuttgart, Germany
                    </div>
                  </v-row>
                </div>
                <div>
                  <v-container>
                    <v-icon>
                      mdi-menu-down
                    </v-icon>
                  </v-container>
                </div>
              </v-row>
            </v-btn>
          </div>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Something meaningful in here</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />
      <v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
        <v-container>
          <v-autocomplete
            dense
            hide-details
            outlined
            placeholder="Search machine"
            append-icon="mdi-magnify"
            :items="items"
          />
        </v-container>
        <v-btn icon>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-toolbar
      class="navbar"
      dense
    >
      <v-toolbar-items>
        <v-btn
          text
          class="font-weight-bold"
        >
          List
        </v-btn>
        <v-btn
          text
          class="font-weight-bold"
        >
          Dashboard
        </v-btn>
        <v-btn
          text
          class="font-weight-bold"
        >
          Parameters
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        // TODO: Replace with actual machine data in the future
        items: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5', 'Machine 6', 'Machine 7', 'Machine 8'],
      }
    },
  }
</script>

<style scoped>
.profile-section {
  cursor: pointer;
}

.location {
  color: gray;
  font-size: 0.8em;
}

.navbar {
  background: #E5E5E5 !important;
}

.v-btn {
  text-transform: none !important;
}
</style>
