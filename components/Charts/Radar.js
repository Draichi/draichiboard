import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: {
    data: Object,
    options: Object,
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, {
      scale: {
          ticks: {
            backdropColor: 'transparent',
          },
      },
    })
  },
}
