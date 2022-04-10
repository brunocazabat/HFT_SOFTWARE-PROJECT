<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col>
        <material-card
          color="primary"
          icon="IO/NIO"
          icon-small
          title="Productions Trackers/Counters of the {COM1} {#1}"
        >
          <v-row>
            <v-col
              cols="4"
            >
              <material-stat-card title="TRACK {#1}">
                <template #actions>
                  <v-progress-linear
                    color="orange"
                    height="70"
                    striped
                    title="60 %"
                    value="60"
                  >
                    <strong>{{ Math.ceil(60) }}%</strong>
                  </v-progress-linear>
                </template>
              </material-stat-card>
            </v-col>
            <v-col
              cols="4"
            >
              <material-stat-card title="TRACK {#2}">
                <template #actions>
                  <v-progress-linear
                    color="green"
                    height="70"
                    striped
                    value="90"
                  >
                    <strong>{{ Math.ceil(90) }}%</strong>
                  </v-progress-linear>
                </template>
              </material-stat-card>
            </v-col>
            <v-col
              cols="4"
            >
              <material-stat-card title="TOTAL TRACK">
                <template #actions>
                  <v-progress-linear
                    color="yellow"
                    height="70"
                    striped
                    value="75"
                  >
                    <strong>{{ Math.ceil(75) }}%</strong>
                  </v-progress-linear>
                </template>
              </material-stat-card>
            </v-col>
          </v-row>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ProductionCounterChart',
  }
</script>

<style scoped>

</style>
