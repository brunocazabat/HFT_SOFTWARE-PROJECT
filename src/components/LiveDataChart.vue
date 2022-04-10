<template>
  <div class="example">
    <apexcharts
      height="350"
      type="bar"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'
  import axios from 'axios'
  import store from '../store'

  export default {
    name: 'Chart',
    components: {
      apexcharts: VueApexCharts,
    },
    data: function () {
      return {
        chartOptions: {
          chart: {
            id: 'basic-bar',
            animations: {
              speed: 200,
            },
          },
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              distributed: true,
            },
          },
          xaxis: {
            categories: [],
          },
        },
        series: [
          {
            name: 'series-1',
            data: [],
          },
        ],
      }
    },
    mounted: function () {
      this.updateChart()
      window.setInterval(() => {
        this.updateChart()
      }, 5000)
    },
    methods: {
      updateChart: function () {
        axios
          .get('http://localhost:9001/api/shift/stations/by-active-shift', { params: { location: store.get('app/location') } })
          .then(response => {
            console.log(response.data)
            console.log('Stations: ' + response.data.stations.length)
            const stationsArray = response.data.stations.sort(function (a, b) {
              return a.stationId.localeCompare(b.stationId)
            })
            const xaxis = []
            const yaxis = []
            for (var i = 0; i < stationsArray.length; i++) {
              xaxis.push(stationsArray[i].stationId)
              yaxis.push(stationsArray[i].counterQuantity + 1)
            }
            this.chartOptions = {
              xaxis: {
                categories: xaxis,
              },
            }
            this.series = [{
              data: yaxis,
            }]
            console.log('xaxis: ' + JSON.stringify(xaxis))
            console.log('yaxis: ' + JSON.stringify(yaxis))
          })
          .catch(error => {
            console.log(error)
          })
      },
    },
  }
</script>

<style scoped>

</style>
