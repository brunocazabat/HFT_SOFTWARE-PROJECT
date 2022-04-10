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
            <h1 class="h1">
              404
            </h1>
            <h2 class="h2">
              Page does not exist :(
            </h2>
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

  .h1 {
    font-weight: 600;
    font-size: 15rem;
    color: aliceblue;
  }

  .h2 {
    font-weight: 500;
    font-size: 3rem;
    color: aliceblue;
  }

  .btn {
    width: 80%;
    height: 8%;
    margin: 0;
    background-color: aliceblue;
    color: black;
  }
</style>
