<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >
        <material-card
          icon="mdi-clipboard-outline"
          icon-small
          title="Machines List"
          color="accent"
        >
          <v-skeleton-loader
            v-if="loading"
            type="table"
          />
          <v-simple-table v-else>
            <thead>
              <tr>
                <th>ID</th>
                <th>Status</th>
                <th>Machine Name</th>
                <th>Location</th>
                <th>Lane of Production</th>
                <th>Hall of Production</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="machine in machines"
                :key="machine.machineId"
                @click="goToMachineDetail(machine.machineId)"
              >
                <td>
                  {{ machine.machineId }}
                </td>
                <td>
                  <v-skeleton-loader
                    v-if="machine.loading"
                    class="mx-auto"
                    type="chip"
                  />
                </td>
                <td>
                  <v-skeleton-loader
                    v-if="machine.loading"
                    class="mx-auto"
                    type="text"
                  />
                  <div v-else>
                    {{ machine.machineName }}
                  </div>
                </td>
                <td>
                  <v-skeleton-loader
                    v-if="machine.loading"
                    class="mx-auto"
                    type="text"
                  />
                  <div v-else>
                    {{ machine.location }}
                  </div>
                </td>
                <td>
                  <v-skeleton-loader
                    v-if="machine.loading"
                    class="mx-auto"
                    type="text"
                  />
                  <div v-else>
                    {{ machine.laneOfProduction }}
                  </div>
                </td>
                <td>
                  <v-skeleton-loader
                    v-if="machine.loading"
                    class="mx-auto"
                    type="text"
                  />
                  <div v-else>
                    {{ machine.hallOfProduction }}
                  </div>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </material-card>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar.show"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
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
  import router from '../router'
  import axios from 'axios'

  export default {
    name: 'MachineDetails',
    data () {
      return {
        snackbar: {
          show: false,
          text: '',
        },
        loading: true,
        machineIds: [
          'ZU1', 'CON1',
        ],
        machines: [],
      }
    },

    mounted: function () {
      for (const [i, machineId] of this.machineIds.entries()) {
        axios
          .get('http://localhost:9001/api/machine', { params: { machineId: machineId } })
          .then(response => {
            console.log('Received data for machine ' + response.data.machineId + ':' + JSON.stringify(response))
            this.machines.push(response.data)
          },
          )
          .catch(error => {
            this.snackbar.show = true
            this.snackbar.text = error
          })
      }
      this.loading = false
    },

    methods: {
      getColor: function (color) {
        if (color.includes('OK')) {
          return 'green'
        } else if (color.includes('Error')) {
          return 'red'
        } else {
          return 'orange'
        }
      },
      goToMachineDetail: function (machineId) {
        router.push('/machineDetail/' + machineId)
      },
    },
  }
</script>

<style>
/*.v-chip {*/
/*  width: 100%;*/
/*}*/

/*tr * {*/
/*  cursor: pointer !important;*/
/*}*/
</style>
