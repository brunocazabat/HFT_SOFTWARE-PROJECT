<template>
  <v-app id="nodatafound">
    <v-row
      align="center"
      class="pa-4"
    >
      <v-container>
        <v-row>
          <v-col
            sm="6"
            md="6"
            offset-md="3"
          >
            <h2
              class="text-h1 mt-6"
            >
              Oops, No Data Found!
            </h2>
            <v-img
              class="mx-auto"
              src="@/assets/no-data.png"
              max-width="100%"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
  export default {
    name: 'NoDataFound',
    data () {
      return {
        value: String,
      }
    },
  }
</script>
