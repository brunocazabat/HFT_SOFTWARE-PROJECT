<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <!-- ADD TEMPLATE CALL FOR SHIFT CREATION -->
    <!-- CONTAINER FOR CREATING SHIFTS -->
    <!-- FIRST CONTAINER WITH MACHINE / SHIFT INFOS AND SELECTION -->
    <v-col cols="12">
      <shift-info-component />
    </v-col>
    <!-- SECOND CONTAINER WITH THE STATE GRAPH -->
    <v-col cols="12">
      <machine-state-chart />
    </v-col>
    <!-- THIRD CONTAINER WITH EFFECIENCY GRAPH -->
    <v-row>
      <!--<v-col cols="12">
        <machine-efficiency-chart />
      </v-col>-->
      <!-- FOURTH CONTAINER WITH COUNTERS GRAPH IO/NIO -->
      <v-col>
        <production-counter-chart />
      </v-col>
      <!-- FIFTH CONTAINER WITH BUG AND MESSAGE HISTORY -->
      <v-col
        cols="12"
        md="12"
      >
        <machine-error-table />
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar.show"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          :color="snackbar.color"
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  import ShiftInfoComponent from '@/components/charts/ShiftInfoComponent'
  import MachineStateChart from '@/components/charts/MachineStateChart'
  import MachineEfficiencyChart from '@/components/charts/MachineEfficiencyChart'
  import ProductionCounterChart from '@/components/charts/ProductionCounterChart'
  import MachineErrorTable from '@/components/charts/MachineErrorTable'
  export default {
    name: 'DashboardView',
    components: { ShiftInfoComponent, MachineStateChart, MachineEfficiencyChart, ProductionCounterChart, MachineErrorTable },

    data: () => ({
      snackbar: {
        show: false,
        color: 'red',
        text: '',
      },
    }),
  }

</script>
