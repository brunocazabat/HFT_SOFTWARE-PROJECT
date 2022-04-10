<template>
  <v-app id="bg">
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
            <h3 class="h3">
              Acess Denied
            </h3>
            <h4 class="h4">
              Sorry you do not have permission to view this page.
            </h4>
            <br>
            <router-link to="/">
              <button
                type="button"
                class="btn"
              >
                <b>Return to Login Page</b>
              </button>
            </router-link>
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
#bg {
  background: #363740
}

  .h3 {
    font-weight: 600;
    font-size: 5rem;
    color: aliceblue;
  }

  .h4 {
    font-weight: 500;
    font-size: 2rem;
    color: aliceblue;
  }

  .btn {
    width: 80%;
    height: 18%;
    margin: 0;
    background-color: aliceblue;
    color: black;
  }
</style>
