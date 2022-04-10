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
          icon="mdi-chart-bubble"
          icon-small
          title="Administrator Settings"
          color="accent"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>User Email</th>
                <th>   Role</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="user in userList"
                :key="user.userName"
              >
                <td>{{ user.userName }}</td>
                <td>{{ user.userEmail }}</td>
                <!--<td>{{ user.userRole }}</td>-->
                <td>
                  <v-col
                    class="d-flex"
                    cols="4"
                    sm="6"
                  >
                    <v-select
                      :items="user.items"
                      label="Choose Role"
                      multiple
                    />
                  </v-col>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </material-card>
      </v-col>
    </v-row>
    <v-row
      class="text-center"
    >
      <v-btn
        class="mr-0 mx-6"
        color="#ffffff"
        min-width="200"
        align-v="center"
        rounded
      >
        Cancel
      </v-btn>
      <v-btn
        class="mr-0 mx-6"
        color="primary"
        min-width="200"
        align-v="center"
        rounded
      >
        Save Changes
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'UserDetails',
    data () {
      return {
        userList: [
          {
            userName: 'Sam',
            userEmail: 'sam@xyz.com',
            items: [
              'Administrator',
              'Station Worker',
              'Manager',
              '<<Can Add More Roles>>',
            ],
          },
          {
            userName: 'Bruno',
            userEmail: 'bruno@xyz.com',
            items: [
              'Administrator',
              'Station Worker',
              'Manager',
              '<<Can Add More Roles>>',
            ],
          },
          {
            userName: 'Nishanth',
            userEmail: 'nishanth@xyz.com',
            items: [
              'Administrator',
              'Station Worker',
              'Manager',
              '<<Can Add More Roles>>',
            ],
          },
          {
            userName: 'Helga',
            userEmail: 'helga@xyz.com',
            items: [
              'Administrator',
              'Station Worker',
              'Manager',
              '<<Can Add More Roles>>',
            ],
          },
        ],
      }
    },
  }
</script>
