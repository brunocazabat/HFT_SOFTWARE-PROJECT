<template>
  <v-container
    id="bugreport"
    fluid
    tag="bugreport"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >
        <material-card
          icon="mdi-chart-bubble"
          icon-small
          title="Submit Bug Report"
          color="accent"
        >
          <v-col
            cols="12"
            md="6"
          >
            <v-textarea
              outlined
              counter
              clearable
              class="centered-input text--darken-3 mt-3"
              label="Bug Description"
              value=""
            />
          </v-col>
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
                Submit Bug
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Bug Report Submitted!
              </v-card-title>

              <v-card-text>
                <br>
                Guid : 12345
              </v-card-text>

              <v-divider />
            </v-card>
          </v-dialog>
        </material-card>

        <material-card
          icon="mdi-chart-bubble"
          icon-small
          title="Bug Reports"
          color="accent"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th>Guid</th>
                <th>Bug Description</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="bug in bugList"
                :key="bug.bugGuid"
              >
                <td>{{ bug.bugGuid }}</td>
                <td>{{ bug.bugDesc }}</td>
                <td>{{ bug.bugDate }}</td>
                <td>{{ bug.bugStatus }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'BugDetails',
    data () {
      return {
        bugList: [
          {
            bugGuid: '1',
            bugDesc: 'Getting internet error',
            bugDate: '24.08.2021',
            bugStatus: 'Resolved',
          },
          {
            bugGuid: '2',
            bugDesc: 'Dashboard not showing correct values',
            bugDate: '04.09.2021',
            bugStatus: 'Not Resolved',
          },
          {
            bugGuid: '3',
            bugDesc: 'Machine Status inaccurate',
            bugDate: '24.08.2021',
            bugStatus: 'Resolution in Progress',
          },
          {
            bugGuid: '4',
            bugDesc: 'Profile Picture not being updated',
            bugDate: '28.08.2020',
            bugStatus: 'Not Resolved',
          },
        ],
      }
    },
  }
</script>
