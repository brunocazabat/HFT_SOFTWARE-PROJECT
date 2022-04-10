<template>
  <v-container>
    <h1>Machine {{ $route.params.machineId }}</h1>
    <div>
      <v-skeleton-loader
        v-if="loading"
        type="image"
      />
      <apexchart
        v-show="!loading"
        ref="chart"
        height="350"
        type="line"
        :options="options"
        :series="series"
      />
    </div>
  </v-container>
</template>

<script>
  import apexCharts from 'vue-apexcharts'

  export default {
    name: 'MachineDetail',
    components: { apexchart: apexCharts },
    data () {
      return {
        loading: true,
        lastDate: 0,
        TICKINTERVAL: 86400000,
        XAXISRANGE: 777600000,
        data: [],
        options: {
          chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            toolbar: false,
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 1000,
              },
            },
          },
          xaxis: {
            type: 'datetime',
            range: this.XAXISRANGE,
          },
          yaxis: {
            max: 100,
          },
        },
        series: [{
          data: [],
        }],
      }
    },
    mounted: function () {
      this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
        min: 10,
        max: 90,
      })
      const me = this
      window.setInterval(function () {
        this.loading = false
        this.getNewSeries(this.lastDate, {
          min: 10,
          max: 90,
        })

        me.$refs.chart.updateSeries([{
          data: this.data,
        }])
      }.bind(this), 1000)

      // every 60 seconds, we reset the data to prevent memory leaks
      window.setInterval(function () {
        this.resetData()
        me.$refs.chart.updateSeries([{
          data: this.data,
        }], false, true)
      }.bind(this), 60000)
    },
    methods: {
      getDayWiseTimeSeries: function (baseval, count, yrange) {
        let i = 0
        while (i < count) {
          const x = baseval
          const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

          this.data.push({
            x, y,
          })
          this.lastDate = baseval
          baseval += this.TICKINTERVAL
          i++
        }
      },

      getNewSeries: function (baseval, yrange) {
        this.loading = false
        const newDate = baseval + this.TICKINTERVAL
        this.lastDate = newDate

        for (let i = 0; i < this.data.length - 10; i++) {
          // IMPORTANT
          // we reset the x and y of the data which is out of drawing area
          // to prevent memory leaks
          this.data[i].x = newDate - this.XAXISRANGE - this.TICKINTERVAL
          this.data[i].y = 0
        }

        this.data.push({
          x: newDate,
          y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
        })
      },

      resetData: function () {
        // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
        this.data = this.data.slice(this.data.length - 10, this.data.length)
      },
    },
  }
</script>

<style scoped>

</style>
