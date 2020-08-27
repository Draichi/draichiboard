import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    data: Object
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, {
      responsive: true,
      legend: false,
    })
  }
}