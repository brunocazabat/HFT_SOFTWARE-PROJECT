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
          color="primary"
          icon="mdi-bug"
          icon-small
          title="Bug and Messages History of the {COM1} {#1}"
        >
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            />
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'MachineErrorTable',

    data: () => ({
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Date',
          value: 'date',
        },
        {
          sortable: false,
          text: 'Hour',
          value: 'hour',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Machine Name',
          value: 'machine_name',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Message',
          value: 'message',
          align: 'right',
        },
      ],
      items: [
        {
          id: 1,
          date: '24/01/2022',
          hour: '17:30',
          machine_name: '{COM1}',
          message: 'STOP pressed',
        },
        {
          id: 2,
          date: '22/01/2022',
          hour: '10:55',
          machine_name: '{COM1}',
          message: 'START pressed',
        },
        {
          id: 3,
          date: '20/01/2022',
          hour: '18:35',
          machine_name: '{COM1}',
          message: 'STOP pressed',
        },
        {
          id: 4,
          date: '18/01/2022',
          hour: '16:15',
          machine_name: '{COM1}',
          message: 'START pressed',
        },
        {
          id: 5,
          date: '16/01/2022',
          hour: '10:15',
          machine_name: '{COM1}',
          message: 'STOP pressed',
        },
        {
          id: 6,
          date: '14/01/2022',
          hour: '13:15',
          machine_name: '{COM1}',
          message: 'START pressed',
        },
        {
          id: 7,
          date: '12/01/2022',
          hour: '11:15',
          machine_name: '{COM1}',
          message: 'STOP pressed',
        },
      ],
    }),
  }
</script>

<style scoped>

</style>
