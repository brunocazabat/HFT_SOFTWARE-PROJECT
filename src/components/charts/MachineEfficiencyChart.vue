<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col cols="12">
        <material-card
          color="primary"
          icon="mdi-chart-bar"
          icon-small
          title="Efficiency Graph of the {COM1} {#1}"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'MachineEfficiencyChart',
  }
</script>

<style scoped>

</style>
