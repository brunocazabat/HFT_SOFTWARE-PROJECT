<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="4">
        <v-container
          id="regular-tables-view"
          fluid
          tag="section"
        >
          <v-row justify="center">
            <v-col cols="12">
              <material-card
                icon="mdi-clock-plus"
                icon-small
                title="Shift Creation"
                color="primary"
              >
                <v-col
                  cols="12"
                >
                  <v-text-field
                    v-model="shiftId"
                    label="Shift-ID"
                    placeholder="sh_abc_123"
                    hide-details="auto"
                  />
                </v-col>

                <v-col
                  cols="12"
                >
                  <v-btn
                    color="primary"
                    @click="createShift()"
                  >
                    Create Shift
                  </v-btn>
                </v-col>
                <!--shiftId String-->
                <!--workerId String optional-->
                <!--locationName String-->
              </material-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="4">
        <v-container
          id="regular-tables-view"
          fluid
          tag="section"
        >
          <v-row justify="center">
            <v-col cols="12">
              <material-card
                icon="mdi-play-circle"
                icon-small
                title="Start Shift"
                color="primary"
              >
                <v-col
                  cols="12"
                >
                  <v-select
                    v-model="selectedStartShift"
                    label="Select Shift"
                    :items="activeShifts"
                    hide-details="auto"
                  />
                </v-col>

                <v-col
                  cols="12"
                >
                  <v-btn
                    color="primary"
                    @click="startShift(selectedStartShift)"
                  >
                    Start Shift
                  </v-btn>
                </v-col>
                <!--shiftId String-->
                <!--workerId String optional-->
                <!--locationName String-->
              </material-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="4">
        <v-container
          id="regular-tables-view"
          fluid
          tag="section"
        >
          <v-row justify="center">
            <v-col cols="12">
              <material-card
                icon="mdi-close-octagon"
                icon-small
                title="End Shift"
                color="primary"
              >
                <v-col
                  cols="12"
                >
                  <v-select
                    v-model="selectedEndShift"
                    label="Select Shift"
                    :items="activeShifts"
                    hide-details="auto"
                  />
                </v-col>

                <v-col
                  cols="12"
                >
                  <v-btn
                    color="primary"
                    @click="endShift(selectedEndShift)"
                  >
                    End Shift
                  </v-btn>
                </v-col>
                <!--shiftId String-->
                <!--workerId String optional-->
                <!--locationName String-->
              </material-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <!-- FIRST CONTAINER WITH MACHINE / SHIFT INFOS AND SELECTION -->
    <v-col cols="12">
      <v-container
        id="regular-tables-view"
        fluid
        tag="section"
      >
        <v-row justify="center">
          <v-col cols="12">
            <material-card
              icon="mdi-view-dashboard"
              icon-small
              title="Active Shifts LiveData "
              color="primary"
            >
              <live-data-chart />
            </material-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
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
  import { get } from 'vuex-pathify'
  import store from '../../store/index.js'
  import axios from 'axios'
  import LiveDataChart from '../../components/LiveDataChart'

  export default {
    name: 'DashboardView',
    components: { LiveDataChart },

    data: () => ({
      snackbar: {
        show: false,
        color: 'red',
        text: '',
      },
      shiftId: '',
      locationName: store.get('app/location'),
      selectedEndShift: null,
      selectedStartShift: null,
      activeShifts: [],
      Machines: ['{COM1} 1', '{COM1} 2', '{COM1} 3'],
      charts: [{
        type: 'Line',
        color: 'primary',
        time: 'Updated {$last_refreshrequest_time} minutes ago',
        options: {
          axisX: {
            showGrid: true,
          },
          low: 0,
          high: 100,
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              },
            },
          }],
        ],
      },
      ],
    }),

    computed: {
      sales: get('sales/sales'),
      totalSales () {
        return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
      },
    },
    created: function () {
      this.updateShifts()
    },
    methods: {
      createShift: function () {
        if (this.shiftId && this.locationName) {
          axios
            .post('http://localhost:9001/api/shift/new', {}, {
              params: {
                shiftId: this.shiftId,
                locationName: this.locationName,
              },
            })
            .then(response => {
              this.snackbar.text = 'Successfully created shift'
              this.snackbar.color = 'green'
              this.snackbar.show = true
              this.updateShifts()
            },
            )
            .catch(error => {
              this.snackbar.text = 'Error creating shift'
              this.snackbar.color = 'red'
              this.snackbar.show = true
              console.log(error.message)
            })
        } else {
          alert('One or more fields are missing')
        }
      },
      updateShifts: function () {
        axios
          .get('http://localhost:9001/api/shift/distinct/by-location', { params: { name: store.get('app/location') } })
          .then(response => {
            this.activeShifts = response.data.shifts
          })
          .catch(error => {
            console.log('Error updateShifts: ' + JSON.stringify(error))
            console.log(store.get('app/location'))
          })
      },
      startShift: function (shiftId) {
        if (!shiftId) {
          this.snackbar.text = 'No shift selected'
          this.snackbar.color = 'red'
          this.snackbar.show = true
        } else {
          axios
            .patch('http://localhost:9001/api/shift/start', {}, { params: { shiftId: shiftId } })
            .then(response => {
              this.snackbar.text = 'Successfully started shift'
              this.snackbar.color = 'green'
              this.snackbar.show = true
              console.log(response)
            })
            .catch(error => {
              this.snackbar.text = 'Error starting shift'
              this.snackbar.color = 'red'
              this.snackbar.show = true
              console.log(error)
            })
        }
      },
      endShift: function (shiftId) {
        if (!shiftId) {
          this.snackbar.text = 'No shift selected'
          this.snackbar.color = 'red'
          this.snackbar.show = true
        } else {
          axios
            .patch('http://localhost:9001/api/shift/end', {}, { params: { shiftId: shiftId } })
            .then(response => {
              this.snackbar.text = 'Successfully ended shift'
              this.snackbar.color = 'green'
              this.snackbar.show = true
              console.log(response)
            })
            .catch(error => {
              this.snackbar.text = 'Error ending shift'
              this.snackbar.color = 'red'
              this.snackbar.show = true
              console.log(error)
            })
        }
      },
    },
  }
</script>

<style scoped>

</style>
