import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    data: Object,
    options: Object,
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options)
  },
}
